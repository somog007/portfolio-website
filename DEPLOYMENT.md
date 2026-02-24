# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to popular hosting platforms.

## Prerequisites

Before deploying, make sure:
- All your content is finalized (name, projects, skills, contact info)
- You've tested the website locally
- All images and links are working correctly

## Build Your Portfolio

First, create a production build:

```bash
cd portfolio-website
npm run build
```

This creates an optimized `dist` folder with your production-ready files.

---

## Option 1: Vercel (Recommended) ⭐

Vercel offers the easiest deployment with automatic HTTPS and global CDN.

### Method A: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (run from project root)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Scope: Your account
# - Link to existing project? No
# - Project name: portfolio-website (or your choice)
# - Directory: ./
# - Override settings? No

# Your site is now live!
```

### Method B: Vercel Dashboard

1. Go to https://vercel.com
2. Sign up/login with GitHub
3. Click "Add New" → "Project"
4. Import your Git repository (or drag & drop the project folder)
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

Your site will be live at: `https://your-project.vercel.app`

### Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

## Option 2: Netlify

Netlify is another excellent option with similar features to Vercel.

### Method A: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your project
npm run build

# Deploy
netlify deploy

# For production deployment
netlify deploy --prod
```

### Method B: Netlify Dashboard

1. Go to https://netlify.com
2. Sign up/login
3. Drag and drop your `dist` folder onto the dashboard
4. Your site is live!

### Method C: Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to Netlify dashboard
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

---

## Option 3: GitHub Pages

GitHub Pages is free and great for personal portfolios.

### Step 1: Install gh-pages package

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these lines to your `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/portfolio-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Replace `yourusername` with your GitHub username.

### Step 3: Update vite.config.js

Add the base URL:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/', // Your repo name
})
```

### Step 4: Deploy

```bash
npm run deploy
```

Your site will be live at: `https://yourusername.github.io/portfolio-website`

### Custom Domain for GitHub Pages

1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider:
   - Add CNAME record pointing to `yourusername.github.io`
3. Enable custom domain in GitHub repository settings

---

## Option 4: Cloudflare Pages

Fast and free hosting with excellent performance.

### Deployment Steps

1. Go to https://pages.cloudflare.com
2. Sign up/login
3. Click "Create a project"
4. Connect your Git repository
5. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy"

---

## Option 5: Railway

Great for full-stack applications (future expansion).

### Deployment Steps

1. Go to https://railway.app
2. Sign up with GitHub
3. Create new project → "Deploy from GitHub"
4. Select your repository
5. Railway auto-detects Vite configuration
6. Click "Deploy"

---

## Option 6: Render

Offers free hosting with automatic SSL.

### Deployment Steps

1. Go to https://render.com
2. Sign up/login
3. Click "New" → "Static Site"
4. Connect your Git repository
5. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Click "Create Static Site"

---

## Environment Variables

If you add API keys or sensitive data in the future:

### Vercel
```bash
vercel env add
```

### Netlify
Add in Dashboard → Site settings → Environment variables

### GitHub Pages
Not recommended for sensitive data

---

## Post-Deployment Checklist

✅ Test all pages and sections
✅ Verify all images load correctly
✅ Check all external links (GitHub, LinkedIn, etc.)
✅ Test responsive design on mobile devices
✅ Verify dark mode toggle works
✅ Test admin mode functionality
✅ Check contact section links
✅ Verify project links (live demos, GitHub repos)
✅ Test site speed with Google PageSpeed Insights
✅ Check browser console for errors

---

## Troubleshooting

### Images Not Loading

**Problem**: Images show on localhost but not after deployment

**Solution**:
- Ensure image URLs are absolute (not relative)
- Use HTTPS URLs
- Check if image hosting service allows hotlinking

### Routing Issues

**Problem**: Direct URL navigation returns 404

**Solution**:
- For Vercel/Netlify: Add `_redirects` file in `public` folder:
  ```
  /*    /index.html   200
  ```
- For Netlify: Or add `netlify.toml`:
  ```toml
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

### Build Fails

**Problem**: Deployment build fails

**Solution**:
- Run `npm run build` locally to identify errors
- Check Node.js version compatibility
- Ensure all dependencies are in `package.json`
- Check for ESLint errors: `npm run lint`

### White Screen After Deployment

**Problem**: Blank page after deployment

**Solution**:
- Check browser console for errors
- Verify `base` URL in `vite.config.js`
- Ensure build completed successfully
- Check if assets are loading (Network tab in DevTools)

---

## Updating Your Live Site

After making changes:

### Vercel/Netlify (Git Integration)
```bash
git add .
git commit -m "Update portfolio"
git push
```
Auto-deploys on push!

### Manual Deployment
```bash
npm run build
# Then re-deploy using your chosen method
```

---

## Custom Domain Setup

Most platforms support custom domains:

### DNS Configuration

Add these records to your domain provider:

**For Apex Domain (example.com):**
- Type: A
- Name: @
- Value: [Platform's IP address]

**For Subdomain (www.example.com):**
- Type: CNAME
- Name: www
- Value: [Your platform URL]

### SSL Certificate

All recommended platforms provide free SSL certificates automatically!

---

## Performance Optimization

After deployment, improve performance:

1. **Enable Compression**: Most platforms enable this automatically
2. **Image Optimization**: Use WebP format for images
3. **CDN**: Platforms like Vercel/Netlify use global CDNs automatically
4. **Caching**: Configure cache headers (usually automatic)

---

## Monitoring

### Analytics

Add analytics to track visitors:

**Google Analytics**:
1. Create account at https://analytics.google.com
2. Add tracking code to `index.html`

**Vercel Analytics**:
- Enable in Vercel dashboard (one click)

**Cloudflare Analytics**:
- Built-in if using Cloudflare Pages

---

## Cost Comparison

| Platform | Free Tier | Bandwidth | Build Minutes |
|----------|-----------|-----------|---------------|
| Vercel | ✅ | 100GB/month | 6,000 min/month |
| Netlify | ✅ | 100GB/month | 300 min/month |
| GitHub Pages | ✅ | 100GB/month | Unlimited |
| Cloudflare Pages | ✅ | Unlimited | 500 builds/month |
| Render | ✅ | 100GB/month | 400 build hrs/month |

All free tiers include:
- Custom domains
- SSL certificates
- Automatic deployments
- DDoS protection

---

## Recommended Setup

For most users:
1. **Start with**: Vercel (easiest, best developer experience)
2. **Alternative**: Netlify (similar features)
3. **Budget option**: GitHub Pages (completely free, no limits)

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages Docs**: https://docs.github.com/en/pages

---

**Congratulations! Your portfolio is now live! 🎉**

Share your portfolio URL on LinkedIn, GitHub, and with potential employers!
