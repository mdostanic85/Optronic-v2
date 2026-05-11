import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { WireframeProvider } from '@/contexts/WireframeContext'
import { ScrollToTop } from '@/components/ScrollToTop'

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }]
}

export const metadata: Metadata = {}

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <WireframeProvider>
        <ScrollToTop />
        <div className="flex min-h-full flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </WireframeProvider>
    </LanguageProvider>
  )
}
