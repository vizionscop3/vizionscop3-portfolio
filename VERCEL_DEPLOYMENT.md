# Vercel Deployment Guide - Step by Step

Complete guide for deploying your Next.js portfolio to Vercel.

## ✅ Pre-Deployment Checklist

Before starting, verify:
- [ ] You're logged into Vercel
- [ ] Your code is pushed to GitHub
- [ ] Repository is accessible
- [ ] `next.config.mjs` is configured (static export is commented out - correct for Vercel)
- [ ] All dependencies are in `package.json`

---

## Step 1: Connect Your GitHub Repository

### 1.1 Go to Vercel Dashboard

1. Visit [vercel.com](https://vercel.com)
2. Click **"Log in"** (if not already logged in)
3. Sign in with your GitHub account (recommended)

### 1.2 Import Project

1. Click **"+ Add New..."** button (top right)
2. Select **"Project"**
3. You'll see a list of your GitHub repositories
4. Find **`proof`** (or your repository name)
5. Click **"Import"** next to your repository

---

## Step 2: Configure Project Settings

### 2.1 Project Configuration

Vercel will auto-detect Next.js settings. Verify:

**Project Name:**
- Default: `proof` (or your repo name)
- You can change it to: `vizionscop3-portfolio` or `leeaulder-portfolio`
- This becomes part of your URL: `https://your-project-name.vercel.app`

**Framework Preset:**
- Should auto-detect: **Next.js**
- If not, select **"Next.js"** from dropdown

**Root Directory:**
- Leave as **`./`** (root of repository)
- Only change if your Next.js app is in a subdirectory

**Build Command:**
- Auto-filled: `next build`
- ✅ This is correct - don't change

**Output Directory:**
- Auto-filled: `.next`
- ✅ This is correct for Vercel - don't change
- ⚠️ Note: This is different from static export (which uses `out/`)

**Install Command:**
- Auto-filled: `npm install` or `yarn install`
- ✅ This is correct

### 2.2 Environment Variables

For now, you don't need any environment variables. Click **"Skip"** or leave empty.

If you add forms or APIs later, you can add them in:
- Project Settings → Environment Variables

---

## Step 3: Deploy

### 3.1 Start Deployment

1. Review all settings
2. Click **"Deploy"** button (bottom right)
3. Vercel will:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Build your project (`next build`)
   - Deploy to production

### 3.2 Watch the Build

You'll see a build log showing:
```
Cloning repository...
Installing dependencies...
Building project...
Deploying...
```

**Build time:** Usually 2-5 minutes

---

## Step 4: Verify Deployment

### 4.1 Check Build Status

Once deployment completes, you'll see:
- ✅ **"Ready"** status (green checkmark)
- Your deployment URL (e.g., `https://proof.vercel.app`)

### 4.2 Visit Your Site

1. Click the deployment URL
2. Or click **"Visit"** button
3. Your portfolio should load!

### 4.3 Test Your Site

Verify:
- [ ] Home page loads correctly
- [ ] Navigation works
- [ ] Project pages load with "Coming Soon" overlays
- [ ] About page displays
- [ ] Images load properly
- [ ] Mobile menu works
- [ ] All links work

---

## Step 5: Update Metadata URLs (Important!)

### 5.1 Get Your Vercel URL

Your site URL will be:
- `https://your-project-name.vercel.app`
- Or custom domain if you add one

### 5.2 Update Layout Metadata

Update `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://your-project-name.vercel.app'), // ← Update this
  // ...
  openGraph: {
    // ...
    url: 'https://your-project-name.vercel.app', // ← Update this
  },
}
```

### 5.3 Commit and Push

```bash
git add src/app/layout.tsx
git commit -m "Update metadata URLs for Vercel deployment"
git push origin main
```

Vercel will automatically redeploy!

---

## Step 6: Configure Custom Domain (Optional)

### 6.1 Add Domain in Vercel

1. Go to your project in Vercel dashboard
2. Click **"Settings"** tab
3. Click **"Domains"** in left sidebar
4. Enter your domain (e.g., `vizionscop3.com`)
5. Click **"Add"**

### 6.2 Configure DNS

Vercel will show you DNS records to add:

**Option A: Root Domain (vizionscop3.com)**
- Type: `A`
- Name: `@`
- Value: Vercel-provided IP address

**Option B: Subdomain (www.vizionscop3.com)**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

### 6.3 Update DNS at Hostinger

1. Log into Hostinger hPanel
2. Go to **"DNS Zone Editor"** or **"Advanced DNS"**
3. Add the DNS records from Vercel
4. Save changes

### 6.4 Wait for DNS Propagation

- Usually takes 5 minutes to 48 hours
- Vercel will show "Valid Configuration" when ready
- SSL certificate is automatically provisioned

### 6.5 Update Metadata Again

Once domain is active, update `src/app/layout.tsx` with your custom domain.

---

## Step 7: Enable Analytics (Already Set Up!)

Your site already has Vercel Analytics configured via `VercelAnalytics` component.

To view analytics:
1. Go to Vercel dashboard → Your project
2. Click **"Analytics"** tab
3. View visitor stats, page views, etc.

---

## Automatic Deployments

### How It Works

Every time you push to `main` branch:
1. Vercel detects the push
2. Automatically runs build
3. Deploys new version
4. Updates your live site

**No manual deployment needed!**

### Preview Deployments

When you create a Pull Request:
- Vercel creates a preview deployment
- You get a unique URL for that PR
- Perfect for testing before merging

---

## Project Settings Overview

### Settings You Can Configure

**General:**
- Project name
- Framework preset
- Root directory
- Build & output settings

**Environment Variables:**
- Add secrets, API keys, etc.
- Different values for Production, Preview, Development

**Domains:**
- Add custom domains
- Configure redirects
- Set up wildcard domains

**Analytics:**
- View visitor statistics
- Page performance metrics
- Real-time analytics

**Functions:**
- Serverless function settings
- Edge function configuration

---

## Troubleshooting

### Build Fails

**Problem:** Build fails with errors

**Solutions:**
1. Check build logs in Vercel dashboard
2. Test build locally: `npm run build`
3. Fix any TypeScript errors
4. Ensure all dependencies are in `package.json`
5. Check for missing environment variables

**Common Issues:**
- TypeScript errors → Fix in code
- Missing dependencies → Add to `package.json`
- Build timeout → Optimize build (rare)

### Site Shows 404

**Problem:** Pages return 404

**Solutions:**
1. Verify `next.config.mjs` doesn't have `output: 'export'` enabled
2. Check that routes are properly configured
3. Ensure `generateStaticParams` is working for dynamic routes
4. Check Vercel build logs for warnings

### Images Not Loading

**Problem:** Images don't display

**Solutions:**
1. Verify images are in `public/` directory
2. Check image paths are correct
3. Ensure Next.js Image component is used correctly
4. Check Vercel build logs for image optimization errors

### Analytics Not Working

**Problem:** Analytics not tracking

**Solutions:**
1. Verify `VercelAnalytics` component is in layout
2. Check that Analytics package is installed: `npm list @vercel/analytics`
3. Wait a few minutes after deployment
4. Check Analytics tab in Vercel dashboard

---

## Performance Optimization

### Vercel Optimizations (Automatic)

Vercel automatically:
- ✅ Optimizes images
- ✅ Minifies JavaScript/CSS
- ✅ Enables edge caching
- ✅ Provides global CDN
- ✅ Automatic HTTPS
- ✅ Compression

### Manual Optimizations

Your code already includes:
- ✅ Next.js Image component
- ✅ Static generation where possible
- ✅ Optimized build configuration

---

## Monitoring & Maintenance

### View Deployments

1. Go to Vercel dashboard → Your project
2. Click **"Deployments"** tab
3. See all deployment history
4. Click any deployment to see details

### View Logs

1. Click on a deployment
2. View build logs
3. View runtime logs (if using serverless functions)

### Performance Monitoring

1. Go to **"Analytics"** tab
2. View:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

---

## Quick Reference

### Deployment URLs

- **Production:** `https://your-project-name.vercel.app`
- **Preview:** `https://your-project-name-git-branch-username.vercel.app`
- **Custom Domain:** `https://yourdomain.com`

### Important Files

- `next.config.mjs` - Next.js configuration
- `package.json` - Dependencies and scripts
- `src/app/layout.tsx` - Root layout with metadata
- `.vercel/` - Vercel project configuration (auto-created)

### Useful Commands

```bash
# Test build locally
npm run build

# Start production server locally
npm start

# Check Vercel CLI (if installed)
vercel --version

# Deploy via CLI (alternative to GitHub)
vercel
```

---

## Post-Deployment Checklist

- [ ] Site loads at Vercel URL
- [ ] All pages work correctly
- [ ] Navigation functions
- [ ] Images display properly
- [ ] Mobile responsive
- [ ] Metadata URLs updated
- [ ] Analytics working (check after a few minutes)
- [ ] Custom domain added (if applicable)
- [ ] DNS configured correctly
- [ ] HTTPS active (automatic on Vercel)
- [ ] Performance tested (PageSpeed Insights)

---

## Next Steps

1. ✅ Share your portfolio URL
2. ✅ Update social media profiles
3. ✅ Submit to Google Search Console
4. ✅ Monitor analytics
5. ✅ Set up custom domain (if desired)
6. ✅ Continue updating content

---

## Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support:** Available in dashboard
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

## 🎉 You're Live!

Your portfolio is now deployed on Vercel with:
- ✅ Automatic deployments
- ✅ Global CDN
- ✅ HTTPS
- ✅ Analytics
- ✅ Preview deployments

**Congratulations!** 🚀
