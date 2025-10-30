# Project Structure

## Directory Organization

```
/app                    # Next.js App Router pages
  layout.tsx           # Root layout with theme provider & SEO
  page.tsx             # Main landing page
  globals.css          # Global styles & CSS variables

/components            # React components
  /sections            # Page section components (hero, about, services, etc.)
  /ui                  # shadcn/ui components (button, card, form, etc.)
  navigation.tsx       # Navigation components
  footer.tsx           # Footer component
  theme-provider.tsx   # Theme context wrapper
  theme-toggle.tsx     # Dark/light mode toggle
  logo-marquee.tsx     # 3D logo carousel
  earth-logo.tsx       # Animated logo component

/hooks                 # Custom React hooks
  use-scroll-reveal.ts # Scroll animation hook
  use-outside-click.tsx # Click outside detection

/lib                   # Utility functions
  utils.ts             # Helper functions (cn, etc.)

/public                # Static assets
  /images              # Image files
  /videos              # Video backgrounds
```

## Component Conventions

- Use `"use client"` directive for client components with interactivity
- Server components by default (no directive needed)
- File naming: kebab-case for files, PascalCase for component names
- Export pattern: Named exports for components (e.g., `export function HeroSection()`)

## Styling Patterns

- Tailwind utility classes for styling
- Use `cn()` utility from `@/lib/utils` for conditional classes
- CSS variables defined in `globals.css` for theme colors
- Responsive design: mobile-first with `md:`, `lg:`, `xl:` breakpoints

## State Management

- React hooks (useState, useEffect, useRef) for local state
- Context API for theme management (next-themes)
- No global state library (Redux, Zustand, etc.)

## Animation Patterns

- Framer Motion for complex animations
- Use `motion` components with `initial`, `animate`, `transition` props
- Scroll-based animations via custom `useScrollReveal` hook

## Import Patterns

- Use `@/` path alias for all internal imports
- Group imports: React → Next.js → Third-party → Local components → Utils
- Example:
  ```typescript
  import { useState } from "react"
  import { motion } from "motion/react"
  import { Button } from "@/components/ui/button"
  import { cn } from "@/lib/utils"
  ```

## Form Handling

- React Hook Form + Zod for validation
- Form schemas defined inline or in separate files
- Error messages displayed via form state
