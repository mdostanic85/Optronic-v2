import type { RouteRecord } from 'vite-react-ssg'
import { RootLocaleRedirect } from './components/RootLocaleRedirect'
import { LocalePathRedirect } from './components/LocalePathRedirect'
import { LocaleLayout } from './components/LocaleLayout'
import { NotFound } from './components/NotFound'

import { HomePage } from '@/views/HomePage'
import { AboutPage } from '@/views/AboutPage'
import { ContactPage } from '@/views/ContactPage'
import { PrivacyPage } from '@/views/PrivacyPage'
import { ProductsPage } from '@/views/ProductsPage'
import { ProductDetailPage } from '@/views/ProductDetailPage'
import { SensorsPage } from '@/views/SensorsPage'
import { ControlSystemsPage } from '@/views/ControlSystemsPage'
import { LVMCPage } from '@/views/products/LVMCPage'
import { LVMPage } from '@/views/products/LVMPage'
import { G15G35Page } from '@/views/products/G15G35Page'
import { OGPage } from '@/views/products/OGPage'
import { IRVIRTPage } from '@/views/products/IRVIRTPage'
import { IGVPage } from '@/views/products/IGVPage'
import { D500E3000Page } from '@/views/products/D500E3000Page'
import { OAGLinuxPage } from '@/views/products/OAGLinuxPage'
import { D571Page } from '@/views/products/D571Page'
import { ServicesPage } from '@/views/ServicesPage'
import { TechnicalSupportPage } from '@/views/TechnicalSupportPage'
import { SupportPage } from '@/views/SupportPage'
import { DownloadsPage } from '@/views/DownloadsPage'
import { DocumentationPage } from '@/views/DocumentationPage'
import { FAQsPage } from '@/views/FAQsPage'
import { SupportContactPage } from '@/views/SupportContactPage'
import { SupportHintsPage } from '@/views/SupportHintsPage'

const LOCALES = ['en', 'de']

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLocaleRedirect />,
  },
  { path: '/products/*', element: <LocalePathRedirect /> },
  { path: '/about', element: <LocalePathRedirect /> },
  { path: '/contact', element: <LocalePathRedirect /> },
  { path: '/privacy', element: <LocalePathRedirect /> },
  { path: '/support/*', element: <LocalePathRedirect /> },
  { path: '/services/*', element: <LocalePathRedirect /> },
  {
    path: '/:locale',
    element: <LocaleLayout />,
    // Tell vite-react-ssg which locale values to pre-render
    getStaticPaths: () => LOCALES.map((l) => `/${l}`),
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      {
        path: 'products',
        children: [
          { index: true, element: <ProductsPage /> },
          { path: 'sensors', element: <SensorsPage /> },
          { path: 'control-systems', element: <ControlSystemsPage /> },
          { path: 'lvmc', element: <LVMCPage /> },
          { path: 'lvm', element: <LVMPage /> },
          { path: 'g15-g35', element: <G15G35Page /> },
          { path: 'og', element: <OGPage /> },
          { path: 'irv-irt', element: <IRVIRTPage /> },
          { path: 'igv', element: <IGVPage /> },
          { path: 'd500-e3000', element: <D500E3000Page /> },
          { path: 'oaglinux', element: <OAGLinuxPage /> },
          { path: 'd571', element: <D571Page /> },
          {
            path: ':id',
            element: <ProductDetailPage />,
            // Only pre-render known product IDs
            getStaticPaths: () =>
              LOCALES.flatMap((l) => [
                `/${l}/products/lvmc`,
                `/${l}/products/lvm`,
                `/${l}/products/g15-g35`,
                `/${l}/products/og`,
                `/${l}/products/irv-irt`,
                `/${l}/products/igv`,
                `/${l}/products/d500-e3000`,
                `/${l}/products/oaglinux`,
                `/${l}/products/d571`,
              ]),
          },
        ],
      },
      {
        path: 'services',
        children: [
          { index: true, element: <ServicesPage /> },
          { path: 'technical-support', element: <TechnicalSupportPage /> },
        ],
      },
      {
        path: 'support',
        children: [
          { index: true, element: <SupportPage /> },
          { path: 'downloads', element: <DownloadsPage /> },
          { path: 'documentation', element: <DocumentationPage /> },
          { path: 'faqs', element: <FAQsPage /> },
          { path: 'contact', element: <SupportContactPage /> },
          { path: 'hints', element: <SupportHintsPage /> },
          { path: ':id', element: <SupportPage /> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
