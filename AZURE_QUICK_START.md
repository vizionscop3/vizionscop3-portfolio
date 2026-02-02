# Azure Deployment Quick Start

## 🚀 Fast Track to Deployment

### Step 1: Enable Static Export (2 minutes)

Edit `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'export',        // ← Uncomment this line
  images: {
    unoptimized: true,     // ← Uncomment this line
    // ... rest of config
  }
}
```

### Step 2: Test Build (1 minute)

```bash
npm run build
```

Verify `out/` directory is created. If successful, proceed.

### Step 3: Create Azure Static Web App (5 minutes)

1. Go to [portal.azure.com](https://portal.azure.com)
2. Click **"+ Create a resource"**
3. Search **"Static Web App"** → Click **"Create"**
4. Fill in:
   - **Name:** `vizionscop3-portfolio`
   - **Plan:** Free
   - **Region:** Closest to you
   - **Source:** GitHub
   - **Repository:** Your repo
   - **Branch:** `main`
   - **Build Presets:** Next.js
5. Click **"Create"**

### Step 4: Wait for Deployment (3-5 minutes)

- Azure creates GitHub Actions workflow
- First deployment runs automatically
- Check GitHub → Actions tab for progress

### Step 5: Access Your Site

1. Go to Azure Portal → Your Static Web App
2. Copy the **URL** (e.g., `https://vizionscop3-portfolio.azurestaticapps.net`)
3. Visit in browser - your site is live! 🎉

---

## ✅ That's It!

Your portfolio is now deployed on Azure. Every push to `main` branch automatically deploys.

---

## Next Steps (Optional)

- [ ] Add custom domain (see `AZURE_DEPLOYMENT.md`)
- [ ] Update metadata URLs with your Azure domain
- [ ] Test all pages
- [ ] Share your portfolio!

---

## Need Help?

See `AZURE_DEPLOYMENT.md` for detailed instructions and troubleshooting.
