# Deployment Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the site:**
   ```bash
   npm run build
   ```

3. **Preview locally:**
   ```bash
   npm run preview
   ```

## GitHub Pages Deployment

### Option 1: Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your site when you push to the `main` branch.

**Steps:**
1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on every push to `main`

### Option 2: Manual Deployment

1. Build the site:
   ```bash
   npm run build
   ```

2. The `dist` folder contains all static files

3. Deploy the `dist` folder contents to GitHub Pages:
   - Use GitHub CLI: `gh-pages -d dist`
   - Or manually copy files to `gh-pages` branch
   - Or use a GitHub Action

## Custom Domain

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain:
   ```
   yourdomain.com
   ```

2. Update `astro.config.mjs`:
   ```js
   site: 'https://yourdomain.com',
   ```

3. Configure DNS records as per GitHub Pages documentation

## Environment Variables

If you need environment variables, create a `.env` file:
```
PUBLIC_SITE_URL=https://wiwek13.github.io
```

## Troubleshooting

### Build Errors

- **Mermaid errors**: Ensure `mermaid` package is installed
- **TypeScript errors**: Run `npm run build` to see detailed errors
- **Missing dependencies**: Run `npm install`

### Deployment Issues

- **404 errors**: Check that `base` in `astro.config.mjs` matches your repository name
- **Assets not loading**: Verify all paths are relative
- **GitHub Actions failing**: Check workflow file permissions and GitHub Pages settings

## Performance Optimization

The build includes some large chunks (Mermaid library). To optimize:

1. Use dynamic imports for Mermaid diagrams
2. Enable code splitting in Astro config
3. Optimize images before adding to `public` folder

## Local Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs on `http://localhost:4321` by default.
