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

const navItems = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#" },
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
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
          stroke="white"
          strokeOpacity="0.2"
          strokeWidth="1"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
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
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [isOpen, setIsOpen] = useState(false);

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
            <div className="h-14 w-14 opacity-[0.7] bg-[radial-gradient(var(--tw-gradient-stops))] from-sky-500 to-transparent" />
          </MovingBorder>
        </div>

        {/* Content container */}
        <div className="relative rounded-2xl bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl">
          <div className="px-6 py-4">
            {/* Rest of the navbar content remains the same */}
            <div className="flex items-center justify-between">
              <motion.p 
                className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600"
                whileHover={{ scale: 1.02 }}
              >
                Mynimalistic
              </motion.p>

              <nav className="hidden md:flex items-center gap-5">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveItem(item.name)}
                    className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-300 ${
                      activeItem === item.name 
                        ? 'text-sky-500' 
                        : 'text-neutral-400 hover:text-sky-400'
                    }`}
                    whileHover={{ y: -1 }}
                  >
                    {item.name}
                    {activeItem === item.name && (
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-sky-400/[0.1]"
                        layoutId="navbar-active"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </motion.a>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-5 py-2 rounded-lg text-white text-sm font-medium bg-gradient-to-r from-sky-400 to-sky-600 shadow-[0_2px_20px_rgba(56,189,248,0.2)] hover:shadow-[0_2px_24px_rgba(56,189,248,0.3)] transition-shadow"
                >
                  Get Started
                </motion.button>
              </nav>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm hover:border-sky-500/50 transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-sky-400" />
                ) : (
                  <Menu className="w-5 h-5 text-sky-400" />
                )}
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden border-t border-slate-800/50"
              >
                <nav className="flex flex-col gap-1 p-4">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`relative group px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeItem === item.name
                          ? 'text-sky-400 bg-sky-400/[0.08]'
                          : 'text-neutral-300 hover:text-sky-400 hover:bg-sky-400/[0.05]'
                      }`}
                      onClick={() => {
                        setActiveItem(item.name);
                        setIsOpen(false);
                      }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="font-medium">{item.name}</span>
                        {activeItem === item.name && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="h-1.5 w-1.5 rounded-full bg-sky-400"
                          />
                        )}
                      </div>
                      {activeItem === item.name && (
                        <motion.div
                          layoutId="mobile-active-pill"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/10 to-transparent"
                          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                        />
                      )}
                    </motion.a>
                  ))}
                  
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="relative mt-2 px-4 py-3 rounded-xl text-white text-sm font-medium overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,166,255,0.1),transparent_50%)]" />
                    <span className="relative flex items-center justify-center gap-2">
                      Get Started
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </motion.svg>
                    </span>
                  </motion.button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
} 