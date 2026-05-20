

import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../src/components/SEO';

export function SensorsPage() {
  const { t, lp } = useLanguage();
  const sensorIds = ['lvmc', 'lvm', 'g15-g35', 'og', 'irv-irt', 'igv'];
  const sensorImages = [
    '/assets/lvmc-main.webp',
    '/assets/lvm-sensor.webp',
    'https://www.optronic.ch/wp-content/uploads/2020/09/G15-_-G35-300x188.jpg',
    '/assets/og23-og28.webp',
    '/assets/irv20-mit-spule-32bit.webp',
    '/assets/igv.webp',
  ];
  const sensorDatasheets = [
    '/downloads/doc/sensors/Light_Curtain_LVMC_Flyer.pdf',
    '/downloads/doc/sensors/Light_Curtain_LV..M_Flyer.pdf',
    '/downloads/doc/sensors/Measuring_Light_Barrier_G15.pdf',
    '/downloads/doc/sensors/Incremental_Encoder_OG.pdf',
    '/downloads/doc/sensors/Inductive_Sensing_Coil_IRT.pdf',
    '/downloads/doc/sensors/Incremental_Encoder_Expander_IGV-133.pdf',
  ];
  const sensors = t.sensors.items.map((item, i) => ({ ...item, id: sensorIds[i], image: sensorImages[i], datasheet: sensorDatasheets[i] }));

  return (
    <div>
      <SEO title="Sensors" description="OPTRONIC precision sensors: LVMC digital light screens, LV..M light curtains, G15/G35 measuring light barriers, OG incremental encoders, IRV/IRT inductive sensors, IGV encoder expanders." />
      <PageHeader
        title={t.sensors.title}
        description={t.sensors.description}
      />

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sensors.map((sensor) => (
              <Card key={sensor.id} className="group flex h-full flex-col gap-0 overflow-hidden border-2 transition-all hover:border-op-primary hover:shadow-xl">
                <div className="flex aspect-[4/3] shrink-0 items-center justify-center bg-white p-6">
                  <img
                    src={sensor.image}
                    alt={sensor.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="mb-2 shrink-0 text-sm text-op-primary">{sensor.name}</div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-op-body">{sensor.title}</p>
                    {sensor.description ? (
                      <p className="mt-2 text-op-body">{sensor.description}</p>
                    ) : null}
                    {sensor.features.length > 0 ? (
                      <div className="mt-4 space-y-2">
                        {sensor.features.slice(0, 3).map((f) => (
                          <div key={f} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-op-primary" />
                            <span className="text-sm text-op-body">{f}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-6 flex shrink-0 gap-3">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to={lp(`/products/${sensor.id}`)}>
                        {t.sensors.learnMore}
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={sensor.datasheet} target="_blank" rel="noopener noreferrer">
                        <Download className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <PageCTA
        title={t.sensors.ctaTitle}
        description={t.sensors.ctaDesc}
      >
        <ButtonLink to="/contact" variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {t.sensors.ctaButton}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
