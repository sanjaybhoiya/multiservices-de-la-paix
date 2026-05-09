"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type ServiceCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  href: string;
};

const card: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
  href,
}: ServiceCardProps) {
  const { phone } = siteConfig.contact;

  return (
    <motion.article
      variants={card}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="
        group relative flex flex-col h-full
        rounded-2xl
        bg-white/80 backdrop-blur-xl
        border border-black/5
        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)]
        transition-all duration-500
        overflow-hidden
      "
    >
      {/* soft glow hover */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          bg-linear-to-br from-[#d4af37]/5 via-transparent to-transparent
        "
      />

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between p-6 pb-0">

        {/* ICON */}
        <div
          className="
            h-11 w-11 rounded-xl
            flex items-center justify-center
            bg-[#f5f5f5]
            text-[#1c2430]/70
            group-hover:text-[#d4af37]
            group-hover:bg-[#fff7e6]
            transition-all duration-500
          "
        >
          <Icon className="h-5 w-5" />
        </div>

        {/* INDEX */}
        <span className="text-[11px] tracking-[0.25em] text-black/30">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex-1 px-6 pt-5">
        <h3
          className="
            text-lg font-semibold
            text-[#1c2430]
            group-hover:text-[#d4af37]
            transition-colors duration-300
          "
        >
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-black/60">
          {description}
        </p>
      </div>

      {/* ================= CTA ================= */}
      <div className="p-6 pt-5 flex gap-3">

        {/* CALL */}
        <a
          href={`tel:${phone.raw}`}
          className="
            flex-1
            rounded-xl
            bg-[#1c2430]
            text-white
            text-sm font-medium
            py-2.5
            text-center
            hover:bg-[#d4af37]
            transition-all duration-300
          "
        >
          Appeler
        </a>

        {/* QUOTE */}
        <Link
          href={href}
          className="
            flex-1
            rounded-xl
            border border-black/10
            text-sm font-medium
            py-2.5
            text-center
            text-[#1c2430]
            hover:border-[#d4af37]
            hover:text-[#d4af37]
            transition-all duration-300
          "
        >
          Devis
        </Link>

      </div>
    </motion.article>
  );
}