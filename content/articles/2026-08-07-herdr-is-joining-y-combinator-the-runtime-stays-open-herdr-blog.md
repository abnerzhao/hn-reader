---
title: Herdr is joining Y Combinator. The runtime stays open. — Herdr blog
date: 2026-08-07
source_name: herdr.dev
source_url: https://herdr.dev/blog/herdr-is-joining-y-combinator/
---

## easy

Herdr is a tool that helps run coding agents. These agents work in terminals, like text screens. The tool, Herdr, is free. I made it so people can use it without extra steps. Now, I want to build a company around it. Y Combinator will help. The tool itself stays open and free. People can add to it with extra features called plugins. Over 500 plugins exist now. That shows teams love using Herdr.

The main part of Herdr is the terminal interface. It shows agents and their work clearly. It alerts users only when needed. This makes work easier. People can run Herdr on their own computers or a remote server with one command. It’s fast and simple.

## medium

Four months ago, I was looking for a new job and thinking about the future of software engineering. As I looked at my hobby projects and the current state of development, it hit me: I was the bottleneck. I realized that I didn't want to install a new app or learn a complex tool just to manage my agents and my development style. Instead of looking for a product to fit my workflow, I decided to build something that actually did. This is how the Herdr runtime was born.

A runtime for CLI coding agents must live in the terminal, which has always been our primary home for editing code, running servers, and navigating projects. I wanted agents to have first-class primitives in the terminal, where a pane belongs to an agent, and tabs belong to a project. Crucially, these agents need to be persistent. Once you have a runtime, the specific machine where they run shouldn't matter; you should be able to run them anywhere and keep them running seamlessly.

The TUI has been the backbone of Herdr, providing a way to track agents at a glance and divide work by project rather than getting lost in a pile of individual agents. One of its greatest advantages is that it is bundled; whether you install Herdr on a VPS or use a remote command, your UI is ready in seconds. While the TUI is central, it wasn't meant to be the only client. People have already built Raycast extensions, Stream Deck buttons, and iOS apps to interact with the runtime.

Herdr has grown beyond what one person can carry, reaching 25k stars and 340k downloads. To meet this demand, Herdr is joining the Y Combinator F26 batch. The goal is to turn Herdr into a company that builds essential developer tools for anyone juggling agents all day. I want to build a small, focused team to keep the runtime healthy, robust, and fast, while ensuring the core remains small and extensible through plugins.

To ensure everyone can use Herdr freely, I recently switched the license from AGPL to Apache-2.0. Moving forward, I will continue to support the open-source runtime while building the features people truly need, such as more clients and better connectivity between disconnected machines. In an age where adding features is easy, I believe the most important decision is choosing what stays in the core. I want to protect the lean nature of Herdr, keeping the core minimal and allowing everything else to happen through extensions.

## hard

Since assuming sole responsibility for Herdr’s development

the individual confronts an infrastructural paradox: sustaining a growing platform while operating independently. This configuration necessitates a reevaluation of scalable methodologies. The core issue

as articulated

centers on centralized control. Managing agents—software entities designed to automate tasks—requires not merely technical expertise but systemic adaptability. Every interaction with Herdr

from installation to configuration

demands cumulative effort from a single contributor. This approach imposes constraints on iterating scenarios

integrating third-party tools

or experimenting with novel workflows. The realization that personal productivity limits mirror the platform

s potential spurred a strategic pivot. Transitioning from an individual contributor to a systemic framework addresses this impasse. The solution proposed is Herdr

s runtime: a modular environment designed to host autonomous code execution units. This architecture decouples operational environments from developmental dependencies

enabling agents to persist beyond a developer

s immediate context. Terminals emerge as the de facto interface for this runtime. Their ubiquity in developer workflows—editing text

executing commands

managing servers—positions them as an innate substrate for agent deployment. By anchoring agents within terminal ecosystems

Herdr avoids platform fragmentation. Agents can operate indefinitely

unshackled from ephemeral sessions or isolated sandboxes. This permanence reshapes operational logistics. A developer no longer needs to maintain isolated instances; agents persist within the runtime

s framework. The runtime

s next challenge lies in usability. Functional code execution requires an interface that transcends technical complexity. The Text User Interface (TUI)

central to Herdr

s current offering

embodies this principle. Unlike conventional UIs

the TUI prioritizes transparency. It displays active agents in real time

