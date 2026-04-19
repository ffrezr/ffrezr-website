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

#### ❌ DON'T:
- Never use borders to section content or separate cards — use tonal shifts and spacing
- Never use pure `#000000` anywhere — `#222222` is the darkest value in the system
- Avoid heavy drop shadows (use signature glow instead)

### Border Philosophy: Functional-Line

Borders exist only where they serve a usability function, never as decoration.

| Context | Border | Reason |
|---------|--------|--------|
| Content sections | ❌ None | Tonal shifts + spacing |
| Project/article cards | ❌ None | Signature glow + white background |
| Navigation header | ❌ None | Glassmorphism defines the boundary |
| Footer separation | ❌ None | `tertiary` (#3A3C3C) background shift |
| Input fields | ✅ `border-b` | Affordance: user needs to see where to type |
| Filter bars / tabs | ✅ `border-t` + `border-b` | Contains functional controls |
| Blockquotes | ✅ Left accent line | Strong editorial convention |

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

| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| **Display Large** | 3.5rem (56px) | 300 (light) | 1.1 | -0.03em | Hero statements |
| **Display Medium** | 2.75rem (44px) | 300 (light) | 1.15 | -0.03em | Page titles |
| **Display Small** | 2.25rem (36px) | 300 (light) | 1.2 | -0.02em | Feature headers |
| **Headline Large** | 2rem (32px) | 600 (semibold) | 1.25 | -0.01em | Section titles |
| **Headline Medium** | 1.5rem (24px) | 600 (semibold) | 1.3 | 0 | Subsection titles |
| **Headline Small** | 1.25rem (20px) | 700 (bold) | 1.4 | 0 | Card headers |
| **Body Large** | 1rem (16px) | 400 | 1.5 | 0 | Primary body text |
| **Body Medium** | 0.875rem (14px) | 400 | 1.5 | 0 | Secondary text |
| **Body Small** | 0.75rem (12px) | 400 | 1.4 | 0 | Captions |
| **Label** | 0.75rem (12px) | 500 | 1.2 | +0.05em | ALL CAPS metadata |

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

#### Primary Button (Sharp Editorial)
```tsx
className="bg-primary text-on-primary rounded-[2px] px-10 py-5 
           font-label font-bold text-xs uppercase tracking-[0.1em] 
           hover:bg-primary-container transition-colors"
```

#### Secondary Button (Underline Style)
```tsx
className="text-primary font-label font-bold text-xs uppercase 
           tracking-[0.1em] border-b border-primary/20 pb-2 
           hover:border-primary transition-all"
```

#### Button Rules
- All CTAs use `rounded-[2px]` — never `rounded-full`
- Always uppercase with `tracking-[0.1em]`
- Hover transitions to `primary-container` (#3C3B3B)

### Cards

#### Project Card
- **Background:** `surface-container-lowest` (#FFFFFF)
- **Border:** None — no borders, no outlines
- **Border Radius:** `lg` (4px) for images
- **Shadow:** Signature Glow (0px 24px 48px rgba(0,0,0,0.04))
- **Image Treatment:** `grayscale` default, full color on hover

#### Article Card
- **Background:** White with subtle `border border-[#E2E2E2]/30` (exception for image containers)
- **Image Height:** Fixed `h-[480px]` for grid consistency
- **Hover:** `scale-105` on image with 1s ease-in-out transition

### Input Fields (Bottom-border style)

```tsx
className="w-full bg-transparent border-0 border-b border-gray-200 
           text-primary font-body text-lg py-3 px-0 
           focus:outline-none focus:ring-0 focus:border-primary 
           transition-colors placeholder:text-gray-300"
```

**Rule:** Inputs use bottom-border only, no boxed inputs. Labels above in `font-label text-[11px] uppercase tracking-[0.2em] text-secondary`.

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
**Menu Items:** Home, About, Blog, Contact  
**Active Link:** `text-primary border-b border-primary pb-1`  
**Inactive Link:** `text-secondary pb-1 hover:text-primary transition-colors duration-300`  
**CTA Button:** `bg-primary text-on-primary rounded-[2px] px-6 py-3 font-label text-xs uppercase tracking-widest hover:bg-primary-container`  
**Mobile:** Hamburger icon via Material Symbols

### Footer

```html
<footer class="bg-[#1A1A1A] text-white w-full font-body text-[10px] uppercase tracking-[0.2em]">
<div class="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-2xl mx-auto px-8 md:px-20 py-20 gap-10">
<span class="text-xl font-bold tracking-tighter text-white">Francisco Frez</span>
<div class="flex flex-wrap justify-center gap-10"><!-- links --></div>
<span class="text-[#555555]">&copy; 2024 Francisco Frez. All rights reserved.</span>
</div>
</footer>
```

**Style:** Dark section using `#1A1A1A` background — no top border  
**Brand:** "Francisco Frez" at `text-xl font-bold tracking-tighter text-white`  
**Links:** LinkedIn, Github, Medium — `text-[#ACABAB] hover:text-white transition-colors`  
**Copyright:** `text-[#555555]`, uppercase with wide tracking

---

## Implementation Guidelines

### Tailwind Configuration

The design system is implemented using Tailwind CDN with inline configuration (see `.stitch/designs/home/home.html` for reference):

```html
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
```

```js
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'primary': '#222222',
        'primary-container': '#3c3b3b',
        'surface': '#f9f9f9',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f3f3f4',
        'surface-container': '#eeeeee',
        'surface-container-high': '#e8e8e8',
        'surface-container-highest': '#e2e2e2',
        'on-surface': '#222222',
        'on-surface-variant': '#474747',
        'on-primary': '#e5e2e1',
        'on-secondary': '#ffffff',
        'secondary': '#5e5e5e',
        'secondary-fixed-dim': '#acabab',
        'tertiary': '#3a3c3c',
        'outline': '#777777',
        'outline-variant': '#c6c6c6',
      },
      borderRadius: {
        'DEFAULT': '2px',
        'sm': '2px',
        'md': '2px',
        'lg': '4px',
        'xl': '8px',
        'full': '9999px'
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem'
      },
      fontFamily: {
        'headline': ['Manrope', 'sans-serif'],
        'body': ['Manrope', 'sans-serif'],
        'label': ['Manrope', 'sans-serif']
      }
    }
  }
}
```

### Base Styles

```css
body {
  font-family: 'Manrope', sans-serif;
  background-color: theme('colors.surface');
  color: theme('colors.on-surface');
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## Visual Hierarchy Checklist

When building a new page, ensure:

- [ ] **Primary Color:** All headlines and CTAs use `#222222`, never `#000000`
- [ ] **Hero Section:** Display typography (4rem+) with -0.03em spacing, `font-light` (300)
- [ ] **Section Spacing:** Minimum 80px between major sections
- [ ] **Tonal Layers:** Content uses at least 2 surface levels for depth
- [ ] **No Decorative Lines:** Borders only on inputs, filter bars, and blockquotes
- [ ] **Asymmetry:** Layout breaks grid intentionally (e.g., 7-5 column split on hero)
- [ ] **Navigation:** `bg-white/70 backdrop-blur-xl`, no bottom border
- [ ] **Brand:** "Francisco Frez" in `font-bold tracking-tight uppercase`
- [ ] **Body Text:** Uses `on-surface-variant` (#474747) for reduced optical vibration
- [ ] **Labels/CTAs:** ALL CAPS with `tracking-[0.1em]` or `tracking-widest`
- [ ] **Buttons:** `rounded-[2px]` sharp editorial — never `rounded-full`
- [ ] **Cards:** No borders, signature glow shadow, `grayscale` images
- [ ] **Footer:** `#1A1A1A` dark background, links to LinkedIn/Github/Medium
- [ ] **Icons:** Material Symbols Outlined

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
