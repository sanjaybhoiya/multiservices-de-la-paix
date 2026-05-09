"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Car,
  Footprints,
  KeyRound,
  Wrench,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: Home, title: "Serrurerie habitation" },
  { icon: Car, title: "Serrurerie automobile" },
  { icon: Footprints, title: "Cordonnerie" },
  { icon: KeyRound, title: "Clés & reproduction" },
  { icon: Wrench, title: "Dépannage urgence" },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#f5f0e6] text-[#1c2430]">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-[#d4af37] text-xs font-semibold">
            ◆ Serrurier Suresnes · Services professionnels
          </p>

          <h2 className="text-3xl md:text-4xl font-serif mt-4">
            Intervention serrurerie & dépannage 24h/24
          </h2>

          <p className="text-sm text-[#1c2430]/70 mt-4 leading-relaxed">
            Services rapides en serrurerie, reproduction de clés et dépannage en Île-de-France.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">

          {services.map(({ icon: Icon, title }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative rounded-xl border border-[#e2d6c6] bg-white/80 backdrop-blur-md p-6 overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >

              {/* ====== SOFT APPLE GLOW BACKGROUND ====== */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#d4af37]/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#d4af37]/10 blur-3xl rounded-full" />
              </div>

              {/* ICON */}
              <div className="relative flex items-center justify-between mb-6">

                <span className="h-11 w-11 rounded-full border border-[#e2d6c6] flex items-center justify-center text-[#1c2430]/70 group-hover:text-[#d4af37] group-hover:border-[#d4af37] transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </span>

                <span className="text-[10px] tracking-[0.25em] text-[#1c2430]/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              {/* TITLE */}
              <h3 className="relative font-serif text-lg text-[#1c2430] group-hover:text-[#d4af37] transition-colors duration-300">
                {title}
              </h3>

              {/* SUBTLE LINE */}
              <div className="relative mt-3 h-px w-0 bg-[#d4af37] group-hover:w-12 transition-all duration-500" />

              {/* CTA */}
              <Link
                href="/services"
                className="relative mt-6 inline-flex items-center gap-2 text-[#d4af37] font-medium group"
              >
                Voir le service
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* ====== APPLE BORDER GLOW ====== */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#d4af37]/30 transition duration-500 pointer-events-none" />

            </motion.article>
          ))}

        </div>


      </div>
    </section>
  );
}