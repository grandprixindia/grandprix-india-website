# 📧 EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a **FREE** account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other provider
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Grand Prix India contact form.
```

4. **Copy the Template ID** (you'll need this)

## Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. **Copy your Public Key**

## Step 5: Update Configuration
1. Open `/src/lib/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID', // ← Replace with your Service ID
  templateId: 'YOUR_TEMPLATE_ID', // ← Replace with your Template ID
  publicKey: 'YOUR_PUBLIC_KEY', // ← Replace with your Public Key
};
```

## Step 6: Test the Form
1. Go to your contact page
2. Fill out and submit the form
3. Check your email inbox!

## 🎉 That's It!
- **Free tier**: 200 emails/month
- **No server required**
- **Works on any hosting platform**

## Troubleshooting
- Make sure all IDs are correct
- Check your email provider's spam folder
- Verify your email service is active in EmailJS dashboard
