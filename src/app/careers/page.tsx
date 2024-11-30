import { Metadata } from 'next';
import { ParallaxSection } from '@/components/CareersComponent/ParallaxSection';
export const metadata: Metadata = {
  title: 'Careers | Mynimalistic',
  description: 'Join our team at Mynimalistic. Explore career opportunities and internships in tech innovation.',
};

export default function CareersPage() {
  return (
    <main className="relative min-h-screen">
      <ParallaxSection />
    </main>
  );
}
