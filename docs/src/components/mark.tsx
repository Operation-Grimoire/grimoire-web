import { Check, Minus, X } from 'lucide-react';

const marks = {
  yes: { Icon: Check, label: 'Yes' },
  partial: { Icon: Minus, label: 'Partial' },
  no: { Icon: X, label: 'No' },
};

/** A comparison-table mark. Shape and hidden text carry the meaning, not color alone. */
export function Mark({ v }: { v: keyof typeof marks }) {
  const { Icon, label } = marks[v];
  return (
    <span className={`docs-mark docs-mark-${v}`}>
      <Icon size={18} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </span>
  );
}
