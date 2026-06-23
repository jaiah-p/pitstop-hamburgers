"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll-driven "assemble" animation (adapted from Skiper31).
 *
 * Note: the original component wrapped everything in <ReactLenis root>. This app
 * already runs a single Lenis instance from the root layout (components/SmoothScroll),
 * so we intentionally do NOT mount a second Lenis root here — useScroll reads the
 * window scroll that Lenis drives. Mounting two roots would fight over the scroll.
 */

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
};

/** Text characters that fly in from a scattered line into place. */
export const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );

  return (
    <motion.span
      className={cn("inline-block", isSpace && "w-4")}
      style={{ x, rotateX }}
    >
      {char}
    </motion.span>
  );
};

type ImageProps = {
  src: string;
  alt?: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
};

/** Images that scale + slide up into a row as you scroll. */
export const CharacterV2 = ({
  src,
  alt = "",
  index,
  centerIndex,
  scrollYProgress,
  className,
}: ImageProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 90, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [Math.abs(distanceFromCenter) * 60, 0],
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 6, 0],
  );

  return (
    <motion.img
      src={src}
      alt={alt}
      className={cn("shrink-0 object-cover will-change-transform", className)}
      style={{ x, y, scale, rotate, transformOrigin: "center" }}
    />
  );
};

type TextScrollAnimationProps = {
  /** Heading whose characters assemble on scroll. */
  heading: string;
  /** Image sources that fly into a row. */
  images: { src: string; alt?: string }[];
  className?: string;
  headingClassName?: string;
  imageClassName?: string;
  /** Optional content rendered under the assembled images (e.g. a CTA). */
  children?: React.ReactNode;
};

export function TextScrollAnimation({
  heading,
  images,
  className,
  headingClassName,
  imageClassName,
  children,
}: TextScrollAnimationProps) {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: textProgress } = useScroll({ target: textRef });
  const { scrollYProgress: imageProgress } = useScroll({ target: imageRef });

  const characters = heading.split("");
  const centerIndex = Math.floor(characters.length / 2);
  const imageCenterIndex = Math.floor(images.length / 2);

  return (
    <div className={className}>
      <div
        ref={textRef}
        className="flex h-[125vh] items-center justify-center overflow-hidden px-[4vw]"
      >
        <div
          className={cn(
            "w-full max-w-4xl text-center",
            headingClassName,
          )}
          style={{ perspective: "500px" }}
        >
          {characters.map((char, index) => (
            <CharacterV1
              key={index}
              char={char}
              index={index}
              centerIndex={centerIndex}
              scrollYProgress={textProgress}
            />
          ))}
        </div>
      </div>

      <div
        ref={imageRef}
        className="-mt-[55vh] flex h-[135vh] flex-col items-center justify-center gap-10 overflow-hidden px-[4vw]"
      >
        <div
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-7"
          style={{ perspective: "800px" }}
        >
          {images.map((img, index) => (
            <CharacterV2
              key={index}
              src={img.src}
              alt={img.alt}
              index={index}
              centerIndex={imageCenterIndex}
              scrollYProgress={imageProgress}
              className={imageClassName}
            />
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
