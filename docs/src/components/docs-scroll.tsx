'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * Ensure client-side /docs/* navigations scroll to top (or the #hash target),
 * even when sticky headers leave #nd-page inside Next.js's viewport check,
 * while preserving browser Back/Forward scroll restoration.
 */
export function DocsScroll() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const isPopState = useRef(false);

  useEffect(() => {
    const onPopState = () => {
      isPopState.current = true;
    };
    const clearPopState = () => {
      isPopState.current = false;
    };
    window.addEventListener('popstate', onPopState);
    document.addEventListener('click', clearPopState, true);
    document.addEventListener('keydown', clearPopState, true);
    return () => {
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('click', clearPopState, true);
      document.removeEventListener('keydown', clearPopState, true);
    };
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isPopState.current) {
      isPopState.current = false;
      return;
    }

    const rawHash = window.location.hash.slice(1);
    if (rawHash) {
      const id = decodeURIComponent(rawHash);
      const target =
        document.getElementById(id) ?? document.getElementsByName(id)[0] ?? null;
      if (target) {
        target.scrollIntoView({ block: 'start', behavior: 'instant' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
