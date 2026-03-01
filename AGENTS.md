# AGENTS.md

Guidelines for agentic coding agents working in this repository.

---

## Stack

- **Framework:** Astro 5 with `output: "hybrid"` (static + SSR)
- **Styling:** Tailwind CSS v4 (CSS-native config in `src/styles/global.css`) + `@tailwindcss/typography`
- **Language:** TypeScript (strict mode via `astro/tsconfigs/strict`)
- **Deployment:** Vercel (`@astrojs/vercel/serverless`)
- **Runtime:** Bun (see below)
- **Content:** Astro Content Collections with Zod schemas (`src/content/config.ts`)
- **Icons:** `unplugin-icons` with Iconify JSON packs
- **MDX:** `@astrojs/mdx` with remark-gfm, rehype-external-links, rehype-figure

---

## Build / Dev Commands

Always use **Bun** — not Node, npm, pnpm, or vite directly.

```sh
# Install dependencies
bun install

# Start dev server (with portfolio password set)
bun run dev
# or
PORTFOLIO_PASSWORD="password" astro dev

# Production build
bun run build

# Preview production build
bun run preview

# Run Astro CLI directly
bun run astro <command>
```

### Tests

There is currently no test suite. If tests are added, use:

```sh
bun test                        # Run all tests
bun test path/to/file.test.ts   # Run a single test file
bun test --watch                # Watch mode
```

Tests should use `bun:test` (not Jest or Vitest):

```ts
import { test, expect } from "bun:test";
```

### Linting / Formatting

Prettier is installed (`prettier ^3.3.2`) but `.prettierrc` is currently empty. No ESLint or Biome is configured. Format files with:

```sh
bunx prettier --write "src/**/*.{ts,tsx,astro,css,md,mdx}"
```

---

## Environment Variables

Bun auto-loads `.env` — do not use `dotenv`. The only known runtime variable is:

- `PORTFOLIO_PASSWORD` — gates the private portfolio/case study pages (`src/pages/portfolio/[...privateSlug].astro`)

---

## TypeScript

- Extends `astro/tsconfigs/strict` — all strict checks are enabled including `strictNullChecks`
- **`@types/bun`** is available for Bun-specific APIs

### Path Aliases

Use these instead of long relative imports:

```ts
@layouts/*    →  src/layouts/*
@components/* →  src/components/*
@styles/*     →  src/styles/*
@utils        →  src/utils.ts
@consts       →  src/consts.ts
```

### Type Conventions

- Prefer `type` for simple shapes and unions; `interface` is acceptable for component props
- Astro component props are declared as `export type Props = { ... }` or `export interface Props { ... }` — either is acceptable
- Use Astro's `CollectionEntry<"collectionName">["data"]` to type props derived from content collections
- Use intersection types for extending collection data: `CollectionEntry<"caseStudy">["data"] & { headings: MarkdownHeading[] }`
- Use `as const` satisfies / `as [string, ...string[]]` when Zod enum inference needs help

---

## Component Conventions (Astro)

- All components are `.astro` — no React, Svelte, or Vue components currently exist
- File names: **PascalCase** (e.g., `BaseHead.astro`, `CaseStudy.astro`)
- Props are always destructured from `Astro.props`
- Use named slots (`<slot name="..." />`) for flexible composition; pass content with `<Fragment slot="...">`
- Use the `class:list` directive for conditional classes (not template literals)
- Use a dynamic tag variable for polymorphic elements: `const Tag = href ? "a" : "button";`
- Add `data-astro-prefetch="hover"` on internal navigation links

### Pages

- Dynamic routes use bracket notation: `[...slug].astro`, `[...privateSlug].astro`
- Export `export const prerender = false` on SSR-only pages
- Use `Astro.redirect("/404")` for not-found handling
- Use `getStaticPaths()` returning `{ params, props }` for static generation

---

## Styling

- **Tailwind v4** — configured entirely in `src/styles/global.css` via `@theme {}`. There is no `tailwind.config.js`.
- Use scoped `<style lang="postcss">` blocks in Astro components
- Use `@apply` for multi-property utility composition; PostCSS nesting is supported
- Use `is:global` only when cross-component targeting is genuinely needed
- Dark mode via `dark:` Tailwind prefix (CSS media query, not class-based)
- Custom design tokens (colors, fonts, animations) are CSS variables defined in the `@theme` block — reference them in Tailwind utilities and CSS alike

### Custom Design Tokens (key tokens)

```
--font-family-sans     DM Sans Variable
--font-family-mono     Fira Code Variable
--color-text / --color-text-dark / --color-text-subtle / --color-text-muted
--color-border-light / --color-border-dark / --color-border-subtle-*
--color-blue / --color-red / --color-green / --color-yellow / --color-purple
```

---

## Content Collections

Schemas are in `src/content/config.ts`. Three collections exist:

| Collection  | Location                 | Format       |
| ----------- | ------------------------ | ------------ |
| `blog`      | `src/content/blog/`      | `.md`        |
| `caseStudy` | `src/content/caseStudy/` | `.md`/`.mdx` |
| `projects`  | `src/content/projects/`  | `.md`        |

- Use `.transform()` on date fields to coerce strings to `Date` objects
- Use Astro's `image()` helper for image schema fields (enables optimized processing)
- Content files: **kebab-case** filenames

---

## Icons

Import icons as virtual modules — they resolve to Astro component types:

```ts
import SomeIcon from "~icons/carbon/some-icon";
import AnotherIcon from "~icons/mdi/another-icon";
```

Available packs: `carbon`, `el`, `game-icons`, `mdi`, `mingcute`, `solar`.

---

## Error Handling

- In `catch` blocks, check `instanceof Error` before accessing `.message`
- Use `Astro.redirect()` for navigation-level errors (not-found, unauthorized)
- For protected content, validate `PORTFOLIO_PASSWORD` server-side in SSR pages

---

## Bun APIs

Prefer Bun-native APIs over Node equivalents:

| Task        | Use                     | Avoid                   |
| ----------- | ----------------------- | ----------------------- |
| File I/O    | `Bun.file()`            | `fs.readFile/writeFile` |
| HTTP server | `Bun.serve()`           | `express`               |
| SQLite      | `bun:sqlite`            | `better-sqlite3`        |
| Redis       | `Bun.redis`             | `ioredis`               |
| Postgres    | `Bun.sql`               | `pg`, `postgres.js`     |
| Shell       | `Bun.$\`cmd\``          | `execa`                 |
| WebSocket   | `WebSocket` (built-in)  | `ws`                    |
| Env vars    | auto-loaded from `.env` | `dotenv`                |

---

## Cursor Rules

The rule in `.cursor/rules/use-bun-instead-of-node-vite-npm-pnpm.mdc` mirrors the Bun guidance above. It applies to all `*.ts`, `*.tsx`, `*.html`, `*.css`, `*.js`, `*.jsx`, and `package.json` files.

---

## Misc Notes

- `svelte.config.js` exists but `@astrojs/svelte` is not installed — treat it as vestigial, do not add Svelte components
- `react` is listed as a devDependency but no React components exist — if adding React islands, use `@astrojs/react` integration
- `pnpm-lock.yaml` is committed but the project prefers Bun; use `bun install` and do not update the pnpm lockfile
- `Introduction.mdx` lives in `src/components/` (not `src/content/`) — it is imported directly as a component in `index.astro`
- The `.tool-versions` file specifies `nodejs 18.18.2` for tooling compatibility but runtime preference is Bun
