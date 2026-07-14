# HN Reader

[中文](../README.md)

Read Hacker News at your English level.

HN Reader is a daily English reading tool for technology articles. Each story has Easy, Medium, and Hard editions. Its graded-reading model is inspired by [LevelRead](https://levelread.com/).

## Reading levels

- **Easy**: short sentences and common vocabulary.
- **Medium**: more detail in natural modern English.
- **Hard**: the original or the closest available source version.

## Add an article manually

Create a date-prefixed file in `content/articles/`:

```text
2026-07-15-your-article-title.md
```

Use this format:

```md
---
title: Your Article Title
date: 2026-07-15
source_name: Source publication
source_url: https://example.com/article
---

## easy

Easy edition paragraph one.

## medium

Medium edition paragraph one.

## hard

Hard edition paragraph one.
```

Then generate browser data:

```bash
node scripts/build-hn-reader.mjs
```

The newest article appears first in the archive.

## Initialize an article with AI

The source Markdown needs `title` and `source` frontmatter:

```md
---
title: Original Article Title
source: https://example.com/original-article
---

Original article body.
```

Run:

```bash
OPENAI_API_KEY=... node scripts/init-hn-article.mjs path/to/source.md --date 2026-07-15
node scripts/build-hn-reader.mjs
```

`OPENAI_API_KEY` is only needed to generate Easy and Medium. Hard keeps the source text. Review generated content before publishing.

## Content note

Hacker News supplies links and metadata, while article text belongs to the original publisher. Keep source links, respect source-site terms, and review adaptations before publishing them.
