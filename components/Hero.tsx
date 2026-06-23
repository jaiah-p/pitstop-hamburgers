"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/site";
import { ArrowDown } from "./icons";
import BurgerSVG from "./BurgerSVG";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const burgerY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const burgerScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-red-deep text-cream"
    >
      {/* sunburst */}
      <div
        aria-hidden
        className="animate-spin-slow absolute left-1/2 top-1/2 h-[160vmax] w-[160vmax] -translate-x-1/2 -translate-y-1/2 opacity-[0.13]"
        style={{
          background:
            "repeating-conic-gradient(from 0deg, #f6ecd6 0deg 6deg, transparent 6deg 12deg)",
        }}
      />
      {/* halftone vignette */}
      <div
        aria-hidden
        className="halftone pointer-events-none absolute inset-0 text-red-dark opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(124,11,20,0.85) 100%)",
        }}
      />

      <motion.div
        style={{ y: titleY, opacity: fade }}
        className="relative z-10 flex flex-col items-center px-4 text-center"
      >
        <span className="eyebrow mb-4 inline-block rounded-full border border-cream/40 px-4 py-1 text-cream/90">
          Thora · NSW · Est. in the valley
        </span>

        <h1 className="headline text-[17vw] leading-[0.8] sm:text-[14vw] lg:text-[10rem]">
          <span className="block">Pitstop</span>
          <span className="block text-mustard">Hamburgers</span>
        </h1>

        <p className="script mt-3 text-2xl text-cream/90 sm:text-3xl">
          {SITE.tagline}
        </p>
      </motion.div>

      {/* floating burger */}
      <motion.div
        style={{ y: burgerY, scale: burgerScale }}
        className="pointer-events-none relative z-0 -mt-[6vw] w-[58vw] max-w-[20rem] sm:-mt-[4vw]"
      >
        <div className="float-y drop-shadow-2xl">
          <BurgerSVG className="h-auto w-full" />
        </div>
      </motion.div>

      {/* info strip */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 z-10 flex w-full flex-col items-center gap-1 px-4 text-center text-sm text-cream/80"
      >
        <p className="font-semibold uppercase tracking-[0.2em]">{SITE.hours}</p>
        <p className="text-cream/60">
          {SITE.location} · {SITE.between}
        </p>
        <a href="#story" aria-label="Scroll down" className="mt-2 text-cream/70 hover:text-mustard">
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
