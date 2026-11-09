import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      url: 'https://grimoireapp.org/',
      title: <span className="docs-brand"><Image src="/icon-192.png" alt="" width={44} height={44} unoptimized /><span>{appName}</span></span>,
    },
    // Shown in the mobile drawer. global.css hides them in the desktop sidebar,
    // where the top bar already carries the same links.
    links: [
      { text: 'Home', url: '/', on: 'menu' },
      { text: 'Features', url: '/#features', on: 'menu' },
      { text: 'GitHub', url: 'https://github.com/Operation-Grimoire/grimoire', external: true, on: 'menu' },
    ],
    themeSwitch: { enabled: false },
  };
}
