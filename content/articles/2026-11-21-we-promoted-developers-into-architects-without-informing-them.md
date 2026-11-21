---
title: We promoted developers into architects without informing them
date: 2026-11-21
source_name: manidoraisamy.com
source_url: https://manidoraisamy.com/developer-to-architect.html
---

## easy

My colleague used AI to log new installs for our Google Forms addon. He wanted each user's email and ID. The code made many calls to servers. The welcome screen took 15 seconds to open.

A good architect logs only the time of install. Or show the screen first and log the email later. AI will not object. It does exactly what you ask. This makes slow apps.

Your new job is architect. You must design the data plan first. You must tell AI what to do and check its work. Object to rules that slow the app. Stop missing coding. You were promoted. Nobody told you.

## medium

Yesterday, I was debugging a performance problem with our Google Forms add-on. A colleague had used AI to write logging code to track new installs every week. Tracking customers is important, but AI created several try/catch blocks: get the email, then the user ID, then log an error if both failed. Each line makes multiple API calls to Google. Because logging ran first after installation, the welcome screen took 15 seconds to load.

A senior developer or architect who knows about hidden API calls would act differently. They would log only the installation timestamp and tell marketing they cannot send follow-up emails from installation alone. Or, if marketing needs the email, they would show the welcome screen first and log it asynchronously while the user watches. But calling a server from

## hard

Yesterday, I was debugging a performance problem with our Google Forms addon. It turned out my colleague had vibe coded the logging part so that he could monitor the new installs every week. Monitoring new customers is the most important part of running a business, so he is absolutely right to do that. The trouble is that he was logging the user's email, and Google has severely restricted how much detail you can get about the user since last December. So AI had written a series of try/catch statements: first, try to get the email if the user gave consent to share it during installation; if that fails, try to fetch his user ID; and if that also fails, log an error saying the user has installed, but we don't know his email or user ID.

Each of these is a single line of code, but internally every one of them makes multiple API calls to Google's servers. And because the logging was the first thing to execute after installation, the welcome screen took 15 seconds to load. So what is the right code for this?

If you are a senior developer or architect who understands the number of API calls hiding behind each method, you would have logged just the timestamp of the install instead of trying to fetch the email or user ID, and told the marketing team they won't be able to send the follow-up email based on installation alone. Or, if marketing really wants the user's email on install, you would have shown the welcome screen first and logged the email or user ID asynchronously from the browser, while the user is looking at the welcome screen. But calling your server from the addon's welcome screen might require your server to bypass security and log an unauthenticated payload.

In other words, your job as an architect is to push back on requirements that can slow down the app, or to find a way around the performance and security issues by making it async or accepting a reasonable hack.

Why won't AI push back? AI is great at writing code, but it doesn't know whether you are launching the app or already have millions of users, and it needs that context to make the right architecture call to log a timestamp versus an email. It is also sycophantic and tries to execute your requirements exactly without pushing back, which means you end up with a slow app that takes 15 seconds to load a static welcome screen. Essentially, if you generate code by specifying your requirements instead of specifying your architecture, AI will decide the architecture on your behalf. It is so paranoid about security that it will never write code to accept an unauthenticated payload. Even if you write it yourself, it will rewrite it into an authenticated payload and screw up performance or force users to sign in again on your app.

Your new job is to architect. AI coding tools are tuned to implement your functional requirements and two non-functional requirements, namely security and backward compatibility, to avoid breaking your app. This invariably leads to architecture that trades off performance for security and slows down the app, and to multiple versions of datamodel design with redundant tables, columns and code.

That means you define the architecture, design the datamodel first, and ask AI to code within that constraint. Every time you give a requirement that changes your architecture or design, the coding tools have to ask you before changing it, instead of changing it on their own. You have to tell it when it needs to be backward compatible, so it is ok to keep multiple versions of logic or database tables, and when to delete the old logic and tables and keep a single version for maintainability.

If you are an architect who is used to designing the datamodel, delegating the implementation to developers and then reviewing their code to see if they have implemented it correctly, this should feel natural to you. But the problem is that today we have taken developers who were great at coding and moved them into an architect's job. They see that the job they love, coding, is now completely done by AI, but nobody has told them about the new job of pushing back on requirements, designing the datamodel, constraining AI to their architecture and reviewing that it falls in line. This is the reason for all the confusion and hate among developers about vibe coding.

In our case, the right fix is simple: log the timestamp, show the welcome screen first and tell marketing what they can't get on install. But AI will never make that call for you, because it doesn't know your users and it won't push back on your requirements. That is the architect's job. If you are a developer, the coding job is going away, but that doesn't mean your job is going away. Non-developers who don't understand architecture and design will end up with bad performance and unmaintainable database tables. So stop missing the coding and become an architect. Learn to push back on requirements, design the datamodel, constrain AI to it and review the code the way an architect reviews a developer's code. You got promoted. Nobody told you, so I am telling you.
