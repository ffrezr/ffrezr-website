# Design System: Nova Editorial

**Author:** Francisco Frez Rojas  
**Brand Name:** Francisco Frez  
**Design Tool:** Google Labs Stitch (MCP Server Integration)  
**Last Updated:** April 22, 2026

---

## Overview & Philosophy

This design system is a framework for showcasing creative authority through high-end editorial layouts inspired by premium lifestyle and architecture magazines. It rejects template-heavy aesthetics in favor of intentional, asymmetric compositions.

### Core Principle: "The Breather"
Massive negative space, asymmetrical content balancing, and typographic hierarchy that feels like a printed masthead. Tonal depth takes priority over structural lines, creating a fluid, expansive interface where portfolio projects remain the undisputed focal point.

### Violet Accent Thread
A violet accent color (`#7029D9`) runs through the entire design as a signature highlight — hero markers, name accents, button hovers, tag interactions, and social icon hovers all use it. This creates a cohesive thread of energy against the monochrome base palette.

---

## Color System: Tonal Architecture

The palette uses sophisticated grays with a violet accent thread to define space through color rather than lines.

### Primary Palette (Material Design 3)

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#222222` | Headlines, primary CTAs, brand text |
| `primary-container` | `#3C3B3B` | Fallback hover states |
| `surface` | `#F9F9F9` | Primary canvas (softer than pure white) |
| `surface-container-lowest` | `#FFFFFF` | Floating cards, interactive elements |
| `surface-container-low` | `#F3F3F4` | Large content blocks, tag backgrounds, image placeholders |
| `surface-container` | `#EEEEEE` | Default containers |
| `surface-container-high` | `#E8E8E8` | Hover states |
| `surface-container-highest` | `#E2E2E2` | Active states, filter borders |
| `secondary` | `#5E5E5E` | Supporting text, labels, metadata |
| `secondary-fixed-dim` | `#ACABAB` | Decorative elements, footer links, dot separators |
| `tertiary` | `#3A3C3C` | Dark backgrounds |
| `outline` | `#777777` | Focus states |
| `outline-variant` | `#C6C6C6` | Functional borders (inputs, filters, image frames) |

### Accent Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-violet` | `#7029D9` | Primary accent — hero markers, name highlights, hover states |
| `accent-violet-muted` | `#6C4EA1` | Section labels, terminal text |
| `accent-violet-dark` | `#5A20B8` | Link hover states |
| `accent-blue` | `#4869D6` | Reserved |
| `accent-green` | `#1F8F73` | Reserved |
| `accent-coral` | `#D06D55` | Reserved |

### Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `on-surface` | `#222222` | Primary text (unified with primary) |
| `on-surface-variant` | `#474747` | Body text (reduces optical vibration) |
| `on-primary` | `#E5E2E1` | Text on dark backgrounds |
| `on-secondary` | `#FFFFFF` | Text on secondary backgrounds |

### Utility Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `footer-bg` | `#1A1A1A` | Footer background |
| `muted` | `#555555` | Footer copyright text |

### Design Rules

#### ✅ DO:
- Define boundaries through background color shifts (tonal carving)
- Use `#222222` as primary for all high-impact elements (headlines, CTAs, brand)
- Use `accent-violet` (`#7029D9`) as the signature accent for interactive states and highlights
- Layer surfaces for depth (Level 0: `surface`, Level 1: `surface-container-low`, Level 2: `surface-container-lowest`)
- Use glassmorphism for navigation: `white/70` opacity + `backdrop-blur-xl`
- Add subtle hover effects to images (scale, opacity) with smooth transitions (700-1000ms)

#### ❌ DON'T:
- Never use heavy borders — use hairline (1px) borders only
- Never use pure `#000000` anywhere — `#222222` is the darkest value in the system
- Avoid heavy drop shadows (use signature glow or hairline borders instead)
- Never use `rounded-full` on buttons or CTAs — only on badges/pills

### Border Philosophy: Functional-Line

Borders exist only where they serve a usability function, never as decoration. The design system uses **hairline borders** (`hairline-border`, `hairline-t`, `hairline-b`, `hairline-divide`) for subtle, functional boundaries.

