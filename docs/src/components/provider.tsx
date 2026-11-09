'use client';
import SearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/base';
import { FrameworkProvider } from 'fumadocs-core/framework';
import { useParams, usePathname } from 'next/navigation';
import { StaticLink } from './static-link';
import { type ReactNode } from 'react';

const staticRouter = {
  push: (url: string) => { window.location.assign(url); },
  refresh: () => { window.location.reload(); },
};
function useStaticRouter() { return staticRouter; }

export function Provider({ children }: { children: ReactNode }) {
  return (
    <FrameworkProvider Link={StaticLink} usePathname={usePathname} useParams={useParams} useRouter={useStaticRouter}><RootProvider
      search={{ SearchDialog }}
      theme={{ forcedTheme: 'dark', defaultTheme: 'dark', enableSystem: false }}
    >
      {children}
    </RootProvider></FrameworkProvider>
  );
}
