import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Docs live as Markdown/MDX under src/content/docs/<section>/<page>.{md,mdx}.
// The folder is the section (users | extensions | development); the file is the
// page. `order` controls sidebar position within a section.
const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { docs };
