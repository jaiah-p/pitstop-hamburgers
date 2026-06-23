"use client";

import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/site";
import { ArrowDown, MapPin } from "./icons";
import { useScrollProgress } from "./ui/use-scroll-progress";

/**
 * Cinematic, scroll-scrubbed hero. A tall section pins a full-bleed shot of the
 * field (with the burgers in it) and pans + zooms it as you scroll, like a
 * camera move. Swap the <motion.img> for <ScrollVideo> once a real clip exists.
 */
export default function FieldHero() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScrollProgress(ref);

  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1.55]);
  const panX = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const panY = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);

  const darken = useTransform(scrollYProgress, [0, 0.55, 1], [0.42, 0.55, 0.92]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-[240vh] bg-ink">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* the field, panning */}
        <motion.img
          src="/photos/tray-grass.jpg"
          alt="Pitstop burgers, beef tallow fries and milkshakes out in the field"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ scale, x: panX, y: panY }}
        />

        {/* legibility + red brand tint */}
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-red-deep mix-blend-multiply"
          style={{ opacity: darken }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(24,18,16,0.55) 0%, rgba(24,18,16,0.05) 30%, rgba(24,18,16,0.15) 70%, rgba(124,11,20,0.75) 100%)",
          }}
        />
        <div
          aria-hidden
          className="halftone pointer-events-none absolute inset-0 text-black/20"
        />

        {/* centered lockup */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center text-cream"
        >
          <a
            href={SITE.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow mb-4 inline-flex items-center gap-2 rounded-full border border-cream/50 bg-black/20 px-4 py-1.5 text-cream backdrop-blur-sm transition-colors hover:border-mustard hover:text-mustard"
          >
            <MapPin className="h-3.5 w-3.5" />
            Pitstop Hamburgers · Thora
          </a>
          <img
            src="/photos/logo-cream.svg"
            alt="Pitstop Hamburgers"
            className="w-[76vw] max-w-xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          />
          <p className="script mt-4 text-2xl text-cream drop-shadow-lg sm:text-3xl">
            {SITE.tagline}
          </p>
        </motion.div>

        {/* bottom strip + cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-center text-sm text-cream/90"
        >
          <p className="font-semibold uppercase tracking-[0.2em] drop-shadow">
            {SITE.hours}
          </p>
          <p className="text-cream/70 drop-shadow">
            {SITE.location} · {SITE.between}
          </p>
          <ArrowDown className="mt-2 h-6 w-6 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
