import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';

const [inputFile, ...args] = process.argv.slice(2);
const date = args[args.indexOf('--date') + 1];
const slugOverride = args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null;
const root = resolve(import.meta.dirname, '..');
const articlesDir = join(root, 'content/articles');

if (!inputFile || !date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  throw new Error('Usage: OPENAI_API_KEY=... node scripts/init-hn-article.mjs <source.md> --date YYYY-MM-DD [--slug article-slug]');
}
if (!process.env.OPENAI_API_KEY) throw new Error('OPENAI_API_KEY is required');

function parseSource(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error('Source Markdown needs YAML frontmatter and a body');
  const metadata = Object.fromEntries(match[1].split('\n').filter(Boolean).map(line => {
    const separator = line.indexOf(':');
    return [line.slice(0, separator).trim(), line.slice(separator + 1).trim().replace(/^"|"$/g, '')];
  }));
  return { metadata, body: match[2].replace(/!\[\[[^\]]+\]\]/g, '').replace(/^#{1,6}\s+/gm, '').trim() };
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function toMarkdown({ title, source, sourceUrl, easy, medium, hard }) {
  const section = (name, paragraphs) => `## ${name}\n\n${paragraphs.join('\n\n')}`;
  return `---\ntitle: ${title}\ndate: ${date}\nsource_name: ${source}\nsource_url: ${sourceUrl}\n---\n\n${section('easy', easy)}\n\n${section('medium', medium)}\n\n${section('hard', hard)}\n`;
}

const sourcePath = resolve(inputFile);
const { metadata, body } = parseSource(await readFile(sourcePath, 'utf8'));
if (!metadata.title || !metadata.source) throw new Error('Source frontmatter needs title and source');
const sourceUrl = metadata.source;
const hard = body.split(/\n{2,}/).map(paragraph => paragraph.replace(/\n/g, ' ').trim()).filter(Boolean);

const prompt = `Rewrite the source article into two graded English editions. Preserve every central claim and do not add facts. Return JSON only: {"easy":["paragraph"],"medium":["paragraph"]}. Easy: 3-5 short paragraphs, common B1 vocabulary and short sentences. Medium: 4-7 paragraphs, natural B2 English with some original nuance. Do not include headings, notes, markdown, or commentary.\n\nTitle: ${metadata.title}\n\nSource text:\n${hard.join('\n\n')}`;
const response = await fetch('https://api.openai.com/v1/responses', {
  method: 'POST',
  headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ model: process.env.OPENAI_MODEL || 'gpt-5.4-mini', input: prompt })
});
if (!response.ok) throw new Error(`OpenAI request failed: ${response.status} ${await response.text()}`);
const result = await response.json();
let generated;
try {
  generated = JSON.parse(result.output_text);
} catch {
  throw new Error('Model did not return valid JSON. Try again or set OPENAI_MODEL to a model with stronger JSON adherence.');
}
if (!Array.isArray(generated.easy) || !Array.isArray(generated.medium)) throw new Error('Model response needs easy and medium paragraph arrays');

const slug = slugOverride || slugify(metadata.title) || slugify(basename(sourcePath, '.md'));
const target = join(articlesDir, `${date}-${slug}.md`);
await mkdir(articlesDir, { recursive: true });
await writeFile(target, toMarkdown({ title: metadata.title, source: new URL(sourceUrl).hostname, sourceUrl, easy: generated.easy, medium: generated.medium, hard }));
console.log(`Created ${target}`);
