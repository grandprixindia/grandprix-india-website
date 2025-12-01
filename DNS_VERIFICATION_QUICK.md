# 🚀 DNS Verification - Quick Cheat Sheet

## In 3 Steps:

### 1️⃣ Get Code from Google
- Open Google Search Console
- Copy the verification code (looks like: `google-site-verification=abc123...`)

### 2️⃣ Add TXT Record in Your DNS
Go to your domain provider and add:

```
Type: TXT
Name: @  (or leave blank)
Value: [paste Google's code here]
TTL: 3600 (or default)
```

### 3️⃣ Wait & Verify
- Wait 2-4 hours
- Check at: https://mxtoolbox.com/TXTLookup.aspx
- Go back to Google and click "Verify"

---

## 📋 Exact Settings

| Setting | Value |
|---------|-------|
| **Record Type** | `TXT` |
| **Host/Name** | `@` or blank |
| **Value/Content** | Google's verification code |
| **TTL** | `3600` or default |

---

## ⚠️ Common Mistakes

❌ **Don't use:** `www` in the name field  
✅ **Use:** `@` or leave blank

❌ **Don't add:** Extra spaces or quotes  
✅ **Use:** Exact code from Google

❌ **Don't verify:** Immediately after adding  
✅ **Wait:** At least 2 hours first

---

## 🔍 Check if It's Working

1. Go to: https://mxtoolbox.com/TXTLookup.aspx
2. Enter: `grandprixindia.in`
3. Look for: `google-site-verification=...`

**See it?** ✅ Ready to verify  
**Don't see it?** ⏰ Wait longer (up to 24 hours)

---

**Need help?** See `DNS_VERIFICATION_SIMPLE.md` for detailed steps!


