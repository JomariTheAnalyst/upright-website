# Deployment Guide

## Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and configure everything
5. Click "Deploy"

## Manual Deployment

### Build the project
```bash
npm run build
```

### Start production server
```bash
npm start
```

The app will run on port 3000 by default.

## Environment Variables

If you need environment variables in production:
1. Copy `.env.example` to `.env.local`
2. Add your production values
3. In Vercel: Settings → Environment Variables

## Performance Checklist

Before deploying:
- [ ] Run `npm run build` to check for errors
- [ ] Test on multiple devices and browsers
- [ ] Verify all images are optimized
- [ ] Check Lighthouse scores (aim for 90+)
- [ ] Test form validation
- [ ] Verify dark/light mode works
- [ ] Test smooth scrolling on all sections
- [ ] Check mobile navigation

## Post-Deployment

1. Update contact information in:
   - `components/sections/contact.tsx`
   - `components/footer.tsx`

2. Connect contact form to your backend/email service

3. Add Google Analytics or tracking (optional)

4. Set up custom domain in Vercel settings

## Monitoring

- Use Vercel Analytics for performance monitoring
- Set up error tracking (Sentry, etc.)
- Monitor Core Web Vitals
