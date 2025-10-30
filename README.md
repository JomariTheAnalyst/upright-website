# Upright Systems Inc. - Corporate Website

A modern, professional corporate website for Upright Systems Inc., a Philippine-based IT solutions company specializing in system integration, software development, and enterprise services.

## 🚀 Live Demo

[View Live Site](https://upright-systems.vercel.app) _(Update with your Vercel URL)_

## ✨ Features

### Pages

- **Home** - Animated hero with image marquee, company video, services overview
- **About** - Company timeline, achievements, mission/vision, leadership, corporate culture, careers
- **Services** - Dedicated pages for each service offering:
  - IT System Integration (full implementation with process, case studies)
  - Software Development
  - Professional Services
  - Hardware Solutions
  - Maritime Learning
- **FAQs** - Comprehensive frequently asked questions
- **404** - Custom error page

### Key Features

- ✅ Fully responsive design (mobile-first approach)
- ✅ Smooth scroll navigation and animations
- ✅ Professional service pages with detailed sections
- ✅ SEO optimized with Next.js Metadata API
- ✅ Accessible (ARIA labels, keyboard navigation)
- ✅ Modern UI with blue/yellow brand colors
- ✅ Type-safe with TypeScript
- ✅ Framer Motion animations throughout
- ✅ Video integration capabilities
- ✅ Interactive components (carousels, accordions, timelines)

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0.0 (App Router)
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS v4 with PostCSS
- **UI Components:** shadcn/ui + Radix UI primitives
- **Animations:** Framer Motion v12
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React + Tabler Icons
- **Deployment:** Vercel

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/upright-systems.git
cd upright-systems
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run development server:**

```bash
npm run dev
```

4. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
upright-systems/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── faqs/                     # FAQs page
│   ├── services/                 # Service pages
│   │   ├── it-system-integration/
│   │   ├── software-development/
│   │   ├── professional-services/
│   │   ├── hardware-solutions/
│   │   └── maritime-learning/
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── features/                 # Feature components
│   │   ├── logo-marquee.tsx
│   │   └── services-gallery.tsx
│   ├── layout/                   # Layout components
│   │   ├── navbar-professional.tsx
│   │   └── footer.tsx
│   ├── providers/                # Context providers
│   │   └── theme-provider.tsx
│   ├── sections/                 # Page sections
│   │   ├── hero.tsx
│   │   ├── company-video.tsx
│   │   ├── careers.tsx
│   │   ├── integration/          # IT Integration sections
│   │   └── ...
│   └── ui/                       # shadcn/ui components
├── hooks/                        # Custom React hooks
├── lib/                          # Utilities
└── public/                       # Static assets
    ├── images/
    └── videos/
```

## 🎨 Key Components

### Navigation

- Professional navbar with dropdown menus
- Smooth scroll to sections
- Mobile-responsive menu
- Scroll-to-top on logo click

### Hero Sections

- Animated marquee hero with scrolling images
- Video background support
- Gradient text effects
- Call-to-action buttons

### Service Pages

- Full-width hero banners
- Feature grids with icons
- Process timelines
- Case study highlights
- Industry showcases

### Interactive Elements

- Sticky scroll reveals
- Animated carousels
- Expandable accordions
- Timeline visualizations
- Video modals

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**

```bash
git add .
git commit -m "feat: Complete Upright Systems website"
git push origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

### Build for Production

```bash
npm run build
npm start
```

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## 🎯 Customization

### Update Content

- **Company Info:** Edit `components/layout/footer.tsx`
- **Services:** Modify files in `app/services/`
- **About Page:** Update `app/about/page.tsx`
- **Home Sections:** Edit components in `components/sections/`

### Styling

- **Colors:** Modify `app/globals.css` (CSS variables)
- **Theme:** Blue/Cyan primary, Yellow accent
- **Fonts:** Inter (via next/font)

### Add New Service Page

1. Create folder: `app/services/your-service/`
2. Add `page.tsx` with metadata and content
3. Update navbar in `components/layout/navbar-professional.tsx`

## 🔧 Configuration

### Path Aliases

```json
{
  "@/*": ["./*"]
}
```

### Environment Variables

Create `.env.local` for any API keys or secrets:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast meets WCAG AA standards
- Screen reader friendly

## 📄 License

© 2025 Upright Systems Inc. All rights reserved.

## 👥 Credits

Built with ❤️ by the Upright Systems team.

## 📞 Support

For questions or support, contact:

- **Email:** info@uprightsystems.com
- **Website:** [uprightsystems.com](https://uprightsystems.com)
- **Location:** Philippines

---

**Note:** This is a production-ready website. Ensure all content, images, and contact information are updated before going live.
