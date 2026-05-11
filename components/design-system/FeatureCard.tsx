'use client'

import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../ui/utils';

type FeatureCardProps = {
  to: string;
  icon: ReactNode;
  title: string;
  description: string;
  meta?: string;
  className?: string;
};

export function FeatureCard({ to, icon, title, description, meta, className }: FeatureCardProps) {
  const { t } = useLanguage();
  return (
    <Link href={to} className={cn('group block h-full', className)}>
      <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-7 transition-all duration-300 hover:border-op-primary/20 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.1)] hover:-translate-y-1">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-op-primary-muted transition-all duration-300 group-hover:bg-op-primary group-hover:shadow-[0_0_20px_rgba(237,32,36,0.2)]">
          <div className="transition-colors duration-300 group-hover:[&>svg]:text-white">
            {icon}
          </div>
        </div>
        <h3 className="mb-2 text-lg font-semibold tracking-tight text-op-ink">{title}</h3>
        <p className="mb-3 text-xs leading-relaxed text-op-body">{description}</p>
        {meta && <p className="mb-5 text-sm font-medium text-op-muted">{meta}</p>}
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-op-primary">
          {t.common.learnMore}{' '}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
