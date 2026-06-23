"use client";

import { useEffect, useRef } from "react";
import { useMotionValueEvent } from "framer-motion";
import { useScrollProgress } from "./use-scroll-progress";

/**
 * Scroll-scrubbed video: the video's playback is tied to scroll position
 * (like the field "pan" hero). Drop a clip at the given src and it plays
 * forward/back as the user scrolls through the wrapping (tall) section.
 *
 * Uses a target-ref based useScroll (works with the app's Lenis instance).
 */
export function ScrollVideo({
  src,
  poster,
  className,
  targetRef,
}: {
  src: string;
  poster?: string;
  className?: string;
  /** Ref of the tall section that defines the scroll range. */
  targetRef: React.RefObject<HTMLElement | null>;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollYProgress = useScrollProgress(targetRef);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.removeAttribute("autoplay");
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const v = videoRef.current;
    if (!v || !v.duration || Number.isNaN(v.duration)) return;
    // map scroll progress (0..1) to video time
    v.currentTime = Math.min(v.duration, Math.max(0, p * v.duration));
  });

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      playsInline
      preload="auto"
      className={className}
    />
  );
}
