# Deployment Guide

## Pre-Deployment Checklist

### 1. Update Placeholder Content
- [ ] Replace all placeholder image paths with actual images
- [ ] Update social media links in `src/lib/constants.ts`
- [ ] Add actual Calendly URL in `src/app/consultation/page.tsx`
- [ ] Update Formspree form ID in `src/app/contact/page.tsx`
- [ ] Add actual project links (GitHub, demo URLs) in `src/data/projects.ts`
- [ ] Add resume PDF to `public/documents/Lee_Aulder_Resume.pdf`
- [ ] Create and add OG image to `public/og-image.webp`

### 2. Image Optimization
All images should be in WebP format and optimized:
- Profile headshot: `public/images/profile/headshot.webp`
- Project images: `public/images/projects/*.webp`
- Creative work: `public/images/creative/**/*.webp`
- Fashion/merch: `public/images/fashion/*.webp`

### 3. Environment Variables
No environment variables required for basic deployment. If adding form handling or analytics:
- Create `.env.local` for local development
- Add variables in Vercel dashboard for production

## Vercel Deployment

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: VizionScop3 Portfolio"
git branch -M main
git remote add origin [your-github-repo-url]
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Step 3: Configure Domain (Optional)
1. In Vercel project settings
2. Go to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Post-Deployment

### Verify
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Forms submit successfully
- [ ] Links work correctly
- [ ] Mobile navigation functions
- [ ] Analytics tracking (check Vercel Analytics dashboard)

### Performance
- Run Lighthouse audit
- Target scores:
  - Performance: > 90
  - Accessibility: > 95
  - Best Practices: > 90
  - SEO: > 90

## Maintenance

### Regular Updates
- Update project data in `src/data/projects.ts`
- Add new creative work images
- Update skills and experience in About page
- Keep dependencies updated: `npm update`

### Analytics
Monitor via Vercel Analytics dashboard:
- Page views
- User engagement
- Performance metrics
