---
name: ffrezr-website
description: Guide style, voice, and content for Francisco Frez's personal website. Use when building components, writing blog articles, editing copy, designing pages, or making any change to this portfolio. Ensures design compliance with Nova Editorial (DESIGN.md) and maintains a warm, personal, non-sales voice. This is a personal site for sharing learnings and having fun — NOT a lead-generation or hiring portfolio.
---

# Francisco Frez's Personal Website

This is a **personal website** — a place to share learnings, experiments, and personal perspective. It is NOT a lead-gen site, NOT a consulting portfolio, NOT a job-hunting page.

The person behind it is a data engineer, but the site isn't about selling that. It's about showing the human — someone curious, a little playful, genuinely excited about what they're learning and making.

## Always Read DESIGN.md First

Before making any visual change, **read `DESIGN.md`** in the repo root. It is the source of truth for the Nova Editorial design system — color tokens, typography scale, spacing, component rules, border philosophy. Do not duplicate those rules here; reference and apply them.

## Voice & Tone

### Write like
- A friend sharing something cool they just discovered
- Someone telling a story over coffee, not giving a talk
- First person, conversational, specific
- Comfortable with uncertainty ("I'm still figuring this out", "turns out I was wrong about…")
- Concrete details over generic claims
  - ✅ "I spent a Sunday debugging a cursed SQL query and learned about window functions"
  - ❌ "Experienced in data engineering and SQL optimization"
- Humor welcome when it fits naturally
- Unfinished thoughts welcome — this isn't a press release

### Don't write like
- LinkedIn ("passionate about leveraging synergies to unlock value")
- A resume or job application
- A consultant pitching services
- A conference talk abstract
- Third person ("Francisco has experience in…")
- Sales-driven ("let's build something together", "hire me", "open to new opportunities")

### Banned words/phrases
- leverage, synergy, unlock, deliver value, solutions, seamlessly, empower
- "passionate about…"
- "ultimate guide to…", "X things you need to know about Y"
- "open to new opportunities"

## Content Guidelines

### Homepage
- Lead with **who he is as a person**, not as a resource to hire
- Show curiosity, not credentials
- Invite the reader in, don't pitch them
- A friendly hello beats a professional summary

### About
- Personal history over career narrative
- Include things he actually cares about — hobbies, interests, weird opinions are welcome
- Keep the data engineer facts, but frame them as "what I do" not "what I sell"
- Formal labels (e.g., "Key Milestones") mixed with informal copy works well — he likes the contrast

### Blog
- A **learning diary**, not thought leadership
- Write about:
  - Things he just learned (basic is fine — beginners reading are the audience too)
  - Experiments that failed
  - Weird tech he's playing with
  - Opinions he's forming, not final verdicts
- Avoid engagement-bait formats ("X things you should know", "The ultimate guide")
- Rough edges preserve authenticity — polish can kill it

### Projects
- Describe **what** he made AND **why** it was fun, hard, or interesting
- Include context, not just tech stack
- Personal experiments > enterprise achievements
- Show the process, the stuck moments, the stupid mistakes

### Contact
- Friendly, not transactional
- "Want to say hi?" beats "Let's discuss your project"

## Designing New Pages & Views

When creating new pages, sections, or views, think **before** coding. Commit to an intentional design, then execute with precision.

### Design Thinking (before writing code)

1. **Purpose** — What does this page solve? Who's reading it? (A blog post reader is different from a project detail reader.)
2. **Emotional tone** — Within Nova Editorial's editorial/monochrome system, what's the **feeling** of this specific page? Contemplative? Playful? Sharp? Technical?
3. **The one thing they remember** — What's the single detail someone will recall after leaving? A hero line? An unexpected layout? A striking image?
4. **Consistency check** — Does this feel like it belongs in Francisco's site? If a visitor lands here from another page, does the voice/style match?

**Important:** Unlike generic design advice that pushes for "bold aesthetic variation" across designs, your job here is the opposite — **stay coherent with Nova Editorial**. The creative expression lives in composition, rhythm, and details, not in switching fonts or color palettes.

