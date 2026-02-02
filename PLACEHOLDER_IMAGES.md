# Placeholder Images Guide

Until actual images are added, the following placeholder structure should be maintained:

## Required Images

### Profile
- `public/images/profile/headshot.webp` (192x192px minimum, square)

### Projects

#### T-Trac (portfolio showcase)
- **Landing page:** https://ttrac.vercel.app/ — linked from project detail.
- **Screenshots:** Add app screenshots for visitors and employers:
  - `public/images/projects/ttrac-screenshot-1.png` (e.g. tracking screen)
  - `public/images/projects/ttrac-screenshot-2.png` (e.g. AI companion)
  - `public/images/projects/ttrac-screenshot-3.png` (e.g. onboarding)
  Then add these paths to `screenshots` in `src/data/projects.ts` for the `t-trac` project.
- **Demo video:** In `src/data/projects.ts`, set `demoVideo` to a YouTube or Vimeo URL:
  - YouTube: `https://www.youtube.com/watch?v=VIDEO_ID` or `https://www.youtube.com/embed/VIDEO_ID`
  - Vimeo: `https://vimeo.com/VIDEO_ID`
  The project detail page will embed it automatically.

- `public/images/projects/ttrac-hero.webp`
- `public/images/projects/ttrac-screens.webp`
- `public/images/projects/chessmaster-hero.webp`
- `public/images/projects/chessmaster-screens.webp`
- `public/images/projects/masjid-hero.webp`
- `public/images/projects/masjid-screens.webp`
- `public/images/projects/floorplan-hero.webp`
- `public/images/projects/floorplan-screens.webp`

### Creative Work - G.O.T.H
- `public/images/creative/goth/seer.webp`
- `public/images/creative/goth/duke.webp`
- `public/images/creative/goth/mama-patsy.webp`
- `public/images/creative/goth/cities/*.webp` (chakra city images)

### Creative Work - VizionScope
- `public/images/creative/vizionscope/*.webp` (artwork images)

### Fashion/Merch
- `public/images/fashion/*.webp` (merchandise images)

### Documents
- `public/documents/Lee_Aulder_Resume.pdf`

### Meta
- `public/og-image.webp` (1200x630px for OpenGraph)
- `public/favicon.ico`

## Image Specifications

### Format
- All images should be WebP format for optimal performance
- Use Next.js Image component for automatic optimization

### Dimensions
- Hero images: 1200x600px minimum
- Project cards: 800x600px minimum
- Profile: 400x400px (square)
- Screenshots: 1200x800px minimum
- OG image: 1200x630px

### Optimization
- Compress images before adding
- Use tools like Squoosh or ImageOptim
- Target file sizes:
  - Hero images: < 200KB
  - Card images: < 100KB
  - Thumbnails: < 50KB

## Temporary Placeholders

For development, you can use placeholder services:
```typescript
// Example placeholder URL
const placeholderImage = (width: number, height: number, text: string) => 
  `https://placehold.co/${width}x${height}/6C5CE7/FFFFFF?text=${encodeURIComponent(text)}`
```

Or create simple colored rectangles with text using image editing tools.
