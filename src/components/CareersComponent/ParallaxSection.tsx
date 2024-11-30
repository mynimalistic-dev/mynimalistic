"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpotlightButton } from "@/components/ui/spotlight-button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ChevronUp } from "lucide-react";

const sections = [
  {
    id: 1,
    content: "Step Into Innovation with Mynimalistic",
    description: "Kickstart your career with cutting-edge projects, expert mentorship, and a vibrant team.",
    bgColor: "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 dark:from-black dark:via-blue-950 dark:to-black",
    cta: "Apply Now",
    link: "https://forms.gle/your-google-form-link",
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
  },
  {
    id: 3,
    content: "Open Roles",
    description: "Find your perfect role in tech innovation.",
    bgColor: "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-black dark:via-blue-900 dark:to-slate-900",
    roles: [
      "Frontend Development: React.js, Tailwind CSS",
      "Backend Development: Node.js, Databases",
      "Mobile Development: Flutter, Kotlin",
      "UI/UX Design: Figma, Adobe XD",
      "Marketing & Content: SEO, Content Strategy",
    ],
    cta: "Apply Now",
    link: "https://forms.gle/your-google-form-link",
  },
  {
    id: 4,
    content: "Your Path to Mynimalistic",
    description: "Simple steps to join our innovative team.",
    bgColor: "bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 dark:from-blue-900 dark:via-black dark:to-blue-950",
    steps: [
      "Fill Out the Form: Share your details via our Google Form",
      "Shortlisting: We'll review and contact you",
      "Interview: Showcase your skills in a quick task and discussion",
      "Join Us: Start contributing to real-world projects",
    ],
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

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          className={`h-screen flex flex-col items-center justify-center snap-start ${section.bgColor} shadow-xl relative overflow-hidden`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <BackgroundBeams className="opacity-20" />
          <div className="relative z-10 px-4 md:px-0">
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
                className="flex justify-center"
              >
                <SpotlightButton className="mt-4" variant="primary">
                  <a
                    href={section.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    {section.cta}
                  </a>
                </SpotlightButton>
              </motion.div>
            )}
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