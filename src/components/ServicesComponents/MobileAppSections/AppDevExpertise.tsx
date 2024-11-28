"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  ShoppingBag, 
  Building2, 
  Utensils, 
  Users, 
  GraduationCap 
} from 'lucide-react';

export const AppDevExpertise = () => {
  const expertiseAreas = [
    {
      title: "Native Android Apps",
      description: "Custom-built apps with seamless Android integration, optimal performance, and enhanced security features.",
      icon: <Smartphone className="w-10 h-10" />,
      gradient: "from-blue-400/80 to-cyan-300/80",
    },
    {
      title: "E-Commerce Apps",
      description: "Intuitive retail solutions with secure payments, inventory management, and personalized shopping experiences.",
      icon: <ShoppingBag className="w-10 h-10" />,
      gradient: "from-blue-500/80 to-cyan-400/80",
    },
    {
      title: "Business Management Apps",
      description: "Streamline operations with employee management, workflow automation, and real-time analytics.",
      icon: <Building2 className="w-10 h-10" />,
      gradient: "from-blue-600/80 to-cyan-500/80",
    },
    {
      title: "Food Delivery Apps",
      description: "Complete solutions with real-time tracking, menu management, and delivery optimization.",
      icon: <Utensils className="w-10 h-10" />,
      gradient: "from-blue-500/80 to-cyan-400/80",
    },
    {
      title: "Social Networking Apps",
      description: "Build engaging communities with real-time messaging, content sharing, and robust security measures.",
      icon: <Users className="w-10 h-10" />,
      gradient: "from-blue-400/80 to-cyan-300/80",
    },
    {
      title: "Educational Apps",
      description: "Interactive learning experiences with progress tracking, virtual classrooms, and engagement tools.",
      icon: <GraduationCap className="w-10 h-10" />,
      gradient: "from-blue-600/80 to-cyan-500/80",
    }
  ];

  return (
    <section className="relative py-20 ">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" /> */}
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Our Mobile App Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive mobile solutions tailored to your specific industry needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className={`mb-6 p-3 rounded-xl bg-gradient-to-r ${area.gradient} inline-block`}>
                <div className="text-white">
                  {area.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {area.description}
              </p>
              <div 
                className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-blue-500 to-cyan-400"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 