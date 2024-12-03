"use client";
import { AnimatedText } from "@/components/ui/animated-text";
import { SpotlightButton } from "@/components/ui/spotlight-button";

export const ContactHero = () => {
  return (
    <div className="min-h-[95vh] flex flex-col items-center justify-center px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className=" md:hidden mx-auto flex flex-col gap-2 justify-center text-center w-full">
          <AnimatedText
            text="Let's Build"
            className="text-[3.8rem] xs:text-[4rem] sm:text-[4.5rem] font-bold leading-[1.1] text-center"
          />
          <AnimatedText
            text="Something"
            className="text-[3.8rem] xs:text-[4rem] sm:text-[4.5rem] font-bold leading-[1.1] text-center"
          />
          <AnimatedText
            text="Great"
            className="text-[3.8rem] xs:text-[4rem] sm:text-[4.5rem] font-bold leading-[1.1] text-center"
          />
        </div>

        <div className="hidden md:flex w-full  justify-center">
          <AnimatedText
            text="Let's Build Something Great"
            className="text-6xl lg:text-7xl font-bold text-center"
          />
        </div>
        
        <p className="mt-8 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-center">
          Ready to transform your ideas into reality? Get in touch with our team 
          and let's create something extraordinary together.
        </p>
        
        <div className="mt-12">
              <a 
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
          <SpotlightButton>
      
              Start Your Project
          </SpotlightButton>
                      </a>

        </div>
      </div>
    </div>
  );
}; 