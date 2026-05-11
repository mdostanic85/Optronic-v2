import type { Metadata } from 'next'
import { IGVPage } from '@/views/products/IGVPage'

export const metadata: Metadata = {
  title: 'IGV Incremental Encoder Expanders',
  description: 'IGV encoder expanders to connect one incremental encoder electrically isolated to up to three targets (CNC, PLC, measurement equipment).',
}

export default function Page() {
  return <IGVPage />
}
