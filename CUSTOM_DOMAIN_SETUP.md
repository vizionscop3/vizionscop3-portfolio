# Connect Hostinger Domain to Vercel

Step-by-step guide to connect your Hostinger custom domain to your Vercel deployment.

## Prerequisites

- [ ] Vercel deployment is live (✅ You have: proof-lac.vercel.app)
- [ ] Hostinger domain is active
- [ ] Access to Hostinger hPanel
- [ ] Access to Vercel dashboard

---

## Step 1: Add Domain in Vercel

### 1.1 Go to Vercel Project Settings

1. Log into [vercel.com](https://vercel.com)
2. Go to your project dashboard
3. Click on your project: **"proof"** (or your project name)
4. Click **"Settings"** tab (top navigation)
5. Click **"Domains"** in the left sidebar

### 1.2 Add Your Domain

1. In the **"Domains"** section, you'll see an input field
2. Enter your domain (e.g., `vizionscop3.com` or `www.vizionscop3.com`)
3. Click **"Add"** button

### 1.3 Choose Domain Configuration

Vercel will show you DNS configuration options:

**Option A: Root Domain (vizionscop3.com)**
- Vercel will provide an **A record** with an IP address
- Example: `76.76.21.21` (Vercel's IP)

**Option B: Subdomain (www.vizionscop3.com)**
- Vercel will provide a **CNAME record**
- Example: `cname.vercel-dns.com`

**Recommended:** Add both root domain AND www subdomain for best results.

---

## Step 2: Configure DNS at Hostinger

### 2.1 Log into Hostinger

1. Go to [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Log in with your Hostinger credentials
3. Select your domain

### 2.2 Access DNS Settings

1. In hPanel, find **"DNS / Name Servers"** section
2. Click **"Manage"** or **"DNS Zone Editor"**
3. You'll see your current DNS records

### 2.3 Add Vercel DNS Records

#### For Root Domain (vizionscop3.com):

**Add A Record:**
- **Type:** `A`
- **Name:** `@` (or leave blank, depending on Hostinger interface)
- **Points to / Value:** The IP address from Vercel (e.g., `76.76.21.21`)
- **TTL:** `3600` (or default)
- Click **"Add Record"** or **"Save"**

#### For WWW Subdomain (www.vizionscop3.com):

**Add CNAME Record:**
- **Type:** `CNAME`
- **Name:** `www`
- **Points to / Value:** `cname.vercel-dns.com` (from Vercel)
- **TTL:** `3600` (or default)
- Click **"Add Record"** or **"Save"**

### 2.4 Remove Conflicting Records (If Any)

If you have existing A or CNAME records pointing elsewhere:
- Remove or update them to point to Vercel
- Keep other records (MX for email, TXT for verification, etc.)

---

## Step 3: Verify Domain in Vercel

### 3.1 Wait for DNS Propagation

After adding DNS records:
- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes **15-30 minutes** for most users

### 3.2 Check Verification Status

1. Go back to Vercel → Your Project → Settings → Domains
2. You'll see your domain with status:
   - **"Valid Configuration"** ✅ = Ready!
   - **"Pending"** = Still waiting for DNS
   - **"Invalid Configuration"** = Check DNS records

### 3.3 Vercel Auto-Provisioning

Once DNS is verified:
- Vercel automatically provisions SSL certificate
- HTTPS is enabled automatically
- Usually takes 5-10 minutes after DNS verification

---

## Step 4: Update Metadata URLs

Once your domain is verified and working:

### 4.1 Update Layout Metadata

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'), // ← Your actual domain
  // ...
  openGraph: {
    // ...
    url: 'https://yourdomain.com', // ← Your actual domain
  },
}
```

### 4.2 Commit and Push

```bash
git add src/app/layout.tsx
git commit -m "Update metadata URLs for custom domain"
git push origin main
```

Vercel will automatically redeploy with updated metadata.

---

## Step 5: Test Your Custom Domain

### 5.1 Verify Domain Works

1. Visit `https://yourdomain.com` in browser
2. Should redirect to your Vercel site
3. Check for HTTPS (lock icon in browser)

### 5.2 Test Both Versions

- `https://yourdomain.com` (root)
- `https://www.yourdomain.com` (www)

Both should work and redirect properly.

---

## Troubleshooting

### Domain Shows "Invalid Configuration"

**Possible Issues:**
1. DNS records not added correctly
2. DNS propagation not complete
3. Conflicting DNS records

**Solutions:**
1. Double-check DNS records match Vercel's instructions exactly
2. Wait longer (up to 48 hours)
3. Use DNS checker: [dnschecker.org](https://dnschecker.org)
4. Remove conflicting A/CNAME records

### DNS Propagation Check

Use these tools to verify DNS propagation:
- [dnschecker.org](https://dnschecker.org)
- [whatsmydns.net](https://www.whatsmydns.net)

Enter your domain and check if A/CNAME records are propagated globally.

### SSL Certificate Not Issued

**If SSL shows as pending:**
1. Wait 5-10 minutes after DNS verification
2. Check Vercel dashboard → Domains → SSL status
3. If still pending after 1 hour, contact Vercel support

### Site Not Loading

**If domain doesn't load:**
1. Verify DNS records are correct
2. Check DNS propagation status
3. Clear browser cache
4. Try incognito/private browsing
5. Check Vercel deployment status

---

## Hostinger-Specific Notes

### Hostinger DNS Interface

Hostinger's DNS interface may look like:
- **"DNS Zone Editor"**
- **"Advanced DNS"**
- **"DNS Management"**

All are the same - use whichever is available.

### Common Hostinger DNS Record Format

**A Record:**
```
Type: A
Host: @
Points to: 76.76.21.21
TTL: 3600
```

**CNAME Record:**
```
Type: CNAME
Host: www
Points to: cname.vercel-dns.com
TTL: 3600
```

### Email Considerations

If you use email with your domain:
- **Keep MX records** pointing to your email provider
- **Don't delete** existing MX, TXT, or other records
- **Only modify** A and CNAME records for web traffic

---

## Quick Reference

### Vercel Dashboard
- **URL:** [vercel.com/dashboard](https://vercel.com/dashboard)
- **Path:** Project → Settings → Domains

### Hostinger hPanel
- **URL:** [hpanel.hostinger.com](https://hpanel.hostinger.com)
- **Path:** Domain → DNS / Name Servers → Manage

### DNS Checker
- **Tool:** [dnschecker.org](https://dnschecker.org)
- **Use:** Verify DNS propagation globally

---

## Checklist

### Vercel Setup
- [ ] Added domain in Vercel Settings → Domains
- [ ] Copied DNS records from Vercel
- [ ] Noted IP address (for A record)
- [ ] Noted CNAME value (for www)

### Hostinger DNS
- [ ] Logged into Hostinger hPanel
- [ ] Opened DNS Zone Editor
- [ ] Added A record for root domain
- [ ] Added CNAME record for www subdomain
- [ ] Saved DNS changes
- [ ] Kept existing MX/email records

### Verification
- [ ] Waited for DNS propagation (15-30 min)
- [ ] Checked DNS propagation with dnschecker.org
- [ ] Verified domain in Vercel (shows "Valid Configuration")
- [ ] SSL certificate issued (automatic)
- [ ] Tested https://yourdomain.com
- [ ] Tested https://www.yourdomain.com
- [ ] Updated metadata URLs in code
- [ ] Committed and pushed changes

---

## After Setup

Once your domain is connected:

1. ✅ **Share your custom domain** instead of Vercel URL
2. ✅ **Update social media profiles** with new URL
3. ✅ **Submit to Google Search Console** with custom domain
4. ✅ **Update any external links** pointing to your portfolio
5. ✅ **Monitor analytics** in Vercel dashboard

---

## Need Help?

- **Vercel Docs:** [vercel.com/docs/custom-domains](https://vercel.com/docs/custom-domains)
- **Vercel Support:** Available in dashboard
- **Hostinger Support:** Available in hPanel
- **DNS Issues:** Use dnschecker.org to verify propagation

---

**Your site will be live at:** `https://yourdomain.com` 🎉
