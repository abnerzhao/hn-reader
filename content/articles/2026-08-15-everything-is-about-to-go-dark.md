---
title: Everything is about to “go dark”
date: 2026-08-15
source_name: blog.cryptographyengineering.com
source_url: https://blog.cryptographyengineering.com/2026/08/14/everything-is-about-to-go-dark/
---

## easy

AI is changing how software works.

Smartphones store private data now.

This makes phones hard for police to read.

Police wanted special keys to open phones.

Hackers found other ways to break these locks.

Recently, AI models found many software bugs.

This trend continues fast.

Old hacking methods will fail soon.

Law enforcement might

## medium

I recently returned from Usenix Security in Baltimore. My days have been filled with conversations about Baltimore and AI. Today I must speak about AI. Specifically, I worry that artificial intelligence will make software too secure. This sounds harmless at first, but it has a dangerous consequence. U.S. intelligence and law enforcement agencies may soon become unable to access digital information. This loss will affect not only these agencies but also anyone who values computer security and privacy.

To understand this situation, we need to look at recent history. The Wire television series showed police wiretapping drug dealers using old technology. That scenario seemed plausible in 2002, but within ten years it became outdated. Smartphones changed everything. They could store data and send messages. Starting in 2010, Apple began encrypting iPhone storage with keys from user passcodes. Then Apple added end-to-end encryption for text messages. By 2016, WhatsApp had billions of users using this encryption. These changes gave law enforcement powerful new tools.

In 2014, the FBI launched 'Going Dark,' demanding that phone companies provide access to encrypted data. A famous case involved Apple refusing to help the FBI access a shooter's iPhone. The case ended when another company said they could hack the phone instead. This shifted the balance. Law enforcement stopped pushing for backdoors after seeing alternative methods. However, hackers still find ways around security flaws.

Recently, AI has changed the game. In April, Anthropic released a model called Mythos that excelled at finding software vulnerabilities. The U.S. government tried to block its export, limiting access to American agencies. Other companies like OpenAI and Chinese labs developed similar vulnerability-finding models. These models discover serious flaws faster than humans can fix them. Major software projects are rebuilding their development processes to include AI-based scanning.

This creates problems for law enforcement. Since 2010, they faced difficulties accessing encrypted devices. Now, without easily exploitable bugs, they may face another 'going dark' period. Experts warn that intentional backdoors will return. Companies will redesign systems to allow special access. Foreign governments might stop relying on American software, giving them opportunities to attack U.S. communications. This represents a risky self-sabotage during a critical time for national security.

## hard

I’m coming down from spending a few days at Usenix Security, right here in my hometown of Baltimore. This means that my days have been taken up with two kinds of conversation: first, explaining to colleagues why Baltimore isn’t actually like The Wire. And second, trying not to talk about AI. Here I’m going to break that second rule. I have many worries about what AI means for our field, for various definitions of “field”. But in this post I want to focus on just one thing I’ve started worrying about, and it’s a perverse thing: specifically, I’m concerned that AI is going to make software much too secure.

While that doesn’t sound so bad on the surface, there’s a consequence to this. I mean something very specific: I’m concerned that U.S. intelligence and law enforcement agencies are about to go dark, meaning: that they’re going to suddenly lose a huge portion of their capability. And that this isn’t going to be simply a problem for those agencies, but also for those of us who value computer security and privacy in general.

To explain how we got here, we need to talk about recent history. This actually gives me a real excuse to reference The Wire, just because it’s a perfect snapshot of what electronic surveillance looked like way back in 2002. If you’ve seen the first season, you’ll recall that it’s about cops wiretapping drug dealers who use payphones and burners. The mobile phones in the show are relatively new technology for the time, but from a technological perspective nothing in this scenario would have shocked a cop who jumped forward from, say, 1989. In less than a decade from the premier, everything in those episodes became totally quaint. The change began in the late 2000s, thanks to the rise of smartphones and texting. Because smartphones can actually store data as well as conveying it, the contents of those phones quickly became a useful new source of law‑enforcement capability. Or they were until 2010, when Apple began encrypting iPhone storage using a key derived from the user’s passcode (Android phones followed shortly thereafter). The next year, Apple deployed end‑to‑end encryption in iPhone text messages. By 2014, a tiny texting startup named WhatsApp had gathered 600 million users worldwide. By 2016 those users, now nearly a billion strong, were all using default end‑to‑end encrypted messaging and calls. These two trends — the move from calls to texts, and texts to encrypted data — happened very rapidly.

The FBI and law enforcement agencies were not insensitive to what was happening. In 2014, Director Comey announced an initiative called Going Dark, which would launch a “national conversation” about what providers could do — or be compelled to do — to make these new communications media legible to law enforcement and counterintelligence. In 2016, the agency quit talking and took their theory to court. When a terrorist attack left the FBI holding a shooter’s locked iPhone, the agency ordered Apple to give them access. The company refused. What broke the stalemate — and, to some extent, ended “Going Dark” itself — was something that neither the FBI nor Apple expected. An outside company announced that there was no need for Apple’s assistance: they could simply hack the phone. The Apple v. FBI case turned out to be microcosm of the whole Going Dark debate. For the next decade, law enforcement and intelligence agencies continued to ask for “exceptional access” backdoors. But the urgency was gone: both agencies and manufacturers knew that law enforcement could purchase targeted hacking tools like GrayKey (for phone unlocking), or even remote exploitation tools like NSO Group’s Pegasus, assuming they needed them badly enough. Vendors like Apple and Google played
