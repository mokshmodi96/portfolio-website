import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

export default defineConfig({
  site: 'https://mokshmodi.dev/',
  integrations: [mdx(), sitemap(), tailwind(), image(
      {
        serviceEntryPoint: '@astrojs/image/sharp',
        cacheDir: "./.cache/image",
        logLevel: 'debug',
      }
  )]
});
