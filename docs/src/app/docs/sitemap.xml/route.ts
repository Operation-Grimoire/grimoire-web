import { siteUrl } from '@/lib/shared';
import { source } from '@/lib/source';

export const revalidate = false;

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function GET() {
  const urls = source
    .getPages()
    .filter((page) => page.slugs[0] !== 'comparison')
    .map((page) => {
      const path = page.url.endsWith('/') ? page.url : `${page.url}/`;
      return `${siteUrl}${path}`;
    })
    .sort();

  const entries = urls
    .map((loc) => `  <url><loc>${escapeXml(loc)}</loc></url>`)
    .join('\n');

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${entries}\n` +
    `</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
