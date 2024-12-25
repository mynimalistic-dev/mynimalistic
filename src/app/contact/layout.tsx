import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Mynimalistic',
  description: 'Get in touch with Mynimalistic for inquiries and support.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 