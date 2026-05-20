

import type { ReactNode } from 'react';
import { Container } from './Container';
import { Reveal } from './Reveal';

type PageCTAProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function PageCTA({ title, description, children }: PageCTAProps) {
  return (
    <section className="relative overflow-hidden bg-op-gradient-cta py-op-section-lg text-op-on-dark">
      <div className="absolute inset-0 bg-grid-pattern" />
      <Container narrow className="relative text-center">
        <Reveal variant="fade-up" duration={0.6}>
          <h2 className="mb-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
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
