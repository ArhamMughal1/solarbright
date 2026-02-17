# 🚀 CrypGo Deployment Guide
## Cloudflare Workers Free Tier

---

## Prerequisites

Before deploying, ensure you have:

1. ✅ Node.js 18+ installed
2. ✅ npm 9+ installed
3. ✅ Cloudflare account (free tier)
4. ✅ Domain connected to Cloudflare (optional)

---

## Step 1: Initial Setup

### Install Dependencies

```bash
cd crypgo-optimized
npm install
```

### Verify Installation

```bash
# Type checking
npm run type-check

# Lint
npm run lint

# Build test
npm run build
```

---

## Step 2: Configure Cloudflare

### 2.1 Install Wrangler CLI

```bash
npm install -g wrangler

# Login to Cloudflare
wrangler login
```

### 2.2 Get Account ID

```bash
# View your account details
wrangler whoami

# Copy your Account ID
```

### 2.3 Create KV Namespace

```bash
# Create production KV namespace
wrangler kv:namespace create "ASSETS"

# Save the ID that's returned
```

### 2.4 Update wrangler.toml

Edit `wrangler.toml` and update:

```toml
account_id = "YOUR_ACCOUNT_ID_HERE"

[[kv_namespaces]]
binding = "ASSETS"
id = "YOUR_KV_NAMESPACE_ID_HERE"

routes = [
  { pattern = "/*", zone_name = "your-domain.com" }  # Optional: Your domain
]
```

---

## Step 3: Update Configuration

### 3.1 Update Domain References

Edit `src/app/layout.tsx`:

```typescript
// Line 19 - Update with your actual domain
export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  // ...
}
```

### 3.2 Add Verification Codes

Edit `src/app/layout.tsx`:

```typescript
verification: {
  google: 'your-google-site-verification-code',
  // bing: 'your-bing-verification-code',
},
```

To get Google verification code:
1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Choose HTML tag verification
4. Copy the verification code

### 3.3 Update Social Media Links

Edit structured data in `src/app/layout.tsx`:

```typescript
sameAs: [
  'https://twitter.com/your-handle',
  'https://facebook.com/your-page',
  'https://linkedin.com/company/your-company',
],
```

---

## Step 4: Optimize Images

### 4.1 Compress Existing Images

```bash
# Install image optimization tool
npm install -g sharp-cli

# Compress images
cd public/images
sharp -i "*.png" -o "optimized/" --webp

# Or use online tools:
# - TinyPNG: https://tinypng.com/
# - Squoosh: https://squoosh.app/
```

### 4.2 Create Required Images

You need to create these images:

1. **og-image.png** (1200x630px)
   - Location: `public/images/og-image.png`
   - Use: OpenGraph/Facebook sharing

2. **twitter-image.png** (1200x675px)
   - Location: `public/images/twitter-image.png`
   - Use: Twitter card

3. **icon-192.png** (192x192px)
   - Location: `public/images/icon-192.png`
   - Use: PWA icon (small)

4. **icon-512.png** (512x512px)
   - Location: `public/images/icon-512.png`
   - Use: PWA icon (large)

5. **apple-icon.png** (180x180px)
   - Location: `public/apple-icon.png`
   - Use: iOS home screen

6. **icon.png** (32x32px)
   - Location: `public/icon.png`
   - Use: Browser favicon

---

## Step 5: Build for Production

### 5.1 Production Build

```bash
npm run build
```

### 5.2 Verify Build

Check that:
- No errors in console
- Bundle size < 3MB
- All routes compile successfully

```bash
# Check bundle size
ls -lh .next/static/chunks/

# Analyze bundle (optional)
ANALYZE=true npm run build
```

---

## Step 6: Deploy to Cloudflare

### Method 1: Using Wrangler (Recommended)

```bash
# Deploy to Cloudflare Workers
wrangler pages deploy

# Follow prompts to:
# 1. Create a new project or select existing
# 2. Choose production branch
# 3. Confirm deployment
```

### Method 2: GitHub Integration

1. Push code to GitHub
2. Go to Cloudflare Dashboard → Pages
3. Connect your GitHub repository
4. Configure build settings:
   ```
   Build command: npm run build
   Build output: .next
   Root directory: /
   ```
5. Add environment variables (if any)
6. Deploy

---

## Step 7: Post-Deployment Configuration

### 7.1 Configure Custom Domain (Optional)

```bash
# Add custom domain via Wrangler
wrangler pages domains add your-domain.com --project-name=crypgo-production
```

Or via Dashboard:
1. Go to Workers & Pages → Your Project
2. Custom domains → Set up a custom domain
3. Add your domain
4. Update DNS records as instructed

