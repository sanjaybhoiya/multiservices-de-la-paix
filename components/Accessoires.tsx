"use client";

import { motion } from "framer-motion";
import { Key, Car, Footprints, Hammer, Info } from "lucide-react";

const cats = [
  {
    icon: Key,
    title: "Serrurerie",
    text: "Cylindres, serrures, verrous, organigrammes, perçages, fermeture, cadenas.",
  },
  {
    icon: Car,
    title: "Automobile",
    text: "Coques de clés, piles, télécommandes et accessoires d'origine.",
  },
  {
    icon: Footprints,
    title: "Cordonnerie",
    text: "Lacets, semelles, produits d'entretien cuir, lustreurs, brosses, cirages.",
  },
  {
    icon: Hammer,
    title: "Quincaillerie",
    text: "Visserie, chevilles, câbles et articles pour la petite réparation et le bricolage.",
  },
];

export function Accessoires() {
  return (
    <section
      id="accessoires"
      className="py-24 bg-[#efe7d8] text-[#1c2430]"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER (same animation style as Services) */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <p className="uppercase tracking-widest text-[#d4af37] text-xs font-semibold">
              ◆ En boutique
            </p>

            <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-[1.05]">
              Accessoires &<br />
              <span className="text-[#d4af37] italic">
                quincaillerie.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 text-[#1c2430]/70 text-sm leading-relaxed"
          >
            Une sélection rigoureuse de produits utiles au quotidien.
            Passez à la boutique, on vous conseille en quelques minutes selon votre besoin.
          </motion.p>

        </div>

        {/* GRID (stagger like Services section) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >

          {cats.map(({ icon: Icon, title, text }) => (
            <motion.article
              key={title}
              variants={{
                hidden: { opacity: 0, y: 35, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-[#e2d6c6] p-6 flex flex-col rounded-sm"
            >

              {/* HEADER */}
              <div className="flex items-start justify-between mb-4">

                <h3 className="font-serif text-2xl text-gold">
                  {title}
                </h3>

                <motion.div whileHover={{ rotate: -10, scale: 1.1 }}>
                  <Icon className="h-4 w-4 text-[#d4af37]" />
                </motion.div>

              </div>

              {/* TEXT */}
              <p className="text-sm text-[#1c2430]/70 leading-relaxed flex-1">
                {text}
              </p>

              {/* CTA (same hover behavior style as Services) */}
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-[#d4af37] font-medium text-sm group"
              >
                En boutique
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </motion.article>
          ))}

        </motion.div>

        {/* INFO BOX (subtle fade like services paragraph) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 border border-[#e2d6c6] bg-white/60 rounded-sm px-5 py-4 flex items-start gap-3 text-sm text-[#1c2430]/70"
        >

          <Info className="h-4 w-4 text-[#d4af37] mt-0.5 shrink-0" />

          <p>
            <span className="text-[#1c2430] font-medium">
              Vente toutes quincailleries :
            </span>{" "}
            les produits sont disponibles en boutique. Passez nous voir, en cas de rupture nous commandons sous 48h selon référence.
          </p>

        </motion.div>

      </div>
    </section>
  );
}