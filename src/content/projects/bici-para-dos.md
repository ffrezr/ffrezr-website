---
slug: bici-para-dos
title: Bici para Dos
role: Data Engineer & Co-Creator
period: Aug 2021 — Dec 2021
location: Valparaíso, Chile
description: "How we co-composed a 2-minute cinematic soundtrack with OpenAI Jukebox: VQ-VAE architecture, 12-second seed, Hans Zimmer conditioning, three GPU-hour generations stitched together."
image: /img/projects/bici-para-dos/OG-image.png
tags:
  - AI
  - Deep Learning
  - Music
  - Neural Networks
  - Creative Tech
type: project
featured: true
published: true
display: true
lastUpdated: "2026-05-09"
---

The goal of **Bici para Dos** was to compose a piece that combined the creativity, sensibility and aesthetic judgement of a human composer with the generative capacity of a deep neural network. The result is a 2-minute cinematic soundtrack, co-composed by **René Verón** (composer, USA) and me, then an AI engineer at [Electroveja Labs](/projects/electroveja-labs) in Chile. It premiered at the **Festival de la Ciencia (FECI) 2021** in Viña del Mar on 24 October 2021.

Technically: a 12-second human-composed seed fed into OpenAI's Jukebox, conditioned on `artist="Hans Zimmer"` and `genre="Soundtrack"` at sampling temperature `0.98`, with three stitched continuations and live cello layered on top. This post covers the model selection, the experimentation phase, the prompt design, and the post-production decisions behind that recipe, plus the failed experiments along the way that taught us where Jukebox actually breaks.

