# CHANGELOG

All notable changes to the **From Vertex to Reality** scroll-driven cinematic experience project will be documented in this file.

## [1.6.0] - 2026-08-02

### Audit & Fixes
- **Fixed invalid Tailwind class `z-25`**: Replaced with `z-[25]` in `MasterCinematicJourney.tsx` — `z-25` is not a standard Tailwind utility and was being silently ignored.
- **Fixed undefined `animate-spin-slow` animation**: Replaced with `animate-[spin_4s_linear_infinite]` arbitrary value in `OverlayNarration.tsx` — the custom animation was never defined in CSS.
- **Removed unused dependencies**: Removed `clsx` and `tailwind-merge` from `package.json` — neither was imported anywhere in the source code.
- **Fixed broken OG/Twitter image paths**: Moved `transition-frame.png` to `public/og-image.png` so it ships in the `dist/` build output. Previous path (`references/transition-frame.png`) was never included in production builds.
- **Fixed fake domain URLs**: Replaced all occurrences of the non-existent `from-vertex-to-reality.dev` domain with the actual `https://apkmasondev.github.io/vertex/` in canonical, OpenGraph, Twitter, and JSON-LD structured data.
- **Fixed Vite base path**: Changed `base` from `'./'` to `'/vertex/'` for correct GitHub Pages subpath deployment.
- **Fixed video source paths**: Replaced hardcoded `./videos/...` with `import.meta.env.BASE_URL` template literals to ensure videos load correctly under any base path.
- **Added `prefers-reduced-motion` support**: Added CSS media query to disable decorative animations for users who prefer reduced motion (accessibility requirement from PLAN.md).
- **Added GitHub Pages SPA `404.html`**: Created `public/404.html` for client-side routing support on GitHub Pages.
- **Removed `dist/` from working tree**: The `dist/` folder should be rebuilt by CI, not tracked in git.

## [1.5.0] - 2026-08-01

### Deployment & Security Preparation
- **Fixed Asset Paths for GitHub Pages**: Changed hardcoded absolute video paths (`/videos/...`) to relative paths (`./videos/...`) in `MasterCinematicJourney.tsx` to prevent 404 errors under subpath deployments like `https://apkmasondev.github.io/vertex/`.
- **GitHub Pages Configuration**: Configured `base: './'` in `vite.config.ts` for relative asset loading. Added `gh-pages` package and `"deploy"` npm script.
- **Git Security & Sensitivity Audit**: Created comprehensive `.gitignore` excluding `node_modules`, `.env*`, `dist/`, logs, and temporary environment files to ensure no sensitive credentials or unnecessary files enter the remote repository.
- **Repository Remote Setup**: Configured remote origin pointing to `https://github.com/apkmasondev/vertex.git`.

## [1.4.0] - 2026-08-01

### Visual Identity & Aesthetic Enhancements
- **Custom Cyberpunk 3D Viewport Corner Brackets**: Added `.hud-corner` framing brackets (`┌ ┐ └ ┘`) around HUD cards and viewport overlays to give the app a distinct 3D rendering engine identity.
- **Dynamic Text Shimmer Effect**: Created `.text-shimmer` CSS animation for the Hero main title ("FROM VERTEX TO REALITY"), cycling glowing gradients seamlessly across cyan, purple, and neon pink.
- **Interactive Narrative Pipeline Slider**: Transformed static step indicator dots in `OverlayNarration.tsx` into fully interactive step buttons. Users can click any stage node (`Vertices`, `Topology`, `Geometry`, `Shaders`, `Raytracing`, etc.) to instantly scroll smoothly to that exact point in the master timeline.
- **Telemetry Reticle & Viewfinder Badges**: Added active viewport reticle indicators (`RENDER VIEWPORT // 1920x1080`), verified keyframe badges, and glassmorphism spec cards.

## [1.3.0] - 2026-08-01

### Fixed & Optimized (SEO, Performance, Memory & Accessibility Audit)
- Moved video element opacities to direct DOM style manipulation in GSAP `onUpdate` loop.
- Wrapped scroll progress handling in `requestAnimationFrame` to eliminate layout thrashing.
- Added Schema.org JSON-LD structured data, canonical URL, and complete OpenGraph meta tags.
- Added full keyboard focus indicators (`focus-visible:ring-2`) and ARIA roles.

## [1.2.0] - 2026-07-27

### Fixed
- Replaced GSAP pin spacing with CSS `position: sticky` to resolve container double-spacing issue.
- Fixed broken section navigation in `useScrollProgress.ts`.
- Removed Web Audio synthesizer drone code and orphaned files.

## [1.1.0] - 2026-07-27

### Changed
- Replaced separate pinned sections with single master 1400vh scroll container.

## [1.0.0] - 2026-07-27

### Added
- Initial project release.
