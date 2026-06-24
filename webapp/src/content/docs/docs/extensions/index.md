---
title: Overview
description: How Grimoire extensions and repositories work.
sidebar:
  order: 1
---

A Grimoire **extension** is a content source — it knows how to fetch novels from
one website or service. Extensions ship as **separate Android APKs** and are
discovered at runtime via package manifest metadata, so adding sources never
requires updating Grimoire itself.

Extensions consume a shared contract library, `grimoire-extensions-api`, and are
distributed through **repositories**: a JSON index Grimoire reads to list the
sources a repo offers.

## What's here

- **Repository format** — the `index.min.json` schema (coming soon).
- **Build an extension** — implement a source against the API (coming soon).
- **Publish a repository** — host and submit your repo (coming soon).

:::caution
This section is under construction. Structure first; details land page by page.
:::
