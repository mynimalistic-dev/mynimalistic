import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Mynimalistic',
  description: 'Learn about our privacy practices and how we protect your data at Mynimalistic.',
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 