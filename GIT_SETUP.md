# Git Repository Setup

## Issue Encountered

There are permission issues preventing automated git setup. Please run these commands manually in your terminal.

## Manual Setup Instructions

### Option 1: Run the Setup Script

```bash
cd /Users/vizion/Developer/PORTFOLIO/vizionscop3-portfolio
chmod +x setup-git.sh
./setup-git.sh
```

### Option 2: Run Commands Manually

Open your terminal and run:

```bash
# Navigate to project directory
cd /Users/vizion/Developer/PORTFOLIO/vizionscop3-portfolio

# Initialize git repository
git init

# Set main branch
git branch -M main

# Add remote origin
git remote add origin https://github.com/vizionscop3/proof.git

# Verify remote was added
git remote -v

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: VizionScop3 Portfolio - Material Neubrutomorphism design system"

# Push to GitHub (you'll be prompted for credentials)
git push -u origin main
```

## If You Encounter Permission Errors

### Fix File Permissions
```bash
cd /Users/vizion/Developer/PORTFOLIO/vizionscop3-portfolio
chmod -R u+w .
```

### Or Change Ownership
```bash
sudo chown -R $(whoami) /Users/vizion/Developer/PORTFOLIO/vizionscop3-portfolio
```

### Check for Lock Files
```bash
# Remove any git lock files
rm -f .git/index.lock
rm -f /Users/vizion/Developer/PORTFOLIO/.git/index.lock
```

## GitHub Authentication

When you run `git push`, you may need to authenticate:

1. **Personal Access Token** (recommended):
   - Go to GitHub Settings > Developer settings > Personal access tokens
   - Generate a new token with `repo` permissions
   - Use the token as your password when prompted

2. **SSH Key** (alternative):
   - Set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
   - Change remote URL: `git remote set-url origin git@github.com:vizionscop3/proof.git`

## Verify Setup

After pushing, verify the repository:

```bash
# Check remote
git remote -v

# Check status
git status

# View commit history
git log --oneline
```

## Repository URL

Your repository is configured to push to:
**https://github.com/vizionscop3/proof.git**
