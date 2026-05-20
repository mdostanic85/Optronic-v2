import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()
  const previousContentPathRef = useRef<string | null>(null)

  const getContentPath = (path: string) => {
    const segments = path.split('/').filter(Boolean)
    if (segments[0] === 'en' || segments[0] === 'de') {
      return `/${segments.slice(1).join('/')}`
    }
    return path
  }

  useEffect(() => {
    const currentContentPath = getContentPath(pathname)

    // Keep scroll position when only locale changes (/en -> /de for same page).
    if (
      previousContentPathRef.current !== null &&
      previousContentPathRef.current !== currentContentPath
    ) {
      window.scrollTo(0, 0)
    }

    previousContentPathRef.current = currentContentPath
  }, [pathname])

  return null
}
