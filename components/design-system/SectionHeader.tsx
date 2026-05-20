

import type { ReactNode } from 'react';
import { cn } from '../ui/utils';
import { Reveal } from './Reveal';

type SectionHeaderProps = {
  title: string;
  description?: ReactNode;
  descriptionSecondary?: ReactNode;
  className?: string;
  align?: 'center' | 'left';
};

export function SectionHeader({
  title,
  description,
  descriptionSecondary,
  className,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', 'mb-8', className)}>
      <Reveal variant="fade-up" duration={0.6}>
        <h2 className={cn(
          'text-3xl font-semibold leading-tight tracking-tight text-op-ink mb-5 md:text-4xl',
          align === 'center' && 'mx-auto',
        )}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal variant="fade-up" delay={0.1} duration={0.6}>
          <div className={cn(
            'text-base leading-relaxed text-op-body max-w-[720px] md:text-xl',
            align === 'center' && 'mx-auto',
            descriptionSecondary && 'mb-4',
          )}>
            {description}
          </div>
        </Reveal>
      )}
      {descriptionSecondary && (
        <Reveal variant="fade-up" delay={0.2} duration={0.6}>
          <p className={cn(
            'text-base leading-relaxed text-op-body max-w-[720px]',
            align === 'center' && 'mx-auto',
          )}>
            {descriptionSecondary}
          </p>
        </Reveal>
      )}
    </div>
  );
}
