import type { Metadata } from 'next'
import { OGPage } from '@/views/products/OGPage'

export const metadata: Metadata = {
  title: 'OG23D/OG28D Incremental Encoders',
  description: 'Rugged photoelectrical incremental encoders OG23D and OG28D. Resolution up to 625 pulses/rev, 5000rpm max speed, IP65 protection.',
}

export default function Page() {
  return <OGPage />
}
