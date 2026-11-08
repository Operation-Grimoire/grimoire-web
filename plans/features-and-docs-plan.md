# Grimoire features and reader documentation

Original proposal, 2026-11-08. Local implementation now follows this plan. See [implementation validation](features-and-docs-validation.md) for current checks and proof limits. The coverage counts and static sketch below record the original planning snapshot.

## Recommendation

Keep a complete, grouped feature matrix on the homepage. Make it a useful index into the reader documentation: every feature name opens the section that explains it. Use the existing midnight palette, Fraunces category headings, Figtree feature links and fine rules. Give the inventory better navigation and link affordances rather than turning it into a wall of cards.

The primary proof of breadth is the complete list of useful capabilities. Counts support that list; they are not a headline claim to inflate. Remove the homepage's LNReader comparison link. Keep the accepted hero, screenshot phones, SVG ghost and closing download action.

The proposed docs structure has 20 substantial guides plus Getting started. Related features share a guide and use precise heading anchors. The sidebar lists tasks and articles, not 119 separate pages.

## What exists today

The catalog in `webapp/src/data/features.ts` has 119 unique labels in 10 groups. The reader docs currently expose Getting started and four short guides: installation, sources, library and reading.

| Current coverage | Entries | Meaning |
| --- | ---: | --- |
| Documented | 9 | Current reader docs provide usable instructions, although expansion may still be needed. |
| Partial | 49 | A feature is mentioned or claimed, but its use, conditions or advertised breadth are not explained. |
| Missing | 61 | No feature-specific coverage was found in the inspected MDX. |

These are documentation findings, not judgments about whether the app implements a feature. Comparison-table claims count only as partial coverage. The audit and complete mapping are in [docs-audit.md](docs-audit.md) and [feature-docs-map.json](feature-docs-map.json).

The map preserves all current labels to make omissions detectable. It proposes destinations; those pages and anchors do not all exist yet. Label changes from the source review must preserve the feature's identity and mapping.

Treat 119 as the current inventory size, not proof of 119 independent workflows. Some entries describe related settings or the same capability in different contexts. Keep every entry accounted for and documented, but do not inflate the public count through cross-listing. Final naming and count presentation follow the source review.

## Homepage design

Open [the static design sketch](feature-matrix-concept.svg) to see all 119 current labels in the proposed desktop arrangement. It is a planning drawing, not an interactive prototype or a finished responsive layout. Its source labels are intentionally unchanged pending the claim review.

### Structure

1. **Section heading:** Features, with a modest count beside it and a short instruction: Select a feature to read how it works.
2. **Find a feature:** a compact, clearly labeled search field. It searches feature names and a small set of useful aliases, such as TTS/read aloud, offline/downloads and biometric/fingerprint. It does not search private user data or the app.
3. **Category index:** the 10 category names with counts. These are ordinary in-page jump links. The active section can receive a small ice-blue indicator; navigation must work without JavaScript.
4. **Complete matrix:** all categories and entries are visible by default. A category title and count occupy the left column. Three columns of feature links occupy the right side on wide screens. Thin rules separate groups.
5. **Closing action:** retain the download action. The section may link to the reader guide, but it does not need a competitor comparison CTA.

Each label has a quiet, visible underline. A hover or keyboard focus gives the link area a slight tonal lift and a clear focus outline. The label itself is the link; avoid repeated Learn more links or an extra click through a popover. Do not rely on hover to explain conditions.

The group heading links to that group's main guide, while each feature links directly to its own explanation. A feature can share a target with a related entry only when that section explicitly explains both.

### Search and navigation behavior

- Default state: all 119 current entries across 10 expanded groups. The published count comes from the final verified registry.
- Search: narrow the existing matrix without navigating away. Show matching group and overall counts, preserve group context, and provide a clear action to restore all entries.
- No results: say no features match the query and offer Clear search. Do not replace the matrix with promotional content.
- Category links jump rather than hide other groups. If a category is chosen while search is active, clear the search before jumping so its destination is visible.
- Search is progressive enhancement. All links, headings and entries exist in the server-rendered page and remain available to browser Find without JavaScript.
- Do not put a huge metric, comparison ticks, carousels, repeated icon cards, default-collapsed accordions, or a second animated mascot into this section.