### Aesthetic Principles (applied within Nova Editorial)

- **Typography with intention** — Manrope is fixed, but type scale choices carry meaning. Display-large for emotional moments, body-large for reading, label for metadata. Don't default to Body-medium everywhere.
- **Tonal depth over lines** — Use the surface-container-* layers to create structure. Stack tonal planes instead of drawing borders. A section can "breathe differently" just by shifting one level.
- **Asymmetric composition** — Break the grid intentionally. 7/5 column splits, offset images, content that bleeds past canvas edges. Symmetry is a last resort.
- **Negative space is content** — Minimum 80–120px between major sections. Empty space communicates confidence and editorial restraint.
- **Motion with purpose** — CSS-only where possible. One well-orchestrated staggered reveal on page load beats five scattered micro-interactions. Use `prefers-reduced-motion`. When React-side motion is needed, reach for Motion (framer-motion) if available, not homemade transitions.
- **Atmosphere in details** — Signature glow shadows, glassmorphism on nav, grayscale→color image transitions. Small details compound.
- **Grain and texture** — Can add subtle noise overlays or textured backgrounds to break up flat surfaces, but only if they reinforce the editorial feel. Never decorative for decoration's sake.

### Anti-patterns when designing new views

- ❌ Defaulting to a standard 12-column centered layout — Nova Editorial breaks grids on purpose
- ❌ Adding borders "to define" a card or section — always use tonal shifts first
- ❌ Copy-pasting a layout from another page without thinking about this page's purpose
- ❌ Using a random display font for "visual interest" — Manrope has nine weights, that's your variation
- ❌ Centering body paragraphs for a "designery" look — stay grid-edge aligned
- ❌ Dropping in generic hero patterns (purple gradient, centered headline + subheadline + CTA trio) — this is AI slop and incompatible with Nova Editorial

### When creating a new page, checklist

- [ ] Read `DESIGN.md` first
- [ ] Named the page's emotional tone in one word
- [ ] Chosen an asymmetric layout (or justified why symmetric)
- [ ] Used at least 2 surface tonal levels for depth
- [ ] No decorative borders
- [ ] Sections have 80px+ vertical breathing room
- [ ] Hero uses `font-light` display typography with tight letter-spacing
- [ ] Images start `grayscale`, gain color on interaction
- [ ] Labels/CTAs are ALL CAPS with wide tracking
- [ ] Buttons use `rounded-[2px]`, never `rounded-full`
- [ ] Checked the copy tone — does it sound like Francisco, not LinkedIn?

## Typography — Type Scale Pipeline

`DESIGN.md` defines the type scale (sizes, weights, line heights, letter spacing) → `src/index.css` implements it as `type-*` CSS classes → pages and components use those classes everywhere.

- ✅ `DESIGN.md` is the single source of truth for typography definitions
- ✅ `src/index.css` translates DESIGN.md into `type-*` CSS classes — they must match exactly
- ✅ All pages and components must use `type-*` classes for typography — never inline Tailwind size/weight/spacing utilities
- ✅ If a new type style is needed, define it in `DESIGN.md` first, then add the class in `index.css`
- ❌ Never invent font sizes outside the DESIGN.md type scale
- ❌ Never use raw Tailwind like `text-lg font-light` when a `type-*` class exists for that purpose

## Design Compliance (reference)

All visual work must follow `DESIGN.md` (Nova Editorial). Quick reminders of non-obvious rules:

