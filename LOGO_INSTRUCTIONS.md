# Logo Replacement Instructions

## Current Logo

The site currently uses a **placeholder logo** (`/public/logo.svg`). Replace it with your actual Grand Prix India logo.

## Accepted Logo Formats

1. **SVG** (recommended) - Scalable, sharp at all sizes
2. **PNG** - With transparent background
3. **WebP** - Modern format, good compression

## Logo Specifications

### Dimensions
- **Minimum**: 200×200 px
- **Recommended**: 400×400 px or vector (SVG)
- **Aspect Ratio**: Square or horizontal (max 2:1)

### File Size
- Keep under 50 KB for fast loading
- Use PNG compression tools if needed

### Background
- Transparent background preferred
- If not possible, use white background

## How to Replace

### Method 1: Simple Replacement

1. Rename your logo file to `logo.svg` (or `logo.png`)
2. Place it in `/public/` folder
3. **If using PNG/WebP**, update Header component:

Open `src/components/Header.tsx` and find (around line 30):

```tsx
{/* Current placeholder */}
<div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
  <span className="text-white font-serif font-bold text-lg">GPI</span>
</div>
```

Replace with:

```tsx
{/* Your actual logo */}
<img 
  src="/logo.svg" 
  alt="Grand Prix India" 
  className="h-8 w-auto"
/>
```

### Method 2: Different Header & Footer Logos

If you want different logo sizes/styles for header and footer:

**Header** (small logo):
```tsx
<img 
  src="/logo-small.svg" 
  alt="Grand Prix India" 
  className="h-8 w-auto"
/>
```

**Footer** (larger logo):
Open `src/components/Footer.tsx` and find the logo section:

```tsx
<img 
  src="/logo-large.svg" 
  alt="Grand Prix India" 
  className="h-12 w-auto"
/>
```

## Logo Placement

The logo appears in:
1. **Header** - Top left of every page (small)
2. **Footer** - Center of footer (larger)
3. **Meta tags** - For social media (use square version)

## Optimizing Your Logo

### For SVG Files
- Remove unnecessary metadata
- Use tools like [SVGOMG](https://jakearchibald.github.io/svgomg/)

### For PNG Files
- Use [TinyPNG](https://tinypng.com/) to compress
- Export at 2x resolution (e.g., 400×400 for 200×200 display)

### For Brand Colors
If your logo has specific colors, update the color scheme in `tailwind.config.js`:

```js
colors: {
  primary: '#b69849',  // Replace with your primary brand color
  dark: '#1e1e1e',     // Replace with your dark/text color
}
```

## Testing

After replacing:
1. Run `npm run dev`
2. Check header on desktop and mobile
3. Verify footer appearance
4. Test on different screen sizes
5. Check social media preview (Open Graph)

## Example Code

### Responsive Logo Sizing

```tsx
<img 
  src="/logo.svg" 
  alt="Grand Prix India" 
  className="h-6 sm:h-8 md:h-10 w-auto"
/>
```

### With Link to Homepage

```tsx
<Link href="/" className="flex items-center">
  <img 
    src="/logo.svg" 
    alt="Grand Prix India" 
    className="h-8 w-auto"
  />
</Link>
```

### Dark/Light Variants

If you have different logos for dark/light backgrounds:

```tsx
{/* Light background (header) */}
<img src="/logo-dark.svg" alt="GPI" className="h-8" />

{/* Dark background (footer) */}
<img src="/logo-light.svg" alt="GPI" className="h-12" />
```

## Need Help?

Contact your web developer if:
- Logo appears pixelated
- Logo doesn't fit properly
- Need custom logo sizing
- Want animated logo effects

---

**Quick Tip**: Keep both SVG and PNG versions of your logo. SVG for the website, PNG for emails/documents.

