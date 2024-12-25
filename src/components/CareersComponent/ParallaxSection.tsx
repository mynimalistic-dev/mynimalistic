"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpotlightButton } from "@/components/ui/spotlight-button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ChevronUp } from "lucide-react";
import Image from "next/image";

const sections = [
  {
    id: 1,
    content: "Step Into Innovation with Mynimalistic",
    description: "Kickstart your career with cutting-edge projects, expert mentorship, and a vibrant team.",
    bgColor: "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 dark:from-black dark:via-blue-950 dark:to-black",
    cta: "Apply Now",
    techLink: "https://forms.gle/zqTaMNWw46z1ViFQ9",
    nonTechLink: "https://forms.gle/YUiEH4rxg2Vek21Q7",
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1732967223/actuallogo_n1chqc.png"
  },
  {
    id: 2,
    content: "Why Intern with Us?",
    description: "Join a team where innovation meets growth.",
    bgColor: "bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 dark:from-blue-950 dark:via-black dark:to-blue-900",
    bullets: [
      "Real-World Projects: Work on live apps using Flutter and Kotlin",
      "Expert Guidance: Learn from industry professionals",
      "Skill Growth: Build an impressive portfolio for your future",
      "Inclusive Culture: A supportive and collaborative work environment",
    ],
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1732967223/actuallogo_n1chqc.png"
  },

  {
    id: 3,
    content: "Your Path to Mynimalistic",
    description: "Simple steps to join our innovative team.",
    bgColor: "bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 dark:from-blue-900 dark:via-black dark:to-blue-950",
    steps: [
      "Fill Out the Form: Share your details via our Google Form",
      "Shortlisting: We'll review and contact you",
      "Interview: Showcase your skills in a quick task and discussion",
      "Join Us: Start contributing to real-world projects",
    ],
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1732967223/actuallogo_n1chqc.png"
  },
  {
    id: 4,
    content: "Open Roles",
    description: "Find your perfect role in tech innovation.",
    bgColor: "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-black dark:via-blue-900 dark:to-slate-900",
    roles: [
      "Frontend Development: React.js, Tailwind CSS, Next.js, TypeScript ",
      "Backend Development: Node.js, MongoDB, PHP, Express.js ",
      "Mobile Development: Flutter, Kotlin, Dart",
      "Design: Figma, Adobe XD, Photoshop,Canva, Adobe Illustrator",
      "Marketing & Content: SEO, Content Strategy",
    ],
    cta: "Apply Now",
    techLink: "https://forms.gle/zqTaMNWw46z1ViFQ9",
    nonTechLink: "https://forms.gle/YUiEH4rxg2Vek21Q7",
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1732967223/actuallogo_n1chqc.png"
  },
];

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const ParallaxSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleImageClick = () => {
    window.open('https://www.mynimalistic.tech', '_blank');
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          className={`h-screen flex flex-col items-center snap-start ${section.bgColor} shadow-xl relative overflow-hidden`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <BackgroundBeams className="opacity-20" />
          <div className="relative z-10 w-full h-full flex flex-col items-center">
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 relative cursor-pointer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={handleImageClick}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={section.image}
                alt={section.content}
                fill
                className="object-contain rounded-full sm:mt-12 mt-12 mb-10"
                priority
              />
            </motion.div>
            
            <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-0">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {section.content}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl text-center mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                {section.description}
              </motion.p>

              {section.bullets && (
                <motion.ul
                  className="space-y-4 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {section.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-center text-blue-100">
                      <span className="mr-2 text-blue-400">•</span>
                      {bullet}
                    </li>
                  ))}
                </motion.ul>
              )}

              {section.roles && (
                <motion.ul
                  className="space-y-4 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {section.roles.map((role, index) => (
                    <li key={index} className="flex items-center text-blue-100">
                      <span className="mr-2 text-blue-400">→</span>
                      {role}
                    </li>
                  ))}
                </motion.ul>
              )}

              {section.steps && (
                <motion.div
                  className="space-y-4 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {section.steps.map((step, index) => (
                    <div key={index} className="flex items-center text-blue-100">
                      <span className="mr-4 flex items-center justify-center w-8 h-8 rounded-full bg-blue-800 text-blue-200">
                        {index + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </motion.div>
              )}

              {section.cta && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex justify-center gap-4"
                >
                  <a
                    href={section.techLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <SpotlightButton className="mt-4" variant="primary">
                      Apply for Tech Roles
                    </SpotlightButton>
                  </a>

                  <a
                    href={section.nonTechLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <SpotlightButton className="mt-4" variant="secondary">
                      Apply for Non-Tech Roles
                    </SpotlightButton>
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-950/80 hover:bg-blue-900/80 border border-blue-800/50 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronUp className="w-6 h-6 text-blue-100" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}; 