> **Key Takeaways**
> - **Model**: [OpenAI Jukebox](https://openai.com/research/jukebox), `5b` variant. A transformer-based generative model with VQ-VAE compression, trained on ~1.2M songs ([OpenAI, 2020](https://openai.com/research/jukebox), retrieved 2026-05-08).
> - **Technical recipe**: 12-second human-composed seed, conditioning `artist="Hans Zimmer"`, `genre="Soundtrack"`, sampling temperature `0.98`, three full continuations of ~90 seconds each, several GPU-hours per generation.
> - **Style as engineering constraint**: Hans Zimmer was picked because his ostinato-driven, low-mid register palette fits inside Jukebox's high-fidelity bandwidth. The VQ-VAE encoder loses fidelity at high frequencies.
> - **Post-production**: three generations stitched, salient melodic lines transcribed for live cello, spectral gaps filled with virtual instruments, then mixed and mastered.
> - **The lesson**: in 2021, generative audio models were brainstorming partners, not composers. The artistry lives in seed design, conditioning, and post-production curation.

## Why we picked Jukebox: architecture, fidelity, and what nothing else could do

Jukebox is a deep autoregressive transformer trained on approximately **1.2 million songs**, around **600,000 of them in English with paired lyrics**, and in mid-2021 it was the only generative-audio model that produced **raw 44.1 kHz waveforms** conditioned on artist and genre metadata ([OpenAI Jukebox release post](https://openai.com/research/jukebox), April 2020, retrieved 2026-05-08). That last point, raw audio output rather than MIDI, is why we picked it.

Most generative-music alternatives at the time (MuseNet, Google's Magenta) were MIDI-based. They produced symbolic note sequences you could open in a DAW and orchestrate. Useful for sketching, but not what we needed. We wanted the model to make a meaningful contribution at the *timbre* level, not just at the level of which notes to play.

Architecturally, Jukebox is a three-stage system, and understanding each stage matters because each one constrained a creative decision we made later:

<figure style="margin: 3rem 0;">
<svg viewBox="0 0 720 664" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="OpenAI Jukebox three-stage architecture: a hierarchical VQ-VAE compresses 44.1 kHz audio into three levels of discrete tokens (top with 128 times compression for long-range structure, middle with 32 times, bottom with 8 times for fine timbral detail). Three autoregressive transformer priors of about one billion parameters each in the 1b_lyrics variant model each level. The upsampler decodes the tokens back to a 44.1 kHz waveform, with high-frequency content reconstructed less faithfully than low-mid register content." style="width:100%;height:auto;color:currentColor;font-family:inherit;display:block">
  <defs>
    <marker id="jb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/>
    </marker>
  </defs>

  <rect x="260" y="20" width="200" height="48" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="360" y="42" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">Raw audio</text>
  <text x="360" y="60" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.6">44.1 kHz waveform</text>

  <line x1="360" y1="68" x2="360" y2="98" stroke="currentColor" stroke-width="1" marker-end="url(#jb-arrow)"/>

  <rect x="50" y="100" width="620" height="44" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="360" y="120" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">VQ-VAE encoder</text>
  <text x="360" y="135" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.6">hierarchical · lossy · non-uniform across the spectrum</text>

  <line x1="150" y1="144" x2="150" y2="178" stroke="currentColor" stroke-width="1" marker-end="url(#jb-arrow)"/>
  <line x1="360" y1="144" x2="360" y2="178" stroke="currentColor" stroke-width="1" marker-end="url(#jb-arrow)"/>
  <line x1="570" y1="144" x2="570" y2="178" stroke="currentColor" stroke-width="1" marker-end="url(#jb-arrow)"/>

  <rect x="50" y="180" width="200" height="130" rx="2" fill="none" stroke="currentColor" stroke-width="1" opacity="0.7"/>
  <text x="150" y="204" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">Top tokens</text>
  <text x="150" y="226" font-size="12" text-anchor="middle" fill="currentColor">128× compression</text>
  <text x="150" y="252" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.65">long-range</text>
  <text x="150" y="266" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.65">song structure</text>
  <text x="150" y="294" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.5">codebook · 2048 codes</text>

  <rect x="260" y="180" width="200" height="130" rx="2" fill="none" stroke="currentColor" stroke-width="1" opacity="0.85"/>
  <text x="360" y="204" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">Middle tokens</text>
  <text x="360" y="226" font-size="12" text-anchor="middle" fill="currentColor">32× compression</text>
  <text x="360" y="252" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.65">medium</text>
  <text x="360" y="266" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.65">phrase structure</text>
  <text x="360" y="294" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.5">codebook · 2048 codes</text>

  <rect x="470" y="180" width="200" height="130" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="570" y="204" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">Bottom tokens</text>
  <text x="570" y="226" font-size="12" text-anchor="middle" fill="currentColor">8× compression</text>
  <text x="570" y="252" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.65">fine timbral detail</text>
  <text x="570" y="266" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.65">— frequency-biased loss</text>
  <text x="570" y="294" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.5">codebook · 2048 codes</text>

  <line x1="150" y1="312" x2="150" y2="346" stroke="currentColor" stroke-width="1" marker-end="url(#jb-arrow)"/>
  <line x1="360" y1="312" x2="360" y2="346" stroke="currentColor" stroke-width="1" marker-end="url(#jb-arrow)"/>
  <line x1="570" y1="312" x2="570" y2="346" stroke="currentColor" stroke-width="1" marker-end="url(#jb-arrow)"/>

  <rect x="50" y="348" width="200" height="110" rx="2" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="372" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">Top prior</text>
  <text x="150" y="392" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.65">autoregressive</text>
  <text x="150" y="406" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.65">transformer</text>
  <text x="150" y="434" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.5">~1B params</text>

  <rect x="260" y="348" width="200" height="110" rx="2" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="360" y="372" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">Upsampler prior 1</text>
  <text x="360" y="392" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.65">conditioned on</text>
  <text x="360" y="406" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.65">top-level tokens</text>
  <text x="360" y="434" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.5">~1B params</text>

  <rect x="470" y="348" width="200" height="110" rx="2" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="570" y="372" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">Upsampler prior 0</text>
  <text x="570" y="392" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.65">conditioned on</text>
  <text x="570" y="406" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.65">middle tokens</text>
  <text x="570" y="434" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.5">~1B params</text>

  <path d="M 150 458 L 150 496 L 360 496" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M 570 458 L 570 496 L 360 496" stroke="currentColor" stroke-width="1" fill="none"/>
  <line x1="360" y1="458" x2="360" y2="538" stroke="currentColor" stroke-width="1" marker-end="url(#jb-arrow)"/>

  <rect x="50" y="540" width="620" height="44" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="360" y="560" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">VQ-VAE decoder · upsampler</text>
  <text x="360" y="575" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.6">reconstructs the waveform · highs degrade first</text>

  <line x1="360" y1="584" x2="360" y2="612" stroke="currentColor" stroke-width="1" marker-end="url(#jb-arrow)"/>

  <rect x="260" y="612" width="200" height="48" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="360" y="634" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">Generated audio</text>
  <text x="360" y="652" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.6">44.1 kHz waveform</text>
</svg>
<figcaption style="margin-top:0.75rem;text-align:center;font-size:0.875rem;color:var(--color-secondary);font-style:italic;">Three-stage Jukebox pipeline: hierarchical VQ-VAE compression, three autoregressive transformer priors, ancestral upsampling. Architecture adapted from <a href="https://arxiv.org/abs/2005.00341" style="color:inherit;text-decoration:underline;">Dhariwal et al., 2020</a>, Fig. 1.</figcaption>
</figure>

1. A Vector-Quantised Variational AutoEncoder (VQ-VAE) that compresses raw audio into a hierarchy of discrete tokens at three temporal resolutions. The top level is the most aggressive compression, capturing long-range structure (the "shape" of a song). The bottom level is the most detailed, encoding fine timbral texture and high-frequency content. The compression is lossy, and the loss isn't uniform across the spectrum. This becomes the most important fact about the model.
2. Three autoregressive transformer priors, one per VQ-VAE level. Each prior learns to predict the next token at its resolution, effectively learning *how songs unfold over time* at multiple scales. This is the part that's "trained on 1.2M songs."
3. An upsampling stage that reconstructs the lower-resolution generations back into 44.1 kHz audio.

In practice, this gave us a workflow with three knobs we cared about:

- Primer audio (a real audio clip, ~12 seconds in our case) that seeds the generation.
- Metadata conditioning: `artist`, `genre`, and optional `lyrics`.
- Sampling temperature (we landed on `0.98`), which controls how adventurous vs. on-distribution the generations are.

We chose the **`5b`** variant, the largest available model, specifically because it produces more coherent long-range structure and does not have lyrics conditioning — important for an instrumental piece. The trade-off was generation time: each ~30-second continuation took **several hours of GPU time**. That single fact, *several hours per take*, shaped every creative decision that followed.

## How style choice became an engineering decision

Anyone working with a lossy generative audio model has to answer one question first: **what does the encoder degrade, and how do I write music that sits inside the parts it preserves cleanly?** Picking Hans Zimmer's harmonic and orchestrational palette wasn't an aesthetic preference. It was a workaround for a specific limitation of Jukebox's VQ-VAE.

The compression has a notable bias: high-frequency content (cymbals, sibilants, bright string overtones, transient detail) gets reconstructed less faithfully than low-mid register material. Push a bright, treble-heavy seed into the model and the output comes back with a kind of vintage AM-radio shimmer over the top of it. Push a dark, low-register, sustained pad and the output stays clean.

That's why we wrote down the following constraints before generating a single sample:

- Mono-leaning, dark, sustained — no fast transients, no bright cymbal washes, no piccolo lines.
- Low-to-mid register dominance — most of the harmonic information would live below ~1 kHz.
- Ostinato-driven, harmonically simple — two notes a semitone apart used as a slow oscillating backbone.
- Hans Zimmer–style soundtrack, specifically because his published catalogue, well represented in Jukebox's training distribution, lives inside the band the encoder handles cleanly.

The two-note ostinato is also the source of the title. The piece centres harmonically on **B (Si) and C (Do)**, separated by a semitone. **Bi-Ci** for the two notes, **para Dos** ("for two") for the duo behind it. A human and a machine on a tandem bicycle. The name was a joke that turned into a thesis statement.

We ruled out MIDI-based engines (MuseNet, Magenta) early. We wrote test melodies in Finale, exported MIDI, and ran them through both. Results were musically incoherent and stylistically unpredictable past 8-10 seconds. Fine for sketching, unsuitable for a piece that needed to land emotionally on a deadline.

## Mapping Jukebox's behavioural envelope: the experimentation phase

<!-- [PERSONAL EXPERIENCE] -->

Before going anywhere near the final piece, we spent the first half of the project running controlled experiments on the model. The goal wasn't to write music yet. The goal was to answer four practical questions:

1. How rich does the input have to be before the output stops drifting into vocals and crowd noise we don't want?
2. Where, exactly, does the high-frequency degradation cliff begin?
3. Can the model give us back individual instrumental lines, or does it always return a fully-mixed bed?
4. How sensitive is the result to artist/genre metadata?

### First test: stylistic gravity

Our first useful generation was a rock continuation in the style of U2, primed on **Jingle Bells 3** by Kevin MacLeod. We ran it at the lowest quality setting on purpose — iteration speed mattered more than fidelity at this stage — and what came back was immediately surprising. A neural network had produced something that genuinely sounded like a song.

<figure style="margin: 2.5rem 0;">
<div style="display: grid; gap: 1.25rem;">
<div>
<div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-secondary); margin-bottom: 0.5rem;">Input · Jingle Bells 3 (Kevin MacLeod)</div>
<audio controls preload="none" src="/audio/projects/bici-para-dos/jingle-bells-seed.mp3" style="width: 100%;"></audio>
</div>
<div>
<div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-secondary); margin-bottom: 0.5rem;">Output · Jukebox, conditioned on artist=U2</div>
<audio controls preload="none" src="/audio/projects/bici-para-dos/jingle-bells-jukebox-output.mp3" style="width: 100%;"></audio>
</div>
</div>
<figcaption style="margin-top: 1rem; text-align: center; font-size: 0.875rem; color: var(--color-secondary); font-style: italic;">Same key going in and coming out. Everything else — rhythm, drums, texture, mood — gets reshaped by the U2 conditioning.</figcaption>
</figure>

The seed plays back as-is, and then Jukebox takes over and pivots. The rhythm changes. A drum kit appears. Synthesized textures and that particular compressed mid-range push the piece into unmistakable U2 territory. Only one thing survives the transition: the key.

So the model isn't really *extending* your input. It's rewriting the *intention* of it inside the stylistic envelope you gave it. The pull toward the conditioned artist is strong enough that the seed only really determines tonality — everything else (rhythm, instrumentation, mood, production) gets reshaped on the way out.

That single observation became the first design constraint for the final piece. **Whatever seed we wrote, it had to already live inside the style we wanted.** Jukebox isn't subtle about where it's going. If we wanted a Zimmer-style soundtrack, the seed itself had to be Zimmer-style — anything else would just get pulled into the conditioning's centre of gravity.

### Density tests: solo piano motifs

We ran a battery of single-instrument primers, mostly solo piano motifs of varying density, to see what the model would add. The answer was always the same: drums, bass, and vague vocal-like textures. **Density in the output had almost nothing to do with density in the input.** The model fills the room toward an "average song" regardless of how sparse the seed is. This is what told us the seed had to be *dense and stylistically committed* up front. You can't ask Jukebox to be subtle. You have to give it something already inhabiting the style you want, and trust it to extend the gesture.

### Arpeggio tests: can we get isolated lines back?

We tried piano arpeggios and isolated chord stabs to see whether Jukebox could produce single instrumental lines we could then re-orchestrate ourselves. It couldn't. Output is always a fully-mixed bed: drums, bass, harmonic content, room sound, all baked together. **There is no "stems" mode.** That single constraint forced our post-production strategy: instead of trying to source-separate the AI's output, we would *transcribe* the prominent lines off it and re-record them on real instruments.

The cumulative insight from the experimentation phase was simple and load-bearing: **rich, textured input that already lives in the desired stylistic neighbourhood produces more controllable output than a sparse input asking the model to fill the room itself.** Everything we did afterwards followed from that one observation.

## The sampling pipeline

The heart of the generation workflow is the script below, adapted from OpenAI's reference notebook to run on local audio prompts. Each parameter encodes a decision we made during the experimentation phase. The full reproducible pipeline — primed-generation script, upsampler, Colab notebook, and the 12-second primer audio — lives at [github.com/ffrezr/bici-para-dos](https://github.com/ffrezr/bici-para-dos).

```python
import jukebox
import torch as t
from jukebox.make_models import make_vqvae, make_prior, MODELS
from jukebox.hparams import Hyperparams, setup_hparams
from jukebox.sample import _sample, load_prompts
from jukebox.utils.dist_utils import setup_dist_from_mpi

rank, local_rank, device = setup_dist_from_mpi()

model = '5b'                        # largest variant; better long-range coherence, no lyrics conditioning
hps = Hyperparams()
hps.sr = 44100                     # full CD quality output
hps.n_samples = 3                  # 3 candidate continuations per run
hps.levels = 3                     # use all three VQ-VAE resolutions
hps.hop_fraction = [.5, .5, .125]  # default upsampling overlap

vqvae, *priors = MODELS[model]
vqvae = make_vqvae(setup_hparams(vqvae, dict(sample_length=1048576)), device)
top_prior = make_prior(setup_hparams(priors[-1], dict()), vqvae, device)

# Prime generation from a real audio clip (René's seed)
mode = 'primed'
audio_file = 'bici_para_dos_input.wav'
prompt_length_in_seconds = 12      # the seed length the model conditions on
sample_length_in_seconds = 90      # how much new audio to generate after it

sampling_temperature = .98         # adventurous but on-distribution
metas = [dict(
    artist="Hans Zimmer",          # picked for low-mid register fit
    genre="Soundtrack",            # avoids crowd-recording statistics
    total_length=hps.sample_length,
    offset=0,
    lyrics="",                     # instrumental piece; no lyrics
)] * hps.n_samples

# ... continue with VQ-VAE encoding and ancestral sampling
```

A few of the parameter choices are worth unpacking:

- `sampling_temperature = .98` is the default recommended by OpenAI in the reference notebook. We kept it as-is.
- `artist="Hans Zimmer"` and `genre="Soundtrack"` as conditioning together. The artist tag pushes timbre and texture; the genre tag pushes overall structure and arrangement conventions. Using both narrows the distribution more than either alone.
- `lyrics=""` with the `5b` model. The `5b` variant has no lyrics conditioning, which is what we wanted for a purely instrumental piece. Leaving `lyrics` empty is appropriate here.
- `n_samples = 3` — the maximum the `5b` model supports per run given its memory footprint.
- `hop_fraction = [.5, .5, .125]` is the default, but worth flagging: the smaller bottom-level hop (`.125`) is what gives the upsampler enough overlap to reconstruct fine detail without seams.

## Building the base: from a 12-second seed to three usable generations

Once the experimentation phase was over, we collapsed everything we'd learned into a single recipe for the base track:

1. René composed a 12-second seed: an orchestrated synthesizer pad rich in textures and atmosphere, voiced in the low-to-mid register, employing a [Shepard-tone](https://en.wikipedia.org/wiki/Shepard_tone) effect for the illusion of perpetual ascent. The seed was deliberately *dense* because we now knew Jukebox responds better to dense input. It was deliberately *low* because we now knew anything bright would degrade. And it was deliberately *Zimmer-adjacent* in palette so the conditioning would reinforce the seed rather than fight it.

   <figure style="margin: 1.25rem 0 0.5rem;">
   <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-secondary); margin-bottom: 0.5rem;">René's 12-second seed · the actual primer fed to Jukebox</div>
   <audio controls preload="none" src="/audio/projects/bici-para-dos/seed-input.mp3" style="width: 100%;"></audio>
   </figure>

2. I conditioned Jukebox on `artist="Hans Zimmer"`, `genre="Soundtrack"`, sampling temperature `0.98`, and primed it with René's seed. I ran the pipeline three separate times, generating roughly 90 seconds of new material per run.
3. I generated three full continuations. Each was different. But all three preserved the harmonic centre and emotional temperature of the seed. The metadata conditioning was working, and the dense seed was holding the model on-style.

Rather than picking one generation and discarding the others, we kept all three and treated them as three voices of the same instrument. They became the raw material for the post-production phase.

## From AI bed to acoustic piece: post-production as the actual composition

This is the part that's easy to underestimate. With three Jukebox generations in hand, the project's centre of gravity shifted entirely to René. His job, in his own words, was to *transcribe* the AI's contribution. He listened to the generations the way a film composer listens to a temp track, then rewrote the prominent lines onto real instruments.

Specifically, the post-production work broke into five concrete stages:

1. Stitching — edit, crossfade, and EQ-balance the three Jukebox outputs into a single coherent foundation, so the listener experiences one piece, not three concatenated experiments. This involved tempo-matching the three generations and locking them to a shared key centre.
2. Transcription — identify the most salient melodic lines in the AI bed and write them out in standard notation. Re-record those lines on cello and on a small set of synthesisers. This is what gives the piece its emotional human anchor. The AI bed alone is harmonically rich but timbrally generic.
3. Complementary composition — add tracks that the AI didn't produce: rhythmic pulses, additional pads, the low B–C ostinato that anchors the harmonic centre. These are *human-authored* sections that respond to what the AI generated.
4. Spectral filling — layer virtual instruments and samplers to fill the high-frequency gaps left by Jukebox's lossy compression. The highs the model couldn't hold on to. This is essentially running an inverse of the encoder's degradation profile, restoring brightness where it had been lost.
5. Mixing and mastering — final mix and master for live performance at the venue, with attention to the playback system the piece would actually be heard on.

The result is a roughly two-minute work that, played to a listener cold, doesn't announce itself as "AI-generated music." It announces itself as **music**. Only on a second listen, when you start to ask *what is this voicing? whose phrasing is this?*, do you notice that the timbral fingerprints don't quite match any single instrument or any single performer. That ambiguity, in our view, is the actual artistic content of the piece.

<figure style="margin: 2.5rem 0;">
<div style="display: grid; gap: 1.25rem;">
<div>
<div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-secondary); margin-bottom: 0.5rem;">Before · Jukebox bed only (the three stitched generations, no human overdubs)</div>
<audio controls preload="none" src="/audio/projects/bici-para-dos/jukebox-bed-only.mp3" style="width: 100%;"></audio>
</div>
<div>
<div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-secondary); margin-bottom: 0.5rem;">After · Bici para Dos, near-final mix with cello, complementary tracks, and spectral fill</div>
<audio controls preload="none" src="/audio/projects/bici-para-dos/bici-para-dos-final.mp3" style="width: 100%;"></audio>
</div>
</div>
<figcaption style="margin-top: 1rem; text-align: center; font-size: 0.875rem; color: var(--color-secondary); font-style: italic;">The before/after of post-production. The AI bed contributes the harmonic foundation in the low-mid register; everything that pushes the piece into "music" — cello, ostinato, spectral filling, mix — is human-authored on top.</figcaption>
</figure>

