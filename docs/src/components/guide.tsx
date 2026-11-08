import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

export function GuideLink({ href, title, children }: { href: string; title: string; children: ReactNode }) {
  return <a href={href} className="guide-row not-prose"><strong>{title}</strong><span>{children}</span><ArrowRight size={18} aria-hidden="true" /></a>;
}

export function GuideButton({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} className="guide-button not-prose">{children}<ArrowRight size={17} aria-hidden="true" /></a>;
}
