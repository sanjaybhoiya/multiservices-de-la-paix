"use client";

import { motion, Variants } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import Urgence from "@/components/Urgence";

import { SERVICES } from "@/data/service";

/* =========================
   ANIMATIONS
========================= */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

/* =========================
   PAGE
========================= */

export default function ServicesPage() {
  return (
    <>
      {/* ================= HERO HEADER (NAVY ONLY) ================= */}
      <section className="navy-section py-28 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
            className="lg:grid lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-8">

              <span className="eyebrow inline-flex items-center gap-2 border border-gold/30 px-4 py-1.5 rounded-full text-navy-foreground/80 animate-pulse">
                ◆ Nos services
              </span>

              <h1 className="display mt-6 text-5xl md:text-6xl font-bold text-navy-foreground leading-[1.05]">
                Un ensemble complet de services<br />
                <span className="italic text-gold underline-gold">
                  à votre disposition.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-navy-foreground/70 leading-relaxed">
                Multiservices de la Paix vous propose un ensemble complet de services en
                serrurerie, cordonnerie et multiservices, destinés aux particuliers comme
                aux professionnels. Nous intervenons en atelier et en dépannage rapide,
                avec un large choix de prestations et de produits en boutique.
              </p>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= SERVICES GRID (CREAM BACKGROUND RESTORED) ================= */}
      <section className="py-28 bg-[#f5f0e6] text-[#1c2430] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
                items={service.items}
                accessories={service.accessories}
                href={`/contact?service=${service.slug}`}
                index={index + 1}
              />
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= FULLY SEPARATE ================= */}
      <div className="w-full ">
        <Urgence />
      </div>
    </>
  );
}