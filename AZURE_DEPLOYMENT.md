# Microsoft Azure Deployment Guide

Complete step-by-step guide for deploying your Next.js portfolio to Microsoft Azure.

## Prerequisites Checklist

Before starting, ensure you have:
- [ ] Microsoft Azure account (free tier available)
- [ ] Azure CLI installed locally (optional but recommended)
- [ ] GitHub account (for automated deployments)
- [ ] Your domain name (optional, Azure provides free subdomain)
- [ ] Node.js 18+ installed locally for testing builds

---

## Deployment Options

### Option 1: Azure Static Web Apps (Recommended)
**Best for:** Static Next.js exports, automatic deployments, free tier available
**Pros:** 
- Free tier with generous limits
- Automatic HTTPS
- Global CDN
- GitHub Actions integration
- Custom domains supported

### Option 2: Azure App Service
**Best for:** Full Next.js with server-side features
**Pros:**
- Full Node.js runtime
- Supports API routes
- Easy scaling
- Custom domains

**We'll use Option 1 (Static Web Apps) as it's simpler and free.**

---

## Option 1: Azure Static Web Apps Deployment

### Step 1: Prepare Your Next.js App for Static Export

#### 1.1 Update `next.config.mjs`

Open `next.config.mjs` and update it:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  trailingSlash: false,
}

export default nextConfig
```

#### 1.2 Update Metadata URLs

Update `src/app/layout.tsx` to use your Azure domain:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://your-app-name.azurestaticapps.net'), // Update after deployment
  // ... rest of metadata
  openGraph: {
    // ...
    url: 'https://your-app-name.azurestaticapps.net',
  },
}
```

#### 1.3 Test Static Build Locally

```bash
npm run build
```

Verify that the `out/` directory is created. Test locally:

```bash
# Install a simple static server
npm install -g serve

# Serve the static build
serve out
```

Visit `http://localhost:3000` to verify everything works.

---

### Step 2: Create Azure Static Web App via Azure Portal

#### 2.1 Sign In to Azure Portal

1. Go to [portal.azure.com](https://portal.azure.com)
2. Sign in with your Microsoft account
3. If you don't have an account, create one (free tier available)

#### 2.2 Create Static Web App Resource

1. Click **"+ Create a resource"** (top left)
2. Search for **"Static Web App"**
3. Click **"Static Web Apps"** → **"Create"**

#### 2.3 Configure Basic Settings

**Subscription:**
- Select your Azure subscription (or create free one)

**Resource Group:**
- Click **"Create new"**
- Name: `vizionscop3-portfolio-rg`
- Click **"OK"**

**Name:**
- Enter: `vizionscop3-portfolio` (or your preferred name)
- Must be globally unique (Azure will check availability)

**Plan type:**
- Select **"Free"** (sufficient for portfolio sites)

**Region:**
- Select closest region (e.g., `East US`, `West Europe`)

#### 2.4 Configure Deployment Details

**Deployment details:**
- **Source:** Select **"GitHub"** (or "Other" if not using GitHub)

**GitHub account:**
- Click **"Sign in with GitHub"**
- Authorize Azure to access your GitHub account

**Organization:**
- Select your GitHub username or organization

**Repository:**
- Select: `proof` (or your repository name)

**Branch:**
- Select: `main`

**Build Presets:**
- Select: **"Next.js"**

Azure will auto-populate:
- **App location:** `/`
- **Api location:** Leave empty (not needed for static export)
- **Output location:** `out`

#### 2.5 Review and Create

1. Click **"Review + create"**
2. Review all settings
3. Click **"Create"**

**Wait 2-3 minutes** for Azure to:
- Create the resource
- Set up GitHub Actions workflow
- Perform initial deployment

---

### Step 3: Verify GitHub Actions Workflow

#### 3.1 Check GitHub Repository

1. Go to your GitHub repository: `https://github.com/vizionscop3/proof`
2. Click **"Actions"** tab
3. You should see a workflow named **"Azure Static Web Apps CI/CD"**
4. Click on the workflow run to see deployment progress

#### 3.2 Verify Workflow File

Azure should have created `.github/workflows/azure-static-web-apps-*.yml`

If it doesn't exist, create it manually:

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
          lfs: false
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_<YOUR_APP_NAME> }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          api_location: ""
          output_location: "out"
```

**Note:** Replace `<YOUR_APP_NAME>` with your actual app name.

---

### Step 4: Update Next.js Config for Azure

#### 4.1 Enable Static Export

Update `next.config.mjs` (already done in Step 1.1):

```javascript
output: 'export',
images: {
  unoptimized: true,
}
```

#### 4.2 Update package.json Build Script

Ensure your `package.json` has:

```json
{
  "scripts": {
    "build": "next build",
    "export": "next build"
  }
}
```

---

### Step 5: Configure Custom Domain (Optional)

#### 5.1 Get Your Azure URL

1. Go to Azure Portal
2. Navigate to your Static Web App
3. Copy the **"URL"** (e.g., `https://vizionscop3-portfolio.azurestaticapps.net`)

