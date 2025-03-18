# NYC Tow Truck Directory

A comprehensive directory of licensed tow truck companies in New York City.

## Features

- Search tow truck companies by name, location, or borough
- View detailed company information
- Filter by DARP and ROTOW certification status
- Interactive maps and directions
- Mobile-responsive design

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Deployment

This site is deployed to GitHub Pages. To deploy:

1. Create a new repository on GitHub
2. Add the remote repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/tow-truck-directory.git
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
4. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select the `gh-pages` branch as the source
   - Save the changes

The site will be available at: `https://YOUR_USERNAME.github.io/tow-truck-directory`

## Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
``` 