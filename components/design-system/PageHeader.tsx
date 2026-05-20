

import type { ReactNode } from 'react';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { SwissMadeBadge } from './SwissMadeBadge';
import { cn } from '../ui/utils';

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function PageHeader({ title, description, children, className }: PageHeaderProps) {
  return (
    <section className={cn('relative overflow-hidden bg-op-gradient-hero', className)}>
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      <SwissMadeBadge />
      <Container className="relative py-24 md:py-32">
        <Reveal variant="fade-up" duration={0.7}>
          <h1 className="mb-5 whitespace-pre-line text-4xl font-semibold leading-tight tracking-tight text-op-on-dark md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal variant="fade-up" delay={0.15} duration={0.7}>
            <p className="max-w-2xl text-lg leading-relaxed text-op-on-dark-muted md:text-xl">
              {description}
            </p>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
