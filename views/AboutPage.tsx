'use client'

import Link from 'next/link';
import { Target, Eye, Award, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageHeader, Section, Container } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { useDocumentHead } from '../hooks/useDocumentHead';

export function AboutPage() {
  const { t } = useLanguage();
  useDocumentHead(
    'About OPTRONIC',
    'OPTRONIC AG – Swiss manufacturer of precision industrial sensors and CNC control systems based in Goldach. Decades of engineering excellence.',
  );

  const values = [
    { icon: Target, title: t.about.values[0].title, description: t.about.values[0].description },
    { icon: Award, title: t.about.values[1].title, description: t.about.values[1].description },
    { icon: Users, title: t.about.values[2].title, description: t.about.values[2].description },
    { icon: Eye, title: t.about.values[3].title, description: t.about.values[3].description },
  ];

  const milestones = [
    { year: 'Goldach', title: 'Founded in Switzerland', desc: 'OPTRONIC AG was founded in Goldach, Switzerland, where we develop and manufacture industrial sensors and CNC control systems.' },
    { year: 'LV100/LV150', title: 'First light screen systems', desc: 'We developed our first light screen systems, the LV100 and LV150 series, establishing our expertise in optical industrial sensing.' },
    { year: 'D100/D300', title: 'CNC control systems', desc: 'We introduced CNC control systems with the D100 and D300 series, expanding into multi-axis machine control for demanding applications.' },
    { year: 'LVMC', title: 'Digital light curtain technology', desc: 'We launched digital LVMC light curtain technology, advancing configuration, diagnostics, and integration for light-screen applications.' },
    { year: 'OAGLinux', title: 'Real-time operating system', desc: 'We developed OAGLinux, a Linux-based industrial real-time operating system tailored for CNC controllers and harsh industrial environments.' },
    { year: 'Today', title: 'CNC D500/E3000 and sensor portfolio', desc: 'Our current lineup includes the CNC D500/E3000 multi-axis controllers alongside a comprehensive portfolio of sensors, encoders, light barriers, and support for legacy systems.' },
  ];

  return (
    <div>
      <PageHeader
        title={t.about.title}
        description={t.about.description}
      />

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-normal text-op-ink md:text-4xl">{t.about.ourStory}</h2>
              <div className="space-y-4 text-base leading-6 tracking-[-0.31px] text-op-body">
                <p>{t.about.storyParagraphs[0]}</p>
                <p>{t.about.storyParagraphs[1]}</p>
                <p>{t.about.storyParagraphs[2]}</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-xl">
              <ImageWithFallback
                src="/assets/optronic-building-new.png"
                alt="OPTRONIC company building"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-normal text-op-ink md:text-4xl">{t.about.ourValues}</h2>
            <p className="mx-auto max-w-2xl text-xl text-op-body">{t.about.ourValuesDesc}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title}>
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-op-primary-muted">
                    <v.icon className="h-6 w-6 text-op-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-op-ink">{v.title}</h3>
                  <p className="text-op-body">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container narrow>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-normal text-op-ink md:text-4xl">{t.about.ourJourney}</h2>
            <p className="text-xl text-op-body">{t.about.ourJourneyDesc}</p>
          </div>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={`${m.year}-${m.title}`} className="relative flex items-start gap-6">
                <div className="w-24 flex-shrink-0 text-right md:w-32">
                  <span className="text-lg text-op-primary md:text-2xl">{m.year}</span>
                </div>
                <div className="relative z-10 mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-op-primary">
                  {i < milestones.length - 1 && (
                    <div className="absolute left-1/2 top-4 h-16 w-0.5 -translate-x-1/2 bg-op-primary-muted" />
                  )}
                </div>
                <div className="flex-grow pb-8">
                  <h3 className="mb-1 text-xl font-medium text-op-ink">{m.title}</h3>
                  <p className="text-op-body">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

    </div>
  );
}
