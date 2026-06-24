"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useScrollProgress } from "./ui/use-scroll-progress";
import { MapPin } from "./icons";

/**
 * Scroll-driven journey to Pitstop. As you scroll, "Waterfall Way" draws itself
 * down the screen, a marker rides the route, a pin drops, and you arrive at the
 * Pitstop roadside sign. No scenery photos — just the road and the arrival.
 *
 * The sign reveal uses /photos/sign.jpg. If that file isn't present yet it
 * gracefully falls back to a branded card, so the section never breaks.
 */

const ROAD =
  "M160 12 C 70 110 70 215 160 305 S 250 475 160 565 S 78 705 160 795 S 205 865 160 905";

export default function WindingRoad() {
  const ref = useRef<HTMLDivElement>(null);
  const signRef = useRef<HTMLImageElement>(null);
  const p = useScrollProgress(ref);
  const [signOk, setSignOk] = useState(true);

  // onError can miss a 404 that resolves before hydration — re-check on mount.
  useEffect(() => {
    const img = signRef.current;
    if (img && img.complete && img.naturalWidth === 0) setSignOk(false);
  }, []);

  // road draws as you scroll
  const draw = useTransform(p, [0.05, 0.72], [0, 1]);
  const marker = useTransform(p, [0.05, 0.72], [0, 0.99]);

  // heading rises in at the very start and stays
  const headFade = useTransform(p, [0, 0.06], [0, 1]);
  const headY = useTransform(p, [0, 0.06], [-22, 0]);

  // arrival: sign card + pin + "you've arrived"
  const cardOpacity = useTransform(p, [0.6, 0.78], [0, 1]);
  const cardScale = useSpring(useTransform(p, [0.6, 0.84], [0.82, 1]), {
    stiffness: 180,
    damping: 20,
  });
  const pinScale = useSpring(useTransform(p, [0.7, 0.88], [0, 1]), {
    stiffness: 280,
    damping: 16,
  });
  const pinY = useTransform(p, [0.64, 0.86], [-50, 0]);
  const arriveText = useTransform(p, [0.88, 1], [0, 1]);

  return (
    <section
      ref={ref}
      id="journey"
      className="relative h-[300vh] bg-paper"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(24,18,16,0.07) 1px, transparent 0)",
        backgroundSize: "26px 26px",
      }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden px-5">
        {/* heading at the start of the road */}
        <motion.div
          style={{ opacity: headFade, y: headY }}
          className="absolute top-[7vh] z-30 text-center"
        >
          <p className="eyebrow text-red">Pull off Waterfall Way</p>
          <h2 className="headline mt-2 text-5xl text-ink sm:text-6xl">
            Find the <span className="text-red">Pitstop.</span>
          </h2>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.3em] text-ink-soft">
            Thora · NSW
          </p>
        </motion.div>

        {/* the road */}
        <svg
          viewBox="0 0 320 920"
          className="absolute top-[19vh] h-[69vh] w-auto"
          fill="none"
          aria-hidden
        >
          <motion.path d={ROAD} stroke="#211c19" strokeWidth="30" strokeLinecap="round" style={{ pathLength: draw }} />
          <motion.path d={ROAD} stroke="#edb43c" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 16" style={{ pathLength: draw }} />
          <motion.path d={ROAD} stroke="#f6ecd6" strokeWidth="13" strokeLinecap="round" style={{ pathLength: 0.012, pathOffset: marker }} />
        </svg>

        {/* arrival — the roadside sign reveals at the end of the road */}
        <motion.div
          style={{ opacity: cardOpacity, scale: cardScale }}
          className="relative z-20 w-[68vw] max-w-md rounded-lg bg-cream p-2 shadow-2xl ring-1 ring-ink/10"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-red-deep">
            {signOk ? (
              <img
                ref={signRef}
                src="/photos/sign.jpg"
                alt="The Pitstop Hamburgers roadside sign on Waterfall Way"
                className="h-full w-full object-cover"
                onError={() => setSignOk(false)}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-red-deep">
                <img src="/photos/logo-cream.svg" alt="Pitstop Hamburgers" className="w-[62%]" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cream/80">
                  Thora · NSW
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* destination pin */}
        <motion.div
          style={{ scale: pinScale, y: pinY }}
          className="absolute bottom-[12vh] z-30 flex flex-col items-center"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red shadow-2xl ring-4 ring-cream">
            <MapPin className="h-7 w-7 text-cream" />
          </div>
          <div className="-mt-1 h-3.5 w-3.5 rotate-45 bg-red ring-4 ring-cream" />
        </motion.div>

        <motion.p
          style={{ opacity: arriveText }}
          className="script absolute bottom-[5vh] z-30 text-2xl text-red sm:text-3xl"
        >
          you&rsquo;ve arrived
        </motion.p>
      </div>
    </section>
  );
}
