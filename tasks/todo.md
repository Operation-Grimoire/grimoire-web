# Linked feature index and reader guides

## Open source and centered download

- [x] Add a factual Open source section after the matrix with code, issue and contribution links.
- [x] Replace the homepage's bare closing actions with a centered heading, Android requirement, download button and install guide.
- [x] Keep the ghost clear of the closing copy and preserve the separate study pages.
- [x] Build, check links and inspect bottom-section order, centering, hover/focus and narrow/large-text layouts.

Closing validation: Astro build and assembled links pass (1,402 internal links; existing feature destinations retained). Open source precedes the new download section and footer. The download button stays centered within 1px and at least 56px tall at 320/390/768/1024/1440px. Text links retain dotted/solid states without background fills and keep keyboard outlines. New sections fit 200% text without horizontal overflow; the ghost clears the closing heading on desktop and mobile. Captures: `.impeccable/review/open-source-download-desktop.png`, `open-source-mobile.png`, and `download-mobile.png`. No deployment.

## Overview before the matrix

- [x] Broaden the hero and metadata to books, novels, light novels, web novels and EPUBs.
- [x] Add a compact reading/listening/offline/library overview before the complete matrix, with Getting started and All features links.
- [x] Keep the #features anchor and all guide destinations; update navigation and ghost heading placement for the new flow.
- [x] Build and inspect hero, overview, matrix order, anchors and ghost at desktop/mobile widths.

Overview validation: Astro build and assembled links pass (1,401 internal links; all 119 feature destinations preserved). Browser checks confirm hero → overview → matrix order, three simple highlights, Features navigation to #overview and the All features jump to #features. No horizontal overflow at 320/390/768/1024/1440px or 200% overview text; reduced motion leaves the ghost static on the phone. The final ghost perch stays above the overview heading on desktop and mobile. Captures: `.impeccable/review/overview-{hero-desktop,hero-mobile,desktop,mobile}.png`. No deployment.

## Readability follow-up

## Feature wording and link affordances

### First-time reader wording

- [x] Explain website connections and add-ons before introducing app terminology.
- [x] Rewrite headings, feature labels and conditions around ordinary reader tasks; preserve IDs and old search terms.
- [x] Introduce the actual app vocabulary in the linked website/add-on setup guides.
- [x] Build both apps, validate destinations, and check novice wording/search and desktop/mobile layout.

First-time reader validation: both production builds pass, including docs TypeScript. Assembled output passes 1,399 internal links and all 119 existing feature destinations. The visible matrix no longer uses source, repository, checksum or API as unexplained terms; the website setup guide introduces the actual app terminology. Earlier labels remain searchable. Browser checks pass at 320/390/768/1440px and 200% text with no overflow or page errors. Screenshots: `.impeccable/review/features-beginner-{desktop,mobile}.png`.

Follow-up: use 2px underlines with no hover/focus background fill, and add a short overview beneath each of the ten category headings. Preserve the focus outline and solid blue hover/focus underline.

Verified: build and assembled links pass. All ten descriptions render; underlines remain 2px in default, hover and focus states; feature backgrounds remain transparent. Desktop/mobile captures are `features-descriptions-{desktop,mobile}.png` in `.impeccable/review/`, with no mobile overflow.

- [x] Replace vague feature names with plain descriptions of reader actions; preserve search aliases and guide destinations.
- [x] Give every feature/category link a dotted underline that becomes solid and ice blue on hover or focus.
- [x] Build, check destinations and inspect link states, mobile wrapping and search.

Wording/link validation: Astro build and the assembled-site check pass. All 139 feature/category link labels are dotted by default; category shortcuts, headings and feature links become solid ice blue on hover and keyboard focus. All 119 destinations remain valid. Browser checks cover old labels, direct guide navigation and Back, 320/390/768/1440px widths, 48px targets and 200% text with no overflow or page errors. Captures: `.impeccable/review/features-clear-{desktop,mobile}.png`.

## Earlier readability work

- [x] Remove displayed counters and simplify feature labels without changing IDs or guide links.
- [x] Add category icons and larger feature text in two columns that read top to bottom.
- [x] Build, check all links, and inspect desktop/mobile search and navigation.

Follow-up validation: Astro build and assembled-site link check pass (119 feature destinations; 1,398 internal links). Browser checks pass at 320/390/768/1024/1440px, including column order, 48px targets, old search terms, guide links, Back, category jumps, clear/empty and Escape. JavaScript-disabled inventory and reduced motion still work. The final 200% text check passes after allowing long category headings to wrap. Fresh final captures loaded all hero images with no page errors or failed requests. Screenshots: `.impeccable/review/features-simple-{desktop,mobile}.png`. Local only.

- [x] Reconcile feature names, conditions and UI instructions with the pinned source and targeted audit.
- [x] Expand the reader docs into 20 task guides, preserving existing fragments.
- [x] Add stable feature IDs, direct guide links, category jumps and progressive search.
- [x] Build both apps, assemble the site, check local pages/fragments and exercise the index at desktop/mobile sizes.

Scope: preserve all 119 inventory identities, the hero, ghost and docs layout. Qualify source-dependent behavior and supplied checksums. Local implementation and website validation do not establish Android runtime acceptance. No deployment.

Validation and exact proof limits: [features-and-docs-validation.md](../plans/features-and-docs-validation.md). All guide links and legacy headings pass. Browser checks cover search, category navigation, Back, keyboard, narrow/large text, JavaScript disabled and reduced motion. No Android device run or exhaustive live-source acceptance.

# HTML app preview

- [x] Inspect screenshot references and pass the existing Astro build.
- [x] Add reusable library and reader markup; preserve the default hero.
- [x] Add an isolated preview with original-screen comparisons.
- [x] Build, inspect desktop/mobile, and review the scoped diff.

Risk: web font rendering differs from Android. Cover artwork remains raster; app chrome and text become HTML/CSS. No app functionality is implied by these illustrative screens.

Validation: Astro build passed before/after. Production preview checked at 1440, 1024 and 390px: no horizontal overflow, page errors or failed resources. Homepage still renders screenshot phones. Independent review approved the isolated preview after fixing baked-in cover badge bleed; short-label mutation checked visually. No real-device testing.

# SVG ghost study

- [x] Compare the current SVG with the original launcher artwork.
- [x] Trace the actual icon silhouette and preserve it at rest in an opt-in variant.
- [x] Add `/ghost-svg-lab/`, retaining screenshot phones and both existing ghosts.
- [x] Build and check desktop/tablet/mobile, scroll settling and reduced motion.
- [x] Complete independent visual review and preview documentation.

Scope: shape fidelity to the app icon. No homepage switch, 3D changes, or new scroll route. Vector data records the source image hash and tracing method. Raw contour comparison: 98.52% silhouette IoU; this does not measure glow or animated rendering. No real-device tests.

Motion follow-up: make idle motion visible at hero size. Build passed; 40 idle samples at each width showed 40 distinct outlines, about 10px vertical face movement at 1440px and 7px at 390px. No overflow/page errors; reduced motion leaves no active ghost animations. 3D source hashes unchanged.

Homepage promotion: user approved the animated SVG. `/` now selects the refined variant with screenshot phones; the superseded SVG lab page is removed. Build passed; homepage checked at 1440/390px with animation active, no horizontal overflow or page errors, and static reduced-motion fallback. The separate 3D study still loads and its source hashes are unchanged. Local only; no deployment.
