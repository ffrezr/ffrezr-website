# Design System: Nova Editorial

**Author:** Francisco Frez Rojas  
**Brand Name:** Francisco Frez  
**Design Tool:** Google Labs Stitch (MCP Server Integration)  
**Last Updated:** April 19, 2026

---

## Overview & Philosophy

This design system is a framework for showcasing creative authority through high-end editorial layouts inspired by premium lifestyle and architecture magazines. It rejects template-heavy aesthetics in favor of intentional, asymmetric compositions.

### Core Principle: "The Breather"
Massive negative space, asymmetrical content balancing, and typographic hierarchy that feels like a printed masthead. Tonal depth takes priority over structural lines, creating a fluid, expansive interface where portfolio projects remain the undisputed focal point.

---

## Color System: Tonal Architecture

The palette uses sophisticated grays and a refined dark primary to define space through color rather than lines.

### Primary Palette (Material Design 3)

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#222222` | Headlines, primary CTAs, brand text |
| `primary-container` | `#3C3B3B` | Hover states, gradient endpoints |
| `surface` | `#F9F9F9` | Primary canvas (softer than pure white) |
| `surface-container-lowest` | `#FFFFFF` | Floating cards, interactive elements |
| `surface-container-low` | `#F3F3F4` | Large content blocks, skill sections |
| `surface-container` | `#EEEEEE` | Default containers |
| `surface-container-high` | `#E8E8E8` | Hover states |
| `surface-container-highest` | `#E2E2E2` | Active states, filter borders |
| `secondary` | `#5E5E5E` | Supporting text, labels, metadata |
| `secondary-fixed-dim` | `#ACABAB` | Decorative elements, footer links |
| `tertiary` | `#3A3C3C` | Footer background |
| `outline` | `#777777` | Focus states |
| `outline-variant` | `#C6C6C6` | Functional borders (inputs, filters) |

### Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `on-surface` | `#222222` | Primary text (unified with primary) |
| `on-surface-variant` | `#474747` | Body text (reduces optical vibration) |
| `on-primary` | `#E5E2E1` | Text on dark backgrounds |
| `on-secondary` | `#FFFFFF` | Text on secondary backgrounds |

### Design Rules

