// Preserve IDs across label changes. Destinations are checked against the assembled site.
// Source review and release boundaries: plans/app-feature-evidence.md.
export const featureGroups = [
  {
    "id": "sources",
    "name": "Find books",
    "href": "/docs/users/sources/",
    "features": [
      {
        "id": "sources-global-search",
        "label": "Search for books on websites you've added",
        "originalLabel": "Global search",
        "href": "/docs/users/finding-novels/#global-search",
        "aliases": [
          "Search all sources",
          "Sources",
          "Search your connected novel websites"
        ],
        "condition": ""
      },
      {
        "id": "sources-per-source-search-filters",
        "label": "Filter results from a website",
        "originalLabel": "Per-source search filters",
        "href": "/docs/users/finding-novels/#source-search-filters",
        "aliases": [
          "Source filters",
          "Filter source search results",
          "Sources"
        ],
        "condition": ""
      },
      {
        "id": "sources-popular-and-latest-lists",
        "label": "Browse popular and newly added books",
        "originalLabel": "Popular and latest lists",
        "href": "/docs/users/finding-novels/#popular-and-latest",
        "aliases": [
          "Popular and latest novels",
          "Browse popular and latest books",
          "Sources"
        ],
        "condition": ""
      },
      {
        "id": "sources-pinned-sources",
        "label": "Keep favorite websites easy to reach",
        "originalLabel": "Pinned sources",
        "href": "/docs/users/sources/#pinned-sources",
        "aliases": [
          "Pin favorite sources",
          "Sources"
        ],
        "condition": ""
      },
      {
        "id": "sources-search-result-quick-view",
        "label": "Preview a book before opening it",
        "originalLabel": "Search result quick view",
        "href": "/docs/users/finding-novels/#search-result-preview",
        "aliases": [
          "Quick previews",
          "Preview book details",
          "Sources"
        ],
        "condition": ""
      },
      {
        "id": "sources-official-repository-included",
        "label": "Browse the included add-on catalog",
        "originalLabel": "Official repository included",
        "href": "/docs/users/repositories/#official-repository",
        "aliases": [
          "Official repository on first launch",
          "Official repository",
          "Official extension repository",
          "Sources"
        ],
        "condition": "Choose which websites to add; nothing is installed automatically"
      },
      {
        "id": "sources-custom-repositories",
        "label": "Add more website add-on catalogs",
        "originalLabel": "Custom repositories",
        "href": "/docs/users/repositories/#adding-repositories",
        "aliases": [
          "Add custom repositories",
          "Sources"
        ],
        "condition": "Extra collections of website add-ons"
      },
      {
        "id": "sources-one-tap-repository-links",
        "label": "Add an add-on catalog from a link",
        "originalLabel": "One-tap repository links",
        "href": "/docs/users/repositories/#repository-links",
        "aliases": [
          "Repository links",
          "Add repositories from a link",
          "Sources"
        ],
        "condition": ""
      },
      {
        "id": "sources-private-github-repositories",
        "label": "Install add-ons from private GitHub catalogs",
        "originalLabel": "Private GitHub repositories",
        "href": "/docs/users/repositories/#private-github-repositories",
        "aliases": [
          "Private repositories",
          "Access private GitHub repositories",
          "Sources"
        ],
        "condition": "Requires access through your GitHub account"
      },
      {
        "id": "sources-install-and-update-extensions",
        "label": "Install and update website add-ons",
        "originalLabel": "Install and update extensions",
        "href": "/docs/users/sources/#installing-and-updating",
        "aliases": [
          "Sources"
        ],
        "condition": ""
      },
      {
        "id": "sources-extension-filters",
        "label": "Find add-ons by name or language",
        "originalLabel": "Extension filters",
        "href": "/docs/users/sources/#extension-filters",
        "aliases": [
          "Search and filter extensions",
          "Sources"
        ],
        "condition": ""
      },
      {
        "id": "sources-sha-256-extension-checks",
        "label": "Check add-ons downloaded correctly",
        "originalLabel": "SHA-256 extension checks",
        "href": "/docs/users/sources/#extension-integrity",
        "aliases": [
          "Extension checksum verification",
          "Extension checksums",
          "Verify extension downloads",
          "Sources"
        ],
        "condition": "When verification data is provided"
      },
      {
        "id": "sources-source-sign-in",
        "label": "Sign in to a novel website",
        "originalLabel": "Source sign-in",
        "href": "/docs/users/sources/#source-sign-in",
        "aliases": [
          "Sign in to source sites",
          "Sources"
        ],
        "condition": "On websites whose add-ons support sign-in"
      },
      {
        "id": "sources-reads-chapters-you-have-unlocked",
        "label": "Read chapters your account has unlocked",
        "originalLabel": "Reads chapters you have unlocked",
        "href": "/docs/users/sources/#unlocked-chapters",
        "aliases": [
          "Read chapters unlocked on your account",
          "Unlocked chapters",
          "Read your unlocked chapters",
          "Sources"
        ],
        "condition": "When the website's add-on supports account access"
      },
      {
        "id": "sources-per-source-settings",
        "label": "Adjust settings for each website",
        "originalLabel": "Per-source settings",
        "href": "/docs/users/sources/#source-settings",
        "aliases": [
          "Source settings",
          "Change source settings",
          "Sources"
        ],
        "condition": ""
      },
      {
        "id": "sources-source-mirrors",
        "label": "Switch to another address for the same site",
        "originalLabel": "Source mirrors",
        "href": "/docs/users/sources/#source-mirrors",
        "aliases": [
          "Choose another site address",
          "Sources"
        ],
        "condition": "For websites that offer alternative addresses"
      },
      {
        "id": "sources-content-language-filters",
        "label": "Choose which book languages to show",
        "originalLabel": "Content language filters",
        "href": "/docs/users/finding-novels/#content-languages",
        "aliases": [
          "Content languages",
          "Filter books by language",
          "Sources"
        ],
        "condition": ""
      },
      {
        "id": "sources-whole-book-epub-sources",
        "label": "Get ebook files from connected websites",
        "originalLabel": "Whole-book EPUB sources",
        "href": "/docs/users/epub/#epub-sources",
        "aliases": [
          "EPUB sources",
          "Download EPUBs from sources",
          "Sources"
        ],
        "condition": "EPUB ebook files, where supported"
      },
      {
        "id": "sources-in-app-browser",
        "label": "Open a website without leaving Grimoire",
        "originalLabel": "In-app browser",
        "href": "/docs/users/sources/#in-app-browser",
        "aliases": [
          "Open sites inside the app",
          "Sources"
        ],
        "condition": ""
      },
      {
        "id": "sources-browser-fallback-for-site-checks",
        "label": "Open website verification in a browser",
        "originalLabel": "Browser fallback for site checks",
        "href": "/docs/users/sources/#site-checks",
        "aliases": [
          "Site checks in browser",
          "Complete site checks in a browser",
          "Sources"
        ],
        "condition": "For screens asking you to confirm you are human"
      }
    ],
    "description": "Read from novel websites inside Grimoire. Connect a website by installing its small add-on, called an extension."
  },
  {
    "id": "library",
    "name": "Your library",
    "href": "/docs/users/library/",
    "features": [
      {
        "id": "library-categories",
        "label": "Organize books into categories",
        "originalLabel": "Categories",
        "href": "/docs/users/library/#categories",
        "aliases": [
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-library-search",
        "label": "Search saved books",
        "originalLabel": "Library search",
        "href": "/docs/users/library/#library-search",
        "aliases": [
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-filter-by-status-source-and-type",
        "label": "Filter saved books",
        "originalLabel": "Filter by status, source and type",
        "href": "/docs/users/library/#library-filters",
        "aliases": [
          "Library filters",
          "Library"
        ],
        "condition": "By website, format, or whether a book is finished"
      },
      {
        "id": "library-six-sort-fields",
        "label": "Sort your library",
        "originalLabel": "Six sort fields",
        "href": "/docs/users/library/#library-sorting",
        "aliases": [
          "Library sorting",
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-grid-or-list-view",
        "label": "Switch between grid and list",
        "originalLabel": "Grid or list view",
        "href": "/docs/users/library/#library-layout",
        "aliases": [
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-two-to-five-columns",
        "label": "Change the number of book-cover columns",
        "originalLabel": "Two to five columns",
        "href": "/docs/users/library/#library-columns",
        "aliases": [
          "Library grid columns",
          "Grid columns",
          "Change grid columns",
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-cover-badges",
        "label": "Show progress and ratings on book covers",
        "originalLabel": "Cover badges",
        "href": "/docs/users/library/#cover-badges",
        "aliases": [
          "Show badges on book covers",
          "Library"
        ],
        "condition": "Also shows download counts"
      },
      {
        "id": "library-bulk-novel-actions",
        "label": "Manage several books at once",
        "originalLabel": "Bulk novel actions",
        "href": "/docs/users/library/#bulk-actions",
        "aliases": [
          "Bulk actions",
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-personal-ratings",
        "label": "Rate books yourself",
        "originalLabel": "Personal ratings",
        "href": "/docs/users/novel-details/#personal-rating",
        "aliases": [
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-edit-novel-details",
        "label": "Edit book details",
        "originalLabel": "Edit novel details",
        "href": "/docs/users/novel-details/#editing-details",
        "aliases": [
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-custom-covers",
        "label": "Choose custom covers",
        "originalLabel": "Custom covers",
        "href": "/docs/users/novel-details/#custom-covers",
        "aliases": [
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-epub-import",
        "label": "Import your own ebook files",
        "originalLabel": "EPUB import",
        "href": "/docs/users/epub/#importing-epubs",
        "aliases": [
          "Import EPUB files",
          "Library"
        ],
        "condition": "EPUB ebook files"
      },
      {
        "id": "library-open-epubs-from-other-apps",
        "label": "Open ebook files from other apps",
        "originalLabel": "Open EPUBs from other apps",
        "href": "/docs/users/epub/#opening-from-other-apps",
        "aliases": [
          "Library"
        ],
        "condition": "EPUB ebook files"
      },
      {
        "id": "library-scheduled-library-updates",
        "label": "Check for new chapters automatically",
        "originalLabel": "Scheduled library updates",
        "href": "/docs/users/library-updates/#scheduled-updates",
        "aliases": [
          "Scheduled updates",
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-new-chapter-notifications",
        "label": "Get notified when new chapters arrive",
        "originalLabel": "New-chapter notifications",
        "href": "/docs/users/library-updates/#new-chapter-notifications",
        "aliases": [
          "Chapter notifications",
          "Get new-chapter notifications",
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-updates-feed",
        "label": "See new chapters from your saved books",
        "originalLabel": "Updates feed",
        "href": "/docs/users/library-updates/#updates-feed",
        "aliases": [
          "See recently added chapters",
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-failed-update-review",
        "label": "Review update problems",
        "originalLabel": "Failed update review",
        "href": "/docs/users/library-updates/#failed-updates",
        "aliases": [
          "Update warnings",
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-chapter-search-and-sort",
        "label": "Search and sort chapters",
        "originalLabel": "Chapter search and sort",
        "href": "/docs/users/chapter-list/#searching-and-sorting",
        "aliases": [
          "Chapter search and sorting",
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-jump-to-a-chapter",
        "label": "Select several chapters at once",
        "originalLabel": "Jump to a chapter",
        "href": "/docs/users/chapter-list/#jumping-to-a-chapter",
        "aliases": [
          "Jump to chapter",
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-chapter-range-selection",
        "label": "Select a range of chapters",
        "originalLabel": "Chapter range selection",
        "href": "/docs/users/chapter-list/#selecting-chapter-ranges",
        "aliases": [
          "Select chapter ranges",
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-reading-history",
        "label": "See recently read chapters",
        "originalLabel": "Reading history",
        "href": "/docs/users/history/#reading-history",
        "aliases": [
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-browsing-history",
        "label": "See recently browsed books",
        "originalLabel": "Browsing history",
        "href": "/docs/users/history/#browsing-history",
        "aliases": [
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-reading-statistics",
        "label": "View reading statistics",
        "originalLabel": "Reading statistics",
        "href": "/docs/users/history/#reading-statistics",
        "aliases": [
          "Library"
        ],
        "condition": ""
      },
      {
        "id": "library-source-migration",
        "label": "Move a book to a different website",
        "originalLabel": "Source migration",
        "href": "/docs/users/migration/#moving-between-sources",
        "aliases": [
          "Move between sources",
          "Move a book to another source",
          "Library"
        ],
        "condition": "Reading progress transfers for chapters that match"
      },
      {
        "id": "library-share-cards",
        "label": "Share a book as an image",
        "originalLabel": "Share cards",
        "href": "/docs/users/novel-details/#sharing-novels",
        "aliases": [
          "Share a book card",
          "Library"
        ],
        "condition": "Create a picture with the book details"
      },
      {
        "id": "library-keep-novels-after-removing-a-source",
        "label": "Keep saved books when removing an add-on",
        "originalLabel": "Keep novels after removing a source",
        "href": "/docs/users/sources/#removing-sources",
        "aliases": [
          "Keep books after source removal",
          "Keep books when removing a source",
          "Library"
        ],
        "condition": ""
      }
    ],
    "description": "Keep your books together, organize them, and see when new chapters arrive."
  },
  {
    "id": "reader",
    "name": "Reading",
    "href": "/docs/users/reading/",
    "features": [
      {
        "id": "reader-light-sepia-dark-and-black-themes",
        "label": "Multiple reading themes",
        "originalLabel": "Light, sepia, dark and black themes",
        "href": "/docs/users/reading/#page-themes",
        "aliases": [
          "formatting",
          "reading",
          "Multiple themes",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-sans-serif-or-monospace",
        "label": "Choose a font",
        "originalLabel": "Sans, serif or monospace",
        "href": "/docs/users/reading/#font-family",
        "aliases": [
          "formatting",
          "reading",
          "Font choices",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-font-size-control",
        "label": "Adjust text size",
        "originalLabel": "Font size control",
        "href": "/docs/users/reading/#font-size",
        "aliases": [
          "formatting",
          "reading",
          "Font size",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-line-and-paragraph-spacing",
        "label": "Adjust line and paragraph spacing",
        "originalLabel": "Line and paragraph spacing",
        "href": "/docs/users/reading/#text-spacing",
        "aliases": [
          "formatting",
          "reading",
          "Text spacing",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-per-novel-text-alignment",
        "label": "Align text for each book",
        "originalLabel": "Per-novel text alignment",
        "href": "/docs/users/reading/#text-alignment",
        "aliases": [
          "formatting",
          "reading",
          "Text alignment",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-right-to-left-layout",
        "label": "Read right-to-left text",
        "originalLabel": "Right-to-left layout",
        "href": "/docs/users/reading/#right-to-left",
        "aliases": [
          "formatting",
          "reading",
          "Right-to-left reading",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-rotation-lock",
        "label": "Lock screen rotation",
        "originalLabel": "Rotation lock",
        "href": "/docs/users/reading/#rotation-lock",
        "aliases": [
          "formatting",
          "reading",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-hide-the-status-bar",
        "label": "Hide the status bar",
        "originalLabel": "Hide the status bar",
        "href": "/docs/users/reading/#status-bar",
        "aliases": [
          "formatting",
          "reading",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-scrolling-chapter-view",
        "label": "Scroll through chapters",
        "originalLabel": "Scrolling chapter view",
        "href": "/docs/users/reading/#scrolling",
        "aliases": [
          "formatting",
          "reading",
          "Scrolling reader",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-resume-where-you-stopped",
        "label": "Resume where you stopped",
        "originalLabel": "Resume where you stopped",
        "href": "/docs/users/reading/#resuming-progress",
        "aliases": [
          "formatting",
          "reading",
          "Resume reading",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-chapter-and-book-percentages",
        "label": "Show chapter and book progress",
        "originalLabel": "Chapter and book percentages",
        "href": "/docs/users/reading/#progress-indicators",
        "aliases": [
          "formatting",
          "reading",
          "Reading progress",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-auto-mark-as-read",
        "label": "Mark chapters read automatically",
        "originalLabel": "Auto-mark as read",
        "href": "/docs/users/reading/#marking-as-read",
        "aliases": [
          "formatting",
          "reading",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-bold-italic-and-link-formatting",
        "label": "Read formatted text",
        "originalLabel": "Bold, italic and link formatting",
        "href": "/docs/users/reading/#chapter-formatting",
        "aliases": [
          "formatting",
          "reading",
          "Rich text formatting",
          "Reader"
        ],
        "condition": "Bold, italics and links"
      },
      {
        "id": "reader-zoom-save-or-share-images",
        "label": "Zoom, save and share images",
        "originalLabel": "Zoom, save or share images",
        "href": "/docs/users/reading/#chapter-images",
        "aliases": [
          "formatting",
          "reading",
          "Image viewer",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-selectable-text",
        "label": "Select and copy text",
        "originalLabel": "Selectable text",
        "href": "/docs/users/reading/#selecting-text",
        "aliases": [
          "formatting",
          "reading",
          "Text selection",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-open-the-original-page",
        "label": "Open the original chapter page",
        "originalLabel": "Open the original page",
        "href": "/docs/users/reading/#original-page",
        "aliases": [
          "formatting",
          "reading",
          "Original chapter link",
          "Reader"
        ],
        "condition": ""
      },
      {
        "id": "reader-live-settings-preview",
        "label": "Preview reader settings",
        "originalLabel": "Live settings preview",
        "href": "/docs/users/reading/#settings-preview",
        "aliases": [
          "formatting",
          "reading",
          "Settings preview",
          "Reader"
        ],
        "condition": ""
      }
    ],
    "description": "Make chapters comfortable to read and return to the place you stopped."
  },
  {
    "id": "listening",
    "name": "Listening",
    "href": "/docs/users/listening/",
    "features": [
      {
        "id": "listening-read-aloud",
        "label": "Read chapters aloud",
        "originalLabel": "Read aloud",
        "href": "/docs/users/listening/#starting-playback",
        "aliases": [
          "tts",
          "text to speech",
          "audio",
          "read aloud",
          "Listening"
        ],
        "condition": ""
      },
      {
        "id": "listening-on-device-voices",
        "label": "Use your phone's built-in voices",
        "originalLabel": "On-device voices",
        "href": "/docs/users/listening/#device-voices",
        "aliases": [
          "tts",
          "text to speech",
          "audio",
          "read aloud",
          "Use device voices",
          "Listening"
        ],
        "condition": ""
      },
      {
        "id": "listening-elevenlabs-voices",
        "label": "Listen with ElevenLabs voices",
        "originalLabel": "ElevenLabs voices",
        "href": "/docs/users/listening/#elevenlabs",
        "aliases": [
          "tts",
          "text to speech",
          "audio",
          "read aloud",
          "Use ElevenLabs voices",
          "Listening"
        ],
        "condition": "Your own account; setup and internet required"
      },
      {
        "id": "listening-a-voice-for-each-language",
        "label": "Choose voices by book language",
        "originalLabel": "A voice for each language",
        "href": "/docs/users/listening/#language-voices",
        "aliases": [
          "tts",
          "text to speech",
          "audio",
          "read aloud",
          "Voices by language",
          "Listening"
        ],
        "condition": ""
      },
      {
        "id": "listening-voice-preview",
        "label": "Preview a voice",
        "originalLabel": "Voice preview",
        "href": "/docs/users/listening/#previewing-voices",
        "aliases": [
          "tts",
          "text to speech",
          "audio",
          "read aloud",
          "Listening"
        ],
        "condition": ""
      },
      {
        "id": "listening-install-device-voices",
        "label": "Install extra voices on your phone",
        "originalLabel": "Install device voices",
        "href": "/docs/users/listening/#installing-device-voices",
        "aliases": [
          "tts",
          "text to speech",
          "audio",
          "read aloud",
          "Install voices",
          "Install more device voices",
          "Listening"
        ],
        "condition": ""
      },
      {
        "id": "listening-speech-rate-and-pitch",
        "label": "Adjust reading speed and voice pitch",
        "originalLabel": "Speech rate and pitch",
        "href": "/docs/users/listening/#rate-and-pitch",
        "aliases": [
          "tts",
          "text to speech",
          "audio",
          "read aloud",
          "Adjust speech speed and pitch",
          "Listening"
        ],
        "condition": "Pitch control uses your phone's voices"
      },
      {
        "id": "listening-auto-advance-chapters",
        "label": "Keep listening across chapters",
        "originalLabel": "Auto-advance chapters",
        "href": "/docs/users/listening/#chapter-advance",
        "aliases": [
          "tts",
          "text to speech",
          "audio",
          "read aloud",
          "Listening"
        ],
        "condition": ""
      },
      {
        "id": "listening-paragraph-highlight-and-follow",
        "label": "Highlight text as it is spoken",
        "originalLabel": "Paragraph highlight and follow",
        "href": "/docs/users/listening/#paragraph-following",
        "aliases": [
          "tts",
          "text to speech",
          "audio",
          "read aloud",
          "Follow spoken text",
          "Listening"
        ],
        "condition": ""
      },
      {
        "id": "listening-background-playback",
        "label": "Listen with the screen off",
        "originalLabel": "Background playback",
        "href": "/docs/users/listening/#background-playback",
        "aliases": [
          "tts",
          "text to speech",
          "audio",
          "read aloud",
          "Listening"
        ],
        "condition": ""
      },
      {
        "id": "listening-notification-controls",
        "label": "Control playback from notifications",
        "originalLabel": "Notification controls",
        "href": "/docs/users/listening/#notification-controls",
        "aliases": [
          "tts",
          "text to speech",
          "audio",
          "read aloud",
          "Listening"
        ],
        "condition": ""
      },
      {
        "id": "listening-media-button-support",
        "label": "Use headset playback buttons",
        "originalLabel": "Media button support",
        "href": "/docs/users/listening/#media-buttons",
        "aliases": [
          "tts",
          "text to speech",
          "audio",
          "read aloud",
          "Media controls",
          "Listening"
        ],
        "condition": ""
      },
      {
        "id": "listening-elevenlabs-usage-meter",
        "label": "Check ElevenLabs usage",
        "originalLabel": "ElevenLabs usage meter",
        "href": "/docs/users/listening/#cloud-usage",
        "aliases": [
          "tts",
          "text to speech",
          "audio",
          "read aloud",
          "ElevenLabs usage",
          "Listening"
        ],
        "condition": ""
      },
      {
        "id": "listening-replay-cache-for-cloud-audio",
        "label": "Replay speech you've already listened to",
        "originalLabel": "Replay cache for cloud audio",
        "href": "/docs/users/listening/#cloud-replay-cache",
        "aliases": [
          "tts",
          "text to speech",
          "audio",
          "read aloud",
          "Cloud audio replay",
          "Replay saved cloud audio",
          "Listening"
        ],
        "condition": "Recent ElevenLabs audio is kept temporarily"
      }
    ],
    "description": "Have chapters read aloud using your phone's voices or your own ElevenLabs account."
  },
  {
    "id": "downloads",
    "name": "Read offline",
    "href": "/docs/users/downloads/",
    "features": [
      {
        "id": "downloads-chapter-and-image-downloads",
        "label": "Download chapters and images",
        "originalLabel": "Chapter and image downloads",
        "href": "/docs/users/downloads/#chapters-and-images",
        "aliases": [
          "offline",
          "queue",
          "Offline chapters and images",
          "Downloads"
        ],
        "condition": ""
      },
      {
        "id": "downloads-download-all-unread-or-next-ten",
        "label": "Download all or unread chapters",
        "originalLabel": "Download all, unread or next ten",
        "href": "/docs/users/downloads/#batch-downloads",
        "aliases": [
          "offline",
          "queue",
          "Batch downloads",
          "Downloads"
        ],
        "condition": ""
      },
      {
        "id": "downloads-auto-download-new-chapters",
        "label": "Download new chapters automatically",
        "originalLabel": "Auto-download new chapters",
        "href": "/docs/users/library-updates/#auto-downloads",
        "aliases": [
          "offline",
          "queue",
          "Downloads"
        ],
        "condition": ""
      },
      {
        "id": "downloads-downloads-screen",
        "label": "Manage chapter downloads",
        "originalLabel": "Downloads screen",
        "href": "/docs/users/downloads/#download-queue",
        "aliases": [
          "offline",
          "queue",
          "View downloaded chapters",
          "Downloads"
        ],
        "condition": ""
      },
      {
        "id": "downloads-pause-and-resume",
        "label": "Pause and resume downloads",
        "originalLabel": "Pause and resume",
        "href": "/docs/users/downloads/#pausing-and-resuming",
        "aliases": [
          "offline",
          "queue",
          "Downloads"
        ],
        "condition": ""
      },
      {
        "id": "downloads-move-to-the-top-of-the-queue",
        "label": "Download chosen chapters first",
        "originalLabel": "Move to the top of the queue",
        "href": "/docs/users/downloads/#queue-priority",
        "aliases": [
          "offline",
          "queue",
          "Queue priority",
          "Downloads"
        ],
        "condition": ""
      },
      {
        "id": "downloads-parallel-downloads",
        "label": "Choose how many downloads run at once",
        "originalLabel": "Parallel downloads",
        "href": "/docs/users/downloads/#parallel-downloads",
        "aliases": [
          "offline",
          "queue",
          "Set simultaneous downloads",
          "Downloads"
        ],
        "condition": "Controls how many chapters download at the same time"
      },
      {
        "id": "downloads-retry-cancel-or-redownload",
        "label": "Retry failed downloads",
        "originalLabel": "Retry, cancel or redownload",
        "href": "/docs/users/downloads/#retrying-and-removing",
        "aliases": [
          "offline",
          "queue",
          "Retry downloads",
          "Downloads"
        ],
        "condition": ""
      },
      {
        "id": "downloads-background-downloads",
        "label": "Keep downloading in the background",
        "originalLabel": "Background downloads",
        "href": "/docs/users/downloads/#background-downloads",
        "aliases": [
          "offline",
          "queue",
          "Downloads"
        ],
        "condition": ""
      },
      {
        "id": "downloads-whole-book-epub-downloads",
        "label": "Download whole ebook files",
        "originalLabel": "Whole-book EPUB downloads",
        "href": "/docs/users/epub/#whole-book-downloads",
        "aliases": [
          "offline",
          "queue",
          "EPUB downloads",
          "Download whole EPUB books",
          "Downloads"
        ],
        "condition": "EPUB ebook files from supported websites"
      },
      {
        "id": "downloads-epub-export",
        "label": "Save downloaded chapters as an ebook",
        "originalLabel": "EPUB export",
        "href": "/docs/users/epub/#exporting-epubs",
        "aliases": [
          "offline",
          "queue",
          "Export downloaded chapters as EPUB",
          "Downloads"
        ],
        "condition": "Creates an EPUB ebook file"
      }
    ],
    "description": "Save chapters or whole ebook files to read without internet."
  },
  {
    "id": "novelupdates",
    "name": "Discover more books",
    "href": "/docs/users/novelupdates/",
    "features": [
      {
        "id": "novelupdates-popular-and-activity-rankings",
        "label": "Browse book rankings",
        "originalLabel": "Popular and activity rankings",
        "href": "/docs/users/novelupdates/#rankings",
        "aliases": [
          "Series rankings",
          "Browse series rankings",
          "NovelUpdates"
        ],
        "condition": ""
      },
      {
        "id": "novelupdates-latest-releases",
        "label": "Browse latest releases",
        "originalLabel": "Latest releases",
        "href": "/docs/users/novelupdates/#latest-releases",
        "aliases": [
          "NovelUpdates"
        ],
        "condition": ""
      },
      {
        "id": "novelupdates-advanced-search",
        "label": "Search by genre, tags and more",
        "originalLabel": "Advanced search",
        "href": "/docs/users/novelupdates/#advanced-search",
        "aliases": [
          "NovelUpdates"
        ],
        "condition": ""
      },
      {
        "id": "novelupdates-series-pages-and-reviews",
        "label": "Read book details and reader reviews",
        "originalLabel": "Series pages and reviews",
        "href": "/docs/users/novelupdates/#series-and-reviews",
        "aliases": [
          "Series and reviews",
          "Read series details and reviews",
          "NovelUpdates"
        ],
        "condition": ""
      },
      {
        "id": "novelupdates-saved-series-list",
        "label": "Bookmark books to look up later",
        "originalLabel": "Saved series list",
        "href": "/docs/users/novelupdates/#saved-series",
        "aliases": [
          "Saved series",
          "Save series for later",
          "NovelUpdates"
        ],
        "condition": "These bookmarks are separate from your library"
      },
      {
        "id": "novelupdates-find-a-series-in-your-sources",
        "label": "Find a book on your connected websites",
        "originalLabel": "Find a series in your sources",
        "href": "/docs/users/novelupdates/#finding-source-matches",
        "aliases": [
          "Find matching sources",
          "Find series in your installed sources",
          "NovelUpdates"
        ],
        "condition": ""
      },
      {
        "id": "novelupdates-novel-panel-with-auto-match",
        "label": "Show NovelUpdates details for a book",
        "originalLabel": "Novel panel with auto-match",
        "href": "/docs/users/novelupdates/#novel-panel",
        "aliases": [
          "Automatic series matching",
          "Match books to NovelUpdates listings",
          "NovelUpdates"
        ],
        "condition": "When a matching book listing is found"
      }
    ],
    "description": "Browse rankings, reviews and new releases from the NovelUpdates website."
  },
  {
    "id": "backups-and-storage",
    "name": "Backups and storage",
    "href": "/docs/users/backups/",
    "features": [
      {
        "id": "backups-and-storage-manual-backups",
        "label": "Save a backup of your library",
        "originalLabel": "Manual backups",
        "href": "/docs/users/backups/#manual-backups",
        "aliases": [
          "restore",
          "data",
          "Create a backup",
          "Backups and storage"
        ],
        "condition": ""
      },
      {
        "id": "backups-and-storage-scheduled-backups",
        "label": "Back up automatically",
        "originalLabel": "Scheduled backups",
        "href": "/docs/users/backups/#scheduled-backups",
        "aliases": [
          "restore",
          "data",
          "Backups and storage"
        ],
        "condition": ""
      },
      {
        "id": "backups-and-storage-restore-by-merging",
        "label": "Restore a backup alongside your current books",
        "originalLabel": "Restore by merging",
        "href": "/docs/users/backups/#restoring-by-merge",
        "aliases": [
          "restore",
          "data",
          "Restore and merge",
          "Restore into your existing library",
          "Backups and storage"
        ],
        "condition": ""
      },
      {
        "id": "backups-and-storage-categories-and-settings-in-backups",
        "label": "Back up library and settings",
        "originalLabel": "Categories and settings in backups",
        "href": "/docs/users/backups/#included-data",
        "aliases": [
          "restore",
          "data",
          "Library and settings backups",
          "Backups and storage"
        ],
        "condition": ""
      },
      {
        "id": "backups-and-storage-storage-usage-breakdown",
        "label": "See what is taking up space",
        "originalLabel": "Storage usage breakdown",
        "href": "/docs/users/storage/#usage-breakdown",
        "aliases": [
          "restore",
          "data",
          "Storage usage",
          "See what is using storage",
          "Backups and storage"
        ],
        "condition": ""
      },
      {
        "id": "backups-and-storage-cache-cleanup",
        "label": "Remove temporary files to free up space",
        "originalLabel": "Cache cleanup",
        "href": "/docs/users/storage/#clearing-cache",
        "aliases": [
          "restore",
          "data",
          "Clean up temporary files",
          "Backups and storage"
        ],
        "condition": ""
      }
    ],
    "description": "Save your book list, progress and settings. Downloaded chapters and ebook files are not included in backups."
  },
  {
    "id": "hide-and-lock",
    "name": "History and hidden books",
    "href": "/docs/users/privacy/",
    "features": [
      {
        "id": "hide-and-lock-incognito-mode",
        "label": "Pause reading and browsing history",
        "originalLabel": "Incognito mode",
        "href": "/docs/users/privacy/#incognito",
        "aliases": [
          "privacy",
          "biometric",
          "pin",
          "Pause history",
          "Hide and lock"
        ],
        "condition": "Progress still saves"
      },
      {
        "id": "hide-and-lock-pin-locked-hidden-categories",
        "label": "Hide books in PIN-protected categories",
        "originalLabel": "PIN-locked hidden categories",
        "href": "/docs/users/privacy/#hidden-categories",
        "aliases": [
          "privacy",
          "biometric",
          "pin",
          "PIN-protected categories",
          "Hide categories behind a PIN",
          "Hide and lock"
        ],
        "condition": ""
      },
      {
        "id": "hide-and-lock-fingerprint-or-face-unlock",
        "label": "Unlock hidden books with fingerprint or face",
        "originalLabel": "Fingerprint or face unlock",
        "href": "/docs/users/privacy/#biometric-unlock",
        "aliases": [
          "privacy",
          "biometric",
          "pin",
          "Device authentication for hidden categories",
          "Biometric unlock",
          "Unlock hidden categories",
          "Hide and lock"
        ],
        "condition": "On supported devices"
      },
      {
        "id": "hide-and-lock-image-masking",
        "label": "Hide chapter images",
        "originalLabel": "Image masking",
        "href": "/docs/users/privacy/#image-masking",
        "aliases": [
          "privacy",
          "biometric",
          "pin",
          "Hide images",
          "Hide and lock"
        ],
        "condition": "Tap to reveal; hold to peek"
      },
      {
        "id": "hide-and-lock-delete-or-clear-history",
        "label": "Delete reading and browsing history",
        "originalLabel": "Delete or clear history",
        "href": "/docs/users/history/#clearing-history",
        "aliases": [
          "privacy",
          "biometric",
          "pin",
          "Clear history",
          "Hide and lock"
        ],
        "condition": ""
      }
    ],
    "description": "Pause history, hide books in locked categories, and keep chapter images out of view."
  },
  {
    "id": "appearance-and-language",
    "name": "Appearance and language",
    "href": "/docs/users/appearance/",
    "features": [
      {
        "id": "appearance-and-language-system-light-or-dark-theme",
        "label": "Choose a light or dark app theme",
        "originalLabel": "System, light or dark theme",
        "href": "/docs/users/appearance/#app-theme",
        "aliases": [
          "theme",
          "translation",
          "App themes",
          "Appearance and language"
        ],
        "condition": ""
      },
      {
        "id": "appearance-and-language-dynamic-color-on-android-12",
        "label": "Use wallpaper colors",
        "originalLabel": "Dynamic color on Android 12+",
        "href": "/docs/users/appearance/#dynamic-color",
        "aliases": [
          "theme",
          "translation",
          "Dynamic colors",
          "Appearance and language"
        ],
        "condition": "Android 12+"
      },
      {
        "id": "appearance-and-language-seven-color-palettes",
        "label": "Choose app color palettes",
        "originalLabel": "Seven color palettes",
        "href": "/docs/users/appearance/#color-palettes",
        "aliases": [
          "theme",
          "translation",
          "App color palettes",
          "Color palettes",
          "Appearance and language"
        ],
        "condition": ""
      },
      {
        "id": "appearance-and-language-browse-grid-or-list",
        "label": "Change how website book lists look",
        "originalLabel": "Browse grid or list",
        "href": "/docs/users/appearance/#browse-layout",
        "aliases": [
          "theme",
          "translation",
          "Browse layouts",
          "Change source catalog layout",
          "Appearance and language"
        ],
        "condition": "Grid or list view"
      },
      {
        "id": "appearance-and-language-19-interface-languages",
        "label": "Change app language",
        "originalLabel": "19 interface languages",
        "href": "/docs/users/appearance/#interface-language",
        "aliases": [
          "theme",
          "translation",
          "Interface languages",
          "App languages",
          "Appearance and language"
        ],
        "condition": ""
      },
      {
        "id": "appearance-and-language-language-setup-on-first-launch",
        "label": "Choose language on first launch",
        "originalLabel": "Language setup on first launch",
        "href": "/docs/users/appearance/#first-launch-language",
        "aliases": [
          "theme",
          "translation",
          "Language setup",
          "Appearance and language"
        ],
        "condition": ""
      },
      {
        "id": "appearance-and-language-replayable-guided-tours",
        "label": "Replay in-app guides",
        "originalLabel": "Replayable guided tours",
        "href": "/docs/users/appearance/#guided-tours",
        "aliases": [
          "theme",
          "translation",
          "Guided tours",
          "Appearance and language"
        ],
        "condition": ""
      }
    ],
    "description": "Choose the app's colors, book-list layout, and language."
  },
  {
    "id": "app-updates-and-tasks",
    "name": "App updates",
    "href": "/docs/users/install/",
    "features": [
      {
        "id": "app-updates-and-tasks-in-app-updates",
        "label": "Update the app",
        "originalLabel": "In-app updates",
        "href": "/docs/users/install/#in-app-updates",
        "aliases": [
          "App updates and tasks"
        ],
        "condition": ""
      },
      {
        "id": "app-updates-and-tasks-stable-and-beta-channels",
        "label": "Choose regular or early-access updates",
        "originalLabel": "Stable and beta channels",
        "href": "/docs/users/install/#release-channels",
        "aliases": [
          "Update channels",
          "Choose stable or beta updates",
          "App updates and tasks"
        ],
        "condition": "Stable or beta versions"
      },
      {
        "id": "app-updates-and-tasks-sha-256-update-checks",
        "label": "Check app updates downloaded correctly",
        "originalLabel": "SHA-256 update checks",
        "href": "/docs/users/install/#update-integrity",
        "aliases": [
          "App update checksum verification",
          "Update checksums",
          "Verify app update downloads",
          "App updates and tasks"
        ],
        "condition": "When verification data is provided"
      },
      {
        "id": "app-updates-and-tasks-changelog-viewer",
        "label": "Read what's new in each update",
        "originalLabel": "Changelog viewer",
        "href": "/docs/users/install/#changelog",
        "aliases": [
          "Changelogs",
          "Read release notes",
          "App updates and tasks"
        ],
        "condition": ""
      },
      {
        "id": "app-updates-and-tasks-skip-a-version",
        "label": "Skip an update reminder",
        "originalLabel": "Skip a version",
        "href": "/docs/users/install/#skipping-versions",
        "aliases": [
          "Skip an update",
          "App updates and tasks"
        ],
        "condition": ""
      },
      {
        "id": "app-updates-and-tasks-tasks-screen",
        "label": "See downloads and updates in progress",
        "originalLabel": "Tasks screen",
        "href": "/docs/users/tasks/#background-tasks",
        "aliases": [
          "Background tasks",
          "View running background tasks",
          "App updates and tasks"
        ],
        "condition": ""
      }
    ],
    "description": "Get new app versions and see how downloads and other background work are progressing."
  }
] as const;

export const featureCount = featureGroups.reduce((total, group) => total + group.features.length, 0);
