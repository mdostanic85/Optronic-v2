

import type { ReactNode } from 'react';
import { cn } from '../ui/utils';

export type SectionVariant = 'surface' | 'muted' | 'brand' | 'transparent';

type SectionSpacing = 'default' | 'sm' | 'lg';

const variantClass: Record<SectionVariant, string> = {
  surface: 'bg-white',
  muted: 'bg-slate-50',
  brand: 'bg-op-gradient-hero text-op-on-dark',
  transparent: 'bg-transparent',
};

const spacingClass: Record<SectionSpacing, string> = {
  default: 'py-op-section',
  sm: 'py-op-section-sm',
  lg: 'py-op-section-lg',
};

type SectionProps = {
  children: ReactNode;
  className?: string;
  variant?: SectionVariant;
  spacing?: SectionSpacing;
  as?: 'section' | 'div';
  id?: string;
};

export function Section({
  children,
  className,
  variant = 'surface',
  spacing = 'default',
  as: Tag = 'section',
  id,
}: SectionProps) {
  return (
    <Tag id={id} className={cn(variantClass[variant], spacingClass[spacing], className)}>
      {children}
    </Tag>
  );
}
