# 🔧 Environment Variables Setup

## For Local Development
Create a `.env.local` file in your project root:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## For Production (Vercel)
1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add these variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## For Production (Netlify)
1. Go to your Netlify project dashboard
2. Site settings → Environment variables
3. Add the same variables as above

## Security Note
- These are `NEXT_PUBLIC_` variables, so they're safe to expose
- EmailJS public key is meant to be public
- Never put sensitive data in `NEXT_PUBLIC_` variables
