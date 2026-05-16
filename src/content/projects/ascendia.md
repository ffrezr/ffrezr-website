---
slug: ascendia
title: "Ascendia: Magic Lands"
seoTitle: "Ascendia: Magic Lands — Math Adventure Game for Primary School"
role: Co-Creator & Product Lead
period: Sep 2021 — Sep 2022
location: Valparaíso, Chile
description: "Math adventure game for 3rd and 4th grade, the student-facing half of Omniduc. Shipped on Google Play and Microsoft Store, with Excel question uploads and real-time teacher analytics."
metaDescription: "Math adventure game for 3rd-4th grade on Android and Windows. 75 questions/month via Excel template, five-tower difficulty system, real-time teacher analytics."
image: /img/products/ascendia/ascendia-banner.png
tags:
  - EdTech
  - Game Design
  - Mobile App
  - Gamification
  - Education
type: venture
featured: true
published: true
display: true
lastUpdated: "2026-05-13"
faq:
  - question: "What was Ascendia: Magic Lands?"
    answer: >
      Ascendia: Magic Lands was a math adventure video game for 3rd and 4th
      grade students, built between 2021 and 2022 as the student-facing half
      of Omniduc, a Chilean B2B EdTech service for primary school math. It
      ran on Android phones, tablets, and Windows devices, turning written
      homework into a gameplay loop while sending every answer back to the
      teacher in real time.
  - question: "What ages and grades was Ascendia designed for?"
    answer: >
      Ascendia targeted 3rd and 4th grade primary school students (roughly
      8 to 10 years old), with an extension to 5th grade planned under the
      Corfo Crea y Valida roadmap. The first pilots ran on 5th grade
      students at three Chilean schools.
  - question: "Where could you download Ascendia?"
    answer: >
      Ascendia was published on Google Play (for Android phones and tablets)
      and the Microsoft Store (for Windows tablets and laptops). The Windows
      distribution served a specific subset of subsidized Chilean schools
      that received Microsoft-bundled devices through MINEDUC programs.
  - question: "Did Ascendia work offline?"
    answer: >
      Yes. The game client was offline-tolerant: events buffered locally on
      disconnect and synced to the cloud on reconnect. This was a deliberate
      design decision because Wi-Fi was intermittent or absent in some
      Chilean classrooms where Ascendia was piloted.
  - question: "How was Ascendia priced?"
    answer: >
      Ascendia used a per-student annual subscription paid by the school.
      The Basic plan was US$10 per student per year and included the game,
      the web portal, all students and teachers, initial teacher training, a
      monthly metric report, and support. The Premium plan was US$15 per
      student per year and added parent and director accounts, head-teacher
      views, fidelization webinars, and personalized recommendations.
  - question: "Why did the Ascendia venture close in 2022?"
    answer: >
      The Omniduc venture behind Ascendia closed in September 2022 despite
      shipping a working product. The product worked, the pilots ran, and
      Corfo Crea y Valida funding was approved, but the channel friction
      proved structural: 6 to 12 month sales cycles in Chilean schools,
      distributed decision-makers (principal, UTP head, math department),
      and near-zero discretionary school budgets meant the unit economics
      on the spreadsheet diverged from reality.
  - question: "Is Ascendia still available today?"
    answer: >
      No. Ascendia is no longer available since Omniduc closed as a
      company. The builds were taken down from Google Play and the
      Microsoft Store, and no new content is being authored or pushed to
      the question bank. Ascendia is preserved on this page as a product
      retrospective, not as an active commercial offering.
---

Ascendia: Magic Lands was the video game I co-created between 2021 and 2022 as the student-facing half of [Omniduc](/projects/omniduc), a Chilean B2B EdTech service for primary school math. The internal tagline was direct and load-bearing: "the evolution of homework". Instead of a printed worksheet that the teacher graded by hand on Sunday night, the student opened a tablet, jumped between towers in a fantasy world, and answered math problems embedded inside an adventure-game loop. Every answer travelled to a teacher portal in seconds.

