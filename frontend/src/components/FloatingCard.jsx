"use client";

import { motion } from "framer-motion";

export default function FloatingCard({ article }) {
  const glow =
    article.credibility === "high"
      ? "hover:shadow-green-500/20"
      : article.credibility === "medium"
      ? "hover:shadow-yellow-500/20"
      : "hover:shadow-red-500/20";

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        w-80
        h-52
        rounded-3xl
        bg-[#161B22]
        border
        border-white/10
        p-6
        text-white
        transition-all
        duration-300
        shadow-xl
        ${glow}
      `}
    >
      <p className="text-sm opacity-50 tracking-widest uppercase">
        {article.source}
      </p>

      <h2 className="text-2xl mt-5 leading-snug">
        {article.title}
      </h2>

      <div className="mt-8 text-xs opacity-40">
        CLICK TO INVESTIGATE
      </div>
    </motion.div>
  );
}