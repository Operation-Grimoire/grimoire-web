# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Feature index and guide links

`src/components/FeatureDirectory.astro` renders the full linked inventory from `src/data/features.ts`. Preserve entry IDs when renaming labels. Each destination must point to a useful, explicitly anchored reader-guide section. Search filters feature names, original labels, categories, and aliases; the `feature` query parameter preserves its state through navigation. Without JavaScript, the full index remains visible.

After building both applications, run `bash scripts/assemble-site.sh` from the repository root, then `python scripts/check-site-links.py`. The checker validates the combined output, all feature destinations, the original 119-entry inventory, and preserved reader heading fragments. See `plans/features-and-docs-validation.md` for validation boundaries.

## Homepage SVG ghost

Run `npm run dev` and open `/` for the refined SVG ghost with the original app screenshots. The homepage selects `ghostStyle="refined"` in `src/components/Hero.astro`. Its body outline in `src/data/ghost-artwork.ts` is traced from `src/assets/brand/launcher-foreground.png`, with eye proportions copied from that artwork. Idle motion adds a visible hover, a small tilt, waving wisps and a swaying tail without compressing the body. Reduced motion keeps the ghost still.
