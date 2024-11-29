"use client";
import React, { useState, useEffect } from "react";
import { 
  motion, 
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
  useTransform
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  // { name: "Contact", href: "/contact" },
];

function MovingBorder({
  children,
  duration = 5000,
  rx,
  ry,
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}) {
  const pathRef = React.useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const length = pathRef.current?.getTotalLength() || 0;
      
      if (length) {
        const pxPerMillisecond = length / duration;
        progress.set((elapsed * pxPerMillisecond) % length);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [duration, progress]);

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.2"
          strokeWidth="1"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
          className="text-slate-800 dark:text-white"
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

export function FloatingNavbar() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const currentPath = pathname === "/" ? "Home" : 
      navItems.find(item => item.href === pathname)?.name || "";
    setActiveItem(currentPath);
  }, [pathname]);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[100]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative p-[1px] rounded-2xl overflow-hidden"
      >
        {/* Moving border container */}
        <div className="absolute inset-0">
          <MovingBorder duration={5000} rx="16px" ry="16px">
            <div className="h-14 w-14 opacity-[0.7] bg-[radial-gradient(var(--tw-gradient-stops))] from-blue-500 to-transparent dark:from-sky-500" />
          </MovingBorder>
        </div>

        {/* Content container */}
        <div className="relative rounded-2xl bg-white/80 dark:bg-slate-900/[0.8] border border-slate-200 dark:border-slate-800 backdrop-blur-xl">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.p 
                className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-600 dark:from-sky-400 dark:via-sky-500 dark:to-sky-600"
                whileHover={{ scale: 1.02 }}
              >
                Mynimalistic
              </motion.p>

              <div className="flex items-center gap-4">
                {/* Theme Toggle - Mobile/Tablet Only */}
                <div className="block lg:hidden">
                  <ThemeToggle />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-5">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-300 ${
                        activeItem === item.name 
                          ? 'text-blue-600 dark:text-sky-500 pointer-events-none'
                          : 'text-gray-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-sky-400'
                      }`}
                      onClick={() => setActiveItem(item.name)}
                    >
                      <motion.div
                        whileHover={activeItem !== item.name ? { y: -1 } : {}}
                      >
                        {item.name}
                        {activeItem === item.name && (
                          <motion.div
                            className="absolute inset-0 rounded-lg bg-blue-100/50 dark:bg-sky-400/[0.1]"
                            layoutId="navbar-active"
                            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  ))}

                  {/* Theme Toggle - Desktop Only */}
                  <div className="hidden lg:block">
                    <ThemeToggle />
                  </div>

                  {/* Contact Button */}
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-5 py-2 rounded-lg text-sm font-medium overflow-hidden group ${
                        pathname === '/contact' 
                          ? 'bg-transparent border-2 border-blue-600 dark:border-sky-400 text-blue-600 dark:text-sky-400' 
                          : 'bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 dark:from-sky-400 dark:via-blue-500 dark:to-sky-500 text-white'
                      }`}
                    >
                      <span className="relative flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Contact Us
                      </span>
                    </motion.button>
                  </Link>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden relative p-2.5 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm hover:border-blue-500/50 dark:hover:border-sky-500/50 transition-colors duration-300"
                >
                  {isOpen ? (
                    <X className="w-5 h-5 text-blue-600 dark:text-sky-400" />
                  ) : (
                    <Menu className="w-5 h-5 text-blue-600 dark:text-sky-400" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden border-t border-slate-200 dark:border-slate-800/50"
              >
                <nav className="flex flex-col gap-1 p-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative group px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeItem === item.name
                          ? 'text-blue-600 dark:text-sky-400 bg-blue-50 dark:bg-sky-400/[0.08] pointer-events-none'
                          : 'text-gray-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-blue-50 dark:hover:bg-sky-400/[0.05]'
                      }`}
                      onClick={() => {
                        setActiveItem(item.name);
                        setIsOpen(false);
                      }}
                    >
                      <motion.div
                        whileHover={activeItem !== item.name ? { x: 4 } : {}}
                      >
                        <div className="relative z-10 flex items-center justify-between">
                          <span className="font-medium">{item.name}</span>
                          {activeItem === item.name && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-sky-400"
                            />
                          )}
                        </div>
                        {activeItem === item.name && (
                          <motion.div
                            layoutId="mobile-active-pill"
                            className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-50 to-transparent dark:from-sky-400/10 dark:to-transparent"
                            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  ))}
                  
                  {/* Mobile/Tablet Get Started Button */}
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`relative mt-2 px-4 py-3 rounded-xl text-sm font-medium overflow-hidden group ${
                        pathname === '/contact' 
                          ? 'bg-transparent border-2 border-blue-600 dark:border-sky-400 text-blue-600 dark:text-sky-400' 
                          : 'bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 dark:from-sky-400 dark:via-blue-500 dark:to-sky-500 text-white'
                      }`}
                    >
                      <span className="relative flex items-center justify-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Contact Us
                      </span>
                    </motion.button>
                  </Link>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
} 