# 🚀 Free Hosting Deployment Guide

## Option 1: Vercel (Recommended - Best for Next.js)

### Step 1: Prepare Your Project
✅ **Already Done!** Your project is ready for Vercel deployment.

### Step 2: Create Vercel Account
1. Go to [https://vercel.com](https://vercel.com)
2. Sign up with GitHub (recommended) or email
3. **100% FREE** for personal projects

### Step 3: Deploy from GitHub
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. In Vercel dashboard:
   - Click **"New Project"**
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click **"Deploy"**

### Step 4: Configure Environment Variables (for EmailJS)
1. In Vercel dashboard → Your Project → Settings → Environment Variables
2. Add these variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Step 5: Custom Domain (Optional)
- Vercel gives you a free subdomain: `your-project.vercel.app`
- You can add a custom domain for free!

---

## Option 2: Netlify (Alternative)

### Step 1: Build Your Project
```bash
npm run build
npm run export  # If you want static export
```

### Step 2: Deploy to Netlify
1. Go to [https://netlify.com](https://netlify.com)
2. Sign up for free
3. Drag and drop your `out` folder (if exported) or connect GitHub

---

## Option 3: GitHub Pages (Static Only)

### Step 1: Enable Static Export
Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### Step 2: Deploy
1. Push to GitHub
2. Go to repository Settings → Pages
3. Select source: GitHub Actions
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

---

## 🎉 Free Hosting Benefits

### Vercel (Recommended)
- ✅ **100% Free** for personal projects
- ✅ **Automatic deployments** from GitHub
- ✅ **Global CDN** (fast worldwide)
- ✅ **Custom domains** for free
- ✅ **SSL certificates** included
- ✅ **Perfect for Next.js**

### Netlify
- ✅ **100% Free** tier
- ✅ **Form handling** included
- ✅ **Easy drag-and-drop** deployment
- ✅ **Custom domains** for free

### GitHub Pages
- ✅ **100% Free**
- ✅ **Perfect for static sites**
- ✅ **Integrated with GitHub**

---

## 🚀 Quick Start (Vercel)

1. **Push to GitHub** (if not already done)
2. **Go to Vercel.com** → Sign up
3. **Import your repository**
4. **Click Deploy**
5. **Done!** Your site is live at `your-project.vercel.app`

**Total time: 5 minutes!** ⚡
