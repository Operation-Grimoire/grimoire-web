---
name: Grimoire
description: A midnight library for Android novel readers.
colors:
  ink: "#0b0d1c"
  ink-soft: "#141a2f"
  vellum: "#edf5ff"
  vellum-dim: "#afbed4"
  ember: "#95d9fa"
  ember-bright: "#c7edff"
  arcane: "#777dba"
  arcane-bright: "#b8bff1"
  rune: "#2d3852"
  docs-surface: "#111728"
  docs-sidebar: "#0e1324"
  docs-active: "#223852"
  docs-active-text: "#c6eaff"
  header-border: "#253047"
  nav-text: "#dce7f6"
  docs-info: "#95d9fa"
  docs-warning: "#e7c78b"
  docs-error: "#efa6b0"
  docs-success: "#9ed7c4"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(4rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 3.5vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "26px"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.8
  docs-body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
rounded:
  sidebar-link: "7px"
  mobile-menu: "8px"
  guide-button: "9px"
  button: "10px"
  screenshot: "24px"
  phone: "31px"
spacing:
  nav-gap: "32px"
  header-gap: "24px"
  hero-gap: "48px"
  hero-action-gap: "24px"
  section: "96px"
  section-mobile: "64px"
  docs-measure: "608px"
  matrix-column-gap: "32px"
  matrix-row-gap: "0px"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.ember-bright}"
  text-link:
    textColor: "{colors.ember}"
  guide-button:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.guide-button}"
    padding: "11px 20px"
  sidebar-active:
    backgroundColor: "{colors.docs-active}"
    textColor: "{colors.docs-active-text}"
    rounded: "{rounded.sidebar-link}"
---

# Design System: Grimoire

## Overview

**Creative North Star: "The midnight library"**

The midnight library grows from Grimoire's existing ghost-and-book icon: dark navy surroundings, pale serif titles and icy blue controls. The user selected direction E, the midnight library. The atmosphere is magical and welcoming, with real Android screens providing the product evidence.

The Astro homepage and static Next.js/Fumadocs guides share fonts, colors and brand navigation. The homepage uses a concentrated spectral scene; documentation keeps that identity in a quieter reading layout. Preserve the original app icon and the original screenshot pixels, including their light Android theme.

**Key Characteristics:**

- Midnight navy foundations and icy blue actions.
- Fraunces titles with readable Figtree body text.
- Fine dividers and tonal layers around real app imagery.
- A ghost-and-book identity shared by homepage and documentation.

## Colors

A cool, low-light palette pairs deep navy surfaces with pearl text and spectral blue interaction.

### Primary

- **Spectral ice** (`ember`): primary actions, links, focus and selection; its brighter companion provides hover feedback.

### Neutral

- **Midnight** (`ink`): the page foundation and text on filled actions.
- **Indigo shade** (`ink-soft`): muted surfaces and translucent row hover backgrounds.
- **Pearl** (`vellum`): primary text and serif headings.
- **Blue mist** (`vellum-dim`): supporting copy and release details.
- **Slate divider** (`rune`): section rules and documentation borders.
- Documentation adds a slightly lifted card/popover surface, a dark sidebar and blue selected navigation. Status colors remain semantic info, warning, error and success within Fumadocs.

The source retains ink/vellum/ember/rune aliases for add-repository compatibility. Arcane and arcane-bright remain defined compatibility tokens; the homepage's main action color is spectral ice. Frontmatter records the actual values, not the historical meanings of these names.

## Typography

**Display Font:** Fraunces with Georgia and serif fallbacks, self-hosted at regular weight (400).

**Body Font:** Figtree with system-ui and sans-serif fallbacks, self-hosted at regular, medium and semibold weights (400/500/600). A system monospace alias remains available for code-oriented content.

The serif carries the literary personality; the sans keeps navigation, instructions and controls clear. Headings balance their lines. Body copy stays sentence case.

### Hierarchy

- **Display:** homepage hero uses `clamp(4rem, 7vw, 6rem)` at 1.05 line height, changing to `clamp(3rem, 14vw, 4.5rem)` at 800px and below.
- **Headline:** the homepage All features heading uses the frontmatter headline role. Download uses `clamp(2.2rem, 4.4vw, 3.4rem)` at 1.18 line height. Feature category names use 26px Fraunces.
- **Docs headings:** regular Fraunces with slight negative tracking (-0.015em). H1 uses `clamp(2.2rem, 4vw, 3rem)` at 1.16 line height; H2 uses 1.85rem at 1.3; H3 uses 1.4rem.
- **Body:** homepage supporting text varies by context: hero introduction (18px/1.75, reducing to 16px), hero note (14px/1.7), matrix feature names (16px/1.5), matrix note (13px/1.7), release note (12px/1.8). Docs prose uses the docs-body role.
- **Label:** semibold action text; navigation is 14px, reducing to 13px in the homepage mobile header.

