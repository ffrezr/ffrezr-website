---
slug: bici-para-dos
title: Bici para Dos
role: AI Engineer & Co-Creator
period: Aug 2021 — Dec 2021
location: Valparaíso, Chile
description: >
  An experimental project merging artificial intelligence with music composition
  — using OpenAI's Jukebox neural network to co-create a cinematic soundtrack
  with a human composer. Presented at FECI 2021.
image: /img/entrepreneurship/electroveja/electrovejalabs_cover.jpeg
tags:
  - AI
  - Deep Learning
  - Music
  - Neural Networks
  - Creative Tech
type: project
featured: true
---

What happens when you feed a neural network twelve seconds of audio and ask it to keep going? That was the question at the heart of **Bici para Dos** — a project born from the intersection of electronic engineering and music production, presented at **FECI 2021**, the science festival organized by AC3E (Centro Avanzado de Ingeniería Eléctrica y Electrónica).

The name is a nod to *Daisy Bell* — the first song ever synthesized by a computer in 1961. Over sixty years later, we wanted to push the experiment further: could artificial intelligence not just reproduce music, but genuinely **collaborate** in the creative process?

## The team

The project brought together two very different worlds. **René Verón** — composer, music producer, and audiobook director with credits in film, TV, and media scoring — brought the artistic sensibility, the ear for what sounds right, and decades of musical intuition. I brought the engineering: Deep Learning expertise, Python, and the stubborn patience needed to wrangle neural networks into producing something listenable.

The initiative was sparked by **Matías Zañartu, Mauricio Araya, and Fabián Rubilar** from AC3E, who saw an opportunity to bridge the gap between hard science and artistic expression.

## The technology

After evaluating several AI music tools — Musenet, Google's Magenta, and others — we settled on **OpenAI's Jukebox**, a neural network capable of generating music across genres and artist styles. Unlike consumer-friendly tools, Jukebox has no graphical interface. Everything runs through Python code and Google Colaboratory notebooks.

The architecture works in three stages: a convolutional neural network **compresses** the input audio into a lower-dimensional space, a generative model **creates** new audio in that compressed space, and a decoder **reconstructs** the result back into listenable sound. You feed it roughly 12 seconds of audio, set parameters for genre and style, and the network continues the piece — sometimes brilliantly, often chaotically.

## The creative process

We ran dozens of experiments, progressing from simple single-instrument pieces to complex orchestral inputs. The key insight came early: **the AI is unpredictable**. Even with identical parameters, results varied wildly. But we discovered patterns — richer, more textured input compositions yielded more coherent outputs. Matching the style of the input to the target artist parameters dramatically improved consistency.

The final piece was a collaboration in the truest sense. We generated a ~2-minute **soundtrack-style composition inspired by Hans Zimmer**, built around Shepard tone concepts that the AI latched onto beautifully. But the raw AI output was just the foundation.

## Human + Machine

René took the three best AI-generated tracks and did what no machine could: he listened with a composer's ear. He transcribed melodic lines and assigned them to acoustic instruments. He layered synthesizers, samplers, and recorded live acoustic performances on top. Then came the full audio engineering workflow — mixing, post-production, and mastering.

The result was something neither human nor machine could have created alone. The AI provided unexpected harmonic progressions and textural ideas that a human composer might never have explored. The human provided the aesthetic judgment, emotional arc, and musical coherence that the AI fundamentally lacks.

## The takeaway

Bici para Dos taught me that the most interesting applications of AI aren't about replacing human creativity — they're about expanding it. The neural network didn't compose *for* us; it composed *with* us, offering raw material that only a human artist could shape into something meaningful.

The project was presented at FECI 2021 and documented in a [detailed blog post](https://reneveron.com/bici-para-dos-ai-music) by René Verón.