![Bici para Dos visual artwork](/img/projects/bici-para-dos/poster.png)

## What I learned about working with generative audio models

<!-- [UNIQUE INSIGHT] -->

| Area | Lesson |
| --- | --- |
| The model as collaborator | Jukebox isn't a composer. It's a fast-but-expensive *brainstorming partner* that returns fully-mixed sketches at one hour per take. The artistry lives in the seed, the conditioning, and the post-production. |
| Style choice as constraint | Picking Hans Zimmer wasn't aesthetic. It was a technical decision about which frequencies the encoder reconstructs cleanly. Pick a style that sits inside your model's high-fidelity band. |
| Density beats sparsity | Dense, stylistically committed seeds produce much more controllable output than sparse seeds. Don't ask the model to "fill the room", give it something already in the room. |
| Three takes beat one | Generating multiple candidates and stitching the best fragments outperforms picking a single "best" generation. Treat the model as a third member of the band, not as an oracle. |
| Stems are not real | Jukebox returns fully-mixed beds, not stems. If you want individual lines, plan to *transcribe and re-record*, not to source-separate. |
| Post-production is the work | The ratio of AI-time to human-time on this project was roughly 1:20. Most of what you hear in the final piece is René's transcription, complementary composition, and mix decisions. The AI provided the bed; humans built the room. |
| Remote collaboration scales | An 8,000 km distance turned into an asset: clear written briefs, clear artefact handoffs, asynchronous reviewing on shared Dropbox folders. Async beat synchronous for this kind of work. |

