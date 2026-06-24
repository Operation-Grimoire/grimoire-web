import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Starlight owns the `docs` collection (src/content/docs/**). Content is nested
// one level under docs/ so routes resolve to /docs/* — see src/content/docs/docs/.
export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
