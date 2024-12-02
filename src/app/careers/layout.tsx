import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Mynimalistic',
  description: 'Join our team at Mynimalistic. Explore career opportunities and internships in tech innovation.',
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 