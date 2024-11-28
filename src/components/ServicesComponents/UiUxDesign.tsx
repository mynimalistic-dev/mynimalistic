"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SparklesCore } from '../ui/sparkles';
import { AnimatedText } from '../ui/animated-text';
import { 
  Palette, 
  Target, 
  Smartphone, 
  Globe, 
  LayoutGrid, 
  Zap, 
  Search, 
  Network, 
  Sparkles 
} from 'lucide-react';

export const UiUxDesign = () => {
  const expertise = [
    {
      title: "User Interface Design",
      description: "Creating visually stunning and intuitive interfaces that captivate users while ensuring seamless navigation and interaction.",
      icon: Palette,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "User Experience Design",
      description: "Crafting meaningful user journeys and immersive, seamless experiences that delight users and achieve key business objectives.",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mobile App Design",
      description: "Designing responsive and engaging mobile applications with a focus on touch interactions and mobile-first experiences.",
      icon: Smartphone,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Web Design",
      description: "Creating modern, responsive websites that work flawlessly across all devices and screen sizes.",
      icon: Globe,
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      title: "Design Systems",
      description: "Building scalable design systems and component libraries that ensure consistency across all digital products.",
      icon: LayoutGrid,
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "Interactive Prototypes",
      description: "Developing high-fidelity prototypes that accurately simulate the final product experience.",
      icon: Zap,
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Usability Testing",
      description: "Conducting thorough user testing to validate design decisions and identify areas for improvement.",
      icon: Search,
      gradient: "from-sky-500 to-blue-500",
    },
    {
      title: "Information Architecture",
      description: "Organizing and structuring content in a way that makes it easy for users to find what they need.",
      icon: Network,
      gradient: "from-teal-500 to-green-500",
    },
    {
      title: "Motion Design",
      description: "Creating smooth animations and transitions that enhance the user experience and provide visual feedback.",
      icon: Sparkles,
      gradient: "from-fuchsia-500 to-purple-500",
    }
  ];

  const tools = [
    "Figma",
    "Adobe XD",
    "Sketch",
    "InVision",
    "Principle",
    "Zeplin",
    "Adobe Creative Suite",
    "Maze"
  ];

  const benefits = [
    {
      title: "User-Centered Approach",
      description: "We put your users first, creating interfaces that are intuitive and enjoyable to use."
    },
    {
      title: "Modern Design Principles",
      description: "We stay current with the latest design trends and best practices while maintaining timeless usability."
    },
    {
      title: "Conversion-Focused",
      description: "Our designs are crafted to drive user engagement and achieve your business objectives."
    },
    {
      title: "Collaborative Process",
      description: "We work closely with stakeholders to ensure designs align with your vision and goals."
    }
  ];

  return (
    <div className="space-y-24">
      <section className="relative">
        <div className="absolute inset-0">
          <SparklesCore
            id="uiuxSparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={70}
            className="w-full h-full"
            particleColor="#60A5FA"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-6">
              UI/UX Design
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8" />
  
            <p className="text-blue-200/80 text-xl leading-relaxed max-w-3xl mx-auto">
       We design clean, intuitive, and engaging user interfaces that enhance satisfaction and retention. Our minimalist approach ensures visually appealing and user-friendly designs.
            </p>
          </motion.div>
        </div>
      </section>
       <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-cyan-300 mb-6">Design Tools We Use</h3>
          <p className="text-blue-200/80 text-lg max-w-3xl mx-auto">
            We leverage industry-standard tools to create exceptional designs.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-blue-900/30 rounded-full border border-blue-700/30 text-blue-200"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-cyan-300 mb-6">Our UI/UX Expertise</h3>
          <p className="text-blue-200/80 text-lg max-w-3xl mx-auto">
            We offer comprehensive UI/UX design services to create exceptional digital experiences.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative overflow-hidden rounded-2xl bg-black/40 p-1">
                {/* Gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                
                {/* Content container */}
                <div className="relative bg-gray-900/80 backdrop-blur-xl p-6 rounded-xl h-full">
                  {/* Icon with gradient background */}
                  <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-r ${item.gradient} p-3`}>
                    {React.createElement(item.icon, {
                      className: "w-6 h-6 text-white",
                      strokeWidth: 2
                    })}
                  </div>
                  
                  {/* Title with gradient text */}
                  <h4 className={`text-xl font-semibold mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-blue-200/70 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

     

    
    </div>
  );
}; 