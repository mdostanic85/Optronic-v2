import type { Metadata } from 'next'
import { SupportPage } from '@/views/SupportPage'

export const metadata: Metadata = {
  title: 'Support',
  description: 'OPTRONIC support, repair, and retrofit services.',
}

export default function Page() {
  return <SupportPage />
}
