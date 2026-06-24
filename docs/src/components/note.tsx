'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'fumadocs-ui/components/ui/popover';
import type { ReactNode } from 'react';

/**
 * Wrap any cell content in a click-to-open popover note. Registered in mdx.tsx.
 *
 *   <Note text="Why this is partial…">🟡</Note>
 */
export function Note({ text, children }: { text: string; children: ReactNode }) {
  return (
    <Popover>
      <PopoverTrigger className="cursor-help underline decoration-dotted decoration-fd-muted-foreground/60 underline-offset-4">
        {children}
      </PopoverTrigger>
      <PopoverContent className="max-w-xs text-left text-sm text-fd-popover-foreground">
        {text}
      </PopoverContent>
    </Popover>
  );
}
