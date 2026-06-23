"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollProgress } from "./ui/use-scroll-progress";
import { MapPin } from "./icons";

/**
 * Scroll-driven journey to Pitstop. As you scroll: a winding road draws itself
 * down "Waterfall Way", a marker travels the route, a pin drops at the end, and
 * the Pitstop sign reveals. Driven by useScrollProgress (rAF) — proven in this
 * Lenis/Next 16 setup.
 */

const ROAD =
  "M160 12 C 70 110 70 215 160 305 S 250 475 160 565 S 78 705 160 795 S 205 865 160 905";

export default function WindingRoad() {
  const ref = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(ref);

  // road draws over the first 80% of the scroll
  const draw = useTransform(p, [0, 0.8], [0, 1]);
  const marker = useTransform(p, [0, 0.8], [0, 0.99]);

  const signFade = useTransform(p, [0, 0.12], [0, 1]);
  const signY = useTransform(p, [0, 0.12], [-24, 0]);

  // pin pops near the end, with a spring overshoot
  const pinScale = useSpring(useTransform(p, [0.72, 0.9], [0, 1]), {
    stiffness: 280,
    damping: 16,
  });
  const pinY = useTransform(p, [0.66, 0.86], [-60, 0]);

  // the Pitstop sign photo reveals last
  const photoScale = useSpring(useTransform(p, [0.84, 1], [0.6, 1]), {
    stiffness: 200,
    damping: 22,
  });
  const photoOpacity = useTransform(p, [0.84, 0.98], [0, 1]);
  const arriveOpacity = useTransform(p, [0.9, 1], [0, 1]);

  return (
    <section
      ref={ref}
      id="journey"
      className="relative h-[260vh] bg-paper"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(24,18,16,0.07) 1px, transparent 0)",
        backgroundSize: "26px 26px",
      }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden px-5">
        <motion.p
          style={{ opacity: signFade }}
          className="eyebrow absolute top-[12vh] text-red"
        >
          The drive in
        </motion.p>

        {/* Waterfall Way road sign */}
        <motion.div
          style={{ opacity: signFade, y: signY }}
          className="absolute top-[16vh] z-20"
        >
          <div className="rounded-lg border-[3px] border-cream bg-pickle px-6 py-2 text-center shadow-xl">
            <span className="block text-[0.6rem] font-bold uppercase tracking-[0.3em] text-cream/80">
              Waterfall Way
            </span>
            <span className="headline block text-2xl leading-none text-cream sm:text-3xl">
              Thora
            </span>
          </div>
        </motion.div>

        {/* the road */}
        <svg
          viewBox="0 0 320 920"
          className="h-[78vh] w-auto"
          fill="none"
          aria-hidden
        >
          {/* dark asphalt */}
          <motion.path
            d={ROAD}
            stroke="#211c19"
            strokeWidth="30"
            strokeLinecap="round"
            style={{ pathLength: draw }}
          />
          {/* dashed centre line */}
          <motion.path
            d={ROAD}
            stroke="#edb43c"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1 16"
            style={{ pathLength: draw }}
          />
          {/* travelling marker (a short bright segment that rides the route) */}
          <motion.path
            d={ROAD}
            stroke="#f6ecd6"
            strokeWidth="13"
            strokeLinecap="round"
            style={{ pathLength: 0.012, pathOffset: marker }}
          />
        </svg>

        {/* destination pin */}
        <motion.div
          style={{ scale: pinScale, y: pinY }}
          className="absolute bottom-[12vh] z-20 flex flex-col items-center"
        >
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-red shadow-2xl ring-4 ring-cream">
            <MapPin className="h-8 w-8 text-cream" />
          </div>
          <div className="-mt-1 h-4 w-4 rotate-45 bg-red ring-4 ring-cream" />
        </motion.div>

        {/* the Pitstop sign reveal */}
        <motion.figure
          style={{ scale: photoScale, opacity: photoOpacity }}
          className="absolute bottom-[20vh] z-10 w-[68vw] max-w-sm overflow-hidden rounded-xl bg-cream p-2 shadow-2xl"
        >
          <img
            src="/photos/store.jpg"
            alt="Pitstop Hamburgers, behind the Thora General Store"
            className="aspect-[4/3] w-full rounded-md object-cover"
          />
        </motion.figure>

        <motion.p
          style={{ opacity: arriveOpacity }}
          className="script absolute bottom-[8vh] z-20 text-2xl text-red sm:text-3xl"
        >
          you&rsquo;ve arrived
        </motion.p>
      </div>
    </section>
  );
}
