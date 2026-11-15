"""Validate internal links and feature destinations in the assembled static site."""

import json
import re
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "dist-site"


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.ids = set()
        self.links = []
        self.features = []
        self.headings = set()
        self.noindex = False
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta" and attrs.get("name", "").lower() == "robots":
            if "noindex" in attrs.get("content", "").lower():
                self.noindex = True
        if attrs.get("id"):
            self.ids.add(attrs["id"])
            if tag in ("h2", "h3"):
                self.headings.add(attrs["id"])
        if tag == "a" and "href" in attrs:
            self.links.append(attrs["href"])
            if "data-feature-id" in attrs:
                self.features.append((attrs["data-feature-id"], attrs["href"]))


def page_url(path, base):
    value = "/" + path.relative_to(base).as_posix()
    return value.removesuffix("index.html")


def main():
    config = (ROOT / "webapp/src/site.config.ts").read_text(encoding="utf-8")
    site_url = re.search(r"\burl: '([^']+)'", config)[1]
    site_host = urlsplit(site_url).netloc
    pages = {
        page_url(path, SITE): Page(path.read_text(encoding="utf-8"))
        for path in SITE.rglob("*.html")
    }
    assert "/" in pages, "Build and assemble the site first."
    errors = set()
    checked = 0
    for origin, page in pages.items():
        for href in page.links:
            url = urlsplit(urljoin(site_url.rstrip("/") + origin, href))
            if url.netloc != site_host or url.scheme not in ("http", "https"):
                continue
            path = unquote(url.path)
            key = path if path in pages else path.rstrip("/") + "/"
            target = pages.get(key)
            if target is None:
                if not (SITE / path.lstrip("/")).is_file():
                    errors.add(f"{origin} -> {href}: missing file or page")
            elif url.fragment and unquote(url.fragment) not in target.ids:
                errors.add(f"{origin} -> {href}: missing fragment")
            checked += 1

    registry_text = (ROOT / "webapp/src/data/features.ts").read_text(encoding="utf-8")
    match = re.search(r"export const featureGroups = (\[.*\]) as const;", registry_text, re.S)
    groups = json.loads(match[1])
    features = [feature for group in groups for feature in group["features"]]
    historical = json.loads((ROOT / "plans/feature-docs-map.json").read_text(encoding="utf-8"))
    assert len(features) == len(historical["features"]) == 119
    assert len({feature["id"] for feature in features}) == len(features)
    assert {f["originalLabel"] for f in features} == {f["label"] for f in historical["features"]}
    assert {(f["id"], f["href"]) for f in features} == set(pages["/"].features)
    assert len(pages["/"].features) == len(features), "Duplicate or omitted feature links"
    for removed in ("/app-preview/", "/ghost3d-lab/"):
        assert removed not in pages, f"{removed}: should not be present in assembled site"
    assert len({urlsplit(f["href"]).path for f in features}) == 20
    for feature in features:
        url = urlsplit(feature["href"])
        target = pages.get(url.path)
        if target is None or unquote(url.fragment) not in target.headings:
            errors.add(f'{feature["id"]}: destination is not a rendered guide heading')

    legacy = json.loads((ROOT / "plans/reader-fragments-before.json").read_text(encoding="utf-8"))
    for url, fragments in legacy.items():
        for fragment in fragments:
            if url not in pages or fragment not in pages[url].headings:
                errors.add(f"Legacy heading removed: {url}#{fragment}")

    # Published headings at master 0cf971b, in addition to the prior-worktree snapshot.
    published_aliases = {
        "/docs/users/": ("get-started", "what-you-can-do"),
        "/docs/users/install/": ("download-the-apk",),
    }
    for url, fragments in published_aliases.items():
        for fragment in fragments:
            if url not in pages or fragment not in pages[url].ids:
                errors.add(f"Published fragment removed: {url}#{fragment}")

    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    base_url = site_url.rstrip("/")
    index_locs = {
        el.text
        for el in ET.fromstring((SITE / "sitemap-index.xml").read_text(encoding="utf-8")).findall("sm:sitemap/sm:loc", ns)
        if el.text
    }
    for expected_sitemap in (f"{base_url}/sitemap-0.xml", f"{base_url}/docs/sitemap.xml"):
        if expected_sitemap not in index_locs:
            errors.add(f"sitemap-index.xml missing {expected_sitemap}")

    main_locs = {
        el.text
        for el in ET.fromstring((SITE / "sitemap-0.xml").read_text(encoding="utf-8")).findall("sm:url/sm:loc", ns)
        if el.text
    }
    expected_main_locs = {
        f"{base_url}{url}"
        for url, page in pages.items()
        if not url.startswith("/docs/") and not page.noindex
    }
    if main_locs != expected_main_locs:
        missing = sorted(expected_main_locs - main_locs)
        extra = sorted(main_locs - expected_main_locs)
        if missing:
            errors.add(f"sitemap-0.xml missing URLs: {missing}")
        if extra:
            errors.add(f"sitemap-0.xml has unexpected URLs: {extra}")

    docs_sitemap_path = SITE / "docs/sitemap.xml"
    if not docs_sitemap_path.is_file():
        errors.add("docs/sitemap.xml is missing from assembled site")
    else:
        docs_locs = {
            el.text
            for el in ET.fromstring(docs_sitemap_path.read_text(encoding="utf-8")).findall("sm:url/sm:loc", ns)
            if el.text
        }
        expected_docs_locs = {f"{base_url}{url}" for url in pages if url.startswith("/docs/")}
        if docs_locs != expected_docs_locs:
            missing = sorted(expected_docs_locs - docs_locs)
            extra = sorted(docs_locs - expected_docs_locs)
            if missing:
                errors.add(f"docs/sitemap.xml missing URLs: {missing}")
            if extra:
                errors.add(f"docs/sitemap.xml has unexpected URLs: {extra}")

    if errors:
        print("\n".join(sorted(errors)))
        return 1
    print(f"PASS: {len(pages)} HTML pages; {checked} internal links; 119 feature links to 20 guides; legacy headings retained.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
