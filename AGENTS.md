# AGENTS.md

This file provides guidance to Codex when working with code in this repository.

## Site intent

This is Francisco Frez's personal website. Treat it like a personal publishing space, not a lead-gen site, consulting portfolio, or hiring funnel.

- The tone should feel human, first-person, curious, and specific.
- Avoid LinkedIn language, resume-speak, SEO framing, or "conversion" advice unless the user explicitly asks for it.
- Default to sharing learnings, experiments, and personality over polished self-promotion.

## Approval guardrails

- Do not change copy, titles, descriptions, labels, or other written content without explicit user approval.
- Style-only changes are safe to implement directly when they do not change wording or meaning.
- If a task mixes design and copy, separate them clearly and confirm the copy portion before editing text.
- More formal copy is not automatically wrong. Some sections can be more sober or businesslike if that matches the user's intent.

## Commands

```bash
npm run dev        # Start Vite dev server (http://localhost:5173)
npm run build      # Type-check (tsc -b) then build for production
npm run preview    # Preview production build locally
```

No test runner or linter is configured. Playwright is installed as a dev dependency, but there are currently no test suites.

For code changes, `npm run build` is the main verification step.

## Architecture

React 19 + TypeScript + Vite SPA. Routing via React Router v7. Styling via Tailwind CSS v4 using the Vite plugin, not PostCSS.

### Routing

All routes are defined in `src/App.tsx` inside a `<Layout>` wrapper that provides the navbar, footer, and scroll-to-top behavior.

- `/` -> `HomePage`
- `/about` -> `AboutPage`
- `/projects` -> `ProjectsPage`
- `/projects/:slug` -> `ProjectDetailPage`
- `/blog` -> `BlogPage`
- `/blog/:slug` -> `ArticlePage`
- `/contact` -> `ContactPage`

### Content system

Projects and articles live as Markdown files with YAML frontmatter in:

- `src/content/projects/`
- `src/content/articles/`

They are loaded at build time through eager `import.meta.glob(..., { query: '?raw' })` calls in `src/lib/content.ts`.

`src/lib/content.ts` exposes:

- `getAllProjects()`
- `getFeaturedProjects()`
- `getProjectBySlug(slug)`
- `getAllArticles()`
- `getArticleBySlug(slug)`
- `getArticleCategories()`

Projects are sorted by the end of their `period` field. Articles are sorted descending by `date`.

### Frontmatter schema

Project frontmatter matches `src/types/index.ts -> Project`:

- Required: `slug`, `title`, `role`, `period`, `location`, `description`
- Optional: `image`, `tags[]`, `type` (`venture` | `project` | `product` | `side-project`), `featured`

Article frontmatter matches `src/types/index.ts -> Article`:

- Required: `slug`, `title`, `excerpt`, `category`, `date`, `readTime`, `image`
- Optional: `featured`

When adding a new project or article, create a `.md` file in the corresponding content directory and keep the frontmatter `slug` aligned with the URL slug.

### Data layer

- Profile data is hard-coded in `src/data/profile.ts`.
- That file includes personal copy, skills, experience, education, certifications, awards, social links, and image paths.
- Content comes from Markdown via `src/lib/content.ts`.
- Components receive data via props. There is no global state or context layer.

### Path alias

`@/*` maps to `./src/*` in `tsconfig.app.json`, but the codebase currently uses relative imports almost everywhere.

## Design system

Read `DESIGN.md` before making visual changes. It is the source of truth for Nova Editorial.

### Current visual direction

- Nova Editorial uses asymmetry, large negative space, and tonal depth instead of decorative chrome.
- The palette is not monochrome-only anymore. The site uses a violet accent thread centered on `accent-violet` (`#7029D9`).
- `#222222` is the darkest brand color. Do not introduce pure `#000000`.
- Structure should come from surface layers and spacing first, borders second.
- Borders are functional only. Prefer `hairline-*` utilities when a boundary is actually needed.

### Typography

- Manrope is the site font family.
- Typography is centralized in `src/index.css` through semantic `type-*` classes.
- Prefer those `type-*` classes over ad hoc Tailwind font-size, weight, line-height, or tracking utilities.
- If a new text style is genuinely needed, add it to `DESIGN.md` first, then implement it in `src/index.css`.

### Established patterns

- Use the hero index pattern for major section intros: `hero-index-row`, `hero-index-marker`, `hero-index-text`, plus a `hero-name-accent` word in the heading.
- Prefer the current hero index pattern over the older `SectionLabel` dot pattern.
- Use `BrandLogo` for brand marks instead of replacing it with plain text.
- Use `Tag` for pill-style metadata rather than inventing one-off tag styling.
- Use the button pattern components in `src/components/ui/Button.tsx`:
  - `PrimaryCTAButton`
  - `TerminalCommandButton`
  - `InlineTerminalButton`
  - `ExternalTerminalButton`
- Buttons should keep the editorial styling: all caps, sharp corners, no `rounded-full`.
- Use `hero-image-frame` for editorial image framing.
- Images should remain full color. Do not add grayscale treatments.

### Spacing and composition

- Sections should have generous breathing room. Treat roughly 80px+ between major sections as the baseline.
- Avoid default "centered SaaS hero" layouts unless the user explicitly wants a departure from the current visual language.
- Tonal planes and composition should do more work than borders or shadows.

## Components and conventions

- `src/components/ui/` contains reusable primitives such as `ArticleCard`, `BrandLogo`, `Button`, `ExperienceRow`, `MarkdownRenderer`, `ProjectCard`, `SectionLabel`, and `Tag`.
- `src/components/layout/` contains `Layout`, `Navbar`, and `Footer`.
- `src/pages/` contains one file per route view.
- `MarkdownRenderer` uses `react-markdown` with `remark-gfm` and `rehype-raw`, plus custom component overrides for headings, links, blockquotes, images, and other Markdown elements.

## Static assets

Images live in `public/img/` and are referenced as `/img/...` paths in code and Markdown content.

## Voice notes for copy work

If the user explicitly asks for copy help, keep these details in mind:

- Francisco should sound like a person sharing something over coffee, not a personal brand deck.
- Concrete details beat generic claims.
- Self-aware humor is welcome when it feels natural.
- "Close the Mac" is more in-character than "close the laptop."
- Running is framed more as stubbornness and a personal goal than as a grand passion story.
- He plays guitar at church. Do not rewrite that into "performing on stage" or "being in a band."
- Never mention Astro Cold Brew.

## Anti-patterns

- Do not turn the blog into thought leadership content marketing.
- Do not add hiring or sales CTAs unless explicitly requested.
- Do not add decorative borders, random display fonts, or rounded pill buttons.
- Do not introduce grayscale image treatments.
- Do not replace existing semantic typography classes with arbitrary inline Tailwind text utilities.
