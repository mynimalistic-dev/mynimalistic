"use client";
import React, { useEffect, useRef, useState } from "react";

interface ScrollProviderProps {
  children: React.ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let scroll: any;
    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        scroll = new LocomotiveScroll({
          el: scrollRef.current!,
          smooth: true,
          multiplier: 1,
          lerp: 0.1,
          tablet: {
            smooth: true,
            breakpoint: 768,
          },
          smartphone: {
            smooth: true,
          },
        });
      } catch (error) {
        console.error('Failed to initialize Locomotive Scroll:', error);
      }
    };

    initScroll();

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, [isClient]);

  return (
    <div ref={scrollRef} className="relative w-full h-full">
      {children}
    </div>
  );
}; 