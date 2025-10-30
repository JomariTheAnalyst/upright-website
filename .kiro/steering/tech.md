# Tech Stack

## Framework & Core

- **Next.js 16.0.0** with App Router
- **React 19.2.0**
- **TypeScript 5** (strict mode enabled)
- **Node.js** target: ES2017

## Styling & UI

- **Tailwind CSS v4** with PostCSS
- **shadcn/ui** component library
- **Framer Motion** (v12) for animations
- **next-themes** for dark/light mode
- **class-variance-authority** + **clsx** + **tailwind-merge** for conditional styling

## Icons & Assets

- **Lucide React** for icons
- **@tabler/icons-react** for additional icons

## Forms & Validation

- **React Hook Form** for form management
- **Zod** for schema validation
- **@hookform/resolvers** for integration

## UI Components

- **Radix UI** primitives (dropdown-menu, label, navigation-menu, slot)

## Common Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Path Aliases

- `@/*` maps to project root (configured in tsconfig.json)
- Import example: `import { cn } from "@/lib/utils"`

## Build Configuration

- Module resolution: bundler
- JSX runtime: react-jsx (automatic)
- Strict TypeScript enabled
- ESLint configured with Next.js config