### 7.2 Setup HTTPS

Cloudflare automatically provides SSL/TLS:
1. Go to SSL/TLS settings
2. Select "Full (strict)" mode
3. Enable "Always Use HTTPS"
4. Enable "Automatic HTTPS Rewrites"

### 7.3 Configure Caching

In Cloudflare Dashboard:
1. Go to Caching → Configuration
2. Set Browser Cache TTL: "Respect Existing Headers"
3. Enable "Always Online"
4. Create Page Rules:
   ```
   URL: *your-domain.com/images/*
   Cache Level: Cache Everything
   Edge Cache TTL: 1 month
   ```

---

## Step 8: SEO Setup

### 8.1 Generate Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <lastmod>2026-02-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add more URLs -->
</urlset>
```

### 8.2 Submit to Search Engines

**Google Search Console**:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership (code already in layout.tsx)
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

**Bing Webmaster Tools**:
1. Go to [Bing Webmaster](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap

### 8.3 Setup Analytics

**Cloudflare Web Analytics** (Free & Privacy-focused):
```bash
# Enable in Dashboard
Dashboard → Analytics & Logs → Web Analytics → Enable
```

Add to `src/app/layout.tsx` before `</head>`:
```typescript
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
        data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

---

## Step 9: Performance Monitoring

### 9.1 Lighthouse Testing

```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run Lighthouse
lhci autorun --collect.url=https://your-domain.com
```

### 9.2 WebPageTest

Visit [WebPageTest](https://www.webpagetest.org/) and test:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Total Blocking Time (TBT)

### 9.3 Core Web Vitals

Monitor in Google Search Console:
- LCP < 2.5s ✅
- FID < 100ms ✅
- CLS < 0.1 ✅

---

## Step 10: Ongoing Maintenance

### 10.1 Regular Updates

```bash
# Update dependencies monthly
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### 10.2 Performance Monitoring

Set up alerts in Cloudflare:
1. Dashboard → Analytics → Create Alert
2. Monitor:
   - Request rate
   - Error rate
   - Response time

### 10.3 Backup Strategy

```bash
# Backup before updates
git tag v1.0.0
git push origin v1.0.0

# Rollback if needed
wrangler pages deployment list
wrangler pages deployment rollback
```

---

## Troubleshooting

### Issue: Bundle Size > 3MB

**Solution**:
```bash
# Analyze bundle
ANALYZE=true npm run build

# Identify large packages
npx source-map-explorer '.next/static/**/*.js'

# Consider:
# 1. Removing unused dependencies
# 2. Lazy loading heavy components
# 3. Using dynamic imports
```

### Issue: Hydration Errors

**Solution**:
```typescript
// Add suppressHydrationWarning to problematic elements
<div suppressHydrationWarning>...</div>

// Ensure client-only code runs after mount
const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])
```

### Issue: Images Not Loading

**Solution**:
1. Check Cloudflare Image Resizing is enabled
2. Verify image paths are correct
3. Check `cloudflare-image-loader.ts` configuration

### Issue: API Routes Failing

**Solution**:
1. Verify Edge Runtime is enabled: `export const runtime = 'edge'`
2. Check no Node.js APIs are used
3. Test locally: `npm run dev`

---

## Success Checklist

Before considering deployment complete:

- [ ] All environment variables configured
- [ ] Domain DNS pointed to Cloudflare
- [ ] SSL certificate active
- [ ] Images optimized and compressed
- [ ] Sitemap submitted to search engines
- [ ] Google Search Console verified
- [ ] Analytics tracking enabled
- [ ] Lighthouse score > 90 on all metrics
- [ ] No console errors on production
- [ ] Mobile responsiveness verified
- [ ] All links working correctly

---

## Support & Resources

### Documentation:
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Next.js](https://nextjs.org/docs)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

### Community:
- [Cloudflare Community](https://community.cloudflare.com/)
- [Next.js Discord](https://nextjs.org/discord)

### Tools:
- [Cloudflare Dashboard](https://dash.cloudflare.com/)
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server
npm run type-check       # Check TypeScript
npm run lint            # Lint code

# Building
npm run build           # Production build
ANALYZE=true npm run build  # Analyze bundle

# Deployment
wrangler pages deploy   # Deploy to Cloudflare
wrangler pages tail     # View logs

# Maintenance
npm update              # Update dependencies
npm audit               # Check security
wrangler pages deployment list  # List deployments
```

---

**Deployment Guide Version**: 1.0  
**Last Updated**: February 15, 2026  
**Status**: ✅ Production Ready
