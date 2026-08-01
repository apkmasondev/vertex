# From Vertex to Reality

A scroll-driven cinematic web experience showing how a 3D world is built from raw vertices and brought to life through motion and lighting.

Two GOP=1 keyframed video sequences are scrubbed frame-by-frame as the user scrolls inside a single master pinned viewport, with a seamless match-cut crossfade transition between them.

![From Vertex to Reality Cover](/references/transition-frame.png)

## 🌟 Unique Visual Identity & Features

- **3D Viewport Aesthetic**: Custom HUD viewfinder brackets (`┌ ┐ └ ┘`), telemetry reticles, and glassmorphic telemetry cards.
- **Dynamic Text Shimmering**: Animated text gradient shimmer on the main title.
- **Interactive Stage Navigation**: Clickable timeline nodes allowing users to jump directly to any step in the 3D pipeline (`Vertices`, `Topology`, `Geometry`, `Shaders`, `Raytracing`, etc.).
- **60fps Scrubbing Engine**: Direct DOM opacity manipulation on `<video>` elements to avoid React state re-rendering overhead.
- **Zero Layout Thrashing**: `requestAnimationFrame` throttled scroll listener.
- **Full SEO & Accessibility**: Schema.org JSON-LD structured data, canonical URLs, full keyboard focus states (`focus-visible:ring-2`), and ARIA progress bars.

## 🛠️ Stack

- React 19 + TypeScript + Vite
- GSAP ScrollTrigger (scroll-to-video mapping)
- Tailwind CSS v4

## 🚀 Run

```bash
npm install
npm run dev
```

## 🌐 Deployment (GitHub Pages)

The project is configured for direct deployment to GitHub Pages.

```bash
# Build & deploy to gh-pages branch
npm run deploy
```

Repository: [https://github.com/apkmasondev/vertex](https://github.com/apkmasondev/vertex)

## 📄 License

MIT © ApkMason AI Showcase