#### 5.2 Add Custom Domain

1. In Azure Portal, go to your Static Web App
2. Click **"Custom domains"** in left menu
3. Click **"+ Add"**
4. Enter your domain (e.g., `vizionscop3.com`)
5. Choose verification method:
   - **TXT record** (recommended)
   - **CNAME record**
6. Add the DNS record to your domain provider (Hostinger)
7. Click **"Validate"**
8. Wait for validation (can take up to 48 hours, usually faster)

#### 5.3 Update DNS at Hostinger

1. Log into Hostinger hPanel
2. Go to **"DNS Zone Editor"** or **"Advanced DNS"**
3. Add the DNS record provided by Azure:
   - **Type:** TXT or CNAME
   - **Name:** `@` or your subdomain
   - **Value:** Azure-provided value
4. Save changes

#### 5.4 Update Metadata

Once domain is verified, update `src/app/layout.tsx`:

```typescript
metadataBase: new URL('https://yourdomain.com'),
```

Commit and push to trigger redeployment.

---

### Step 6: Monitor and Manage

#### 6.1 View Deployment Status

1. Azure Portal → Your Static Web App → **"Overview"**
2. Check **"Deployment history"**
3. View **"URL"** to access your site

#### 6.2 View Logs

1. Azure Portal → Your Static Web App → **"Logs"**
2. View real-time logs
3. Check for errors

#### 6.3 GitHub Actions

Monitor deployments:
- GitHub → Your Repo → **"Actions"**
- View workflow runs
- Check build logs

---

## Option 2: Azure App Service Deployment

If you need server-side features (API routes, etc.):

### Step 1: Create App Service

1. Azure Portal → **"+ Create a resource"**
2. Search **"Web App"**
3. Click **"Create"**

### Step 2: Configure App Service

**Subscription:** Your subscription
**Resource Group:** `vizionscop3-portfolio-rg`
**Name:** `vizionscop3-portfolio-app`
**Publish:** Code
**Runtime stack:** Node 18 LTS
**Operating System:** Linux
**Region:** Your preferred region
**App Service Plan:** Create new (Free tier available)

### Step 3: Deploy via GitHub

1. After creation, go to your App Service
2. **"Deployment Center"** → **"GitHub"**
3. Authorize and select repository
4. Configure:
   - **Branch:** `main`
   - **Build provider:** GitHub Actions
5. Click **"Save"**

### Step 4: Configure Build Settings

Create `.github/workflows/azure-webapps-deploy.yml`:

```yaml
name: Deploy to Azure App Service

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          NODE_ENV: production
      
      - name: Deploy to Azure
        uses: azure/webapps-deploy@v2
        with:
          app-name: 'vizionscop3-portfolio-app'
          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
          package: '.'
```

### Step 5: Configure App Settings

In Azure Portal → Your App Service → **"Configuration"**:

Add application settings:
- `NODE_ENV`: `production`
- `PORT`: `8080` (Azure default)

---

## Pre-Deployment Checklist

### Code Preparation
- [ ] Updated `next.config.mjs` with `output: 'export'` and `images.unoptimized: true`
- [ ] Updated metadata URLs in `src/app/layout.tsx`
- [ ] Tested static build locally (`npm run build`)
- [ ] Verified `out/` directory is created
- [ ] All images load correctly
- [ ] All pages work in static build
- [ ] Removed or made Analytics conditional (already done)

### Azure Account Setup
- [ ] Created Azure account
- [ ] Verified subscription (free tier OK)
- [ ] Installed Azure CLI (optional)

### GitHub Setup
- [ ] Repository is pushed to GitHub
- [ ] Main branch is up to date
- [ ] GitHub Actions enabled in repository settings

### Domain Setup (Optional)
- [ ] Domain name ready
- [ ] Access to domain DNS settings (Hostinger)

---

## Deployment Checklist

### Static Web Apps
- [ ] Created Static Web App resource in Azure
- [ ] Connected GitHub repository
- [ ] Configured build settings (Next.js preset)
- [ ] Verified GitHub Actions workflow created
- [ ] First deployment completed successfully
- [ ] Site accessible at Azure URL
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Navigation works
- [ ] Mobile menu functions
- [ ] Custom domain added (if applicable)
- [ ] DNS records configured at Hostinger
- [ ] Domain verified in Azure
- [ ] HTTPS certificate active

