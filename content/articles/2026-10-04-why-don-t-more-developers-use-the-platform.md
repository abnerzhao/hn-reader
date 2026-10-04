---
title: Why don’t more developers “use the platform”?
date: 2026-10-04
source_name: nolanlawson.com
source_url: https://nolanlawson.com/2026/10/03/why-dont-more-developers-use-the-platform/
---

## easy

For years, people told web developers to use browser tools. I did too. Why make code yourself if the browser can do it?

Browsers were slow to add new features. Libraries solved missing parts. Developers used tools they knew. Good help pages made libraries easier to pick.

Some developers like building things. They build it to learn. Not using it can come from not knowing the system well.

This happens on other systems too. I once built a slow tool for data. The system already did it better. Smart code tools may help or hurt.

## medium

Advocates for web standards have urged developers to use the platform instead of building custom solutions. The claim is that browsers perform tasks better than anything written in JavaScript. I challenge this perspective. Historically, browsers struggled to keep pace with the growing web ecosystem. Libraries like jQuery filled critical gaps while browsers added new APIs. Users often waited for outdated versions to become obsolete. Today, modern browsers are largely current, yet decades ago the web was chaotic. Rolling your own code was a sensible choice during that period. Familiarity also drives decisions. Developers searching npm expect ready-made components. Finding a simple solution for 'sticky positioning' proves difficult, leading many to rely on external libraries.

Documentation reinforces this trend. NPM packages provide extensive guides and tutorials, while official platform documentation remains scattered across blogs and forums. Sites like MDN and web.dev have become primary sources, unlike the fragmented state of platform resources. This makes it easy to adopt established libraries rather than explore native options.

Many developers resist using the platform simply because they want quick answers. Those who enjoy solving problems personally find building their own code more satisfying. Creating a modal dialog feels rewarding—understanding every detail builds confidence. The process teaches valuable skills and often leads to unique implementations. Eventually, developers may create their own libraries and publish them to npm. This differs from immediately adopting existing solutions.

My experience illustrates this dynamic. Years ago, I worked on IndexedDB and WebSQL for PouchDB, gaining confidence to contribute to W3C standards. Without the need to fill platform gaps, I might not have pursued such deep expertise. Beyond web development, similar patterns appear elsewhere. At my workplace, we debated how to store large JSON data. One colleague compressed data before saving, while I used a separate key-value store. Both approaches proved inferior. ClickHouse handled compression efficiently and performed better as a columnar database. After testing and comparing approaches, I realized our initial design was flawed—a lesson applicable across domains.

AI coding introduces new considerations. Optimistically, LLMs could select exact platform APIs based on clear instructions, potentially reducing errors. The IKEA effect vanishes when developers aren't writing code themselves. Pessimistically, AI might duplicate existing code without proper testing, creating unnecessary complexity. I hope future advances favor the optimistic path, but I cannot predict with certainty. Understanding platform layers remains vital for maintaining clean, efficient systems.

## hard

For years, advocates for web standards, performance, and accessibility have implored web developers to 'use the platform', arguing that building anything oneself in JavaScript is unnecessary when the browser can provide the functionality out-of-the-box. Their claim rests on two main pillars: first, historical inertia—browsers spent decades catching up to the surrounding ecosystem, filling gaps with libraries like jQuery while waiting for legacy versions such as IE6 to become obsolete; second, familiarity bias, where developers accustomed to searching npm for pre-built React components default to those solutions regardless of the actual problem, assuming that a package named 'sticky positioning' exists rather than learning that the native CSS property suffices.

The persistence of this skepticism stems largely from cognitive shortcuts: experienced developers gravitate toward established npm packages because their documentation is abundant and curated through resources like MDN and web.dev, whereas the underlying platform documentation remains fragmented across blogs, Stack Overflow threads, and specialized sites. When a developer encounters a requirement that isn't covered by a popular library—such as implementing proper accessibility features for a modal dialog—they may assume that constructing the solution from scratch is either too cumbersome or fundamentally flawed, despite the fact that many modern APIs like <dialog> were originally created precisely to address these exact pain points.

Yet another powerful driver behind resistance to leveraging the platform is the intrinsic enjoyment developers derive from creating their own implementations. Building a modal dialog from scratch offers a tangible sense of accomplishment, allowing creators to experiment with animations, custom themes, and optional controls while simultaneously mastering low-level concepts like z-index layering, focus management, and keyboard interactions. What begins as a learning exercise quickly evolves into a personal project that feels more rewarding than simply adopting a ready-made component, and the resulting codebase often becomes a valuable reference for others seeking to understand how the platform operates under the hood.

I personally witnessed this dynamic firsthand during my early career, when I spent several years developing tooling for IndexedDB and WebSQL as part of the PouchDB project—a period that ultimately equipped me with the deep expertise necessary to contribute meaningfully to W3C specifications. Had I not been forced to confront gaps in the platform's capabilities, I doubt I would have pursued such specialization, suggesting that the very act of building from scratch can serve as a catalyst for professional growth and domain mastery.

The reluctance to engage directly with the platform is frequently rooted in a lack of fundamental understanding, particularly regarding CSS internals. Because CSS has historically resisted intuitive explanations—concepts like float behavior, the clearfix hack, and min-width normalization remain counterintuitive—I observe that many developers opt for imperative JavaScript solutions instead of wrestling with the language's quirks. This avoidance pattern extends beyond the web; analogous situations arise in mobile development where engineers replicate database schemas in application code rather than trusting the underlying storage abstraction, or in game development where physics engines are bypassed in favor of hand-crafted collision detection systems.

Looking ahead, the emergence of advanced coding assistants introduces new tensions around this debate. Optimistically, LLMs possess encyclopedic knowledge of specific platforms and can dynamically select the most appropriate API based on nuanced requirements, potentially eliminating the need for manual implementation while reducing maintenance overhead. However, pessimistically, these same models may exacerbate fragmentation by generating redundant, non-standard code paths—recreating utility functions that already exist—thereby inflating the volume of bespoke solutions that diverge from the platform's intended design.
