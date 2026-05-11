import type { Metadata } from 'next'
import { ServicesPage } from '@/views/ServicesPage'

export const metadata: Metadata = {
  title: 'Services',
  description: 'OPTRONIC engineering services: CNC system development, repair and retrofit, sensor integration, and technical support.',
}

export default function Page() {
  return <ServicesPage />
}
