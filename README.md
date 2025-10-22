# Grand Prix India - Official Website

A production-ready, static marketing website for Grandprix (India) Private Limited (GPI). Built with Next.js 14, featuring multilingual support, accessibility-first design, and optimized for deployment on Vercel.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

Visit `http://localhost:3000` to see the site.

## 📦 Deployment to Vercel

### Option 1: Deploy with Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (first time)
vercel

# Deploy to production
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in with the company email
2. Click "Add New Project"
3. Import your Git repository (GitHub/GitLab/Bitbucket)
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

**Important**: The site is configured for static export (`output: 'export'` in `next.config.js`), making it 100% free to host on Vercel's Hobby plan.

### Custom Domain Setup

1. In Vercel project settings, go to "Domains"
2. Add your domain (e.g., `grandprixindia.com`)
3. Follow DNS configuration instructions
4. Wait for SSL certificate to provision (automatic)

## 🌍 Internationalization (i18n)

The site supports 5 languages:

- **English** (default): `/`
- **Spanish**: `/es/`
- **French**: `/fr/`
- **German**: `/de/`
- **Arabic**: `/ar/` (RTL layout)

### Editing Translations

All translations are in `/locales/` directory:

- `locales/en.json` - English
- `locales/es.json` - Spanish
- `locales/fr.json` - French
- `locales/de.json` - German
- `locales/ar.json` - Arabic

To update text:

1. Open the relevant locale file
2. Find the key (e.g., `"hero.headline"`)
3. Update the value
4. Rebuild the site: `npm run build`

## 🎨 Customization Guide

### Brand Colors

Colors are defined in `tailwind.config.js`:

```js
colors: {
  primary: '#b69849',  // Gold
  dark: '#1e1e1e',     // Charcoal
  white: '#ffffff',
}
```

To change colors:
1. Edit `tailwind.config.js`
2. Update the hex values
3. Rebuild: `npm run build`

### Replacing the Logo

1. Place your logo file in `/public/` (e.g., `logo.svg`)
2. Open `src/components/Header.tsx`
3. Find the logo section (line ~30)
4. Replace the placeholder with:
   ```jsx
   <img src="/logo.svg" alt="Grand Prix India" className="h-8" />
   ```

### Replacing Placeholder Images

Placeholder images are in `/public/assets/placeholders/`:

**Hero Images** (1920×1080):
- `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`

**Project Images** (800×600):
- `project-1.jpg` to `project-4.jpg`

**Gallery Images** (600×400):
- `gallery-1.jpg` to `gallery-8.jpg`

**Other Images**:
- `about-preview.jpg`, `about-company.jpg`, `founder.jpg`

Simply replace these files with your own images (keep the same filenames) and rebuild.

### Adding/Editing Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  description: 'Short description',
  fullDescription: 'Full description shown in modal',
  status: 'Planned' | 'In Development',
  location: 'City, State',
  imageUrl: '/assets/placeholders/project-1.jpg',
}
```

### Adding/Editing Media Gallery

Edit `src/data/media.ts`:

```typescript
{
  id: 'unique-id',
  type: 'photo' | 'video',
  url: '/path/to/image.jpg',
  thumbnail: '/path/to/thumbnail.jpg',
  alt: 'Description for accessibility',
  caption: 'Optional caption',
  videoUrl: 'https://youtube.com/embed/VIDEO_ID', // For videos
}
```

## 📧 Contact Form Setup

The contact form submits to `/api/contact`. Currently, it logs submissions to console.

### Connecting to Email Service

To send real emails, edit `src/app/api/contact/route.ts`:

**Option 1: SendGrid**

```bash
npm install @sendgrid/mail
```

```typescript
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// In the POST function:
await sgMail.send({
  to: 'press@grandprixindia.com',
  from: 'noreply@grandprixindia.com',
  subject: `Contact Form: ${subject}`,
  text: message,
  html: `<strong>From:</strong> ${name} (${email})<br><strong>Message:</strong> ${message}`,
});
```

**Option 2: Resend**

```bash
npm install resend
```

```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@grandprixindia.com',
  to: 'press@grandprixindia.com',
  subject: `Contact Form: ${subject}`,
  html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
});
```

Add environment variable in Vercel:
1. Project Settings → Environment Variables
2. Add `SENDGRID_API_KEY` or `RESEND_API_KEY`
3. Redeploy

## ♿ Accessibility Features

The site is built with WCAG 2.1 AA compliance:

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus traps in modals
- ✅ Skip-to-content link
- ✅ Color contrast ratios meet AA standards
- ✅ `prefers-reduced-motion` support
- ✅ Descriptive alt text for images

### Testing Accessibility

```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run audit
lhci autorun --collect.url=http://localhost:3000
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

