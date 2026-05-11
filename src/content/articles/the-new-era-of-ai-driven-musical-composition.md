---
slug: the-new-era-of-ai-driven-musical-composition
title: "AI Music Generation in 2025: Diffusion Models & Stable Audio"
excerpt: >
  From a live AI-composed cello performance to today's text-to-audio masterpieces—this is how generative music grew up.
metaDescription: >
  How AI music generation works in 2025: diffusion models, U-Net & DiT architectures, and a deep dive into Stable Audio 2.0, Suno, and Udio—plus the legal landscape.
category: AI Tools
date: Jun 3, 2025
lastUpdated: May 11, 2026
readTime: 15 min read
image: /img/ai-music/cover.webp
tags:
  - generative-ai
  - music
  - diffusion-models
  - stable-audio
  - deep-learning
faq:
  - question: What is audio music generation in AI?
    answer: >
      Audio music generation produces raw waveforms directly—the actual sound
      signal—rather than symbolic representations like MIDI or sheet music. This
      lets AI capture timbre, texture, and vocal inflections that symbolic
      generation cannot represent. Modern systems generate 44.1 kHz stereo audio
      from text prompts using diffusion models.
  - question: How do diffusion models generate music?
    answer: >
      Diffusion models start from random noise and refine it step by step into a
      coherent audio waveform. During training the model learns the reverse of a
      noising process — predicting what slightly noisier audio looked like
      cleaner. At inference, it iterates that denoising from pure noise until a
      track emerges, guided by text prompts and timing embeddings.
  - question: What is Stable Audio 2.0?
    answer: >
      Stable Audio 2.0 is Stability AI's latent-diffusion music model that
      generates up to three-minute structured tracks at 44.1 kHz stereo from
      natural-language prompts. Version 2.0, released in April 2024, adds
      audio-to-audio transformation and style transfer on top of the original
      text-to-audio pipeline.
  - question: Can AI-generated music be used commercially?
    answer: >
      It depends on the platform and the source material. Stable Audio, Suno,
      and Udio each have distinct licensing terms, generally requiring a paid
      tier for commercial use. Tracks that imitate a real artist's voice without
      consent—like "Heart on My Sleeve"—face takedowns and legal exposure
      regardless of the platform's terms.
---

A few years ago I had an experience that completely reshaped the way I view music and technology. During Chile's third Science Festival, I teamed up with an American musician on an ambitious experiment: to create a musical piece composed entirely by an artificial intelligence model. Our goal was to showcase a novel approach to using AI in music. We plunged into the world of generative music and developed a piece produced almost entirely by a neural network model, which was performed live by a cellist during the event.

It was an exciting project; we composed orchestrated audio with synthesizers, focused mainly on textures and atmospheres, using the concept of the Shepard tone (ascending melodies that seem never to stop rising) as input for the model.

<audio controls src="/audio/ai-music-input.wav" preload="metadata" style="width:100%;margin:1rem 0"></audio>

It was a lengthy period of experimentation. The model's unpredictability kept us fine-tuning parameters until the music achieved the coherence we wanted. After careful post-production, the project culminated in the piece below.

<audio controls src="/audio/ai-music-final.mp3" preload="metadata" style="width:100%;margin:1rem 0"></audio>

While this seemed innovative at the time, generative music now sits at the frontier between art and technology. Just four years later, today's models generate sophisticated, high-fidelity compositions and offer far more intuitive workflows. Friendlier interfaces and collaborative editing let composers steer the AI and polish the output until it matches their artistic vision.

The integration of digital post-production tools has also raised the quality bar, letting artists weave both acoustic and electronic elements into AI-generated audio. These advances have propelled generative music from a technical curiosity to a powerful resource for composers, producers, and artists worldwide.

