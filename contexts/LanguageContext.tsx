import { createContext, useContext, useCallback, type ReactNode } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import en from '../locales/en'
import de from '../locales/de'
import { localePath, type Locale as LocaleCode } from '../lib/localePath'

export type Locale = 'en' | 'de'

type Translations = typeof en

const translations: Record<Locale, Translations> = { en, de }

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  /** Prefix internal app paths with the current locale (e.g. `/products/lvmc` → `/de/products/lvmc`). */
  lp: (path: string) => string
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const params = useParams<{ locale?: string }>()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const locale = (params?.locale as Locale) === 'de' ? 'de' : 'en'

  const setLocale = useCallback(
    (l: Locale) => {
      const segments = pathname.split('/')
      segments[1] = l
      const newPath = segments.join('/') || '/'
      // Preserve any query params (e.g. Ruttl session params) at click time
      const qs = typeof window !== 'undefined' ? window.location.search : ''
      navigate(qs ? `${newPath}${qs}` : newPath)
    },
    [pathname, navigate],
  )

  const lp = useCallback((path: string) => localePath(locale as LocaleCode, path), [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, lp, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
