'use client';
import { BookOpen, Code2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { DocsLink as Link } from './docs-link';

export function SidebarTabs() {
  const pathname = usePathname().replace(/\/$/, '') || '/';
  const isDev =
    pathname.startsWith('/docs/extensions') || pathname.startsWith('/docs/development');

  return (
    <nav className="docs-sidebar-tabs" aria-label="Documentation sections">
      <Link
        href="/docs/"
        className="docs-sidebar-tab"
        data-active={!isDev ? 'true' : 'false'}
        aria-current={!isDev ? 'page' : undefined}
      >
        <BookOpen size={15} aria-hidden="true" />
        <span>For readers</span>
      </Link>
      <Link
        href="/docs/extensions/"
        className="docs-sidebar-tab"
        data-active={isDev ? 'true' : 'false'}
        aria-current={isDev ? 'page' : undefined}
      >
        <Code2 size={15} aria-hidden="true" />
        <span>Developers</span>
      </Link>
    </nav>
  );
}