> ## Key Takeaways
>
> - Diffusion models turn random noise into coherent audio through gradual, controlled denoising guided by text prompts and timing embeddings.
> - Stable Audio 2.0 generates structured 3-minute tracks at 44.1 kHz stereo from natural-language prompts, with audio-to-audio and style transfer added in April 2024.
> - The contrast between "Heart on My Sleeve" (taken down) and "Now and Then" (Grammy-nominated) shows that consent and context matter as much as audio quality.
> - For musicians, AI works best as a creative collaborator—an instrument that extends imagination—rather than a shortcut that replaces human musicality.

---

## Audio Music Generation

The field of AI music generation can be divided into two main directions: **symbolic music generation** and **audio music generation**. While the former focuses on creating representations of music, such as MIDI files, sheet music, or piano rolls based on musical structures and patterns, the latter works directly with sound waves.

In audio music generation, the AI produces the raw audio signal—that is, it generates the very waveform found in a recorded track. This lets it capture essential sound nuances such as texture, timbre, and even vocal inflections—facets that symbolic generation, working with discrete data, cannot address in the same way. This approach closely resembles the recording and mixing stages of music production, enabling compositions with striking realism and sonic complexity.

One of the greatest challenges of generating music at the audio level lies in the high data rate: just a few minutes of high-fidelity audio translate into millions of sample points. Nevertheless, advances in deep learning have opened the door to this possibility, making the creation of raw audio feasible.

As we have seen, the field of AI music generation has many facets; in this article, we will focus exclusively on the approach that enables the creation of complete musical works.

---

## How Do Generative Audio Models Work?

In the last few years, **diffusion models** have become the state-of-the-art technology for audio and music generation. Compared with earlier approaches—such as autoregressive models (for example, WaveNet or Jukebox) and generative adversarial networks (GANs)—diffusion models deliver unprecedented realism and audio quality, along with highly refined stylistic control. Whereas autoregressive models generate audio sequentially and GANs can struggle with stability or diversity, the diffusion methodology can create sound signals with exceptional fidelity and creative versatility.

### The Diffusion Process: From Noise to Audio

The core principle behind diffusion models is to transform random noise into coherent audio through a gradual, controlled procedure. This process has two main phases:

- **Forward Diffusion (noising):** Noise is progressively added to an audio signal—much like the static on an old television turning a clear picture into something unrecognizable.
- **Reverse Diffusion (denoising):** The added noise is removed to recover (or reconstruct) the original signal. The model learns, step by step, to identify and eliminate the noise until the signal becomes a clear, well-defined piece of audio.

In essence, the process starts with **white noise**, which is gradually refined through successive denoising iterations. Each step brings the signal closer to a recognizable waveform, whether it's a short sample or an entire song. This method first gained popularity in the image domain, where one can watch noise turn into a detailed picture (for example, a puppy next to a tennis ball), providing a visual demonstration of the approach's effectiveness.

![Diffusion Process for Image Generation](/img/ai-music/diffusion-image.webp "Diffusion Process for Image Generation (source: [The State of Generative Music](https://medium.com/whitebalance/the-state-of-generative-music-0fcb2745baf9) — Christopher Landschoot)")

The same concept is adapted to audio. Instead of reconstructing an image, the model converts noise into a waveform that represents high-quality music or sound.

![Diffusion Process for Audio Generation](/img/ai-music/diffusion-audio.webp "Diffusion Process for Audio Generation (source: [The State of Generative Music](https://medium.com/whitebalance/the-state-of-generative-music-0fcb2745baf9) — Christopher Landschoot)")

### Architecture of Diffusion Models

Most diffusion models are built on the **U-Net architecture**, a neural network originally designed for image processing. U-Net is distinguished by a symmetric structure that combines two paths:

- **Encoder (downsampling path):** Captures the essential features of the audio signal. At each level the signal is compressed, allowing the model to identify global traits (such as melody and rhythm) as well as fine details (like timbral nuances).
- **Decoder (upsampling path):** Reconstructs the signal from the compressed representation. Skip connections between the encoder and decoder ensure that important details are preserved at every scale.

