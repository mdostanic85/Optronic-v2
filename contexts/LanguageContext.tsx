'use client'

import { createContext, useContext, useCallback, type ReactNode } from 'react'
import { useRouter, usePathname, useParams } from 'next/navigation'
import en from '../locales/en'
import de from '../locales/de'

export type Locale = 'en' | 'de'

type Translations = typeof en

const translations: Record<Locale, Translations> = { en, de }

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const params = useParams()
  const router = useRouter()
  const pathname = usePathname()

  const locale = (params?.locale as Locale) === 'de' ? 'de' : 'en'

  const setLocale = useCallback(
    (l: Locale) => {
      const segments = pathname.split('/')
      segments[1] = l
      const newPath = segments.join('/') || '/'
      // Preserve any query params (e.g. Ruttl session params) at click time
      const qs = typeof window !== 'undefined' ? window.location.search : ''
      router.push(qs ? `${newPath}${qs}` : newPath, { scroll: false })
    },
    [pathname, router],
  )

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