### App Service (If using)
- [ ] Created App Service resource
- [ ] Configured Node.js runtime
- [ ] Connected GitHub repository
- [ ] GitHub Actions workflow created
- [ ] Application settings configured
- [ ] First deployment successful
- [ ] Site accessible
- [ ] Custom domain configured

---

## Post-Deployment Verification

### Functional Testing
- [ ] Home page loads
- [ ] All navigation links work
- [ ] Project pages load with "Coming Soon" overlays
- [ ] About page displays correctly
- [ ] Resume embed works (if applicable)
- [ ] Contact form works (if applicable)
- [ ] Creative page loads
- [ ] Mobile responsive design works
- [ ] Images optimize and load correctly

### Performance Testing
- [ ] Run PageSpeed Insights: [https://pagespeed.web.dev](https://pagespeed.web.dev)
- [ ] Target scores:
  - Performance: > 80
  - Accessibility: > 90
  - Best Practices: > 90
  - SEO: > 90

### Security Testing
- [ ] HTTPS is active (check for lock icon)
- [ ] No mixed content warnings
- [ ] Security headers present (check in browser dev tools)

---

## Troubleshooting

### Build Failures

**Problem:** GitHub Actions build fails
- **Solution:** 
  1. Check workflow logs in GitHub Actions
  2. Verify `next.config.mjs` has `output: 'export'`
  3. Ensure `images.unoptimized: true` is set
  4. Check for TypeScript errors: `npm run build` locally

**Problem:** "Output location 'out' not found"
- **Solution:**
  1. Verify `output: 'export'` in `next.config.mjs`
  2. Check GitHub Actions workflow has `output_location: "out"`
  3. Ensure build completes successfully

### Deployment Issues

**Problem:** Site shows 404 errors
- **Solution:**
  1. Check Azure Static Web Apps routing configuration
  2. Verify `trailingSlash` setting in `next.config.mjs`
  3. Check `out/` directory structure

**Problem:** Images not loading
- **Solution:**
  1. Verify `images.unoptimized: true` in config
  2. Check image paths are relative (not absolute)
  3. Verify images are in `public/` directory

### Domain Issues

**Problem:** Custom domain not verifying
- **Solution:**
  1. Wait 24-48 hours for DNS propagation
  2. Verify DNS records are correct at Hostinger
  3. Use DNS checker tools to verify propagation
  4. Try re-validating in Azure Portal

**Problem:** HTTPS certificate not issued
- **Solution:**
  1. Wait for automatic certificate provisioning (can take hours)
  2. Check domain verification status
  3. Contact Azure support if issues persist

---

## Maintenance

### Updating Your Site

1. Make changes locally
2. Test build: `npm run build`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
4. GitHub Actions automatically deploys
5. Wait 2-5 minutes for deployment
6. Verify changes on live site

### Monitoring

- **Azure Portal:** View deployment history, logs, metrics
- **GitHub Actions:** Monitor build and deployment status
- **Azure Static Web Apps Analytics:** View visitor stats (if enabled)

### Scaling

Free tier limits:
- 100 GB bandwidth/month
- Unlimited custom domains
- 1 staging environment

If you exceed limits, upgrade to Standard plan ($9/month).

---

## Cost Estimate

### Free Tier (Sufficient for Portfolio)
- **Static Web Apps:** Free
- **Bandwidth:** 100 GB/month (usually enough)
- **Storage:** 1 GB (plenty for static site)
- **Custom Domains:** Unlimited
- **Total:** $0/month

### If You Need More
- **Standard Plan:** ~$9/month
- Includes more bandwidth and features

---

## Next Steps After Deployment

1. ✅ Share your portfolio URL
2. ✅ Update social media profiles with new URL
3. ✅ Submit to search engines (Google Search Console)
4. ✅ Set up Google Analytics (optional)
5. ✅ Monitor performance and user feedback
6. ✅ Regularly update project content

---

## Support Resources

- **Azure Documentation:** [docs.microsoft.com/azure/static-web-apps](https://docs.microsoft.com/azure/static-web-apps)
- **Azure Support:** Available in Azure Portal
- **GitHub Actions Docs:** [docs.github.com/actions](https://docs.github.com/actions)
- **Next.js Deployment:** [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

---

## Quick Reference Commands

```bash
# Test build locally
npm run build
serve out

# Check Azure CLI (if installed)
az --version

# Login to Azure (if using CLI)
az login

# List your Static Web Apps
az staticwebapp list

# View deployment status
az staticwebapp show --name vizionscop3-portfolio --resource-group vizionscop3-portfolio-rg
```

---

**Ready to deploy?** Start with Step 1 and work through the checklist! 🚀
