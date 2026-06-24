/**
 * Inline badge marking the Grimoire app version a feature shipped in.
 * Available in any MDX page (registered in mdx.tsx). Use only for Grimoire's
 * own features — not in comparison columns for other apps.
 *
 *   <Version v="0.2" />            -> "v0.2+"   (available since 0.2)
 *   <Version v="0.3" label="new" /> -> "new in 0.3"
 */
export function Version({ v, label }: { v: string; label?: string }) {
  const text = label ? `${label} ${v}` : `v${v}+`;
  return (
    <span
      title={`Available since Grimoire ${v}`}
      className="ml-1.5 inline-flex select-none items-center rounded-full border border-fd-primary/40 bg-fd-primary/10 px-1.5 py-0.5 align-middle text-[0.65rem] font-medium leading-none text-fd-primary"
    >
      {text}
    </span>
  );
}
