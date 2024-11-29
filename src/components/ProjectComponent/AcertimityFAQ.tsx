"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide app development, web development, customization, and user-centric design, specializing in Flutter and Kotlin.",
  },
  {
    question: "How long does a project take?",
    answer: `
      Timelines vary by complexity:
      - Discovery: 1-2 weeks
      - Design: 2-3 weeks
      - Development: 4-8 weeks
      - Testing & Deployment: 2-3 weeks
    `,
  },
  {
    question: "What will I receive after the project?",
    answer: "You’ll get prototypes, source code, deployment on app stores, documentation, and optional post-launch support.",
  },
  {
    question: "Do you handle app store submission?",
    answer: "Yes, we manage submissions to the Apple App Store and Google Play Store.",
  },
  {
    question: "What is your payment structure?",
    answer: "Payments are milestone-based: an initial deposit, mid-phase approval, and final delivery.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer maintenance, updates, and monitoring services.",
  },
  {
    question: "Will I own the source code?",
    answer: "Absolutely. You’ll have full ownership upon project completion.",
  },
];

export function AcertimityFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Got Questions? We've Got Answers
      </motion.h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-300 dark:border-gray-700 pb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <button
              className="w-full text-left text-xl font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <motion.div
                className="mt-3 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer.split('\n').map((line, i) => (
                  <p key={i} className="mb-2">{line}</p>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 