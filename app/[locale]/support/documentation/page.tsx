import type { Metadata } from 'next'
import { DocumentationPage } from '@/views/DocumentationPage'

export const metadata: Metadata = {
  title: 'Technical Documentation',
  description: 'Find product manuals, datasheets, and technical specifications for all OPTRONIC sensors and control systems.',
}

export default function Page() {
  return <DocumentationPage />
}
