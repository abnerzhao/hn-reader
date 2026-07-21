---
title: Perfection is not over-engineering
date: 2026-07-20
source_name: Var0
source_url: https://var0.xyz/posts/perfection-is-not-over-engineering.html
---

## easy

People often say that perfect work is over-engineering. I do not think that is true.

Over-engineering means solving the wrong problem. It is not the same as caring about quality.

A good solution depends on clear needs. A small team may need a simple app. A large company may need a different system.

We get into trouble when we build for problems that do not exist. Clear requirements help us build the right thing.

## medium

In software, perfection and over-engineering are often treated as the same thing. They are not. Over-engineering is usually a failure to understand the real problem.

There can be a perfect solution for a set of requirements. Change the requirements, and the best solution changes too. A small project may work well with a simple framework and one database. Another product may need more moving parts.

Libraries, APIs, and internal tools are products as well. Their design should follow the people who use them and the constraints they have.

I start to worry when nobody can explain why an architecture exists. Three people may be running five services because they expect future scale. Then shared data becomes difficult, database checks disappear, and simple changes create new mistakes.

The problem is not trying to do excellent work. The problem is building for imaginary needs. Better requirements make better systems.

## hard

The industry often treats perfection as a synonym for over-engineering. That mistake makes people suspicious of careful work, as if quality itself were wasteful.

Over-engineering is not making something too good. It is adding complexity for a problem that is not actually present. A solution can be perfect only in relation to a clear set of requirements and constraints.

Once those requirements change, the ideal solution changes with them. A small team building a modest product may be well served by Python, Django, and a single database. A different product, team, or operating environment may justify a very different design.

This applies beyond applications. Libraries, APIs, and internal tools are products too. Their shape should come from the needs of the people who depend on them.

One warning sign is an architecture that nobody can defend. A three-person team may operate five microservices because each service is expected to deploy independently and scale on its own. If those services share data, the team can lose database foreign keys and integrity checks, create dangling references, and spend time managing distributed inconsistency.

In that case, the team has solved a scaling or ownership problem it did not have and created real overhead instead. Perfection is not the enemy. Vague requirements are.
