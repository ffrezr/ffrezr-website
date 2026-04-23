# franciscofrez.com

Personal portfolio and blog for Francisco Frez — Data Engineer based in Chile.

Built with React, TypeScript, and Vite. Styled with Tailwind CSS v4 using the **Nova Editorial** design system: a monochrome palette with violet accents, editorial typography (Manrope), and magazine-inspired layouts.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build:** Vite 6
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v4 (Vite plugin)
- **Content:** Markdown files with YAML frontmatter
- **Icons:** Material Symbols Outlined + inline SVGs

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
```

### Other commands

```bash
npm run build      # Type-check + production build
npm run preview    # Preview production build
```

## Project Structure

```
src/
  components/
    layout/        # Layout, Navbar, Footer
    ui/            # ArticleCard, BrandLogo, Button, ExperienceRow,
                   # MarkdownRenderer, ProjectCard, SectionLabel, Tag
  content/
    articles/      # Blog posts (.md with frontmatter)
    projects/      # Project pages (.md with frontmatter)
  data/
    profile.ts     # Personal info, skills, experience, education
  lib/
    content.ts     # Markdown loading and parsing
  pages/           # Route components (Home, About, Projects, Blog, Contact)
  types/           # TypeScript interfaces
public/
  img/             # Static images
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, experience timeline, featured projects, recent articles |
| `/about` | About — bio, education, certifications, hobbies |
| `/projects` | Projects — grouped by type (ventures, projects, side projects) |
| `/projects/:slug` | Project detail — rendered from markdown |
| `/blog` | Blog — filterable article grid |
| `/blog/:slug` | Article — full markdown article with drop cap |
| `/contact` | Contact form |

## Adding Content

### New project

Create `src/content/projects/<slug>.md`:

```yaml
---
slug: my-project
title: My Project
role: Creator
period: 2024 — Present
location: Chile
description: A short description for the card.
image: /img/projects/my-project/cover.png
tags:
  - Python
  - GCP
type: venture        # venture | project | product | side-project
featured: true       # shows on homepage
---

Markdown body goes here.
```

### New article

Create `src/content/articles/<slug>.md`:

```yaml
---
slug: my-article
title: My Article Title
excerpt: A short summary for the card.
category: Data Engineering
date: Apr 20, 2026
readTime: 6 min read
image: /img/articles/my-article/cover.png
featured: true
---

Markdown body goes here.
```

Images go in `public/img/` and are referenced as `/img/...` paths.

## Design System

The **Nova Editorial** design system is documented in [`DESIGN.md`](DESIGN.md). Key characteristics:

- Monochrome palette (`#222222` primary, `#F9F9F9` surface) with `#7029D9` violet accent
- Manrope typeface with editorial-weight hierarchy (light headlines, bold labels)
- Sharp corners (2px radius), hairline borders, glassmorphism navbar
- Magazine-style asymmetric layouts with generous whitespace

## License

Private repository.
