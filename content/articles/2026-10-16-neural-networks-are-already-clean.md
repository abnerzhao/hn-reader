---
title: Neural Networks Are Already Clean
date: 2026-10-16
source_name: already-clean.goodfire.com
source_url: https://already-clean.goodfire.com/
---

## easy

Neural networks are already clean. They use one learning rule, not two. This makes them easier to study directly. We can look at their parts and understand how they work.

Old ideas said neurons mixed random things together. This was wrong. The real reason is recursive growth. Neurons become larger and split into smaller parts over time.

Modern models are much clearer than people thought. Most neurons now have one clear job. Only a small part remains unclear. Bigger models have simpler parts.

It helps us understand AI systems. We can map connections and test ideas. The whole network becomes readable.

## medium

After studying neurons in image and language models for months, I’ve concluded that a network’s own mechanisms are its clearest building blocks, and the outlook for mechanistic interpretability is far better than feared. The widely accepted evidence of arbitrary concept packing—polysemanticity and superposition—was a misreading. What appeared to be random combinations was actually a pattern I call recursive generalization, which is far less troubling. This means we can study networks directly, without first untangling them. Neural networks are already clean.

The field initially studied networks by examining their neurons and circuits but shifted to extracting hypothesized features because networks seemed like tangled knots. The classic example was a neuron in an image model that fired for both cat faces and car fronts. The leading theory, superposition, suggested that when networks run out of neurons, they fold unrelated concepts together simply because they don’t interfere. This created a 'knot' that had to be unfolded using a separate model before study could begin.

However, superposition was the wrong explanation for the InceptionV1 model. Architectural issues caused later layers to overflow, and weak tools amplified this, making them seem incoherent. With ordinary improvements to help deep layers learn better—without changing model size or training data—99-100% of neurons in the final layer became easily interpretable. The model became broadly legible throughout. When space is limited, neurons cover broader concepts like 'car'; with more room, they differentiate into specific types. The problem was a simple learning failure, not a new principle.

The canonical examples of polysemanticity were also errors. The one circuit I ever saw presented as superposition—where a car feature seemed to spread into unrelated dog neurons—was actually ordinary generalization. Nothing reads that combination; it wasn’t hiding anything. Similarly, modern language models are far more interpretable than believed. In preliminary audits of Qwen3-32B, roughly 90% of neuron poles have one main job, and only 2-4% remain unexplained. Dense and expert models show similar results even at trillions of parameters.

Most remaining apparent polysemanticity is recursive generalization: as a neuron grows, it sprouts offshoots like a tree branch. For example, a neuron detecting 'iy' evolved to detect 'diy' and then 'do it yourself,' which contains no 'iy.' This fractal generalization groups related things, unlike superposition’s arbitrary grouping. It means explanations can be too: start with a basic idea and zoom in for more detail. Almost the entire network is interpretable if we look closely, especially at how it grew during training.

Understanding compounds like a jigsaw puzzle. Initially, if a neuron is unclear, little else helps because circuits only explain it through other unknown neurons. But once the map fills in, each piece comes with clues. You can study its connections, check steering effects, and run specific tests that all point to the same explanation. This process has worked for convolutional networks and language models up to trillions of parameters. The enormity of modern models helps: bigger models learn narrower neurons that are easier to recognize, and every explanation is tightly constrained by the surrounding map. Understanding the whole may be easier than focusing on isolated parts.

This points to a bitter lesson for interpretability: scaling ordinary investigation beats engineering a clever new decomposition. The gap between perception and reality arose from weak tools, small models, and the inability to test conjectures in a loop. But with modern models and methods, direct study of networks is surprisingly tractable. The simple thing at absurd scale wins again.

## hard

Neural networks are already clean, and this conclusion emerges from a careful reassessment of longstanding assumptions about their internal organization. After extensive study of image and language models, the researcher concludes that a network's own mechanisms constitute legible building blocks, and that mechanistic interpretability offers greater promise than previously anticipated. The prevailing evidence regarding polysemanticity and superposition—once considered proof that networks pack concepts arbitrarily—has been misread. What initially appeared as random concept bundling was largely a manifestation of recursive generalization, a motif far less troubling than the field had feared. Consequently, researchers can study networks directly rather than first attempting to untangle them.

Two distinct strategies exist for approaching mechanistic interpretability. The first involves rapid normal science applied directly to a network's neurons and circuits, examining their relationships, tracking data flow, and conducting experiments at agentic scales to validate explanations. The second strategy begins with a predefined list of hypothesized features and designs increasingly sophisticated reconstruction objectives, typically disregarding the original network structure. The field initially favored the first approach but reverted to the second because neural architectures seemed entangled beyond repair. Canonical examples of polysemantic neurons—such as a neuron responding to both cat faces and car fronts—and the seemingly chaotic final layers of InceptionV1 prompted calls for radical simplification. However, these cases revealed deeper patterns rather than fundamental obfuscation.

The leading explanation for polysemanticity, superposition, posited a novel learning principle wherein networks abandon grouping related concepts when resources become scarce and instead fold unrelated items together indiscriminately. This created intricate knots whose resolution required decomposing networks into simpler forms, effectively unfolding the entanglement before analysis. Yet subsequent research demonstrated that superposition was fundamentally misidentified in systems like InceptionV1. Architectural constraints caused later layers to overflow, and weak interpretability tools inadvertently exacerbated these issues, rendering late layers appear incoherent. Subsequent architectural refinements designed to improve deep-layer learning paradoxically enhanced interpretability. When InceptionV1 was reexamined under these corrected conditions, 99-100% of neurons in its final layer became readily interpretable, revealing the network as broadly legible throughout its depth
