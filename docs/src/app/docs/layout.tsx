import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { DocsHeader } from '@/components/docs-header';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()} tabs={false} slots={{ header: DocsHeader }} sidebar={{ defaultOpenLevel: 1, collapsible: false }} containerProps={{ style: { gridTemplate: '"header header header header header" var(--fd-header-height) "sidebar sidebar toc-popover toc toc" "sidebar sidebar main toc toc" 1fr / minmax(min-content, 1fr) var(--fd-sidebar-col) minmax(0, calc(var(--fd-layout-width,97rem) - var(--fd-sidebar-width) - var(--fd-toc-width))) var(--fd-toc-width) minmax(min-content, 1fr)' } }}>
      {children}
    </DocsLayout>
  );
}
