# Performance Optimizations - Cusmato Website

## ✅ Completed Optimizations

### 1. Code Splitting (Route-based)
- **Before**: 598KB main bundle (163.89KB gzipped)
- **After**: 207KB main bundle (63.85KB gzipped)
- **Improvement**: ~66% reduction in main bundle size
- All pages now lazy-loaded with React.lazy() + Suspense
- Vendor chunks separated: react-vendor, framer-motion

### 2. Vite Build Configuration
- Manual chunking enabled for better cache invalidation
- React, React DOM, React Router → separate vendor chunk
- Framer Motion → separate chunk
- Asset inline threshold set to 4KB

### 3. React Optimizations
- `useMemo` added for large arrays (features, FAQ items, workflow steps)
- Prevents unnecessary re-computation on re-renders
- Applied to BestellingenRetourenPage (example pattern for other pages)

### 4. Image Optimizations (Partial)
- Added `decoding="async"` to images for better rendering performance
- `loading="lazy"` already present on below-fold images

## 📋 TODO: Image Optimization (Manual Steps Required)

### Convert PNG Screenshots to WebP
Large PNG files in `/public` should be converted to WebP format for ~70% smaller file sizes.

**Manual conversion options:**

1. **Using ImageMagick** (if installed):
```bash
cd public
for file in *.png; do
  convert "$file" -quality 85 "${file%.png}.webp"
done
```

2. **Using Sharp (Node.js)**:
```bash
npm install --save-dev sharp
node -e "
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('public').filter(f => f.endsWith('.png'));
files.forEach(file => {
  sharp(`public/${file}`)
    .webp({ quality: 85 })
    .toFile(`public/${file.replace('.png', '.webp')}`);
});
"
```

3. **Online tools**: Use Squoosh.app or similar

**After conversion:**
- Update image src in pages to use `.webp` extensions
- Keep `.png` as fallback for older browsers if needed

**Largest screenshots to prioritize:**
- Bestellingen dashboard.png
- knowledgebase.png
- Cusmato workflows.png
- Ai facturatie.png
- Verzendingen.png
- Klantdata.png

## 📋 TODO: Additional Optimizations

### 1. Apply useMemo to Other Pages
Copy the useMemo pattern from BestellingenRetourenPage to:
- KnowledgebasePage.tsx
- WorkflowsRegelsPage.tsx
- AIFacturatiePage.tsx
- AIHelpdeskPage.tsx

### 2. React.memo for Pure Components
Consider wrapping pure presentational components:
- FAQAccordion
- Section
- Reveal (if no state)

### 3. Font Loading
Already optimized with `font-display: swap` in Google Fonts link.

### 4. Tailwind CSS Purge
Verify Tailwind config includes all content paths:
```js
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
```

### 5. Preconnect/DNS-Prefetch
Already present for Google Fonts. Add for other external domains if any.

## 📊 Expected Performance Improvements

- **Initial Load**: ~66% smaller main bundle → faster TTI
- **Route Navigation**: Pages load on-demand → faster subsequent navigation
- **Caching**: Better cache invalidation with separate chunks
- **Images**: WebP conversion will reduce total page weight by ~50-70%

## 🔍 Measurement Notes

To measure improvements:
1. Run Lighthouse before/after
2. Check Network tab in DevTools for bundle sizes
3. Monitor LCP, FCP, TTI metrics
