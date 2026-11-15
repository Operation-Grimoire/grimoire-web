'use client';
import SearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { type ReactNode } from 'react';
import { DocsLink } from './docs-link';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      components={{ Link: DocsLink }}
      search={{ SearchDialog }}
      theme={{ forcedTheme: 'dark', defaultTheme: 'dark', enableSystem: false }}
    >
      {children}
    </RootProvider>
  );
}
