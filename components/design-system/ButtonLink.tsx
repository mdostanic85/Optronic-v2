'use client'

import React from 'react';
import Link from 'next/link';
import { cn } from '../ui/utils';

type ButtonVariant = 'primary' | 'ghostOnDark' | 'outlineLight' | 'outlineNeutral';

const variantBase =
  'inline-flex items-center justify-center gap-2 text-sm font-medium leading-5 tracking-[-0.15px] h-10 rounded-lg transition-colors';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-op-secondary text-op-on-dark hover:bg-op-secondary-hover',
  ghostOnDark:
    'border border-op-on-dark text-op-on-dark bg-transparent hover:bg-op-on-dark hover:text-op-primary',
  outlineLight:
    'border border-op-on-dark text-op-on-dark bg-transparent hover:bg-op-on-dark/10',
  outlineNeutral:
    'border border-op-border-ui text-op-ink bg-op-surface hover:bg-op-surface-muted',
};

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  iconRight?: React.ReactNode;
};

/**
 * Primary CTA links — matches Figma navy / ghost / outline buttons.
 */
export function ButtonLink({ to, children, variant = 'primary', className, iconRight }: ButtonLinkProps) {
  return (
    <Link href={to} className={cn(variantBase, variants[variant], 'px-4', className)}>
      {children}
      {iconRight}
    </Link>
  );
}

type TextLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  iconRight?: React.ReactNode;
};

/** Inline "Learn more" style (primary red text). */
export function TextLink({ to, children, className, iconRight }: TextLinkProps) {
  return (
    <Link href={to} className={cn('inline-flex items-center gap-1 text-base tracking-[-0.31px] text-op-primary', className)}>
      {children}
      {iconRight}
    </Link>
  );
}
