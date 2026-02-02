# Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Update Placeholder Content

#### Social Media Links
Edit `src/lib/constants.ts`:
```typescript
export const socialLinks = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/YOUR_PROFILE', icon: 'Linkedin' },
  { platform: 'GitHub', url: 'https://github.com/YOUR_USERNAME', icon: 'Github' },
  { platform: 'Twitter', url: 'https://twitter.com/YOUR_HANDLE', icon: 'Twitter' },
]
```

#### Contact Form
Edit `src/app/contact/page.tsx`:
- Replace `'https://formspree.io/f/[your-form-id]'` with your actual Formspree form ID
- Or use another form service (EmailJS, etc.)

#### Calendly Integration
Edit `src/app/consultation/page.tsx`:
- Replace `'https://calendly.com/[your-link]'` with your actual Calendly URL
- Optionally embed the Calendly widget directly

#### Project Links
Edit `src/data/projects.ts`:
- Update GitHub URLs: `links: { github: 'https://github.com/...' }`
- Update demo URLs: `links: { demo: 'https://...' }`
- Add case study links if available

### 3. Add Images

See `PLACEHOLDER_IMAGES.md` for complete image requirements.

**Quick Image Checklist:**
- [ ] Profile headshot: `public/images/profile/headshot.webp`
- [ ] Project hero images: `public/images/projects/*-hero.webp`
- [ ] Project screenshots: `public/images/projects/*-screens.webp`
- [ ] Creative work: `public/images/creative/**/*.webp`
- [ ] OG image: `public/og-image.webp` (1200x630px)
- [ ] Favicon: `public/favicon.ico`

**Image Optimization Tips:**
- Use WebP format for all images
- Compress before adding (target: <200KB for hero images)
- Use tools: Squoosh, ImageOptim, or TinyPNG

### 4. Add Resume
- Place your resume PDF at: `public/documents/Lee_Aulder_Resume.pdf`
- The About page will link to this automatically

### 5. Test Locally
```bash
npm run dev
```
Visit http://localhost:3000

### 6. Build for Production
```bash
npm run build
npm start
```

### 7. Deploy to Vercel
See `DEPLOYMENT.md` for detailed deployment instructions.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Troubleshooting

### Images Not Loading
- Ensure images are in the correct `public/images/` subdirectories
- Check file paths match exactly (case-sensitive)
- Verify WebP format

### TypeScript Errors
- Run `npm run build` to see all errors
- Ensure all imports are correct
- Check that all required props are provided

### Styling Issues
- Clear `.next` cache: `rm -rf .next`
- Restart dev server
- Check Tailwind config is correct

### Form Not Submitting
- Verify Formspree form ID is correct
- Check browser console for errors
- Ensure form action URL is accessible

## Next Steps After Setup

1. ✅ Install dependencies
2. ✅ Update placeholder content
3. ✅ Add images
4. ✅ Test locally
5. ✅ Deploy to Vercel
6. ✅ Configure custom domain (optional)
7. ✅ Set up analytics monitoring