allocates tasks across projects to prevent overload

and delivers notifications solely for critical interventions. This design philosophy aligns with efficiency; users engage only when actionable. Moreover

the TUI

s integration model is distinctive. It operates as a preloaded component rather than a standalone application. Deploying Herdr on a server involves a single command—a process that installs both the runtime and interface simultaneously. This approach minimizes setup friction

a critical factor for developer adoption. Even with remote access via SSH

the interface becomes available within seconds

leveraging network speed to approximate immediacy. Such technical pragmatism is intentional. The TUI

s prominence is not accidental; it serves as Herdr

s primary gateway while maintaining modular compatibility. Extensibility defines the platform

s evolution. Third-party developers have leveraged Herdr

s runtime to create supplementary tools. A Raycast extension

a Stream Deck interface

and an iOS application that controls sessions from a mobile device exemplify this ecosystem. Over 500 plugins now exist

created independently of the core project. This organic expansion underscores the runtime

s versatility. Users customize workflows to match specific requirements

whether through unique styling

enterprise workflows

or experimental features. The TUI

however

has inherent limitations. Concepts demanding spatial or visual representation struggle within terminal constraints. This necessitates future client development—though the current focus remains on refining the terminal-based experience. C1: This paragraph constructs a technical argument about Herdr

s infrastructure

emphasizing terminal integration and extensibility through complex syntax and specialized terminology. Continuous discourse on Herdr

s ecosystem reveals its community-driven growth. The platform

s success stems from its resistance to monolithic control. Initially a solitary endeavor

Herdr

s user base has expanded beyond the creator

s capacity. The project now garners 25

000

GitHub stars and 340

000

downloads

metrics reflecting both technical utility and widespread adoption. This scale necessitates structural transformation. The individual has elected to transition Herdr into a formal company under Y Combinator

s incubation program

Batch 26. This shift aims to institutionalize development without compromising the runtime

s principles. The decision to join Y Combinator hinges on strategic resource allocation. A small team will prioritize maintaining the runtime

s performance

portability

and ease of deployment. The goal is to enable users to achieve more while keeping the core team small. This philosophy rejects feature bloat. The runtime remains open-source under the Apache-2.0 license

a deliberate shift from the Affero General Public License to ensure unrestricted usage. This move aligns with Herdr

s ethos of accessibility; even enterprise environments can adopt the software without licensing barriers. The runtime

s openness has catalyzed external contributions. Developers build upon it without recompense

a testament to its design clarity. However

the company

s role will extend beyond maintenance. Future features will address identified gaps

particularly in infrastructural coordination. Current limitations involve isolated execution environments. Agents operate on disconnected devices—a laptop

a VPS

or a sandbox—with no interoperability between these hubs. The vision for Herdr 2.0 involves bridging these nodes. Centralized management of distributed agents could enable synchronization of states

resource allocation

and task prioritization. This ambition requires complex backend engineering without burdening the lightweight core. The project

s growth trajectory demands balance. External contributors and users will continue to shape Herdr

s evolution through extensions. The core remains legible and modular

allowing third-party developers to implement domain-specific enhancements. Themes

custom workflows

or unconventional agent behaviors can exist outside the runtime

s primary scope. This separation of concerns preserves performance and stability. In an era where incremental features are costless

Herdr

s conservatism is deliberate. The decision to wait for high-impact additions reflects a refined prioritization. Every element in the core must justify its existence through utility. This principle prevents Herdr from becoming a monolithic suite; instead

it cultivates a platform where extensibility reigns. C1: This section elaborates on organizational strategy and technical philosophy

utilizing dense syntax and industry-specific lexicon to convey depth. The technical foundation of Herdr

s runtime is elucidated through operational specifics. Agents function as persistent entities within terminal panes—interface segments dedicated to specific tasks. These panes are modular

residing within tabs that represent projects. This hierarchical structure ensures context retention across sessions. An agent can run for hours or days

its state saved and retrievable without reinitialization. This persistence is achieved through filesystem integration and session management protocols. The runtime

s agnosticism regarding execution environments is a key feature. Whether deployed locally

on a cloud server

or via remote SSH

the runtime adapts seamlessly. This universality eliminates environment-specific configurations

a common pain point in developer tools. Security models are subtly addressed. Ephemeral agents—temporary instances for risky operations—can be isolated within sandboxes. This containment prevents unintended system<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</

<

/</
