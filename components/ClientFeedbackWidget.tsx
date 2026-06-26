import { useEffect, useState } from 'react'
import { FeedbackWidget } from '@thedesignproject/crrt'

export function ClientFeedbackWidget() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <FeedbackWidget projectId="optronic" />
}
