
import type { ReactNode } from 'react';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { cn } from '../ui/utils';

type PageCTAProps = {
  title: string;
  description?: string;
  titleClassName?: string;
  children: ReactNode;
};

/** Bottom CTA band — full content width (same as page tables / `max-w-op-container`). */
export function PageCTA({ title, description, titleClassName, children }: PageCTAProps) {
  return (
    <section className="relative overflow-hidden bg-op-gradient-cta py-op-section-lg text-op-on-dark">
      <div className="absolute inset-0 bg-grid-pattern" />
      <Container className="relative text-center">
        <Reveal variant="fade-up" duration={0.6}>
          <h2 className={cn('mb-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl', titleClassName)}>
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal variant="fade-up" delay={0.1} duration={0.6}>
            <p className="mb-10 text-lg leading-relaxed text-op-on-dark-muted md:text-xl">
              {description}
            </p>
          </Reveal>
        )}
        <Reveal variant="scale" delay={0.2} duration={0.5}>
          <div className="flex flex-wrap justify-center gap-4">
            {children}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
