'use client'

import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Settings,
  Package,
  Wrench,
  Award,
  Clock,
  Users2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  Container,
  Section,
  SectionHeader,
  FeatureCard,
  ProductCard,
  ButtonLink,
  CalloutCard,
  Reveal,
  RevealStagger,
} from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { useDocumentHead } from '../hooks/useDocumentHead';

const lvmcControlImage = '/assets/lvmc-main.webp';
const lvmcHeroSlideImage = '/assets/lvmc-hero.png';
const lvmFramesImage = '/assets/lvm-sensor.webp';
const lvmFramesHeroImage = '/assets/lvm-lvmm-hero.png';
const og23og28Image = '/assets/og23-og28.webp';
const irvIrtHeroSlideImage = '/assets/irv-irt-hero.png';
const e3000Image = '/assets/e3000.webp';
const oagLinuxImage = '/assets/oag-linux.webp';
const cncD371Image = '/assets/cnc-d371.webp';

export function HomePage() {
  const { t } = useLanguage();
  useDocumentHead(
    'Industrial Sensors & CNC Control Systems',
    'OPTRONIC AG – Swiss-engineered precision sensors (LVMC, light curtains, encoders) and CNC control systems for industrial automation and manufacturing.',
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [lvmcHeroSlideImage, e3000Image, lvmFramesHeroImage, og23og28Image, irvIrtHeroSlideImage];
  const heroIds = ['lvmc', 'd500-e3000', 'lvm', 'og', 'irv-irt'];
  const heroLinks = ['/products/lvmc', '/products/d500-e3000', '/products/lvm', '/products/og', '/products/irv-irt'];

  const heroSlides = t.home.heroSlides.map((slide: { title: string; description: string }, i: number) => ({
    id: heroIds[i],
    title: slide.title,
    description: slide.description,
    ctaLink: heroLinks[i],
    image: heroImages[i],
  }));

  const sensorProducts = [
    {
      id: 'lvmc',
      name: 'LVMC',
      description: `${t.sensors.items[0].title} - ${t.sensors.items[0].description}`,
      image: lvmcControlImage,
      link: '/products/lvmc',
    },
    {
      id: 'lvm',
      name: 'LV...M',
      description: `${t.sensors.items[1].title} - ${t.sensors.items[1].description}`,
      image: lvmFramesImage,
      link: '/products/lvm',
    },
    {
      id: 'og',
      name: 'OG23D/OG28D',
      description: `${t.sensors.items[3].title} - ${t.sensors.items[3].description}`,
      image: og23og28Image,
      link: '/products/og',
    },
  ];

  const controlSystemsProducts = [
    {
      id: 'd500-e3000',
      name: 'CNC D500 / E3000',
      description: `${t.controlSystems.items[0].title} - ${t.controlSystems.items[0].description}`,
      image: e3000Image,
      link: '/products/d500-e3000',
    },
    {
      id: 'oag-linux',
      name: 'OAG Linux',
      description: `${t.controlSystems.items[1].title} - ${t.controlSystems.items[1].description}`,
      image: oagLinuxImage,
      link: '/products/oaglinux',
    },
    {
      id: 'cnc-d371',
      name: 'CNC D371',
      description: `${t.controlSystems.items[2].title} - ${t.controlSystems.items[2].description}`,
      image: cncD371Image,
      link: '/products/d571',
    },
  ];

  const supportIcons = [Settings, Package, Wrench];
  const swissIcons = [Award, Clock, Users2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div>
      <section className="relative overflow-hidden bg-op-gradient-hero">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-[#DC3545]/[0.07] blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-[#DC3545]/[0.04] blur-[100px]" />

        <div className="relative">
          {heroSlides.map((slide: { id: string; title: string; description: string; ctaLink: string; image: string }, i: number) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ${i === currentSlide ? 'relative opacity-100' : 'pointer-events-none absolute inset-0 opacity-0'}`}
            >
              <Container className="py-28 md:py-36">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                  <div className="text-op-on-dark">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#DC3545]" />
                      Swiss Precision Engineering
                    </div>
                    <h1 className="mb-6 text-[length:var(--op-text-hero)] font-bold leading-[1.08] tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/70 md:text-xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <ButtonLink to={slide.ctaLink} variant="primary" iconRight={<ArrowRight className="h-4 w-4" />}>
                        {t.home.viewProduct}
                      </ButtonLink>
                      <ButtonLink to="/contact" variant="ghostOnDark">
                        {t.home.contactUs}
                      </ButtonLink>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-white/[0.08] to-transparent" />
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                        <ImageWithFallback
                          src={i === currentSlide ? slide.image : undefined}
                          alt={slide.title}
                          className="h-[420px] w-full object-cover"
                          width={800}
                          height={420}
                          {...(i === currentSlide ? { fetchPriority: 'high' } : {})}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          ))}

          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 md:left-6 md:h-12 md:w-12"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-white/70" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 md:right-6 md:h-12 md:w-12"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-white/70" />
          </button>

          <div className="relative pb-10">
            <div className="flex justify-center gap-2">
              {heroSlides.map((_: unknown, i: number) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentSlide(i)}
                  className={`rounded-full transition-all duration-300 ${i === currentSlide ? 'h-2 w-8 bg-[#DC3545]' : 'h-2 w-2 bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section variant="surface" spacing="default">
        <Container>
          <SectionHeader
            title={t.home.ourSolutions}
            description={t.home.ourSolutionsDesc}
            className="mb-16"
          />
          <RevealStagger variant="fade-up" stagger={0.12} className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              <FeatureCard
                key="sensors"
                to="/products/sensors"
                icon={<CheckCircle2 className="h-7 w-7 text-op-primary" />}
                title={t.home.solutionSensors}
                description={t.home.solutionSensorsDesc}
                meta={t.home.solutionSensorsProducts}
              />,
              <FeatureCard
                key="control"
                to="/products/control-systems"
                icon={<CheckCircle2 className="h-7 w-7 text-op-primary" />}
                title={t.home.solutionControl}
                description={t.home.solutionControlDesc}
                meta={t.home.solutionControlProducts}
              />,
              <FeatureCard
                key="support"
                to="/support"
                icon={<CheckCircle2 className="h-7 w-7 text-op-primary" />}
                title={t.home.solutionSupport}
                description={t.home.solutionSupportDesc}
                meta={t.home.solutionSupportMeta}
              />,
            ]}
          </RevealStagger>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <Link href="/products/lvmc" className="group block">
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
              <Reveal variant="slide-left" duration={0.7}>
              <div>
                <span className="mb-4 inline-block rounded-full bg-op-primary-muted px-4 py-2 text-base leading-6 tracking-[-0.31px] text-op-primary">
                  {t.home.flagshipProduct}
                </span>
                <h2 className="mb-6 text-4xl font-normal leading-10 tracking-[0.37px] text-op-ink transition-colors group-hover:text-op-primary">
                  {t.home.flagshipTitle}
                </h2>
                <p className="mb-8 text-lg leading-7 tracking-[-0.44px] text-op-body">
                  {t.home.flagshipDesc}
                </p>

                <div className="mb-10 space-y-4">
                  {t.home.flagshipFeatures.map((f: { title: string; desc: string }) => (
                    <div key={f.title} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-op-primary" />
                      <div>
                        <h3 className="mb-1 text-base font-medium leading-6 tracking-[-0.31px] text-op-ink">{f.title}</h3>
                        <p className="text-base leading-6 tracking-[-0.31px] text-op-body">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <span className="inline-flex h-10 items-center gap-2 rounded-lg bg-op-secondary px-4 text-sm font-medium leading-5 tracking-[-0.15px] text-op-on-dark transition-shadow group-hover:shadow-lg">
                  {t.home.viewTechnicalDetails} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              </Reveal>

              <Reveal variant="slide-right" duration={0.7} delay={0.15}>
              <div className="mt-8 md:mt-24">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[10px] shadow-xl transition-shadow group-hover:shadow-2xl">
                  <ImageWithFallback
                    src={lvmcControlImage}
                    alt="LVMC"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              </Reveal>
            </div>
          </Link>
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container>
          <SectionHeader
            title={t.home.sensorProducts}
            description={t.home.sensorProductsDesc}
            descriptionSecondary={t.home.sensorProductsDesc2}
          />

          <RevealStagger variant="fade-up" stagger={0.12} className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {sensorProducts.map((p) => (
              <ProductCard
                key={p.id}
                to={p.link}
                title={p.name}
                description={p.description}
                imageSrc={p.image}
                imageAlt={p.name}
              />
            ))}
          </RevealStagger>

          <Reveal variant="fade-up" delay={0.3}>
            <div className="mt-12 text-center">
              <ButtonLink to="/products/sensors" variant="outlineNeutral" iconRight={<ArrowRight className="h-4 w-4" />}>
                {t.home.viewAllSensors}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <SectionHeader
            title={t.home.controlSystemsTitle}
            description={t.home.controlSystemsDesc}
            descriptionSecondary={t.home.controlSystemsDesc2}
          />

          <RevealStagger variant="fade-up" stagger={0.12} className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {controlSystemsProducts.map((p) => (
              <ProductCard
                key={p.id}
                to={p.link}
                title={p.name}
                description={p.description}
                imageSrc={p.image}
                imageAlt={p.name}
              />
            ))}
          </RevealStagger>

          <Reveal variant="fade-up" delay={0.3}>
            <div className="mt-12 text-center">
              <ButtonLink
                to="/products/control-systems"
                variant="outlineNeutral"
                iconRight={<ArrowRight className="h-4 w-4" />}
              >
                {t.home.viewAllControlSystems}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <Reveal variant="slide-left" duration={0.7}>
            <div>
              <h2 className="mb-6 text-4xl font-normal leading-10 tracking-[0.37px] text-op-ink">
                {t.home.supportLegacyTitle}
              </h2>
              <p className="mb-6 text-lg leading-[29px] tracking-[-0.44px] text-op-body-strong">
                {t.home.supportLegacyDesc}
              </p>

              <div className="space-y-4">
                {t.home.supportLegacyItems.map((item: { title: string; desc: string }, i: number) => {
                  const Icon = supportIcons[i];
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-op-primary-muted">
                        <Icon className="h-5 w-5 text-op-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-medium leading-[27px] tracking-[-0.44px] text-op-ink">{item.title}</h3>
                        <p className="text-base leading-6 tracking-[-0.31px] text-op-body">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            </Reveal>

            <Reveal variant="slide-right" duration={0.7} delay={0.15}>
            <CalloutCard
              title={t.home.needAssistance}
              primaryAction={{ to: '/support', label: t.home.contactSupport }}
              footer={
                <>
                  <p className="mb-3 text-sm text-op-body">{t.home.additionalResources}:</p>
                  <div className="space-y-2">
                    <Link href="/support/downloads" className="block text-sm text-op-primary hover:underline">
                      {t.home.technicalDocumentation}
                    </Link>
                    <Link href="/contact" className="block text-sm text-op-primary hover:underline">
                      {t.home.requestQuote}
                    </Link>
                  </div>
                </>
              }
            >
              {t.home.needAssistanceDesc}
            </CalloutCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      <section className="relative overflow-hidden bg-op-gradient-hero py-op-section-lg text-op-on-dark">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute -top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-[#DC3545]/[0.06] blur-[100px]" />
        <Container narrow className="relative text-center">
          <Reveal variant="fade-up" duration={0.7}>
            <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              {t.home.swissExcellenceTitle}
            </h2>
            <p className="mb-14 text-lg leading-relaxed text-white/70 md:text-xl">
              {t.home.swissExcellenceDesc}
            </p>
          </Reveal>

          <RevealStagger variant="scale" stagger={0.15} className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {t.home.swissExcellenceHighlights.map((label: string, i: number) => {
              const Icon = swissIcons[i];
              return (
                <div key={label} className="flex flex-col items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <Icon className="h-7 w-7 text-white/90" />
                  </div>
                  <p className="text-base font-medium text-white/80">{label}</p>
                </div>
              );
            })}
          </RevealStagger>

          <Reveal variant="fade-up" delay={0.4}>
            <ButtonLink to="/about" variant="ghostOnDark" className="px-6">
              {t.home.learnMoreAboutUs}
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-op-gradient-cta py-op-section-lg text-op-on-dark">
        <div className="absolute inset-0 bg-grid-pattern" />
        <Container narrow className="relative text-center">
          <Reveal variant="fade-up" duration={0.6}>
            <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl">{t.home.ctaTitle}</h2>
          </Reveal>
          <Reveal variant="fade-up" delay={0.1} duration={0.6}>
            <p className="mb-10 text-lg leading-relaxed text-white/80 md:text-xl">
              {t.home.ctaDesc}
            </p>
          </Reveal>
          <Reveal variant="scale" delay={0.2} duration={0.5}>
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink to="/contact" variant="primary" iconRight={<ArrowRight className="h-4 w-4" />}>
                {t.home.ctaRequestQuote}
              </ButtonLink>
              <ButtonLink to="/products" variant="ghostOnDark" className="px-6">
                {t.home.browseProducts}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
