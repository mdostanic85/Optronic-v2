

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../components/design-system';
import { SEO } from '../src/components/SEO';

export function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', subject: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    { icon: MapPin, title: t.contact.visitUs, content: (
      <p className="text-sm text-op-body">OPTRONIC AG<br />Unteregger Strasse 53<br />Postfach, CH-9403 Goldach<br />Switzerland</p>
    )},
    { icon: Phone, title: t.contact.callUs, content: (
      <div className="space-y-1">
        <p className="text-sm"><a href="tel:+41718440200" className="text-op-body hover:text-op-primary transition-colors">+41 (0)71 844 02 00</a></p>
        <p className="text-sm text-op-body">Mon-Fri: 8:00 - 17:00 CET</p>
      </div>
    )},
    { icon: Mail, title: t.contact.emailUs, content: (
      <div className="space-y-1">
        <p className="text-sm"><a href="mailto:info@optronic.ch" className="text-op-body hover:text-op-primary transition-colors">info@optronic.ch</a></p>
        <p className="text-sm"><a href="mailto:sales@optronic.ch" className="text-op-body hover:text-op-primary transition-colors">sales@optronic.ch</a></p>
        <p className="text-sm"><a href="mailto:support@optronic.ch" className="text-op-body hover:text-op-primary transition-colors">support@optronic.ch</a></p>
      </div>
    )},
    { icon: Clock, title: t.contact.businessHours, content: (
      <div className="space-y-1 text-sm text-op-body">
        <p>Monday - Friday: 8:00 - 17:00 CET</p>
        <p>Saturday - Sunday: Closed</p>
      </div>
    )},
  ];

  return (
    <div>
      <SEO title="Contact" description="Contact OPTRONIC AG in Goldach, Switzerland. Get in touch for product inquiries, technical support, quotes, and custom solutions." />
      <PageHeader
        title={t.contact.title}
        description={t.contact.description}
      />

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <Card key={info.title}>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-op-primary-muted">
                    <info.icon className="h-6 w-6 text-op-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-medium text-op-ink">{info.title}</h3>
                  {info.content}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-2xl border border-op-border bg-op-surface p-8 shadow-lg">
              <h2 className="mb-6 text-3xl font-normal text-op-ink">{t.contact.sendMessage}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="mb-2 block text-op-ink">{t.contact.name} *</Label>
                    <Input id="name" type="text" required value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="John Doe" className="h-12 border-2 border-op-border-ui bg-op-surface focus:border-op-primary" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2 block text-op-ink">{t.contact.emailField} *</Label>
                    <Input id="email" type="email" required value={formData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="john@example.com" className="h-12 border-2 border-op-border-ui bg-op-surface focus:border-op-primary" />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="phone" className="mb-2 block text-op-ink">{t.contact.phoneField}</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="+41 44 123 4567" className="h-12 border-2 border-op-border-ui bg-op-surface focus:border-op-primary" />
                  </div>
                  <div>
                    <Label htmlFor="company" className="mb-2 block text-op-ink">{t.contact.company}</Label>
                    <Input id="company" type="text" value={formData.company} onChange={(e) => handleChange('company', e.target.value)} placeholder="Company Name" className="h-12 border-2 border-op-border-ui bg-op-surface focus:border-op-primary" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="mb-2 block text-op-ink">{t.contact.subject} *</Label>
                  <Select value={formData.subject} onValueChange={(v) => handleChange('subject', v)}>
                    <SelectTrigger className="h-12 border-2 border-op-border-ui bg-op-surface focus:border-op-primary">
                      <SelectValue placeholder={t.contact.selectSubject} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">{t.contact.subjectGeneral}</SelectItem>
                      <SelectItem value="sales">{t.contact.subjectSales}</SelectItem>
                      <SelectItem value="technical">{t.contact.subjectTechnical}</SelectItem>
                      <SelectItem value="custom">{t.contact.subjectCustom}</SelectItem>
                      <SelectItem value="partnership">{t.contact.subjectPartnership}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="mb-2 block text-op-ink">{t.contact.message} *</Label>
                  <Textarea id="message" required rows={12} value={formData.message} onChange={(e) => handleChange('message', e.target.value)} placeholder={t.contact.messagePlaceholder} className="resize-none border-2 border-op-border-ui bg-op-surface focus:border-op-primary" />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto px-8">
                  {t.contact.sendButton} <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-4 text-xl font-medium text-op-ink">{t.contact.whyContact}</h3>
                  <ul className="space-y-3">
                    {t.contact.whyContactItems.map((item: string) => (
                      <li key={item} className="flex items-start">
                        <span className="mr-2 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-op-primary" />
                        <span className="text-op-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-12 border-t border-op-border pt-8">
            <h3 className="mb-5 text-xl font-medium text-op-ink">{t.contact.salesPartners}</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-op-border bg-op-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-op-body mb-2">Germany</p>
                <p className="text-sm font-medium text-op-ink">ISIS IC GmbH</p>
                <p className="text-sm text-op-body">Handelsweg 1</p>
                <p className="text-sm text-op-body">DE-46485 Wesel</p>
                <p className="mt-2 text-sm text-op-body">Phone: +49 (0)281 3 38 39-0</p>
                <p className="text-sm text-op-body">Fax: +49 (0)281 3 38 39-30</p>
                <a href="https://www.isis-ic.com" target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-op-primary hover:underline">www.isis-ic.com</a>
                <a href="mailto:vertrieb@isis-ic.com" className="block text-sm text-op-primary hover:underline">vertrieb@isis-ic.com</a>
              </div>
              <div className="rounded-xl border border-op-border bg-op-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-op-body mb-2">France</p>
                <p className="text-sm font-medium text-op-ink">TECNIPACK SERVICES</p>
                <p className="text-sm text-op-body">10 rue charles tellier</p>
                <p className="text-sm text-op-body">FR-77100 MEAUX</p>
                <p className="mt-2 text-sm text-op-body">Phone: +33 (0)6 06 46 33 55</p>
                <a href="https://www.tecnipack-services.fr" target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-op-primary hover:underline">www.tecnipack-services.fr</a>
                <a href="mailto:administratif@tecnipack-services.fr" className="block text-sm text-op-primary hover:underline">administratif@tecnipack-services.fr</a>
              </div>
              <div className="rounded-xl border border-op-border bg-op-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-op-body mb-2">Denmark</p>
                <p className="text-sm font-medium text-op-ink">SEVAL A/S</p>
                <p className="text-sm text-op-body">Kærbøllingvej 106</p>
                <p className="text-sm text-op-body">DK-7182 Bredsten</p>
                <p className="mt-2 text-sm text-op-body">Phone: +45 (0)7665 4044</p>
                <a href="https://www.seval.dk" target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-op-primary hover:underline">www.seval.dk</a>
                <a href="mailto:kontakt@seval.dk" className="block text-sm text-op-primary hover:underline">kontakt@seval.dk</a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <PageCTA
        title={t.contact.ctaTitle}
        description={t.contact.ctaDesc}
      >
        <a href="tel:+41718440200">
          <Button size="lg" variant="secondary">
            <Phone className="mr-2 h-5 w-5" /> {t.contact.callHotline}
          </Button>
        </a>
        <a href="mailto:support@optronic.ch">
          <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-op-primary">
            <Mail className="mr-2 h-5 w-5" /> {t.contact.emailSupport}
          </Button>
        </a>
      </PageCTA>
    </div>
  );
}
