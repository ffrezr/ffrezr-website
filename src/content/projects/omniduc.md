---
slug: omniduc
title: Omniduc
seoTitle: "Omniduc Post-Mortem: B2B EdTech in Chile (2021-2022)"
role: Founder & CEO
period: Sep 2021 — Sep 2022
location: Valparaíso, Chile
description: "How I built Omniduc from scratch: a Chilean B2B EdTech startup that combined an adaptive video game with real-time learning analytics for math teachers. Architecture, validation, post-mortem, and lessons after one year of operation."
metaDescription: "Founder post-mortem of Omniduc, a Chilean B2B EdTech startup (2021-2022). Architecture, $25,000M CLP TAM, and 5 root causes of failure."
image: /img/entrepreneurship/omniduc/banner.png
tags:
  - EdTech
  - Product Strategy
  - Entrepreneurship
  - Game-Based Learning
  - Education
  - Data Analytics
type: venture
featured: true
published: true
display: true
lastUpdated: "2026-05-11"
---

**Omniduc** was an EdTech startup I founded in Valparaíso between 2021 and 2022 to tackle one of the most persistent problems in the Chilean education system: **poor math performance in primary school**. The proposition combined two pieces. First, a tablet video game that replaced written exams with adaptive gameplay sessions. Second, a web portal where teachers could see, student by student and question by question, exactly where each student was struggling in real time.

We secured a Corfo Semilla Expande seed grant, shipped the first MVP, signed pilot agreements with three schools, and ended up closing the company 12 months after launch. This post covers everything: the quantified problem, the technical architecture, the pedagogical model, the validation we did and didn't do, the business model, the milestones, the technical decisions, the team, an honest post-mortem on why the venture never reached scale despite having a working product and funding, and what I learned building a B2B EdTech company from scratch in Chile.

