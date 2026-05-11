import type { Metadata } from 'next'
import { PrivacyPage } from '@/views/PrivacyPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'OPTRONIC AG privacy policy and data protection information.',
}

export default function Page() {
  return <PrivacyPage />
}
