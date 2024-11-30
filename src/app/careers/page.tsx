"use client";
import React from "react";
import { ParallaxSection } from "@/components/CareersComponent/ParallaxSection";
import { ScrollProvider } from "@/components/CareersComponent/ScrollProvider";

const CareersPage = () => {
  return (
    <ScrollProvider>
      <ParallaxSection />
    </ScrollProvider>
  );
};

export default CareersPage;
