"use client";
import { useEffect, useState } from "react";
import { AnimatedMLoader } from "@/components/ui/AnimatedMLoader";
import { ContactHero } from "@/components/contactComponent/ContactHero";
import { ContactInfo } from "@/components/contactComponent/ContactInfo";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingNavbar } from "@/components/Menubars/floating-navbar";
import { Footer } from "@/components/Menubars/Footer";
import ContactForm from "@/components/contactComponent/ContactForm";

export default function ContactPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <AnimatedMLoader />;
  }

  return (
    <main className="relative min-h-screen w-full bg-slate-50 dark:bg-slate-950">
      <FloatingNavbar />
      {/* Background Effects */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full opacity-20" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <ContactHero />
        
        {/* Contact Content */}
        <section className="container mx-auto px-4 py-20">
          <div className="lg:mb-32 mb-16 max-w-4xl mx-auto">
<ContactForm />          </div>
<ContactInfo />

        </section>
      </div>
      <Footer />
    </main>
  );
}
