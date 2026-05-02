"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Urgence() {
  return (
    <section className="navy-section py-16">

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-8 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-8"
        >
          <p className="eyebrow">◆ Urgence</p>

          <h2 className="display text-3xl md:text-4xl mt-3 text-navy-foreground leading-[1.1]">
            Une porte claquée à 2h du matin ?{" "}
            <span className="text-[#d4af37] italic">On décroche.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-navy-foreground/70 max-w-xl text-sm leading-relaxed line-clamp-2"
          >
            Notre ligne d'urgence est active 24 heures sur 24, 7 jours sur 7.
            Intervention rapide en Île-de-France avec devis clair avant toute intervention.
          </motion.p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:col-span-4 lg:text-right"
        >

          {/* 🔥 RESTORED ORIGINAL BUTTON SIZE + STYLE */}
          <a
            href="tel:+33749491818"
            className="btn-gold rounded-sm group"
            style={{
              padding: "0.85rem 1.4rem",
              fontSize: "0.78rem",
            }}
          >
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />

            <span className="hidden sm:inline">07 49 49 18 18</span>
            <span className="sm:hidden">24/7</span>
          </a>

          
        </motion.div>

      </div>

    </section>
  );
}