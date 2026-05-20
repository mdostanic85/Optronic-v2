import { Head } from 'vite-react-ssg'
import { useLocation, useParams } from 'react-router-dom'

const BASE_URL = 'https://www.optronic.ch'
const SITE_NAME = 'OPTRONIC AG'
const DEFAULT_TITLE = `${SITE_NAME} – Industrial Sensors & CNC Control Systems | Swiss Engineering`
const DEFAULT_DESCRIPTION =
  'OPTRONIC AG develops precision industrial sensors (LVMC light screens, light curtains, encoders) and CNC control systems for demanding manufacturing environments. Swiss-engineered in Goldach since founding.'

interface SEOProps {
  title?: string
  description?: string
  noTemplate?: boolean
}

export function SEO({ title, description, noTemplate = false }: SEOProps) {
  const { pathname } = useLocation()
  const { locale } = useParams<{ locale?: string }>()
  const currentLocale = locale ?? 'en'

  const fullTitle = noTemplate
    ? (title ?? DEFAULT_TITLE)
    : title
      ? `${title} | ${SITE_NAME}`
      : DEFAULT_TITLE

  const metaDescription = description ?? DEFAULT_DESCRIPTION

  const canonicalPath = pathname
  const enPath = canonicalPath.replace(/^\/(en|de)/, '/en')
  const dePath = canonicalPath.replace(/^\/(en|de)/, '/de')

  return (
    <Head>
      <html lang={currentLocale} />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={`${BASE_URL}${canonicalPath}`} />
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}${enPath}`} />
      <link rel="alternate" hrefLang="de" href={`${BASE_URL}${dePath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${enPath}`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={`${BASE_URL}${canonicalPath}`} />
      <meta property="og:locale" content={currentLocale === 'de' ? 'de_CH' : 'en_US'} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Head>
  )
}
