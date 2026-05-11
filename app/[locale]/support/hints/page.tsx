import type { Metadata } from 'next'
import { SupportHintsPage } from '@/views/SupportHintsPage'

export const metadata: Metadata = {
  title: 'Important Hints for Support Requests',
  description: 'Device identification information required for OPTRONIC support requests — type plates, labels, article numbers, and serial numbers.',
}

export default function Page() {
  return <SupportHintsPage />
}
