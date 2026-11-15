'use client';
import NextLink from 'next/link';
import type { ComponentProps, MouseEvent } from 'react';

function isDocsHref(href: string): boolean {
  return href === '/docs' || href.startsWith('/docs/') || href.startsWith('/docs#');
}

function normalizePath(path: string): string {
  return path.replace(/\/+$/, '') || '/';
}

// Keep Astro routes (/, /#features, /add-repo/) and external URLs as native
// full-document links, while using Next.js client navigation within /docs/*.
export function DocsLink({
  href = '',
  prefetch,
  onClick,
  ...props
}: ComponentProps<'a'> & { prefetch?: boolean }) {
  if (isDocsHref(href)) {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        (props.target && props.target !== '_self')
      ) {
        return;
      }
      const target = new URL(href, window.location.href);
      if (
        normalizePath(target.pathname) === normalizePath(window.location.pathname) &&
        !target.hash
      ) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };
    return <NextLink href={href} prefetch={prefetch} onClick={handleClick} {...props} />;
  }
  return <a href={href} onClick={onClick} {...props} />;
}
