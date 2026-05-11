import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.optronic.ch'
const LOCALES = ['en', 'de'] as const

const staticRoutes = [
  '',
  '/about',
  '/contact',
  '/privacy',
  '/products',
  '/products/sensors',
  '/products/control-systems',
  '/products/lvmc',
  '/products/lvm',
  '/products/g15-g35',
  '/products/og',
  '/products/irv-irt',
  '/products/igv',
  '/products/d500-e3000',
  '/products/oaglinux',
  '/products/d571',
  '/services',
  '/services/technical-support',
  '/support',
  '/support/downloads',
  '/support/documentation',
  '/support/faqs',
  '/support/contact',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return LOCALES.flatMap((locale) =>
    staticRoutes.map((route) => {
      const path = `/${locale}${route}`
      return {
        url: `${BASE_URL}${path}`,
        lastModified: now,
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.7,
      }
    }),
  )
}
