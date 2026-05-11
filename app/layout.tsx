import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.optronic.ch'),
  title: {
    default: 'OPTRONIC AG – Industrial Sensors & CNC Control Systems | Swiss Engineering',
    template: '%s | OPTRONIC AG',
  },
  description:
    'OPTRONIC AG develops precision industrial sensors (LVMC light screens, light curtains, encoders) and CNC control systems for demanding manufacturing environments. Swiss-engineered in Goldach since founding.',
  keywords: [
    'OPTRONIC',
    'industrial sensors',
    'CNC control systems',
    'LVMC',
    'light curtains',
    'light screens',
    'incremental encoders',
    'OAGLinux',
    'Swiss engineering',
    'Goldach',
  ],
  authors: [{ name: 'OPTRONIC AG' }],
  robots: 'index, follow',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'de-CH': '/de',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'OPTRONIC AG',
    title: 'OPTRONIC AG – Industrial Sensors & CNC Control Systems',
    description:
      'Swiss-engineered precision sensors and CNC control systems for industrial automation. LVMC digital light screens, light curtains, encoders, and multi-axis CNC controllers.',
    url: '/',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'OPTRONIC AG – Industrial Sensors & CNC Control Systems',
    description:
      'Swiss-engineered precision sensors and CNC control systems for industrial automation.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" href="/fonts/plus-jakarta-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'OPTRONIC AG',
              url: 'https://www.optronic.ch',
              logo: 'https://www.optronic.ch/assets/logo.webp',
              description:
                'OPTRONIC AG develops precision industrial sensors and CNC control systems for demanding manufacturing environments.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Unteregger Strasse 53',
                addressLocality: 'Goldach',
                postalCode: '9403',
                addressCountry: 'CH',
              },
              telephone: '+41718440200',
              email: 'sales@optronic.ch',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="h-full">{children}</body>
    </html>
  )
}
