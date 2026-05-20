import { Navigate } from 'react-router-dom'

type Locale = 'en' | 'de'
const locales: Locale[] = ['en', 'de']
const defaultLocale: Locale = 'en'

export function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return defaultLocale
  const preferred = navigator.language?.split('-')[0]?.toLowerCase()
  return locales.includes(preferred as Locale) ? (preferred as Locale) : defaultLocale
}

export function RootLocaleRedirect() {
  const locale = detectLocale()
  return <Navigate to={`/${locale}`} replace />
}
