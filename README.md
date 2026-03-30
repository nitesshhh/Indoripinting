# IndoriPrinting — Premium B2B Polo T-Shirt Website

A premium 3D business website for IndoriPrinting built with React + Vite + Tailwind CSS + Three.js + Framer Motion.

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + Vite | Frontend framework + build tool |
| Tailwind CSS | Utility-first styling |
| Three.js + @react-three/fiber | 3D polo shirt rendering |
| @react-three/drei | Three.js helpers (Float, OrbitControls) |
| Framer Motion | Smooth scroll animations |

## Project Structure

```
indoriprinting/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── TShirt3D.jsx       # 3D polo shirt (Three.js canvas)
│   │   ├── Hero.jsx           # Hero section with 3D shirt
│   │   ├── Customizer.jsx     # Live color/logo/text customizer
│   │   ├── Pricing.jsx        # Bulk pricing cards
│   │   ├── OrderForm.jsx      # Order form → WhatsApp
│   │   ├── WhyUs.jsx          # Feature cards
│   │   ├── Footer.jsx         # Footer
│   │   └── FloatingWidgets.jsx # Fixed WhatsApp + Call buttons
│   ├── App.jsx                # Root component + shared state
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Netlify

### Option 1 — Netlify CLI (fastest)
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option 2 — Netlify Dashboard (drag & drop)
1. Run `npm run build`
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag the `dist/` folder to the deploy zone

### Option 3 — Connect Git Repository
1. Push to GitHub/GitLab
2. In Netlify → "New site from Git"
3. Build command: `npm run build`
4. Publish directory: `dist`

> No `netlify.toml` required for a Vite SPA — Netlify auto-detects it.
> For client-side routing, add a `public/_redirects` file:
> ```
> /*    /index.html   200
> ```

## Configuration

### Update Phone Numbers
In `src/App.jsx`:
```js
export const WHATSAPP_NUMBER = '919XXXXXXXXX'  // without +
export const PHONE_NUMBER = '+91-9XXXXXXXXX'
```

### Update Pricing
Edit the `PRICING` array in `src/App.jsx`.

### Update Colors
Edit `SHIRT_COLORS` in `src/App.jsx`.

## Features

- **3D Polo Shirt** — Rotates with Float animation, responds to drag
- **Live Customizer** — Color, logo upload, company name all update the 3D preview in real time
- **Pricing Table** — Click to select a plan; auto-fills the order form
- **Order Form** — Validates inputs; generates pre-filled WhatsApp message
- **Success Modal** — Opens WhatsApp chat with pre-filled order details
- **Floating Widgets** — WhatsApp (green) + Call (blue) with pulsing animations
- **Mobile Responsive** — Fully optimised for all screen sizes
- **Dark Premium Theme** — Deep blacks, brand red (#e63329), gold accents (#c9a84c)
