# Portfolio Website (Astro)

Minimal, text-led personal site built on Astro 6 with a floating navigation pill, light/dark themes, and a clean blog experience.

## Features

- Minimal, typography-forward layout
- Floating nav with theme toggle
- Blog with content collections and pagination
- Projects + Experience pages
- Responsive layout and consistent spacing

## Tech Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com/) (integration only)
- [DaisyUI](https://daisyui.com/) (dependency retained for optional components)
- [pnpm](https://pnpm.io/)

## Getting Started

```bash
pnpm install
pnpm dev
```

Build/preview:

```bash
pnpm build
pnpm preview
```

## Content

Blog posts live in `src/content/blog` and are loaded via Astro content collections in `src/content.config.ts`.

Example frontmatter:

```yaml
---
title: "Post Title"
description: "Short summary of the post"
pubDate: "Sep 10 2022"
updatedDate: "Oct 2 2022"
heroImage: "./itemPreview.webp"
badge: "Notes"
---
```

## Routes

- `/` home
- `/blog/` blog index (paginated)
- `/blog/[slug]` post detail
- `/projects` projects list
- `/resume` experience

## Theming

Theme tokens live in `src/styles/global.css` and are driven by `data-theme` on `<html>`. The toggle stores the value in `localStorage` under `theme`.

## Project Structure

```text
├── src/
│   ├── components/
│   │   ├── BaseHead.astro
│   │   ├── CardList.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HorizontalCard.astro
│   │   ├── ThemeToggle.astro
│   │   └── cv/TimeLine.astro
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [...page].astro
│   │   │   └── [slug].astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── resume.astro
│   └── styles/global.css
├── public/
├── astro.config.mjs
├── tailwind.config.cjs
├── package.json
└── tsconfig.json
```
