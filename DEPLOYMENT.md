# Deployment Guide - Grand Prix India Website

## Hosting on Vercel with Company Email

### Step 1: Create Vercel Account with Company Email

**Option A: New Account (Recommended)**
1. Go to [vercel.com/signup](https://vercel.com/signup)
2. Sign up using the company email (e.g., `contact@grandprixindia.com`)
3. Verify the email address
4. Complete the onboarding

**Option B: Transfer from Personal Account**
1. Deploy from your personal account first
2. Go to Project Settings → "Transfer Project"
3. Transfer to an account created with company email

### Step 2: Connect Git Repository

1. Push your code to GitHub, GitLab, or Bitbucket
2. In Vercel dashboard, click "Add New Project"
3. Import your repository
4. Vercel will auto-detect Next.js settings

### Step 3: Configure Project

**Build Settings** (auto-detected):
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `out`
- Install Command: `npm install`

**Environment Variables** (if using email service):
- Add `SENDGRID_API_KEY` or `RESEND_API_KEY`
- Add `NEXT_PUBLIC_SITE_URL`

### Step 4: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build
3. Your site will be live at `your-project.vercel.app`

### Step 5: Add Custom Domain (Optional)

1. In Project Settings → Domains
2. Add your domain (e.g., `grandprixindia.com`)
3. Configure DNS:
   - **A Record**: `76.76.21.21` (Vercel's IP)
   - **CNAME**: `cname.vercel-dns.com`
4. Wait for DNS propagation (5-30 minutes)
5. SSL certificate auto-provisions

## Cost: 100% Free

Vercel's Hobby plan includes:
- ✅ Unlimited static sites
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments
- ✅ 100 GB bandwidth/month
- ✅ Serverless functions (contact form)

This is more than enough for a company showcase website.

## Alternative: Netlify (Also Free)

If you prefer Netlify:

1. Sign up at [netlify.com](https://netlify.com) with company email
2. Import Git repository
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy

## Automatic Deployments

Once connected to Git:
- Push to `main` branch → auto-deploys to production
- Push to other branches → creates preview deployments
- Pull requests → automatic preview links

## Post-Deployment Checklist

- [ ] Site loads correctly at deployed URL
- [ ] All pages accessible (test each language)
- [ ] Images display properly
- [ ] Contact form works
- [ ] Language switcher functions
- [ ] Mobile responsiveness
- [ ] Test on different browsers
- [ ] Check Lighthouse scores (aim for 90+)

## Updating the Site

### Content Updates
1. Edit locale JSON files or images locally
2. Commit changes: `git add . && git commit -m "Update content"`
3. Push: `git push origin main`
4. Vercel auto-deploys in 1-2 minutes

### Code Updates
Same process as content updates. Vercel rebuilds automatically.

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies in package.json
- Verify Node.js version compatibility

### Images Not Loading
- Check file paths (case-sensitive)
- Ensure images are in `/public/` folder
- Clear browser cache

### Contact Form Not Working
- Verify API route is deployed
- Check browser console for errors
- For email sending, ensure environment variables are set

## Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Documentation: [nextjs.org/docs](https://nextjs.org/docs)

---

**Important**: Keep your Vercel account credentials secure. Use company email for all project-related accounts.

