# Linked feature index and reader guides

## PR packaging validation

The complete homepage, docs, ghost, preview studies, and authored planning records were reviewed together on 2026-11-08. The retained app-screen and 3D studies now reuse `FeatureDirectory.astro`; a regression assertion failed against their old output and passes against the shared directory. The Android contribution-guide link was corrected to the repository's `master` branch and verified through GitHub.

Final local checks passed: Astro production build, docs ESLint, docs `types:check`, Next.js production build, combined-site assembly, and `git diff --check`. The assembled-site checker passed for 31 HTML pages and 1,678 internal links, preserving all 119 feature destinations across 20 guides, legacy headings, and matching inventories on both study pages. The isolated Three.js study still emits the existing bundle-size advisory.

A fresh browser context checked the homepage, `/app-preview/`, and `/ghost3d-lab/` at 390px: each rendered 119 feature links, no object placeholders or horizontal overflow, and no page errors. The Reading guide also loaded. Earlier responsive, keyboard, search, reduced-motion and no-JavaScript checks are recorded below and in `tasks/todo.md`. These are website checks; Android device acceptance and production deployment remain unexecuted.

## Readability follow-up

The owner's follow-up removes displayed entry/category counters and the introductory instruction. Feature names are shorter, such as Multiple themes, Font choices, Text spacing, and Batch downloads. Earlier labels remain searchable. Category headings and the jump index use matching SVG line icons, and search has a magnifying-glass icon. Feature links use 16px text, 48px minimum targets, two columns reading top to bottom, one column below 540px, and underlines on hover or focus. IDs, inventory and guide links are preserved. Long category names can wrap beside their icons at enlarged text sizes.

The validation below records the initial implementation; follow-up results are recorded in tasks/todo.md. Initial follow-up browser captures encountered failed stylesheet/image requests and were discarded. Checks were repeated after confirming the midnight stylesheet and fonts had loaded.

## Initial implementation

Implemented locally on 2026-11-08. The previous session stopped at the proposal and static sketch. This continuation implemented that plan in the existing dirty worktree; unrelated prior changes remain in place. No commit, PR, deployment, or Android acceptance run was performed.

## Result

- All 119 original inventory identities remain in `webapp/src/data/features.ts`, with stable IDs, original labels, current labels, exact guide destinations, search aliases, and adjacent conditions where needed.
- `FeatureDirectory.astro` provides ten expanded categories, direct links, a wrapping jump index, and progressive search with counts, clear, empty, Escape, and browser-history handling. Search state uses the homepage's `feature` query parameter. Choosing a category clears search before jumping.
- The primary reader journey no longer promotes the competitor comparison. Its existing page still builds.
- Twenty reader guides plus Getting started explain the destinations. Sidebar separators group reader tasks. Existing reader URLs and article-heading fragments remain.
- The existing hero, screenshot phones, docs layout, and ghost artwork remain. The ghost fades before crossing the new controls; its artwork and scroll route are retained.

Counts describe catalog entries, not independent workflows. The two whole-book EPUB entries describe different contexts of the same source-delivery workflow.

## Source and claim checks

The pinned Android source is `0150cd2afda1b194e5fb64ca2db315fbc60f49ba` (beta.331), matching the prior audit. The GitHub latest stable endpoint was rechecked during this continuation and still identified v1.0.1. The stable-to-pinned comparison was also fetched: it contains extension compatibility/download changes, chapter ordering, and diagnostics work. Unchanged UI paths support documenting those existing controls, but are not proof of installed-APK behavior.

The source review remains in [app-feature-evidence.md](app-feature-evidence.md). Follow-up inspection used the actual Android string resources and these implementation areas under `app/src/main/java/io/grimoire/app/`:

