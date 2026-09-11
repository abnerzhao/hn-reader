---
title: Nine coding harnesses vs. your laptop | Notion
date: 2026-09-11
source_name: nasutton.notion.site
source_url: https://nasutton.notion.site/Nine-coding-harnesses-vs-your-laptop-3d139990182b80d59fa3cf500f0450ba?pvs=74
---

## easy

Coding harnesses often fail on laptops. They were designed for fast cloud servers. Local models run much slower. Waiting becomes very long. Users feel stuck.

Large system prompts cause huge delays. Reading them takes many seconds. For example, 2,008 tokens means twenty-two seconds. Small context windows also limit output. Both problems hurt local use. Speed drops dramatically.

Some harnesses work well on local machines. Others struggle with long prompts. Pick the right tool for your needs. Check cache reuse.

Chad works well on local hardware. He uses efficient code. Other harnesses like pi may lag. Choose based on your laptop power.

## medium

If you have ever considered swapping the API calls your coding harness makes for a local model, you have probably experienced disappointment. A quick benchmark might suggest high token speeds, but the actual development experience is wildly variable. You might wait minutes for a response, only to have the process stall halfway through. This is not your fault; most coding harnesses were simply not built with a local model in mind. Testing what happens when you replace a data center with localhost reveals a significant mismatch in tool design.

Most harnesses work against localhost in three main ways. First, large system prompts and tool schemas create a bottleneck. On a laptop reading at 90 tokens per second, every 1,000 tokens in a prompt means about 11 seconds of waiting before the model even starts writing. For example, the Opencode harness used an 18,000-token prompt, leading to a 226-second delay, while the leaner pi harness managed 22 seconds. Second, these large prompts consume a large portion of the model's limited context window. On a typical laptop, you might have 32,000 tokens for work, but Opencode left only 44% for actual tasks, while pi left 94%. Third, harnesses make numerous side requests that overwhelm a local machine, which is both client and server. In one test, Opencode and Crush were 'busy' over 100% of the time, queuing requests on a single GPU.

To measure this, nine harnesses were put through eight programming exercises on the same M4 MacBook Pro running a local model. The results showed clear performance tiers. Lean and stable harnesses like pi, mini-swe-agent, and Chad had short system prompts and high cache reuse, working efficiently out of the box. A second group, including dsh, cline, codex, and goose, had heavier prompts but remained disciplined once started. The final group, Crush and Opencode, were extremely heavy to start, with wait times of three to four minutes before any activity. Chad, a harness optimized for local models, performed the best overall, completing all tasks with no timeouts in one configuration.

The design choices of heavier harnesses make sense for their original environment, where prefill is virtually free. An 18,000-token system prompt in Opencode is helpful for frontier models behind an API. Similarly, the 26 tool schemas in Crush are manageable with a 200,000-token context and instant prefill. However, at local speeds, these advantages become major liabilities. The evidence suggests that for local model use, a harness with a trim system prompt and efficient cache management, like Chad, is not just an alternative but a necessity for a usable experience.

## hard

Most coding harnesses were designed for cloud infrastructure, not local deployment, which creates significant friction when developers attempt to replace distant API calls with a laptop-based model. The development experience becomes highly inconsistent, often resulting in agonizing waits before any meaningful output appears. Users frequently encounter moments of frustration where the interface halts mid-generation, leaving them uncertain whether their query has even begun processing.

One primary obstacle stems from excessive system prompts and elaborate tool schemas that consume valuable context capacity before any actual computation occurs. When a laptop processes a prompt at roughly ninety tokens per second while generating approximately ten tokens per second during completion, reading a thousand-token system instruction alone demands nearly eleven seconds of idle waiting. In the pi harness configuration, this cumulative load reaches twenty hundred eight tokens for Qwen 3.8 27B, translating to twenty-two to two hundred twenty-six seconds of stagnation—an unbearable delay compared to the sub-second responses achievable on cloud GPUs.

Context window limitations further compound these challenges, as the available memory space shrinks dramatically after the initial system prompt is consumed. With a typical thirty-two thousand token budget, the pi harness retains only ninety-four percent of usable capacity for practical reasoning, while the opencode harness loses forty-four percent to system overhead. This reduction forces harnesses to prioritize stability over efficiency, leading to queued operations or redundant prefill cycles that degrade overall throughput.

The third major failure point involves side requests that overwhelm local hardware resources. Traditional architectures allow unlimited parallel queries to external servers, but when the laptop serves as both client and server, concurrent requests trigger cascading delays. The opencode harness exemplifies this problem, firing thirty-three separate side requests within a single session, causing the model to remain occupied more than one hundred fifty percent of wall-clock time. Similarly, crush generates sixteen thousand two hundred sixty-three tokens across multiple sessions, consuming nearly two hundred seconds of compute time before producing any substantive answer.

Performance outcomes reveal distinct categories among current implementations. The pi harness demonstrates remarkable efficiency with a one-point-one seven thousand-one hundred seventy-one token wait followed by rapid generation at three point six seconds per turn, achieving ninety-six percent cache reuse. Mini-swe-agent follows closely, completing turns in two point one seconds with ninety-one percent reuse. Chad operating through llama.cpp achieves comparable speed at twenty-five point six seconds per turn while maintaining ninety-nine percent cache retention. Conversely, heavy-hitters like dsh, cline, codex, and goose exhibit substantially slower turn initiation around eighteen to twenty-eight seconds per step, though they compensate with near-perfect cache utilization.

Opencode presents a particularly instructive case study, allocating eighteen thousand four hundred forty-six tokens to system preparation and generating results in two hundred twenty-five point seven seconds. Despite this substantial investment, only forty-four percent of context remains available for productive work, forcing the harness to operate under severe resource constraints. The chad implementation running directly through MLX engines shows marginally faster turn times at twenty-five point six seconds per step, yet still maintains robust cache reuse at ninety-nine percent.

These findings suggest that future harness design must account for local computational realities rather than assuming infinite bandwidth and memory. Optimizations should include aggressive system prompt compression, strategic caching strategies, and careful management of concurrent request handling to prevent the latency spikes observed in current implementations.
