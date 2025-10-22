# Installation & Setup Instructions

## Prerequisites

Before starting, ensure you have:
- **Node.js 18+** installed ([download here](https://nodejs.org))
- **npm** or **yarn** package manager
- A **code editor** (VS Code recommended)
- **Git** (optional, for version control)

## Step-by-Step Installation

### 1. Open Terminal/Command Prompt

**On Mac:**
- Press `Cmd + Space`, type "Terminal", press Enter

**On Windows:**
- Press `Win + R`, type "cmd", press Enter

### 2. Navigate to Project Directory

```bash
cd "/Users/bharatshetty/Desktop/Dad/GPI Website"
```

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages (~2-3 minutes).

### 4. Run Development Server

```bash
npm run dev
```

The site will start at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
```

This creates an optimized static site in the `/out` folder.

## Available Commands

```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build

# Start production server locally
npm start

# Check for code issues
npm run lint
```

## Project Dependencies

### Core (automatically installed)
- `next@14.2.0` - React framework
- `react@18.3.0` - UI library
- `react-dom@18.3.0` - React DOM renderer
- `tailwindcss@3.4.1` - CSS framework
- `typescript@5.3.3` - Type safety

### Fonts (loaded from Google)
- Cormorant Garamond (headings)
- Inter (body text)

## Environment Variables (Optional)

For production features like email:

1. Create `.env.local` file:
```bash
cp .env.example .env.local
```

2. Add your keys:
```
SENDGRID_API_KEY=your_key_here
# or
RESEND_API_KEY=your_key_here
```

## Troubleshooting

### "npm: command not found"
**Solution**: Install Node.js from [nodejs.org](https://nodejs.org)

### "Port 3000 already in use"
**Solution**: 
```bash
# Use different port
PORT=3001 npm run dev
```

### "Module not found" errors
**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build fails
**Solution**:
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Images not loading
**Solution**: Ensure images are in `/public/` folder (not `/src/`)

## IDE Setup (VS Code)

Recommended extensions:
- ESLint
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

Install extensions:
1. Open VS Code
2. Press `Cmd+Shift+X` (Mac) or `Ctrl+Shift+X` (Windows)
3. Search and install extensions

## Vercel Deployment

### Quick Deploy (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

### First Deployment Settings

When prompted:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **Project name?** → `grandprix-india`
- **Directory?** → `.` (press Enter)
- **Override build settings?** → No

### Production Deployment

```bash
vercel --prod
```

## Alternative: GitHub + Vercel (Auto-deploy)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/gpi-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import from GitHub
   - Select repository
   - Deploy

3. **Automatic Deployments**
   - Push to `main` → deploys to production
   - Create PR → creates preview deployment

## Testing Checklist

Before deploying, test:
- [ ] All pages load (`/`, `/about`, `/projects`, `/media`, `/contact`)
- [ ] Language switcher works (EN, ES, FR, DE, AR)
- [ ] Arabic displays RTL correctly
- [ ] Images load properly
- [ ] Contact form submits
- [ ] Modals open/close
- [ ] Mobile responsive (test at 375px, 768px, 1440px)
- [ ] Lighthouse score 90+ (run in Chrome DevTools)

## Performance Optimization

### Check Lighthouse Scores

1. Open site in Chrome
2. Open DevTools (`F12`)
3. Go to "Lighthouse" tab
4. Click "Generate report"
5. Aim for 90+ in all categories

### Improve Performance

- Compress images before uploading
- Use WebP format when possible
- Keep SVG files optimized
- Minimize custom fonts

## Updates & Maintenance

### Content Updates
1. Edit files in `/locales/` or `/src/data/`
2. Test locally: `npm run dev`
3. Build: `npm run build`
4. Deploy: `vercel --prod`

### Dependency Updates
```bash
# Check for updates
npm outdated

# Update all (carefully)
npm update

# Update Next.js specifically
npm install next@latest
```

### Security Updates
```bash
# Check vulnerabilities
npm audit

# Fix automatically
npm audit fix
```

## Getting Help

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Success Indicators

You're ready to go live when:
- ✅ `npm run build` completes without errors
- ✅ Site loads at `http://localhost:3000`
- ✅ All 5 languages work
- ✅ Images display correctly
- ✅ Contact form functional
- ✅ Lighthouse score 90+
- ✅ Mobile responsive

---

**Congratulations! Your Grand Prix India website is ready to launch! 🏁**

