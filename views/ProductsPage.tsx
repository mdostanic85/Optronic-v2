

import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Radio } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../src/components/SEO';

export function ProductsPage() {
  const { t, lp } = useLanguage();

  const categories = [
    {
      icon: Radio,
      title: t.home.solutionSensors,
      description: t.sensors.description,
      products: t.sensors.items.map((item: { name: string; title: string }) => item.name),
      link: '/products/sensors',
    },
    {
      icon: Cpu,
      title: t.home.solutionControl,
      description: t.controlSystems.description,
      products: t.controlSystems.items.map((item: { name: string }) => item.name),
      link: '/products/control-systems',
    },
  ];

  return (
    <div>
      <SEO title="Products" description="Explore OPTRONIC industrial sensors and CNC control systems. Digital light screens, light curtains, encoders, multi-axis CNC controllers, and real-time operating systems." />
      <PageHeader title={t.footer.products} />

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {categories.map((cat) => (
              <Link key={cat.title} to={lp(cat.link)} className="group">
                <Card className="h-full overflow-hidden border-2 transition-all group-hover:border-op-primary group-hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-op-primary-muted transition-colors group-hover:bg-op-primary/20">
                      <cat.icon className="h-7 w-7 text-op-primary" />
                    </div>
                    <h2 className="mb-3 text-2xl font-medium text-op-ink transition-colors group-hover:text-op-primary">
                      {cat.title}
                    </h2>
                    <p className="mb-6 text-op-body leading-relaxed">{cat.description}</p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {cat.products.map((name: string) => (
                        <span key={name} className="rounded-full bg-op-surface-muted px-3 py-1 text-sm text-op-body-strong">
                          {name}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-op-primary font-medium transition-colors group-hover:text-op-primary-hover">
                      {t.common.viewDetails} <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <PageCTA
        title={t.home.ctaTitle}
        description={t.home.ctaDesc}
      >
        <ButtonLink to="/contact" variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {t.home.ctaRequestQuote}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
