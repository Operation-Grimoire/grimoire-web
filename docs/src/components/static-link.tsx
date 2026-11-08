import type { ComponentProps } from 'react';

// Both applications are static exports on one origin. Native navigation also
// avoids requesting Next route-segment payloads from an object-store host.
export function StaticLink(props: ComponentProps<'a'> & { prefetch?: boolean }) {
  const attributes = { ...props };
  delete attributes.prefetch;
  return <a {...attributes} />;
}
