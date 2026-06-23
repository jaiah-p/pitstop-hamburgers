"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function ChessClub() {
  return (
    <section className="relative overflow-hidden bg-mustard py-20 text-ink sm:py-28">
      {/* checkerboard edge top */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-8"
        style={{
          backgroundImage:
            "conic-gradient(#181210 90deg, transparent 90deg 180deg, #181210 180deg 270deg, transparent 270deg)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-red">Every Sunday</p>
          <h2 className="headline mt-3 text-6xl text-ink sm:text-7xl">
            Chess <span className="text-red">Club.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            All ages and levels welcome. Whether you&rsquo;re brand new to the
            game or you&rsquo;ve played for years, you&rsquo;ll find a friendly
            seat here.
          </p>
          <p className="script mt-4 text-2xl text-red">
            Sit down, shake hands, and make your next best move.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center">
          <div className="grid grid-cols-4 overflow-hidden rounded-xl shadow-2xl ring-4 ring-ink">
            {Array.from({ length: 16 }).map((_, i) => {
              const row = Math.floor(i / 4);
              const dark = (row + i) % 2 === 0;
              const piece =
                i === 5 ? "♞" : i === 10 ? "♚" : i === 3 ? "♟" : "";
              return (
                <motion.div
                  key={i}
                  whileHover={{ backgroundColor: "#d7242e" }}
                  className={`flex h-16 w-16 items-center justify-center text-3xl sm:h-20 sm:w-20 sm:text-4xl ${
                    dark ? "bg-ink text-cream" : "bg-cream text-ink"
                  }`}
                >
                  {piece}
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
