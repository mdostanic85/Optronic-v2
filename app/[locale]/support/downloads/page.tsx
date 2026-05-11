import type { Metadata } from 'next'
import { DownloadsPage } from '@/views/DownloadsPage'

export const metadata: Metadata = {
  title: 'Downloads',
  description: 'Download product manuals, datasheets, software, and technical documentation for OPTRONIC sensors and CNC control systems.',
}

export default function Page() {
  return <DownloadsPage />
}
