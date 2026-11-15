import { Provider } from '@/components/provider';
import { siteUrl } from '@/lib/shared';
import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Grimoire documentation', template: '%s — Grimoire' },
  description: 'Installation, source extensions, reader settings, and development guides for Grimoire.',
  icons: { icon: '/icon-192.png' },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return <html lang="en" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning><body className="flex flex-col min-h-screen"><Provider>{children}</Provider></body></html>;
}
