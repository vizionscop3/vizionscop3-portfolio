#!/bin/bash

# Placeholder Image Generator Script
# This script creates placeholder images using ImageMagick (if installed)
# Or provides URLs for online placeholder services

echo "Creating placeholder images for development..."

# Check if ImageMagick is installed
if command -v convert &> /dev/null; then
    echo "Using ImageMagick to create placeholders..."
    
    # Profile
    convert -size 400x400 xc:#6C5CE7 -pointsize 48 -fill white -gravity center -annotate +0+0 "Profile" public/images/profile/headshot.webp
    
    # Project images
    for project in ttrac chessmaster masjid floorplan; do
        convert -size 1200x600 xc:#6C5CE7 -pointsize 72 -fill white -gravity center -annotate +0+0 "${project^}\nHero" public/images/projects/${project}-hero.webp
        convert -size 1200x800 xc:#00CEC9 -pointsize 48 -fill white -gravity center -annotate +0+0 "${project^}\nScreens" public/images/projects/${project}-screens.webp
    done
    
    # Creative work
    for character in seer duke mama-patsy; do
        convert -size 800x800 xc:#FFEAA7 -pointsize 48 -fill black -gravity center -annotate +0+0 "${character^}" public/images/creative/goth/${character}.webp
    done
    
    echo "Placeholder images created!"
else
    echo "ImageMagick not found. Using online placeholder URLs:"
    echo ""
    echo "Profile:"
    echo "https://placehold.co/400x400/6C5CE7/FFFFFF?text=Profile"
    echo ""
    echo "Project Heroes:"
    echo "https://placehold.co/1200x600/6C5CE7/FFFFFF?text=T-Trac+Hero"
    echo "https://placehold.co/1200x600/6C5CE7/FFFFFF?text=ChessMaster+Hero"
    echo "https://placehold.co/1200x600/6C5CE7/FFFFFF?text=The+Masjid+Hero"
    echo "https://placehold.co/1200x600/6C5CE7/FFFFFF?text=Floor+Plan+Hero"
    echo ""
    echo "Download these and save to the appropriate directories."
fi
