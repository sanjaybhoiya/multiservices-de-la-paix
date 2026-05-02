"use client";

import { motion, Variants } from "framer-motion";
import { Home, Car, KeyRound, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Home,
    title: "Serrurerie habitation",
    subtitle: "Habitation & locaux",
    items: [
      "Ouverture de porte (claquée, verrouillée)",
      "Remplacement de serrure (toutes marques)",
      "Installation de serrures de sécurité",
    ],
    href: "/services",
  },
  {
    icon: Car,
    title: "Serrurerie automobile",
    subtitle: "Clés & dépannage véhicule",
    items: [
      "Reproduction de clés voiture",
      "Programmation de clés électroniques",
      "Ouverture de véhicule",
    ],
    href: "/services",
  },
  {
    icon: KeyRound,
    title: "Cordonnerie",
    subtitle: "Chaussures & maroquinerie",
    items: [
      "Réparation de chaussures (semelles, talons…)",
      "Entretien et rénovation cuir",
      "Réparation maroquinerie (sacs, ceintures)",
    ],
    href: "/services",
  },
  {
    icon: Wrench,
    title: "Clés & reproduction",
    subtitle: "Tous types de clés",
    items: [
      "Duplication de clés tous types",
      "Clés spéciales et techniques",
      "Clés sécurisées",
    ],
    href: "/services",
  },
];

/* =========================
   ANIMATIONS (UNCHANGED)
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

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#f5f0e6] text-[#1c2430] overflow-hidden">

      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-12 gap-10 items-end mb-16"
        >
          <div className="lg:col-span-7">

            <p className="uppercase tracking-[0.3em] text-[#d4af37] text-xs font-semibold">
              ◆ Nos services
            </p>

            <h2 className="text-4xl md:text-5xl mt-5 font-serif leading-[1.05]">
              Huit métiers,<br />
              <span className="italic text-[#d4af37]">
                un seul interlocuteur.
              </span>
            </h2>

          </div>

          <p className="lg:col-span-5 text-[#1c2430]/70 leading-relaxed lg:pl-6">
            De la porte claquée à 2h du matin à la reproduction d’une clé minute,
            nous intervenons rapidement avec une équipe experte — en boutique,
            en atelier, et à domicile en Île-de-France.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map(({ icon: Icon, title, subtitle, items, href }, index) => (
            <motion.article
              key={title}
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
              {/* ICON */}
              <div className="flex items-center justify-between mb-6">
                <span className="h-12 w-12 rounded-full border border-[#e2d6c6] flex items-center justify-center text-[#1c2430]/70 group-hover:text-[#d4af37] group-hover:border-[#d4af37] transition-all duration-500">
                  <Icon className="h-5 w-5" />
                </span>

                <span className="text-[10px] tracking-[0.25em] text-[#1c2430]/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="font-serif text-xl text-[#d4af37] mb-1">
                {title}
              </h3>

              {/* SUBTITLE */}
              <p className="text-xs text-[#1c2430]/60 mb-4">
                {subtitle}
              </p>

              {/* LIST */}
              <ul className="text-sm text-[#1c2430]/70 space-y-2 flex-1">
                {items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-[#d4af37]">•</span>
                    {it}
                  </li>
                ))}
              </ul>

              {/* CTA (FIXED ROUTING) */}
              <Link
                href={href}
                className="mt-6 text-[#d4af37] font-medium inline-flex items-center gap-2 group"
              >
                En savoir plus
                <span className="transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* ================= VIEW ALL BUTTON ================= */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#d4af37] text-[#d4af37] text-sm uppercase tracking-[0.2em] hover:bg-[#d4af37] hover:text-white transition rounded-sm"
          >
            Voir tous nos services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}