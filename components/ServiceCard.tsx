"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type ServiceCardProps = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  items: string[];
  index: number;
  href: string;

  accessories?: {
    title?: string;
    items: string[];
  };
};

const card: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServiceCard({
  icon: Icon,
  title,
  subtitle,
  items,
  index,
  href,
  accessories,
}: ServiceCardProps) {

  // 🔥 NEW: expand state
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      variants={card}
      whileHover={{
        y: -12,
        rotateX: 6,
        rotateY: -6,
        scale: 1.02,
        transition: { duration: 0.4 },
      }}
      style={{ perspective: 1000 }}
      className="group bg-white border border-[#e2d6c6] p-7 flex flex-col rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500"
    >

      {/* ================= ICON + INDEX ================= */}
      <div className="flex items-center justify-between mb-6">
        <span className="h-12 w-12 rounded-full border border-[#e2d6c6] flex items-center justify-center text-[#1c2430]/70 group-hover:text-[#d4af37] group-hover:border-[#d4af37] transition-all duration-500">
          <Icon className="h-5 w-5" />
        </span>

        <span className="text-[10px] tracking-[0.25em] text-[#1c2430]/40">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex-1">
        <h3 className="font-serif text-xl text-[#d4af37] mb-1">
          {title}
        </h3>

        <p className="text-xs text-[#1c2430]/60 mb-4">
          {subtitle}
        </p>

        <ul className="text-sm text-[#1c2430]/70 space-y-2">
          {items.map((it) => (
            <li key={it} className="flex gap-2">
              <span className="text-[#d4af37]">•</span>
              {it}
            </li>
          ))}
        </ul>

        {/* ================= ACCESSORIES (NEW EXPANDABLE BOX) ================= */}
        {accessories && (
          <div className="mt-5">

            {/* toggle button */}
            <button
              onClick={() => setOpen(!open)}
              className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold"
            >
              {open ? "− Cacher accessoires" : "+ Accessoires en boutique"}
            </button>

            {/* animated box */}
            {open && (
              <div className="mt-3 border border-[#e2d6c6] bg-[#f5f0e6]/60 p-4 rounded-sm">
                
                <p className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold mb-3">
                  {accessories.title}
                </p>

                <div className="flex flex-wrap gap-2">
                  {accessories.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] px-2 py-1 bg-white border border-[#e2d6c6] rounded-sm text-[#1c2430]/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            )}
          </div>
        )}
      </div>

      {/* ================= CTA BUTTONS ================= */}
      <div className="mt-6 flex gap-3">

        {/* CALL */}
        <a
          href="tel:+33123456789"
          className="flex-1 flex items-center justify-center px-4 py-3 border border-[#d4af37] text-[#d4af37] text-[12px] uppercase tracking-[0.2em] rounded-sm hover:bg-[#d4af37] hover:text-white transition"
        >
          Appeler
        </a>

        {/* DEVIS */}
        <Link
          href={href}
          className="flex-1 flex items-center justify-center px-4 py-3 bg-[#d4af37] text-white text-[12px] uppercase tracking-[0.2em] rounded-sm hover:opacity-90 transition"
        >
          Devis
        </Link>

      </div>
    </motion.article>
  );
}