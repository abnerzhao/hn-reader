import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import { requestOpenRouterJson } from './openrouter-json.mjs';

const root = resolve(import.meta.dirname, '..');
const articlesDir = join(root, 'content/articles');
const hnApi = 'https://hacker-news.firebaseio.com/v0';
const dateIndex = process.argv.indexOf('--date');
const date = dateIndex >= 0 ? process.argv[dateIndex + 1] : new Date().toISOString().slice(0, 10);
const model = process.env.OPENROUTER_MODEL || 'openrouter/free';

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

function limitWords(paragraphs, limit) {
  let remaining = limit;
  const result = [];
  for (const paragraph of paragraphs) {
    if (!remaining) break;
    const sentences = paragraph.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [paragraph];
    const kept = [];
    for (const sentence of sentences) {
      const words = clean(sentence).split(/\s+/).filter(Boolean);
      if (words.length > remaining) {
        if (!kept.length && remaining) kept.push(`${words.slice(0, remaining).join(' ')}.`);
        remaining = 0;
        break;
      }
      kept.push(clean(sentence));
      remaining -= words.length;
    }
    if (kept.length) result.push(kept.join(' '));
  }
  return result;
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
  return /\b(api|sdk|rfc|documentation|docs|reference|tutorial|how to|quickstart|release notes|changelog|specification|benchmark|github|arxiv|paper|preprint|journal)\b/.test(text);
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

async function openRouterJson(prompt, schemaName, schema, validate) {
  return requestOpenRouterJson({
    apiKey: process.env.OPENROUTER_API_KEY,
    model,
    prompt,
    schemaName,
    schema,
    validate
  });
}

async function chooseStory(candidates) {
  const list = candidates.map((candidate, index) => `${index}. ${candidate.story.title}\n${candidate.extracted.text.slice(0, 700)}`).join('\n\n');
  const result = await openRouterJson(
    `Choose one article for an English reading site. The goal is to read interesting, thoughtful work by individual authors found on Hacker News. Strongly prefer independent blogs, essays, and first-person writing with a clear personal voice, lived experience, observation, or original argument. Good themes include AI and technology in work, products, culture, learning, philosophy, history, and social life. A distinctive individual perspective is more important than newsworthiness or technical novelty. Reject papers, arXiv, academic research, API docs, SDK/tutorial/reference material, release notes, product announcements, company press, news reporting, and narrowly implementation-focused posts. Return the best candidate index.\n\nCandidates:\n${list}`,
    'daily_hn_selection',
    { type: 'object', properties: { index: { type: 'integer', minimum: 0, maximum: 7 } }, required: ['index'], additionalProperties: false }
  );
  if (!Number.isInteger(result.index) || result.index < 0 || result.index >= candidates.length) throw new Error('OpenRouter selected an invalid candidate');
  return candidates[result.index];
}

const levelRequirements = {
  easy: '3-4 very short A2-B1 paragraphs, 80-120 words total. Never exceed 120 words. Use common everyday words only. Keep sentences to 12 words or fewer whenever possible. Avoid idioms, abstract nouns, long clauses, jargon, and uncommon verbs. If a technical idea is essential, explain it in plain English.',
  medium: '4-7 natural B2 paragraphs, 250-450 words.',
  hard: '5-10 source-faithful C1 paragraphs, 550-900 words. It must be a close adaptation, not a summary.'
};

async function createEdition(level, title, text) {
  const hasParagraphs = value => Array.isArray(value.paragraphs) && value.paragraphs.every(item => typeof item === 'string' && clean(item));
  const result = await openRouterJson(
    `Create only the ${level} English reading edition from this article. Preserve its facts, claims, examples, and narrative voice. Do not describe the author or say "the writer" or "the article". Do not add facts, headings, notes, or citations.\n\n${levelRequirements[level]}\n\nTitle: ${title}\n\nSource text:\n${text}`,
    `${level}_edition`,
    {
      type: 'object',
      properties: { paragraphs: { type: 'array', items: { type: 'string', minLength: 1 }, minItems: 3, maxItems: 10 } },
      required: ['paragraphs'],
      additionalProperties: false
    },
    hasParagraphs
  );
  const paragraphs = result.paragraphs.map(clean);
  return level === 'easy' ? limitWords(paragraphs, 120) : paragraphs;
}

async function createEditions(title, text) {
  const editions = {};
  for (const level of ['easy', 'medium', 'hard']) editions[level] = await createEdition(level, title, text);
  return editions;
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
