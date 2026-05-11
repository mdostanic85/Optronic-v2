import type { Metadata } from 'next'
import { D571Page } from '@/views/products/D571Page'

export const metadata: Metadata = {
  title: 'CNC D571 Flying Saw Controller',
  description: 'The CNC D571 is based on the CompactPCI system D500 and the operating station E3000 for synchronous running cutting-to-length devices.',
}

export default function Page() {
  return <D571Page />
}
