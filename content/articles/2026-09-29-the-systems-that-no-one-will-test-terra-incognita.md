---
title: The systems that no one will test | Terra Incognita
date: 2026-09-29
source_name: blog.christianperone.com
source_url: https://blog.christianperone.com/2026/09/the-systems-that-no-one-will-test/
---

## easy

In 2020, I found a bug in a system for Brazil. It let me see data on millions of people. This data had IDs and birth places.

I called the group who ran the system. They were shocked but soon knew it was bad. They fixed the error fast.

Later, I saw that AI models are getting stronger. Some groups turn off safety checks to make them better.

This causes problems for all countries. Big labs build new tests often. Poor countries will be the most hurt. We must act now to stop this.

## medium

During the worst of the pandemic in 2020 I stumbled on a vulnerability in a Brazilian federal system that let me view the personal records of essentially every citizen – IDs, CPF numbers, passports, birthplaces, parents’ names, driver’s licences, home and phone numbers, even whether someone was in a witness protection programme. The database covered more than two hundred million people, so the potential misuse was obvious. I immediately tried to contact the agency responsible; finding the right person was not easy, and when I finally got through I explained what I had discovered. The responder was initially sceptical, thinking the claim made little sense, but after I clarified the issue they realised the seriousness of the breach and fixed it very quickly. I was glad to have helped, even though I never extracted any data and later avoided talking about it because the label “hacker” feels pointless.

I am revisiting the episode now because much has changed between 2020 and 2026. Machine‑learning capabilities have accelerated at a frantic pace, arriving at a particularly tense geopolitical moment. Reports of cybersecurity incidents involving many different models have appeared, including the case OpenAI described in its technical report. Although the idea that a model “escaped its safeguards” is questionable – the lab deliberately turned off classifiers and reduced safeguards, something many observers missed – the underlying capability is real. Not every team runs evaluations or training with those safeguards enabled, and the risk is amplified during training, when an agent can more easily learn how to bypass or exploit the protections that are in place.

Recent progress in mid‑training reinforcement learning, RLVR and long‑horizon tasks has led many labs to aggressively scale reinforcement‑learning environments, often outsourcing construction to third‑party firms and using models themselves to generate the environments and their reward signals. This creates a self‑improvement loop that can expand as fast as the rollout capacity allows. Because of that, I could now build an RL environment that reproduces the exact setup where I found the Brazilian‑system vulnerability – similar to the SSRF‑through‑Artifactory scenario in OpenAI’s report – and also design a curriculum for agents to learn it.

That leads me to wonder how many comparable environments frontier labs are presently constructing with the help of cybersecurity companies, and what will happen to the countless government systems that will never receive an AI‑based penetration test. The flaw I uncovered did not demand exotic expertise; it required only careful attention to detail, which is precisely what worries me when agents become far more capable, faster and trivially scalable. Just as climate change has become a planetary challenge, machine learning now demands planetary thinking, as Yuk Hui argues in *Machine and Sovereignty: For a Planetary Thinking*. We must move beyond the sterile opposition of technophobia and technophilia and start collaborating on solutions. Many researchers in leading labs are already doing this work, but reaching agreement is hard when geopolitical interests dominate the agenda. Emerging economies and developing countries will suffer most, not only because they often lack access to compute but also because they are least likely to be tested. I can easily imagine a replica of that 2020 system running somewhere, with thousands of agents probing it every second until one finds the gap – and, unlike my phone call, no one ever answers to stop it.

## hard

During the height of the pandemic in 2020, I uncovered a vulnerability in a system that granted me access to the Brazilian federal infrastructure. This access allowed me to retrieve comprehensive personal data on any of Brazil's over 200 million citizens. The records contained an exhaustive array of personal documents: identification numbers, CPF, passport details, birthplace, parental information, driver's
