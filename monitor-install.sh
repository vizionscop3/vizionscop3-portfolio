#!/bin/bash

# Monitor npm install progress
# Run this script to check if npm install is complete

cd "$(dirname "$0")"

echo "🔍 Checking npm install status..."
echo ""

if [ -f "npm-install.log" ]; then
    echo "📋 Recent npm install output:"
    echo "----------------------------------------"
    tail -10 npm-install.log
    echo "----------------------------------------"
    echo ""
fi

if [ -d "node_modules" ] && [ -f "package-lock.json" ]; then
    echo "✅✅✅ DEPENDENCIES INSTALLED!"
    echo ""
    echo "You can now run:"
    echo "  npm run dev"
    echo ""
    echo "Then visit: http://localhost:3000"
    exit 0
else
    echo "⏳ Dependencies still installing..."
    echo ""
    
    if [ -f "npm-install.log" ]; then
        # Check if process is still running
        if pgrep -f "npm install" > /dev/null; then
            echo "✅ npm install process is running"
            echo "   Check progress: tail -f npm-install.log"
        else
            echo "⚠️  npm install process not found"
            echo "   It may have completed or failed"
            echo "   Check the log: cat npm-install.log"
        fi
    else
        echo "⚠️  No npm install log found"
        echo "   Run: npm install"
    fi
    
    echo ""
    echo "To manually check:"
    echo "  ls node_modules"
    echo "  ls package-lock.json"
    exit 1
fi
