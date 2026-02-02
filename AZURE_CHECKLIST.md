# Azure Deployment Quick Checklist

Use this checklist to track your deployment progress.

## Pre-Deployment Setup

### Code Preparation
- [ ] Update `next.config.mjs`:
  - [ ] Add `output: 'export'`
  - [ ] Add `images.unoptimized: true`
- [ ] Update `src/app/layout.tsx` metadata URLs
- [ ] Test build locally: `npm run build`
- [ ] Verify `out/` directory created
- [ ] Test static build: `serve out`
- [ ] All pages work correctly
- [ ] All images display

### Azure Account
- [ ] Create Azure account at [portal.azure.com](https://portal.azure.com)
- [ ] Verify subscription (free tier OK)
- [ ] Note your Azure subscription name

### GitHub
- [ ] Repository pushed to GitHub
- [ ] Main branch is up to date
- [ ] GitHub Actions enabled in repo settings

---

## Azure Static Web App Creation

### Step 1: Create Resource
- [ ] Click "+ Create a resource"
- [ ] Search "Static Web App"
- [ ] Click "Create"

### Step 2: Basic Settings
- [ ] Subscription: Selected
- [ ] Resource Group: Created new (`vizionscop3-portfolio-rg`)
- [ ] Name: `vizionscop3-portfolio` (or your choice)
- [ ] Plan type: **Free**
- [ ] Region: Selected (closest to you)

### Step 3: Deployment
- [ ] Source: **GitHub**
- [ ] Signed in with GitHub
- [ ] Organization: Selected
- [ ] Repository: `proof` (or your repo)
- [ ] Branch: `main`
- [ ] Build Presets: **Next.js**

### Step 4: Build Configuration
- [ ] App location: `/` (auto-filled)
- [ ] Api location: (empty)
- [ ] Output location: `out` (auto-filled)

### Step 5: Create
- [ ] Click "Review + create"
- [ ] Review all settings
- [ ] Click "Create"
- [ ] Wait 2-3 minutes for creation

---

## Verify Deployment

### GitHub Actions
- [ ] Go to GitHub repo → "Actions" tab
- [ ] See "Azure Static Web Apps CI/CD" workflow
- [ ] Workflow run shows "green checkmark" (success)
- [ ] Deployment completed

### Azure Portal
- [ ] Go to Azure Portal → Your Static Web App
- [ ] Click "Overview"
- [ ] Copy the URL (e.g., `https://vizionscop3-portfolio.azurestaticapps.net`)
- [ ] Visit URL in browser
- [ ] Site loads correctly

### Site Verification
- [ ] Home page loads
- [ ] Navigation works
- [ ] Project pages load
- [ ] "Coming Soon" overlays visible
- [ ] About page works
- [ ] Images display
- [ ] Mobile responsive
- [ ] HTTPS active (lock icon)

---

## Custom Domain (Optional)

### Azure Configuration
- [ ] Go to Static Web App → "Custom domains"
- [ ] Click "+ Add"
- [ ] Enter your domain
- [ ] Choose verification method (TXT or CNAME)
- [ ] Copy DNS record values

### Hostinger DNS
- [ ] Log into Hostinger hPanel
- [ ] Go to "DNS Zone Editor"
- [ ] Add DNS record from Azure
- [ ] Save changes

### Verification
- [ ] Return to Azure Portal
- [ ] Click "Validate"
- [ ] Wait for verification (can take hours)
- [ ] Domain shows "Verified" status
- [ ] Update metadata URLs in code
- [ ] Commit and push changes

---

## Post-Deployment

### Testing
- [ ] All pages load
- [ ] Navigation works
- [ ] Images display
- [ ] Mobile menu works
- [ ] Forms work (if applicable)
- [ ] No console errors

### Performance
- [ ] Run PageSpeed Insights
- [ ] Performance score > 80
- [ ] Accessibility score > 90
- [ ] SEO score > 90

### Monitoring
- [ ] Check Azure Portal metrics
- [ ] Monitor GitHub Actions
- [ ] Set up alerts (optional)

---

## Troubleshooting

If deployment fails:
- [ ] Check GitHub Actions logs
- [ ] Verify `next.config.mjs` settings
- [ ] Test build locally: `npm run build`
- [ ] Check Azure Portal logs
- [ ] Review error messages

If site doesn't load:
- [ ] Verify GitHub Actions succeeded
- [ ] Check Azure Static Web App status
- [ ] Verify URL is correct
- [ ] Check browser console for errors

If images don't load:
- [ ] Verify `images.unoptimized: true` in config
- [ ] Check image paths in `public/` directory
- [ ] Verify images are committed to GitHub

---

## Quick Commands

```bash
# Test build
npm run build

# Test static site locally
npm install -g serve
serve out

# Commit and push (triggers auto-deploy)
git add .
git commit -m "Update portfolio"
git push origin main
```

---

**Status:** ⬜ Not Started | 🟡 In Progress | ✅ Complete

**Current Step:** _________________________

**Notes:**
_________________________________________
_________________________________________
_________________________________________
