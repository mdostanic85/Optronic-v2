'use client'

import Link from 'next/link';
import { Wrench, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { useDocumentHead } from '../hooks/useDocumentHead';

export function TechnicalSupportPage() {
  const { t } = useLanguage();
  useDocumentHead(
    'Technical Support',
    'OPTRONIC technical support services: troubleshooting, maintenance, on-site support, and warranty service for industrial sensors and CNC systems.',
  );
  const services = [
    { icon: Wrench, title: 'Troubleshooting & Diagnostics', description: 'Expert assistance in identifying and resolving technical issues with your equipment.' },
    { icon: Clock, title: 'Preventive Maintenance', description: 'Scheduled maintenance programs to ensure optimal performance and longevity.' },
    { icon: Users, title: 'On-Site Support', description: 'Our engineers can visit your facility for complex installations and repairs.' },
    { icon: Award, title: 'Warranty Service', description: 'Full warranty coverage with quick turnaround times for repairs and replacements.' },
  ];

  return (
    <div>
      <PageHeader
        title="Technical Support"
        description="Expert technical assistance from our team of experienced engineers"
      />

      <Section variant="surface" spacing="default">
        <Container>
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="transition-shadow hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-op-primary-muted">
                    <service.icon className="h-6 w-6 text-op-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-medium text-op-ink">{service.title}</h3>
                  <p className="text-op-body">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1724260793422-7754e5d06fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzdXBwb3J0JTIwZW5naW5lZXJ8ZW58MXx8fHwxNzY2NDkxODU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Technical Support"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-normal text-op-ink">Why Choose Our Support?</h2>
              <div className="space-y-4">
                {['24-hour response time for all support requests', 'Swiss-trained engineers with deep product knowledge', 'Comprehensive spare parts inventory', 'Support for legacy and current products', 'Remote diagnostics and assistance available'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-op-primary" />
                    <p className="text-op-body-strong">{item}</p>
                  </div>
                ))}
              </div>
              <ButtonLink to="/support/contact" variant="primary" className="mt-8" iconRight={<ArrowRight className="h-5 w-5" />}>
                {t.common.contactSupport}
              </ButtonLink>
            </div>
          </div>

          <Card className="bg-op-secondary text-op-on-dark">
            <CardContent className="p-8 text-center">
              <h3 className="mb-4 text-2xl">Need Immediate Assistance?</h3>
              <p className="mb-6 text-op-on-dark-muted">Our support team is ready to help you resolve any technical issues.</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/support/contact">{t.common.submitSupportRequest}</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-op-secondary" asChild>
                  <a href="tel:+41718440200">{t.common.callUsButton}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