![U-Net Architecture](/img/ai-music/unet.png "U-Net architecture (source: [U-Net: Convolutional Networks for Biomedical Image Segmentation](https://arxiv.org/abs/1505.04597v1) — Ronneberger, et. al)")

Although the original U-Net uses two-dimensional convolutions for images, it can be readily adapted to audio by switching to one-dimensional convolutions. This enables the model to learn the inherent complexity of waveforms and transform noise into coherent audio.

### Training: Learning to Add and Remove Noise

A surprising aspect is that, to teach a model how to remove noise from an audio signal, it is first trained on the reverse process: _adding_ noise. During training, the model is shown an audio signal and asked to predict that same signal with a small amount of Gaussian noise added. This noise is defined by a probabilistic distribution, allowing the model to learn predictable patterns in the signal's corruption.

![Noising a Snare Sample](/img/ai-music/snare-forward.gif "Noising a Snare Sample (source: [CRASH: Raw Audio Score-based Generative Modeling for Controllable High-resolution Drum Sound Synthesis](https://github.com/simonrouard/CRASH) — Rouard, Hadjeres)")

Once the model has mastered the task of injecting noise in a controlled manner, the procedure is inverted: at each iteration, part of the noise is gradually removed, refining the signal until the original audio is recovered. With a fixed number of steps (T), the model progressively transforms a fully noisy signal into a clear piece of audio, preserving both the global structure and the fine details.

![Audio Waveform Diffusion](/img/ai-music/snare-reverse.gif "Audio Waveform Diffusion (source: [CRASH: Raw Audio Score-based Generative Modeling for Controllable High-resolution Drum Sound Synthesis](https://github.com/simonrouard/CRASH) — Rouard, Hadjeres)")

---

## Leading Music Generation Architecture

Today, many models can generate music at production-grade quality. In this section, I'll focus on what I consider the leader—and for many, one of the most outstanding developments in this field: **Stable Audio**. It is a latent diffusion model architecture for audio that is conditioned on text metadata as well as audio file duration and start time. This design allows precise control over both the content and the duration of the generated audio.

Stable Audio generates audio tracks in response to descriptive text prompts and a specific duration requested by the user. For example, entering a prompt like:

> _"Post-Rock, Guitars, Drum Kit, Bass, Strings, Euphoric, Uplifting, Moody, Flowing, Raw, Epic, Sentimental, 125 BPM"_

Along with a request for a 95-second track enables the model to generate audio that adheres to both the desired style and duration. Check the result below:

<iframe loading="lazy" width="100%" style="aspect-ratio:16/9;border-radius:2px;margin:1rem 0" src="https://www.youtube.com/embed/lvN67Xe7HNI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This additional temporal conditioning overcomes a common limitation of traditional systems, which often produce fixed-size outputs and may interrupt musical phrases due to being trained on cropped segments of longer recordings.

### Stable Audio Architecture

![Stable Audio Architecture](/img/ai-music/stable-audio-arch.png "Stable Audio Architecture (source: [Stable Audio: Fast Timing-Conditioned Latent Audio Diffusion](https://stability.ai/research/stable-audio-efficient-timing-latent-diffusion))")

Stable Audio employs a modular latent diffusion architecture, including a Variational Autoencoder (VAE), a text encoder, and a U-Net-based diffusion model.

