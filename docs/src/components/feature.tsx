/**
 * A feature-table cell: a short title with an optional muted subtitle.
 * Pass `href` to link the title to a doc page. Registered in mdx.tsx.
 *
 *   <Feature title="EPUB sources" sub="Browse & fetch from Z-Library, Libgen" />
 *   <Feature title="APK extensions" sub="..." href="/docs/extensions" />
 */
export function Feature({
  title,
  sub,
  href,
}: {
  title: string;
  sub?: string;
  href?: string;
}) {
  return (
    <span className="block">
      {href ? (
        <a
          href={href}
          className="font-medium text-fd-primary underline-offset-2 hover:underline"
        >
          {title}
        </a>
      ) : (
        <span className="font-medium text-fd-foreground">{title}</span>
      )}
      {sub ? (
        <span className="mt-0.5 block text-xs font-normal text-fd-muted-foreground">
          {sub}
        </span>
      ) : null}
    </span>
  );
}
