#!/bin/bash

# Git Repository Setup Script
# Run this script to initialize git and connect to GitHub

echo "Setting up git repository..."

# Navigate to project directory
cd "$(dirname "$0")"

# Initialize git repository
echo "Initializing git repository..."
git init

# Set main branch
echo "Setting main branch..."
git branch -M main

# Add remote origin
echo "Adding remote origin..."
git remote add origin https://github.com/vizionscop3/proof.git

# Verify remote
echo "Verifying remote..."
git remote -v

# Add all files
echo "Adding all files..."
git add .

# Create initial commit
echo "Creating initial commit..."
git commit -m "Initial commit: VizionScop3 Portfolio - Material Neubrutomorphism design system"

# Push to GitHub
echo "Pushing to GitHub..."
echo "You may be prompted for GitHub credentials..."
git push -u origin main

echo "✅ Git repository setup complete!"
echo ""
echo "If you encounter permission errors, you may need to:"
echo "1. Check file permissions: chmod -R u+w ."
echo "2. Or run: sudo chown -R \$(whoami) ."
echo "3. Or manually run the git commands in your terminal"
