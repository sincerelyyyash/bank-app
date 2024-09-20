"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ShimmerButton } from "./ShimmerButton";

export function Hero() {
  return (
    <div className="max-h-screen">
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-7xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Your Gateway to Smart Financial Solutions{" "}
        <Highlight className="text-black dark:text-white">
          Safe, Reliable, and Tailored to You
        </Highlight>
      </motion.h1>
    <ShimmerButton text="Get Started" className="text-lg my-8 py-6 px-10" />
    </HeroHighlight>
    </div>
  );
}