import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Projects | Mynimalistic',
  description: 'Explore our portfolio of innovative projects and solutions.',
  alternates: {
    canonical: 'https://www.mynimalistic.tech/projects',
  },
  openGraph: {
    title: 'Projects | Mynimalistic',
    description: 'Explore our portfolio of innovative projects and solutions.',
    type: 'website',
    url: 'https://wwww.mynimalistic.tech/projects',
    siteName: 'Mynimalistic',
    images: [
      {
        url: '/Mynimalistic.png',
        width: 192,
        height: 192,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Projects | Mynimalistic',
    description: 'Explore our portfolio of innovative projects and solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 