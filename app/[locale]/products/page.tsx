import type { Metadata } from 'next'
import { ProductsPage } from '@/views/ProductsPage'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore OPTRONIC industrial sensors and CNC control systems. Digital light screens, light curtains, encoders, multi-axis CNC controllers, and real-time operating systems.',
}

export default function Page() {
  return <ProductsPage />
}