## Frequently asked technical questions

### How long did each Jukebox generation take?

Several hours of GPU time per ~30-second continuation on the `5b` variant. We generated 3 candidates per run, then kept the 1-2 musically usable ones. The full base track required three independent generation runs, plus a substantial number of discarded experiments during the calibration phase.

### Why did you use the 5B model instead of the smaller 1B variants?

We prioritised output quality over iteration speed. The `5b` variant produces more coherent long-range structure and, unlike `1b_lyrics`, has no lyrics conditioning — both important for an instrumental cinematic piece. The cost was generation time: several hours per ~30-second continuation. With a fixed festival deadline, that meant we ran fewer experiments and had less room to recover from bad generations, but the fidelity improvement was worth it.

### Could the same approach work with newer models like MusicLM or Suno?

Conceptually yes, the seed-condition-curate-transcribe loop is model-agnostic. But the specific constraints would shift. Newer models have different fidelity profiles, different conditioning surfaces (text prompts instead of artist/genre tags), and different generation latencies. You'd need a fresh experimentation phase to map the new model's behavioural envelope before committing to a style. For a technical breakdown of how those newer diffusion-based systems work, see [AI Music Generation in 2025: Diffusion Models & Stable Audio](/blog/the-new-era-of-ai-driven-musical-composition).

