import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '..', 'dist')

const BASE_URL = 'https://www.optronic.ch'
const LOCALES = ['en', 'de']

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
  '/support/hints',
  '/support/omc300',
  '/support/cnc-obsolete',
  '/support/component-lists',
  '/support/fsu200',
  '/support/lv-obsolete',
  '/support/og-obsolete',
]

const now = new Date().toISOString()

const entries = LOCALES.flatMap((locale) =>
  staticRoutes.map((route) => {
    const path = `/${locale}${route}`
    const priority = route === '' ? '1.0' : '0.7'
    const changefreq = route === '' ? 'weekly' : 'monthly'
    return `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  }),
)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`

writeFileSync(resolve(distDir, 'sitemap.xml'), xml, 'utf-8')
console.log(`sitemap.xml written (${entries.length} URLs)`)
