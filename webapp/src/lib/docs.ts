import type { CollectionEntry } from 'astro:content';

export type DocEntry = CollectionEntry<'docs'>;

// Display order of the three sidebar groups.
export const SECTIONS = [
  { id: 'users', label: 'Users' },
  { id: 'extensions', label: 'Extensions' },
  { id: 'development', label: 'Development' },
] as const;

export type SectionId = (typeof SECTIONS)[number]['id'];

// Collection ids look like: 'index', 'users/index', 'users/install'.
export function entryUrl(entry: DocEntry): string {
  const slug = entry.id.replace(/(^|\/)index$/, '');
  return '/docs' + (slug ? '/' + slug : '');
}

export function entrySection(entry: DocEntry): SectionId | 'home' {
  const seg = entry.id.split('/')[0];
  return SECTIONS.some((s) => s.id === seg) ? (seg as SectionId) : 'home';
}

export interface SidebarPage {
  title: string;
  url: string;
  id: string;
}
export interface SidebarGroup {
  id: SectionId;
  label: string;
  pages: SidebarPage[];
}

export function buildSidebar(docs: DocEntry[]): SidebarGroup[] {
  return SECTIONS.map((section) => ({
    id: section.id,
    label: section.label,
    pages: docs
      .filter((d) => entrySection(d) === section.id)
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
      .map((d) => ({ title: d.data.title, url: entryUrl(d), id: d.id })),
  }));
}

// Flattened reading order across all sections, for prev/next links.
export function flattenPages(groups: SidebarGroup[]): SidebarPage[] {
  return groups.flatMap((g) => g.pages);
}
