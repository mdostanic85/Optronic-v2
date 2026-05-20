

import { Target, Eye, Award, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageHeader, Section, Container } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../src/components/SEO';

export function AboutPage() {
  const { t } = useLanguage();

  const values = [
    { icon: Target, title: t.about.values[0].title, description: t.about.values[0].description },
    { icon: Award, title: t.about.values[1].title, description: t.about.values[1].description },
    { icon: Users, title: t.about.values[2].title, description: t.about.values[2].description },
    { icon: Eye, title: t.about.values[3].title, description: t.about.values[3].description },
  ];

  return (
    <div>
      <SEO title="About OPTRONIC" description="OPTRONIC AG – Swiss manufacturer of precision industrial sensors and CNC control systems based in Goldach. Decades of engineering excellence." />
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

    </div>
  );
}
