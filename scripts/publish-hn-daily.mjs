import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';

const root = resolve(import.meta.dirname, '..');
const articlesDir = join(root, 'content/articles');
const hnApi = 'https://hacker-news.firebaseio.com/v0';
const dateIndex = process.argv.indexOf('--date');
const date = dateIndex >= 0 ? process.argv[dateIndex + 1] : new Date().toISOString().slice(0, 10);
const model = process.env.OPENROUTER_MODEL || 'openai/gpt-4.1-mini';

if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('Use --date YYYY-MM-DD');

const existingFiles = await readdir(articlesDir);
if (existingFiles.some(file => file.startsWith(`${date}-`) && file.endsWith('.md'))) {
  console.log(`An article already exists for ${date}; skipping.`);
  process.exit(0);
}
if (!process.env.OPENROUTER_API_KEY) throw new Error('OPENROUTER_API_KEY is required');

function clean(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 80);
}

function sourceHostname(url) {
  return new URL(url).hostname;
}

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request failed: ${response.status} ${url}`);
  return response.json();
}

async function existingSources() {
  const sources = await Promise.all(existingFiles.filter(file => file.endsWith('.md')).map(async file => {
    const markdown = await readFile(join(articlesDir, file), 'utf8');
    return markdown.match(/^source_url:\s*(.+)$/m)?.[1]?.trim();
  }));
  return new Set(sources.filter(Boolean));
}

function isTechnicalDocumentation(story) {
  const text = `${story.title} ${story.url}`.toLowerCase();
  return /\b(api|sdk|rfc|documentation|docs|reference|tutorial|how to|quickstart|release notes|changelog|specification|benchmark|github)\b/.test(text);
}

async function extractArticle(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'HN Reader bot/1.0 (+https://github.com/abnerzhao/hn-reader)',
      Accept: 'text/html,application/xhtml+xml'
    },
    signal: AbortSignal.timeout(20_000)
  });
  if (!response.ok || !response.headers.get('content-type')?.includes('text/html')) return null;

  const dom = new JSDOM(await response.text(), { url });
  const article = new Readability(dom.window.document).parse();
  const text = article ? clean(article.textContent) : '';
  if (text.length < 1_800) return null;
  return { title: clean(article.title), text: text.slice(0, 18_000) };
}

async function openRouterJson(prompt, schemaName, schema) {
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://github.com/abnerzhao/hn-reader',
      'X-Title': 'HN Reader'
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_schema', json_schema: { name: schemaName, strict: true, schema } }
    })
  });
  const result = await response.json();
  if (!response.ok) throw new Error(`OpenRouter request failed: ${response.status} ${result.error?.message || JSON.stringify(result)}`);
  const content = result.choices?.[0]?.message?.content;
  if (typeof content !== 'string') throw new Error('OpenRouter returned no text content');
  return JSON.parse(content);
}

async function chooseStory(candidates) {
  const list = candidates.map((candidate, index) => `${index}. ${candidate.story.title}\n${candidate.extracted.text.slice(0, 700)}`).join('\n\n');
  const result = await openRouterJson(
    `Choose one article for an English reading site. Select a thoughtful, accessible piece about AI or technology: its social effects, work, products, culture, philosophy, history, or a novel technical viewpoint. Reject API docs, SDK/tutorial/reference material, release notes, product announcements, company press, and narrowly implementation-focused posts. Return the best candidate index.\n\nCandidates:\n${list}`,
    'daily_hn_selection',
    { type: 'object', properties: { index: { type: 'integer', minimum: 0, maximum: 7 } }, required: ['index'], additionalProperties: false }
  );
  if (!Number.isInteger(result.index) || result.index < 0 || result.index >= candidates.length) throw new Error('OpenRouter selected an invalid candidate');
  return candidates[result.index];
}

const editionSchema = {
  type: 'object',
  properties: {
    easy: { type: 'array', items: { type: 'string' }, minItems: 3, maxItems: 5 },
    medium: { type: 'array', items: { type: 'string' }, minItems: 4, maxItems: 7 },
    hard: { type: 'array', items: { type: 'string' }, minItems: 5, maxItems: 10 }
  },
  required: ['easy', 'medium', 'hard'],
  additionalProperties: false
};

async function createEditions(title, text) {
  const result = await openRouterJson(
    `Create three graded English reading editions from this article. Preserve its facts, claims, examples, and narrative voice. Do not describe the author or say "the writer" or "the article". Do not add facts, headings, notes, or citations.\n\nEasy: 3-5 short B1 paragraphs, 120-220 words.\nMedium: 4-7 natural B2 paragraphs, 250-450 words.\nHard: 5-10 source-faithful C1 paragraphs, 550-900 words. It must be a close adaptation, not a summary.\n\nTitle: ${title}\n\nSource text:\n${text}`,
    'graded_editions',
    editionSchema
  );
  for (const level of ['easy', 'medium', 'hard']) {
    if (!Array.isArray(result[level]) || result[level].some(item => typeof item !== 'string' || !clean(item))) {
      throw new Error(`OpenRouter response has invalid ${level} content`);
    }
  }
  return Object.fromEntries(Object.entries(result).map(([level, items]) => [level, items.map(clean)]));
}

function toMarkdown({ title, url, sourceName, editions }) {
  const section = level => `## ${level}\n\n${editions[level].join('\n\n')}`;
  return `---\ntitle: ${title}\ndate: ${date}\nsource_name: ${sourceName}\nsource_url: ${url}\n---\n\n${section('easy')}\n\n${section('medium')}\n\n${section('hard')}\n`;
}

const seenSources = await existingSources();
const storyIds = await getJson(`${hnApi}/topstories.json`);
const stories = await Promise.all(storyIds.slice(0, 80).map(id => getJson(`${hnApi}/item/${id}.json`)));
const possibleStories = stories.filter(story => story?.type === 'story' && story.url && !seenSources.has(story.url) && /^https?:\/\//.test(story.url) && !sourceHostname(story.url).endsWith('ycombinator.com') && !isTechnicalDocumentation(story));

const candidates = [];
for (const story of possibleStories) {
  if (candidates.length === 8) break;
  try {
    const extracted = await extractArticle(story.url);
    if (extracted) candidates.push({ story, extracted });
  } catch (error) {
    console.warn(`Skipping ${story.url}: ${error.message}`);
  }
}
if (!candidates.length) throw new Error('No suitable unread HN article was found');

const selected = await chooseStory(candidates);
const title = selected.extracted.title || clean(selected.story.title);
const editions = await createEditions(title, selected.extracted.text);
const file = join(articlesDir, `${date}-${slugify(title)}.md`);
await writeFile(file, toMarkdown({ title, url: selected.story.url, sourceName: sourceHostname(selected.story.url).replace(/^www\./, ''), editions }));
console.log(`Published ${relative(root, file)} from HN item ${selected.story.id} using ${model}`);
