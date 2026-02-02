# Vercel Deployment Checklist

Quick checklist to track your Vercel deployment progress.

## Pre-Deployment

### Code Ready
- [ ] Code pushed to GitHub
- [ ] `next.config.mjs` configured (static export commented out ✅)
- [ ] All dependencies in `package.json`
- [ ] Tested build locally: `npm run build` ✅
- [ ] No TypeScript errors
- [ ] Analytics component ready

### Vercel Account
- [ ] Logged into Vercel
- [ ] GitHub account connected
- [ ] Repository accessible

---

## Deployment Steps

### Step 1: Import Project
- [ ] Click "+ Add New..." → "Project"
- [ ] Found repository: `proof` (or your repo name)
- [ ] Clicked "Import"

### Step 2: Configure Settings
- [ ] Project name set (or using default)
- [ ] Framework: **Next.js** (auto-detected)
- [ ] Root Directory: `./` (correct)
- [ ] Build Command: `next build` (correct)
- [ ] Output Directory: `.next` (correct for Vercel)
- [ ] Install Command: `npm install` (correct)

### Step 3: Deploy
- [ ] Clicked "Deploy"
- [ ] Build started
- [ ] Build completed successfully ✅
- [ ] Deployment status: "Ready"

### Step 4: Verify
- [ ] Site loads at Vercel URL
- [ ] Home page works
- [ ] Navigation works
- [ ] Project pages load
- [ ] "Coming Soon" overlays visible
- [ ] Images display
- [ ] Mobile menu works
- [ ] All pages accessible

---

## Post-Deployment

### Update Metadata
- [ ] Copied Vercel URL
- [ ] Updated `src/app/layout.tsx` metadata URLs
- [ ] Committed and pushed changes
- [ ] Vercel auto-redeployed

### Custom Domain (Optional)
- [ ] Added domain in Vercel Settings → Domains
- [ ] Got DNS records from Vercel
- [ ] Added DNS records at Hostinger
- [ ] Domain verified in Vercel
- [ ] SSL certificate active
- [ ] Updated metadata with custom domain

### Testing
- [ ] All pages load correctly
- [ ] No 404 errors
- [ ] Images optimize correctly
- [ ] Mobile responsive
- [ ] Performance good
- [ ] Analytics tracking (check after a few minutes)

---

## Quick Actions

### View Your Site
URL: `https://_____________________.vercel.app`

### View Analytics
1. Vercel Dashboard → Your Project → Analytics tab

### View Deployments
1. Vercel Dashboard → Your Project → Deployments tab

### Update Site
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```
(Deploys automatically!)

---

## Troubleshooting

If build fails:
- [ ] Check build logs in Vercel
- [ ] Test build locally: `npm run build`
- [ ] Fix any errors
- [ ] Push fixes and redeploy

If site doesn't load:
- [ ] Check deployment status
- [ ] Verify URL is correct
- [ ] Check browser console for errors
- [ ] Review Vercel logs

---

**Status:** ⬜ Not Started | 🟡 In Progress | ✅ Complete

**Current Step:** _________________________

**Deployment URL:** _________________________

**Notes:**
_________________________________________
_________________________________________