## Layout

Homepage content has a centered maximum width (1200px) with 96px total outer space on desktop. At 1100px and below the total gutter becomes 64px; below 800px it becomes 48px. The header shares that container, so its edges line up with the page at every width. It is 80px tall, and 72px below 800px. Spacing uses steps of 8, 16, 24, 32, 48, 64 and 96px, with 96px between major sections and 64px below 800px. The Features heading and matrix share one column line.

The page runs hero, a short reading overview, the full feature matrix, Open source, then a centered Download Grimoire section. The hero fills the screen below the header. From 801px up, the app icon, name, broad reading description and Download button are centered between the library and reader phones. The description frames Grimoire as a reader for novels of all kinds, with light novels, web novels and an EPUB collection as examples. Below 800px the text comes first, and the phones sit below it and crop at the hero edge. Below 450px actions stack vertically. Header Features stays visible at every width and jumps to the overview; GitHub hides below 450px.

`OpenSource.astro` gives a short factual description of the public project with links to its code, issue tracker and contribution guide. Its open two-column band stacks on mobile. `DownloadSection.astro` centers a larger serif heading, Android requirement note, 56px primary download action and a separate install-guide link. It uses ample vertical space and fine section rules without an enclosing card. Text links keep 2px dotted underlines and solid ice-blue hover/focus. The ghost's final landing marker sits on the download heading so the button and supporting copy remain clear. The separate studies retain their original closing styles.

`ReadingOverview.astro` introduces website reading and imported EPUBs, followed by three plain benefits: Read or listen, Take books offline, and Keep your library organized. On desktop, a larger serif introduction and two guide/detail links sit beside three open, ruled benefit rows. On mobile, the introduction precedes the rows. There are no enclosing cards, counters or new artwork. The overview uses the existing 96px/64px section rhythm, 2px dotted links with solid blue hover/focus, and routes to Getting started or the full matrix. The matrix retains `#features` and is titled All features. The ghost perches above the overview heading and avoids its supporting text and controls.

The documentation header is sticky, 80px tall with 16px minimum inline padding, so the logo lines up with the sidebar. Below 767px it becomes 72px tall, and desktop links give way to search and sidebar controls. Article title, rules and text share a centered 608px measure; pages with tables use the full column. Article top padding changes from 48px to 28px on mobile. Fumadocs owns the remaining article/sidebar layout.

## Elevation & Depth

Fine borders and neighboring navy tones establish the basic structure. Product imagery carries the substantial depth: dark phone shadows, inset edges, slight rotations and a diffuse radial blue light. The spirit hovers above the library phone, then drifts after the page scroll with a soft delay: it hovers above the reading overview heading, follows the left margin, and settles above the Download Grimoire heading, leaving the download button clear. It fades as it falls behind, and on a fast scroll it dissolves and re-forms at its destination. Documentation uses quieter tonal separation.

### Shadow Vocabulary

- **Phone frame:** `0 18px 38px #0007, inset 0 0 0 1px #60728b`.
- **Story screenshot:** `0 16px 48px #0006`.

The ghost arrival lasts 900ms with `cubic-bezier(.16,1,.3,1)`, moving from 10px below with opacity 0 to 1 and no blur into place. Homepage navigation and primary/row hover transitions last 180ms. Both apps disable animation and transitions for reduced motion; homepage smooth scrolling also becomes automatic.

## Shapes

Actions use modestly rounded corners; app imagery uses larger device-like curves. The homepage primary button, docs guide button, mobile menu and selected sidebar link have distinct observed radii recorded above. Screenshots use rounded corners inside a more rounded phone frame. Feature and guide rows are open, full-width ruled links rather than enclosed cards. Decorative light uses ellipses and radial gradients.

## Components

### Buttons and text links

Homepage primary links use spectral ice over midnight, semibold Figtree, a 50px minimum height and the button padding/radius tokens. Hover brightens the fill. Secondary text links use ice-blue underlined text with a muted blue underline, becoming brighter with a current-color underline on hover. Docs guide buttons use the same color relationship with their slightly smaller radius and padding.

