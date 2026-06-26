import type { ReactNode } from 'react';

/** Renders locale copy that may wrap emphasis in `<strong>…</strong>`. */
export function renderCopyWithBold(text: string): ReactNode {
  if (!text.includes('<strong>')) {
    return text;
  }

  const parts = text.split(/(<strong>[\s\S]*?<\/strong>)/g);

  return parts.map((part, index) => {
    const match = /^<strong>([\s\S]*?)<\/strong>$/.exec(part);
    if (match) {
      return (
        <strong key={index} className="font-semibold text-op-ink">
          {match[1]}
        </strong>
      );
    }
    return part ? <span key={index}>{part}</span> : null;
  });
}
