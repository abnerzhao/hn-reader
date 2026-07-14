# HN Reader

[English](docs/README.en.md)

按你的英文水平阅读 Hacker News。

HN Reader 是一个每日英语科技阅读工具：同一篇文章提供 Easy、Medium、Hard 三个版本。产品模式参考 [LevelRead](https://levelread.com/)。

## 阅读难度

- **Easy**：短句和常用词汇。
- **Medium**：保留更多细节，使用自然的现代英语。
- **Hard**：原文或尽可能接近原文的版本。

## 手动新增文章

在 `content/articles/` 创建按日期命名的文件：

```text
2026-07-15-your-article-title.md
```

格式如下：

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

完成后生成前端文章数据：

```bash
node scripts/build-hn-reader.mjs
```

日期最新的文章会显示在归档最前面。

## 使用 AI 初始化分级文章

原始 Markdown 需要包含 `title` 和 `source` frontmatter：

```md
---
title: Original Article Title
source: https://example.com/original-article
---

Original article body.
```

运行：

```bash
OPENAI_API_KEY=... node scripts/init-hn-article.mjs path/to/source.md --date 2026-07-15
node scripts/build-hn-reader.mjs
```

`OPENAI_API_KEY` 仅用于自动生成 Easy 和 Medium。Hard 会保留原始正文；发布前请人工检查生成内容。

## 内容说明

Hacker News 提供的是链接与元数据，文章正文版权属于原始发布者。请保留来源链接、遵守原站条款，并在公开前审核改写内容。
