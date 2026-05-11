import type { Metadata } from 'next'
import { AboutPage } from '@/views/AboutPage'

export const metadata: Metadata = {
  title: 'About OPTRONIC',
  description: 'OPTRONIC AG – Swiss manufacturer of precision industrial sensors and CNC control systems based in Goldach. Decades of engineering excellence.',
}

export default function Page() {
  return <AboutPage />
}
