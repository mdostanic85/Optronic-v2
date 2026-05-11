'use client'

import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Section, Container } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';

export function ProductDetailPage() {
  const { t } = useLanguage();
  return (
    <Section variant="surface" spacing="default">
      <Container narrow className="text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-op-surface-muted">
          <Search className="h-10 w-10 text-op-body" />
        </div>
        <h1 className="mb-4 text-3xl font-normal text-op-ink">{t.productNotFound.title}</h1>
        <p className="mb-8 text-lg text-op-body">{t.productNotFound.description}</p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/products/sensors">{t.common.viewSensors}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/products/control-systems">{t.common.viewControlSystems}</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t.common.backToHome}
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
