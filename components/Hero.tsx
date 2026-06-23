"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/site";
import { ArrowDown, MapPin } from "./icons";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const photoRot = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-red-deep px-5 pb-28 pt-24 text-cream"
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
        className="relative z-10 flex flex-col items-center text-center"
      >
        <a
          href={SITE.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow mb-4 inline-flex items-center gap-2 rounded-full border border-cream/40 px-4 py-1.5 text-cream/90 transition-colors hover:border-mustard hover:text-mustard"
        >
          <MapPin className="h-3.5 w-3.5" />
          Thora General Store
        </a>

        {/* real Pitstop wordmark */}
        <img
          src="/photos/logo-cream.svg"
          alt="Pitstop Hamburgers"
          className="w-[74vw] max-w-xl drop-shadow-[0_6px_0_rgba(124,11,20,0.5)]"
        />

        <p className="script mt-4 text-2xl text-cream/90 sm:text-3xl">
          {SITE.tagline}
        </p>
      </motion.div>

      {/* real burger photo, polaroid style */}
      <motion.div
        style={{ y: photoY, rotate: photoRot, opacity: fade }}
        className="relative z-0 mt-7 w-[52vw] max-w-[14rem]"
      >
        <div className="float-y rounded-[14px] bg-cream p-2.5 pb-9 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
          <img
            src="/photos/burger-shake.jpg"
            alt="A Pitstop cheeseburger with waffle fries and a strawberry milkshake"
            className="aspect-[4/5] w-full rounded-[4px] object-cover"
          />
          <span className="script absolute inset-x-0 bottom-1.5 text-center text-xl text-ink">
            the good stuff
          </span>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-5 z-10 flex w-full flex-col items-center gap-1 px-4 text-center text-sm text-cream/80"
      >
        <p className="font-semibold uppercase tracking-[0.2em]">{SITE.hours}</p>
        <p className="text-cream/60">
          {SITE.location} · {SITE.between}
        </p>
        <a
          href="#story"
          aria-label="Scroll down"
          className="mt-2 text-cream/70 hover:text-mustard"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
