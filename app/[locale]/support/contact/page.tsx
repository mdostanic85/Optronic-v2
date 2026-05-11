import type { Metadata } from 'next'
import { SupportContactPage } from '@/views/SupportContactPage'

export const metadata: Metadata = {
  title: 'Contact Support',
  description: 'Submit a support request to OPTRONIC. Get help with technical issues, spare parts, repairs, and configuration.',
}

export default function Page() {
  return <SupportContactPage />
}