> **Key Takeaways**
> - **The quantified problem**: 52% of Chilean students failed to meet minimum math competencies in PISA 2018 ([OECD PISA 2018 CN Chile](https://www.oecd.org/pisa/publications/PISA2018_CN_CHL.pdf), 2019), the country's weakest subject across all areas the test evaluates.
> - **The technical solution**: a B2B service with two technologies talking to each other. A video game (*Ascendia: Magic Lands*) for 3rd and 4th grade, and a Teacher Portal with real-time learning analytics.
> - **The business model**: annual subscription of $20,000 CLP per student, paid by the school. Estimated TAM: $25,000M CLP for Chile (8,200 schools, 1.25M students from 2nd to 6th grade, [CEM MINEDUC](https://centroestudios.mineduc.cl/), 2018).
> - **The EdTech market**: the EdTech industry in Latin America was valued at US$7.5 billion in 2025, projected to reach US$28.9 billion by 2035 ([Future Market Insights, 2025](https://www.futuremarketinsights.com/reports/edutech-industry-analysis-in-latin-america)). K-12 accounted for 42% of the market.
> - **What I learned**: selling SaaS to Chilean schools involves a 6 to 12 month sales cycle, a distributed decision-maker shared between the principal and the Academic Affairs Office (UTP), and virtually zero discretionary budget. A correct MVP guarantees nothing if the channel economics don't work out.

## Why Does Math Education Fail in Chilean Primary Schools?

**To understand Omniduc, you have to understand just how large the gap it was trying to close really was.** National and international indicators converge on the same diagnosis: the majority of primary school students in Chile and Latin America don't learn math at the level the curriculum sets as a minimum, and this gap is inherited and amplified throughout the school career.

Four data points defined the starting point in 2021:

- In **PISA 2018**, **52% of Chilean 15-year-olds** failed to develop minimum math competencies. It is the country's weakest subject across all areas the test evaluates ([OECD PISA 2018 Country Note Chile](https://www.oecd.org/pisa/publications/PISA2018_CN_CHL.pdf), retrieved 2026-05-10).
- In **ERCE 2019** (UNESCO's Regional Comparative and Explanatory Study), **48% of Latin American 3rd graders** scored at the lowest performance level in math, and **49% of 6th graders** scored at the deficient level ([UNESCO LLECE ERCE 2019](https://es.unesco.org/fieldoffice/santiago/llece/ERCE2019), retrieved 2026-05-10).
- Chile scored **417 points** in PISA 2018 math, below the OECD average of 489, on par with Uruguay (418) and above Mexico (409). In other words: while relatively well-positioned within Latin America, Chile is still dragged down by the region as a whole ([Agencia de Calidad de la Educación](https://archivos.agenciaeducacion.cl/PISA_2018-Entrega_de_Resultados_Chile.pdf), 2019).
- The World Bank summarized the problem in its *Learning to Realize Education's Promise* report: "learning levels in mathematics will not increase unless educational institutions use learning as a guide and an indicator" ([World Bank, 2018](https://www.bancomundial.org/es/publication/wdr2018), retrieved 2026-05-10).

Seen in a single image, the order of magnitude becomes clear:

<figure style="margin: 2.5rem 0;">
<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Horizontal bar chart comparing the proportion of students with poor math performance: 52% in Chile PISA 2018, 49% in 6th grade Latin America ERCE 2019, and 48% in 3rd grade Latin America ERCE 2019." style="width:100%;height:auto;font-family:inherit;display:block">
<text x="360" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#222">Students with poor math performance</text>
<text x="360" y="46" font-size="11" text-anchor="middle" fill="#222" opacity="0.6">Primary education · Chile and Latin America</text>
<text x="20" y="100" font-size="12" fill="#222">Chile (PISA 2018)</text>
<text x="20" y="116" font-size="10" fill="#222" opacity="0.6">15-year-olds · below minimum competencies</text>
<rect x="240" y="86" width="189" height="38" fill="#222" opacity="0.85"></rect>
<text x="437" y="110" font-size="14" font-weight="700" fill="#222">52%</text>
<text x="20" y="184" font-size="12" fill="#222">6th grade LATAM (ERCE 2019)</text>
<text x="20" y="200" font-size="10" fill="#222" opacity="0.6">poor performance</text>
<rect x="240" y="170" width="178" height="38" fill="#222" opacity="0.65"></rect>
<text x="426" y="194" font-size="14" font-weight="700" fill="#222">49%</text>
<text x="20" y="268" font-size="12" fill="#222">3rd grade LATAM (ERCE 2019)</text>
<text x="20" y="284" font-size="10" fill="#222" opacity="0.6">lowest performance level</text>
<rect x="240" y="254" width="175" height="38" fill="#222" opacity="0.5"></rect>
<text x="423" y="278" font-size="14" font-weight="700" fill="#222">48%</text>
<line x1="240" y1="320" x2="604" y2="320" stroke="#222" stroke-width="1" opacity="0.4"></line>
<line x1="422" y1="316" x2="422" y2="324" stroke="#222" stroke-width="1" opacity="0.5"></line>
<text x="240" y="338" font-size="10" text-anchor="middle" fill="#222" opacity="0.6">0%</text>
<text x="422" y="338" font-size="10" text-anchor="middle" fill="#222" opacity="0.5">50%</text>
<text x="604" y="338" font-size="10" text-anchor="middle" fill="#222" opacity="0.6">100%</text>
</svg>
<figcaption style="margin-top:0.75rem;text-align:center;font-size:0.875rem;color:#666;font-style:italic;">Sources: <a href="https://www.oecd.org/pisa/" style="color:inherit;text-decoration:underline;">OECD PISA 2018</a> · <a href="https://es.unesco.org/fieldoffice/santiago/llece/ERCE2019" style="color:inherit;text-decoration:underline;">UNESCO LLECE ERCE 2019</a>. Approximately half of primary school students in Chile and Latin America fail to reach minimum math competencies.</figcaption>
</figure>

The point from the World Bank report that interested us most was the "**unless**". Chilean schools already have measurements (SIMCE, internal tests, quizzes, practice exams), but the cycle is slow. The test is administered, graded, grades are entered, results are delivered, and by the time the teacher knows which objectives weren't met, the class is already two units ahead. **Continuous formative assessment**, knowing today what happened today, doesn't exist in most classrooms.

That gap between *when learning happens* and *when the system finds out it didn't happen* was the opportunity we tried to address.

### The Theoretical Framework: Why Formative Assessment Matters

The pedagogical concept underpinning Omniduc's thesis wasn't invented by us. It has decades of empirical literature and an academic name: **assessment for learning**, as distinct from *assessment of learning*. British researcher Dylan Wiliam has published meta-analyses showing that short feedback cycles (minutes, not weeks) produce significantly greater learning gains than long traditional summative assessment cycles.

<iframe loading="lazy" width="100%" style="aspect-ratio:16/9;border-radius:2px;margin:1rem 0" src="https://www.youtube.com/embed/sYdVe5O7KBE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Dylan Wiliam: Formative assessment"></iframe>

*Dylan Wiliam explains the five key strategies of formative assessment. His work was a direct reference for Omniduc's pedagogical framework: the idea that timely, specific feedback produces better learning than delayed written tests.*

The other conceptual pillar came from Sir Ken Robinson's critique of the industrial education paradigm: the idea that the education system still organizes students by age as if they were production batches, assuming everyone should learn the same thing at the same pace. Omniduc's "learning at each student's own pace" approach came directly from that critique:

![Comparative illustration: while the world of work and technology changed radically over the last century, the classroom looks almost identical to the one from 1900](/img/entrepreneurship/omniduc/educacion-sin-cambios.png "The industrial education paradigm critiqued by Robinson and Wiliam: rows of desks, standardized content, and uniform assessment. A 19th-century design still in use well into the 21st century.")

<iframe loading="lazy" width="100%" style="aspect-ratio:16/9;border-radius:2px;margin:1rem 0" src="https://www.youtube.com/embed/zDZFcDGpL4U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="RSA Animate: Changing Education Paradigms by Sir Ken Robinson"></iframe>

*Sir Ken Robinson on why the industrial model of education fails students who learn at different paces. Omniduc's core pedagogical thesis, personalization of pace and difficulty, operationalized this critique with data.*

![Classic assessment inequality cartoon: a row of very different animals (monkey, elephant, seal, dog, fish in a bowl, bird) all given the same instruction by the teacher: 'climb that tree'](/img/entrepreneurship/omniduc/comic-evaluados-por-igual.png "When the system measures all students with the same yardstick, those with different strengths inevitably end up seeing themselves as failures.")

> Everyone is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing it is stupid.
>
> Albert Einstein

## What Was Omniduc? Continuous Formative Assessment in Video Game Format

**Omniduc was a B2B technology service supporting formative assessment**, sold as a subscription to schools. It combined a math video game for students with an analytics portal for teachers, so that each student interaction with the game became, in real time, actionable information for the teacher.

The value proposition for the school was structured around three fronts:

- **Efficiency**: replacing part of the time spent manually grading tests and worksheets with data automatically generated by the game. A teacher with a class of 35 students can spend between 4 and 6 hours per week on grading. Omniduc gave those hours back for pedagogical planning.
- **Decision-making**: giving teachers a dashboard with performance by class, by student, and by learning objective, updated in real time during class, without waiting for the end-of-year SIMCE results.
- **Personalized teaching**: enabling the possibility of adapting difficulty and content to each student based on their response history, starting to break the dogma of "everyone at the same pace" within the classroom.

![Diagram of the learning cycle with Omniduc: teacher teaches, student practices with the video game, academic team measures and adjusts, back to the student](/img/entrepreneurship/omniduc/diagrama-aprendizaje.png "Learning consolidation cycle with Omniduc: the teacher's theoretical instruction generates practice through the video game; the academic team measures on the web platform and delivers personalized adjustments back to the student, closing the feedback loop in hours instead of weeks.")

The diagram above describes exactly the operational difference from the traditional model. Instead of a multi-week loop (lesson → worksheet → grading → delayed feedback), Omniduc closed the loop in hours. The student plays during class, the data reaches the portal in seconds, the teacher decides on an immediate intervention, the academic team adjusts difficulty or delivers reinforcement, and the student plays again with content recalibrated to their needs. **The feedback loop is the innovation.** Everything else (the video game, the dashboards, the cloud) is infrastructure to make that loop exist.

## How Did Omniduc's Technical Architecture Work?

**Omniduc consisted of two pieces that communicated through a cloud data layer**. The client (video game on tablets) captured interaction events and sent them to the backend. The server processed and stored those events. The Teacher Portal frontend read that data in real time and rendered it into consumable dashboards. It was a deliberately simple design for the size of the problem we had.

![Diagram of module interconnection and technology of the Omniduc solution](/img/entrepreneurship/omniduc/arquitectura-tecnologica.png "Architecture diagram: the student interacts with the Ascendia video game, which sends practice data (correct and incorrect answers, time per stage, interaction maps) to cloud storage. The web platform processes that data using Data Science techniques and delivers processed, useful information to the academic team for the teacher. The teacher can then make personalized adjustments (add questions, modify difficulty, configure positive reinforcement) that feed back into the video game, closing the loop.")

The system's three data rings were:

**Ring 1 — Event capture on the client.** Each time a student answered a question in *Ascendia*, the game sent the server a payload with: `student_id`, `question_id`, `objective_id`, `difficulty_level`, `answer_selected`, `is_correct`, `time_to_answer_ms`, `session_id`, `timestamp`. If the device lost connectivity, events accumulated locally and synced on reconnect, a non-trivial detail since several Chilean schools have intermittent Wi-Fi.

**Ring 2 — Processing and storage.** The backend aggregated events by class, student, and learning objective. It maintained two views: one transactional (each individual event, for audit and deep analysis) and one aggregated (totals and averages by dimension, optimized for fast dashboard loading). Questions, their metadata, and student trajectories lived in a relational database indexed by `objective_id` so that the "student × objective" cross-reference was trivial.

**Ring 3 — Rendering in the Teacher Portal.** The web frontend polled the aggregated view every few seconds to display live performance during class. The teacher could open any cell in the dashboard and drill down to question-by-question detail. And the academic team could edit the question set or adjust difficulty rules without needing a video game release, because content was hydrated from the cloud at the start of each session.

### The Video Game: Ascendia: Magic Lands

The video game was called **Ascendia: Magic Lands**. We designed it for tablets, in an adventure format with worlds divided into islands and each island with several towers to climb. The pedagogical metaphor was direct:

- **Each island represented an academic objective** from the math curriculum for 3rd or 4th grade (numbers, operations, geometry, measurement, data).
- **Each tower within the island represented a progressively increasing difficulty level**: beginner, intermediate, advanced. To unlock the next tower, the student had to demonstrate mastery of the previous one, not simply advance by time or luck.
- **Questions were aligned to SIMCE**, focused on routine and non-routine problem solving, written by the curriculum team based on MINEDUC Performance Standards and the document *Learning Math in the 21st Century: Adding with Technology*.

![Ascendia screen showing an island view with several towers to climb, in adventure format for tablet](/img/entrepreneurship/omniduc/app-isla.jpg "Island view in Ascendia: Magic Lands. Each island represents a curricular math objective for 3rd or 4th grade; the towers within the island are the progressively increasing difficulty levels that students unlock as they demonstrate mastery.")

Design criterion number one was: **the game has to be playable even when the question hasn't been answered yet**. That meant jump mechanics, movement across the island, animations, sound. The math content appeared periodically on screen, but the "go-play-return" loop was continuous. The hypothesis was that an 8-year-old wouldn't voluntarily open a math quiz app, while an adventure video game with embedded problems would be a different story.

![Ascendia screen showing the interior of a tower, with a math question embedded in the adventure mechanic](/img/entrepreneurship/omniduc/app-torre.jpg "Interior of a tower in Ascendia. Each student answer generates a structured event (student_id, question_id, selected option, response time) that travels in seconds to the teacher portal and feeds the real-time performance dashboards.")

### The Teacher Portal: The Analytics Platform

The web portal was where we concentrated the real competitive differentiator. Designed for teachers to open on their computer during class, it offered three views:

![Login screen of the Omniduc Teacher Portal with email and password fields, Omniduc brand visible](/img/entrepreneurship/omniduc/portal-login.png "Teacher Portal access screen. Each school received managed accounts for its teachers and Academic Affairs heads, with permissions differentiated by class and grade level.")

- **Overall Performance Summary**: distribution of correct answers by class and by difficulty level, with a question-by-question breakdown. A real example from the screen: "40% of the class correctly answered the question about organizing 32 robots into groups of 8." For the teacher, this translated an abstract data point ("the class is struggling with division into equal groups") into a specific pedagogical object ("I need to revisit the concept of quotient with this exact question").
- **Individual Performance Summary**: the detail student by student, with their list of correct and incorrect answers, how long they took on each question, and which specific option they chose when they got it wrong. The "which option they chose" was golden information: it let the teacher infer the reasoning error, not just the result.
- **Real-time data**: the screen updated while students played, letting the teacher intervene pedagogically during the session, not after. This was the heart of the proposition and the hardest thing to demonstrate in a short pitch: the difference between "I found out last week that María didn't understand quotients" and "I'm seeing right now that María has made three consecutive mistakes on quotients, I'm going to go sit with her."

![Dashboard screen of the Omniduc Teacher Portal showing performance by class, student, and learning objective](/img/entrepreneurship/omniduc/portal-dashboard.png "Teacher Portal dashboard. The teacher could cross performance by class, student, objective, and difficulty, and drill down from an aggregate cell to the exact question where the student failed, without waiting for the weekly grading cycle.")

The backend also stored metadata for each question (learning objective, thematic axis, cognitive level), so performance could be aggregated along any dimension the teacher needed to complete their pedagogical reports.

## What Was Omniduc's Business Model?

**The model was an annual subscription paid by the school, not by families.** That decision was early and deliberate: selling to schools meant longer sales cycles, but higher ticket size, multi-year retention, and the ability to cover all students in an entire grade level in a single transaction. Selling to families meant sky-high CAC, weak retention, and dependency on a decision repeated every month.

The commercial structure was as follows:

- **Segment**: Chilean schools offering primary education (private, subsidized-private, and public schools with budgetary autonomy).
- **Product**: annual subscription to the Omniduc service, including access to the video game for all students in the covered grade level and to the teacher portal for their teachers.
- **Price**: **$20,000 CLP annual per student**, designed to enter below the market price of comparable platforms while above the per-unit operational cost.
- **TAM**: approximately **$25,000 million CLP** ([CEM MINEDUC, 2018](https://centroestudios.mineduc.cl/), retrieved 2026-05-10), equivalent to 8,200 schools × 1,250,000 students from 2nd to 6th grade × $20,000 per year.

The reasoning behind the ticket was that a typical school with 60 students per grade level would pay $1.2M CLP per year per grade. That is comparable to what many schools already spend on publisher workbooks or external platform licenses, but it also delivers analytics that workbooks don't.

<figure style="margin: 2.5rem 0;">
<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of Omniduc's B2B business model: Omniduc delivers a Service Subscription to Primary Schools, who pay 20,000 Chilean pesos per student per year." style="width:100%;height:auto;font-family:inherit;display:block">
<defs><marker id="omni-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#222"></path></marker></defs>
<text x="360" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#222">Business model · B2B Service</text>
<text x="360" y="46" font-size="11" text-anchor="middle" fill="#222" opacity="0.6">Annual subscription paid by the school</text>
<rect x="60" y="100" width="220" height="100" rx="2" fill="none" stroke="#222" stroke-width="2"></rect>
<text x="170" y="138" font-size="16" font-weight="700" text-anchor="middle" fill="#222">Omniduc</text>
<text x="170" y="158" font-size="11" text-anchor="middle" fill="#222" opacity="0.6">Video game + Teacher Portal</text>
<text x="170" y="174" font-size="11" text-anchor="middle" fill="#222" opacity="0.6">Learning data</text>
<line x1="280" y1="130" x2="440" y2="130" stroke="#222" stroke-width="1.5" marker-end="url(#omni-arrow)"></line>
<text x="360" y="120" font-size="11" font-weight="700" text-anchor="middle" fill="#222">Service subscription</text>
<line x1="440" y1="170" x2="280" y2="170" stroke="#222" stroke-width="1.5" marker-end="url(#omni-arrow)"></line>
<text x="360" y="194" font-size="11" font-weight="700" text-anchor="middle" fill="#222">$20,000 CLP annual / student</text>
<rect x="440" y="100" width="220" height="100" rx="2" fill="none" stroke="#222" stroke-width="2"></rect>
<text x="550" y="138" font-size="16" font-weight="700" text-anchor="middle" fill="#222">Schools</text>
<text x="550" y="158" font-size="11" text-anchor="middle" fill="#222" opacity="0.6">Primary education</text>
<text x="550" y="174" font-size="11" text-anchor="middle" fill="#222" opacity="0.6">2nd to 6th grade</text>
<text x="360" y="248" font-size="11" text-anchor="middle" fill="#222" opacity="0.65">TAM Chile: $25,000M CLP · 8,200 schools · 1.25M students</text>
<text x="360" y="264" font-size="10" text-anchor="middle" fill="#222" opacity="0.5">Source: CEM Chile, 2018</text>
</svg>
<figcaption style="margin-top:0.75rem;text-align:center;font-size:0.875rem;color:#666;font-style:italic;">B2B service flow. The school pays an annual per-student subscription in exchange for access to the video game and the teacher portal.</figcaption>
</figure>

### The Latin American EdTech Market Context

Although our initial focus was Chile, the investor rationale behind the venture assumed regional expansion. And the regional market numbers were, and remain, attractive. The EdTech industry in Latin America was valued at **US$7.5 billion in 2025**, projected to grow to **US$28.9 billion by 2035**, equivalent to a CAGR of 14.5% ([Future Market Insights, 2025](https://www.futuremarketinsights.com/reports/edutech-industry-analysis-in-latin-america)). The K-12 segment represented **42.33% of revenue share** in 2024, with a projected 14% CAGR between 2025 and 2030 for the region ([Grand View Research, 2025](https://www.grandviewresearch.com/horizon/outlook/education-technology-market/latin-america)).

<figure style="margin: 2.5rem 0;">
<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ascending line chart of the Latin American EdTech market: grows from 7.5 billion dollars in 2025 to 28.9 billion in 2035, with a 14.5% CAGR." style="width:100%;height:auto;font-family:inherit;display:block">
<text x="360" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#222">EdTech Market in Latin America</text>
<text x="360" y="46" font-size="11" text-anchor="middle" fill="#222" opacity="0.6">Projected size · USD billions · CAGR 14.5%</text>
<line x1="60" y1="300" x2="700" y2="300" stroke="#222" stroke-width="1" opacity="0.4"></line>
<line x1="60" y1="80" x2="60" y2="300" stroke="#222" stroke-width="1" opacity="0.4"></line>
<text x="50" y="304" font-size="10" text-anchor="end" fill="#222" opacity="0.6">0</text>
<text x="50" y="240" font-size="10" text-anchor="end" fill="#222" opacity="0.6">10</text>
<text x="50" y="176" font-size="10" text-anchor="end" fill="#222" opacity="0.6">20</text>
<text x="50" y="112" font-size="10" text-anchor="end" fill="#222" opacity="0.6">30</text>
<line x1="60" y1="240" x2="700" y2="240" stroke="#222" stroke-width="0.5" opacity="0.15"></line>
<line x1="60" y1="176" x2="700" y2="176" stroke="#222" stroke-width="0.5" opacity="0.15"></line>
<line x1="60" y1="112" x2="700" y2="112" stroke="#222" stroke-width="0.5" opacity="0.15"></line>
<path d="M 90 252 Q 600 248, 670 115" stroke="#222" stroke-width="2.5" fill="none"></path>
<circle cx="90" cy="252" r="4" fill="#222"></circle>
<circle cx="670" cy="115" r="4" fill="#222"></circle>
<text x="90" y="276" font-size="10" text-anchor="middle" fill="#222" opacity="0.7">2025</text>
<text x="90" y="240" font-size="11" font-weight="700" text-anchor="middle" fill="#222">$7.5B</text>
<text x="670" y="104" font-size="11" font-weight="700" text-anchor="middle" fill="#222">$28.9B</text>
<text x="670" y="318" font-size="10" text-anchor="middle" fill="#222" opacity="0.7">2035</text>
<text x="380" y="170" font-size="11" font-weight="700" text-anchor="middle" fill="#222" opacity="0.85">K-12 = 42% of the market</text>
</svg>
<figcaption style="margin-top:0.75rem;text-align:center;font-size:0.875rem;color:#666;font-style:italic;">The Latin American EdTech market will triple in size between 2025 and 2035, with the K-12 segment as the largest participant. Sources: <a href="https://www.futuremarketinsights.com/reports/edutech-industry-analysis-in-latin-america" style="color:inherit;text-decoration:underline;">Future Market Insights, 2025</a> and <a href="https://www.grandviewresearch.com/horizon/outlook/education-technology-market/latin-america" style="color:inherit;text-decoration:underline;">Grand View Research, 2025</a>.</figcaption>
</figure>

The market, in other words, was (and still is) large, growing, and with a dominant segment (K-12) that is exactly where Omniduc was aiming. What the market size didn't solve, as we'll see in the post-mortem, was the microeconomics of the sales channel to Chilean schools.

## How Did We Validate the Problem (and Where Did We Hit the Wall)?

<!-- [PERSONAL EXPERIENCE] -->

Before writing a single line of code, we spent several months validating the problem. We did what the textbooks teach:

1. **In-depth interviews** with practicing math teachers, Academic Affairs heads, and primary school principals. We went through more than 30 one-on-one conversations, recorded with consent, transcribing pain points quote by quote.
2. **Structured surveys** distributed through teacher networks (including the alliance with Explora Valparaíso from the Ministry of Science), with both qualitative questions and willingness-to-pay questions.
3. **Direct classroom observation**: ethnographic observation is slow and hard to scale, but it delivers information that no interview can. Watching a teacher grade worksheets at 11pm on Sunday is a data point that doesn't show up in a survey.
4. **Systematic review of the MINEDUC curriculum framework** and Performance Standards to ensure the MVP's content coverage was aligned with what SIMCE evaluated.
5. **Competitive landscape analysis**: from international platforms (Khan Academy, IXL, ALEKS) to local solutions (Aprendolibre, Puntaje Nacional, publisher-owned platforms from Santillana and SM).

That part went relatively well. The problem was real, teachers described it in their own words, and the value proposition resonated with almost everyone we interviewed. The qualitative validation gave us more than enough reason to invest time in building the MVP.

What we **didn't** validate in time, and what turned out to be the decisive factor, was the **sales channel**.

### The Five Chilean Channel Mechanics We Learned Too Late

Selling to a school in Chile doesn't resemble selling B2B SaaS in any other vertical. Some specific observations we gathered during pilots and commercial outreach:

- **The decision-maker is distributed**: the principal signs, but the real decision is influenced by the Academic Affairs head (UTP), the math teachers, the governing body (for subsidized schools), and sometimes the parent association. Convincing just one of them doesn't unblock the sale. We gave spectacular pitches to principals who later heard "no" from the UTP for a reason completely unrelated to the product, and there was no appeal channel.
- **The sales cycle is one academic year**: by March the school already has its budget and vendors locked in. If you didn't enter the conversation in September the previous year, you wait another year. A startup with 12 to 18 months of runway can't afford a "lost" year in the pipeline.
- **Discretionary budget is nearly zero**: most schools operate with tight margins and complex reallocation processes. Convincing the principal is less than half the problem; getting the budget line to exist, or reallocating it from an existing vendor, is the other half.
- **The free pilot doesn't convert on its own**: we ran pilots with enthusiastic teachers who loved the product, and the school still didn't sign a subscription the following year, because the decision wasn't theirs to make. The free pilot also doesn't prove demand. It only proves that something free gets used.
- **The subsidized channel has its own logic**: subsidized schools manage SEP (Preferential Educational Subsidy), which has very specific expense categories. If your product doesn't fit a SEP category, it can't be paid with SEP, and then it competes for the governing body's out-of-pocket budget, which is scarce.

This left us with a functional MVP, positive pedagogical validation, and commitments from three schools for pilots, but no customer acquisition model that worked at scale within the startup's calendar.

## What Did Omniduc Achieve in 12 Months?

During the 12 months of operation, we reached the following milestones:

<figure style="margin: 2.5rem 0;">
<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Omniduc milestone timeline: Sep 2021 school agreement for prototype funding and Semilla Expande Fund; first half of 2022 first MVP version and Explora Valparaíso partnership; second half of 2022 agreements with 3 pilot schools and company closure." style="width:100%;height:auto;font-family:inherit;display:block">
<text x="360" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#222">Timeline · Sep 2021 to Sep 2022</text>
<line x1="60" y1="150" x2="680" y2="150" stroke="#222" stroke-width="1.5"></line>
<circle cx="100" cy="150" r="7" fill="#222"></circle>
<text x="100" y="95" font-size="11" font-weight="700" text-anchor="middle" fill="#222">Sep 2021</text>
<text x="100" y="115" font-size="10" text-anchor="middle" fill="#222" opacity="0.7">Prototype</text>
<text x="100" y="129" font-size="10" text-anchor="middle" fill="#222" opacity="0.7">agreement</text>
<circle cx="245" cy="150" r="7" fill="#222"></circle>
<text x="245" y="175" font-size="11" font-weight="700" text-anchor="middle" fill="#222">Dec 2021</text>
<text x="245" y="195" font-size="10" text-anchor="middle" fill="#222" opacity="0.7">Semilla Expande</text>
<text x="245" y="209" font-size="10" text-anchor="middle" fill="#222" opacity="0.7">Fund awarded</text>
<circle cx="390" cy="150" r="7" fill="#222"></circle>
<text x="390" y="95" font-size="11" font-weight="700" text-anchor="middle" fill="#222">May 2022</text>
<text x="390" y="115" font-size="10" text-anchor="middle" fill="#222" opacity="0.7">First functional</text>
<text x="390" y="129" font-size="10" text-anchor="middle" fill="#222" opacity="0.7">MVP version</text>
<circle cx="535" cy="150" r="7" fill="#222"></circle>
<text x="535" y="175" font-size="11" font-weight="700" text-anchor="middle" fill="#222">Jul 2022</text>
<text x="535" y="195" font-size="10" text-anchor="middle" fill="#222" opacity="0.7">Agreements with</text>
<text x="535" y="209" font-size="10" text-anchor="middle" fill="#222" opacity="0.7">3 pilot schools</text>
<circle cx="660" cy="150" r="9" fill="#222" stroke="#222" stroke-width="2"></circle>
<text x="660" y="95" font-size="11" font-weight="700" text-anchor="middle" fill="#222">Sep 2022</text>
<text x="660" y="115" font-size="10" text-anchor="middle" fill="#222" opacity="0.7">Company</text>
<text x="660" y="129" font-size="10" text-anchor="middle" fill="#222" opacity="0.7">closure</text>
<text x="360" y="255" font-size="11" text-anchor="middle" fill="#222" opacity="0.6">12 months · 5 people · 1 public fund · 1 institutional partnership · 3 pilots</text>
</svg>
<figcaption style="margin-top:0.75rem;text-align:center;font-size:0.875rem;color:#666;font-style:italic;">The five central milestones of Omniduc across 12 months of operation. The school agreement to fund the prototype allowed us to start without diluting equity, and the Corfo Semilla Expande grant funded the MVP.</figcaption>
</figure>

**2021**
- **School agreement to fund the prototype**: the first cash came before the code, which let us start without diluting equity. A school agreed to fund prototype development in exchange for being the first beneficiary of the product. It was monetary validation, not just verbal. The difference between "your product sounds good" and "I'm willing to pay for it."
- **Semilla Expande Fund awarded** (Corfo), which funded development of the first MVP version. Corfo Semilla Expande is a public accelerator fund for pre-revenue startups, historically one of the main early-stage financing vehicles in the Chilean startup ecosystem.

**2022**
- **First functional MVP version**: tablet video game plus teacher portal with authentication, course management, and overall and individual performance dashboards.
- **Alliance with [Explora Valparaíso](https://www.explora.cl/valparaiso/)** from the Ministry of Science, which opened a network of teachers for validation. Explora is the national science outreach program of the Ministry of Science; its network of associated teachers gave us access to feedback sessions that would otherwise have taken months to arrange.
- **Qualitative and quantitative validation** via surveys and interviews with practicing teachers and Academic Affairs heads.
- **Agreement with 3 schools for pilot programs** during the first semester of the academic year.
- **Live pilot with students**: the application was tested in a school where 3rd and 4th graders used *Ascendia* directly on the school's computers during class sessions. It was the first time we saw real students interact with the product, and session data arriving at the teacher portal in real time, exactly as we had designed.
- **Crea y Valida Fund awarded** (Corfo): we were awarded a second public investment fund, aimed at validating the business model at larger scale. We decided not to continue with it, because the channel reasons described in the post-mortem meant that more funding without solving the sales mechanics would have only extended the runway without changing the outcome. It was a difficult decision, but consistent with the diagnosis we already had.

The original projection was to reach 10 paying schools by end of 2022, 50 schools in 2023, and begin expansion into Latin America between 2024 and 2026. We fell short at the first stage for the channel reasons described above.

## Why Did the Pivot Attempt Fail?

Around mid-2022, when it started becoming clear that the B2B school channel economics weren't closing within our timeline, we explored a business model pivot. The hypothesis was direct: if the problem wasn't the product or the problem being addressed, but the specific channel of selling to schools, maybe we could reach the same problem (improving elementary school math learning) through different customer segments.

We designed three alternative Lean Canvases, each targeting a segment different from the school:

- **Homeschooling**: families educating their children at home who need to validate learning through MINEDUC-issued free exams, whose main pain is the lack of assessment standards and misalignment with official study plans. Model: monthly subscription to the software plus payment for personalized sessions with a math expert.
- **Parents with children in traditional schools**: households concerned about their children's math performance who already invest time or money in private tutoring and are looking for a more motivating alternative for the student. Model: subscription plus personalized sessions, distribution via social media and email marketing.
- **Education workers**: learning support specialists, special education teachers, private tutors, and math specialists who need a differentiating tool with engaging material for their own students. Model: software subscription as a professional tool, with the option to modify content.

The pivot made conceptual sense: the same pedagogical engine, the same MINEDUC-aligned question bank, the same learning metrics, but with B2C acquisition channels (Instagram, Facebook, email, landing pages) instead of the consultative school sales that took us so many months to close.

In practice, the pivot never really got executed. Designing Lean Canvases is cheap; executing the transition from institutional B2B to B2C-family (or B2B-individual professional) would have required rebuilding the product (the app was designed for classroom use with a teacher moderating, not for a child to use alone at home), rebuilding the message (from "data for the principal to manage their school" to "we help your child improve at math"), and building a B2C funnel from scratch, all with a part-time team and limited runway.

The pivot exercise, however, ended up being useful for a different conclusion. It forced us to separate the product from the channel and confirmed that the real bottleneck was the latter. That same conclusion is what organizes the post-mortem that follows.

## Why Omniduc Failed to Scale: The Honest Post-Mortem

<!-- [UNIQUE INSIGHT] -->

**We closed Omniduc in September 2022, exactly one year after launching.** It wasn't for lack of product, or lack of pedagogical validation, or lack of initial funding. It was a combination of structural problems we didn't solve in time that, in retrospect, were detectable much earlier than we detected them.

The company's own final pitch (October 2022) listed these as the "current problems": sales process, pricing strategy, and commercial strategy. The honest way to read that list is that **the product was ready and the go-to-market was not**.

### The Five Root Causes, Ordered by Impact

**1. The channel matters more than the product.** To sell SaaS to Chilean schools you need a foot already in the door: a network of known principals, an alliance with a large governing body, or a distribution agreement with an established educational publisher. Building that network from scratch, without a founder who already had it, takes years. An MVP doesn't compensate for a missing channel, and as a founder with an [engineering background](/about), I systematically underestimated how much the commercial network matters in this vertical. Today I would evaluate it as the #1 go/no-go factor in B2B EdTech.

**2. The price matters, but the billing model matters more.** Charging $20,000 per student sounds reasonable until you discover that the school wants to pay quarterly, after enrollment fees are collected, conditional on actual usage, and with a purchase order process that takes 90 days. For a startup with limited runway, the billing mechanics can kill you before the ticket does. We modeled cash flow with a DSO (days sales outstanding) of 30 days; in practice it was 90 to 120 days, and that completely changes cash projections.

**3. Qualitative validation is not demand validation.** Teachers loved us in interviews. That doesn't translate into signed purchase orders. The validation that mattered, and that we didn't do enough of, was pre-selling: "are you willing to sign a letter of intent to purchase at this price and timeline?" When we ran that exercise at the end, the responses were far less enthusiastic than the initial interviews. There's a courtesy bias in interviews with Chilean teachers that I only learned to correct through hard experience.

**4. Part-time teams have a low ceiling.** All five team members had other jobs or studies. That allowed us to start without salaries, but prevented the speed and dedication that a B2B commercial cycle spanning a full year demands. A part-time salesperson can't manage three deals simultaneously, each with five stakeholders and closings that require two in-person school visits. To run the go-to-market seriously, someone on the team needed to be 100% dedicated, and no one could afford that at the time.

**5. State seed capital is not scale capital.** Corfo Semilla Expande was an excellent vehicle for reaching MVP. It is not a scaling vehicle. The transition from public funds to sales or private investment is the first real bottleneck for a Chilean startup, and we didn't make that transition. The next round of funds (PRAE, SSAF-S, venture capital) require demonstrating commercial traction, the classic catch-22 of needing money to get traction and traction to get money.

### What Was Not the Root Cause (Even Though It Might Seem Like It)

Root causes and symptoms are different. An honest analysis also includes the wrong hypotheses we ruled out:

- **It wasn't product quality.** The MVP worked, teachers validated the pedagogy, students engaged with the video game.
- **It wasn't market size.** $25,000M CLP TAM is large enough for multiple startups to operate profitably.
- **It wasn't the team.** All five people were competent and committed; the problem was part-time dedication, not capability.
- **It wasn't the macro context.** 2022 was a reasonable year for EdTech in Chile, though with some cooling post-pandemic enthusiasm for educational technology after 2020-21.

The root cause was *go-to-market in a vertical with a specific sales channel for which we were not prepared*. And if it had to be summarized in one sentence: **we built product when what we needed to build was channel**.

If I had to build an EdTech venture for primary school students today, I would start with the channel and build product based on that channel, not the other way around.

## Would Omniduc Have Scaled If We Had Solved the Channel?

There's a counterfactual question worth asking. If we had solved the channel problem, would Omniduc have scaled? The honest answer is that we would have run into a second bottleneck that was already latent: the technical complexity of maintaining a product that was actually several products under one roof.

Omniduc wasn't a single application. It was a combination of very different pieces living under the same umbrella:

- **A video game** (*Ascendia*) with its own development cycle and an ideally dedicated team: game design, art, animation, narrative, game programming, mechanics balancing. A different stack from the web platform.
- **A teacher portal** (authentication, course management, individual and overall performance dashboards, reporting) that required a web/backend development team and data engineering roles to keep the pedagogical metrics consistent.
- **A pedagogical content layer** that grows with each new curricular unit and requires constant updates by curriculum specialists.
- **The rest of a growing startup's operations**: DevOps, security, school support, sales, marketing, user training.

Maintaining four fronts simultaneously requires specialized teams. In 2021-2022, before the capability leap that recent language models brought, that constraint was almost insurmountable for a pre-revenue startup. The critical mass of technical talent to maintain video game plus platform plus content required raising capital we didn't have, or accepting a technical debt that was going to explode at the first real scale attempt. It was a real problem, though overshadowed by the more urgent channel problem.

Seen from 2026, the equation changes. With an assistant like [Claude Code](https://www.claude.com/product/claude-code) integrated into the development workflow, what a five-person team can sustain is not comparable to what was possible four years ago. Refactors that required a full sprint now get resolved in hours, test generation goes from bottleneck to commodity, and maintaining the teacher portal in parallel with iterating the video game stops being mutually exclusive. It doesn't eliminate the underlying complexity (a video game still requires game design expertise that an LLM doesn't replace), but it does reduce the cost of maintaining several fronts in parallel enough that a small team can operate at a speed comparable to one three times larger four years ago.

This isn't a retrospective excuse. The channel would still be problem #1 to solve, and solving the channel isn't something AI solves for you. But it is honest to recognize that the technical complexity was a secondary bottleneck that, given the tools that exist today, would look materially lighter.

## What I Learned Building Omniduc

| Area | Lesson |
| --- | --- |
| Validating the problem vs. validating demand | Teachers signing enthusiastic interviews doesn't mean the school will sign a purchase order. The validation that matters is pre-selling at real price, not the abstract conversation. |
| B2B EdTech in Chile | Distributed decision-maker (principal, Academic Affairs, governing body, teachers), rigid annual cycle (decision in September, payment in March), near-zero discretionary budget. Plan for a 12-month sales cycle. |
| Adaptive product | Start with the data trace, not the video game. The real differentiator wasn't Ascendia's animation; it was that each student answer generated a structured event queryable in real time. |
| The multidisciplinary team | Mixing engineering, pedagogy, and design in a small team is non-negotiable for EdTech. No single profile can cover all three angles alone, and missing one shows up in the product immediately. |
| Full-time vs. part-time | A B2B startup with a 12-month sales cycle requires at least one founder 100% dedicated to go-to-market. Part-time is not viable beyond the MVP. |
| When to close | Closing on time is a technical decision, not an emotional one. If the channel economics don't close and you don't have runway to experiment with three more channels, closing frees up human capital for the next project. |
| State seed capital | Corfo Semilla Expande was an excellent vehicle for reaching MVP. It is not a scaling vehicle. The transition from public funds to sales or private investment is the first real bottleneck for a Chilean startup. |
| Billing, not just pricing | Define a realistic DSO (60 to 120 days in Chilean schools) and model cash flow from there. An attractive ticket with poor billing breaks the startup faster than a lower ticket with smooth billing. |
| Pedagogical documentation | Having a curriculum specialist sign off on the alignment with the MINEDUC curriculum was what opened the conversation with several schools. Pedagogical credibility is an underrated commercial asset in EdTech. |

## What Happened Next: The Ecosystem Four Years Later

**The problem Omniduc was trying to address is still active, but the context has changed.** The 2024 SIMCE showed the most significant improvement in 4th grade math in a decade: 264 average points, 14 points higher than 2022 ([MINEDUC, March 2025](https://www.mineduc.cl/resultados-simce-2024-revelan-historico-avance-en-4basico/)). It is real progress, but most students are still far from the adequate standard, and the driver behind the improvement is a combination of full school days post-pandemic, Aprendizajes Clave programs, and greater use of digital platforms in the classroom.

Omniduc's core hypothesis (that continuous formative assessment with real-time data improves learning) has become technical consensus over the past four years. Both UNESCO and World Bank reports post-pandemic reinforced the idea that "tutoring interventions with learning data" are one of the few strategies with robust evidence for learning recovery ([World Bank Learning Recovery, 2023](https://www.worldbank.org/en/topic/education)).

The market also deepened. Platforms like Aprendolibre, Khan Academy in Spanish, ALEKS, and Math Kangaroo have grown in Chile. The difference compared to 2022 is that **today it is easier to convince a governing body that the category exists**, something that in 2022 still required evangelism. That market friction, paradoxically, is what affected us most. We were too early for the category that schools would be willing to buy today.

## Links and Sources

**Public policy and education data**
- MINEDUC National Curriculum: [curriculumnacional.cl](https://www.curriculumnacional.cl/)
- PISA 2018 Chile results: [Agencia de Calidad de la Educación (PDF)](https://archivos.agenciaeducacion.cl/PISA_2018-Entrega_de_Resultados_Chile.pdf)
- ERCE 2019 UNESCO: [es.unesco.org/fieldoffice/santiago/llece](https://es.unesco.org/fieldoffice/santiago/llece/ERCE2019)
- World Bank, *Learning to Realize Education's Promise*: [World Development Report 2018](https://www.bancomundial.org/es/publication/wdr2018)
- SIMCE 2024 MINEDUC: [Resultados Simce 2024](https://www.mineduc.cl/resultados-simce-2024-revelan-historico-avance-en-4basico/)

**Funding and ecosystem**
- Corfo Semilla Expande: [corfo.cl/sites/cpp/convocatorias](https://www.corfo.cl/sites/cpp/convocatorias/semilla_expande)
- Explora Valparaíso (MINCIENCIAS): [explora.cl/valparaiso](https://www.explora.cl/valparaiso/)

**EdTech market**
- Future Market Insights, *EduTech Industry Analysis in Latin America*: [futuremarketinsights.com](https://www.futuremarketinsights.com/reports/edutech-industry-analysis-in-latin-america)
- Grand View Research, *Latin America Education Technology Market 2030*: [grandviewresearch.com](https://www.grandviewresearch.com/horizon/outlook/education-technology-market/latin-america)
- HolonIQ, *2025 Latin America EdTech 100*: [holoniq.com/notes](https://www.holoniq.com/notes/2025-latin-america-edtech-100)

**Pedagogical framework**
- Dylan Wiliam, *Embedded Formative Assessment*: [video keynote](https://www.youtube.com/watch?v=zwGaG1b_T2w)
- Sir Ken Robinson, *Changing Education Paradigms* (RSA Animate): [video](https://www.youtube.com/watch?v=zDZFcDGpL4U)
- Systematic review on gamification and math (LATAM, 2025): [latam.redilat.org](https://latam.redilat.org/index.php/lt/article/view/5262)

*By [Francisco Frez](/about), Founder and CEO of Omniduc · Sep 2021 to Sep 2022. Explore more [projects and ventures](/projects) or read [related articles](/blog).*
