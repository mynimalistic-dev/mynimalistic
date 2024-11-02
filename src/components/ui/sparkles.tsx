"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
  className,
  speed = 1,
  particleSize = 1,
}: {
  id: string;
  background: string;
  minSize: number;
  maxSize: number;
  particleDensity: number;
  particleColor: string;
  className?: string;
  speed?: number;
  particleSize?: number;
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  if (!init) return null;

  return (
    <div className={className}>
      <Particles
        id={id}
        className="w-full h-full"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: background,
          },
          particles: {
            number: {
              value: particleDensity,
              density: {
                enable: true,
              },
            },
            color: {
              value: particleColor,
            },
            size: {
              value: { min: minSize * particleSize, max: maxSize * particleSize },
            },
            move: {
              enable: true,
              direction: "none",
              random: true,
              speed: speed,
              straight: false,
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
            },
            links: {
              enable: true,
              distance: 150,
              color: particleColor,
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1,
                },
              },
            },
          },
        }}
      />
    </div>
  );
}; 