| Guides | Inspected implementation |
| --- | --- |
| Sources, repositories, finding novels | Browse/GlobalSearch/SourceBrowse screens, NovelQuickViewSheet, SourceSettings screen/view model, GitHubAuthScreen, ConnectionsSettingsScreen, ExtensionRepository/Installer |
| Library, novel details, chapter list | LibraryScreen, FilterSortSheet, LibrarySettingsScreen, NovelDetailScreen/ViewModel, JumpDialog |
| Library updates and tasks | LibraryUpdateSettingsScreen, MoreScreen, TasksScreen and the original audit's update handling |
| Reading | ReaderScreen/ViewModel, ReaderTextLayout, ReaderPreferences, reader settings and string resources |
| Listening | TtsSettingsScreen, TtsVoicePickerScreen and the original audit's ElevenLabs/cache implementation |
| Downloads and EPUBs | DownloadsScreen, novel detail download/import/export actions and the original audit's EPUB paths |
| History and statistics | HistoryScreen, StatisticsScreen, MoreScreen |
| NovelUpdates | Browser, search, series and saved-series screens; NovelUpdatesSettingsScreen |
| Backups and storage | BackupSettingsScreen, DataSettingsScreen, BackupPreferencePolicy and the original audit's backup models and merge rules |
| Hiding and appearance | HiddenCategoriesSettingsScreen, ReaderTextLayout, Appearance/Browse/Languages settings and the original audit's authentication, locale and palette definitions |
| Installation and app updates | AboutSettingsScreen and the original audit's updater selection and checksum paths |

Corrections include supplied-hash qualifications; account-unlocked chapters and source-dependent capabilities; device authentication scoped to hidden categories; the ElevenLabs key, quota and network requirement; backup exclusions; and incognito retaining progress. Reader Book % is a fraction of chapters marked read, using the locked-chapter total preference, rather than an aggregate of scroll percentages.

This is static source-informed documentation, not runtime verification of every feature or third-party source. No source login, private repository authentication, paid chapter retrieval, ElevenLabs request, real backup restore, migration, update installation, or device test was executed. Source-specific behavior can still vary. Website build and link checks do not establish those acceptance gates.

## Local validation

Both applications passed baseline builds before implementation. Final checks:

- Astro production build: passed. The existing large-chunk advisory from the separate 3D study remains.
- Next.js/Fumadocs production build: passed, including TypeScript and 26 documentation routes.
- Dedicated docs `types:check`: passed.
- Docs ESLint: passed.
- `scripts/assemble-site.sh`: passed using Git Bash on Windows.
- `python scripts/check-site-links.py`: passed for 31 assembled HTML pages, 1,398 internal links, all 119 feature destinations across 20 guides, and existing reader headings.
- Impeccable mechanical detector: returned `[]` for the directory, homepage and homepage stylesheet. The subsequent ghost change was reviewed as scoped animation logic.
- `git diff --check`: passed; Git emits existing line-ending conversion notices.

The permanent link checker also asserts unique feature IDs, preservation of the original labels, exact registry-to-rendered-link correspondence, and that each feature fragment is an actual rendered heading. [reader-fragments-before.json](reader-fragments-before.json) records the article headings from the pre-change production docs output, excluding the framework's TOC heading.

## Browser proof

The assembled site was served at `http://127.0.0.1:4183/`. Initial visual checks used Orca's browser; a separate Playwright context checked modes absent from the documented Orca interface.

- Default inventory: 119 entries in ten visible categories.
- TTS alias: fourteen Listening matches; unknown query: zero matches with an empty state; Clear restores all entries.
- Category jump during search clears the query, restores the matrix, and reaches the requested anchor.
- Tab reaches Clear search; Escape resets the input and results.
- A feature opens `/docs/users/listening/#elevenlabs` at a rendered heading. Back restores the query and filtered status after the URL-state correction.
- Layout checks passed at 320, 390, 768, 1024 and 1440px. Columns reduce from three to two to one; links retain at least 44px height. No horizontal document overflow was found.
- A text-enlargement simulation at 390px doubled premeasured font sizes and produced no horizontal overflow. This was a browser simulation, not Android accessibility testing. An initial test mistakenly compounded nested font sizes; the corrected simulation passed after a full reload.
- The mobile ghost opacity dropped below 0.05 while intersecting the protected control region. Initial inspection had shown it over the search label; the avoidance fix was verified in the final output.
- With JavaScript disabled: all 119 entries and ten groups remain visible, search controls stay hidden, and a native feature link reaches its guide fragment.
- Reduced motion: zero running animations and the ghost remains at its phone placement.
- The Listening guide fits the 390px viewport. No page errors were observed in the executed checks; the Orca console was empty.

Local screenshots are in `.impeccable/review/feature-index-desktop.png`, `feature-index-mobile.png`, and `feature-guide-mobile.png`. These are browser evidence, not Android screenshots or device acceptance. Self-review found no remaining issue in the changed website scope; no new independent agent review was run.

Suggested commit message when this work is ready to commit: `feat(web): link feature index to reader guides`.
