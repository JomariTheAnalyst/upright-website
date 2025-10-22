# Upright Systems Inc. Website

A modern, single-page website for Upright Systems Inc., a Philippine-based IT solutions company.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **React Hook Form** + **Zod** for form validation
- **next-themes** for dark/light mode
- **Framer Motion** for animations
- **Lucide React** for icons

## Features

- ✅ Fully responsive design (mobile-first)
- ✅ Dark/Light mode toggle
- ✅ Smooth scroll navigation
- ✅ Professional contact form with validation
- ✅ SEO optimized with Next.js Metadata API
- ✅ Accessible (ARIA labels, keyboard navigation)
- ✅ Modern UI with blue/yellow color scheme
- ✅ Type-safe with TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
upright-systems/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles with custom colors
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── industries.tsx
│   │   ├── process.tsx
│   │   └── contact.tsx
│   ├── navigation.tsx      # Sticky navigation bar
│   ├── footer.tsx          # Footer component
│   ├── theme-provider.tsx  # Theme context provider
│   └── theme-toggle.tsx    # Dark/light mode toggle
└── lib/
    └── utils.ts            # Utility functions
```

## Customization

### Colors
Edit `app/globals.css` to customize the color scheme. Current colors:
- Primary: Blue (oklch(0.45 0.15 250))
- Accent: Yellow (oklch(0.85 0.15 85))

### Content
Update content in the section components:
- `components/sections/hero.tsx` - Hero headline and CTA
- `components/sections/about.tsx` - Company milestones
- `components/sections/services.tsx` - Service offerings
- `components/sections/industries.tsx` - Industries served
- `components/sections/process.tsx` - Work process steps
- `components/sections/contact.tsx` - Contact form and info

### Contact Form
The contact form currently logs to console. To connect to a backend:
1. Update the `onSubmit` function in `components/sections/contact.tsx`
2. Add your API endpoint or email service integration

## Build for Production

```bash
npm run build
npm start
```

## Performance Optimization

- Images: Use Next.js `<Image>` component for optimization
- Fonts: Inter font loaded via `next/font`
- Code splitting: Automatic with Next.js App Router
- CSS: Tailwind CSS with purging for minimal bundle size

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast meets WCAG AA standards

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Upright Systems Inc. All rights reserved.
