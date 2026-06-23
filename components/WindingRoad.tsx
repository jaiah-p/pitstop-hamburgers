"use client";

import { motion, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { useScrollProgress } from "./ui/use-scroll-progress";
import { MapPin } from "./icons";

/**
 * Scroll-driven journey to Pitstop. As you scroll: a winding road draws itself
 * down "Waterfall Way", a marker rides the route, a postcard cross-fades through
 * scenery of the drive, then a pin drops and you arrive at Pitstop.
 */

const ROAD =
  "M160 12 C 70 110 70 215 160 305 S 250 475 160 565 S 78 705 160 795 S 205 865 160 905";

// Scenery of the drive (real, people-free). Each fades in → peaks → fades out.
const STOPS = [
  { src: "/photos/drive-forest.jpg", label: "Dorrigo rainforest", at: [0, 0.18, 0.42] },
  { src: "/photos/drive-falls.jpg", label: "Dangar Falls", at: [0.36, 0.56, 0.74] },
];

function Postcard({
  src,
  label,
  opacity,
}: {
  src: string;
  label: string;
  opacity: MotionValue<number>;
}) {
  return (
    <motion.figure style={{ opacity }} className="absolute inset-0">
      <img src={src} alt={label} className="h-full w-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-4 pb-3 pt-10">
        <figcaption className="text-center text-sm font-bold uppercase tracking-[0.25em] text-cream">
          {label}
        </figcaption>
      </div>
    </motion.figure>
  );
}

export default function WindingRoad() {
  const ref = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(ref);

  const draw = useTransform(p, [0, 0.82], [0, 1]);
  const marker = useTransform(p, [0, 0.82], [0, 0.99]);

  const signFade = useTransform(p, [0, 0.1], [0, 1]);
  const signY = useTransform(p, [0, 0.1], [-24, 0]);

  const o0 = useTransform(p, STOPS[0].at, [0, 1, 0]);
  const o1 = useTransform(p, STOPS[1].at, [0, 1, 0]);
  const stopOpacities = [o0, o1];
  const arrivalOpacity = useTransform(p, [0.72, 0.86], [0, 1]);

  const pinScale = useSpring(useTransform(p, [0.74, 0.9], [0, 1]), {
    stiffness: 280,
    damping: 16,
  });
  const pinY = useTransform(p, [0.68, 0.88], [-50, 0]);
  const arriveText = useTransform(p, [0.9, 1], [0, 1]);

  return (
    <section
      ref={ref}
      id="journey"
      className="relative h-[320vh] bg-paper"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(24,18,16,0.07) 1px, transparent 0)",
        backgroundSize: "26px 26px",
      }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden px-5">
        <motion.div
          style={{ opacity: signFade, y: signY }}
          className="absolute top-[9vh] z-30"
        >
          <p className="eyebrow mb-2 text-center text-red">The drive in</p>
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
        <svg viewBox="0 0 320 920" className="absolute h-[82vh] w-auto" fill="none" aria-hidden>
          <motion.path d={ROAD} stroke="#211c19" strokeWidth="30" strokeLinecap="round" style={{ pathLength: draw }} />
          <motion.path d={ROAD} stroke="#edb43c" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 16" style={{ pathLength: draw }} />
          <motion.path d={ROAD} stroke="#f6ecd6" strokeWidth="13" strokeLinecap="round" style={{ pathLength: 0.012, pathOffset: marker }} />
        </svg>

        {/* postcard of the drive — cross-fades scenery, then the arrival card */}
        <div className="relative z-20 aspect-[4/3] w-[64vw] max-w-md rounded-lg bg-cream p-2 shadow-2xl ring-1 ring-ink/10">
          <div className="relative h-full w-full overflow-hidden rounded-md bg-ink/10">
            {STOPS.map((s, i) => (
              <Postcard key={s.src} src={s.src} label={s.label} opacity={stopOpacities[i]} />
            ))}

            {/* arrival card. Drop a close-up of the sign at /photos/sign.jpg and
                replace this block with <Postcard src="/photos/sign.jpg" .../>. */}
            <motion.div
              style={{ opacity: arrivalOpacity }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-red-deep"
            >
              <img src="/photos/logo-cream.svg" alt="Pitstop Hamburgers" className="w-[62%]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-cream/80">
                Thora · NSW
              </span>
            </motion.div>
          </div>
        </div>

        {/* destination pin */}
        <motion.div
          style={{ scale: pinScale, y: pinY }}
          className="absolute bottom-[11vh] z-30 flex flex-col items-center"
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
