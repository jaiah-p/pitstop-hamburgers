"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU } from "@/lib/site";
import Reveal from "./Reveal";

function LetterBoard({ hot }: { hot: boolean }) {
  const board = [
    { label: "The World Famous Cheese Burger", price: hot ? 20 : 18 },
    { label: "Make It Hot & Tropical", price: 2 },
    { label: "Beef Tallow Fries", price: 7 },
    { label: "Dinosaur Nuggets", price: 7 },
    { label: "Homemade Sweet Southern Ice Tea", price: 6 },
    { label: "Milkshake", price: 7 },
  ];
  const white = "#f5f1e6";
  return (
    /* wood mount */
    <div
      className="rounded-[10px] p-3 shadow-2xl sm:p-4"
      style={{
        background:
          "repeating-linear-gradient(90deg, #7c5631 0 46px, #6b4a29 46px 48px), linear-gradient(180deg, #79532f, #5e3f24)",
      }}
    >
      {/* brushed aluminium frame */}
      <div
        className="rounded-[5px] p-2.5"
        style={{
          background:
            "linear-gradient(135deg, #f1f1f3 0%, #c2c2c6 42%, #e6e6ea 55%, #aeaeb2 100%)",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.55), inset 0 0 6px rgba(0,0,0,0.25)",
        }}
      >
        {/* red felt */}
        <div
          className="relative overflow-hidden rounded-[3px] px-6 py-7 sm:px-8 sm:py-8"
          style={{
            background:
              "repeating-linear-gradient(#c01528, #c01528 12px, #b21221 12px, #b21221 14px)",
            color: white,
          }}
        >
          <p className="text-center text-xs uppercase tracking-[0.45em] sm:text-sm">
            Welcome&nbsp;&nbsp;To
          </p>

          <div className="relative mt-2">
            <span className="absolute -top-1 left-4 text-lg" style={{ color: white }}>
              ★
            </span>
            <p
              className="text-center text-4xl font-extrabold uppercase tracking-[0.12em] sm:text-5xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Pitstop
            </p>
            <span className="absolute -bottom-3 right-8 text-lg" style={{ color: white }}>
              ★
            </span>
          </div>

          <ul className="mt-8 space-y-4">
            {board.map((row) => (
              <li
                key={row.label}
                className="flex items-start justify-between gap-4 text-[15px] font-semibold uppercase leading-tight tracking-[0.04em] sm:text-base"
              >
                <span className="max-w-[78%]">{row.label}</span>
                <span className="shrink-0 tabular-nums">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={row.price}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="inline-block"
                    >
                      {row.price}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-sm uppercase tracking-[0.3em] sm:text-base">
            Don&rsquo;t&nbsp;&nbsp;Think&nbsp;&nbsp;Twice!
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [hot, setHot] = useState(false);

  return (
    <section id="menu" className="relative bg-ink py-24 text-cream sm:py-32">
      <div
        aria-hidden
        className="halftone pointer-events-none absolute inset-0 text-white/[0.04]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow text-mustard">
            The whole menu · three things done right
          </p>
          <h2 className="headline mt-3 text-6xl sm:text-8xl">
            Tight by <span className="text-red">design.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            One double cheeseburger. Crinkle cut fries in beef tallow. Vanilla
            milkshakes. Nothing wasted, nothing tired.
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* the real burger + Hot & Tropical toggle */}
          <Reveal className="order-2 flex flex-col items-center lg:order-1">
            <motion.div
              animate={{ rotate: hot ? [0, -1.2, 1.2, 0] : 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-sm overflow-hidden rounded-3xl ring-4 ring-white/10 shadow-2xl"
            >
              <img
                src="/photos/burger-shake.jpg"
                alt="The World Famous Cheese Burger"
                className="aspect-square w-full object-cover"
              />

              {/* hot overlay */}
              <AnimatePresence>
                {hot && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(215,36,46,0.0) 35%, rgba(215,36,46,0.45) 100%)",
                    }}
                  >
                    <motion.span
                      initial={{ scale: 0, rotate: -25 }}
                      animate={{ scale: 1, rotate: -12 }}
                      transition={{ type: "spring", stiffness: 240, damping: 14 }}
                      className="absolute right-4 top-4 whitespace-nowrap rounded-full bg-mustard px-4 py-2 text-sm font-bold uppercase tracking-wider text-ink shadow-lg"
                    >
                      🌶️ Hot &amp; Tropical 🍍
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <div className="mt-6 text-center">
              <p className="headline text-3xl">The World Famous Cheeseburger</p>
              <p className="mt-2 text-4xl font-bold tabular-nums text-mustard">
                ${hot ? 20 : 18}
              </p>

              <button
                type="button"
                onClick={() => setHot((v) => !v)}
                aria-pressed={hot}
                className={`group mt-5 inline-flex items-center gap-3 rounded-full border-2 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all ${
                  hot
                    ? "border-mustard bg-mustard text-ink shadow-[0_0_30px_-4px] shadow-mustard"
                    : "border-cream/40 text-cream hover:border-mustard hover:text-mustard"
                }`}
              >
                <span className="text-lg">{hot ? "🌶️🍍" : "🍍"}</span>
                {hot ? "Hot & Tropical, added" : "Make it Hot & Tropical (+$2)"}
              </button>
              <p className="mt-3 text-xs uppercase tracking-widest text-cream/40">
                Spicy fried pineapple · tap to add
              </p>
            </div>
          </Reveal>

          {/* the board */}
          <Reveal
            delay={0.1}
            className="order-1 mx-auto w-full max-w-md lg:order-2"
          >
            <LetterBoard hot={hot} />
          </Reveal>
        </div>

        {/* supporting cast */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MENU.filter((m) => m.note !== "add-on").map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 0.05}
              className="group rounded-2xl border border-cream/10 bg-white/[0.03] p-6 transition-colors hover:border-mustard/50 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="headline text-2xl leading-tight">{item.name}</h3>
                <span className="shrink-0 rounded-full bg-red px-3 py-1 text-sm font-bold tabular-nums">
                  ${item.price}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                {item.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