#### ✅ DO:
- Define boundaries through background color shifts (tonal carving)
- Use `#222222` as primary for all high-impact elements (headlines, CTAs, brand)
- Layer surfaces for depth (Level 0: `surface`, Level 1: `surface-container-low`, Level 2: `surface-container-lowest`)
- Use glassmorphism for navigation: `white/70` opacity + `backdrop-blur-xl`
- Apply `grayscale` filter to all images by default for visual consistency
- Add subtle hover effects to images (scale, opacity, or color) with smooth transitions (700-1000ms)

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
| Project/article cards | ✅ `hairline-border` | Defines card boundaries on white backgrounds |
| Card images | ✅ `hairline-border` | Contains image within card layout |
| Navigation header | ❌ None | Glassmorphism defines the boundary |
| Footer separation | ❌ None | `tertiary` (#3A3C3C) background shift |
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

**Signature Glow (Cards, Images):**
```css
box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.04);
```

**Image Treatments:**

All images use grayscale filter by default. Hover effects vary by context:

```css
/* HomePage cards — scale only */
.grayscale {
  filter: grayscale(100%);
}
.group-hover\:scale-\[1\.02\] {
  transform: scale(1.02);
  transition: transform 1000ms ease-out;
}

/* AboutPage portraits — color reveal */
.grayscale:hover {
  filter: grayscale(0%);
  transition: all 700ms;
}

/* Article cards (grid) — opacity + scale */
.grayscale.opacity-90 {
  filter: grayscale(100%);
  opacity: 0.9;
}
.group-hover\:opacity-100.group-hover\:scale-105 {
  opacity: 1;
  transform: scale(1.05);
  transition: all 1000ms ease-in-out;
}
```

**Input Fields (Bottom-border style):**
```css
border: 0;
border-bottom: 1px solid #d4d4d8;
/* focus: */ border-color: #222222;
```

---

## Typography: Neo-Grotesk Voice

**Font Family:** Manrope (all weights: 200-800)  
**System Role:** Digital equivalent of Aeonik for clean, Neo-Grotesk aesthetic

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
| **Body Large** | 1.125rem (18px) | 300 (light) | 1.5 | 0 | `type-body-large` | Primary body text |
| **Body Medium** | 0.95rem (15.2px) | 300 (light) | 1.5 | 0 | `type-body-medium` | Secondary text |
| **Body Small** | 0.775rem (12.4px) | 400 (regular) | 1.4 | 0 | `type-body-small` | Captions |
| **Label** | 0.775rem (12.4px) | 400 (regular) | 1.2 | +0.05em | `type-label` | ALL CAPS metadata |

### Specialized Type Styles

| Component | CSS Class | Size | Weight | Letter Spacing | Usage |
|-----------|-----------|------|--------|----------------|-------|
| **Skill Category** | `type-skill-category` | 0.75rem (12px) | 400 | 0.1em | Skill section headers |
| **Skill Item** | `type-skill-item` | 1rem (16px) | 400 | 0 | Individual skill names |
| **Project Title** | `type-project-title` | 0.9375rem (15px) | 500 | 0.1em | Project card titles (uppercase) |
| **Article Category** | `type-article-category` | 0.65rem (10.4px) | 700 | 0.1em | Article category badges |
| **Article Meta** | `type-article-meta` | 0.75rem (12px) | 400 | 0 | Article metadata (read time) |
| **Article Title Compact** | `type-article-title-compact` | 1.25rem (20px) | 300 | 0 | Article titles in compact cards |
| **Article Meta Grid** | `type-article-meta-grid` | 9px | 700 | 0.25em | Article metadata in grid layout |
| **Article Title Grid** | `type-article-title-grid` | 1.25rem (20px) | 700 | -0.025em | Article titles in grid cards |
| **Article Excerpt** | `type-article-excerpt` | 13px | 400 | 0 | Article description previews |
| **Experience Title** | `type-experience-title` | 1.19rem (19px) | 500 | 0 | Job/company names |
| **Experience Meta** | `type-experience-meta` | 0.69rem (11px) | 400 | 0.1em | Experience metadata |
| **Experience Period** | `type-experience-period` | 0.875rem (14px) | 400 | 0.1em | Date ranges |
| **Experience Role** | `type-experience-role` | 0.925rem (15px) | 300 | 0 | Job descriptions |
| **Experience Tag** | `type-experience-tag` | 0.69rem (11px) | 400 | 0.1em | Technology tags |

**Implementation:** All type scale levels are defined as CSS classes in `src/index.css`. Use `type-*` classes instead of inline Tailwind size/weight/spacing utilities to keep typography centralized.

### Typography Rules

#### ✅ DO:
- Use ultra-tight letter-spacing (-0.03em) on display text for editorial precision
- Use `font-light` (300) for hero headlines to create elegant, breathable presence
- Give section titles significant top padding (80-120px) to let them breathe
- Use `on-surface-variant` (#474747) for body text to reduce optical vibration
- Set CTAs/labels in ALL CAPS with `tracking-[0.1em]` and `font-bold`
- Use `tracking-tight` on navigation links for clean, professional look

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
- **Large Margins:** Minimum 80-120px padding between major sections
- **Break the Grid:** Use odd column counts (5 instead of 6) for visual interest
- **Bleed Content:** Let images extend beyond canvas for dynamic feel

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

**Usage:**
```html
<span class="material-symbols-outlined">menu</span>
<span class="material-symbols-outlined">arrow_forward</span>
<span class="material-symbols-outlined">close</span>
```

**Integration:** Icons inherit text color and size from parent. Use with navigation, buttons, and interactive elements for consistent visual language.

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `DEFAULT` | 2px | Default (maintain sharp edges) |
| `sm` | 2px | Small elements |
| `md` | 2px | Medium elements |
| `lg` | 4px | Card images, content blocks |
| `xl` | 8px | Modal dialogs |
| `full` | 9999px | Status badges, tag pills only |

**Note:** Buttons use `rounded-[2px]` (sharp editorial). `full` (9999px) is reserved for non-interactive pills like status badges or category tags — never for CTAs.

---

## Components

### Buttons

The `Button` component (`src/components/ui/Button.tsx`) supports internal routing (React Router), external links, and button actions.

#### Primary Button (Sharp Editorial)
```tsx
<Button to="/about">Get to Know Me</Button>
<Button href="https://example.com">External Link</Button>
<Button onClick={handleClick}>Action Button</Button>

// Renders:
className="bg-primary text-on-primary rounded-[2px] px-10 py-5 
           font-label font-bold text-[0.75rem] uppercase tracking-[0.1em] 
           hover:bg-primary-container transition-colors 
           inline-flex items-center justify-center gap-3"
```

#### Secondary Button (Underline Style)
```tsx
<Button to="/blog" variant="secondary">Read Blog</Button>

// Renders:
className="text-primary font-label font-bold text-[0.75rem] uppercase 
           tracking-[0.1em] border-b border-primary pb-2 
           hover:text-primary/70 transition-all 
           inline-flex items-center gap-3"
```

#### Text Links (Navigation Style)
For inline text links with arrow icons (not using Button component):
```tsx
<Link
  to="/contact"
  className="text-primary font-label type-label hover:text-secondary transition-colors 
             inline-flex items-center gap-3 border-b border-primary pb-1"
>
  Say Hello
  <span className="material-symbols-outlined text-sm" 
        style={{ fontVariationSettings: "'wght' 200" }}>
    arrow_forward
  </span>
</Link>
```

#### Button Rules
- All CTAs use `rounded-[2px]` — never `rounded-full`
- Always uppercase with `tracking-[0.1em]`
- Primary hover transitions to `primary-container` (#3C3B3B)
- Secondary hover transitions to `primary/70` (70% opacity)
- Use `inline-flex items-center gap-3` for icons
- Material Symbols icons inherit size and color from parent

### Cards

#### Project Card
- **Background:** `bg-surface-container-low`
- **Border:** `hairline-border` — subtle 1px outline
- **Border Radius:** None on container, `lg` (4px) on images
- **Image Treatment:** `grayscale` filter, `group-hover:scale-[1.02]` with 1s ease-out transition
- **Title:** `type-project-title`, uppercase, centered

#### Article Card — Grid Variant (default)
- **Container:** `flex flex-col gap-6`
- **Image:** `h-[480px]` fixed height, white background with `border border-[#E2E2E2]/30`
- **Image Effects:** `grayscale opacity-90`, hover to `opacity-100 scale-105` (1s ease-in-out)
- **Metadata:** `type-article-meta-grid` (category + date separated by "/")
- **Title:** `type-article-title-grid`
- **Excerpt:** `type-article-excerpt` with `line-clamp-3`

#### Article Card — Compact Variant
- **Container:** `flex flex-col`
- **Image:** `aspect-[16/10]` with `bg-surface-container-low hairline-border`
- **Image Effects:** `grayscale` only (no hover effects)
- **Metadata:** `type-article-category` + `type-article-meta` (read time) with dot separator
- **Title:** `type-article-title-compact`, hover underline with `underline-offset-8`

### Section Label

A decorative component used to introduce major sections.

```tsx
<span className="font-label type-label text-secondary flex items-center gap-3 mb-6">
  <span className="w-1 h-1 bg-secondary rounded-full" />
  {children}
</span>
```

**Features:**
- Includes a small dot (1px × 1px, `bg-secondary`) before the text
- Uppercase via `type-label` class
- Optional `centered` prop for center alignment

### Experience Row

Timeline-style component for work history displayed in a 12-column grid.

```tsx
<div className="hairline-divide hairline-t">
  <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
    <div className="md:col-span-5"><!-- Company + Location --></div>
    <div className="md:col-span-3"><!-- Role --></div>
    <div className="md:col-span-4"><!-- Technology tags --></div>
  </div>
</div>
```

**Structure:**
- **Container:** `hairline-divide` class adds borders between sibling items, `hairline-t` adds top border
- **Grid Layout:** 12 columns on desktop (5 + 3 + 4 split)
- **Company/Location (col-span-5):** `type-experience-title` for company name
- **Period:** `type-experience-meta` in `text-secondary`
- **Role (col-span-3):** `type-experience-role` in `text-on-surface-variant`
- **Tags (col-span-4):** `type-experience-tag` with `hairline-border rounded-[2px]`, right-aligned on desktop

### Input Fields (Bottom-border style)

```tsx
className="w-full bg-transparent border-0 border-b border-gray-200 
           text-primary font-body text-lg py-3 px-0 
           focus:outline-none focus:ring-0 focus:border-primary 
           transition-colors placeholder:text-gray-300"
```

**Rule:** Inputs use bottom-border only, no boxed inputs. Labels above in `font-label text-[11px] uppercase tracking-[0.2em] text-secondary`.

### Badges & Pills

Status badges and category tags use fully rounded corners (`rounded-full`).

```tsx
<span className="inline-block px-4 py-2 rounded-full bg-surface-container-low text-secondary type-label">
  {text}
</span>
```

**Features:**
- `rounded-full` (9999px) — reserved for non-interactive pills/badges only
- Background: `bg-surface-container-low` or similar surface tokens
- Typography: `type-label` for uppercase styling
- **Never** use on buttons or CTAs

### Education Cards

Card variant used for academic credentials.

```tsx
<div className="p-8 bg-surface-container-lowest rounded-sm shadow-[0px_24px_48px_rgba(0,0,0,0.04)] outline outline-1 outline-outline-variant/15">
  <span className="type-label text-secondary mb-2 block">{date}</span>
  <h3 className="type-headline-small font-headline text-primary mb-1">{degree}</h3>
  <p className="type-body-medium text-on-surface-variant">{institution}</p>
</div>
```

**Features:**
- Uses `outline` instead of `border` for subtle boundary
- Signature glow shadow for depth
- White background (`surface-container-lowest`)

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

**Features:**
- Uses tonal shift on hover (container-low → container-highest)
- Icon changes color on hover
- Material Symbols icon for visual accent

### Image Grids with Overlays

Photo grids with text overlays for labeling.

```tsx
<div className="group relative">
  <div className="aspect-[3/4] overflow-hidden bg-surface-container-low">
    <img
      alt={alt}
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
      src={src}
    />
  </div>
  <span className="absolute bottom-0 left-0 right-0 py-3 px-4 type-label text-white bg-gradient-to-t from-black/60 to-transparent">
    {label}
  </span>
</div>
```

**Features:**
- Grayscale by default, color on hover (700ms transition)
- Subtle scale effect (1.03x) on hover
- Gradient overlay at bottom for label readability
- Fixed aspect ratio (`aspect-[3/4]` or `aspect-[4/5]`)

### Navigation Bar

```html
<header class="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl">
<div class="max-w-screen-2xl mx-auto flex justify-between items-center px-8 py-6 w-full">
<div class="text-xl font-bold tracking-tight text-primary uppercase">Francisco Frez</div>
<nav class="hidden md:flex space-x-8"><!-- links --></nav>
<button class="hidden md:inline-flex ... rounded-[2px] ...">Get in touch</button>
<button class="md:hidden text-primary"><span class="material-symbols-outlined">menu</span></button>
</div>
</header>
```

**Style:** Full-width glassmorphism, no border  
**Container:** `max-w-screen-2xl mx-auto px-8 py-6`  
**Brand:** "Francisco Frez" at `text-xl font-bold tracking-tight text-primary uppercase`  
**Links:** `font-['Manrope'] tracking-tight font-medium uppercase text-[0.75rem]`  
**Menu Items:** Home, About, Projects, Blog, Contact  
**Active Link:** `text-primary border-b border-primary pb-1`  
**Inactive Link:** `text-secondary pb-1 hover:text-primary transition-colors duration-300`  
**CTA Button:** `bg-primary text-on-primary rounded-[2px] px-6 py-3 font-label text-xs uppercase tracking-widest hover:bg-primary-container`  
**Mobile:** Hamburger icon via Material Symbols, opens drawer with `bg-white/95 backdrop-blur-xl border-t border-surface-container-high`

### Footer

```html
<footer class="bg-[#1A1A1A] text-white w-full font-body text-[10px] uppercase tracking-[0.2em]">
<div class="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-2xl mx-auto px-8 md:px-20 py-20 gap-10">
<span class="text-xl font-bold tracking-tighter text-white">Francisco Frez</span>
<div class="flex flex-wrap justify-center gap-10"><!-- social links --></div>
<span class="text-[#555555]">&copy; {year} Francisco Frez.</span>
</div>
</footer>
```

**Style:** Dark section using `#1A1A1A` background — no top border  
**Layout:** Three-column flex layout (brand, links, copyright) with `gap-10`  
**Brand:** "Francisco Frez" at `text-xl font-bold tracking-tighter text-white`  
**Social Links:** Dynamic from `profile.ts` data — `text-[#ACABAB] hover:text-white transition-colors`  
**Copyright:** `text-[#555555]`, uses dynamic year via `new Date().getFullYear()`  
**Typography:** `text-[10px] uppercase tracking-[0.2em]` for base text

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

  --radius-DEFAULT: 2px;
  --radius-sm: 2px;
  --radius-md: 2px;
  --radius-lg: 4px;
  --radius-xl: 8px;
}
```

**Typography Scales & Utilities:**

All type scales (`type-display-large`, `type-headline-medium`, `type-body-large`, etc.) and component-specific styles (`type-project-title`, `type-article-*`, `type-experience-*`) are defined as CSS classes in `src/index.css`. Use these classes instead of inline Tailwind utilities for typography.

**Hairline Borders:**

Functional border utilities are defined as custom classes:
```css
.hairline-border { border: 1px solid var(--color-outline-variant); }
.hairline-b { border-bottom: 1px solid var(--color-outline-variant); }
.hairline-t { border-top: 1px solid var(--color-outline-variant); }
.hairline-divide > * + * { border-top: 1px solid var(--color-outline-variant); }
```

**External Resources:**
```html
<!-- index.html -->
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet"/>
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

**Note:** The Stitch-generated HTML files in `.stitch/designs/` use Tailwind CDN with inline configuration for standalone viewing. The actual React implementation uses Tailwind v4 with the Vite plugin and `@theme` directive as shown above.

---

## Visual Hierarchy Checklist

When building a new page, ensure:

- [ ] **Primary Color:** All headlines and CTAs use `#222222`, never `#000000`
- [ ] **Hero Section:** Display typography (3.5rem+) with -0.03em spacing, `font-light` (300)
- [ ] **Section Spacing:** Minimum 80px between major sections (use `mb-56` for 14rem/224px spacing)
- [ ] **Tonal Layers:** Content uses at least 2 surface levels for depth
- [ ] **Functional Borders:** Use hairline borders for card boundaries and section separators
- [ ] **Asymmetry:** Layout breaks grid intentionally (e.g., 7-5 column split on hero)
- [ ] **Navigation:** `bg-white/70 backdrop-blur-xl`, no bottom border, includes Projects link
- [ ] **Brand:** "Francisco Frez" in `font-bold tracking-tight uppercase`
- [ ] **Body Text:** Uses `on-surface-variant` (#474747) for reduced optical vibration
- [ ] **Labels/CTAs:** ALL CAPS with `tracking-[0.1em]` or `tracking-widest`
- [ ] **Buttons:** `rounded-[2px]` sharp editorial — never `rounded-full`
- [ ] **Cards:** `hairline-border` on images and containers, `grayscale` images with subtle hover effects
- [ ] **Section Labels:** Include decorative dot before text
- [ ] **Footer:** `#1A1A1A` dark background, links to LinkedIn/Github/Medium
- [ ] **Icons:** Material Symbols Outlined
- [ ] **Type Classes:** Use specialized `type-*` classes for components (project-title, article-*, experience-*, etc.)

---

## Reference Files

All Stitch-generated designs are preserved in `.stitch/designs/` with organized subdirectories:

```
.stitch/designs/
├── README.md                           # Screen inventory with IDs and dimensions
├── home/
│   ├── home.html                       # Extended portfolio (2560 × 11090px)
│   └── home.png
├── about/
│   ├── about.html                      # Data engineer profile (2560 × 6170px)
│   └── about.png
├── blog/
│   ├── blog.html                       # Blog listing (2560 × 6696px)
│   └── blog.png
├── article/
│   ├── article-detail.html             # Long-form article (2560 × 7740px)
│   └── article-detail.png
├── contact/
│   ├── contact.html                    # Contact form (2560 × 2390px)
│   └── contact.png
└── analytics/
    ├── analytics-dashboard.html        # Portfolio insights (2560 × 2410px)
    └── analytics-dashboard.png
```

**Usage:** Open any `.html` file in a browser to see the high-fidelity design reference.

**Important:** The Stitch-generated HTML files contain inconsistent configurations across views (varying border-radius, primary colors, button styles). This DESIGN.md is the source of truth — use it to normalize implementation, not individual HTML files.

**See:** `.stitch/designs/README.md` for screen IDs and detailed dimensions

---

## Design System Metadata

- **Stitch Project ID:** `708860268408098446`
- **Design System Name:** Nova Editorial
- **Brand Name:** Francisco Frez
- **Asset ID:** `assets/24dee11a2f3c400a8d18db65c5bf8834`
- **Canvas Width:** 2560px (desktop-first design)
- **Max Content Width:** `max-w-screen-2xl` (1536px)
- **Color Mode:** Light (Dark mode variant not yet implemented)
- **Color Variant:** Monochrome (`#222222` primary)
- **Spacing Scale:** 3 (8px base × 3 = 24px rhythm)
- **Icon System:** Material Symbols Outlined

---

## Credits

**Design System:** Google Labs Stitch (AI-powered UI design generation)  
**Framework:** React + Vite + TypeScript  
**Styling:** Tailwind CSS with custom design tokens  
**Typography:** Manrope (Google Fonts)  
**Icons:** Material Symbols Outlined (Google Fonts)  
**Design Philosophy:** High-end editorial, sharp aesthetic with functional minimalism
