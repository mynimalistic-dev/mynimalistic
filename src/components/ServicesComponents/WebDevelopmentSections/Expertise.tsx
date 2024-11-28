import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Building2, 
  GraduationCap, 
  CalendarRange,
  ChefHat,
  ScrollText,
  Code2,
  Blocks,
  Rocket,
  Laptop,
  Globe,
  LineChart
} from 'lucide-react';
import { Card3D } from '../../ui/card-3d';

export const Expertise = () => {
  const expertiseAreas = [
    {
      title: "E-Commerce",
      description: "Secure payment gateways, inventory management, and optimized checkout experiences",
      icon: ShoppingCart,
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      title: "Business Solutions",
      description: "Custom CMS, analytics integration, and professional corporate websites",
      icon: Building2,
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      title: "Educational Platforms",
      description: "Learning management systems with interactive content and progress tracking",
      icon: GraduationCap,
      gradient: "from-orange-500 to-red-500",
      delay: 0.3
    },
    {
      title: "Event Management",
      description: "Registration systems, ticket booking, and event scheduling platforms",
      icon: CalendarRange,
      gradient: "from-green-500 to-emerald-500",
      delay: 0.4
    },
    {
      title: "Restaurant Solutions",
      description: "Digital menus, order management, and table reservation systems",
      icon: ChefHat,
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.5
    },
    {
      title: "Content Platforms",
      description: "Blog systems, CMS integration, and content delivery platforms",
      icon: ScrollText,
      gradient: "from-pink-500 to-rose-500",
      delay: 0.6
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 mb-16"
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
          Our Web Development Expertise
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Delivering specialized web solutions across various industries
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: area.delay }}
            className="group relative overflow-hidden"
          >
            <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 shadow-sm">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${area.gradient} p-2.5 mb-4`}>
                <area.icon className="w-full h-full text-white" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {area.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {area.description}
              </p>

              <motion.div 
                className={`absolute bottom-0 left-[5%] right-[5%] h-[2px] bg-gradient-to-r ${area.gradient}`}
                initial={{ opacity: 0, width: "0%", x: "-50%" }}
                whileHover={{ opacity: 1, width: "90%", x: "0%" }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeInOut",
                  width: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }
                }}
                style={{
                  borderRadius: "1px",
                  boxShadow: `0 0 10px var(--tw-gradient-from)`
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 