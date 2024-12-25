"use client";
import { useEffect, useState } from "react";
import { AnimatedMLoader } from "@/components/ui/AnimatedMLoader";
import React from 'react'
import HeroSection from '@/components/aboutComponent/HeroSection'
import WelcomeSection from '@/components/aboutComponent/WelcomeSection'
import WhyChooseUs from '@/components/aboutComponent/WhyChooseUs'
import OurApproach from '@/components/aboutComponent/OurApproach'
import Expertise from '@/components/aboutComponent/Expertise'
import { FloatingNavbar } from '@/components/Menubars/floating-navbar'
import OurTeam from '@/components/aboutComponent/OurTeam'
import { Footer } from '@/components/Menubars/Footer'
import { metadata } from './pageMetadata'

function AboutPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <AnimatedMLoader />;
  }

  const expertiseItems = [
    { 
      category: 'Web Development', 
      technology: 'React, Vue.js, Next.js, PHP',
      description: 'Building scalable and modern web applications with cutting-edge technologies'
    },
    { 
      category: 'Mobile Development', 
      technology: 'Flutter, Kotlin',
      description: 'Creating cross-platform mobile solutions that deliver exceptional user experiences'
    },
    { 
      category: 'DevOps', 
      technology: 'Docker, Kubernetes, Terraform',
      description: 'Implementing robust infrastructure and deployment solutions'
    },
  ];

  const approachItems = [
    {
      title: 'Minimalist Design',
      content: 'Striking the perfect balance between aesthetics and functionality, we create clean, easy-to-navigate interfaces that enhance user experience.'
    },
    {
      title: 'Client-Centered Development',
      content: 'Each project begins with understanding your goals and vision. We work closely with you at every stage, from planning to launch, to ensure your satisfaction.'
    },
    {
      title: 'Continuous Improvement',
      content: 'The digital landscape is always evolving, and so are we. We stay up-to-date with the latest tools and best practices to deliver high-quality, modern solutions.'
    },
  ];

  const whyChooseUsContent = {
    title: "Why Choose Us?",
    description: "Choosing Mynimalistic means choosing a partner committed to quality, transparency, and your success.",
    features: [
      {
        title: "Quality Focused",
        description: "We deliver excellence in every project, ensuring the highest standards"
      },
      {
        title: "Innovative Solutions",
        description: "Leveraging cutting-edge technologies for modern challenges"
      },
      {
        title: "Client Success",
        description: "Your growth and satisfaction are our top priorities"
      }
    ]
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 dark:from-black dark:via-black dark:to-black">
      <FloatingNavbar/>
      
      {/* Hero Section - Full height */}
      <section className="relative min-h-screen">
        <HeroSection 
          title="About Mynimalistic" 
          subtitle="Where simplicity meets innovation in digital development"
        />
      </section>
      
      {/* Welcome Section - No negative margin */}
      <section className="relative z-10">
        <WelcomeSection 
          title="Welcome to Mynimalistic"
          content="We are a passionate team of web and app developers who believe that technology should make life easier and more enjoyable. Specializing in user-friendly, minimalist designs, we create digital products that not only look great but are also intuitive and impactful."
        />
      </section>
      
      {/* Why Choose Us Section */}
      <section className="relative">
        <WhyChooseUs 
          title={whyChooseUsContent.title}
          content={whyChooseUsContent.description}
          features={whyChooseUsContent.features}
        />
      </section>
      
      {/* Our Approach Section */}
      <section className="relative">
        <OurApproach 
          title="Our Approach"
          content={approachItems}
        />
      </section>
      
      {/* Our Team Section */}
      <section className="relative">
        <OurTeam />
      </section>
      
      {/* Expertise Section */}
      {/* <section className="relative">
        <Expertise expertiseItems={expertiseItems} />
      </section> */}
      <Footer/>
    </main>
  )
}

export default AboutPage