### How did you handle the high-frequency degradation in the final mix?

Two ways. First, by writing the piece to live in the low-mid register from the start, so the loss happened where there wasn't much information to begin with. Second, in post-production, by layering virtual instruments and samplers in the upper register to fill the spectral gaps Jukebox couldn't reconstruct. The result is a hybrid spectrum: low-mid is largely AI-generated, the highs are human-overlaid.

### How much of the final piece is "the AI" versus "the humans"?

By the end of post-production the question stops being meaningful, which is partly the point. If you measure by audio source, the AI bed contributes roughly half of what you hear, mostly in the low-mid harmonic content. If you measure by *authored decisions*, almost everything (seed design, conditioning, candidate selection, transcription, complementary composition, mix) is human. The piece exists in the seam between the two.

For how the AI music landscape evolved since 2021 — from Jukebox to today's diffusion models — read [AI Music Generation in 2025: Diffusion Models & Stable Audio](/blog/the-new-era-of-ai-driven-musical-composition).

## The piece in context

*Bici para Dos* premiered on **24 October 2021 at the Palacio Vergara, Viña del Mar, Chile**, as one of three commissioned works for the Festival Ciencia & Música at FECI 2021. The commission set the deadline, the budget, and the venue, but the work itself, the model selection, the experiments, the seed design, the conditioning, the three generations, and the post-production, was done across six time zones and 8,000 kilometres in two months of part-time collaboration. 

## Project credits

- Composition, transcription, orchestration, mixing & mastering: René Verón
- AI engineering, model selection, prompt design, sampling pipeline, audio editing: Francisco Frez
- Project lead, AC3E: Matías Zañartu
- Scientific & technical support, AC3E: Mauricio Araya, Fabián Rubilar
- Funding: CONICYT / PIA, Project Code FB0008 (AC3E)
- Premiere venue: Palacio Vergara, Viña del Mar, 24 October 2021

## Links

- Reproducible code & Colab notebook: [github.com/ffrezr/bici-para-dos](https://github.com/ffrezr/bici-para-dos)
- Long-form creative diary: [reneveron.com/bici-para-dos-ai-music](https://reneveron.com/bici-para-dos-ai-music)
- OpenAI Jukebox release: [openai.com/research/jukebox](https://openai.com/research/jukebox)
- Jukebox paper: [Dhariwal et al., 2020](https://arxiv.org/abs/2005.00341)
- AC3E: [ac3e.usm.cl](https://ac3e.usm.cl/)

*By [Francisco Frez](/about), Data Engineer & Co-Creator · Aug–Dec 2021*
