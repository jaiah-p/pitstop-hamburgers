"use client";

import { motion, AnimatePresence } from "framer-motion";

/* A stylised, layered smash burger built from SVG "pucks".
   Each layer = a curved side band + a top ellipse, stacked for a 3D read. */

type LayerProps = {
  cy: number;
  rx: number;
  ry?: number;
  thickness: number;
  top: string;
  side: string;
};

function Layer({ cy, rx, ry = 16, thickness, top, side }: LayerProps) {
  const cx = 180;
  return (
    <g>
      <path
        d={`M ${cx - rx},${cy} L ${cx - rx},${cy + thickness} A ${rx} ${ry} 0 0 0 ${
          cx + rx
        },${cy + thickness} L ${cx + rx},${cy} Z`}
        fill={side}
      />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={top} />
    </g>
  );
}

export default function BurgerSVG({
  hot = false,
  className,
}: {
  hot?: boolean;
  className?: string;
}) {
  const cx = 180;
  return (
    <svg
      viewBox="0 0 360 360"
      className={className}
      role="img"
      aria-label={
        hot
          ? "The World Famous Cheese Burger with spicy fried pineapple"
          : "The World Famous Cheese Burger"
      }
    >
      <defs>
        <radialGradient id="bunTop" cx="40%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#F4C788" />
          <stop offset="60%" stopColor="#E3A559" />
          <stop offset="100%" stopColor="#C8843C" />
        </radialGradient>
        <linearGradient id="bunSide" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#D9994E" />
          <stop offset="100%" stopColor="#B6772F" />
        </linearGradient>
      </defs>

      {/* soft contact shadow */}
      <ellipse cx={cx} cy={332} rx={120} ry={16} fill="#000" opacity="0.18" />

      {/* bottom bun */}
      <Layer cy={296} rx={108} ry={17} thickness={26} top="#D9994E" side="#A86a28" />

      {/* bottom patty */}
      <Layer cy={272} rx={116} ry={18} thickness={20} top="#6A3C20" side="#43240F" />
      {/* irregular smash edges */}
      <ellipse cx={cx} cy={272} rx={116} ry={18} fill="#7A4526" opacity="0.5" />

      {/* onion */}
      <Layer cy={256} rx={110} ry={15} thickness={6} top="#F3ECDC" side="#D8C8A8" />

      {/* pickles (peeking discs) */}
      <g>
        <ellipse cx={120} cy={250} rx={20} ry={8} fill="#7E9B3E" />
        <ellipse cx={120} cy={250} rx={20} ry={8} fill="none" stroke="#5B7B32" strokeWidth="2" />
        <ellipse cx={236} cy={252} rx={20} ry={8} fill="#8AA646" />
        <ellipse cx={236} cy={252} rx={20} ry={8} fill="none" stroke="#5B7B32" strokeWidth="2" />
      </g>

      {/* cheese (melty, with drips) */}
      <g>
        <path
          d="M 70,236 Q 90,256 110,238 Q 130,258 150,240 Q 170,260 190,240 Q 210,258 232,240 Q 252,258 290,238 L 290,228 Q 180,210 70,228 Z"
          fill="#F2B53C"
        />
        <ellipse cx={cx} cy={228} rx={112} ry={16} fill="#F8C44E" />
      </g>

      {/* top patty */}
      <Layer cy={208} rx={114} ry={17} thickness={20} top="#6A3C20" side="#43240F" />

      {/* spicy fried pineapple — only when hot */}
      <AnimatePresence>
        {hot && (
          <motion.g
            key="pineapple"
            initial={{ opacity: 0, y: -40, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.7 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            style={{ transformOrigin: "180px 198px" }}
          >
            <Layer cy={198} rx={120} ry={17} thickness={16} top="#F2C53D" side="#D69C24" />
            {/* grill marks + chilli flecks */}
            <g stroke="#C0860F" strokeWidth="3.5" opacity="0.75" strokeLinecap="round">
              <line x1="100" y1="194" x2="260" y2="204" />
              <line x1="100" y1="204" x2="260" y2="194" />
            </g>
            <circle cx="140" cy="196" r="3.2" fill="#C62718" />
            <circle cx="215" cy="200" r="3.2" fill="#C62718" />
            <circle cx="178" cy="194" r="2.8" fill="#C62718" />
          </motion.g>
        )}
      </AnimatePresence>

      {/* comeback sauce drizzle */}
      <g>
        <path
          d="M 76,196 Q 110,184 130,198 Q 160,182 186,198 Q 214,182 240,198 Q 266,184 286,196 L 286,188 Q 180,172 76,188 Z"
          fill={hot ? "#C9461F" : "#D2683C"}
        />
        <path
          d="M 95,196 q 6,14 -2,22 M 150,200 q 5,16 -3,24 M 205,200 q 6,15 -2,23 M 258,197 q 5,15 -3,22"
          fill="none"
          stroke={hot ? "#C9461F" : "#D2683C"}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>

      {/* top bun dome */}
      <g>
        <path
          d="M 72,182 C 72,110 120,72 180,72 C 240,72 288,110 288,182 C 288,196 72,196 72,182 Z"
          fill="url(#bunSide)"
        />
        <path
          d="M 74,178 C 74,112 120,78 180,78 C 240,78 286,112 286,178 C 286,190 74,190 74,178 Z"
          fill="url(#bunTop)"
        />
        {/* sheen */}
        <ellipse cx={140} cy={120} rx={42} ry={22} fill="#FFF1D6" opacity="0.45" />
        {/* toast specks */}
        <g fill="#A86a28" opacity="0.55">
          <circle cx="150" cy="150" r="2.4" />
          <circle cx="195" cy="135" r="2" />
          <circle cx="220" cy="158" r="2.4" />
          <circle cx="120" cy="160" r="2" />
          <circle cx="178" cy="165" r="1.8" />
        </g>
      </g>

      {/* heat shimmer when hot */}
      {hot && (
        <g
          className="flicker"
          stroke="#E2552B"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        >
          <path d="M 130,66 q 8,-12 0,-24 q -8,-12 0,-24" />
          <path d="M 180,58 q 8,-12 0,-24 q -8,-12 0,-24" />
          <path d="M 230,66 q 8,-12 0,-24 q -8,-12 0,-24" />
        </g>
      )}
    </svg>
  );
}