The VAE plays a critical role by compressing stereo audio into a data-efficient, noise-resistant, and invertible lossy latent encoding. This process facilitates faster generation and training compared to working directly with raw audio samples. The model employs a fully-convolutional architecture based on the [Descript Audio Codec](https://github.com/descriptinc/descript-audio-codec) encoder and decoder, enabling arbitrary-length audio encoding and decoding while maintaining high-fidelity outputs.

To effectively condition the model on text prompts, a frozen text encoder from a [CLAP](https://github.com/LAION-AI/CLAP/) model is utilized. This CLAP model, trained from scratch on a dedicated dataset, allows the extracted text features to capture nuanced relationships between words and sounds. These features are then supplied to the diffusion U-Net via cross-attention layers, ensuring that the generated audio accurately reflects the prompt.

During training, two timing properties are computed for each audio chunk: `seconds_start` (where the chunk begins inside the original recording) and `seconds_total` (the full duration of the source audio). Both values are translated into per-second discrete learned embeddings and concatenated with the prompt tokens. These tokens then guide the U-Net diffusion model through cross-attention layers.

The U-Net architecture itself is derived from Moûsai and combines residual, self-attention, and cross-attention layers to denoise audio conditioned on text and timing. Memory-efficient attention implementations are what allow it to scale to long sequences without blowing up GPU memory.

### Evolution of Stable Audio

Stable Audio debuted in September 2023 as the first commercially viable AI music generation tool capable of producing high-quality audio at 44.1 kHz using latent diffusion technology. This release marked a milestone in the industry, earning recognition as one of [TIME's Best Inventions of 2023](https://stability.ai/news/stable-audio-times-best-inventions-of-2023).

Not satisfied with this achievement, Stability AI introduced **Stable Audio 2.0** in April 2024. The new version extends the model's capabilities beyond text-to-audio conversion by incorporating **audio-to-audio** capabilities. Users can now upload audio samples and, through natural language prompts, transform them into a wide range of sounds. This update also enhances sound effects generation and style transfer, offering artists and musicians greater flexibility, control, and an enriched creative process.

This model is available to use for free on the [Stable Audio website](https://stableaudio.com/).

#### New Features

Stable Audio 2.0 significantly enhances creative tools by supporting both text-to-audio and audio-to-audio prompting. It can produce structured compositions of up to three minutes, including intros, developments, outros, and dynamic stereo effects.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem;margin:0.5rem 0">
  <iframe loading="lazy" src="https://stableaudio.com/1/share/10851c11-f998-418e-ad0b-1f7654ce5fe5/iframe" width="100%" height="350" frameborder="0" style="border-radius:2px" allow="autoplay"></iframe>
  <iframe loading="lazy" src="https://stableaudio.com/1/share/99dfdd21-ae68-4e2e-bfa5-33b72fa3bdaa/iframe" width="100%" height="350" frameborder="0" style="border-radius:2px" allow="autoplay"></iframe>
</div>

Users can directly upload audio files, transforming them through natural language instructions. An integrated style transfer functionality allows further customization, matching generated or uploaded audio precisely to a project's theme and tone.

### Stable Audio 2.0 Architecture

The updated architecture includes a highly efficient **autoencoder** that converts raw audio signals into compact latent representations, essential for handling long tracks effectively. The encoder reduces temporal resolution through strided convolutions combined with ResNet layers and Snake activations, capturing key audio elements. The decoder reconstructs the original signal using transposed convolutions, maintaining high audio quality despite compression.

![Autoencoder Diagram](/img/ai-music/autoencoder.png "Autoencoder Diagram (source: [Introducing Stable Audio 2.0](https://stability.ai/news/stable-audio-2-0))")

Once the compact latent representation is obtained, the next step is to apply latent diffusion via a **Diffusion Transformer (DiT)**, which uses attention blocks and MLPs to manage longer sequences effectively. The model begins with noise in the latent space, which is refined step by step, predicting the necessary correction to gradually eliminate the noise and approach a "clean" state. Techniques such as block-wise attention and gradient checkpointing optimize computational efficiency. Conditional cross-attention layers integrate textual and timing information, ensuring coherent musical structures throughout the piece.

![DiT Diagram](/img/ai-music/dit.png "DiT Diagram (source: [Introducing Stable Audio 2.0](https://stability.ai/news/stable-audio-2-0))")

An interesting detail is that the model is prepared to generate music of different durations. A timing conditioning is introduced to indicate the model's position within the track, enabling the generation of various track lengths. Finally, as in its previous version, the CLAP model acts as a bridge between language and audio.

> **Building with similar AI systems?** I've also written a [Python guide to Claude prompt caching](/blog/claude-prompt-caching-python-guide) and a [walkthrough of Claude Managed Agents](/blog/claude-managed-agents-guide) that cover related patterns for production AI work.

---

## Music Industry Transformed by Artificial Intelligence

In recent years, AI-based music technology has advanced significantly, opening new opportunities within the commercial realm. Platforms dedicated to AI-driven music generation now offer practical and innovative solutions for producers, composers, and marketing professionals who require high-quality music but lack expertise in complex music production techniques. This democratization of AI-based music creation is not only making professional-quality sounds widely accessible but also driving commercial creativity into directions that weren't practical before.

### AI-Generated Music Platforms for Full Tracks

Here's an overview of the latest releases of AI music generation platforms. I encourage you to visit each site and listen to other people's creations:

#### Stable Audio 2.0

![Stable Audio web interface](/img/ai-music/stable-audio-web.png "Stable Audio 2.0 web interface (source: [Stable Audio](https://stableaudio.com/))")

We've already covered its architecture; here I'll focus on the platform itself. Stable Audio is offered via an easy web interface and an API. The model produces high-quality, full tracks with coherent musical structure up to three minutes long at 44.1 kHz stereo from a single natural-language prompt.

In terms of user experience, Stable Audio is prompt-driven—there's no granular editing of the composition after generation, but you can refine the text prompts to steer the style. The system encourages iterative prompt engineering (specifying details like instruments or emotional tone) to get the best results.

While it doesn't generate vocals or lyrics, it excels at instrumental music and atmospheric soundscapes. It's ideal for royalty-free music beds, podcasts, or video background tracks where high audio quality is needed. Stable Audio is focused on achieving high-quality audio by sacrificing functionality in its creation.

#### Suno – Text-to-Music with Lyrics & Vocals

![Suno AI web interface](/img/ai-music/suno-web.png)

[Suno](https://suno.com/) (v4 November 2024) is a cutting-edge AI music generator that creates full songs with vocals and lyrics from text prompts. Users can describe a genre, mood, and theme (e.g. "happy pop song about a vacation with fast piano and singing") and Suno's AI will compose melody, chords, beats, and even sing generated lyrics. It supports multiple languages and genres (from pop and rock to classical, jazz, etc.) and can also produce instrumental-only tracks on demand. Suno's vocals are synthetic but surprisingly expressive, capable of rapping or singing in various styles.

Suno offers a web-based interface that's easy for beginners. You simply type a prompt and receive two song variants (up to about 80 seconds each) within a few seconds. A unique feature is real-time collaboration via Discord, where users can share and co-create music live. All generated music is copyright-free and can be used in content, but commercial use requires a paid plan.

#### Udio – AI Song Generator with Realistic Vocals

![Udio web interface](/img/ai-music/udio-web.png)

Launched in April 2024, [Udio](https://www.udio.com/) is an AI-driven music creation platform currently in beta testing, positioning itself as a direct competitor to Suno. It allows users to generate complete songs—including instrumental compositions and emotionally expressive vocal performances—from simple or detailed prompts. Users can easily remix or expand upon the AI-generated tracks, demonstrating its flexibility and creative potential.

Udio distinguishes itself by providing diverse musical options, including custom, instrumental, and AI-generated tracks, allowing users significant creative control over lyrics and composition. Additionally, Udio clearly addresses licensing issues, guiding users regarding the commercial rights to their AI-generated content. Its standout features include high-quality vocal synthesis and genre versatility, making it appealing to creators seeking realistic and authentic AI-produced music.

---

### Notable AI-Generated Compositions and Their Reception

To showcase how AI is reshaping the music landscape, let's explore some prominent AI-generated compositions and examine the music industry's diverse reactions:

#### "Heart on My Sleeve" – Ghostwriter (Drake AI feat. The Weeknd AI, 2023)

Perhaps the most talked-about AI song of 2023, this track was created by an anonymous producer _Ghostwriter977_ using AI models of Drake's and The Weeknd's voices. The song, a catchy hip-hop/R&B number, went viral on TikTok and was briefly available on streaming platforms. Listeners were stunned at how convincingly it sounded like a collaboration between those superstars—to some, it proved that fan-made AI can rival official music in public appeal.

The reception from the music industry, however, was swift and negative. Universal Music Group condemned the track and pressed platforms to remove it due to **copyright and impersonation issues**. Within days, "Heart on My Sleeve" was taken down from Spotify, Apple Music, and the other majors, though it still circulates online. This incident was a wake-up call: it demonstrated AI's power to generate hit-like songs and forced the industry to grapple with managing such content. It also sparked legal discussions via DMCA and calls for new laws.

Despite the takedown, the song's popularity showed a potential audience appetite for AI-produced novelty tracks—albeit one that clashes with current copyright frameworks.

#### ["Now and Then" – The Beatles (2023)](https://www.youtube.com/watch?v=Opxhh9Oh3rg)

<iframe loading="lazy" width="100%" style="aspect-ratio:16/9;border-radius:2px;margin:1rem 0" src="https://www.youtube.com/embed/Opxhh9Oh3rg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In a very different scenario, AI was used by legitimate artists to create a new Beatles release. "Now and Then" was an unfinished John Lennon demo from the 1970s. In the 2020s, Paul McCartney, Ringo Starr, and the team used AI audio separation technology (developed during Peter Jackson's Beatles documentary) to isolate Lennon's vocal and piano from a hiss-filled tape. The cleaned-up vocals allowed the remaining Beatles to finish the production and arrangement.

Released in late 2023 as "the last Beatles song," it received a warm reception from fans and critics, largely because it authentically sounded like the Beatles and brought closure to their catalog. The use of AI here was seen as _a restoration tool_ rather than generating something from scratch—an example of AI being used to preserve and enhance human recordings.

Industry-wise, it was even nominated for a Grammy award, indicating establishment acceptance. This positive reception contrasts with the Ghostwriter case: it was authorized and carefully done with respect for the artist's legacy. "Now and Then" showed how AI can be a **tool for nostalgia and preservation**, extending what's possible in music production.

#### ["BBL Drizzy" by King Willonius (2024)](https://www.youtube.com/watch?v=1uW_AUwEv-0)

<iframe loading="lazy" width="100%" style="aspect-ratio:16/9;border-radius:2px;margin:1rem 0" src="https://www.youtube.com/embed/1uW_AUwEv-0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In 2024, comedian and content creator King Willonius gained significant attention with his AI-generated song **"BBL Drizzy"**, a parody addressing humorous rumors surrounding rapper Drake. Utilizing **Udio**, King Willonius crafted an R&B track stylistically reminiscent of the 1970s, combining satirical, humorous lyrics with authentic-sounding musical production.

The song rapidly went viral on platforms such as TikTok and SoundCloud, achieving millions of streams and inspiring numerous remixes across various genres. Its popularity further skyrocketed when renowned producer **Metro Boomin** sampled the track for an instrumental titled "BBL Drizzy," released on May 5, 2024, amid a high-profile dispute between Drake and Kendrick Lamar. This instrumental similarly went viral, attracting attention from celebrities and social media users, who produced their own versions and interpretations.

The creation and viral success of "BBL Drizzy" underscore the increasingly prominent role AI tools play in music production, illustrating how AI-generated compositions can resonate deeply and widely with global audiences while influencing popular culture.

---

## Final Thoughts

Artificial intelligence has shifted from novelty to indispensable creative partner. Platforms like Stable Audio 2.0, Suno, and Udio already act as virtual bandmates, tape-restorers, and blank-canvas composers. But with this power come obligations: licensing must be ethical, attribution transparent, and artists' voices—whether real or stylistic—respected. The wildly different reactions to "Heart on My Sleeve" and "Now and Then" prove that consent and context matter as much as audio quality.

Who "owns" an AI-generated melody, and should the data used to train these systems be disclosed—compensating the original artists in the process? As AI models grow more adept at imitating voices and styles, we must ask whether faithful reproduction crosses the line into unauthorized impersonation. Clear rules on authorship and compensation will determine whether AI becomes an ally or an ethical minefield.

For musicians, the upside is vast: faster ideation, lower barriers, and entirely new genres born from human-machine synergy. Used as an instrument—not a shortcut—AI extends our imagination. Human creativity stays the melody; AI simply adds fresh harmonies and new timbres that propel the music somewhere we could never have gone alone.

> _If you found the AI-collaboration patterns here useful, you may also like my piece on [how to use Claude Cowork](/blog/how-to-use-claude-cowork)—similar human-in-the-loop ideas, applied to software work._

---

## References

1. Ho, J., Jain, A., & Abbeel, P. (2020). [_Denoising Diffusion Probabilistic Models_](https://arxiv.org/abs/2006.11239). **arXiv:2006.11239** — foundational DDPM paper.
2. Rouard, S., & Hadjeres, G. (2021). [_CRASH: Raw Audio Score-based Generative Modeling for Controllable High-resolution Drum Sound Synthesis_](https://arxiv.org/abs/2106.07431). **arXiv:2106.07431**.
3. Ronneberger, O., Fischer, P., & Brox, T. (2015). [_U-Net: Convolutional Networks for Biomedical Image Segmentation_](https://arxiv.org/abs/1505.04597). **arXiv:1505.04597**.
4. Evans, Z., Carr, C. J., Taylor, J., Hawley, S. H., & Pons, J. (2024). [_Fast Timing-Conditioned Latent Audio Diffusion_](https://arxiv.org/abs/2402.04825). **arXiv:2402.04825** — the original Stable Audio paper.
5. Stability AI. (2024). [_Introducing Stable Audio 2.0_](https://stability.ai/news/stable-audio-2-0).
6. Stability AI. (2023). [_Stable Audio: Times Best Inventions of 2023_](https://stability.ai/news/stable-audio-times-best-inventions-of-2023).
7. Stability AI. (2023). [_Using AI to Generate Music_](https://stability.ai/news/stable-audio-using-ai-to-generate-music).
8. Sohl-Dickstein, J., Weiss, E. A., Maheswaranathan, N., & Ganguli, S. (2015). [_Deep Unsupervised Learning using Nonequilibrium Thermodynamics_](https://arxiv.org/abs/1503.03585). **arXiv:1503.03585** — origin of diffusion-based generative models.
9. Agostinelli, A., Denk, T. I., Borsos, Z., Engel, J., Verzetti, M., et al. (2023). [_MusicLM: Generating Music From Text_](https://arxiv.org/abs/2301.11325). **arXiv:2301.11325**.
10. Forsgren, S., & Martiros, H. (2022). [_Riffusion: Stable Diffusion for Real-time Music Generation_](https://www.riffusion.com/about). **Riffusion**.
11. Suno AI. (2024). [_Suno v4 — AI Music Generation Platform_](https://suno.com/).
12. Udio. (2024). [_AI Song Generator with Realistic Vocals_](https://www.udio.com/).
13. Billboard. (2023). [_AI Drake Track 'Heart on My Sleeve' Pulled From Streaming Services_](https://www.billboard.com/business/legal/ai-drake-track-pulled-streaming-services-1235312078/).
14. Billboard. (2024). [_Metro Boomin, Future and the AI Sampling Controversy Around "BBL Drizzy"_](https://www.billboard.com/business/tech/metro-boomin-bbl-drizzy-future-ai-sampling-1235682587/).
15. Apple. (2023). [_"Now and Then" — The Beatles, the Last Beatles Song_](https://www.thebeatles.com/now-and-then).
