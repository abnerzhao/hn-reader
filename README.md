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

## 自动发布

GitHub Actions 每天北京时间 09:10 从 Hacker News Top Stories 中挑选一篇未收录的外链文章。流程会排除 API 文档、SDK 教程、发布说明及狭窄的实现类文章，优先选择 AI 与技术领域的思考、趋势、产品、文化或社会影响等有观点的内容。

脚本提取正文后通过 OpenRouter 生成 Easy、Medium、Hard 三个版本，并自动提交文章和前端数据。

在仓库 `Settings → Secrets and variables → Actions` 配置：

- `OPENROUTER_API_KEY`：Repository secret，必填。
- `OPENROUTER_MODEL`：Repository variable，可选。默认 `openai/gpt-4.1-mini`；所选模型需要支持结构化输出。

可在 Actions 页面手动运行 `Publish daily HN reading`。自动生成内容仍建议在公开前审核。

## 内容说明

Hacker News 提供的是链接与元数据，文章正文版权属于原始发布者。请保留来源链接、遵守原站条款，并在公开前审核改写内容。
