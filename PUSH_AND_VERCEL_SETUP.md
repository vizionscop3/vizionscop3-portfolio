# Push from vizionscop3-portfolio and Connect Vercel

This folder is now its **own Git repo**. Push from here so Vercel deploys from the same code.

---

## 1. Create a new GitHub repo

1. Go to **https://github.com/new**
2. **Repository name:** `vizionscop3-portfolio` (or another name you prefer)
3. **Public**, no README (this folder already has one)
4. Click **Create repository**

---

## 2. Add remote and push (from this folder)

In a terminal, **from inside vizionscop3-portfolio**:

```bash
cd /Users/vizion/Developer/PORTFOLIO/vizionscop3-portfolio

# Add your new repo as origin (replace with your actual repo URL)
git remote add origin https://github.com/vizionscop3/vizionscop3-portfolio.git

# Push to main
git push -u origin main
```

If you used a different repo name, use that URL instead.

---

## 3. Connect Vercel to this repo

1. **Vercel** → project **proof** → **Settings** → **Git**
2. Under **Connected Git Repository**, click **Disconnect** (to disconnect from **proof**)
3. Click **Connect Git Repository** → **GitHub** → select **vizionscop3/vizionscop3-portfolio**
4. **Root Directory:** leave **empty** (the app is at the repo root now)
5. **Production Branch:** `main`
6. Save

After this, every push from **vizionscop3-portfolio** to **main** will trigger a Vercel deployment.

---

## 4. From now on: work and push from this folder

- **Open in VS Code:** `File` → `Open Folder` → choose **vizionscop3-portfolio**
- **Commit and push** from this folder; that repo is what Vercel deploys
- The parent **PORTFOLIO** folder and **proof** repo can stay for other docs; the live app comes from **vizionscop3-portfolio** and its GitHub repo

---

## Summary

| What | Where |
|------|--------|
| **App code** | This folder: `vizionscop3-portfolio` |
| **Git repo** | This folder (its own `.git`) |
| **Push to** | **GitHub:** vizionscop3/vizionscop3-portfolio |
| **Vercel** | Connected to vizionscop3/vizionscop3-portfolio, Root Directory = empty |
