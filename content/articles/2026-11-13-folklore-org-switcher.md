---
title: Folklore.org: Switcher
date: 2026-11-13
source_name: folklore.org
source_url: https://folklore.org/Switcher.html
---

## easy

I left Apple in 1984. My first product was Thunderscan, a low-cost Mac scanner. I made it with a small company called Thunderware.

While I showed it to Byte magazine, John Markoff switched programs fast on his IBM PC. He used Memory Shift. I saw a simple way to do this on the Mac.

Tom Petrie made me promise to finish Thunderscan first. Microsoft wanted me to write the switcher. Bill Gates offered $40,000. I said I wanted to write it on my own.

I built a prototype in 20 hours. It switched MacPaint, MacWrite, and MacDraw. Bud Tribble said the switch was too fast. We added scrolling animation. Apple bought Switcher for $100,000. I finished it in March 1985.

## medium

In March 1984, I took leave from Apple and built Thunderscan, a low-cost Macintosh scanner, with Thunderware. By October it was nearly done. On October 11, Tom Petrie and I showed it to John Markoff of Byte magazine. Markoff used an IBM PC running Memory Shift, which switched between applications quickly. Watching him, I thought I could build the same thing for the Macintosh. The new 512K Mac had just arrived, and I saw a simple way to run multiple applications

## hard

After completing the Thunderscan project in late November 1984, I turned my attention to developing an application switcher that would address the memory limitations of the 512K Macintosh. The core challenge lay in designing a mechanism that could rapidly switch between multiple applications without causing system instability or excessive memory fragmentation. I considered two architectural approaches: a single heap that would minimize fragmentation by consolidating all application data, or separate heap zones that would provide better isolation between applications. Ultimately, I chose the separate heap zones strategy, recognizing that the system software retained application-specific global variables in low memory that required careful management during context switching. This decision demanded a precise inventory of variables that needed swapping, many of which were subtle and dependent on specific usage patterns across different applications.

The implementation required meticulous examination of low memory locations to determine exactly which variables needed to be swapped during context switches. While obvious variables were straightforward, others were more nuanced and required understanding how each application utilized its allocated space. I recognized that my initial design would not be perfect, but I was confident in my ability to debug inevitable problems once I observed the applications failing in practice. The process involved iterative refinement, with each failure revealing new constraints that needed to be addressed in the memory management layer, particularly the need to swap system software variables that resided in low memory to maintain application-specific global state across context switches.

In early December 1984, I began developing what I called Switcher, a proof of concept that would demonstrate the core functionality before committing to a full implementation. The initial prototype was hardwired to run MacPaint, MacWrite, MacDraw, and the Finder, with the scrolling animation disabled to maximize the visual impact of rapid application transitions. I worked for twenty hours straight to write the core program, extending essential system calls such as GetNextEvent, Launch, and ExitToShell to enable the switching mechanism. The hardest part was navigating the low memory locations and determining precisely what needed to be swapped, a task that required careful analysis of each application's memory footprint.

The opportunity to develop Switcher under contract to Microsoft arose during a strategic visit to Seattle in January 1985. Jeff Harbers, the manager of Microsoft's Macintosh applications team, approached me with a project that Microsoft considered highly valuable for the Macintosh platform. Although I was still completing the Thunderscan alpha release, I accepted the invitation to fly to Seattle and meet with the team. Neil Konzen, Microsoft's main systems programmer on the Macintosh, joined the discussion and presented a design using a single heap approach, which I had previously rejected in favor of separate heap zones. I explained my alternative approach and expressed willingness to consider both options, though I intended to give the single heap design more thought before making a final decision.

After the meeting with Bill Gates, I returned to Palo Alto and began developing a proof of concept prototype that would run the core applications without requiring a user interface. The program was hardwired to execute MacPaint, MacWrite, MacDraw, and the Finder, and I spent twenty hours continuously writing the core code. The most challenging aspect was traversing all low memory locations to identify what needed to be swapped, a task that initially caused frequent crashes but gradually stabilized as I identified and resolved various memory management issues. This proof of concept demonstrated that the switching mechanism was feasible and provided the confidence needed to proceed with a more complete implementation.

In early January 1985, I received a phone call from Guy Kawasaki, one of Apple's third-party evangelists, who informed me that Apple was interested in acquiring Switcher. Kawasaki was assigned to facilitate the purchase and arranged a demonstration for Steve Jobs. I entered Steve's office with trepidation, aware that Switcher might be worth at least a quarter of a million dollars to Apple. I was simultaneously proud of the program's capabilities and curious to see how Steve would respond. During the demonstration, I showed rapid switching between MacWrite, MacPaint, and MacDraw, and then activated the scrolling animation to create a smooth transition effect. Steve Jobs enthusiastically endorsed the project, stating that Apple would bundle Switcher with the Macintosh.

However, when Steve asked about the program's value, I was confronted with a demand for $100,000. I initially hesitated, believing the program was worth considerably more, but Steve's
