import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Mynimalistic',
  description: 'Review the terms and conditions for using Mynimalistic services.',
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 