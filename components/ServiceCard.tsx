"use client";

import { motion, Variants } from "framer-motion";
import CallButton from "@/components/CallButton";
import DevisButton from "@/components/DevisButton";

type ServiceCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  href: string;
};

const card: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
  href,
}: ServiceCardProps) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -8 }}
      className="
        group relative flex flex-col h-full
        rounded-3xl
        bg-white
        border border-black/5
        shadow-[0_10px_40px_rgb(0,0,0,0.06)]
        hover:shadow-[0_25px_70px_rgb(0,0,0,0.12)]
        transition-all duration-300
        overflow-hidden
      "
    >
      {/* TOP ACCENT */}
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#d4af37] to-transparent opacity-40" />

      {/* HEADER */}
      <div className="flex items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-4">
          <div className="
            h-11 w-11 rounded-2xl
            flex items-center justify-center
            bg-[#f5f5f5]
            text-[#1c2430]/70
            group-hover:text-[#d4af37]
            transition
          ">
            <Icon className="h-5 w-5" />
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.25em] text-black/40">
              SERVICE {String(index).padStart(2, "0")}
            </span>

            <h3 className="text-[15px] font-semibold text-[#1c2430] leading-snug">
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* CONTENT (CLEAN BULLETS STYLE) */}
      <div className="px-6 pt-4 pb-5">
        <p className="text-sm text-black/60 leading-relaxed">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-[11px] px-2 py-1 rounded-full bg-[#f5f5f5] text-black/60">
            Intervention rapide
          </span>
          <span className="text-[11px] px-2 py-1 rounded-full bg-[#f5f5f5] text-black/60">
            Devis gratuit
          </span>
          <span className="text-[11px] px-2 py-1 rounded-full bg-[#f5f5f5] text-black/60">
            24h/24
          </span>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6 flex gap-3 mt-auto">
        <CallButton className="
          flex-1 rounded-2xl bg-[#1c2430] text-white
          py-2.5 text-sm font-medium text-center
          hover:bg-black transition
        " />

        <DevisButton
          service={href}
          className="
            flex-1 rounded-2xl
            border border-[#d4af37]/30
            bg-white
            text-sm font-medium text-center
            py-2.5
            text-[#1c2430]
            hover:border-[#d4af37]
            hover:text-[#d4af37]
            transition
          "
        />
      </div>
    </motion.article>
  );
}