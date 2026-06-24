// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { site } from './src/site.config';

// https://astro.build/config
export default defineConfig({
  site: site.url,
  integrations: [sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      // Dark code theme to sit on the ink background.
      theme: 'night-owl',
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
