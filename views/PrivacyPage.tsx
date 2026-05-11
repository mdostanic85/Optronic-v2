'use client'

import { Container, PageHeader, Section } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { useDocumentHead } from '../hooks/useDocumentHead';
import { privacyDe, privacyEn } from '../locales/privacyLocales';

export function PrivacyPage() {
  const { locale } = useLanguage();
  const content = locale === 'de' ? privacyDe : privacyEn;

  const { title, description } = content;

  useDocumentHead(title, description);

  return (
    <div>
      <PageHeader title={title} />

      <Section variant="surface" spacing="default">
        <Container>
          <div className="rounded-xl border border-op-border bg-white p-6 md:p-8">
            <div className="space-y-4">
              {content.intro.map((p, i) => (
                <p key={`intro-${i}`} className="text-op-body">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 space-y-8">
              {content.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="mb-4 text-xl font-medium text-op-ink">{section.heading}</h2>
                  <div className="space-y-6">
                    {section.blocks.map((block, bi) => (
                      <div key={`${section.heading}-${bi}`}>
                        {block.subheading ? (
                          <h3 className="mb-2 text-lg font-medium text-op-ink">{block.subheading}</h3>
                        ) : null}
                        {block.paragraphs?.map((p, pi) => (
                          <p key={`${section.heading}-${bi}-p-${pi}`} className="text-op-body">
                            {p}
                          </p>
                        ))}
                        {block.bullets && block.bullets.length > 0 ? (
                          <ul className="mt-3 list-disc space-y-1 pl-6 text-op-body">
                            {block.bullets.map((item, li) => (
                              <li key={`${section.heading}-${bi}-li-${li}`}>{item}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