- Primary color is `#222222` — never pure `#000000`
- Borders only on inputs (bottom), blockquotes (left accent), filter bars. **No borders on cards or sections** — use tonal shifts
- `rounded-[2px]` on buttons — never `rounded-full` on CTAs
- Images: `grayscale` by default, color on hover
- Typography: use `type-*` CSS classes (in `src/index.css`), not raw Tailwind sizes
- Font-light (300) for hero headlines with `-0.03em` letter-spacing
- Body text: `on-surface-variant` (#474747), not the primary color
- Min section spacing: 80px
- Labels/CTAs: ALL CAPS with `tracking-[0.1em]` or `tracking-widest`

## Stack Context

- React 19 + TypeScript + Vite SPA
- Tailwind CSS v4 (Vite plugin — not PostCSS)
- React Router v7
- Content lives as markdown in `src/content/projects/` and `src/content/articles/` with YAML frontmatter
- Profile data (name, skills, experience, socials) is hardcoded in `src/data/profile.ts`
- No global state — components receive data via props
- Path alias `@/*` → `./src/*`
- Commands: `npm run dev`, `npm run build`, `npm run preview`

### Adding content
- **New project or article:** create `.md` file in `src/content/{projects|articles}/` with the frontmatter schema matching existing files. The slug must match URL usage.
- **Profile changes:** edit `src/data/profile.ts`
- **New routes:** add to `src/App.tsx` inside `<Layout>` wrapper

## Francisco — personal details for accurate copy

These details matter when writing copy so it sounds like him, not a generic persona:

- **Actual interests**: anime, gaming, good food, healthy living, gym, running, trying new things
- **Marathon**: he doesn't love running — he set it as a goal and now has to finish it. Frame it as stubbornness, not passion
- **Astro Cold Brew**: NEVER mention it. Not in copy, not as an example, not as a passing reference. It's off-limits
- **Music**: plays guitar at church — it's "at church" not "on stage" or "in a band"
- **Tone detail**: he says "close the Mac" not "close the laptop" — small but personal
- **Sports**: prefers gym and running over rollerblading. Paragliding is something he does but not a core identity thing
- **Self-aware humor**: he's comfortable being self-deprecating ("game more than I'd admit in an interview", "still figuring out if I like running"). Lean into this

## Anti-patterns

### Content
- ❌ Turning hobbies into "passions"
- ❌ Framing experiments as "strategic initiatives"
- ❌ Treating the blog as a content marketing funnel
- ❌ Adding CTAs that push toward hiring/contact in blog posts
- ❌ Writing generic "welcome to my portfolio" intros
- ❌ Mentioning Astro Cold Brew — ever, in any context

### Design
- ❌ Adding borders where tonal shifts would work
- ❌ Using `#000000`
- ❌ `rounded-full` on buttons
- ❌ Generic fonts — Manrope only
- ❌ Centered body paragraphs
- ❌ Heavy drop shadows (use signature glow)

### Behavior
- Don't over-polish. If the user says "this is rough", keep it rough if that's the vibe.
- Don't suggest "optimizing for SEO" or "improving conversion". This site isn't a funnel.
- Don't recommend analytics/tracking additions unless explicitly asked.

## Collaboration Preferences

These are stable working preferences learned while collaborating on this site. Follow them unless the user explicitly asks otherwise.

### Content approval
- Do not change copy, titles, descriptions, labels, or any other written content without explicit user approval.
- If the user wants help with content, propose alternatives in chat first and wait for approval before editing files.
- If the user picks an option, apply it exactly as approved unless they ask for adaptation.

### Style vs content
- Style-only changes can be made directly when they do not alter wording or meaning.
- This includes typography, spacing classes, design token alignment, CSS cleanup, and moving repeated styles into centralized CSS classes.
- When a task mixes content and styling, separate the two clearly and confirm the content portion before editing it.

### Tone calibration
- Do not assume the site must always sound informal.
- Aim for a mixed tone: personal and human, but capable of being more sober and professional when the section is about business, ventures, or more serious work.
- Do not flag more formal copy as wrong by default. First check whether it still fits the site's balance and the user's intent.

### Implementation preferences
- Prefer centralized typography in `src/index.css` through semantic `type-*` classes rather than inline Tailwind font-size or tracking utilities.
- Prefer dedicated CSS classes for component-specific typography instead of reusing unrelated classes just because they look similar.
- Prefer `rem` for all `font-size` values in the typography system.

## When in doubt

Ask: *"Would Francisco say this to a friend over coffee?"* If no, rewrite it. If the content sounds like it belongs on LinkedIn, it doesn't belong here.
