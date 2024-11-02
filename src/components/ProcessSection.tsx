"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Lightbulb, 
  Palette, 
  Code2, 
  TestTube2, 
  Rocket,
} from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    title: "Discover & Plan",
    description: "We dive into your vision to create a clear roadmap, ensuring every detail aligns with your goals.",
    icon: Lightbulb,
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#4ECDC4]"
  },
  {
    title: "Design with Purpose",
    description: "Crafting sleek, intuitive designs that make your brand shine and your users happy.",
    icon: Palette,
    gradient: "from-[#A66CFF] to-[#9C27B0]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#A66CFF]"
  },
  {
    title: "Develop & Integrate",
    description: "Building fast, scalable solutions with all the features you need, seamlessly integrated.",
    icon: Code2,
    gradient: "from-[#FFB84C] to-[#FF6B6B]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#FFB84C]"
  },
  {
    title: "Test & Refine",
    description: "Rigorous testing ensures everything runs smoothly, delivering a flawless experience.",
    icon: TestTube2,
    gradient: "from-[#4ECDC4] to-[#2ECC71]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#2ECC71]"
  },
  {
    title: "Launch & Support",
    description: "From launch to growth, we're here to keep your app or website running at its best.",
    icon: Rocket,
    gradient: "from-[#FF6B6B] to-[#FFB84C]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#FF6B6B]"
  }
];

const TimelineStep = ({ step, index, total }: { 
  step: typeof processSteps[0], 
  index: number,
  total: number 
}) => {
  const isLast = index === total - 1;
  const Icon = step.icon;
  
  return (
    <div className="relative group">
      {/* Desktop Connection Line */}
      {!isLast && (
        <div className="hidden md:block absolute top-[2.5rem] left-[50%] w-full h-[3px] bg-muted/30">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={cn(
              "origin-left h-full bg-gradient-to-r",
              step.gradient,
              "shadow-[0_0_10px_0px_rgba(255,255,255,0.3)]"
            )}
          />
        </div>
      )}

      {/* Mobile Connection Line */}
      {!isLast && (
        <div className="md:hidden absolute left-[2.5rem] top-[50%] h-full w-[3px] bg-muted/30">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={cn(
              "origin-top h-full w-full bg-gradient-to-b",
              step.gradient,
              "shadow-[0_0_10px_0px_rgba(255,255,255,0.3)]"
            )}
          />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="relative md:text-center flex md:flex-col items-start md:items-center gap-4 md:gap-2 p-4"
      >
        {/* Timeline Node */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={cn(
            "w-20 h-20 rounded-full",
            "flex items-center justify-center",
            "bg-background dark:bg-background/80",
            "backdrop-blur-sm",
            "border-2",
            "border-gray-200 dark:border-muted",
            "transition-all duration-500",
            "group-hover:border-transparent",
            "relative overflow-hidden",
            "shadow-sm",
            step.bgGlow
          )}
        >
          {/* Gradient Background on Hover */}
          <div
            className={cn(
              "absolute inset-0",
              "opacity-0 group-hover:opacity-100",
              "transition-opacity duration-500",
              "bg-gradient-to-r",
              step.gradient
            )}
          />

          {/* Icon Container */}
          <div className="relative z-10">
            <Icon 
              className={cn(
                "w-8 h-8",
                "transition-all duration-500",
                "stroke-foreground dark:stroke-foreground",
                "group-hover:stroke-background dark:group-hover:stroke-background",
                "stroke-[2.5px]"
              )} 
            />
          </div>

          {/* Subtle Glow Effect */}
          <div className={cn(
            "absolute inset-0",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-500",
            "bg-gradient-to-r",
            step.gradient,
            "blur-2xl -z-10"
          )} />
        </motion.div>

        {/* Content */}
        <div className="flex-1 md:mt-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mb-2 md:justify-center"
          >
            {/* Step Number with Gradient */}
            <div className={cn(
              "px-3 py-1 rounded-full text-sm font-medium",
              "bg-gradient-to-r",
              step.gradient,
              "text-white dark:text-white"
            )}>
              Step {index + 1}
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </motion.div>

          {/* Title with hover effect */}
          <h3 className={cn(
            "text-xl font-semibold mb-2",
            "transition-colors duration-300",
            "group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent",
            step.gradient
          )}>
            {step.title}
          </h3>

          {/* Description */}
          <p className={cn(
            "text-muted-foreground text-sm md:max-w-[250px]",
            "transition-colors duration-300",
            "group-hover:text-foreground/80 dark:group-hover:text-foreground/80"
          )}>
            {step.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  return (
    <section ref={containerRef} className="py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0, 1], [0.8, 1.2]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]),
          }}
          className="w-[40rem] h-[40rem] bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-sky-50/80 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800 backdrop-blur-sm shadow-lg"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 dark:bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-600 dark:bg-sky-500"></span>
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-sky-700 to-sky-900 dark:from-sky-400 dark:to-sky-300 bg-clip-text text-transparent">
              PROCESS & METHODOLOGY
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white bg-clip-text">
              Our Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A streamlined approach to bringing your digital vision to life
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-20">
          {/* Desktop Timeline */}
          <div className="hidden md:grid grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <TimelineStep 
                key={index} 
                step={step} 
                index={index}
                total={processSteps.length}
              />
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {processSteps.map((step, index) => (
              <TimelineStep 
                key={index} 
                step={step} 
                index={index}
                total={processSteps.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 