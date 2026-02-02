# Install Dependencies - Manual Instructions

## Current Status

❌ **Dependencies are NOT installed yet**
- `node_modules` directory does not exist
- `package-lock.json` does not exist

## How to Install

### Step 1: Open Terminal

Navigate to the project directory:
```bash
cd /Users/vizion/Developer/PORTFOLIO/vizionscop3-portfolio
```

### Step 2: Run npm install

```bash
npm install
```

This will:
- Download and install all dependencies listed in `package.json`
- Create `node_modules` directory
- Create `package-lock.json` file
- Take 2-5 minutes depending on your internet connection

### Step 3: Verify Installation

After `npm install` completes, verify:

```bash
# Check if node_modules exists
ls node_modules

# Check if package-lock.json exists
ls package-lock.json

# Or run the status checker
./check-status.sh
```

You should see:
- ✅ `node_modules` directory with many subdirectories
- ✅ `package-lock.json` file

### Step 4: Start Development Server

Once installed, start the dev server:

```bash
npm run dev
```

Then visit: **http://localhost:3000**

## What Gets Installed

The following packages will be installed:

**Dependencies:**
- next@14.2.5
- react@18.3.1
- react-dom@18.3.1
- framer-motion@11.3.8
- lucide-react@0.424.0
- @vercel/analytics@1.3.1

**Dev Dependencies:**
- typescript@5.5.4
- tailwindcss@3.4.7
- postcss@8.4.40
- autoprefixer@10.4.19
- @types/node@22.0.0
- @types/react@18.3.3
- @types/react-dom@18.3.0
- eslint@8.57.0
- eslint-config-next@14.2.5

## Troubleshooting

### If npm install fails:

1. **Clear cache and retry:**
   ```bash
   npm cache clean --force
   npm install
   ```

2. **Check Node.js version:**
   ```bash
   node --version
   ```
   Should be Node.js 18.x or higher

3. **Check npm version:**
   ```bash
   npm --version
   ```
   Should be npm 9.x or higher

4. **Network issues:**
   - Check your internet connection
   - Try using a different network
   - Some corporate networks block npm registry

### If you see permission errors:

```bash
# Fix permissions
chmod -R u+w .
npm install
```

## After Installation

Once `npm install` completes successfully:

1. ✅ Run `npm run dev` to start development
2. ✅ Visit http://localhost:3000
3. ✅ Update placeholder content (see `SETUP.md`)
4. ✅ Add images (see `PLACEHOLDER_IMAGES.md`)
5. ✅ Build and deploy (see `DEPLOYMENT.md`)

## Quick Command Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Check linting
npm run lint
```
