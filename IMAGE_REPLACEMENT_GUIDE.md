# 📸 Image Replacement Guide

## Quick Reference - All Image Paths

Replace these placeholder images with your actual images. Keep the same filenames!

---

## 🏠 LANDING PAGE (Homepage)

### Hero Background Image
**Path:** `/public/assets/placeholders/hero-1.jpg`
- **Current:** Placeholder racing track image
- **Replace with:** Your main hero image (racing venue, sports facility)
- **Size:** 1920x1080px or larger
- **Used in:** `src/components/Hero.tsx` (line 16)

---

## 📖 ABOUT SECTION (Homepage)

### About Preview Image (Right side of "About Grand Prix India")
**Path:** `/public/assets/placeholders/about-preview.jpg`
- **Current:** Placeholder company image
- **Replace with:** Your company building, facility, or team photo
- **Size:** 800x800px (square) or 800x1000px (portrait)
- **Used in:** `src/app/page.tsx` (around line 65)

### About Background (Subtle background)
**Path:** `/public/assets/placeholders/about-company.jpg`
- **Current:** Placeholder company image
- **Replace with:** Company facility or logo
- **Size:** 1920x1080px
- **Used in:** `src/app/page.tsx` (line 31) - shows at 5% opacity

---

## 👔 ABOUT US PAGE

### Founder Photo
**Path:** `/public/assets/placeholders/founder.jpg`
- **Current:** Placeholder professional headshot
- **Replace with:** Bharat Sadanand Shetty's photo
- **Size:** 600x800px (portrait)
- **Used in:** `src/app/about/page.tsx` (line 147)

### About Page Header Background
**Path:** `/public/assets/placeholders/about-company.jpg`
- **Current:** Placeholder company image
- **Replace with:** Company facility or branded image
- **Size:** 1920x1080px
- **Used in:** `src/app/about/page.tsx` (line 31) - shows at 20% opacity

---

## 🏗️ PROJECTS PAGE

Currently uses these placeholder project images:
- `/public/assets/placeholders/project-1.jpg`
- `/public/assets/placeholders/project-2.jpg`
- `/public/assets/placeholders/project-3.jpg`
- `/public/assets/placeholders/project-4.jpg`

**Replace with:** Your actual project photos
**Size:** 800x600px (landscape)
**Used in:** `src/data/projects.ts`

---

## 📸 MEDIA PAGE

Currently uses these placeholder gallery images:
- `/public/assets/placeholders/gallery-1.jpg`
- `/public/assets/placeholders/gallery-2.jpg`
- `/public/assets/placeholders/gallery-3.jpg`
- `/public/assets/placeholders/gallery-4.jpg`
- `/public/assets/placeholders/gallery-5.jpg`
- `/public/assets/placeholders/gallery-6.jpg`
- `/public/assets/placeholders/gallery-7.jpg`
- `/public/assets/placeholders/gallery-8.jpg`

**Replace with:** Your event photos, facility images
**Size:** 800x600px
**Used in:** `src/data/media.ts`

---

## 🎯 HOW TO REPLACE IMAGES

### Option 1: Keep Same Filenames (Easiest!)
1. Go to: `/public/assets/placeholders/`
2. Delete the placeholder image
3. Add your image with the **exact same filename**
4. Done! The website will automatically use it

### Option 2: Use Different Filenames
1. Add your image to `/public/assets/placeholders/`
2. Update the reference in the code file (see "Used in" above)
3. Change the filename in the code

---

## 📐 Recommended Image Sizes

| Image Type | Recommended Size | Aspect Ratio |
|-----------|------------------|--------------|
| Hero Background | 1920x1080px | 16:9 |
| About Preview | 800x800px | 1:1 |
| Founder Photo | 600x800px | 3:4 |
| Project Images | 800x600px | 4:3 |
| Gallery Images | 800x600px | 4:3 |

---

## 🚀 Quick Test

After replacing images:
```bash
npm run dev
```

Visit `http://localhost:3000` and check:
- ✅ Hero background loads
- ✅ About preview image shows
- ✅ Founder photo displays on About page

---

## 💡 Tips

1. **Use high-quality images** (not pixelated)
2. **Compress images** before uploading (use tinypng.com)
3. **Keep filenames lowercase** with no spaces
4. **Format:** JPG for photos, PNG for logos/graphics

---

## ⚠️ Common Issues

**Image not showing?**
- Check filename matches exactly (case-sensitive)
- Make sure image is in `/public/assets/placeholders/` folder
- Try hard refresh in browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors (F12)

**Image looks stretched?**
- Use recommended sizes above
- Maintain aspect ratios

---

## 📍 Most Important Images to Replace First

**Priority 1 - Must Replace:**
1. ✅ Hero background: `hero-1.jpg`
2. ✅ Founder photo: `founder.jpg`

**Priority 2 - Should Replace:**
3. ✅ About preview: `about-preview.jpg`
4. ✅ Company background: `about-company.jpg`

**Priority 3 - Optional:**
5. Project images (project-1.jpg to project-4.jpg)
6. Gallery images (gallery-1.jpg to gallery-8.jpg)

---

Need help? Just ask! 🙌




