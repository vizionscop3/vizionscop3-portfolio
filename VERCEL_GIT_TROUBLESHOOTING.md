# Vercel + GitHub: Deployment Not Triggering on Push

When the repo is linked but pushes don’t create new deployments, use these checks and fixes.

---

## 1. Confirm what Vercel is deploying

- **Vercel** → **proof** → **Deployments**
- Check the **commit SHA and message** of “Production (Current)”.
- Your latest commit is: `f519de6` — *feat: update ResumeEmbed, projects data, add custom domain setup docs*

If that commit is **not** the one shown as Production, auto-deploy from Git isn’t working.

---

## 2. Trigger a deploy right now (workaround)

**Option A – Deploy Hook (good for CI or manual trigger)**

1. **Vercel** → **proof** → **Settings** → **Git** → **Deploy Hooks**
2. Use the existing hook for **main** (or create one).
3. Copy the hook URL and run:
   ```bash
   curl -X POST "YOUR_DEPLOY_HOOK_URL"
   ```
   That starts a new production deployment from the latest code on `main`.

**Option B – Redeploy from dashboard**

1. **Vercel** → **proof** → **Deployments**
2. Open the **current Production** deployment.
3. Click **⋮** (or “Redeploy”) → **Redeploy**.
4. Leave **“Use existing build cache”** **unchecked** so it builds from the latest commit.
5. Confirm; wait for the new deployment to finish.

---

## 3. Check Production Branch

1. **Vercel** → **proof** → **Settings** → **Build & Deployment** (or **Git**).
2. Find **“Production Branch”** (or equivalent).
3. Set it to **`main`** (same branch you push to).

If this was wrong, fix it and push again; the next push should trigger a deploy.

---

## 4. Reconnect the GitHub repo

Sometimes the link or webhook gets out of sync.

1. **Vercel** → **proof** → **Settings** → **Git**
2. If there’s **“Connected Repository”** or **“Disconnect”**, click **Disconnect**.
3. **Connect** again and choose **GitHub** → **vizionscop3/proof** (or the exact repo you use).
4. Ensure **repository_dispatch Events** stays **Enabled** (as in your current setup).

After reconnecting, push a small change (e.g. a comment in `README.md`) and see if a new deployment appears.

---

## 5. Check GitHub webhooks

1. **GitHub** → **vizionscop3/proof** → **Settings** → **Webhooks**
2. You should see a webhook whose URL contains **vercel.com** (or similar).
3. Click it and open **“Recent Deliveries”**.
4. For a recent **push** event, check:
   - **Response code** (e.g. 200 = OK).
   - If there are **4xx/5xx** or **failed** deliveries, the trigger is failing on GitHub’s side.

If there is **no** Vercel webhook, reconnect the repo in Vercel (step 4); that usually recreates it.

---

## 6. Check GitHub App access

1. **GitHub** → **Settings** (your profile) → **Applications** → **Installed GitHub Apps**
2. Find **Vercel** and open it.
3. Confirm **vizionscop3/proof** (or your portfolio repo) is in the list of repositories Vercel can access.
4. If the repo is missing, add it and save.

---

## 7. Repo and team names

- Vercel shows: **“Automatically created for pushes to `vizionscop3/proof`”**.
- Your local remote: `https://github.com/vizionscop3/proof.git`.

If your real repo is under a **different** user/org (e.g. **vizionscop3s**), then in Vercel you may have connected the wrong repo. In that case, disconnect and connect the **correct** GitHub repo.

---

## Quick checklist

| Check | Where | What to do |
|-------|--------|------------|
| Latest commit deployed? | Vercel → Deployments | If not `f519de6`, use Deploy Hook or Redeploy |
| Production branch = `main`? | Vercel → Settings → Git / Build | Set to `main` |
| Webhook present and succeeding? | GitHub → Repo → Settings → Webhooks | Reconnect in Vercel if missing; fix errors if failed |
| Vercel has repo access? | GitHub → Settings → Applications → Vercel | Add repo if needed |
| Right repo connected? | Vercel → Settings → Git | Should be `vizionscop3/proof` (or your actual repo) |

---

## After fixing

1. Push a small change to `main` (e.g. `git commit --allow-empty -m "chore: trigger Vercel" && git push origin main`).
2. In **Vercel** → **Deployments**, you should see a new deployment within a minute or two.
3. If it still doesn’t trigger, use the **Deploy Hook** or **Redeploy** until the webhook/connection issue is resolved.
