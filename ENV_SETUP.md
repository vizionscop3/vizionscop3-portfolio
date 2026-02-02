# Environment Variables Setup Guide

This document lists all environment variables needed for the portfolio application.

## Quick Start

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Open `.env.local` and fill in your values** (see sections below)

3. **Restart your dev server** after adding variables:
   ```bash
   npm run dev
   ```

---

## Required Environment Variables

### Google Apps Script (Contact Form)

**Variable:** `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`

**Description:** Web App URL from your deployed Google Apps Script that handles contact form submissions.

**How to get it:**
1. Deploy the `google-apps-script.js` as a Web App (see `GOOGLE_SHEET_SETUP.md`)
2. Copy the Web App URL from the deployment dialog
3. It should look like: `https://script.google.com/macros/s/AKfycby.../exec`

**Example:**
```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycby123456789/exec
```

**Required:** ✅ Yes (for contact form to work)

---

### Calendly (Consultation Page)

**Variable:** `NEXT_PUBLIC_CALENDLY_URL`

**Description:** Your Calendly scheduling link for consultation bookings.

**How to get it:**
1. Go to https://calendly.com
2. Create or select your scheduling page
3. Copy the public URL

**Example:**
```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/consultation
```

**Required:** ⚠️ Optional (only if using consultation page)

---

## Complete `.env.local` Template

Create a file named `.env.local` in the project root with this content:

```env
# ============================================
# VIZIONSCOP3 PORTFOLIO - ENVIRONMENT VARIABLES
# ============================================
# 
# IMPORTANT: This file contains sensitive information
# DO NOT commit this file to git (it's in .gitignore)
# 
# Copy this template and fill in your actual values
# ============================================

# Google Apps Script Web App URL
# Get this after deploying google-apps-script.js
# See GOOGLE_SHEET_SETUP.md for instructions
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# Calendly Scheduling Link (Optional)
# Your Calendly public scheduling URL
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/consultation

# ============================================
# NOTES:
# - All NEXT_PUBLIC_* variables are exposed to the browser
# - Never put sensitive API keys or secrets here
# - Restart dev server after changing these values
# ============================================
```

---

## File Structure

```
vizionscop3-portfolio/
├── .env.example          # Template (committed to git)
├── .env.local            # Your actual secrets (NOT in git)
└── ENV_SETUP.md         # This file
```

---

## Security Best Practices

1. ✅ **Never commit `.env.local`** - It's already in `.gitignore`
2. ✅ **Use `.env.example`** for templates (safe to commit)
3. ✅ **Only use `NEXT_PUBLIC_*`** for client-side variables
4. ❌ **Never put server-side secrets** in `NEXT_PUBLIC_*` variables
5. ✅ **Review `.env.local`** before deploying to production

---

## Verification

After setting up your `.env.local` file, verify it's working:

1. **Check the file exists:**
   ```bash
   ls -la .env.local
   ```

2. **Verify variables are loaded:**
   - Start dev server: `npm run dev`
   - Check browser console for any missing variable errors
   - Test the contact form to ensure Google Script URL works

3. **Production deployment:**
   - Add these variables in your hosting platform (Vercel, etc.)
   - Vercel: Go to Project Settings > Environment Variables
   - Add each variable for Production, Preview, and Development

---

## Troubleshooting

### Variables not loading?
- ✅ Make sure file is named exactly `.env.local` (not `.env.local.txt`)
- ✅ Restart dev server after adding/changing variables
- ✅ Check for typos in variable names
- ✅ Ensure `NEXT_PUBLIC_` prefix is correct

### Contact form not working?
- ✅ Verify `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` is set correctly
- ✅ Check that Google Apps Script is deployed as Web App
- ✅ Ensure "Who has access" is set to "Anyone"
- ✅ Check browser console for CORS or fetch errors

### Need help?
- See `GOOGLE_SHEET_SETUP.md` for Google Script setup
- Check Next.js docs: https://nextjs.org/docs/basic-features/environment-variables

---

**Last Updated:** January 2025
