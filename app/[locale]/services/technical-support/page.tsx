import type { Metadata } from 'next'
import { TechnicalSupportPage } from '@/views/TechnicalSupportPage'

export const metadata: Metadata = {
  title: 'Technical Support',
  description: 'OPTRONIC technical support services: troubleshooting, maintenance, on-site support, and warranty service for industrial sensors and CNC systems.',
}

export default function Page() {
  return <TechnicalSupportPage />
}
