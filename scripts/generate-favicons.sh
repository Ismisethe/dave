#!/bin/bash

# Make sure the public directory exists
mkdir -p public

# Convert SVG to PNG in different sizes
convert public/safari-pinned-tab.svg -resize 16x16 public/favicon-16x16.png
convert public/safari-pinned-tab.svg -resize 32x32 public/favicon-32x32.png
convert public/safari-pinned-tab.svg -resize 180x180 public/apple-touch-icon.png
convert public/safari-pinned-tab.svg -resize 192x192 public/android-chrome-192x192.png
convert public/safari-pinned-tab.svg -resize 512x512 public/android-chrome-512x512.png

# Create favicon.ico (multi-size icon)
convert public/safari-pinned-tab.svg -resize 16x16 public/favicon.ico
convert public/safari-pinned-tab.svg -resize 32x32 public/favicon.ico 