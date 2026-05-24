# Agent Notes

- Package manager is pnpm (see `package.json` `packageManager`); use `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm preview`.
- Content collections live in `src/content.config.ts` (Astro 6 loader API). Blog posts are in `src/content/blog`.
- Blog index is paginated via `src/pages/blog/[...page].astro` and details via `src/pages/blog/[slug].astro` (uses `render(entry)` from `astro:content`).
- Theme tokens and layout styling are centralized in `src/styles/global.css` and controlled by the `data-theme` attribute on `<html>`.
- `@astrojs/tailwind@6.0.2` peers only up to Astro 5; expect pnpm peer warnings with Astro 6.
- Prettier config is `prettier-plugin-astro` only (see `.prettierrc.mjs`).