The game shipped on **Google Play** and the **Microsoft Store**, was piloted in real classrooms and worked alongside an Excel-based question loader that let teachers upload curriculum-aligned content monthly without requiring a release cycle. It won two consecutive Corfo investments (Semilla Expande in 2021 and Crea y Valida in 2022) and partnered with [Explora Valparaíso](https://www.explora.cl/valparaiso/) from the Ministry of Science.

This page documents the product: positioning, the 3-step user flow, the difficulty system, the question bank, the technical decisions, the business model, and the team that built it. For the broader business story (the founding, the funding mechanics, the channel post-mortem, the reasons the venture closed in September 2022 despite shipping a working product), see the [full Omniduc retrospective](/projects/omniduc).

> **Key Takeaways**
> - An adventure-style math game for 3rd and 4th grade (extended to 5th in the Crea y Valida roadmap), available on Android phones, tablets, and Windows. Worlds were split into **islands** (each mapped to a curricular learning objective) and **towers** within each island (each mapped to a difficulty tier). Each tower was a ten-room climb: jump between floating platforms, enter a magical room, answer one math question per room, repeat ten times to reach the top.
> - The product replaced the homework worksheet with an entertaining game loop. Same content coverage, very different engagement profile, plus an automatic structured event stream for the teacher.
> - Every student answer generated a structured event sent to the cloud, feeding a teacher web portal with question-by-question performance, updated in near real time during class.
> - Teachers (or the school's curriculum team) uploaded **75 questions per month** via an Excel template, across **three difficulty tiers** (Initial, Intermediate, Advanced) and **three question types** (multiple choice, true/false, short development).
> - Annual subscription pricing was **US$ 10 per student/year** for the Basic plan and **US$ 15 per student/year** for Premium. The global game-based learning market was projected to reach **US$28.8B by 2025** ([PRWeb, 2020](https://www.prweb.com/releases/global_game_based_learning_market_spikes_to_28_8_billion_by_2025/prweb17094668.htm), retrieved 2026-05-15).
> - Ascendia shipped on Google Play and the Microsoft Store, was piloted at three Chilean schools, and was supported by Corfo Semilla Expande and Crea y Valida grant approvals.

## The Tagline: "The Evolution of Homework"

Every product needs a one-line pitch, and Ascendia's was "the evolution of homework." Teachers, parents, and principals understood it instantly. The traditional homework worksheet is sent home with the student, completed at the kitchen table or on the bus the morning it's due, then graded by the teacher manually one student at a time. The cycle is slow, the engagement is low, and the data the teacher gets back is binary (correct/incorrect) without insight into *why* the student got something wrong.

Ascendia replaced each of those three failure modes:

- Slow becomes fast. The Excel-based question bank let the school refresh content monthly, and the in-class play session produced data the teacher could read minutes later, not days later.
- Low engagement becomes an adventure mechanic. A worksheet asks the student to *want* to do math. A video game asks them to *want* to play, and the math comes along for the ride.
- Binary data becomes a structured event. The teacher learned not just whether the student got a question wrong, but which specific wrong option they picked, how long they took, and how that pattern compared to the rest of the class.

A secondary tagline we used internally with academic teams was equally direct: ***"A worksheet that grades itself. Less grading, more analysis."*** That single sentence converted more curriculum heads than any feature slide ever did.

## What Was Ascendia? Product Anatomy

![Ascendia: Tierras Mágicas promotional poster showing the wizard mascot and the apprentice character against the magic-land castle backdrop, with the omniduc.cl URL](/img/products/ascendia/ascendia-poster.png "Original Ascendia: Tierras Mágicas marketing poster. The wizard-and-apprentice pair anchored the magic-meets-math brand identity that ran through every surface of the game.")

Ascendia was a math adventure game built around a single product hypothesis: an 8-year-old will voluntarily open a video game that embeds math questions, but will not voluntarily open a math quiz app. That asymmetry, between intrinsically motivated play and extrinsically imposed homework, was the entire product wedge.

The product had three structural layers, and understanding the distinction between them matters because most "gamified" math apps only build the top layer:

- Layer 1, visual wrapper. Bright colors, cartoon characters, particle effects. This is what most "gamified" math apps stop at.
- Layer 2, game loop. Movement, jumping, exploration, in-game progression. Ascendia ran a real adventure-platforming loop, not a quiz with sparkles.
- Layer 3, embedded assessment. Questions appeared inside the game loop with structured outcomes (right/wrong, response time, choice made), all of it streamed back to the teacher portal as analyzable data.

The mechanical consequence of building all three layers, not just the first one, was that the game stayed engaging even when no question was on screen. Inside each tower, the student jumped between floating platforms and entered a sequence of magical rooms: one room per question, ten rooms per tower. Movement, animations, and sound effects continued regardless of whether the student was mid-question. Wrong answers didn't loop; they showed the correct answer briefly and the game continued.

On reaching the top of the tower after completing all ten rooms, the player was rewarded with **magic chalks** (*tizas mágicas*), the game's currency, which they could spend on **skins** for their wizard. Adventure-game vocabulary, not gradebook vocabulary.

This is the part where, two decades earlier, Sir Ken Robinson and Dylan Wiliam had already done the conceptual work: the industrial education model assumes everyone learns the same content at the same pace, and short feedback cycles produce more learning than long ones. Ascendia operationalized both critiques. Personalize the pace, shorten the feedback cycle to seconds, and let the student-facing surface look like something the student would actually choose to open.

## The Pedagogical Model: Assessment for Learning, Operationalized

Ascendia's pedagogical thesis was "assessment *for* learning," not "assessment *of* learning." The distinction is academic but consequential. Assessment *of* learning is the summative test at the end of the unit (the SIMCE, the end-of-term exam), which tells you what the student *did* learn after the fact. Assessment *for* learning is continuous, low-stakes, embedded feedback that improves learning while it's happening. British educator Dylan Wiliam's meta-analyses on formative assessment have shown for over twenty years that short feedback cycles outperform long ones.

The game operationalized that with five concrete design rules:

- Feedback measured in seconds, not weeks. A question answered at 09:14 produced a portal event by 09:14:03. Teachers could pivot during the session, not after.
- Per-objective performance, not per-test. Each question was tagged with a learning objective from the MINEDUC curriculum, so the data wasn't "Maria got 7/10 on the test" but "Maria struggles with division into equal groups, specifically with quotient interpretation."
- Wrong-option capture, not just correct/incorrect. Knowing the student picked option C instead of option B is far more diagnostic than knowing they were wrong. It tells the teacher about the reasoning error, not just the outcome.
- Adaptive difficulty: each session climbed through three tiers (Initial → Intermediate → Advanced), gated by mastery rather than by time elapsed.
- No failure stigma: wrong answers showed the correct option and continued the run, removing the avoidance loop that quiz apps inadvertently train.

These were not arbitrary game-design choices. Each one mapped to a specific finding in the formative-assessment literature, validated by Gabriela Calderón, the curriculum specialist on the team with 15+ years of primary math teaching experience and post-graduate work in math didactics.

## How Did Ascendia Work? The Three-Step Loop

The product was three pieces glued together by a cloud database: an Excel-based question loader, a video game, and a teacher web portal. From the school's perspective, the workflow took the shape of a 3-step loop that repeated every academic month.

<figure style="margin: 2.5rem 0;">
<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ascendia's three-step loop: teacher uploads questions via Excel template, student plays the game, teacher receives performance reports in the web portal." style="width:100%;height:auto;font-family:inherit;display:block">
<defs><marker id="asc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#222"></path></marker></defs>
<text x="360" y="28" font-size="16" font-weight="700" text-anchor="middle" fill="#222">The Ascendia loop · From content to insight</text>
<text x="360" y="46" font-size="12" text-anchor="middle" fill="#222" opacity="0.6">A cycle that closes in hours, not weeks</text>
<rect x="40" y="100" width="180" height="110" rx="2" fill="none" stroke="#222" stroke-width="2"></rect>
<text x="130" y="135" font-size="15" font-weight="700" text-anchor="middle" fill="#222">1 · Upload</text>
<text x="130" y="160" font-size="12" text-anchor="middle" fill="#222" opacity="0.7">Teacher fills</text>
<text x="130" y="175" font-size="12" text-anchor="middle" fill="#222" opacity="0.7">Excel template</text>
<text x="130" y="190" font-size="11" text-anchor="middle" fill="#222" opacity="0.55">75 questions/month</text>
<line x1="220" y1="155" x2="270" y2="155" stroke="#222" stroke-width="1.5" marker-end="url(#asc-arrow)"></line>
<rect x="270" y="100" width="180" height="110" rx="2" fill="none" stroke="#222" stroke-width="2"></rect>
<text x="360" y="135" font-size="15" font-weight="700" text-anchor="middle" fill="#222">2 · Play</text>
<text x="360" y="160" font-size="12" text-anchor="middle" fill="#222" opacity="0.7">Student plays</text>
<text x="360" y="175" font-size="12" text-anchor="middle" fill="#222" opacity="0.7">Ascendia</text>
<text x="360" y="190" font-size="11" text-anchor="middle" fill="#222" opacity="0.55">5 towers · 3 difficulty tiers</text>
<line x1="450" y1="155" x2="500" y2="155" stroke="#222" stroke-width="1.5" marker-end="url(#asc-arrow)"></line>
<rect x="500" y="100" width="180" height="110" rx="2" fill="none" stroke="#222" stroke-width="2"></rect>
<text x="590" y="135" font-size="15" font-weight="700" text-anchor="middle" fill="#222">3 · Report</text>
<text x="590" y="160" font-size="12" text-anchor="middle" fill="#222" opacity="0.7">Teacher reads</text>
<text x="590" y="175" font-size="12" text-anchor="middle" fill="#222" opacity="0.7">portal dashboards</text>
<text x="590" y="190" font-size="11" text-anchor="middle" fill="#222" opacity="0.55">Question-by-question</text>
<path d="M 590 220 Q 590 250, 360 250 Q 130 250, 130 220" stroke="#222" stroke-width="1.5" stroke-dasharray="4,3" fill="none" marker-end="url(#asc-arrow)"></path>
<text x="360" y="270" font-size="11" text-anchor="middle" fill="#222" opacity="0.55">Teacher adjusts content and difficulty for the next cycle</text>
</svg>
<figcaption style="margin-top:0.75rem;text-align:center;font-size:0.875rem;color:#666;font-style:italic;">The Ascendia loop: teachers upload questions, students play, and the portal feeds insight back into the next round of content. The cycle closes in hours instead of the multi-week loop of traditional grading.</figcaption>
</figure>

### Step 1: The Excel Question Loader

Teachers (or the curriculum team at the school, depending on how the school organized it) filled an **Excel template** with **75 questions per month** and emailed it to the Omniduc content team. Each row had three columns:

- Statement: the question itself
- Answer: the correct value
- Difficulty: Initial, Intermediate, or Advanced

The template had three tabs corresponding to the three supported question types: **multiple choice**, **true/false**, and **short development** (open-ended answer). The choice to use Excel instead of a custom CMS was deliberate. Teachers already know Excel; teaching them a new question-authoring tool was a non-trivial onboarding cost we did not want to pay during the validation phase. The trade-off (parsing Excel server-side, dealing with formatting edge cases, handling LaTeX-like notation for fractions and exponents) was ours to absorb, not theirs.

Once received, the questions were hydrated into the cloud and made available to the game at the start of the next session. The Ascendia client did not ship with hardcoded content. The question bank was downloaded fresh each play session, which meant we could update a question, fix a typo, or rebalance a difficulty tier *without releasing a new build of the app*. That decoupling between content and binary was one of the most important technical decisions in the project.

### Step 2: The Student Plays Ascendia

When the student opened the app, they were greeted by a wizard character (the magic-meets-math metaphor anchoring the game's identity), picked their character and inventory, and started a session.

![Home screen of Ascendia: Magic Lands showing the start screen with the wizard character and the play button](/img/products/ascendia/home-page.png "Ascendia home screen. The student picks a character, sees their inventory, and starts the play session. The wizard archetype was a deliberate choice to anchor the math-meets-magic metaphor.")

The session followed a strict structure:

- One tower = ten rooms = ten questions. Entering a tower meant committing to a full ten-question run. The student jumped between floating platforms, entered a magical room, answered the question inside it, then jumped to the next platform and the next room. The path through the tower was vertical, and finishing it meant reaching the top.
- Five towers per island, each with its own difficulty mix. Difficulty escalated tower by tower, not room by room. Tower 1 was a pure warm-up (Initial only); Tower 2 blended Initial + Intermediate; Tower 3 was all Intermediate; Tower 4 blended Intermediate + Advanced; Tower 5 was a pure mastery check (Advanced only). The student picked which tower to enter, and the choice defined the cognitive load of the run.
- In-line feedback: when a student picked the wrong option, the app immediately showed the correct answer with brief feedback before the next platform opened.
- Magic chalks as the reward. Reaching the top of the tower after completing all ten rooms granted the player **magic chalks** (*tizas mágicas*), the in-game currency, which could be spent on **skins** for the wizard. The reward was tied to completing the climb, separate from the school grade. This is the dopamine layer worksheets cannot replicate.
- Save-and-resume: if connectivity dropped mid-session (a real constraint in some Chilean classrooms, where Wi-Fi was intermittent or absent), events were buffered locally and synced on reconnect.
- Continuous gameplay: movement, animation, and audio continued whether or not a question was currently on screen. The game state never paused waiting for cognition.

The screens below show the two layers of the game: the island view, where students chose which tower to climb (each tower mapped to a learning objective), and the tower interior, where the student jumped between platforms into magical rooms and answered the question inside each one.

![Island view inside Ascendia, showing several towers students can climb to practice math objectives](/img/entrepreneurship/omniduc/app-isla.jpg "Island view inside Ascendia: Magic Lands. Each island maps to a curricular math objective for 3rd or 4th grade. The towers within the island correspond to progressively increasing difficulty levels.")

![Interior of an Ascendia tower, with a math question shown over the adventure scene as the player jumps between platforms into magical rooms](/img/entrepreneurship/omniduc/app-torre.jpg "Inside a tower in Ascendia. The student jumps between floating platforms and enters a sequence of magical rooms: one room per question, ten rooms per tower. Each answer fires a structured event that reaches the teacher portal in seconds.")

### Step 3: The Teacher Receives the Report

Every answer the student submitted travelled to the cloud as a structured event carrying `student_id`, `question_id`, `objective_id`, `difficulty`, `answer_selected`, `is_correct`, `time_to_answer_ms`, `session_id`, and `timestamp`. From there, the teacher portal aggregated the data into two views: an overall course summary and an individual student breakdown.

For overall course performance, the dashboard surfaced monthly average performance by subject, the five most-failed questions broken out by difficulty tier (Initial, Intermediate, Advanced), students flagged for follow-up reinforcement, and a donut chart of correct vs. incorrect rates for the period.

For individual student performance, it showed monthly performance by subject, the student's specific answer on each question (not just correct/incorrect), and a trajectory of progress over time.

![Teacher portal screen showing the General Performance Summary with the most-failed questions, a difficulty filter, and a performance donut chart](/img/entrepreneurship/omniduc/portal-dashboard.png "Teacher portal General Performance Summary. The teacher could filter by month, click a difficulty tier (Initial / Intermediate / Advanced), see the most-failed questions, and read average performance at a glance.")

Ascendia is *not* a standalone game. It is the data-generation layer of a learning analytics system, and the design decisions inside the game (event capture, payload schema, cloud sync) were as load-bearing as the level design.

## Sixty Seconds Inside Ascendia: A Narrative Walkthrough

To make the design decisions concrete, here is what the first minute of an Ascendia session looked like from the student's point of view.

**00:00, App launch.** The student taps or clicks the Ascendia icon on the school device. The wizard mascot appears on the home screen with the *PLAY* button. A magic-chalk counter in the top corner shows the *tizas mágicas* the student has accumulated in past tower climbs, alongside the skins already unlocked for the wizard. The home screen audio is a short chiptune loop that establishes the magic-meets-math tone before any math has happened.

**00:08, Character pick.** The student picks their saved avatar (or, on first launch, a default wizard apprentice) and any skins they've unlocked. Customization is purely cosmetic; there are no pay-to-win mechanics. The avatar choice is a low-stakes ritual that creates ownership of the session.

**00:15, Island view.** The world map opens. The student sees several islands floating in a stylized sky. Each island carries a small icon hinting at its learning objective (numbers, operations, geometry, measurement, data). The teacher has pre-configured today's session to start with a specific island, but the visual context tells the student *what they are about to practice* without requiring a teacher to announce it.

**00:22, Tower selection.** The student lands on the chosen island and sees a vertical stack of five towers, each one slightly taller than the last. Tower 1 (the warm-up) is unlocked; the rest are locked behind mastery gates. The student steps onto the entrance platform of Tower 1, and a ten-room run at Initial difficulty begins.

**00:30, First room, first question (Initial difficulty).** The student jumps onto the first platform and enters a magical room. Inside, a question appears in a clean overlay: *"How many groups of 4 robots can you form with 12 robots?"* (Three robot icons are illustrated underneath, hinting at the answer mechanically.) Four answer tiles appear. The student taps "3." A satisfying chime confirms the correct answer. The wizard does a small celebratory animation. The room dissolves and the next platform appears above.

**00:38, Climb through the next rooms.** The student jumps to the second platform, enters the next magical room, answers, climbs. All ten rooms inside Tower 1 carry Initial-difficulty problems (the warm-up tier), so the student stays in the same cognitive register the whole climb. The harder cognitive jump comes later, when they enter Towers 2 through 5. The student doesn't think in terms of "difficulty tiers"; they think in terms of "I'm climbing the tower." But the curriculum-coverage system underneath is recording every interaction with full diagnostic detail.

**00:55, A wrong answer.** Inside one of the rooms, the student picks the wrong option on a multi-step problem. Instead of a buzzer or a "try again" loop, the screen quietly displays: *"The correct answer was 8. The option you chose, 12, is what happens if you add instead of multiply."* The wizard does a thoughtful, non-shaming animation. The room dissolves and the next platform appears. No score is deducted publicly, so the student doesn't feel punished. The teacher, however, has already received a structured event: `student_id: 47, question_id: 113, chosen: C, correct: false, time_ms: 8200`.

**01:00, Mid-class teacher dashboard refresh.** The teacher, who has the portal open on her laptop at the front of the classroom, sees a small notification: *"María has just answered question 113 incorrectly. She picked the addition option."* The teacher walks over, sits next to María, and explains why the operation is multiplication and not addition. The full cycle from misconception to teacher intervention took less than 60 seconds.

**~03:00, Top of the tower.** After ten rooms and ten questions, the student steps onto the final platform at the top of the tower. A reward animation plays: a chest opens and **magic chalks** (*tizas mágicas*) drop into the inventory. The chalk count ticks up. Back in the wizard's wardrobe, a new skin is now affordable. The tower is marked completed on the island map; the next one unlocks.

That last detail, the *less than 60 seconds*, is the single product claim that mattered most. **Traditional grading cycles measure that loop in days.** Ascendia measured it in seconds. The game was the vehicle; the speed of the loop was the product.

## Game Design Decisions

Several small design choices added up to the product feeling different from a worksheet. None of them were obvious in isolation. All of them came from watching real students play during pilots and adjusting.

- Wizard archetype as anchor. The game's mascot was a wizard, leaning into the fantasy-magic metaphor. Math is invisible mechanism; magic is invisible mechanism made fun. The aesthetic alignment was deliberate.
- Islands as learning objectives. Each island in the world map represented a single learning objective (numbers, operations, geometry, measurement, data analysis). Visual segmentation made progression legible to the student without needing a teacher to explain "today we're doing fractions."
- Towers as difficulty, rooms as questions. Within each island, the towers climbed in difficulty. Inside each tower, the student jumped between floating platforms and entered ten magical rooms in sequence, one room per question. The student physically moved upward as the math got harder. The metaphor reinforced itself spatially at both scales.
- Magic chalks as currency. Reaching the top of a tower (all ten rooms cleared) rewarded the student with **magic chalks** (*tizas mágicas*) that could be spent on **skins** for the wizard (robe variants, hat styles, staff designs). The economy was light enough to not become a pay-to-win mechanic, but real enough that students mentioned it unprompted in interviews. The thematic name mattered: chalks belong to math classrooms, magic belongs to the fantasy wrapper, and the currency itself carried the product's metaphor.
- Audio matters. The game shipped with original sound design (chiptune-adjacent music for the island view, more dramatic stings for tower climbs, satisfying click feedback for correct answers). Audio is the easiest layer to skip on EdTech and the easiest to feel when it's missing.
- Touch-first ergonomics. Touch targets were sized for small hands and resistive screens, covering phones and tablets. On Windows the same interface worked via mouse or touchscreen. Question text wrapped predictably across screen sizes. No keyboard input was required even for the "development" question type (the answer was numeric or short-text picked from a constrained input pad).

## The Difficulty System: Three Tiers, Five Towers

Each island contained five towers, and the difficulty climb happened *between* towers, not inside them. A single tower had a fixed difficulty mix. The student moved up the difficulty ladder by choosing the next tower, not by climbing more rooms inside the current one. The composition of the five towers had a deliberate shape.

<figure style="margin: 2.5rem 0;">
<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Difficulty composition of the five towers in each Ascendia island. Tower 1 contains only Initial-tier questions; Tower 2 blends Initial and Intermediate; Tower 3 is fully Intermediate; Tower 4 blends Intermediate and Advanced; Tower 5 is fully Advanced." style="width:100%;height:auto;font-family:inherit;display:block">
<text x="360" y="28" font-size="16" font-weight="700" text-anchor="middle" fill="#222">Difficulty mix · 5 towers × 10 rooms each</text>
<text x="360" y="46" font-size="12" text-anchor="middle" fill="#222" opacity="0.6">Difficulty escalates tower by tower, not room by room</text>
<g transform="translate(60, 70)">
<rect x="0" y="0" width="14" height="14" fill="#222" opacity="0.9"></rect>
<text x="22" y="12" font-size="11" fill="#222">Advanced</text>
<rect x="120" y="0" width="14" height="14" fill="#222" opacity="0.55"></rect>
<text x="142" y="12" font-size="11" fill="#222">Intermediate</text>
<rect x="260" y="0" width="14" height="14" fill="#222" opacity="0.22"></rect>
<text x="282" y="12" font-size="11" fill="#222">Initial</text>
</g>
<line x1="60" y1="260" x2="700" y2="260" stroke="#222" stroke-width="1" opacity="0.4"></line>
<rect x="100" y="110" width="80" height="150" fill="#222" opacity="0.22"></rect>
<text x="140" y="195" font-size="14" font-weight="700" text-anchor="middle" fill="#222">1</text>
<rect x="220" y="185" width="80" height="75" fill="#222" opacity="0.22"></rect>
<rect x="220" y="110" width="80" height="75" fill="#222" opacity="0.55"></rect>
<text x="260" y="153" font-size="14" font-weight="700" text-anchor="middle" fill="#fff">2</text>
<rect x="340" y="110" width="80" height="150" fill="#222" opacity="0.55"></rect>
<text x="380" y="195" font-size="14" font-weight="700" text-anchor="middle" fill="#fff">3</text>
<rect x="460" y="185" width="80" height="75" fill="#222" opacity="0.55"></rect>
<rect x="460" y="110" width="80" height="75" fill="#222" opacity="0.9"></rect>
<text x="500" y="153" font-size="14" font-weight="700" text-anchor="middle" fill="#fff">4</text>
<rect x="580" y="110" width="80" height="150" fill="#222" opacity="0.9"></rect>
<text x="620" y="195" font-size="14" font-weight="700" text-anchor="middle" fill="#fff">5</text>
<text x="140" y="285" font-size="11" text-anchor="middle" fill="#222" opacity="0.7">Warm-up</text>
<text x="260" y="285" font-size="11" text-anchor="middle" fill="#222" opacity="0.7">Foundation</text>
<text x="380" y="285" font-size="11" text-anchor="middle" fill="#222" opacity="0.7">Core</text>
<text x="500" y="285" font-size="11" text-anchor="middle" fill="#222" opacity="0.7">Challenge</text>
<text x="620" y="285" font-size="11" text-anchor="middle" fill="#222" opacity="0.7">Mastery</text>
<text x="140" y="302" font-size="11" text-anchor="middle" fill="#222" opacity="0.55">Initial only</text>
<text x="260" y="302" font-size="11" text-anchor="middle" fill="#222" opacity="0.55">Initial +</text>
<text x="260" y="316" font-size="11" text-anchor="middle" fill="#222" opacity="0.55">Intermediate</text>
<text x="380" y="302" font-size="11" text-anchor="middle" fill="#222" opacity="0.55">Intermediate</text>
<text x="380" y="316" font-size="11" text-anchor="middle" fill="#222" opacity="0.55">only</text>
<text x="500" y="302" font-size="11" text-anchor="middle" fill="#222" opacity="0.55">Intermediate</text>
<text x="500" y="316" font-size="11" text-anchor="middle" fill="#222" opacity="0.55">+ Advanced</text>
<text x="620" y="302" font-size="11" text-anchor="middle" fill="#222" opacity="0.55">Advanced only</text>
<text x="140" y="340" font-size="11" text-anchor="middle" fill="#222" opacity="0.5">10 rooms</text>
<text x="260" y="340" font-size="11" text-anchor="middle" fill="#222" opacity="0.5">10 rooms</text>
<text x="380" y="340" font-size="11" text-anchor="middle" fill="#222" opacity="0.5">10 rooms</text>
<text x="500" y="340" font-size="11" text-anchor="middle" fill="#222" opacity="0.5">10 rooms</text>
<text x="620" y="340" font-size="11" text-anchor="middle" fill="#222" opacity="0.5">10 rooms</text>
</svg>
<figcaption style="margin-top:0.75rem;text-align:center;font-size:0.875rem;color:#666;font-style:italic;">The five towers per island had distinct difficulty mixes. Tower 1 was a pure Initial-tier warm-up, Tower 3 was fully Intermediate, and Tower 5 was an Advanced-tier mastery check. Towers 2 and 4 acted as bridge towers blending two tiers. Reaching the top of any tower earned the student magic chalks to spend on wizard skins.</figcaption>
</figure>

The three difficulty tiers (Initial, Intermediate, Advanced) were not just labels. They were content-engineering rules.

- Initial: single-step problems, simple numbers, low cognitive load. Goal: warm up, build confidence, surface fundamental gaps quickly.
- Intermediate: two-step problems, more abstract framing, the bulk of curriculum-aligned content. This is where most learning objectives lived.
- Advanced: multi-step or non-routine problems, MINEDUC Performance Standards-level questions, the kind that surfaced in SIMCE simulations. Mastery here implied solid command of the objective.

Pedagogically, the five-tower ladder had a second purpose: it generated a richer signal for the teacher. A student who consistently aced Towers 1 and 2 but stumbled at Tower 3 had a very different profile from a student who stumbled at Tower 1. The teacher portal exposed exactly that breakdown: performance per tower, which translated cleanly into performance per difficulty tier.

## The Question Bank: Content Engineering as the Real Differentiator

Most EdTech apps lose the school the moment the teacher realizes they cannot edit the content. This is one of the underappreciated reasons why platforms with great UX still get rejected by curriculum heads. The school wants control over the question bank, not just its appearance.

Ascendia gave them that control through three mechanisms:

1. Monthly Excel uploads of 75 fresh questions, written by the school or by Omniduc's curriculum team (depending on the support plan).
2. Curriculum alignment built into the column structure. Each question was tagged to a MINEDUC Priority Learning Objective.
3. Hot-swap from the cloud. Question edits propagated without app updates. The school could fix a typo at 09:00 and the next session at 10:00 would already use the corrected version.

That last point sounds technical but is commercially important. EdTech procurement committees ask the same three questions every time: *"Can we adapt the content?"*, *"Can we change it ourselves?"*, *"How fast?"* Ascendia's answer was *yes / yes / minutes.* For the curriculum teams we pitched to, that combination broke the standard objection script.

The question types (multiple choice, true/false, short development) were chosen for two reasons. First, they covered roughly **90% of what a typical primary math worksheet asks**. Second, each type produced a different kind of structured signal: multiple choice gave us the wrong-option diagnostic, true/false gave us the confidence-vs-knowledge split, and short development gave us cognitive-load signals through response time.

## Technical Architecture: Game, Cloud, Portal

Ascendia's architecture was deliberately simple for the size of the problem. Three layers, talking through a managed cloud (AWS), with clear separation of concerns.

![Architecture diagram showing the Ascendia video game on tablets sending events to the cloud, where the teacher portal reads and renders learning analytics.](/img/entrepreneurship/omniduc/arquitectura-tecnologica.png "Technical architecture: the student plays Ascendia on a tablet, the client sends event payloads to the AWS cloud, the cloud aggregates and processes the data using Data Science techniques, and the teacher portal reads aggregated and per-event views to render dashboards. The teacher can then push question/difficulty edits back into the game without a release cycle.")

The game client was built in Unity and deployed to Google Play (Android) and Microsoft Store (Windows). It was offline-tolerant: events buffered locally on disconnect and synced on reconnect. The client did not contain hardcoded questions; content was hydrated from the cloud per session.

The cloud layer ran on AWS, taking advantage of US$ 10,000 in startup credits Omniduc secured during 2021. Two views of the data lived side by side: a transactional event log (for audit and deep analysis) and an aggregated read-optimized view (for fast dashboard loads). Questions and their metadata (learning objective, thematic axis, cognitive level, difficulty) lived in a relational database indexed by `objective_id` so the *student × objective* cross-reference was trivial.

The teacher web portal was a web application that polled the aggregated view every few seconds during class to render live dashboards. The teacher could drill from an aggregate cell (e.g., "40% of the class got Q3 wrong") down to the specific student's specific answer. The portal also exposed the content management interface so authorized users could edit questions, difficulties, and reinforcement messages.

## The Business Model: Per-Student Annual Subscription

The model was a per-student annual subscription paid by the school, with two plans. That decision was deliberate and early: selling to schools meant longer sales cycles, but higher ticket size, multi-year retention, and the ability to cover all students in an entire grade level in a single transaction. Selling to families meant sky-high CAC, weak retention, and dependency on a decision repeated every month.

<figure style="margin: 2.5rem 0;">
<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pricing comparison: Basic plan at US$10 per student per year vs Premium plan at US$15 per student per year, with Premium adding parent and director accounts, webinars, and personalized tracking." style="width:100%;height:auto;font-family:inherit;display:block">
<text x="360" y="28" font-size="16" font-weight="700" text-anchor="middle" fill="#222">Pricing · Annual subscription per student</text>
<text x="360" y="46" font-size="12" text-anchor="middle" fill="#222" opacity="0.6">Two plans, school pays, multi-stakeholder access</text>
<rect x="80" y="80" width="260" height="210" rx="2" fill="none" stroke="#222" stroke-width="2"></rect>
<text x="210" y="115" font-size="18" font-weight="700" text-anchor="middle" fill="#222">Basic</text>
<text x="210" y="145" font-size="26" font-weight="700" text-anchor="middle" fill="#222">US$ 10</text>
<text x="210" y="162" font-size="11" text-anchor="middle" fill="#222" opacity="0.6">per student / year</text>
<line x1="100" y1="180" x2="320" y2="180" stroke="#222" stroke-width="0.5" opacity="0.3"></line>
<text x="100" y="200" font-size="12" fill="#222" opacity="0.8">· Video game + web portal</text>
<text x="100" y="220" font-size="12" fill="#222" opacity="0.8">· All students + teachers</text>
<text x="100" y="240" font-size="12" fill="#222" opacity="0.8">· Initial teacher training</text>
<text x="100" y="260" font-size="12" fill="#222" opacity="0.8">· Monthly metric report</text>
<text x="100" y="280" font-size="12" fill="#222" opacity="0.8">· Support + maintenance</text>
<rect x="380" y="80" width="260" height="210" rx="2" fill="#222" opacity="0.05" stroke="#222" stroke-width="2"></rect>
<text x="510" y="115" font-size="18" font-weight="700" text-anchor="middle" fill="#222">Premium</text>
<text x="510" y="145" font-size="26" font-weight="700" text-anchor="middle" fill="#222">US$ 15</text>
<text x="510" y="162" font-size="11" text-anchor="middle" fill="#222" opacity="0.6">per student / year</text>
<line x1="400" y1="180" x2="620" y2="180" stroke="#222" stroke-width="0.5" opacity="0.3"></line>
<text x="400" y="200" font-size="12" fill="#222" opacity="0.8">Everything in Basic, plus:</text>
<text x="400" y="220" font-size="12" fill="#222" opacity="0.8">· Parent + director accounts</text>
<text x="400" y="240" font-size="12" fill="#222" opacity="0.8">· Head-teacher views</text>
<text x="400" y="260" font-size="12" fill="#222" opacity="0.8">· Fidelization webinars</text>
<text x="400" y="280" font-size="12" fill="#222" opacity="0.8">· Personalized recommendations</text>
</svg>
<figcaption style="margin-top:0.75rem;text-align:center;font-size:0.875rem;color:#666;font-style:italic;">Ascendia's two-tier pricing. The Basic plan covered the core loop. The Premium plan added the multi-stakeholder views and the fidelization layer.</figcaption>
</figure>

The economics of the two plans assumed a typical Chilean school with ~180 enrolled student accounts and a 100% Premium adoption rate, yielding ~US$ 2,700 net annual revenue per school. Operating costs were dominated by labor (cloud services ran under US$ 1 per student per year), which gave the model healthy unit economics in theory. In practice, the channel friction documented in the [Omniduc channel post-mortem](/projects/omniduc) (6 to 12 month sales cycles, distributed decision-makers, near-zero discretionary school budgets) meant that the math on the spreadsheet and the math in the wild diverged significantly.

The go-to-market plan was a 2-month free trial converting to annual contract, with sales channels split across:

- Direct virtual and in-person meetings with principals and UTP heads, the bulk of the early effort.
- Website self-service for smaller schools willing to convert online without a meeting.
- SEM, email marketing, and press in the first 1–2 years for top-of-funnel demand.
- SEO for organic medium- and long-term acquisition.

## The Trial Period: What Onboarding Looked Like

Every school we approached entered through the same four-step trial period. It was the funnel-shaping construct we used to turn a curious principal into a paying customer, and it doubled as the operational sequence for the pilot deployments.

<figure style="margin: 2.5rem 0;">
<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-step trial period: kickoff, question upload, results, teacher feedback." style="width:100%;height:auto;font-family:inherit;display:block">
<defs><marker id="trial-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#222"></path></marker></defs>
<text x="360" y="28" font-size="16" font-weight="700" text-anchor="middle" fill="#222">Trial period · From kickoff to feedback</text>
<text x="360" y="46" font-size="12" text-anchor="middle" fill="#222" opacity="0.6">Two-month structured pilot, one chosen grade level</text>
<rect x="20" y="90" width="150" height="80" rx="2" fill="none" stroke="#222" stroke-width="2"></rect>
<text x="95" y="129" font-size="14" font-weight="700" text-anchor="middle" fill="#222">Kickoff</text>
<line x1="170" y1="130" x2="200" y2="130" stroke="#222" stroke-width="1.5" marker-end="url(#trial-arrow)"></line>
<rect x="200" y="90" width="150" height="80" rx="2" fill="none" stroke="#222" stroke-width="2"></rect>
<text x="275" y="120" font-size="14" font-weight="700" text-anchor="middle" fill="#222">Question</text>
<text x="275" y="138" font-size="14" font-weight="700" text-anchor="middle" fill="#222">Upload</text>
<line x1="350" y1="130" x2="380" y2="130" stroke="#222" stroke-width="1.5" marker-end="url(#trial-arrow)"></line>
<rect x="380" y="90" width="150" height="80" rx="2" fill="none" stroke="#222" stroke-width="2"></rect>
<text x="455" y="129" font-size="14" font-weight="700" text-anchor="middle" fill="#222">Results</text>
<line x1="530" y1="130" x2="560" y2="130" stroke="#222" stroke-width="1.5" marker-end="url(#trial-arrow)"></line>
<rect x="560" y="90" width="140" height="80" rx="2" fill="#222" opacity="0.08" stroke="#222" stroke-width="2"></rect>
<text x="630" y="120" font-size="12" font-weight="700" text-anchor="middle" fill="#222">Teacher</text>
<text x="630" y="138" font-size="12" font-weight="700" text-anchor="middle" fill="#222">Feedback</text>
<text x="360" y="210" font-size="11" text-anchor="middle" fill="#222" opacity="0.55">Anchor grade level during the early pilots: 5th grade</text>
</svg>
<figcaption style="margin-top:0.75rem;text-align:center;font-size:0.875rem;color:#666;font-style:italic;">Ascendia's four-step trial period as documented in the product deck. Each step was timed and produced a tangible artifact the school's leadership could review before deciding to sign an annual contract.</figcaption>
</figure>

- Step 1 · Kickoff: a 90-minute on-site or virtual session at the school. We met with the principal, the UTP head, and the math department, walked them through the dashboard, opened accounts, distributed credentials, picked an anchor grade level (the first pilots ran on 5th grade), and aligned on which curriculum objectives the trial would target.
- Step 2 · Question Upload: the school's curriculum team (typically a head math teacher with curriculum experience) filled the Excel template with 75 questions targeting the agreed objectives. For schools without internal capacity, Omniduc's curriculum specialist Gabriela Calderón could either author the questions herself or review and refine teacher-drafted ones.
- Step 3 · Results: students played in class. The portal received the event stream live. After two to three weeks of regular use, the school had a concrete dataset to review: class-level performance, per-objective performance, the five most-failed questions, and the list of students flagged for follow-up reinforcement.
- Step 4 · Teacher Feedback: the closing session of the pilot. The teachers reported their experience using the portal. We collected qualitative friction (which dashboards loaded slowly, which questions had typos, which UX patterns confused students) and committed to fixes for the next cycle. This session also doubled as the natural moment to discuss converting the pilot into an annual subscription.

The trial period was designed to fit inside a single academic term. The decision-making cadence of Chilean schools (budgets typically locked in March for the upcoming year, vendors confirmed in September of the prior year) meant that running a trial in one semester needed to allow the school enough time to evaluate before the next September decision window. That compatibility was as much a calendar engineering problem as it was a product one.

## Distribution: Stores, Pilots, and Partnerships

Ascendia shipped on two consumer platforms:

- Google Play: Android tablets and phones, the primary distribution channel given Android dominance in Chilean primary schools at the time. The store listing showcased the Tierras Mágicas world, the wizard mascot, and the 3-step Excel → Game → Portal loop.
- Microsoft Store: Windows tablets and laptops, used by schools running Microsoft-supplied hardware in computer labs. The Windows distribution mattered for a specific subset of subsidized Chilean schools that received Microsoft-bundled devices through MINEDUC programs.

![Google Play store listing for Ascendia by Electroveja, in Spanish, showing the install button, gameplay screenshots, and the last updated date of 28 jun 2022](/img/products/ascendia/play-store.png "Google Play listing for Ascendia. Published under Electroveja, rated for all ages, with the magic-land gameplay screenshots front and centre. The store page was localized in Spanish for the Chilean market.")

![Microsoft Store listing for Ascendia by Electroveja Labs, showing the free Get button, the gameplay screenshot, and the educational category metadata](/img/products/ascendia/microsoft-store.png "Microsoft Store listing for Ascendia. The Windows distribution served the subset of Chilean schools running Microsoft-bundled hardware procured through MINEDUC programs.")

The institutional partnership with [Explora Valparaíso](https://www.explora.cl/valparaiso/) (the regional arm of the Ministry of Science's national science outreach program) gave the team access to a much broader network of teachers for validation than three schools alone could have provided. Through Explora's associated teacher network we ran additional qualitative interviews, recorded feedback sessions, and stress-tested the question bank against real classroom needs.

## Recognition: Funding and Awards

Across 2021–2022, Ascendia and the broader Omniduc venture accumulated several recognition events:

- Corfo Semilla Expande (awarded 2021): a public seed grant from Chile's economic development agency Corfo, financing the development of the first MVP version of Ascendia and the supporting infrastructure.
- Corfo Crea y Valida (awarded 2022): a second public investment fund from Corfo aimed at scaling the technical validation to industrial scale. The grant was awarded but, after evaluating the channel post-mortem documented in the [Omniduc closure summary](/projects/omniduc), the team made the difficult decision to not execute it.

That combination of grant funding and award recognition validated the team's technical capability publicly, opened doors to school principals and curriculum heads who would otherwise have ignored an unknown vendor, and gave Ascendia a credibility level that pure product demos couldn't have produced on their own.

## What I Learned from Building Ascendia

A few lessons from the product side that I'd carry into any future EdTech build:

- Build the data-emission layer first, the visuals second. The actual differentiator was that every answer produced a structured event. The pretty wizard was the marketing layer. If I were rebuilding Ascendia today, I'd lock the event schema in week one and let the art catch up.
- Use boring tools for content authoring. The Excel template was unglamorous, but it eliminated an entire category of objection from curriculum heads. Custom CMS tools for content authoring are almost always a tax the school is not willing to pay during the trial phase.
- Decouple content from binary. The single best technical decision in Ascendia was that the game downloaded questions from the cloud each session. We could iterate content monthly without releases. EdTech projects that ship questions inside the binary lose this lever entirely.
- Pedagogical credibility beats engineering credibility. Having a primary math teacher with 15 years of classroom experience as a *core team member* (not a consultant) was what opened conversations with UTP heads. Engineering on its own was not enough.
- Multi-stakeholder reporting is the commercial unlock. A teacher-only view sells a teacher. A principal+UTP+parent+teacher view sells a school. Premium pricing followed naturally.
- A great pilot does not equal a signed contract. Even the best classroom deployment at the most enthusiastic school did not, in our experience, predict that the school would sign for the next academic year. The contract decision is structurally distinct from the product judgment. Account for that explicitly when planning runway.

## Where Does Ascendia Fit in the Larger Story?

Ascendia is the product half of a venture-product pair. Omniduc was the venture: the company, the business model, the school sales pipeline, the analytics portal, the seed funding. Ascendia was the consumer-facing artifact, the thing the 8-year-old picked up and played with.

That distinction matters for two reasons.

First, the technical and design discipline required to ship Ascendia is different from the discipline required to scale Omniduc. The game side needs game designers, art, animation, narrative, mechanics balancing. The venture side needs B2B sales, school relationship management, billing, channel strategy. These are different muscles, and pretending they are the same is one of the underappreciated failure modes of EdTech.

Second, when Omniduc closed in September 2022 the Ascendia builds came down with it: the apps were removed from Google Play and the Microsoft Store, no new content went into the question bank, and the cloud back-end was wound down alongside the company. What outlived the venture is not the binary but the lessons: adaptive content delivery, event-driven assessment, and a feedback loop measured in seconds, all of which have carried over to every project I've worked on since. The product was right; the company was a year early for the category the market was willing to buy.

For the full business story (the funding, the validation, the pivot attempt, the post-mortem, the five root causes of why the venture didn't scale despite shipping a working product), read the [Omniduc venture post-mortem](/projects/omniduc).

## Frequently Asked Questions

### What was Ascendia: Magic Lands?

Ascendia: Magic Lands was a math adventure video game for 3rd and 4th grade students, built between 2021 and 2022 as the student-facing half of Omniduc, a Chilean B2B EdTech service for primary school math. It ran on Android phones, tablets, and Windows devices, turning written homework into a gameplay loop while sending every answer back to the teacher in real time.

### What ages and grades was Ascendia designed for?

Ascendia targeted 3rd and 4th grade primary school students (roughly 8 to 10 years old), with an extension to 5th grade planned under the Corfo Crea y Valida roadmap. The first pilots ran on 5th grade students at three Chilean schools.

### Where could you download Ascendia?

Ascendia was published on Google Play (for Android phones and tablets) and the Microsoft Store (for Windows tablets and laptops). The Windows distribution served a specific subset of subsidized Chilean schools that received Microsoft-bundled devices through MINEDUC programs.

### Did Ascendia work offline?

Yes. The game client was offline-tolerant: events buffered locally on disconnect and synced to the cloud on reconnect. This was a deliberate design decision because Wi-Fi was intermittent or absent in some Chilean classrooms where Ascendia was piloted.

### How was Ascendia priced?

Ascendia used a per-student annual subscription paid by the school. The Basic plan was US$ 10 per student per year and included the game, the web portal, all students and teachers, initial teacher training, a monthly metric report, and support. The Premium plan was US$ 15 per student per year and added parent and director accounts, head-teacher views, fidelization webinars, and personalized recommendations.

### Why did the Ascendia venture close in 2022?

The Omniduc venture behind Ascendia closed in September 2022 despite shipping a working product. The product worked, the pilots ran, and Corfo Crea y Valida funding was approved, but the channel friction proved structural: 6 to 12 month sales cycles in Chilean schools, distributed decision-makers (principal, UTP head, math department), and near-zero discretionary school budgets meant the unit economics on the spreadsheet diverged from reality. The full five-cause post-mortem is documented in the [Omniduc closure write-up](/projects/omniduc).

### Is Ascendia still available today?

No. Ascendia is no longer available since Omniduc closed as a company. The builds were taken down from Google Play and the Microsoft Store, and no new content is being authored or pushed to the question bank. Ascendia is preserved on this page as a product retrospective, not as an active commercial offering.

## Credits and Sources

Built as part of [Omniduc](/projects/omniduc) · Sep 2021 – Sep 2022 · Valparaíso, Chile.

### Public policy and education data

- MINEDUC National Curriculum: [curriculumnacional.cl](https://www.curriculumnacional.cl/)
- PISA 2018 Chile results: [Agencia de Calidad de la Educación (PDF)](https://archivos.agenciaeducacion.cl/PISA_2018-Entrega_de_Resultados_Chile.pdf)
- ERCE 2019 UNESCO: [es.unesco.org/fieldoffice/santiago/llece](https://es.unesco.org/fieldoffice/santiago/llece/ERCE2019)
- World Bank, *Learning to Realize Education's Promise*: [World Development Report 2018](https://www.bancomundial.org/es/publication/wdr2018)
- CEM MINEDUC statistics: [centroestudios.mineduc.cl](https://centroestudios.mineduc.cl/)

### Funding and ecosystem

- Corfo Semilla Expande: [corfo.cl/sites/cpp/convocatorias](https://www.corfo.cl/sites/cpp/convocatorias/semilla_expande)
- Explora Valparaíso (MINCIENCIAS): [explora.cl/valparaiso](https://www.explora.cl/valparaiso/)

### EdTech market

- HolonIQ, *2021 Global Learning Landscape*: [holoniq.com/notes](https://www.holoniq.com/notes/2021-global-learning-landscape)
- PRWeb, *Global Game-Based Learning Market 2025*: [prweb.com](https://www.prweb.com/releases/global_game_based_learning_market_spikes_to_28_8_billion_by_2025/prweb17094668.htm)
- UNESCO Institute for Statistics: [data.uis.unesco.org](http://data.uis.unesco.org/)

### Pedagogical framework

- Dylan Wiliam, *Embedded Formative Assessment*
- Sir Ken Robinson, *Changing Education Paradigms* (RSA Animate)

*By [Francisco Frez](/about), co-creator of Ascendia: Magic Lands. Explore more [projects and ventures](/projects), read [related articles](/blog), or dive into the broader [Omniduc retrospective](/projects/omniduc).*
