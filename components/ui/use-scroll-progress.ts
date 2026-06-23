"use client";

import { useEffect, type RefObject } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

/**
 * Returns a MotionValue (0..1) for how far a target element has scrolled
 * through the viewport — equivalent to framer's useScroll offset
 * ["start start", "end end"], but computed on a rAF loop from the element's
 * rect. We use this instead of framer-motion's useScroll because, in this
 * Next 16 / React 19 / Lenis setup, useScroll's progress was not updating.
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
): MotionValue<number> {
  const progress = useMotionValue(0);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const total = rect.height - vh; // scrollable distance
        const scrolled = -rect.top; // how far the top has passed the viewport top
        const p = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;
        progress.set(p);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ref, progress]);

  return progress;
}
