# Repository Guidelines

## Project Context

This repository is the official Upright corporate website. It uses Next.js App Router, strict TypeScript, Tailwind CSS, GSAP, and a single public-site Lenis integration.

- `app/` contains routes, layouts, and route handlers.
- `components/` contains reusable UI and page sections.
- `lib/` contains utilities and server helpers.
- `public/` contains static assets.
- Use the `@/*` path alias for project imports where appropriate.

## Package Manager

Bun is the canonical and exclusive package manager for this repository. The current repository version is declared in `package.json`, and `bun.lock` is the only dependency lockfile.

Use:

```bash
bun install
bun add <package>
bun add -d <package>
bun remove <package>
bun update
bun run dev
bun run build
bun run lint
bun run <script>
bunx <command>
```

The AI implementer must:

- use `bun install` for installation;
- use `bun add` or `bun add -d` for dependencies;
- use `bun remove` when removing dependencies;
- use `bun update` for dependency updates;
- use `bun run` for package scripts;
- use `bunx` for package executables;
- preserve `bun.lock` and keep dependency changes minimal;
- inspect existing dependencies before adding anything.

The AI implementer must not:

- run `npm`, `npx`, `pnpm`, `pnpx`, or `yarn` unless the owner explicitly requests it;
- create or regenerate `package-lock.json`, `pnpm-lock.yaml`, or `yarn.lock`;
- switch package managers or recommend another migration unless explicitly asked;
- add dependencies without a clear reason.

Translate third-party package-manager examples to Bun. For example, `npm install gsap` becomes `bun add gsap`, and `npx shadcn@latest add dialog` becomes `bunx shadcn@latest add dialog`. Do not translate Bun commands back to another package manager.

## Development Commands

```bash
bun run dev
bun run build
bun run start
bun run lint
```

Scripts in `package.json` should remain package-manager-neutral when possible. Do not shell out to another package manager from a script.

## Owner Authority

The owner is the final decision maker. Routine implementation decisions may be made independently, but do not silently choose:

- major architecture or framework changes;
- large dependencies;
- brand or major UX changes;
- page or section removal;
- WebGL or CMS adoption;
- backend or authentication replacements.

Ask before making decisions in those categories.

## Read Before Writing

Before modifying code:

1. Inspect the relevant existing files.
2. Understand current behavior and shared dependencies.
3. Preserve working functionality.
4. Make the smallest coherent change.

Do not replace an implementation before understanding it.

## Scope and Maintainability

- Modify only files relevant to the requested task.
- Do not perform opportunistic repository-wide cleanup or redesign unrelated UI.
- Do not change business content unless requested.
- Report unrelated problems unless they directly block the task.
- Prefer explicit, short, maintainable code over clever abstractions.
- Avoid unnecessary providers, hooks, configuration systems, helpers, duplicated logic, and speculative architecture.
- Keep public API changes and documentation aligned.

The repository may contain owner changes. Preserve unrelated uncommitted work, and never run destructive Git commands unless explicitly requested.

## Dependencies

Before adding a package:

1. Check for an existing suitable dependency.
2. Consider native browser or platform capabilities.
3. Consider a small local implementation.
4. Confirm that the dependency has a clear maintenance benefit.

Major dependencies require owner approval. Never install competing libraries for the same responsibility without a strong reason.

## Next.js and TypeScript

- Use Server Components by default.
- Add `"use client"` only where browser interaction requires it.
- Keep client boundaries small; do not convert an entire route for one interactive child.
- Use native Next.js capabilities where appropriate.
- Maintain strict TypeScript and avoid unnecessary `any`.
- Prefer inferred local types; avoid complex generics for simple behavior.
- Use PascalCase for component files, lowercase route directories, and camelCase utilities.

## Styling and Motion

- Tailwind CSS is the primary styling system; do not add another styling framework.
- Reuse established design tokens and patterns without prematurely tokenizing every value.
- Use CSS for simple interaction.
- Use installed GSAP and `@gsap/react` for advanced choreography.
- Use the existing Lenis integration for public-site smooth scrolling.
- Do not introduce new Framer Motion usage by default or load GSAP from a CDN.
- Animation setup must clean itself up without destroying unrelated animations.

## Lenis

- There is one public-site Lenis owner.
- Do not create additional Lenis instances or add another smooth-scroll library.
- `/admin` and `/admin/*` use native scrolling.
- Components needing programmatic scrolling or scroll locking must use the existing project integration.
- Independent nested scrolling must follow the existing Lenis prevention conventions.

## Performance and Accessibility

Treat both as implementation requirements.

- Avoid unnecessary hydration, duplicated media downloads, oversized assets, per-frame React state, and layout-property animation when transforms suffice.
- Preserve keyboard operation, focus states, semantic HTML, reduced motion, touch behavior, and appropriate ARIA semantics.
- Do not sacrifice accessibility for a visual effect.

## Security and Configuration

- Keep secrets in `.env.local`; never commit them.
- Only expose client-safe variables prefixed with `NEXT_PUBLIC_`.
- Do not place secrets in code or under `public/`.

## Verification

Use Bun for meaningful checks:

```bash
bun install
bun run build
bun run lint
```

For touched-file checks, invoke existing tools through `bunx` where appropriate. Do not claim testing that was not performed. Separate verified behavior, inferred behavior, and remaining manual validation.

## Reporting

Report completed work concisely:

### Changed

What changed.

### Files

Important files touched.

### Verification

Bun commands and checks actually performed.

### Remaining

Only genuine unresolved issues or owner decisions.