Homepage keyboard focus uses a 2px ice-blue outline offset by 5px. Docs sets the focus color to the same blue with a 4px offset, retaining the component's outline shape. Keep the homepage skip link visible on focus.

### Navigation

The original icon sits next to the serif Grimoire name: wordmark 28px, or 25px on mobile, with a 44px icon, or 38px on mobile, on both sites. Main links use pale blue text with an icy hover; docs marks the current section in ice blue. Navigation targets have a 44px minimum height. Selected docs sidebar links use the blue active surface, pale blue text and a small radius.

### Feature matrix

The homepage shows the app's range as a linked feature index in `FeatureDirectory.astro`. Fine slate rules divide expanded category rows, each with a line icon, a 26px Fraunces guide link, and a short 14px description of the group's purpose. Plain action labels use 16px text in two columns that read top to bottom, reducing to one below 540px. Categories stack above links below 800px. There are no displayed entry or category counters. All feature and category link labels have a 2px dotted underline, becoming solid and ice blue on hover or keyboard focus without a background change. Icons and supporting conditions remain unadorned; feature targets have a 48px minimum height. Each feature opens its exact guide heading. Short explanations clarify unfamiliar terms, scope, source-dependent capabilities and provider requirements.

A wrapping category index with matching line icons jumps to each section. A compact search field has an accessible Find a feature label and filters names and aliases, with clear and empty states. A screen-reader status describes filtering without counters. Search state is kept in the homepage's `feature` query parameter so browser Back can restore it. Category jumps clear search first. Without JavaScript, the search controls stay hidden and the full linked index remains visible. There are no cards or comparison checks. Content and stable IDs live in `webapp/src/data/features.ts`; the original inventory and source review remain in `plans/`. Earlier labels remain searchable after simplification.

The existing ghost artwork and scroll route remain. It fades before crossing the feature search and category controls, using measured avoidance regions. Reduced motion retains its static phone placement.

Feature copy assumes a first-time reader. The first category is Find books and explains that website add-ons connect Grimoire to novel websites. Use connected websites rather than sources, website add-ons rather than unexplained extensions, and add-on catalogs rather than repositories. Introduce the actual app terms in the destination guides. Other headings describe reader goals, such as Your library, Reading, Read offline and Discover more books. Explain ebook files, provider setup and backup exclusions in ordinary language. Keep prior names as search aliases and preserve stable IDs and guide anchors.

### Docs guide rows

Docs guide rows use a text column and 20px arrow column with 20px vertical padding, thin slate rules, supporting mist text and a translucent indigo hover.

### Comparison marks

The docs comparison uses drawn check, dash and cross marks with hidden text labels, so meaning does not rely on color. Do not use emoji.

### Product scene

The library and reader screenshots sit in dark rounded phone frames on either side of the hero text, each slightly rotated, with the icon-matching SVG spirit hovering above the library. Below 800px they overlap, with small star accents nearby. The hero app icon uses the launcher foreground from the Android app on a black tile with a 34% corner radius, cropped to the center 72/108 of the layer as Android does. The original light app screens remain intact. The spirit is an inline SVG in `webapp/src/components/Ghost.astro`, using the body outline traced from the original launcher icon in `webapp/src/data/ghost-artwork.ts` and matching eye proportions. Its full silhouette and tail remain visible, with a clear hover, small tilt, and gentle idle motion in the side wisps and tail. The header continues to use the original app icon. With reduced motion or without JavaScript, the ghost stays still above the library phone.

### Footer

A serif Grimoire name sits opposite a compact documentation/GitHub/releases navigation. The footer wraps with a separate full-width copyright line; body text uses blue mist.

## Do's and Don'ts

### Do:

- Do use direct feature names and task descriptions, without taglines or decorative one-liners.
- Do preserve the original Grimoire icon and real Android screenshot pixels.
- Do use the same dark palette and self-hosted type families across homepage and docs.
- Do keep spectral illustration and light concentrated in the homepage product scene.
- Do show breadth through the matrix instead of adding marketing sections.
- Do keep prose in docs to a 62ch measure.
- Do retain visible keyboard focus and reduced-motion behavior.

### Don't:

- Don't return the website to the rejected light cobalt direction.
- Don't name source sites in homepage feature lists, use bypass language for locked chapters, or make privacy claims the app's defaults do not support.
- Don't recolor the app screenshots to match the website or substitute generated app screens.
- Don't interpret the compatibility names vellum and ember as permission to restore paper or orange colors.
