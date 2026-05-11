'use client'

import { Mail, Phone, Clock, Headphones } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { PageHeader, Section, Container } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { useDocumentHead } from '../hooks/useDocumentHead';

export function SupportContactPage() {
  const { t } = useLanguage();
  useDocumentHead(
    'Contact Support',
    'Submit a support request to OPTRONIC. Get help with technical issues, spare parts, repairs, and configuration.',
  );
  const supportChannels = [
    { icon: Mail, title: 'Email Support', description: 'Get help via email', details: 'support@optronic.ch', href: 'mailto:support@optronic.ch', info: 'Response within 24 hours' },
    { icon: Phone, title: 'Phone Support', description: 'Talk to our experts', details: '+41 (0)71 844 02 00', href: 'tel:+41718440200', info: 'Mon-Fri, 8:00-17:00 CET' },
    { icon: Headphones, title: 'Technical Support', description: 'Advanced technical assistance', details: 'sales@optronic.ch', href: 'mailto:sales@optronic.ch', info: 'For complex technical issues' },
  ];

  return (
    <div>
      <PageHeader
        title="Contact Support"
        description="Our technical support team is here to help you get the most out of your OPTRONIC products"
      />

      <Section variant="surface" spacing="default">
        <Container>
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {supportChannels.map((channel) => (
              <Card key={channel.title} className="text-center transition-shadow hover:shadow-lg">
                <CardContent className="py-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-op-primary-muted">
                    <channel.icon className="h-8 w-8 text-op-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-op-ink">{channel.title}</h3>
                  <p className="mb-4 text-op-body">{channel.description}</p>
                  <a href={channel.href} className="mb-2 block text-op-primary hover:underline">{channel.details}</a>
                  <p className="text-sm text-op-body">{channel.info}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mx-auto max-w-3xl">
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-normal text-op-ink">Submit a Support Request</h2>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-op-body">First Name *</label>
                      <input type="text" required className="w-full rounded-lg border border-op-border-ui px-4 py-2 outline-none focus:border-op-primary focus:ring-2 focus:ring-op-primary/20" />
                    </div>
                    <div>
                      <label className="mb-2 block text-op-body">Last Name *</label>
                      <input type="text" required className="w-full rounded-lg border border-op-border-ui px-4 py-2 outline-none focus:border-op-primary focus:ring-2 focus:ring-op-primary/20" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-op-body">Email *</label>
                    <input type="email" required className="w-full rounded-lg border border-op-border-ui px-4 py-2 outline-none focus:border-op-primary focus:ring-2 focus:ring-op-primary/20" />
                  </div>
                  <div>
                    <label className="mb-2 block text-op-body">Product</label>
                    <select className="w-full rounded-lg border border-op-border-ui px-4 py-2 outline-none focus:border-op-primary focus:ring-2 focus:ring-op-primary/20">
                      <option>Select a product</option>
                      <option>LVMC – Digital Light Screens</option>
                      <option>LV..M – Light Curtains</option>
                      <option>G15 / G35 – Measuring Light Barriers</option>
                      <option>OG23D / OG28D – Incremental Encoders</option>
                      <option>IRV / IRT – Inductive Loop Sensors</option>
                      <option>IGV – Encoder Expanders</option>
                      <option>CNC D500 / E3000</option>
                      <option>OAGLinux</option>
                      <option>CNC D571</option>
                      <option>FSU200 / FPDI200</option>
                      <option>Legacy System (D100/D200/D300/E100)</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-op-body">Serial Number</label>
                    <input type="text" placeholder="Optional" className="w-full rounded-lg border border-op-border-ui px-4 py-2 outline-none focus:border-op-primary focus:ring-2 focus:ring-op-primary/20" />
                  </div>
                  <div>
                    <label className="mb-2 block text-op-body">Issue Type</label>
                    <select className="w-full rounded-lg border border-op-border-ui px-4 py-2 outline-none focus:border-op-primary focus:ring-2 focus:ring-op-primary/20">
                      <option>Select issue type</option>
                      <option>Technical Problem</option>
                      <option>Configuration / Setup Help</option>
                      <option>Spare Parts Request</option>
                      <option>Repair / Maintenance</option>
                      <option>Retrofit / Upgrade</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-op-body">Description *</label>
                    <textarea required rows={6} placeholder="Please describe your issue in detail..." className="w-full resize-none rounded-lg border border-op-border-ui px-4 py-2 outline-none focus:border-op-primary focus:ring-2 focus:ring-op-primary/20" />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    {t.common.submitSupportRequest}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <Card className="mx-auto mt-12 max-w-3xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-op-primary" />
                <div>
                  <h3 className="mb-2 text-xl font-medium text-op-ink">Support Hours</h3>
                  <p className="mb-3 text-op-body">Our support team is available:</p>
                  <div className="space-y-1 text-op-body-strong">
                    <p>Monday - Friday: 8:00 - 17:00 CET</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                  <p className="mt-4 text-sm text-op-body">
                    For urgent matters outside business hours, please email <a href="mailto:support@optronic.ch" className="text-op-primary hover:underline">support@optronic.ch</a> and we'll respond as soon as possible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
