import { Link } from 'react-router-dom'


import type { ReactNode } from 'react';

import { ArrowRight } from 'lucide-react';
import { cn } from '../ui/utils';

type CalloutCardProps = {
  title: string;
  children: ReactNode;
  primaryAction: { to: string; href?: string; label: string };
  footer?: ReactNode;
  className?: string;
};

export function CalloutCard({ title, children, primaryAction, footer, className }: CalloutCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200/60 bg-white p-8 shadow-[0_4px_12px_rgba(15,23,42,0.06)] lg:sticky lg:top-24',
        className,
      )}
    >
      <h3 className="mb-3 text-xl font-semibold tracking-tight text-op-ink">{title}</h3>
      <div className="mb-6 text-xs leading-relaxed text-op-body">{children}</div>
      <Link
        to={primaryAction.to ?? primaryAction.href ?? '/'}
        className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-op-primary text-sm font-semibold text-white transition-all duration-200 hover:bg-op-primary-hover hover:shadow-[0_0_20px_rgba(237,32,36,0.25)]"
      >
        {primaryAction.label}
        <ArrowRight className="h-4 w-4" />
      </Link>
      {footer && <div className="mt-6 border-t border-slate-100 pt-6">{footer}</div>}
    </div>
  );
}
