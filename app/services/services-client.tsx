"use client";

import { motion, Variants } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import Urgence from "@/components/Urgence";

import { iconMap } from "@/lib/icons";
import { generateServiceSchema } from "@/lib/seo/serviceSchema";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export default function ServicesClient({
  services,
}: {
  services: Service[];
}) {
  return (
    <>
      {/* HERO */}
      <section className="navy-section relative z-10 py-28 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl animate-pulse">
              <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/75">
                Dépannage serrurerie · 24h/24 · Suresnes & Île-de-France
              </span>
            </div>

            <h1 className="display mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground leading-[1.05]">
              Serrurerie & multiservices
              <br />
              <span className="text-gold italic">
                intervention rapide en Île-de-France
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-navy-foreground/70 leading-relaxed max-w-2xl">
              Ouverture de porte, dépannage serrurerie, reproduction de clés,
              serrurerie automobile, cordonnerie et multiservices pour
              particuliers et professionnels avec intervention rapide et devis clair.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Intervention rapide", "Disponible 24h/24", "Devis gratuit", "Suresnes & IDF"].map((badge) => (
                <div
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-navy-foreground/80 backdrop-blur"
                >
                  ✔ {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative z-20 py-24 bg-[#f5f0e6] text-[#1c2430] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-10">
            <p className="eyebrow text-[#1c2430]/60">
              ◆ Nos services
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];

              return (
                <ServiceCard
                  key={service.slug}
                  icon={Icon}
                  title={service.title}
                  description={service.description}
                  href={`/contact?service=${service.slug}`}  
                  index={i + 1}
                />
              );
            })}
          </motion.div>
        </div>
      </section>

      <Urgence />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            services.map((s) =>
              generateServiceSchema({
                title: s.title,
                description: s.description,
                items: [],
              })
            )
          ),
        }}
      />
    </>
  );
}