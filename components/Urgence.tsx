"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Urgence() {
  const { phone } = siteConfig.contact;

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
            Une porte claquée ?{" "}
            <span className="text-[#d4af37] italic">
              Intervention immédiate 24h/24 et 7j/7.
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-navy-foreground/70 max-w-xl text-sm leading-relaxed"
          >
            Dépannage rapide en serrurerie à Suresnes et en Île-de-France.
            Devis clair avant toute intervention.
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
          <a
            href={`tel:${phone.raw}`}
            aria-label={`Appeler ${phone.display}`}
            className="btn-gold rounded-sm group inline-flex items-center gap-2"
            style={{
              padding: "0.85rem 1.4rem",
              fontSize: "0.78rem",
            }}
          >
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />

            {/* Desktop */}
            <span className="hidden sm:inline">{phone.display}</span>

            {/* Mobile */}
            <span className="sm:hidden">Appeler</span>
          </a>
        </motion.div>

      </div>

    </section>
  );
}