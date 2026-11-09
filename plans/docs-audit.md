# Reader docs audit

Pre-implementation audit snapshot. The coverage and line references below describe the prior docs. See [implementation validation](features-and-docs-validation.md) for the current result. The original 119-entry mapping is `feature-docs-map.json`.

- Inventory: `webapp/src/data/features.ts` contains 119 unique labels in 10 groups. The map preserves every label and group exactly.
- Reader entry/navigation: `docs/content/docs/users/meta.json:2-3`, `users/index.mdx:8-20`, and `docs/content/docs/index.mdx:10-20` expose only five short reader pages and a comparison link.
- Source guidance: `users/sources.mdx:8-18` covers extension installation and source-dependent capabilities; `:20-36` covers repository links/manual addition and trust; `:38-44` covers updates and missing-source troubleshooting.
- Library guidance: `users/library.mdx:8-12` mentions organization, refresh and hidden categories; `:14-18` covers local EPUB import; `:20-24` mentions progress, metadata and migration loss; `:26-30` mentions local backups and distinction from downloads.
- Reading guidance: `users/reading.mdx:8-10` names broad reader settings; `:12-16` covers chapter/image downloads; `:18-22` names device and ElevenLabs voice requirements; `:24-26` documents image masking; `:28-32` explains loading/account limitations.
- Installation guidance: `users/install.mdx:10-19` provides APK install steps; `:21-25` explains updates and signing/channel constraints; `:27-31` covers install failures.
- Existing comparison: `docs/content/docs/comparison.mdx:19-65` contains capability claims, not procedures. These are partial coverage where relevant, never full guide evidence. Remove the homepage comparison CTA and comparison-led primary-navigation entry when implementation is authorized. Keep the existing comparison article and URL as an unpromoted legacy reference; rewriting its content is outside this plan's required scope.
- Routing: `docs/src/lib/source.ts:6-10` sets the docs loader; `docs/src/lib/shared.ts:2` sets `/docs`; `docs/src/app/docs/[[...slug]]/page.tsx:16-26,39-44` resolves pages, TOC and MDX; `docs/next.config.mjs:7-12` exports trailing-slash static routes.
- Heading IDs: `docs/source.config.ts:19-23` retains default MDX behavior. `docs/node_modules/fumadocs-mdx/dist/preset-NZprPlqc.js:10-23` includes remarkHeading. `docs/node_modules/fumadocs-core/dist/mdx-plugins/remark-heading.js:5-38` accepts `[#id]`, strips it from visible heading text, writes heading IDs and TOC fragments, and otherwise uses GitHub slugging. A local synthetic-AST execution verified both explicit and generated IDs. No full build or browser validation was performed.

## Proposed structure

Keep the existing Getting started landing page and expand to 20 substantive guides, grouped visually in the sidebar without nested folder routes. Each feature lands on a specific task section. Preserve existing reader paths and original heading fragments; when detailed content moves, keep a useful original summary and onward link. In particular preserve `/docs/users/library/#import-an-epub`.

Coverage: 9 documented, 49 partial, 61 missing. This measures current MDX usefulness, not runtime feature completeness. Feature-specific caveats in the JSON are drafting/research requirements, not inferred assertions about app behavior.
