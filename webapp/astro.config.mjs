// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import { site } from './src/site.config';

// https://astro.build/config
export default defineConfig({
  site: site.url,
  // Starlight turns on link prefetch globally, which injects a ~2 KB script into
  // every page (incl. the 0-JS landing). Disable it — Starlight nav works without.
  prefetch: false,
  integrations: [
    starlight({
      title: 'Grimoire',
      description: 'Guides for using Grimoire, building extensions, and contributing.',
      // Docs live under /docs (content nested in src/content/docs/docs/**).
      // The custom landing + add-repo pages keep src/pages/ and stay untouched.
      // Theme colors first (no @import → applies on first paint), fonts second.
      customCss: ['./src/styles/starlight.css', './src/styles/starlight-fonts.css'],
      // Tell the browser the page is already dark so Edge's auto-dark-mode
      // filter skips it (otherwise it tints the background and re-evaluates ~1s in).
      head: [
        { tag: 'meta', attrs: { name: 'color-scheme', content: 'dark' } },
      ],
      // Preload the above-the-fold docs fonts to stop the load-time font swap
      // (fallback -> webfont) that resized/shifted text on every navigation.
      components: {
        Head: './src/components/StarlightHead.astro',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: site.android.repoUrl },
      ],
      // Force dark only — the brand is a dark grimoire look.
      // (theme toggle hidden in starlight.css)
      sidebar: [
        { label: 'Users', items: [{ autogenerate: { directory: 'docs/users' } }] },
        { label: 'Extensions', items: [{ autogenerate: { directory: 'docs/extensions' } }] },
        { label: 'Development', items: [{ autogenerate: { directory: 'docs/development' } }] },
      ],
      // Send "Edit page" + repo links to the app/site source as appropriate later.
      pagefind: true,
    }),
    sitemap(),
    // Added after Starlight so .mdx works in docs (and anywhere else) later.
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