### Responsive behavior

Use three feature columns on wide screens, two on intermediate widths, and one on narrow phones. On phones the category title sits above its links. The category index wraps; it must not require sideways scrolling. At larger text sizes, reduce columns before truncating labels. Feature links need comfortable touch areas, with a 44px minimum height on touch layouts.

A compact category bar may become sticky while the visitor is inside the matrix if it fits without crowding the viewport. Keep it in normal flow on narrow phones if it would occupy too much space. Sticky navigation, search results and heading anchors must not collide with the SVG ghost's path. Test that interaction in the assembled page.

## Documentation structure

Keep short, stable URLs and group the sidebar by reader tasks. The grouping below does not require new nested route folders or extra category landing pages.

| Sidebar group | Articles |
| --- | --- |
| Start here | Getting started; Install & updates |
| Find books | Sources & extensions; Managing repositories; Finding novels; Using NovelUpdates |
| Manage books | Your library; Novel details; Working with chapters; Keeping the library updated; History & statistics; Moving between sources |
| Read & listen | Reading; Listening; Downloading chapters; EPUB books |
| Settings & maintenance | Backing up & restoring; Managing storage; Hiding & locking; Appearance & language; Background tasks |

The JSON map includes each article's proposed URL and purpose, plus an exact destination and drafting caveat for every feature.

### Examples of direct destinations

| Homepage feature | Proposed destination |
| --- | --- |
| Global search | Finding novels: Global search |
| Private GitHub repositories | Managing repositories: private repository setup |
| Font size control | Reading: font size |
| ElevenLabs voices | Listening: ElevenLabs setup and requirements |
| EPUB export | EPUB books: exporting to EPUB |
| PIN-locked hidden categories | Hiding & locking: hidden categories |

Use the exact fragments in the canonical JSON when implementing; the descriptions above explain the intended reading experience.

### What a feature explanation must contain

Each section should answer the reader's practical question:

- What does the feature do, and where is it in the app? Use the actual menu labels.
- How do I turn it on or use it? Give steps and the result the reader should see.
- What does it require? Explain source support, account access, Android permissions, device capabilities, connectivity or a paid provider when relevant.
- What changes or gets stored? Explain scope, persistence, reset, deletion and recovery where those matter.
- What can go wrong, and what should I try next? Link to the related task rather than duplicating a full procedure.

Most sections can be short. Give high-consequence tasks such as restore, source migration, credentials and deletion enough detail to avoid surprises. A one-line definition is not enough just because its anchor exists.

Keep overlapping tasks distinct: app appearance versus reader-page appearance; local EPUB import versus EPUB-delivering sources; chapter downloads versus backups; source sign-in versus private repository access; image masking versus hidden-category locks.

Use real screenshots selectively for hard-to-find controls. Do not require a screenshot for every setting, and do not present the HTML phone studies as evidence of the Android UI.

## Source and claim review

The targeted Android review pins current source rather than treating the old matrix comment as current proof. Its findings and source links belong in [app-feature-evidence.md](app-feature-evidence.md). It is a targeted audit, not a complete runtime test of all 119 entries.

Before publishing, reconcile each feature with the build reached by the homepage download link. Current source, unchanged paths across releases, a successful APK download and observed runtime behavior are different forms of evidence. The reviewed stable-to-beta diff does not suggest broad new beta-only feature groups, but that does not prove all 119 claims against an installed stable APK.

Examples that need precise labels or visible qualifiers:

- Extension and app SHA-256 verification depend on hash metadata being supplied. Do not imply that every publisher supplies a hash.
- Incognito concerns history recording; do not describe it as anonymity, encryption or a network privacy mode.
- Unlocking chapters depends on the source implementation and the reader's account access. The app does not grant access to content.
- Biometric unlock depends on the device and enrolled authentication methods.
- ElevenLabs uses the reader's provider account and API key. Explain usage, connectivity and cached replay separately from on-device speech.
- Exact counts such as sort fields, palettes, languages and column choices belong in maintained documentation. Consider shorter homepage labels such as Library sorting and Interface languages, with the current detail in the guide.

