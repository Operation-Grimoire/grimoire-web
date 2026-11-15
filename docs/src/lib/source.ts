import { docs } from 'collections/server';
import type * as PageTree from 'fumadocs-core/page-tree';
import { loader } from 'fumadocs-core/source';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [],
});

export function getPageImage(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `${docsImageRoute}/${segments.join('/')}`,
  };
}

export function getPageMarkdownUrl(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join('/')}`,
  };
}

export async function getLLMText(page: (typeof source)['$inferPage']) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}

function hasPagePrefix(node: PageTree.Node, prefix: string): boolean {
  if (node.type === 'page') return node.url.startsWith(prefix);
  if (node.type === 'folder') {
    return (
      (node.index ? node.index.url.startsWith(prefix) : false) ||
      node.children.some((child) => hasPagePrefix(child, prefix))
    );
  }
  return false;
}

/**
 * Reorganize the docs tree into two flat root tabs (For readers / Developers)
 * without altering file paths, URLs, or llms.txt output.
 */
export function getSidebarTree(): PageTree.Root {
  const tree = source.getPageTree();
  const docsHome = tree.children.find(
    (node): node is PageTree.Item => node.type === 'page' && node.url === docsRoute,
  );
  const usersFolder = tree.children.find(
    (node): node is PageTree.Folder =>
      node.type === 'folder' && hasPagePrefix(node, `${docsRoute}/users`),
  );
  const extensionsFolder = tree.children.find(
    (node): node is PageTree.Folder =>
      node.type === 'folder' && hasPagePrefix(node, `${docsRoute}/extensions`),
  );
  const developmentFolder = tree.children.find(
    (node): node is PageTree.Folder =>
      node.type === 'folder' && hasPagePrefix(node, `${docsRoute}/development`),
  );

  const readerChildren: PageTree.Node[] = [];
  if (usersFolder) {
    const firstSeparatorIndex = usersFolder.children.findIndex(
      (node) => node.type === 'separator',
    );
    if (docsHome && firstSeparatorIndex >= 0) {
      readerChildren.push(
        ...usersFolder.children.slice(0, firstSeparatorIndex + 1),
        { ...docsHome, name: 'Overview' },
        ...usersFolder.children.slice(firstSeparatorIndex + 1),
      );
    } else {
      if (docsHome) readerChildren.push({ ...docsHome, name: 'Overview' });
      readerChildren.push(...usersFolder.children);
    }
  } else if (docsHome) {
    readerChildren.push({ ...docsHome, name: 'Overview' });
  }

  const devChildren: PageTree.Node[] = [];
  if (extensionsFolder) {
    devChildren.push(
      { type: 'separator', name: 'Extensions' },
      ...extensionsFolder.children,
    );
  }
  if (developmentFolder) {
    devChildren.push(
      { type: 'separator', name: 'Android app' },
      ...developmentFolder.children,
    );
  }

  return {
    $id: tree.$id,
    name: tree.name,
    fallback: tree.fallback,
    children: [
      {
        $id: 'tab-readers',
        type: 'folder',
        name: 'For readers',
        root: true,
        children: readerChildren,
      },
      {
        $id: 'tab-developers',
        type: 'folder',
        name: 'Developers',
        root: true,
        children: devChildren,
      },
    ],
  };
}
