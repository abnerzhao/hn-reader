---
title: I hope you enjoy these
date: 2026-10-06
source_name: vivienhenz.com
source_url: https://www.vivienhenz.com/common-lisp
---

## easy

Common Lisp is the best programming language. LLMs write code quickly now. This changes how fast we build software.

In Common Lisp, code is stored as lists. Programs change instantly when you edit them. Errors do not crash the program. Instead, a debugger shows the full state.

Less code means fewer tokens. Fewer tokens cost less money. More of your program fits in the LLM's memory. This helps the AI make better choices.

Lisp stays stable since 1994. It lets developers build custom domains easily. Even small teams can succeed with it.

## medium

Some people believe certain programming languages are superior to others. If that is true, one must be the absolute best. Common Lisp stands out now that large language models can write code. These models generate code quickly, which changes everything. Previously, writing code was the slow part. Now verifying whether a program works is the main challenge, and rebuilding takes minutes. With Common Lisp, this cycle barely exists because there is no clear gap between reading, compiling, and running. The language is image-based, meaning the program lives directly in memory. A new version of a function appears immediately without restarting anything.

Error handling differs greatly between languages. In most cases, a mistake crashes the program. Developers must read crash logs and rerun the code. In Common Lisp, a program does not crash. Instead, it stops and opens a debugger displaying the full stack and variables. The developer can direct the model to the debugger, and it fixes the issue and resumes execution. This approach is unique to Common Lisp among mainstream options.

Code in Common Lisp is structured as lists. For example, (+ 1 2) performs addition but is also a list containing the symbols plus, one, and two. This same list form is used to store data, so the language treats code and data equally. Consequently, programs can transform each other effortlessly. One program might convert (+ 1 2) into (* 1 2) and run it instantly. Such transformations are called macros. They allow developers to extend the language itself. With macros, programmers can build specialized languages for particular domains.

Lisp programs are typically far more concise than those in other languages. Macros help abstract repetitive patterns, drastically reducing total length. Shorter code requires fewer tokens, lowering expenses for large language models. Moreover, more of the program fits inside the model's context window. When the entire codebase is visible to the model, it grasps intentions better and makes smarter decisions. This prevents bugs caused by modifying parts of the code without seeing the rest. Common Lisp remains an ANSI standard unchanged since 1994. Its stability supports scenarios where users modify products independently.

Although fewer people currently know Lisp, the quickest learners adapt rapidly. Choosing Common Lisp for new projects yields faster development and stronger outcomes.

## hard

Would you agree that some programming languages are superior to others? If you do, then one of them must be the best, and that language is Common Lisp, particularly now that large language models can generate code. LLMs produce code at remarkable speed, which alters the development balance because writing code used to be the bottleneck. Today the limiting factor is determining whether a program works, and before that assessment can occur the program must be rebuilt, a process that can consume several minutes. When humans authored code, the compilation delay was negligible compared to the time spent writing, but now the length of the feedback loop dictates how quickly a system can evolve. In Common Lisp the loop virtually disappears because there is no genuine separation between read‑time, compile‑time and runtime (Graham).

The language is image‑based: a program exists as a live image in memory, so supplying a new definition of a function instantly supersedes the old version without any restart. In most languages an error terminates the execution, forcing an LLM that is assisting development to parse crash logs, modify the source and relaunch the program. In Common Lisp an error merely invokes a debugger that presents the full stack trace together with all variable bindings; the LLM can be directed at that debugger, apply its correction and resume execution uninterrupted. To the best of my knowledge Common Lisp is the sole mainstream language offering this combination of properties.

Lisp stands for List Processing, and in Common Lisp every fragment of code is itself a list. The expression (+ 1 2) both computes the sum of two numbers and represents the list containing the symbol + followed by the numbers 1 and 2. Because the language manipulates lists uniformly, the same data‑handling operators that work on ordinary structures also operate on code. Consequently a program can receive another program as data, transform it—for instance turning (+ 1 2) into (* 1 2)—and execute the result immediately. This homoiconicity enables macros: functions that accept code, produce new code and splice it in place of the original. By supplying new syntactic forms, a macro lets the programmer enlarge the language itself, gradually shaping a dialect that mirrors the problem domain.

When a programmer can extend the language, they do not merely write a program; they craft a domain‑specific language and then implement the solution within it. This matters increasingly because a program’s value derives from the opinions encoded in it. We are moving toward a world where software vendors expose their products to user modification, a task made trivial by LLMs. If a vendor supplies a well‑designed opinionated domain language for its offering, every user‑generated extension will inherit those opinions, yielding artifacts that fit the product rather than corrupt it. Consider an enterprise resource‑planning system: each organization tailors it to its own workflows. If the ERP is expressed in its own domain language, an LLM can be asked to effect a change directly in that language; the modification will naturally respect the underlying assumptions, preserving integrity while reducing effort.

Beyond qualitative advantages, Common Lisp yields tangible efficiency gains. Macros allow recurring patterns to be abstracted into the language, so programs become markedly more concise. In my own projects the Common Lisp versions are typically six to seven times shorter than equivalent Python implementations. For LLMs brevity translates into fewer tokens, and tokens are the unit of cost; consequently development expenses drop. Moreover, a compact program fits more readily into an LLM’s context window, granting the model a holistic view of the intent and reducing the likelihood of localized, context‑blind edits that introduce bugs.

Common Lisp is an ANSI standard that has remained unchanged since 1994, a stability I regard as a virtue. When users are empowered to alter a product, an immutable language foundation guarantees that their extensions will not be broken by future language shifts. The ecosystem does exhibit a smaller library footprint—Quicklisp hosts a few thousand projects compared with npm’s millions—but this is not a detriment. Modern software often relies on massive dependency trees that are frequently compromised; avoiding such sprawl eliminates a class of security risks. When a needed library is missing, an LLM can synthesize the required component or port an existing one, and current models demonstrate strong proficiency at code translation.

A frequent objection is the scarcity of engineers versed in Common Lisp. Yet building a successful enterprise hinges on hiring individuals who excel at learning, not on those who already know a particular stack. In interviews one can simply require candidates to acquire Common Lisp on the spot; the speed at which they grasp it reveals their aptitude for continual growth, and those who thrive will likely deepen their expertise over time. In light of the foregoing, the next time you embark on a programming endeavor, choose Common Lisp.
