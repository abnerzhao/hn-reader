---
title: Twelve years of distributed SQLite – Philip O'Toole
date: 2026-10-24
source_name: philipotoole.com
source_url: https://philipotoole.com/twelve-years-of-distributed-sqlite/
---

## easy

In September 2014 I published rqlite. The idea was simple: take SQLite, put a Raft log in front of it, and replicate every write to a cluster. The source went on GitHub the same weekend. It was the first open-source system to combine Raft and SQLite. Today

## medium

In September 2014 I announced rqlite, a project that combined SQLite with a Raft consensus layer to enable distributed replication. The goal was to solve the problem of storing relational data across a cluster where node failure would not result in data loss. The initial version relied on goraft, the same library used by InfluxDB and etcd at the time. By early 2016 I switched to Hashicorp’s Raft implementation, which remains the core of rqlite today. The fundamental design choice was that rqlite operates as a CP system: all writes must pass through a leader, require acknowledgment from a majority, and refuse writes during partition.

Before rqlite, similar ideas existed in other projects. Expensify had been replicating SQLite internally since years using a Paxos-style protocol and released it as Bedrock in 2016. Around the same period, ActorDB appeared, an Erlang-based system where each actor maintained its own SQLite database replicated via Raft. Neither achieved widespread adoption outside their origins, but both demonstrated that the concept was gaining traction.

In 2017 Canonical introduced dqlite to provide LXD and MicroK8s with an embedded replicated storage solution that did not depend on etcd. Mark Shuttleworth expressed interest in adapting rqlite for this purpose, though the two never fully aligned. dqlite differs from rqlite primarily in packaging: it functions as a library that can be embedded rather than a standalone server application. This distinction reflects different deployment needs—one for integration inside products, another for independent operation.

The following year Ben Johnson launched Litestream, which takes a completely different approach by avoiding consensus altogether. Instead, it monitors the SQLite write-ahead log and streams changes to S3, offering disaster recovery for single-node

## hard

In September 2014 I published a short post announcing rqlite. The idea was simple: take SQLite, put a Raft log in front of it, and replicate every write to a cluster so that the loss of a node did not mean the loss of the data. The source went on GitHub that same weekend. As far as I can tell, that was the first open-source system to combine Raft and SQLite. Nobody else was doing it, and for several years nobody else tried. Today “distributed SQLite” is a category with a dozen projects in it, a few of them venture-funded, two of them acquired. Since the people now writing about the category tend to start the story around 2021, I thought I should write down the version that starts in 2014. I was there for all of it.

The need was concrete. A clustered system I worked on at jut.io needed a small amount of relational storage, and the question of which node should hold it had no good answer. Replicating SQLite with a consensus protocol solved it. We went another way at work, but I kept building rqlite because the problem was general and the solution was small. The first version used goraft, the same library InfluxDB and etcd used at the time (I subsequently joined InfluxDB as a core developer around the same time). In early 2016 I replaced it with Hashicorp's Raft implementation which rqlite still uses. The design decision that mattered most was made then and never changed. rqlite is a CP system. Writes must go through the leader, a majority must acknowledge, and a partitioned minority refuses writes. Everything else, the HTTP API, the read-consistency levels, the snapshotting, followed from that.

Before 2014, and alongside it Two things deserve mention for honesty’s sake. Expensify had been replicating SQLite inside its own infrastructure for years with a Paxos-style protocol; they released it as Bedrock in 2016. And ActorDB, an Erlang system that gave each
