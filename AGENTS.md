# Repository Guidelines

## Project Structure & Module Organization
- `app/` — Next.js App Router pages, layouts, and route handlers. Keep route folders lowercase (e.g., `app/blog/page.tsx`).
- `components/` — Reusable UI and sections. Use PascalCase for component files (e.g., `components/upright-navigation.tsx`, `components/ui/Button.tsx`).
- `lib/` — Utilities and helpers (e.g., `lib/utils.ts`). Export functions in camelCase.
- `public/` — Static assets (images, icons). Refer via `/path` URLs.
- Config: `next.config.ts`, `tsconfig.json` (path alias `@/*`), `eslint.config.mjs`, `postcss.config.mjs`.
- Global styles: `app/globals.css`.

## Build, Test, and Development Commands
- `npm run dev` — Start local dev server at `http://localhost:3000`.
- `npm run build` — Production build (Next.js).
- `npm start` — Run the built app.
- `npm run lint` — ESLint with Next.js Core Web Vitals + TypeScript rules.

## Coding Style & Naming Conventions
- Language: TypeScript (`strict: true`). Prefer functional components and server components where appropriate.
- Indentation: 2 spaces; limit lines to sensible length; keep imports sorted logically.
- Files: PascalCase for React components, kebab- or lowercase for route folders, camelCase for utilities; Types/Interfaces in PascalCase.
- Linting: Keep code passing `npm run lint`. Align with `eslint.config.mjs` (Next + TS presets).
- Styling: Tailwind CSS. Prefer utility classes and co-locate UI variants using `class-variance-authority` where applicable.

## Testing Guidelines
- No test suite is configured yet. If adding tests, prefer:
  - Unit: Vitest + React Testing Library (`*.test.tsx`).
  - E2E: Playwright in `e2e/`.
- Keep tests colocated or under `tests/`, mirroring `app/` and `components/` paths.

## Commit & Pull Request Guidelines
- Commits: Use clear, scoped messages. Conventional Commits encouraged (e.g., `feat(nav): add sticky header`).
- PRs: Include purpose, screenshots/GIFs for UI, linked issues, and a brief testing plan. Keep changes focused and small.

## Security & Configuration Tips
- Secrets in `.env.local` (never commit). Only expose client-safe vars prefixed with `NEXT_PUBLIC_`.
- Avoid placing secrets in code or under `public/`.

## Agent-Specific Instructions
- Honor this structure and naming. Do not introduce new build tools without discussion.
- Prefer minimal, targeted diffs. Update docs when changing public APIs or routes.
- When adding paths, use the `@/*` alias where appropriate.