| Context | Border | Reason |
|---------|--------|--------|
| Content sections | ✅ `border-y border-neutral-100` | Section separation (portfolio section) |
| Image frames | ✅ `hero-image-frame` | Border + layered shadow for editorial depth |
| Navigation header | ❌ None | Glassmorphism defines the boundary |
| Footer separation | ❌ None | `footer-bg` (#1A1A1A) background shift |
| Input fields | ✅ `border-b` | Affordance: user needs to see where to type |
| Filter bars / tabs | ✅ `border-t` + `border-b` | Contains functional controls |
| Blockquotes | ✅ Left accent line | Strong editorial convention |
| Experience rows | ✅ `hairline-divide` + `hairline-t` | Separates timeline entries |

**Hairline Utilities** (defined in `src/index.css`):
- `hairline-border` — Full border using `outline-variant` color (#C6C6C6)
- `hairline-t` — Top border only
- `hairline-b` — Bottom border only
- `hairline-divide` — Divider between sibling elements

### Special Effects

**Glassmorphism (Navigation):**
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(24px); /* backdrop-blur-xl */
```

**Hero Image Frame (`hero-image-frame`):**
```css
border: 1px solid var(--color-outline-variant);
box-shadow:
  0 26px 48px rgb(34 34 34 / 6%),
  0 18px 36px rgb(34 34 34 / 4%);
```
Used on portrait images, article card images (compact variant), and project card images.

**Signature Glow (Detail pages):**
```css
box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.04);
```

**Hero Marker Glow:**
```css
background: var(--color-accent-violet);
box-shadow: 0 0 0 6px rgb(112 41 217 / 10%);
```

**Selection Highlight:**
```css
::selection {
  background-color: var(--color-primary);
  color: var(--color-on-secondary);
}
```

**Drop Cap (Markdown articles):**
```css
.markdown-body > p:first-child::first-letter {
  float: left;
  font-size: 5rem;
  line-height: 0.8;
  font-weight: 800;
  color: var(--color-primary);
}
```

**Wave Emoji Animation (Hero):**
Animated hand wave on the hero greeting, respects `prefers-reduced-motion`.

**Input Fields (Bottom-border style):**
```css
border: 0;
border-bottom: 1px solid var(--color-outline-variant);
/* focus: */ border-color: var(--color-primary);
```

---

## Typography: Neo-Grotesk Voice

**Primary (UI / Headings / Labels):** Manrope (weights 200-800) — digital equivalent of Aeonik, clean Neo-Grotesk aesthetic.
**Secondary (Long-form reading):** Source Serif 4 (weights 400, 600, 700) — transitional serif designed for screen reading. Used exclusively for article body via `type-article-body` (`--font-serif`), inherited by `<strong>` and drop caps inside markdown. Pairs with Manrope as the classic "transitional serif + geometric sans" editorial combination.

### Type Scale

| Level | Size | Weight | Line Height | Letter Spacing | CSS Class | Usage |
|-------|------|--------|-------------|----------------|-----------|-------|
| **Display Large** | 3.5rem (56px) | 300 (light) | 1.1 | -0.03em | `type-display-large` | Hero statements |
| **Display Medium** | 2.75rem (44px) | 300 (light) | 1.15 | -0.03em | `type-display-medium` | Page/section titles |
| **Display Small** | 2.25rem (36px) | 300 (light) | 1.2 | -0.02em | `type-display-small` | Feature headers |
| **Headline Large** | 2rem (32px) | 300 (light) | 1.25 | -0.01em | `type-headline-large` | Stats, large numbers |
| **Headline Medium** | 1.5rem (24px) | 600 (semibold) | 1.3 | 0 | `type-headline-medium` | Subsection titles |
| **Headline Small** | 1.25rem (20px) | 700 (bold) | 1.4 | 0 | `type-headline-small` | Card headers |
| **Headline XSmall** | 1rem (16px) | 700 (bold) | 1.4 | 0 | `type-headline-xsmall` | Small headers |
| **Body Large** | 1.125rem (18px) | 300 (light) | 1.5 | 0 | `type-body-large` | Primary body text, hero subtitles |
| **Article Body** | 1.25rem (20px) | 400 (regular) | 1.6 | 0 | `type-article-body` | Long-form reading (article paragraphs/lists) — uses **Source Serif 4** (`--font-serif`) |
| **Body Medium** | 0.95rem (15.2px) | 300 (light) | 1.5 | 0 | `type-body-medium` | Secondary text |
| **Body Small** | 0.775rem (12.4px) | 400 (regular) | 1.4 | 0 | `type-body-small` | Captions |
| **Label** | 0.775rem (12.4px) | 400 (regular) | 1.2 | +0.05em | `type-label` | ALL CAPS metadata |

### Specialized Type Styles

| Component | CSS Class | Size | Weight | Letter Spacing | Usage |
|-----------|-----------|------|--------|----------------|-------|
| **Hero Terminal** | `type-hero-terminal` | 0.72rem (11.5px) | 500 | 0.12em | Monospace section labels (SF Mono) |
| **Tech Pill** | `type-tech-pill` | 0.8rem (12.8px) | 600 | 0.04em | Skill names in hero strip |
| **Button Editorial** | `type-button-editorial` | 0.75rem (12px) | 700 | 0.1em | Primary CTA text |
| **Skill Category** | `type-skill-category` | 0.75rem (12px) | 400 | 0.1em | Skill section headers |
| **Skill Item** | `type-skill-item` | 1rem (16px) | 400 | 0 | Individual skill names |
| **Nav Link** | `type-nav-link` | 0.75rem (12px) | 500 | -0.025em | Navigation links (uppercase) |
| **Footer Text** | `type-footer-text` | 0.625rem (10px) | 400 | 0.2em | Footer content (uppercase) |

### Project Card Type Styles

| Component | CSS Class | Size | Weight | Letter Spacing | Usage |
|-----------|-----------|------|--------|----------------|-------|
| **Card Title** | `type-project-card-title` | 1.25rem (20px) | 700 | -0.025em | Project card heading |
| **Card Description** | `type-project-card-description` | 0.8125rem (13px) | 400 | 0 | Project card body text |
| **Card Tag** | `type-project-card-tag` | 0.6rem (9.6px) | 400 | 0.1em | Tag size in project cards (uppercase) |
| **Card Meta** | `type-project-card-meta` | 0.6rem (9.6px) | 700 | 0.25em | Period/date metadata (uppercase) |
| **Card Placeholder** | `type-project-card-placeholder` | 0.6rem (9.6px) | 400 | 0.3em | Empty image placeholder label |

### Article Card Type Styles

| Component | CSS Class | Size | Weight | Letter Spacing | Usage |
|-----------|-----------|------|--------|----------------|-------|
| **Article Category** | `type-article-category` | 0.65rem (10.4px) | 700 | 0.1em | Article category badges |
| **Article Meta** | `type-article-meta` | 0.75rem (12px) | 400 | 0 | Article metadata (read time) |
| **Article Title Compact** | `type-article-title-compact` | 1.25rem (20px) | 300 | 0 | Article titles in compact cards |
| **Article Meta Grid** | `type-article-meta-grid` | 9px | 700 | 0.25em | Article metadata in grid layout |
| **Article Title Grid** | `type-article-title-grid` | 1.25rem (20px) | 700 | -0.025em | Article titles in grid cards |
| **Article Excerpt** | `type-article-excerpt` | 13px | 400 | 0 | Article description previews |

### Experience Row Type Styles

| Component | CSS Class | Size | Weight | Letter Spacing | Usage |
|-----------|-----------|------|--------|----------------|-------|
| **Experience Title** | `type-experience-title` | 1.19rem (19px) | 500 | 0 | Job/company names |
| **Experience Meta** | `type-experience-meta` | 0.69rem (11px) | 400 | 0.1em | Experience metadata (uppercase) |
| **Experience Period** | `type-experience-period` | 0.875rem (14px) | 400 | 0.1em | Date ranges (uppercase) |
| **Experience Role** | `type-experience-role` | 0.925rem (15px) | 300 | 0 | Job descriptions |
| **Experience Tag** | `type-experience-tag` | 0.69rem (11px) | 400 | 0.1em | Technology tags (uppercase) |

**Implementation:** All type scale levels are defined as CSS classes in `src/index.css`. Use `type-*` classes instead of inline Tailwind size/weight/spacing utilities to keep typography centralized.

### Typography Rules

#### ✅ DO:
- Use ultra-tight letter-spacing (-0.03em) on display text for editorial precision
- Use `font-light` (300) for hero headlines to create elegant, breathable presence
- Give section titles significant top padding (80-120px) to let them breathe
- Use `on-surface-variant` (#474747) for body text to reduce optical vibration
- Set CTAs/labels in ALL CAPS with `tracking-[0.1em]` and `font-bold`
- Use monospace (`type-hero-terminal`) for section index labels to create a developer-editorial feel

#### ❌ DON'T:
- Never center-align body paragraphs (maintain editorial grid-edge feel)
- Never use `#000000` — `#222222` is the darkest value in the system

---

## Spacing & Layout

### Spacing Scale (8px base)

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Icon padding, tight spacing |
| `sm` | 8px | Component internal spacing |
| `md` | 16px | Default element spacing |
| `lg` | 24px | Section internal spacing |
| `xl` | 32px | Between major elements |
| `2xl` | 48px | Section dividers |
| `3xl` | 64px | Large section spacing |
| `4xl` | 80px | Minimum between major sections |
| `5xl` | 96px | Hero section spacing |
| `6xl` | 120px | Maximum section breathing room |

### Layout Principles

#### ✅ DO:
- **Asymmetric Balancing:** Offset large images with small text blocks vertically
- **Large Margins:** Minimum 80-120px padding between major sections (use `mb-56` for 14rem/224px)
- **Break the Grid:** Use odd column counts (7-5 split) for visual interest
- **Section Grouping:** Group related content with section headers using the hero-index pattern

#### ❌ DON'T:
- Avoid "grid lock" where everything perfectly aligns to 12-column grid
- Don't use symmetrical layouts for hero sections

---

## Iconography

**Icon System:** Material Symbols Outlined  
**Weight Range:** 100-700  
**Fill:** 0 (outlined style)

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
```

**Icon Size Classes:**
- `icon-sm` — 1rem (16px)
- `icon-md` — 1.125rem (18px)

**Social Icons:** LinkedIn, Medium, and GitHub use inline SVGs (not Material Symbols) for brand accuracy. They are rendered via the `SocialIcon` component in the navbar and use `social-icon-link` styling with violet hover + translateY(-2px) lift.

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `DEFAULT` | 2px | Default (maintain sharp edges) |
| `sm` | 2px | Small elements |
| `md` | 2px | Medium elements |
| `lg` | 4px | Card images, content blocks |
| `xl` | 8px | Modal dialogs |
| `full` | 9999px | Dot separators only |

**Note:** Buttons use `rounded-[2px]` (sharp editorial). `full` (9999px) is reserved for dot separators — never for CTAs.

---

## Components

### Brand Logo (`BrandLogo`)

Custom SVG monogram with interlocking "F" letterforms inside a geometric frame. Replaces the previous text-based brand name throughout the site.

```tsx
<BrandLogo showWordmark={false} className="h-10 md:h-12" />
```

**Variants:**
- `showWordmark={false}` — Monogram only (`BrandMark`). Used in navbar and footer.
- `showWordmark={true}` — Monogram + "FRANCISCO FREZ" wordmark below.

**Sizing:**
- Navbar: `h-10 md:h-12`
- Footer: `h-14 md:h-16`

### Hero Index Pattern

A consistent pattern used to introduce every major section across the site. Combines a violet marker dot, monospace label, and accent-highlighted headline.

```tsx
{/* Section label */}
<div className="hero-index-row inline-flex items-center gap-4">
  <span className="hero-index-marker" aria-hidden="true" />
  <span className="type-hero-terminal hero-index-text">
    git log
  </span>
</div>

{/* Section title */}
<h2 className="font-headline type-display-medium text-primary">
  Explore My Data <span className="hero-name-accent">Journey</span>.
</h2>
```

**Elements:**
- `hero-index-row` — Container with `accent-violet-muted` color
- `hero-index-marker` — Small violet square (0.56rem) with violet glow ring
- `hero-index-text` — Monospace terminal-style label in `accent-violet-muted`
- `hero-name-accent` — Violet-highlighted word in headlines (`accent-violet`)

**Subsection variant** uses `hero-skills-rule` (a 2.5rem horizontal line) instead of the marker dot:
```tsx
<div className="hero-index-row inline-flex items-center gap-4">
  <span className="hero-skills-rule" aria-hidden="true" />
  <span className="type-hero-terminal hero-index-text">
    01 / Entrepreneurship
  </span>
</div>
```

### Hero Skills Strip

Displays core skills with optional logos in a wrapping inline layout.

```tsx
<div className="hero-skills-strip max-w-4xl">
  <div className="hero-skills-inline">
    {skills.map((skill) => (
      <div key={skill} className="hero-skill-inline inline-flex items-center gap-4">
        <img className="hero-skill-logo h-5 w-5 shrink-0 object-contain" src={logoSrc} />
        <span className="type-tech-pill hero-skill-name text-primary">{skill}</span>
      </div>
    ))}
  </div>
</div>
```

**Style:** Monospace uppercase labels with logos. Subtle hover lift (-1px translateY) and opacity change.

### Buttons

The button system uses CSS classes defined in `src/index.css` and is exposed through pattern components in `src/components/ui/Button.tsx`.

#### Button Variants

| Variant | CSS Classes | Hover | Usage |
|---------|------------|-------|-------|
| **Primary** | `button-editorial-primary` + `type-button-editorial` | `accent-violet` bg | Main CTAs |
| **Secondary** | `button-editorial-secondary` + `type-hero-terminal` | `accent-violet` text | Underline-style links |
| **Inline** | `button-editorial-inline` + `type-hero-terminal` | `accent-violet` text | Inline navigation |

#### Pattern Components

```tsx
{/* Primary CTA with arrow */}
<PrimaryCTAButton to="/contact">Let's Talk</PrimaryCTAButton>

{/* Terminal-style command link */}
<TerminalCommandButton to="/projects">EXPLORE ALL</TerminalCommandButton>

{/* Inline arrow link */}
<InlineTerminalButton to="/contact">SAY HELLO</InlineTerminalButton>
```

**Primary (`button-editorial-primary`):**
```css
padding: 1.25rem 2.5rem;
border-radius: 2px;
background: var(--color-primary);
color: var(--color-on-primary);
/* hover: */ background: var(--color-accent-violet);
```

**Secondary (`button-editorial-secondary`):**
```css
padding-bottom: 0.55rem;
border-bottom: 0.13em solid currentColor;
color: var(--color-primary);
/* hover: */ color: var(--color-accent-violet);
```

**Inline (`button-editorial-inline`):**
```css
color: var(--color-primary);
/* hover: */ color: var(--color-accent-violet);
```

#### Button Symbol Classes

| Class | Size | Usage |
|-------|------|-------|
| `button-symbol-inline` | 1.35em | InlineTerminalButton arrow |
| `button-symbol-command` | 1.7em | TerminalCommandButton ">" prefix |
| `button-symbol-cta` | 1.5em | PrimaryCTAButton arrow |

#### Button Rules
- All CTAs use `rounded-[2px]` — never `rounded-full`
- Primary and secondary buttons use terminal-style monospace typography
- All hover states transition to `accent-violet` (not `primary-container`)
- Use `inline-flex items-center` for icon alignment
- Transition duration: 220ms ease

### Tag (`Tag`)

Reusable component for technology labels and category tags. Used in `ProjectCard`, `ExperienceRow`, and `ProjectDetailPage`.

```tsx
import Tag from './Tag'

<Tag label="BigQuery" size="sm" />    {/* Project cards */}
<Tag label="BigQuery" size="md" />    {/* Experience rows */}
<Tag label="BigQuery" size="lg" />    {/* Project detail page */}
```

**Sizes:**

| Size | Padding | Type Class | Usage |
|------|---------|-----------|-------|
| `sm` | `px-3 py-1` | `type-project-card-tag` | Project cards |
| `md` | `px-4 py-1.5` | `type-experience-tag` | Experience timeline |
| `lg` | `px-4 py-1.5` | `text-[0.65rem] uppercase tracking-widest` | Project detail headers |

**Shared styles (all sizes):**
- Background: `bg-surface-container-low`
- Text color: `text-secondary`
- Font: `font-label`
- Hover: `bg-accent-violet` + `text-white` with color transition

### Cards

#### Project Card

- **Image Container:** `hero-image-frame` — border + layered shadow
- **Image Height:** Fixed `h-[340px]` with `object-cover`
- **Image Hover:** `scale-105` with 1s ease-in-out transition (no grayscale)
- **Empty State:** Centered icon (`rocket_launch`) + type label placeholder
- **Period:** `type-hero-terminal text-secondary`, turns violet on group hover
- **Title:** `type-project-card-title font-headline`, turns violet on group hover
- **Description:** `type-project-card-description text-on-surface-variant` with `line-clamp-3`
- **Tags:** `Tag` component with `size="sm"`

#### Article Card — Grid Variant (default)
- **Container:** `flex flex-col gap-6`
- **Image:** `h-[320px]` fixed height, `hero-image-frame` (border + layered shadow), `bg-surface-container-low`
- **Image Effects:** Full color always (no grayscale), hover `scale-105` (1s ease-in-out)
- **Metadata:** `type-article-meta-grid` (category + date separated by "/")
- **Title:** `type-article-title-grid`
- **Excerpt:** `type-article-excerpt` with `line-clamp-3`

#### Article Card — Compact Variant
- **Container:** `flex flex-col`
- **Image:** `aspect-[16/10]` with `hero-image-frame` (border + shadow)
- **Image Effects:** None (no grayscale, no hover effects)
- **Metadata:** `type-article-category` + `type-article-meta` (read time) with dot separator
- **Title:** `type-article-title-compact`, hover underline with `underline-offset-8`

### Experience Row

Timeline-style component for work history displayed in a 12-column grid.

```tsx
<div className="hairline-divide hairline-t">
  <ExperienceRow experience={exp} />
</div>
```

**Structure:**
- **Container:** `hairline-divide` class adds borders between sibling items, `hairline-t` adds top border
- **Grid Layout:** 12 columns on desktop (5 + 3 + 4 split)
- **Company/Location (col-span-5):** `type-experience-title` for company name
- **Period:** `type-experience-meta` in `text-secondary`
- **Role (col-span-3):** `type-experience-role` in `text-on-surface-variant`
- **Tags (col-span-4):** `Tag` component with `size="md"`, right-aligned on desktop

### Input Fields (Bottom-border style)

```tsx
className="w-full bg-transparent border-0 border-b border-outline-variant
           text-primary font-body type-body-large py-3 px-0
           focus:outline-none focus:ring-0 focus:border-primary
           transition-colors placeholder:text-outline-variant"
```

**Rule:** Inputs use bottom-border only, no boxed inputs. Labels above in `font-label type-label tracking-[0.1em] text-secondary`.

### Navigation Bar

```tsx
<header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl">
  <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-8 py-6 w-full">
    <BrandLogo showWordmark={false} className="h-10 md:h-12" />
    <nav>{/* NavLinks */}</nav>
    <div>{/* Social icons */}</div>
  </div>
</header>
```

**Style:** Full-width glassmorphism, no border  
**Brand:** `BrandLogo` SVG monogram (not text)  
**Links:** `type-nav-link` class (0.75rem, weight 500, uppercase, tight tracking)  
**Menu Items:** Home, About, Projects, Blog, Contact  
**Active Link:** `text-primary border-b border-primary pb-1`  
**Inactive Link:** `text-secondary hover:text-primary transition-colors duration-300`  
**Right Side:** Social icon links (LinkedIn, Medium, GitHub) with `social-icon-link` class — hover turns `accent-violet` with -2px translateY lift  
**Mobile:** Hamburger icon via Material Symbols, opens drawer with `bg-white/95 backdrop-blur-xl border-t border-surface-container-high`. Social icons appear at the bottom of the drawer.

### Footer

```tsx
<footer className="bg-footer-bg text-white w-full font-body type-footer-text">
  <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-2xl mx-auto px-8 md:px-20 py-20 gap-10">
    <BrandLogo showWordmark={false} className="h-14 md:h-16" />
    <div className="flex flex-wrap justify-center gap-10">{/* social links */}</div>
    <span className="text-muted">&copy; {year} Francisco Frez.</span>
  </div>
</footer>
```

**Style:** Dark section using `footer-bg` (#1A1A1A) token — no top border  
**Layout:** Three-column flex layout (brand logo, links, copyright) with `gap-10`  
**Brand:** `BrandLogo` SVG monogram in white  
**Social Links:** Dynamic from `profile.ts` data — `text-secondary-fixed-dim hover:text-white transition-colors`  
**Copyright:** `text-muted` (#555555), uses dynamic year  
**Typography:** `type-footer-text` (0.625rem, uppercase, tracking 0.2em)

### Education Cards

Card variant used for academic credentials.

```tsx
<div className="p-8 bg-surface-container-lowest rounded-sm shadow-[0px_24px_48px_rgba(0,0,0,0.04)] outline outline-1 outline-outline-variant/15">
  <span className="type-label text-secondary mb-2 block">{date}</span>
  <h3 className="type-headline-small font-headline text-primary mb-1">{degree}</h3>
  <p className="type-body-medium text-on-surface-variant">{institution}</p>
</div>
```

### Certification List Items

Interactive list items with hover states.

```tsx
<div className="flex items-center gap-4 p-6 bg-surface-container-low rounded-sm group hover:bg-surface-container-highest transition-colors">
  <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">
    workspace_premium
  </span>
  <div>
    <h4 className="type-headline-xsmall font-headline text-primary">{name}</h4>
    <span className="type-body-small text-secondary">{issuer}</span>
  </div>
</div>
```

### Image Grids with Overlays

Photo grids with text overlays for labeling.

```tsx
<div className="group relative">
  <div className="aspect-[3/4] overflow-hidden bg-surface-container-low">
    <img
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
      src={src}
    />
  </div>
  <span className="absolute bottom-0 left-0 right-0 py-3 px-4 type-label text-white bg-gradient-to-t from-black/60 to-transparent">
    {label}
  </span>
</div>
```

---

## Page Patterns

### HomePage Structure

The home page follows a repeating pattern of **hero-index-labeled sections** separated by large margins (`mb-56`):

1. **Hero** (7-5 grid) — Greeting with wave emoji, headline with `hero-name-accent`, body text, skills strip with logos
2. **About Summary** (5-7 grid, reversed) — Portrait image + headline + stat highlights
3. **Experience** — Section header + `ExperienceRow` list inside `hairline-divide`
4. **Portfolio** — White background section (`bg-white py-40 border-y`) with `ProjectCard` grid (3 columns)
5. **Blog** — `ArticleCard` compact grid (3 columns)
6. **CTA** — Centered call-to-action with `PrimaryCTAButton`

### ProjectsPage Structure

Projects are grouped by type with numbered subsection labels:

1. **Header** — Hero-index pattern + display title + description (2/3 + 1/3 layout)
2. **Ventures** — `01 / Entrepreneurship` subsection with `ProjectCard` grid
3. **Projects & Products** — `02 / Projects` subsection (conditionally rendered)
4. **Side Projects** — `03 / Side Projects` subsection (conditionally rendered)

Each subsection uses the `hero-skills-rule` variant of the index pattern.

---

## Implementation Guidelines

### Tailwind CSS v4 Configuration

The design system is implemented using **Tailwind CSS v4** via the Vite plugin (`@tailwindcss/vite`). Design tokens are defined using the `@theme` directive in `src/index.css`.

**Vite Config:**
```ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

**Design Tokens (`src/index.css`):**
```css
@import "tailwindcss";

@theme {
  --font-headline: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --font-label: "Manrope", sans-serif;

  --color-primary: #222222;
  --color-primary-container: #3c3b3b;
  --color-surface: #f9f9f9;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f3f3f4;
  --color-surface-container: #eeeeee;
  --color-surface-container-high: #e8e8e8;
  --color-surface-container-highest: #e2e2e2;
  --color-on-surface: #222222;
  --color-on-surface-variant: #474747;
  --color-on-primary: #e5e2e1;
  --color-on-secondary: #ffffff;
  --color-secondary: #5e5e5e;
  --color-secondary-fixed-dim: #acabab;
  --color-tertiary: #3a3c3c;
  --color-outline: #777777;
  --color-outline-variant: #c6c6c6;
  --color-accent-blue: #4869d6;
  --color-accent-green: #1f8f73;
  --color-accent-violet: #7029d9;
  --color-accent-coral: #d06d55;
  --color-accent-violet-muted: #6c4ea1;
  --color-accent-violet-dark: #5a20b8;
  --color-footer-bg: #1a1a1a;
  --color-muted: #555555;

  --radius-DEFAULT: 2px;
  --radius-sm: 2px;
  --radius-md: 2px;
  --radius-lg: 4px;
  --radius-xl: 8px;
}
```

**External Resources:**
```html
<!-- index.html -->
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
```

### Base Styles

```css
body {
  font-family: "Manrope", sans-serif;
  background-color: var(--color-surface);
  color: var(--color-on-surface);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## Visual Hierarchy Checklist

When building a new page, ensure:

- [ ] **Primary Color:** All headlines and CTAs use `#222222`, never `#000000`
- [ ] **Accent Color:** Interactive highlights and hover states use `accent-violet` (`#7029D9`)
- [ ] **Hero Section:** Display typography (3.5rem+) with -0.03em spacing, `font-light` (300)
- [ ] **Section Labels:** Use the hero-index pattern (violet marker + monospace terminal label)
- [ ] **Headline Accents:** One word per headline highlighted with `hero-name-accent` (violet)
- [ ] **Section Spacing:** Minimum 80px between major sections (use `mb-56` for 14rem/224px spacing)
- [ ] **Tonal Layers:** Content uses at least 2 surface levels for depth
- [ ] **Functional Borders:** Use `hero-image-frame` for images, `hairline-*` for section separators
- [ ] **Asymmetry:** Layout breaks grid intentionally (e.g., 7-5 column split on hero)
- [ ] **Navigation:** `bg-white/70 backdrop-blur-xl`, BrandLogo monogram, social icons (no CTA button)
- [ ] **Body Text:** Uses `on-surface-variant` (#474747) for reduced optical vibration
- [ ] **Labels/CTAs:** ALL CAPS — primary uses `type-button-editorial`, secondary uses `type-hero-terminal`
- [ ] **Buttons:** All hover to `accent-violet`, sharp `rounded-[2px]` — never `rounded-full`
- [ ] **Tags:** Use the `Tag` component with appropriate size (`sm`/`md`/`lg`)
- [ ] **Cards:** `hero-image-frame` on images, violet hover accents on text
- [ ] **Footer:** `footer-bg` (#1A1A1A) dark background, BrandLogo monogram, social links
- [ ] **Icons:** Material Symbols Outlined for UI, inline SVGs for brand social icons
- [ ] **Type Classes:** Use specialized `type-*` classes — never inline typography utilities

---

## Design System Metadata

- **Stitch Project ID:** `708860268408098446`
- **Design System Name:** Nova Editorial
- **Brand Name:** Francisco Frez
- **Asset ID:** `assets/24dee11a2f3c400a8d18db65c5bf8834`
- **Canvas Width:** 2560px (desktop-first design)
- **Max Content Width:** `max-w-screen-2xl` (1536px)
- **Color Mode:** Light (Dark mode variant not yet implemented)
- **Color Variant:** Monochrome + Violet accent (`#222222` primary, `#7029D9` accent)
- **Spacing Scale:** 3 (8px base × 3 = 24px rhythm)
- **Icon System:** Material Symbols Outlined + inline SVGs for social brands

---

## Credits

**Design System:** Google Labs Stitch (AI-powered UI design generation)  
**Framework:** React + Vite + TypeScript  
**Styling:** Tailwind CSS with custom design tokens  
**Typography:** Manrope (Google Fonts)  
**Icons:** Material Symbols Outlined (Google Fonts) + inline SVGs  
**Design Philosophy:** High-end editorial, sharp aesthetic with functional minimalism and violet accent thread
