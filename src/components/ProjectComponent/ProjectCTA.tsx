"use client";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, Calendar, Rocket, Sparkles, Phone } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function ProjectCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 sm:py-32">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="relative isolate"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-violet-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/50 rounded-[2.5rem]" />
          
          {/* Static grid pattern to prevent hydration issues */}
          <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/30 bg-[size:2rem_2rem]" />
          
          {/* Gradient orb */}
          <div className="absolute -left-20 -top-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-violet-500/20 dark:from-blue-400/10 dark:to-violet-400/10 rounded-full blur-3xl" />
        </div>

        {/* Content Container */}
        <div className="relative rounded-[2rem] p-8 sm:p-12 
                    border border-white/20 dark:border-white/5
                    bg-gradient-to-b from-white/80 to-white/40 dark:from-slate-900/80 dark:to-slate-900/40
                    backdrop-blur-xl
                    shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)]">
          
          {/* Enhanced Rocket Animation */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-16 right-0 sm:right-12"
          >
            <div className="relative w-32 h-32">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse" />
              
              {/* Secondary glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-violet-400/20 rounded-full blur-xl" />
              
              {/* Rocket icon with enhanced styling */}
              <Rocket className="absolute inset-0 m-auto w-12 h-12 text-blue-600 dark:text-blue-400 transform -rotate-45 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              
              {/* Animated trail effect */}
              <motion.div
                animate={{
                  height: ["0%", "70%", "0%"],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-1/3 left-1/2 w-1 -translate-x-1/2 rotate-45
                         bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent 
                         rounded-full"
              />
              
              {/* Particle effects */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-blue-400/80"
                  style={{
                    top: `${60 + i * 10}%`,
                    left: `${45 + i * 5}%`,
                  }}
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 0, 0.5],
                    scale: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="relative flex flex-col items-center text-center space-y-10">
            <div className="space-y-8 max-w-4xl">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                           bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-blue-500/10 
                           border border-blue-200/30 dark:border-blue-700/30
                           hover:border-blue-300 dark:hover:border-blue-600/50
                           transition-all duration-300
                           group cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide
                              bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 
                              bg-clip-text text-transparent
                              group-hover:from-blue-500 group-hover:to-violet-500">
                  Let's Create Something Amazing
                </span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-blue-500 dark:text-blue-400"
                >
                  ✨
                </motion.div>
              </div>

              {/* Primary Question - Slightly reduced size */}
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="inline-block bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 dark:from-blue-400 dark:via-violet-400 dark:to-blue-400 bg-clip-text text-transparent pb-2">
                  Have a project in mind?
                </span>
              </h2>

              {/* Secondary Text - Reduced size */}
              <div className="text-2xl sm:text-3xl font-semibold">
                <span className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 dark:from-slate-200 dark:via-slate-300 dark:to-slate-200 bg-clip-text text-transparent">
                  Let's discuss how we can bring it to life!
                </span>
              </div>

              {/* Description - Reduced size */}
              <p className="text-lg sm:text-xl text-slate-600/90 dark:text-slate-400/90 max-w-2xl mx-auto leading-relaxed font-medium">
                From concept to launch, we craft exceptional digital experiences 
                that captivate users and drive results.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-xl mx-auto w-full pt-8">
              {/* Primary Button */}
              <Link href="/contact" className="group flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden w-full h-14 rounded-2xl 
                           bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600
                           bg-[length:200%_100%] bg-right-bottom
                           hover:bg-left-bottom transition-[background-position] duration-500
                           text-white
                           flex items-center justify-center
                           shadow-[0_8px_30px_rgb(59,130,246,0.2)]
                           border border-white/10"
                >
                  <div className="relative flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span className="text-base font-semibold">Contact Us</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </Link>

              {/* Secondary Button */}
              <a 
                href="tel:+91 8729806726"
                className="group flex-1"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden w-full h-14 rounded-2xl
                           bg-white dark:bg-white/5
                           text-slate-800 dark:text-slate-200
                           flex items-center justify-center
                           border border-slate-200 dark:border-white/5
                           hover:border-blue-500 dark:hover:border-blue-400/50
                           shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                           dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]
                           transition-all duration-300"
                >
                  <div className="relative flex items-center gap-3">
                    <div className="relative">
                      {/* Repositioned and restyled dot */}
                      <span className="absolute -top-1 -right-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500/60"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 ring-1 ring-white dark:ring-slate-900"></span>
                      </span>
                      <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                      Call Now
                    </span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 text-blue-600 dark:text-blue-400" />
                  </div>
                </motion.div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 