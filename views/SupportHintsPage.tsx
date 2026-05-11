'use client'

import Link from 'next/link';
import { ArrowLeft, Tag, Sticker, ClipboardList, Hash, Info } from 'lucide-react';
import { PageHeader, Section, Container, PageCTA, ButtonLink } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { useDocumentHead } from '../hooks/useDocumentHead';

const labelIcons = [Tag, Sticker, ClipboardList, Hash];

export function SupportHintsPage() {
  const { t, locale } = useLanguage();
  const sd = t.supportDetails;
  const hints = sd.importantHints;

  useDocumentHead(
    hints.heading,
    hints.p2,
  );

  return (
    <div>
      <PageHeader
        title={hints.heading}
        description={hints.p1}
      >
        <div className="mt-6">
          <Link
            href={`/${locale}/support`}
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

            {/* Label types */}
            <div>
              <h2 className="mb-8 text-2xl font-medium text-op-ink">{hints.labelTypesHeading}</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {hints.labels.map((label, i) => {
                  const Icon = labelIcons[i];
                  return (
                    <div
                      key={label.title}
                      className="rounded-xl border border-op-border bg-white p-6 shadow-sm"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-op-primary-muted">
                        <Icon className="h-6 w-6 text-op-primary" />
                      </div>
                      <h3 className="mb-2 text-lg font-medium text-op-ink">{label.title}</h3>
                      <p className="mb-4 text-sm text-op-body leading-relaxed">{label.description}</p>
                      <ul className="space-y-1.5">
                        {label.examples.map((ex) => (
                          <li key={ex} className="flex items-start gap-2 text-sm text-op-body">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-op-primary" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Journal note */}
            <div className="rounded-xl bg-op-surface-muted p-6">
              <p className="text-sm text-op-body leading-relaxed">{hints.journalNote}</p>
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
