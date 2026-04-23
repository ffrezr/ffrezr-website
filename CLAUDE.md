# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server (http://localhost:5173)
npm run build      # Type-check (tsc -b) then build for production
npm run preview    # Preview production build locally
```

No test runner or linter is configured. Playwright is a dev dependency but has no test suites.

## Architecture

React 19 + TypeScript + Vite SPA. Routing via React Router v7. Styling via Tailwind CSS v4 (Vite plugin, not PostCSS).

### Routing

All routes defined in `src/App.tsx` inside a `<Layout>` wrapper (navbar + footer + scroll-to-top):
- `/` → HomePage
- `/about` → AboutPage
- `/projects` → ProjectsPage, `/projects/:slug` → ProjectDetailPage
- `/blog` → BlogPage, `/blog/:slug` → ArticlePage
- `/contact` → ContactPage

### Content system

Projects and articles are **Markdown files with YAML frontmatter** in `src/content/projects/` and `src/content/articles/`. They are loaded at build time via Vite's `import.meta.glob('.../*.md', { eager: true, query: '?raw' })`.

`src/lib/content.ts` exposes: `getAllProjects()`, `getFeaturedProjects()`, `getProjectBySlug(slug)`, `getAllArticles()`, `getArticleBySlug(slug)`, `getArticleCategories()`.

To add a new project or article, create a `.md` file in the corresponding `src/content/` subdirectory. The slug in the frontmatter must match what's used in URLs.

**Project frontmatter** (`src/types/index.ts → Project`):
- Required: `slug`, `title`, `role`, `period`, `location`, `description`
- Optional: `image`, `tags[]`, `type` (`venture` | `project` | `product` | `side-project`), `featured`

**Article frontmatter** (`src/types/index.ts → Article`):
- Required: `slug`, `title`, `excerpt`, `category`, `date`, `readTime`, `image`
- Optional: `featured`

### Data layer

- **Profile data** (name, skills, experience, education, certifications, awards, social links, image paths) is hard-coded in `src/data/profile.ts`.
- **Content** (projects, articles) comes from markdown files via `src/lib/content.ts`.
- Components receive data via props — no global state or context.

### Path alias

`@/*` maps to `./src/*` (configured in `tsconfig.app.json`). Not currently used — all imports use relative paths.

## Design system — "Nova Editorial"

Full spec in `DESIGN.md`. Key points for implementation:

- **Monochrome palette** with Material Design 3 tonal tokens defined in `src/index.css` under `@theme`.
- **Font**: Manrope (Google Fonts), applied via `--font-headline`, `--font-body`, `--font-label` CSS variables.
- **Border radius**: 2px default, 4px lg, 8px xl. Rounded-full only for badges.
- **Borders are functional, not decorative**: use `hairline-*` utility classes from `src/index.css`.
- **Images**: grayscale by default, color on hover. Project card images use glow shadow.
- **Buttons**: primary = dark bg, ALL CAPS, sharp corners. secondary = underline style.

## Component conventions

- `src/components/ui/` — reusable components (ArticleCard, BrandLogo, Button, ExperienceRow, MarkdownRenderer, ProjectCard, SectionLabel, Tag).
- `src/components/layout/` — Layout, Navbar, Footer.
- `src/pages/` — one file per route.
- `MarkdownRenderer` uses react-markdown with remark-gfm + rehype-raw, with custom-styled component overrides for headings, links, blockquotes, images, etc.

## Static assets

Images live in `public/img/` and are referenced as `/img/...` paths in code and markdown content.
