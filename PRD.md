# Product Requirements Document (PRD)

## Upright Solutions and Systems Consultancy Corp. Corporate Website

---

**Document Version**: 1.0  
**Last Updated**: November 13, 2025  
**Status**: Production Ready  
**Owner**: Upright Systems Development Team

---

## 📋 Table of Contents

1. [Executive Summary](#executive-summary)
2. [Product Overview](#product-overview)
3. [Goals & Objectives](#goals--objectives)
4. [Target Audience](#target-audience)
5. [Features & Requirements](#features--requirements)
6. [Technical Specifications](#technical-specifications)
7. [User Experience](#user-experience)
8. [Design System](#design-system)
9. [Performance Requirements](#performance-requirements)
10. [Security & Privacy](#security--privacy)
11. [Analytics & Metrics](#analytics--metrics)
12. [Future Enhancements](#future-enhancements)

---

## Executive Summary

The Upright Solutions and Systems Consultancy Corp. corporate website is a modern, enterprise-grade web application designed to showcase the company's IT solutions, services, and expertise. Built with Next.js 16 and TypeScript, the website provides an exceptional user experience while maintaining high performance, accessibility, and SEO standards.

### Key Highlights

- **Launch Date**: Q4 2025
- **Platform**: Web (Desktop, Tablet, Mobile)
- **Technology**: Next.js 16, TypeScript, Tailwind CSS
- **Target Markets**: Philippines, Southeast Asia
- **Primary Goal**: Generate qualified leads and establish brand authority

---

## Product Overview

### Vision

To create a world-class digital presence that reflects Upright Solutions and Systems Consultancy Corp.'s position as a leading IT solutions provider in the Philippines, while providing an intuitive and engaging experience for potential clients, partners, and job seekers.

### Mission

Deliver a high-performance, accessible, and conversion-optimized website that:

- Showcases Upright Solutions and Systems Consultancy Corp.'s expertise and services
- Generates qualified business leads
- Attracts top talent for career opportunities
- Establishes thought leadership in the IT industry

### Success Criteria

| Metric           | Target      | Measurement                 |
| ---------------- | ----------- | --------------------------- |
| Page Load Time   | < 2 seconds | Lighthouse Performance      |
| Lighthouse Score | 90+         | All categories              |
| Mobile Traffic   | 60%+        | Google Analytics            |
| Form Submissions | 50+/month   | Contact & Partnership forms |
| Bounce Rate      | < 40%       | Google Analytics            |
| SEO Ranking      | Top 10      | Target keywords             |

---

## Goals & Objectives

### Business Goals

1. **Lead Generation**

   - Capture 50+ qualified leads per month through contact forms
   - Convert 10% of website visitors to partnership inquiries
   - Achieve 20% increase in service inquiries year-over-year

2. **Brand Awareness**

   - Establish Upright Systems as a thought leader in IT solutions
   - Increase brand recognition in the Philippine market
   - Showcase successful case studies and client testimonials

3. **Talent Acquisition**
   - Attract 100+ qualified job applications per quarter
   - Reduce time-to-hire by 30%
   - Showcase company culture and benefits

### Technical Goals

1. **Performance**

   - Achieve 90+ Lighthouse score across all metrics
   - Maintain < 2 second page load time
   - Optimize Core Web Vitals (LCP, FID, CLS)

2. **Accessibility**

   - Meet WCAG 2.1 AA compliance
   - Support keyboard navigation
   - Provide screen reader compatibility

3. **SEO**
   - Rank in top 10 for target keywords
   - Achieve 100% indexability
   - Implement structured data markup

---

## Target Audience

### Primary Personas

#### 1. **Enterprise Decision Maker**

- **Role**: CTO, IT Director, Business Owner
- **Age**: 35-55
- **Goals**: Find reliable IT solutions partner, reduce operational costs
- **Pain Points**: Legacy system integration, security concerns, scalability
- **Behavior**: Research-driven, values case studies and testimonials

#### 2. **IT Professional**

- **Role**: Software Developer, System Administrator, IT Manager
- **Age**: 25-40
- **Goals**: Career growth, work-life balance, competitive compensation
- **Pain Points**: Limited growth opportunities, outdated technology
- **Behavior**: Reviews company culture, technology stack, benefits

#### 3. **Business Partner**

- **Role**: Technology Vendor, Reseller, Consultant
- **Age**: 30-50
- **Goals**: Expand service offerings, find reliable partners
- **Pain Points**: Limited technical capabilities, need for expertise
- **Behavior**: Evaluates partnership benefits, technical capabilities

---

## Features & Requirements

### 1. Home Page

#### Hero Section

- **Priority**: P0 (Critical)
- **Description**: Full-screen video background with company tagline
- **Requirements**:
  - Video autoplay with fallback image
  - Responsive text overlay
  - Call-to-action buttons (Get Quote, Learn More)
  - Smooth scroll to next section
- **Success Metrics**: 80%+ scroll-through rate

#### Why Choose Us Section

- **Priority**: P0 (Critical)
- **Description**: Interactive flip cards showcasing company strengths
- **Requirements**:
  - 6 flip cards (Expertise, Innovation, Trust, End-to-End Support, Experience, Security)
  - Horizontal scrolling with navigation buttons
  - Front: Title, description, image
  - Back: Detailed information
  - Mobile-responsive layout
- **Success Metrics**: 60%+ card interaction rate

#### Team Showcase

- **Priority**: P1 (High)
- **Description**: Continuous marquee of team members and statistics
- **Requirements**:
  - Masonry-style layout
  - Alternating 2-row and single-column cards
  - Person cards with name, role, image
  - Stat cards with metrics
  - Infinite loop animation
  - No left/right margins
- **Success Metrics**: Visual engagement, brand perception

#### Partnership Form

- **Priority**: P0 (Critical)
- **Description**: Glass-morphism form for partnership inquiries
- **Requirements**:
  - Fields: Name, Email, Company, Phone, Message
  - 2-column responsive layout
  - Transparent white background
  - Form validation
  - Success/error messaging
- **Success Metrics**: 10+ submissions per month

### 2. About Page

#### Company Timeline

- **Priority**: P1 (High)
- **Description**: Visual timeline of company milestones (2015-2025)
- **Requirements**:
  - Chronological layout
  - Key achievements highlighted
  - Responsive design
- **Success Metrics**: 70%+ scroll completion

#### Founders Section

- **Priority**: P1 (High)
- **Description**: Showcase company founders and leadership
- **Requirements**:
  - Profile images
  - Bio information
  - Social media links
- **Success Metrics**: Credibility establishment

### 3. Services Page

#### Service Tabs

- **Priority**: P0 (Critical)
- **Description**: Tabbed interface for different service offerings
- **Requirements**:
  - IT System Integration
  - Software Development
  - Professional Services
  - Hardware Solutions
  - Maritime Learning
  - Smooth tab transitions
  - Service details with icons
- **Success Metrics**: 50%+ tab interaction rate

### 4. Contact Page

#### Contact Form

- **Priority**: P0 (Critical)
- **Description**: Comprehensive contact form with file upload
- **Requirements**:
  - Fields: Full Name, Company, Email, Phone, Inquiry Type, Message, Attachment
  - Drag-and-drop file upload
  - Image preview
  - Inquiry type dropdown (General, Technical Support, Partnership, Careers, Others)
  - Turquoise accent colors (#3FC2C2)
  - Form validation
  - Email notification on submission
- **Success Metrics**: 50+ submissions per month, < 5% form abandonment

#### Background Image

- **Priority**: P1 (High)
- **Description**: Full-screen background with overlay
- **Requirements**:
  - High-quality image from Builder.io CDN
  - Dark overlay for text readability
  - Responsive scaling
- **Success Metrics**: Visual appeal, brand consistency

### 5. Careers Page

#### Culture Showcase

- **Priority**: P1 (High)
- **Description**: Video and images showcasing company culture
- **Requirements**:
  - Video integration
  - Workplace photos
  - Employee testimonials
- **Success Metrics**: 100+ job applications per quarter

#### Job Listings

- **Priority**: P0 (Critical)
- **Description**: Current job openings
- **Requirements**:
  - Job title, description, requirements
  - Apply button
  - Filter by department
- **Success Metrics**: 20+ applications per position

### 6. FAQs Page

#### Categorized Questions

- **Priority**: P1 (High)
- **Description**: Frequently asked questions organized by category
- **Requirements**:
  - Expandable accordion interface
  - Search functionality
  - Categories: Services, Pricing, Support, Technical
- **Success Metrics**: 80%+ question resolution rate

---

## Technical Specifications

### Technology Stack

#### Frontend

- **Framework**: Next.js 16.0.0 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Library**: shadcn/ui
- **Animations**: Framer Motion v12
- **Icons**: Lucide React, Tabler Icons

#### Development Tools

- **Package Manager**: npm
- **Linting**: ESLint
- **Type Checking**: TypeScript compiler
- **Build Tool**: Turbopack

### Architecture

#### Rendering Strategy

- **Home Page**: Static Site Generation (SSG)
- **About Page**: SSG
- **Services Page**: SSG
- **Contact Page**: Client-Side Rendering (CSR) for form
- **Careers Page**: SSG with dynamic job listings
- **Blog Page**: SSG with ISR (Incremental Static Regeneration)

#### Data Flow

```
User Input → Form Component → Validation → API Route → Email Service → Database
```

#### File Structure

```
app/
├── layout.tsx (Root layout with fonts, theme)
├── page.tsx (Home page)
├── about/page.tsx
├── services/page.tsx
├── careers/page.tsx
├── contact/page.tsx
├── faqs/page.tsx
└── blog/page.tsx

components/
├── layout/ (Navbar, Footer)
├── sections/ (Page sections)
├── ui/ (shadcn components)
└── features/ (Reusable features)
```

### API Endpoints

| Endpoint             | Method | Purpose                 |
| -------------------- | ------ | ----------------------- |
| `/api/contact`       | POST   | Submit contact form     |
| `/api/partnership`   | POST   | Submit partnership form |
| `/api/careers/apply` | POST   | Submit job application  |
| `/api/newsletter`    | POST   | Subscribe to newsletter |

### Database Schema

#### Contact Submissions

```typescript
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone: string;
  inquiryType: string;
  message: string;
  attachment?: string;
  createdAt: Date;
  status: "new" | "contacted" | "closed";
}
```

#### Partnership Inquiries

```typescript
interface PartnershipInquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  createdAt: Date;
  status: "pending" | "approved" | "rejected";
}
```

---

## User Experience

### User Flows

#### 1. Service Inquiry Flow

```
Landing Page → Services Section → Service Details → Contact Form → Confirmation
```

#### 2. Partnership Flow

```
Home Page → Join Us Section → Partnership Form → Submit → Thank You Message
```

#### 3. Job Application Flow

```
Careers Page → Job Listing → Job Details → Apply → Upload Resume → Submit
```

### Navigation Structure

```
Home
├── About
│   ├── Company History
│   ├── Founders
│   └── Testimonials
├── Services
│   ├── IT System Integration
│   ├── Software Development
│   ├── Professional Services
│   ├── Hardware Solutions
│   └── Maritime Learning
├── Careers
│   ├── Culture
│   ├── Benefits
│   └── Open Positions
├── Contact
├── FAQs
└── Blog
```

### Responsive Breakpoints

| Device        | Breakpoint     | Layout                                 |
| ------------- | -------------- | -------------------------------------- |
| Mobile        | < 768px        | Single column, hamburger menu          |
| Tablet        | 768px - 1024px | 2 columns, condensed navigation        |
| Desktop       | > 1024px       | Full layout, expanded navigation       |
| Large Desktop | > 1440px       | Max-width container, optimized spacing |

---

## Design System

### Color Palette

#### Primary Colors

- **Primary Blue**: `oklch(0.45 0.15 250)` - Main brand color
- **Accent Yellow**: `oklch(0.85 0.15 85)` - Call-to-action, highlights
- **Turquoise**: `#3FC2C2` - Form accents, interactive elements

#### Neutral Colors

- **Background Light**: `#fafafa`, `#f1f0ee`, `#faf8ed`
- **Text Dark**: `#000000`, `#1a1a1a`
- **Text Gray**: `#666666`, `#999999`
- **Border**: `#e5e5e5`

#### Gradient Overlays (Team Cards)

- Purple: `from-purple-500/80 via-purple-500/40`
- Pink: `from-pink-500/80 via-pink-500/40`
- Yellow: `from-yellow-500/80 via-yellow-500/40`
- Cyan: `from-cyan-500/80 via-cyan-500/40`
- Orange: `from-orange-500/80 via-orange-500/40`
- Blue: `from-blue-500/80 via-blue-500/40`

### Typography

#### Font Families

- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)
- **Alternative**: EB Garamond, Merriweather

#### Font Sizes

- **Hero**: 4xl - 7xl (36px - 72px)
- **H1**: 3xl - 6xl (30px - 60px)
- **H2**: 2xl - 5xl (24px - 48px)
- **H3**: xl - 3xl (20px - 30px)
- **Body**: base - lg (16px - 18px)
- **Small**: sm - xs (14px - 12px)

### Spacing System

- **Base Unit**: 4px
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96

### Component Styles

#### Buttons

- **Primary**: Yellow background, black text, rounded-lg
- **Secondary**: White background, black text, border
- **Ghost**: Transparent, hover effect

#### Cards

- **Border Radius**: rounded-2xl (16px)
- **Shadow**: shadow-lg, shadow-2xl
- **Padding**: p-6, p-8

#### Forms

- **Input Height**: h-11, h-12
- **Border**: border-gray-300, focus:border-turquoise
- **Background**: bg-white/30 (transparent forms)

---

## Performance Requirements

### Loading Performance

| Metric                         | Target  | Priority |
| ------------------------------ | ------- | -------- |
| First Contentful Paint (FCP)   | < 1.8s  | P0       |
| Largest Contentful Paint (LCP) | < 2.5s  | P0       |
| Time to Interactive (TTI)      | < 3.8s  | P0       |
| Total Blocking Time (TBT)      | < 200ms | P1       |
| Cumulative Layout Shift (CLS)  | < 0.1   | P0       |

### Optimization Strategies

1. **Image Optimization**

   - Next.js Image component
   - WebP format with fallbacks
   - Lazy loading below the fold
   - Responsive images with srcset

2. **Code Splitting**

   - Route-based code splitting (automatic)
   - Dynamic imports for heavy components
   - Tree shaking unused code

3. **Caching Strategy**

   - Static assets: 1 year cache
   - API responses: 5 minutes cache
   - CDN caching for images

4. **Bundle Size**
   - Initial bundle: < 200KB
   - Total JavaScript: < 500KB
   - CSS: < 50KB

---

## Security & Privacy

### Security Measures

1. **Form Security**

   - CSRF protection
   - Input sanitization
   - Rate limiting (10 requests/minute)
   - Captcha for spam prevention

2. **Data Protection**

   - HTTPS only
   - Secure headers (CSP, HSTS)
   - XSS protection
   - SQL injection prevention

3. **File Upload Security**
   - File type validation
   - Size limits (5MB max)
   - Virus scanning
   - Secure storage

### Privacy Compliance

1. **GDPR Compliance**

   - Cookie consent banner
   - Privacy policy page
   - Data deletion requests
   - User data export

2. **Data Collection**
   - Minimal data collection
   - Clear purpose statements
   - Opt-in for marketing
   - Secure data storage

---

## Analytics & Metrics

### Key Performance Indicators (KPIs)

#### Traffic Metrics

- **Monthly Visitors**: Target 10,000+
- **Page Views**: Target 50,000+
- **Bounce Rate**: Target < 40%
- **Average Session Duration**: Target > 3 minutes

#### Conversion Metrics

- **Contact Form Submissions**: Target 50+/month
- **Partnership Inquiries**: Target 10+/month
- **Job Applications**: Target 100+/quarter
- **Newsletter Signups**: Target 200+/month

#### Engagement Metrics

- **Scroll Depth**: Target 70%+ reach bottom
- **Video Play Rate**: Target 60%+
- **Card Interaction Rate**: Target 50%+
- **Form Completion Rate**: Target 80%+

### Analytics Tools

1. **Google Analytics 4**

   - Traffic analysis
   - User behavior tracking
   - Conversion tracking
   - Custom events

2. **Google Search Console**

   - SEO performance
   - Search queries
   - Indexing status
   - Mobile usability

3. **Hotjar** (Optional)
   - Heatmaps
   - Session recordings
   - User feedback

---

## Future Enhancements

### Phase 2 (Q1 2026)

1. **Blog Platform**

   - CMS integration (Contentful/Sanity)
   - Article categories
   - Author profiles
   - Comments system

2. **Client Portal**

   - Login system
   - Project tracking
   - Document sharing
   - Support tickets

3. **Live Chat**
   - Real-time support
   - Chatbot integration
   - Business hours automation

### Phase 3 (Q2 2026)

1. **E-commerce**

   - Product catalog
   - Shopping cart
   - Payment integration
   - Order management

2. **Resource Center**

   - Whitepapers
   - Case studies
   - Webinars
   - Downloads

3. **Multi-language Support**
   - English (default)
   - Filipino
   - Chinese (optional)

### Phase 4 (Q3 2026)

1. **Mobile App**

   - iOS application
   - Android application
   - Push notifications
   - Offline mode

2. **Advanced Analytics**
   - Custom dashboards
   - Predictive analytics
   - A/B testing platform
   - Conversion optimization

---

## Appendix

### Glossary

- **SSG**: Static Site Generation
- **CSR**: Client-Side Rendering
- **ISR**: Incremental Static Regeneration
- **LCP**: Largest Contentful Paint
- **FCP**: First Contentful Paint
- **CLS**: Cumulative Layout Shift
- **WCAG**: Web Content Accessibility Guidelines

### References

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Web Vitals](https://web.dev/vitals/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Change Log

| Version | Date         | Changes              | Author           |
| ------- | ------------ | -------------------- | ---------------- |
| 1.0     | Nov 13, 2025 | Initial PRD creation | Development Team |

---

<div align="center">

**Upright Solutions and Systems Consultancy Corp. - Product Requirements Document**

_This document is confidential and proprietary to Upright Solutions and Systems Consultancy Corp._

</div>
