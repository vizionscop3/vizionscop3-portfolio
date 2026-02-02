#!/bin/bash

# Status Checker Script
# Run this to check if dependencies are installed and ready

cd "$(dirname "$0")"

echo "🔍 Checking project status..."
echo ""

# Check dependencies
if [ -d "node_modules" ] && [ -f "package-lock.json" ]; then
    echo "✅ Dependencies: INSTALLED"
    echo "   - node_modules directory exists"
    echo "   - package-lock.json exists"
else
    echo "⏳ Dependencies: INSTALLING or NOT INSTALLED"
    echo "   Run: npm install"
fi

echo ""

# Check git status
if [ -d ".git" ]; then
    echo "✅ Git Repository: INITIALIZED"
    git remote -v 2>/dev/null | head -2
else
    echo "❌ Git Repository: NOT INITIALIZED"
fi

echo ""

# Check project structure
echo "📁 Project Structure:"
if [ -d "src/app" ] && [ -d "src/components" ]; then
    echo "   ✅ Source files present"
else
    echo "   ❌ Source files missing"
fi

if [ -d "public/images" ]; then
    echo "   ✅ Public directory present"
else
    echo "   ❌ Public directory missing"
fi

echo ""
echo "🚀 Next Steps:"
echo "   1. Wait for npm install to complete (if still running)"
echo "   2. Run: npm run dev"
echo "   3. Visit: http://localhost:3000"
echo "   4. Add images (see PLACEHOLDER_IMAGES.md)"
echo "   5. Update placeholder content (see SETUP.md)"
