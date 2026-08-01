# CHANGELOG

All notable changes to the **From Vertex to Reality** scroll-driven cinematic experience project will be documented in this file.

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