Do not silently remove entries to simplify the design. Reword misleading labels, combine only true duplicates, and record the change against a stable feature ID. If a capability is not on the advertised release, hold that claim or clearly label its availability and link to the appropriate build.

## Linking and maintenance

Extend the existing feature registry so each entry has a stable ID, display label, group and docs target. Optional search aliases and availability qualifiers belong there too. Keep source evidence associated with the registry or a separate audit file; do not expose commit hashes as homepage content.

Use explicit, stable MDX IDs, for example `## Choose a font [#font-family]`. The installed Fumadocs heading plugin supports this syntax; the audit verified it at plugin level. Still check the rendered HTML and TOC in the production build.

Preserve the existing reader URLs and heading fragments. When a broad guide's detailed procedure moves to a new article, leave a useful summary and onward link at the old fragment. A server redirect cannot preserve a removed fragment by itself, because the browser does not send fragments to the server.

Remove the homepage comparison CTA and the comparison-led entry from the primary reader journey. The existing `/docs/comparison/` URL can remain as an unpromoted legacy reference; deleting or rewriting that article is not required to ship this plan. It must not become the default destination for a feature.

## Delivery order

1. **Confirm the inventory and destinations.** Review the source caveats, agree the user-facing names, adopt stable IDs, and settle the 20-guide structure. Preserve all 119 current identities through any renames.
2. **Write the core guides.** Start with finding sources, library organization, reading, listening, downloads and EPUBs. Verify exact UI steps against the advertised app build.
3. **Complete the remaining guides.** Cover repositories, updates, NovelUpdates, migration, history, backups, storage, locks, appearance and tasks. Cross-link shared procedures and preserve old fragments.
4. **Implement the linked matrix.** Build the approved desktop/mobile design, direct links, jump index and optional search using the final registry. Remove the comparison CTA. Publish the homepage links only when all their destinations are useful.
5. **Validate the combined site.** Build Astro and docs, then assemble them with the repository's site assembly workflow. Validate links in that combined output, not only the standalone Astro preview.

## Completion checks

- Every retained feature has one stable identity and a useful explanation; no current entry disappears without a recorded decision.
- Every published homepage link resolves to an existing built page and heading ID. No generic page-top substitutes, dummy anchors, comparison-table targets or placeholder guides.
- Guides identify entry points, steps, conditions and meaningful limits. Source claims match the advertised release; unresolved claims stay unpublished or explicitly qualified.
- The complete inventory is visible without JavaScript. Search, clear, no-results, category jumps, keyboard navigation and browser Back work predictably.
- The layout works at narrow phone, tablet and desktop widths, with large text and reduced motion. Search results and sticky controls do not cover content or disrupt the ghost.
- Existing reader links and fragments still work. Astro build, docs build, docs type/lint checks and the combined link/fragment check pass.

## Research behind the proposal

- [Tailscale's feature directory](https://tailscale.com/features) combines grouped entries, search, result counts and individual explanation links. Its [Auth keys destination](https://tailscale.com/docs/features/access-control/auth-keys) illustrates the direct-to-docs path. This is the strongest structural reference.
- [Zed's feature reference](https://zed.dev/features) uses detailed anchored explanations and links into docs. Borrow its navigability, not its long descriptions for every homepage entry.
- [Firefox's complete feature catalog](https://www.firefox.com/en-US/features/all/) makes the full inventory explicit, but its article destinations would add an unnecessary detour here.
- [Obsidian](https://obsidian.md/), [Linear](https://linear.app/) and [Raycast](https://www.raycast.com/) offer useful examples of selected capabilities and product demonstrations. Their selective presentation is less suited to the requirement that every Grimoire feature be visible and linked.

These are observed structural patterns, not templates to copy. Research used live official pages; their mobile layouts and accessibility behavior were not tested. The static sketch is a Grimoire-specific proposal, and its controls are not implemented.
