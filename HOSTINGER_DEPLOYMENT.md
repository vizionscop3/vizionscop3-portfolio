# Hostinger Deployment Guide

This guide covers deploying your Next.js portfolio to Hostinger hosting.

## Prerequisites

- Hostinger hosting account (Shared, VPS, or Cloud)
- Access to File Manager or FTP/SFTP
- Domain configured in Hostinger
- Node.js knowledge (if using VPS/Cloud hosting)

---

## Option 1: Static Export (Recommended for Shared Hosting)

This creates a fully static site that works on any web hosting, including Hostinger's shared hosting.

### Step 1: Update Next.js Config for Static Export

Update `next.config.mjs`:

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
  trailingSlash: true, // Helps with hosting compatibility
}

export default nextConfig
```

### Step 2: Remove Vercel Analytics

Since Vercel Analytics won't work on Hostinger, we need to make it optional:

Update `src/app/layout.tsx`:

```typescript
import type { Metadata } from 'next'
// Remove: import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// ... rest of metadata ...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:border-2 focus:border-neutral-black"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-16 md:pt-20 bg-neutral-cream min-h-screen">
          {children}
        </main>
        <Footer />
        {/* Remove: <Analytics /> */}
      </body>
    </html>
  )
}
```

### Step 3: Update Metadata URLs

Update `src/app/layout.tsx` metadata to use your Hostinger domain:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'), // Replace with your domain
  // ... rest of metadata with updated URLs
  openGraph: {
    // ... update url to your domain
    url: 'https://yourdomain.com',
  },
}
```

### Step 4: Build Static Export

```bash
npm run build
```

This creates an `out/` directory with all static files.

### Step 5: Upload to Hostinger

**Via File Manager:**
1. Log into Hostinger hPanel
2. Go to File Manager
3. Navigate to `public_html` (or your domain's root directory)
4. Delete any existing files (backup first if needed)
5. Upload all contents of the `out/` directory
6. Ensure `index.html` is in the root

**Via FTP/SFTP:**
```bash
# Using FTP client (FileZilla, Cyberduck, etc.)
# Connect to your Hostinger FTP
# Upload all files from ./out/ to public_html/
```

### Step 6: Configure .htaccess (Optional but Recommended)

Create `.htaccess` in `public_html/`:

```apache
# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

---

## Option 2: Node.js Hosting (VPS/Cloud Hosting)

If you have Hostinger VPS or Cloud hosting with Node.js support:

### Step 1: Update package.json

Add a production start script:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "next lint"
  }
}
```

### Step 2: Build the Application

```bash
npm run build
```

### Step 3: Upload to Hostinger VPS

**Via SSH:**
```bash
# Connect to your VPS
ssh user@your-server-ip

# Navigate to your project directory
cd /home/user/your-domain

# Upload files (via git, rsync, or FTP)
git clone https://github.com/vizionscop3/proof.git
cd proof

# Install dependencies
npm install --production

# Build
npm run build
```

### Step 4: Set Up PM2 (Process Manager)

```bash
# Install PM2 globally
npm install -g pm2

# Start the application
pm2 start npm --name "portfolio" -- start

# Save PM2 configuration
pm2 save

# Set up PM2 to start on boot
pm2 startup
```

### Step 5: Configure Nginx Reverse Proxy

Create `/etc/nginx/sites-available/your-domain`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/your-domain /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 6: Set Up SSL (Let's Encrypt)

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## Troubleshooting

### Static Export Issues

**Problem:** Images not loading
- **Solution:** Ensure `images.unoptimized: true` in next.config.mjs

**Problem:** 404 errors on refresh
- **Solution:** Add `.htaccess` rewrite rules (see Option 1, Step 6)

**Problem:** Routes not working
- **Solution:** Check that `trailingSlash: true` is set in next.config.mjs

### Node.js Hosting Issues

**Problem:** Port 3000 not accessible
- **Solution:** Check firewall settings, ensure port is open

**Problem:** PM2 not starting on reboot
- **Solution:** Run `pm2 startup` again and follow instructions

**Problem:** Nginx 502 Bad Gateway
- **Solution:** Check that Next.js is running on port 3000: `pm2 list`

---

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Navigation works
- [ ] Mobile menu functions
- [ ] Forms submit (if applicable)
- [ ] SSL certificate installed (HTTPS)
- [ ] Domain DNS configured correctly
- [ ] Performance tested (PageSpeed Insights)

---

## Maintenance

### Updating the Site (Static Export)

1. Make changes locally
2. Run `npm run build`
3. Upload new `out/` directory contents to Hostinger
4. Clear browser cache

### Updating the Site (Node.js)

1. SSH into your VPS
2. Navigate to project directory
3. `git pull` (or upload new files)
4. `npm install` (if dependencies changed)
5. `npm run build`
6. `pm2 restart portfolio`

---

## Alternative: Use Hostinger with GitHub Actions

You can automate deployment using GitHub Actions to build and deploy to Hostinger via FTP. This requires:
- FTP credentials from Hostinger
- GitHub Actions workflow file

Would you like me to set up automated deployment?

---

## Need Help?

If you encounter issues:
1. Check Hostinger's documentation for your hosting type
2. Verify Node.js version compatibility (Next.js 14 requires Node 18+)
3. Check file permissions on Hostinger
4. Review error logs in Hostinger's control panel
