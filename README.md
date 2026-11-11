## Overview

Source code for my [personal website](https://jimipeng.com/). It is a portfolio, blogs, galleries, and other random fun stuff that I come up with.

## A11y (Accessibility)

This website is built for everyone, featuring dark/light mode and multilanguage support.
Additionally, it is keyboard navigable, touch screen friendly, and emphasize cultural neutrality.

This website follows [WCAG (Web Content Accessibility Guidelines)](https://www.w3.org/WAI/standards-guidelines/wcag/).

## Tech Stack

- **Framework**: Astro
- **Styling**: Vanilla HTML5 / CSS3
- **Infrastructure**: GitHub + Netlify
- **AI**: Cursor with Claude Sonnet
- **Domain**: [pengui.dev](https://pengui.dev) (main); [jimipeng.com](https://jimipeng.com/) (alias)

## Project Structure

```text
public/              Static files served as-is (images, icons, CV.pdf)
src/
  components/        Header, footer, toggles, globe background, blog list item
  config/            Site name, navigation, contact info, interests, visited places
  icons/             SVG icons inlined by the Social component
  layouts/           Base page shell + layouts for blog posts and portfolio projects
  pages/             Routes; posts/*.md are blog posts, portfolio/*.md are projects
  styles/            Design tokens (design-system.css) and global styles
  utils/             Shared types and helpers for posts and portfolio entries
```

To add a blog post, drop a Markdown file into `src/pages/posts/` with `title`, `description`, `pubDate` (`YYYY-MM-DD`) and `tags` in its frontmatter.

## Local Development

### Prerequisites

- Node.js (LTS recommended)

### Setup

```bash
# Clone the repository
git clone https://github.com/JimiOwO/jimiblog

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will be available at http://localhost:4321/.

## Deployment

Continuous Deployment (CD) is configured via GitHub Actions. Any push to the `master` branch automatically triggers a build and deploys the updated static files to GitHub Pages.

## License

This project is licensed under the **MIT License**.
Feel free to fork, tweak, or use it as a reference.
