

import { Link } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';
import { PageHeader, Section, Container, PageCTA, ButtonLink } from '../components/design-system';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../src/components/SEO';

const labelImages = [
  '/assets/support-hints/type.jpg',
  '/assets/support-hints/serial_device.jpg',
  '/assets/support-hints/control.jpg',
  '/assets/support-hints/serial_part.jpg',
] as const;

export function SupportHintsPage() {
  const { t, locale } = useLanguage();
  const sd = t.supportDetails;
  const hints = sd.importantHints;

  return (
    <div>
      <SEO title="Important Hints for Support Requests" description="Device identification information required for OPTRONIC support requests — type plates, labels, article numbers, and serial numbers." />
      <PageHeader
        title={hints.heading}
        description={hints.p1}
        className="[&_p]:whitespace-pre-line"
      >
        <div className="mt-6">
          <Link
            to={`/${locale}/support`}
            className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            {sd.backToSupport}
          </Link>
        </div>
      </PageHeader>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12">

            {/* Main instruction callout */}
            <div className="flex gap-4 rounded-xl border-2 border-op-primary bg-op-primary-muted p-6">
              <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-op-primary" />
              <p className="text-base text-op-ink">{hints.p2}</p>
            </div>

            {/* Label types — card layout with live-site copy and photos */}
            <div className="grid gap-6 sm:grid-cols-2">
              {hints.labels.map((label, i) => (
                <div
                  key={label.title}
                  className="overflow-hidden rounded-xl border border-op-border bg-white shadow-sm"
                >
                  <div className="border-b border-op-border bg-op-surface-muted p-4">
                    <ImageWithFallback
                      src={labelImages[i]}
                      alt={label.imageAlt}
                      className="mx-auto h-auto max-h-40 w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-4 text-lg font-medium text-op-ink">{label.title}</h3>
                    <ul className="space-y-2">
                      {label.examples.map((ex) => (
                        <li key={ex} className="text-sm text-op-body leading-relaxed">
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Journal note */}
            <div className="rounded-xl bg-op-surface-muted p-6">
              <p className="whitespace-pre-line text-sm text-op-body leading-relaxed">{hints.journalNote}</p>
            </div>

          </div>
        </Container>
      </Section>

      <PageCTA title={t.support.needHelp} description={t.support.readyDesc}>
        <ButtonLink to={`/${locale}/support/contact`} variant="primary">
          {t.support.getInTouch}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
