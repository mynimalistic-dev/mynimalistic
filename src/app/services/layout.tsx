import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Mynimalistic',
  description: 'Explore our comprehensive range of services - Detailed description of your services',
  alternates: {
    canonical: 'https://www.mynimalistic.tech/services'
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 