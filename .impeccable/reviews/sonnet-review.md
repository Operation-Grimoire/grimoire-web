# Independent review: simplified Grimoire homepage and docs

- **Reviewer model:** Sonnet 5.5 (`claude-sonnet-5-5`), run by Claude Code as the Orca worker for task_68c80e9f2cb2
- **Date:** 2026-11-05
- **Workspace:** `the grimoire-web repository root` (uncommitted tree, untracked files included)

## Scope and evidence

**Read in full (current working tree):**
- Homepage: `webapp/src/pages/index.astro`, `styles/global.css`, `components/Header.astro`, `components/Footer.astro`, `layouts/Layout.astro`, `site.config.ts`, `pages/404.astro`, and the top of `pages/add-repo.astro`.
- Docs: `docs/src/app/global.css`, `components/docs-header.tsx`, `static-link.tsx`, `provider.tsx`, `guide.tsx`, and all of `docs/content/docs/**` (index, users/*, extensions/*, development/*, comparison, meta.json files).
- Root `PRODUCT.md` and the first 120 lines of `DESIGN.md`.

**Visually inspected:** `.impeccable/review/simple-home-desktop.png`, `simple-home-mobile.png`, `simple-docs-desktop.png`, `simple-docs-mobile.png`. I also cropped and zoomed the ghost area of the desktop capture.

**Not run by me:** builds, type-check, ESLint, the detector, `git diff --check`, the local preview, and the browser interaction checks. Their results are the parent's reported validation and I have not re-verified them. I did not read `docs/src/lib/layout.shared.tsx`, `page.tsx`, `mdx.tsx` or the rest of `DESIGN.md`.

## Verdict: SHIP

I found no blocking or material defects. Items 1–3 are small optional fixes, and the rest is cleanup or unverified.

## Checked and fine

- **Simple-copy instruction:** the homepage has no tagline, slogan, promo closing section or footer slogan.
  - Hero is "Grimoire" plus the factual line "An open-source Android reader for web novels and EPUBs." (`index.astro:20-21`).
  - Feature rows are Sources / Library / Offline reading with functional one-line descriptions (`index.astro:11-13`). These are descriptions of what each does, not taglines, and I do not flag them.
  - Footer is name, links and copyright (`Footer.astro:4`).
  - `PRODUCT.md:31` records the no-slogan rule.
- **Ghost paws on the rim:** the zoomed desktop crop shows both paws resting on and slightly overlapping the phone's top rim, with no gap. This is the user's explicit requirement and it holds. The mobile capture shows the same ghost-on-phone placement, but I did not zoom it.
  - The CSS anchors it to the phone (`global.css:57-59`): `bottom:100%` with a 22% downward translate, so it scales with the phone at every breakpoint.
- **Identity:** dark navy and icy-blue tokens match across `webapp/src/styles/global.css:8-15` and `docs/src/app/global.css:12-27`. Header and brand are consistent in both apps, with the icon and Baskervville wordmark. Light app screenshots are untouched, as instructed.
- **Docs copy:**
  - Titles and descriptions are short and factual.
  - In-page anchors exist for the links that target them: `#read-offline` (`reading.mdx:14`), `#import-an-epub` (`library.mdx:14`), `#add-another-repository` (`sources.mdx:20`).
  - Install requirements and commands are specific rather than decorative.
- **Contrast and a11y by inspection:** text colors on `#0b0d1c` are high contrast. There is a skip link (`Header.astro:5`) and focus-visible styling (`global.css:24`). The reduced-motion override is present (`global.css:107`). The ghost image is decorative with `alt=""`, and the screenshots have descriptive alt text.
- **Static-hosting design:** `static-link.tsx:5-9` and `provider.tsx:9-13` consistently use native navigation. Static-export behavior on the real host is unverified by me.

## Findings (prioritized)

1. **Low: leftover filler in docs.** The user asked for decorative prose to go; these few sentences read as filler and are not functional.
   - `docs/content/docs/users/reading.mdx:12`: "The website's midnight theme is separate from the app's reader theme. Choose the page colors that work best for your eyes and the light around you." This is the only place the docs mention the site theme, and it is confusing. Suggest deleting it.
   - `reading.mdx:10`: "Try a few changes with a chapter open so you can see how the page feels." The heading "Make the page comfortable" (`reading.mdx:8`) is also soft. Suggest "Reader settings".
   - `library.mdx:18`: "Importing a book and backing up your library serve different purposes."
   - `library.mdx:30`: the backups-vs-downloads sentence is useful, but the sentence before it is padding.
2. **Low: wrong target for "Build an extension".** `docs/content/docs/index.mdx:24` links "Build an extension" to `/docs/extensions/` (the overview), while the actual build guide is `/docs/extensions/build/`. The title and the destination disagree.
3. **Low: editorial prose in the comparison page.** It is untouched in this change (`git status` does not list it), so it was not part of the simplification pass.
   - `comparison.mdx:6-7`: "How Grimoire stacks up… move fast".
   - `comparison.mdx:67-75`: the "Different strengths… Neither app is strictly 'more featured'" callout.
   - `comparison.mdx:77-80`: the closing call for another app to be added.
   - Decide whether "keep it simple" should extend to this page.
   - Related outside the diff: `add-repo.astro` still says "magic link" (lines 36, 62, 111), which is user-facing wording.
4. **Cosmetic: "All releases" is misaligned.** `global.css:49` gives `.release-note a` a `margin-left: 8px` on desktop. The simple-home-desktop capture shows it indented about 7px relative to the paragraph and button above it. The mobile rule at `global.css:105` resets it.
5. **Cleanup: dead CSS after removing sections.**
   - `.start-section` (`global.css:73,74,79,80,102`) has no markup left.
   - `.story-copy > p` (`global.css:74`) has no matching element.
   - `.site-footer p` (`global.css:83`) has no matching element.
   - The `.faq-item`, `.copy-toast` and `.repo-empty` rules (`global.css:87-89`) are used by `add-repo.astro`, so keep them.
6. **Cleanup: metadata wording.** `site.config.ts:5` describes the app as an "Android novel reader with pluggable content extensions". It omits EPUBs, which the hero now states. It is used for meta, Open Graph and JSON-LD. The wording is factual, so this is only a consistency gap.
7. **Cleanup: duplicated GitHub URL.** The repo URL is hard-coded in `docs/src/components/docs-header.tsx:18` rather than shared with the site config. Different apps, so low risk.

## Unverified

- **Trailing-slash links on the real host.** Some docs links omit the trailing slash: `comparison.mdx:28` uses `/docs/extensions`, and `sources.mdx:24` links to `/add-repo?name=…`. Since links are now native anchors with no Next router fallback, whether the deployment host redirects or serves these depends on its static hosting config. Local preview did not cover this and I did not test it.
- **Empty sidebar footer box.** The docs desktop capture shows a bordered box with only a GitHub icon at the bottom of the sidebar (`simple-docs-desktop.png`, bottom left). I did not read `layout.shared.tsx`, so I cannot say whether the empty label is intended or a regression.
- **Capture and layout behavior.** The sidebar appears to end at about 1000px in the full-page docs capture, which looks like a sticky-element capture artifact rather than a defect. Reduced-motion and keyboard behavior, the real-device ghost animation, and the 1100/800/450px breakpoints between the two captured widths were not tested.
- **External claims.** I did not check external facts in the docs, such as Android 8.0, JDK 17, Gradle module names, the CONTRIBUTING.md path on `main`, or the extension API names, against their repositories.

---

## Follow-up verification (2026-11-05, Sonnet 5.5 `claude-sonnet-5-5`)

The original review above is unchanged. This section records the narrow follow-up applied afterwards (findings 1, 2, 4, 5, 6).

### Fixes applied
- `docs/content/docs/users/reading.mdx`: heading "Make the page comfortable" is now "Reader settings". Removed the "Try a few changes…" sentence and the website-midnight-theme paragraph.
- `docs/content/docs/users/library.mdx`: removed only "Importing a book and backing up your library serve different purposes." Kept the keep-the-original-EPUB advice and the backup-versus-downloads sentence.
- `docs/content/docs/index.mdx`: the "Build an extension" link now targets `/docs/extensions/build/`.
- `webapp/src/styles/global.css`: removed the `.start-section` rules (base and 800px media), the `.story-copy > p` rule, the `.site-footer p` rule, and the `margin-left` on `.release-note a` (base and 450px). `.story-copy h2` no longer lists `.start-section h2`.
- `webapp/src/site.config.ts`: description is now "Grimoire is an open-source Android reader for web novels and EPUBs, with pluggable content extensions."

Not changed: comparison.mdx, magic-link wording, the GitHub URL in `docs-header.tsx`, the icon, ghost placement, palette, fonts, screenshots, and behavior.

### Checks I ran
- `webapp`: `npm run build` completed (3 pages built).
- `docs`: `npm run types:check` exit 0; `npm run lint` exit 0 with no output; `npm run build` exit 0.
- `bash scripts/assemble-site.sh` ran successfully. It rebuilds the ignored `dist-site/` directory (existing behavior; no deployment).
- Greps of the assembled output: `dist-site/docs/users/reading/index.html` contains "Reader settings" and no "midnight theme"; `dist-site/docs/index.html` contains `href="/docs/extensions/build/"`; `dist-site/index.html` contains the new description text.
- `git diff --check`: no whitespace errors beyond the existing LF/CRLF warnings.
- `curl http://localhost:4173/` returned 200.

### Not checked
- No new screenshots were taken, so the "All releases" alignment and the visual result of the CSS removals are unverified. Dead-rule removal rests on the earlier grep and the successful build.
- I did not confirm that the localhost:4173 preview serves the refreshed `dist-site`.
- Trailing-slash host behavior and the empty sidebar GitHub box remain unverified, as above.

### Remaining findings
None material. Still open and out of scope: finding 3 (comparison.mdx editorial text, "magic link" wording) and finding 7 (duplicated GitHub URL).
