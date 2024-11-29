import { ContactHero } from "@/components/contactComponent/ContactHero";
import { ContactForm } from "@/components/contactComponent/ContactForm";
import { ContactInfo } from "@/components/contactComponent/ContactInfo";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingNavbar } from "@/components/Menubars/floating-navbar";
import { Footer } from "@/components/Menubars/Footer";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full bg-slate-50 dark:bg-slate-950">
        <FloatingNavbar/>
      {/* Background Effects */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full opacity-20" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <ContactHero />
        
        {/* Contact Content */}
        <section className="container mx-auto px-4 py-20">
          <ContactInfo />
          <div className="mt-24 max-w-4xl mx-auto">
            {/* <ContactForm /> */}
          </div>
        </section>
      </div>
   <Footer/>
    </main>
  );
}
