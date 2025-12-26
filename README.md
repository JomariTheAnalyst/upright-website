# Upright Solutions and Systems Consultancy Corp. - Corporate Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)

A modern, enterprise-grade corporate website for Upright Solutions and Systems Consultancy Corp., a Philippine-based IT solutions company specializing in system integration, software development, and enterprise technology services since 2015.

[View Live Demo](https://upright-rosy.vercel.app) • [Report Bug](https://github.com/yourusername/upright-website/issues) • [Request Feature](https://github.com/yourusername/upright-website/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Key Components](#-key-components)
- [Deployment](#-deployment)
- [Configuration](#-configuration)
- [Performance](#-performance)
- [Accessibility](#-accessibility)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

Upright Solutions and Systems Consultancy Corp. website is a production-ready, enterprise-level web application built with modern web technologies. The site showcases the company's IT solutions, services, and expertise while providing an exceptional user experience across all devices.

### Key Highlights

- 🚀 **Performance**: Optimized for Core Web Vitals with 90+ Lighthouse scores
- 📱 **Responsive**: Mobile-first design with seamless tablet and desktop experiences
- ♿ **Accessible**: WCAG 2.1 AA compliant with full keyboard navigation
- 🎨 **Modern UI**: Glass-morphism effects, smooth animations, and interactive components
- 🔒 **Type-Safe**: Full TypeScript implementation with strict mode
- 📊 **SEO Optimized**: Next.js Metadata API with structured data

---

## ✨ Features

### 🏠 Pages

| Page         | Description                    | Key Features                                                  |
| ------------ | ------------------------------ | ------------------------------------------------------------- |
| **Home**     | Landing page with hero section | Video background, animated marquee, flip cards, team showcase |
| **About**    | Company information            | Timeline, founders, testimonials, culture showcase            |
| **Services** | Service offerings              | Tabbed interface, detailed service pages, case studies        |
| **Careers**  | Job opportunities              | Culture videos, workplace showcase, job listings              |
| **Contact**  | Contact form                   | Multi-field form, file upload, drag-and-drop support          |
| **FAQs**     | Help center                    | Categorized questions, search functionality                   |
| **Blog**     | News and updates               | Article listings, featured posts                              |

### 🎨 Interactive Components

- ✅ **Animated Hero** - Full-screen video background with overlay text
- ✅ **Logo Marquee** - Infinite scrolling client logos
- ✅ **Flip Cards** - Interactive service cards with front/back content
- ✅ **Team Marquee** - Horizontal scrolling team member cards with masonry layout
- ✅ **Image Upload** - Drag-and-drop file upload with preview
- ✅ **Partnership Form** - Transparent glass-morphism form with validation
- ✅ **Testimonials** - Vertical scrolling testimonial columns
- ✅ **Case Studies** - Grid layout with hover effects
- ✅ **Preloader** - Custom loading animation with progress indicator

### 🔧 Technical Features

- ✅ Server-side rendering (SSR) and static generation (SSG)
- ✅ Image optimization with Next.js Image component
- ✅ Lazy loading for improved performance
- ✅ Custom hooks for scroll reveal animations
- ✅ Theme provider for dark/light mode support
- ✅ Form validation with React Hook Form
- ✅ Responsive navigation with mobile menu
- ✅ SEO-friendly URLs and meta tags
- ✅ Error boundaries and 404 page
- ✅ Privacy policy and legal pages

---

## 🛠️ Tech Stack

### Core Technologies

- **Framework:** [Next.js 16.0.0](https://nextjs.org/) with App Router
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (strict mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion v12](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) + Tabler Icons

### Development Tools

- **Package Manager:** npm
- **Linting:** ESLint with Next.js config
- **Type Checking:** TypeScript compiler
- **Build Tool:** Turbopack (Next.js 16)
- **Version Control:** Git

### Key Dependencies

```json
{
  "next": "16.0.0",
  "react": "19.2.0",
  "typescript": "^5",
  "tailwindcss": "^4.0.0",
  "framer-motion": "^12.0.0",
  "lucide-react": "latest",
  "next-themes": "latest",
  "gsap": "latest"
}
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/upright-website.git
cd upright-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Upright Solutions and Systems Consultancy Corp."
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

---

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

© 2025 Upright Solutions and Systems Consultancy Corp. All rights reserved.

## 👥 Credits

Built with ❤️ by the Upright Solutions and Systems Consultancy Corp. team.

## 📞 Support

For questions or support, contact:

- **Email:** info@uprightsystems.com
- **Website:** [uprightsystems.com](https://uprightsystems.com)
- **Location:** Philippines

---

**Note:** This is a production-ready website. Ensure all content, images, and contact information are updated before going live.

## 📂 Project Structure

```
upright-website/
├── app/                              # Next.js App Router
│   ├── about/                        # About page
│   ├── blog/                         # Blog page
│   ├── careers/                      # Careers page
│   ├── contact/                      # Contact pages
│   ├── faqs/                         # FAQs page
│   ├── services/                     # Services page
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page
│   ├── not-found.tsx                 # 404 page
│   └── globals.css                   # Global styles
│
├── components/                       # React components
│   ├── features/                     # Feature components
│   ├── layout/                       # Layout components
│   ├── preloader/                    # Loading animation
│   ├── sections/                     # Page sections
│   └── ui/                           # shadcn/ui components
│
├── hooks/                            # Custom React hooks
├── data/                             # Data files
├── lib/                              # Utility functions
├── public/                           # Static assets
│   ├── images/
│   └── videos/
│
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json                      # Dependencies
```

---

## 🎨 Key Components

### Navigation

- Transparent navbar with blur effect
- Mobile-responsive menu
- Smooth scroll navigation

### Interactive Elements

- Flip cards with animations
- Horizontal scrolling marquees
- Drag-and-drop file upload
- Glass-morphism forms
- Video backgrounds

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

```bash
git add .
git commit -m "feat: Complete Upright Systems website"
git push origin main
```

2. **Deploy on Vercel**

- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel will auto-detect Next.js
- Click "Deploy"

### Build for Production

```bash
npm run build
npm start
```

---

## ⚙️ Configuration

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME="Upright Solutions and Systems Consultancy Corp."
```

### Path Aliases

```json
{
  "@/*": ["./*"]
}
```

### Image Optimization

Configured in `next.config.ts`:

- Unsplash images
- Builder.io CDN images

---

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Implemented for images and components

---

## ♿ Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus states on all interactive elements
- ✅ Color contrast meets WCAG AA standards
- ✅ Screen reader friendly

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

© 2025 Upright Solutions and Systems Consultancy Corp. All rights reserved.

This is proprietary software. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.

---

## 👥 Credits

**Built with ❤️ by the Upright Solutions and Systems Consultancy Corp. Development Team**

- **Design**: Upright Solutions and Systems Consultancy Corp. Design Team
- **Development**: Upright Solutions and Systems Consultancy Corp. Engineering Team
- **Content**: Upright Solutions and Systems Consultancy Corp. Marketing Team

---

## 📞 Support

For questions, support, or inquiries:

- **Email**: info@uprightsystems.com
- **Website**: [uprightsystems.com](https://uprightsystems.com)
- **Location**: Philippines
- **Phone**: +63 XXX XXX XXXX

---

## 📚 Additional Documentation

- [Product Requirements Document (PRD)](./PRD.md)
- [Agent Guidelines](./AGENTS.md)
- [Privacy Policy](./privacy-policy.md)

---

<div align="center">

**Made with Next.js, TypeScript, and Tailwind CSS**

⭐ Star this repo if you find it helpful!

</div>
