'use client';
import { useDocsLayout } from 'fumadocs-ui/layouts/docs';
import { Menu, ExternalLink } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { StaticLink as Link } from './static-link';
import Image from 'next/image';

export function DocsHeader() {
  const { slots } = useDocsLayout();
  const isDocsHome = usePathname().replace(/\/$/, '') === '/docs';
  return <header className="docs-topbar">
    {/* The homepage is a separate Astro app; use a full document navigation. */}
    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
    <a href="/" className="docs-brand" aria-label="Grimoire home"><Image src="/icon-192.png" alt="" width={44} height={44} unoptimized /><span>Grimoire</span></a>
    <nav aria-label="Main navigation">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/#features">Features</a>
      <Link href="/docs/" aria-current={isDocsHome ? 'page' : 'true'}>Docs</Link>
      <a href="https://github.com/Operation-Grimoire/grimoire">GitHub <ExternalLink size={14} aria-hidden="true" /></a>
    </nav>
    <div className="docs-mobile-controls">{slots.searchTrigger && <slots.searchTrigger.sm hideIfDisabled />}{slots.sidebar && <slots.sidebar.trigger aria-label="Open navigation" className="docs-menu-button"><Menu size={20} aria-hidden="true" /></slots.sidebar.trigger>}</div>
  </header>;
}
