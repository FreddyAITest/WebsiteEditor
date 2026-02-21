# AntiGravity v1.0

A high-end, one-page marketing portal designed for visionary architects and urban planners. The site introduces "AntiGravity" – a revolutionary building system that manipulates gravity to allow for weightless, unsupported structures.

## Project Architecture
- **Tech Stack:** Vanilla HTML5, CSS3, JavaScript (ES6)
- **Design Philosophy:** Minimalist, avant-garde, brutalist aesthetics with high contrast (Vantablack, Platinum, Concrete Gray).
- **Performance:** Zero dependencies, no heavy frameworks. Optimized for fast initial load and smooth scroll-driven animations on modern browsers.
- **Responsiveness:** Fully responsive from mobile devices to ultra-wide desktop monitors using fluid typography and CSS grid/flexbox layouts.

## Key Features
1. **Mouse Path Parallax:** The dynamic Hero background gently reacts to the cursor, providing a tangible sense of volume and space.
2. **Scroll-Driven Theme Swapping:** The site programmatically transitions from dark mode to a stark white "CAD grid" theme in the "Problem" section, highlighting the oppressive nature of gravity, before descending back into pitch black.
3. **Animated Reveal Interactions:** All layout elements use `IntersectionObserver` to trigger elegant slide-up reveals when they enter the viewport.
4. **Horizontal Image Carousel:** The "Use Cases" slider implements native CSS Scroll Snapping for butter-smooth horizontal panning across high-fidelity architectural renderings.
5. **Simulated Form Submission:** The exclusive "Pioneer Access" form includes a functional frontend submission flow utilizing vanilla JS to simulate an asynchronous API call.

## Deployment Instructions

This repository is optimized for immediate, zero-configuration deployment on platforms like Vercel, Netlify, or GitHub Pages.

**Vercel Deployment (Recommended):**
1. Push this repository to GitHub/GitLab.
2. Import the project into Vercel.
3. Vercel will automatically detect the static structure (`index.html`) and deploy it instantly.
4. No build commands or output directories need to be configured.

## Local Development
To run the site locally, you can use any static server. For example, with Python installed:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

## Assets
The `assets/` directory contains 5 bespoke, 8K-resolution, AI-generated photorealistic images portraying monolithic, support-free structures (Villa, Skyscraper, Pavilion, Solution, Hero Block).

---
*Created by AntiGravity Design Systems (2026).*
