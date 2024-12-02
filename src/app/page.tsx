"use client";
import { useEffect, useState } from "react";
import { AnimatedMLoader } from "@/components/ui/AnimatedMLoader";
import { HomeContent } from "@/components/home-content";
import { FeaturedSection } from "@/components/FeaturedSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { Footer } from "@/components/Menubars/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <AnimatedMLoader />;
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 dark:from-black dark:via-black dark:to-black">
      <HomeContent />
      <FeaturedSection />
      <ServicesSection />
      <ProcessSection />
      <Footer />
    </main>
  );
} 
