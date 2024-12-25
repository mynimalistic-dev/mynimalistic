'use client'
import { useEffect, useState } from "react";
import { AnimatedMLoader } from "@/components/ui/AnimatedMLoader";
import React from 'react'
import ServicesHero from '@/components/ServicesComponents/ServicesHero'
import { FloatingNavbar } from '@/components/Menubars/floating-navbar'
import { WebDevelopment } from '@/components/ServicesComponents/WebDevelopment'
import { MobileAppDev } from '@/components/ServicesComponents/MobileAppDev'
import { UiUxDesign } from '@/components/ServicesComponents/UiUxDesign'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code2, 
  Smartphone, 
  Palette,
} from 'lucide-react'
import { Footer } from '@/components/Menubars/Footer'

function ServicePage() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <AnimatedMLoader />;
  }

  const services = [
    {
      id: 'web',
      title: 'Web Development',
      icon: Code2,
      description: 'Create stunning, responsive websites with modern technologies',
      component: WebDevelopment,
      iconStyles: 'rotate-3'
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      icon: Smartphone,
      description: 'Build powerful native and cross-platform mobile applications',
      component: MobileAppDev
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Design beautiful, intuitive interfaces that users love',
      component: UiUxDesign
    }
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <FloatingNavbar />
      <ServicesHero />
      
      {/* Our Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600 text-transparent bg-clip-text mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Transform your digital presence with our comprehensive suite of services
          </motion.p>
        </div>

        {/* Service Selection Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                onClick={() => setActiveTab(activeTab === service.id ? null : service.id)}
                className={`
                  group relative w-full overflow-hidden rounded-3xl
                  p-8 h-[280px] text-left
                  border transition-all duration-500
                  ${activeTab === service.id 
                    ? 'bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-600/20 dark:to-purple-600/20 border-blue-300 dark:border-blue-500/50' 
                    : 'bg-gray-100/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:bg-gray-200/50 dark:hover:bg-gray-800/50'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6">
                    {React.createElement(service.icon, { 
                      className: `w-12 h-12 ${
                        activeTab === service.id 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                      } transition-colors duration-300 ${service.iconStyles || ''}`,
                      strokeWidth: 1.5 
                    })}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className={`
                    text-sm font-medium transition-all duration-300 flex items-center gap-2
                    ${activeTab === service.id 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                    }
                  `}>
                    {activeTab === service.id ? 'Click to hide details ↑' : 'Explore more →'}
                  </div>
                </div>
                
                {/* Animated background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-purple-200/10 dark:from-blue-600/10 dark:to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-purple-200/10 dark:from-blue-400/10 dark:to-purple-400/10 blur-3xl group-hover:opacity-70 transition-opacity duration-500 opacity-0" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Content Area with Animation */}
        <AnimatePresence mode="wait">
          {activeTab && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              {services.find(s => s.id === activeTab)?.component && (
                <div className="bg-gradient-to-br from-gray-100/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800">
                  {React.createElement(services.find(s => s.id === activeTab)!.component)}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer/>
    </main>
  )
}

export default ServicePage
