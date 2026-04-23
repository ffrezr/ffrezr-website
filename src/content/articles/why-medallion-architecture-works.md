---
slug: why-medallion-architecture-works
title: Why Medallion Architecture Works at Scale
excerpt: >
  How structuring a 450+ table BigQuery warehouse into bronze, silver, and gold
  layers transformed our data reliability at LATAM Airlines.
category: Data Architecture
date: Mar 15, 2025
readTime: 8 min read
image: https://lh3.googleusercontent.com/aida-public/AB6AXuDc9yj3dxaXsnBkjiCZZJR3XoHS2CFA27SxOHXn9TrO8wZqOwT2ykKLmSe63BNo3qZjNhukZKmBOrq85eFeQh4_wZv8bEV75SBy5OYTenBMvvgrJiQGpRyqav3WZH1tWR31P-ICCYn_lvtFfcST8_RK_sx9KxpCjRU610IKkkOuEQ-Q3SSPIuxUqZuffV8nYb6zofLfWq5CBUc5HpI7BQZ6TfVviAkPwR33w0cwAmHaHBo7QFs9ebYOzjoqxYlPfgknp1trbNUrsQ
---

For years, designers have relied on the humble one-pixel border to define space, separate content, and build the scaffolding of the internet. It was a crutch, a necessity born from an era where screen resolutions were low, and colors were limited. But as our digital canvases evolved, so too did our visual language. Today, we stand on the precipice of a new era in UI design: the era of tonal carving.

The concept is simple but profound: instead of drawing lines around things to indicate containment, we use subtle shifts in background color and ambient elevation to group elements visually. This approach, borrowed heavily from print editorial design and minimalist architecture, creates interfaces that feel less like software and more like curated spaces.

> "A line is an explicit command. A tonal shift is a gentle suggestion. In modern design, we prefer to guide users, not confine them."
>
> — Elena Rostova, Lead Designer

## The Mechanics of Tonal Layering

Removing borders requires a highly disciplined color palette. You can no longer rely on arbitrary grays; every shade must be purposeful. We typically employ a strategy of three to four 'surface' levels. The base layer acts as the floor, the primary canvas. The subsequent layers float slightly above, creating soft distinctions.

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
  <div class="bg-surface-container-lowest p-8 rounded-sm shadow-[0px_24px_48px_rgba(0,0,0,0.04)]">
    <h3 class="text-xl font-bold text-primary mb-4 tracking-[-0.01em]">Level 0: The Canvas</h3>
    <p class="text-on-surface-variant text-base">The deepest background layer. Usually a warm off-white or a very soft gray. It provides the negative space.</p>
  </div>
  <div class="bg-surface-container-low p-8 rounded-sm shadow-[0px_24px_48px_rgba(0,0,0,0.04)]">
    <h3 class="text-xl font-bold text-primary mb-4 tracking-[-0.01em]">Level 1: The Container</h3>
    <p class="text-on-surface-variant text-base">A slight tonal shift upwards. Used for large groups of content to distinguish them from the main canvas.</p>
  </div>
</div>

![Minimalist interior space showing natural boundaries without visible hard lines](https://lh3.googleusercontent.com/aida-public/AB6AXuBSIyml6wiaOMNSHydt7aPY-bDbo15zLNtr2SqH6DN4Dij9DlKHGlDAH-OJxyQ-MgdBRMEzJcfkrYBAxFM6NovAjgyLy3ogdn4bQmhMZrWs2niQg4mZ1yhz82IBJ7oI08E9HTe1yT1wbyGUdl7mjRaeAn9oszy6gSst4w6QgWEbpXICOMhcrpWDpI2AaejJ7j2UXvqy8SxtzOhnUpgst4PQMLTcGlQI9Hci1Tv8R44fImpCirPrn3WW0C0ke2c3DrecxPnegLZFOw)

When you combine this disciplined palette with generous negative space — what we call "The Breather" — the need for hard lines vanishes entirely. The resulting interface feels fluid, expansive, and high-contrast, ensuring the actual content remains the undisputed center of gravity.

## The Ghost Border Exception

Are there exceptions? Of course. Input fields, for example, sometimes require more tactile definition than a simple background shift can provide. Here, we introduce the "Ghost Border" — a border set to a highly translucent state, often just 15% opacity. It provides the necessary structural hint without adding the visual noise of a solid line.
