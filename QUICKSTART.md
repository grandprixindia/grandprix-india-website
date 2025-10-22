# Quick Start Guide - Grand Prix India Website

## 🎯 For Non-Technical Users

This guide will help you get the website online in **under 10 minutes**.

### What You Need
- Company email address (e.g., `contact@grandprixindia.com`)
- This code folder
- Computer with internet access

### Step 1: Install Node.js (One-time setup)

1. Go to [nodejs.org](https://nodejs.org)
2. Download the **LTS version** (recommended)
3. Run the installer
4. Click "Next" through all steps
5. Restart your computer

### Step 2: Setup the Project

Open Terminal (Mac) or Command Prompt (Windows):

```bash
# Navigate to project folder
cd "/Users/bharatshetty/Desktop/Dad/GPI Website"

# Install dependencies (only needed once)
npm install
```

Wait 2-3 minutes for installation to complete.

### Step 3: Preview Locally

```bash
# Start preview server
npm run dev
```

Open browser and go to: `http://localhost:3000`

You should see the website! Press `Ctrl+C` to stop the preview.

### Step 4: Deploy to Vercel (Free Hosting)

#### A. Create Vercel Account

1. Go to [vercel.com/signup](https://vercel.com/signup)
2. Click "Continue with Email"
3. Enter company email
4. Verify email
5. Complete setup

#### B. Deploy the Website

**Option 1: Using Vercel CLI (Easiest)**

```bash
# Install Vercel CLI (one-time)
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

Follow the prompts:
- "Set up and deploy?" → Yes
- "Which scope?" → Your account
- "Link to existing project?" → No
- "Project name?" → grandprix-india (or press Enter)
- "Directory?" → Press Enter
- "Override settings?" → No

Wait 1-2 minutes. You'll get a URL like: `https://grandprix-india.vercel.app`

**To deploy to production:**
```bash
vercel --prod
```

**Option 2: Using GitHub (Automatic)**

1. Create GitHub account (if needed): [github.com](https://github.com)
2. Create new repository
3. Upload project files
4. In Vercel: "Add New Project" → Import from GitHub
5. Select repository → Deploy

#### C. Add Custom Domain (Optional)

1. In Vercel project settings → "Domains"
2. Add `grandprixindia.com` (or your domain)
3. Update DNS settings as shown
4. Wait 10-30 minutes for SSL

**Your website is now live!** 🎉

## 📝 Making Updates

### Changing Text

1. Open `/locales/en.json` in a text editor
2. Find and edit the text you want to change
3. Save the file
4. Run: `vercel --prod` to deploy changes

### Changing Images

1. Replace files in `/public/assets/placeholders/`
   - Keep the same filenames
   - Use same image sizes (see README for dimensions)
2. Run: `vercel --prod` to deploy

### Adding Projects

1. Open `src/data/projects.ts`
2. Copy an existing project block
3. Edit the details
4. Save and deploy: `vercel --prod`

## 🆘 Troubleshooting

### "Command not found: npm"
→ Install Node.js (see Step 1)

### "Module not found" error
→ Run `npm install` again

### Changes not showing
→ Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Deployment fails
→ Run `npm run build` first to check for errors

## 📞 Getting Help

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Check README.md** for detailed instructions
- **Email errors** to your web developer

## ✅ Success Checklist

After deployment, verify:
- [ ] Site loads at your Vercel URL
- [ ] All 5 languages work (EN, ES, FR, DE, AR)
- [ ] Images display correctly
- [ ] Contact form submits (check console)
- [ ] Mobile view looks good
- [ ] Test on different browsers

---

**Congratulations!** Your Grand Prix India website is now live on the internet, hosted **completely free** on Vercel.

