import { Outlet, useParams, Navigate } from 'react-router-dom'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { WireframeProvider } from '@/contexts/WireframeContext'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'

const VALID_LOCALES = ['en', 'de']

export function LocaleLayout() {
  const { locale } = useParams<{ locale: string }>()

  if (!locale || !VALID_LOCALES.includes(locale)) {
    return <Navigate to="/en" replace />
  }

  return (
    <LanguageProvider>
      <WireframeProvider>
        <ScrollToTop />
        <div className="flex min-h-full flex-col">
          <Navigation />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </WireframeProvider>
    </LanguageProvider>
  )
}
