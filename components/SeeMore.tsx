"use client";

import { TextScrollAnimation } from "@/components/ui/text-scroll-animation";
import { SITE } from "@/lib/site";
import { InstagramIcon, FacebookIcon } from "./icons";

const PHOTOS = [
  { src: "/photos/scroll/fries.jpg", alt: "Beef tallow waffle fries" },
  { src: "/photos/scroll/burger.jpg", alt: "The World Famous Cheese Burger" },
  { src: "/photos/scroll/shake.jpg", alt: "Strawberry milkshake with whipped cream" },
  { src: "/photos/scroll/tray.jpg", alt: "Cheeseburger with Mississippi comeback sauce" },
  { src: "/photos/scroll/shakes.jpg", alt: "Vanilla and chocolate milkshakes" },
];

export default function SeeMore() {
  return (
    <section className="relative overflow-hidden bg-red-deep text-cream">
      {/* sunburst backdrop */}
      <div
        aria-hidden
        className="animate-spin-slow absolute left-1/2 top-1/2 h-[160vmax] w-[160vmax] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
        style={{
          background:
            "repeating-conic-gradient(from 0deg, #f6ecd6 0deg 6deg, transparent 6deg 12deg)",
        }}
      />
      <div
        aria-hidden
        className="halftone pointer-events-none absolute inset-0 text-red-dark opacity-30"
      />

      <TextScrollAnimation
        className="relative z-10"
        heading="See more from Pitstop"
        headingClassName="headline text-5xl text-cream sm:text-7xl lg:text-8xl"
        images={PHOTOS}
        imageClassName="h-32 w-32 rounded-2xl bg-cream p-1.5 shadow-2xl ring-1 ring-black/20 sm:h-44 sm:w-44"
      >
        <div className="mt-6 flex flex-col items-center gap-5 text-center">
          <p className="script text-3xl text-mustard sm:text-4xl">
            hungry yet?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-bold uppercase tracking-widest text-ink transition-transform hover:scale-105"
            >
              <InstagramIcon className="h-5 w-5" />
              @pitstop.hamburgers
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/50 px-6 py-3 text-sm font-bold uppercase tracking-widest text-cream transition-colors hover:border-mustard hover:text-mustard"
            >
              <FacebookIcon className="h-5 w-5" />
              Facebook
            </a>
          </div>
        </div>
      </TextScrollAnimation>
    </section>
  );
}
