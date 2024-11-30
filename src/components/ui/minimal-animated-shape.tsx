"use client";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import { FaReact, FaNode } from "react-icons/fa";
import { TbBrandNextjs, TbBrandMongodb } from "react-icons/tb";
import { SiFlutter, SiJavascript, SiTypescript } from "react-icons/si";
// import { SiTailwindcss } from "react-icons/si";


export const MinimalAnimatedShape = () => {
  const techIcons = [
    { Icon: FaReact, color: "#61DAFB", name: "React" },
    { Icon: TbBrandNextjs, color: "#ffffff", name: "Next.js" },
    { Icon: SiFlutter, color: "#02569B", name: "Flutter" },
    { Icon: FaNode, color: "#339933", name: "Node.js" },
    { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
    { Icon: TbBrandMongodb, color: "#47A248", name: "MongoDB" },
    { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  ];

  const codeElements = useMemo(() => {
    return [...Array(15)].map((_, i) => {
      const angle = (i / 15) * Math.PI * 2;
      const radius = 160;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      return {
        x,
        y,
        iconIndex: i % techIcons.length,
        offsetRadius: Math.random() * 40 + 20,
        speed: Math.random() * 2 + 3,
      };
    });
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Floating Circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[200px] h-[200px] rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(29,78,216,${0.25 - i * 0.03}) 0%, rgba(30,64,175,${0.15 - i * 0.02}) 100%)`,
            filter: "blur(1px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
           
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Animated Grid */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-blue-800/40 to-transparent dark:via-blue-400/30"
              style={{ top: `${(i + 1) * 5}%` }}
              animate={{
                opacity: [0, 0.5, 0],
                scaleX: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Tech Icons with better visibility */}
      <div className="absolute inset-0 flex items-center justify-center">
        {codeElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: element.x,
              y: element.y,
              scale: 0.8,
            }}
            animate={{
              x: [
                element.x,
                element.x + Math.cos(i) * element.offsetRadius,
                element.x
              ],
              y: [
                element.y,
                element.y + Math.sin(i) * element.offsetRadius,
                element.y
              ],
              scale: [0.8, 1.1, 0.8],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: element.speed,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="group relative">
              {/* Icon */}
              <div className="relative text-4xl transform-gpu">
                {React.createElement(techIcons[element.iconIndex].Icon, {
                  style: { 
                    color: techIcons[element.iconIndex].color,
                  },
                  className: `
                    opacity-100
                    hover:scale-125 
                    transition-all 
                    duration-300 
                    p-2
                  `
                })}
              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {techIcons[element.iconIndex].name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Central Geometric Shape */}
      <motion.div
        className="relative z-10 w-[300px] h-[300px]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-2 border-blue-800/40 dark:border-blue-400/30 rounded-lg"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              delay: i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transform: `rotate(${i * 60}deg)`,
            }}
          />
        ))}
      </motion.div>

      {/* Particle Effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-800/50 dark:bg-blue-400/40 rounded-full"
          initial={{
            x: 0,
            y: 0,
            scale: 0,
          }}
          animate={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Additional Depth Layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/10 via-transparent to-blue-900/10 dark:from-blue-400/10 dark:via-transparent dark:to-blue-500/10 rounded-3xl" />
    </div>
  );
}; 