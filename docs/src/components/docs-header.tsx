'use client';
import { useDocsLayout } from 'fumadocs-ui/layouts/docs';
import { ExternalLink, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { DocsLink as Link } from './docs-link';

function GitHubIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function DocsHeader() {
  const { slots } = useDocsLayout();
  const pathname = usePathname().replace(/\/$/, '') || '/';
  const isDocsHome = pathname === '/docs';
  const isDocs = pathname === '/docs' || pathname.startsWith('/docs/');

  return (
    <header className="docs-topbar">
      {/* The homepage is a separate Astro app; use a full document navigation. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/" className="docs-brand" aria-label="Grimoire home">
        <Image src="/icon-192.png" alt="" width={44} height={44} unoptimized />
        <span>Grimoire</span>
      </a>

      <nav aria-label="Main navigation">
        <Link
          href="/docs/"
          aria-current={isDocsHome ? 'page' : undefined}
          data-active={isDocs ? 'true' : undefined}
        >
          Docs
        </Link>
        <a href="https://github.com/Operation-Grimoire/grimoire">
          <GitHubIcon />
          <span>GitHub</span>
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </nav>

      <div className="docs-mobile-controls">
        {slots.searchTrigger && <slots.searchTrigger.sm hideIfDisabled />}
        {slots.sidebar && (
          <slots.sidebar.trigger aria-label="Open navigation" className="docs-menu-button">
            <Menu size={20} aria-hidden="true" />
          </slots.sidebar.trigger>
        )}
      </div>
    </header>
  );
}
