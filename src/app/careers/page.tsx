"use client";
import { useEffect, useState } from "react";
import { AnimatedMLoader } from "@/components/ui/AnimatedMLoader";
import { ParallaxSection } from '@/components/CareersComponent/ParallaxSection';

export default function CareersPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <AnimatedMLoader />;
  }

  return (
    <main className="relative min-h-screen">
      <ParallaxSection />
    </main>
  );
}