## 🔍 SEO Configuration

### Updating Meta Tags

Edit metadata in:
- `src/app/layout.tsx` (English)
- `src/app/[locale]/layout.tsx` (Other languages)

### Sitemap

The sitemap is static at `/public/sitemap.xml`. Update URLs if your domain changes:

1. Open `public/sitemap.xml`
2. Find/replace `https://grandprixindia.com` with your domain
3. Update `<lastmod>` dates when content changes
4. Redeploy

### robots.txt

Located at `/public/robots.txt`. Update sitemap URL if needed.

## 🏗️ Project Structure

```
/
├── public/
│   ├── assets/placeholders/    # Placeholder images
│   ├── robots.txt              # SEO robots file
│   └── sitemap.xml             # SEO sitemap
├── locales/                    # Translation files
│   ├── en.json
│   ├── es.json
│   ├── fr.json
│   ├── de.json
│   └── ar.json
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── [locale]/          # Localized pages
│   │   ├── api/contact/       # Contact form API
│   │   ├── layout.tsx         # Root layout (EN)
│   │   └── page.tsx           # Home page (EN)
│   ├── components/            # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Modal.tsx
│   │   ├── ProjectCard.tsx
│   │   └── StructuredData.tsx
│   ├── data/                  # Content data
│   │   ├── projects.ts
│   │   └── media.ts
│   ├── lib/                   # Utilities
│   │   └── i18n.ts
│   └── app/globals.css        # Global styles
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json
```

## 🎯 Performance Optimization

The site is optimized for fast loading:

- ✅ Static Site Generation (SSG)
- ✅ Automatic code splitting
- ✅ Font optimization (Google Fonts with `display: swap`)
- ✅ Image optimization ready (use Next.js Image component for photos)
- ✅ Minimal JavaScript bundle
- ✅ CSS purging (unused Tailwind classes removed)

### Converting Images to WebP/AVIF

For better performance, convert images:

```bash
# Install sharp
npm install sharp

# Convert images (create a script)
node scripts/convert-images.js
```

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### Styles Not Updating

```bash
# Clear Tailwind cache
rm -rf .next

# Rebuild
npm run dev
```

### Deployment Issues on Vercel

- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify Node.js version (18+)
- Check `next.config.js` for errors

## 📝 Content Guidelines

### Adding New Pages

1. Create page in `src/app/` for English
2. Create corresponding page in `src/app/[locale]/` for other languages
3. Add translations to all locale JSON files
4. Update navigation in `Header.tsx`
5. Update `sitemap.xml`

### Image Best Practices

- Use descriptive filenames
- Optimize before uploading (compress, resize)
- Recommended sizes:
  - Hero: 1920×1080px
  - Projects: 800×600px
  - Gallery: 600×400px
- Format: JPG for photos, SVG for logos/graphics

## 🔐 Security Notes

- No sensitive data in frontend code
- Environment variables for API keys
- Contact form has basic validation
- HTTPS enforced on Vercel
- CORS configured for API routes

## 📞 Support & Maintenance

### Regular Updates

1. Update dependencies monthly:
   ```bash
   npm update
   ```

2. Check for Next.js updates:
   ```bash
   npm outdated
   ```

3. Test thoroughly after updates

### Content Updates

For non-technical updates:
1. Edit locale JSON files for text
2. Replace images in `/public/assets/placeholders/`
3. Commit changes to Git
4. Vercel auto-deploys on push to main branch

## 📄 License

© 2025 Grandprix (India) Private Limited. All rights reserved.

---

**Questions?** Email: [technical-support@example.com](mailto:technical-support@example.com)

