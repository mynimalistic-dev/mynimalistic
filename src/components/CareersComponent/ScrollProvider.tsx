"use client";
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const ScrollProvider: React.FC = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
}; 