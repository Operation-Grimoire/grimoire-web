import { getSidebarTree } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { DocsHeader } from '@/components/docs-header';
import { DocsScroll } from '@/components/docs-scroll';
import { SidebarTabs } from '@/components/sidebar-tabs';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={getSidebarTree()}
      {...baseOptions()}
      tabs={false}
      slots={{ header: DocsHeader }}
      sidebar={{ collapsible: false, banner: <SidebarTabs /> }}
      containerProps={{
        style: {
          gridTemplate:
            '"header header header header header" var(--fd-header-height) "sidebar sidebar toc-popover toc toc" "sidebar sidebar main toc toc" 1fr / minmax(min-content, 1fr) var(--fd-sidebar-col) minmax(0, calc(var(--fd-layout-width,97rem) - var(--fd-sidebar-width) - var(--fd-toc-width))) var(--fd-toc-width) minmax(min-content, 1fr)',
        },
      }}
    >
      <DocsScroll />
      {children}
    </DocsLayout>
  );
}
