---
layout: ../../layouts/PortfolioProjectLayout.astro
titleZh: 个人博客
titleEn: Personal Blog
descZh: 你正在看的这个网站。基于 Astro 构建，支持深色模式与中英双语切换，包含交互式地球仪和卡片动效。
descEn: The site you're on right now. Built with Astro, featuring accessibility and some cool visuals
preview: /portfolio/personal-blog/Jimi_light.png
---

Built with the Astro static site generator; a CSS variable design system keeps the visual style consistent across the site.

Navigation is driven by centralized config. Interest cards use a 3D tilt hover effect; the globe component is built with Three.js to visualize visit locations. The site supports Chinese/English switching and dark mode.

## Tech Stack

- **Astro** — Static site generation with zero runtime and optional hydration
- **TypeScript** — Type-safe config and utilities
- **CSS variables** — Single design system; dark mode is handled by variable overrides
- **Three.js** — 3D globe rendering

## Github 

For more details, check this projects Github repo: https://github.com/JimiOwO/jimiblog