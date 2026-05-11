"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
} from "lucide-react";

import Urgence from "@/components/Urgence";
import { siteConfig } from "@/lib/site";
import ContactForm from "./contact-form";

export default function ContactClient() {
  const contactItems = [
    {
      icon: Phone,
      label: "Téléphone · 24/7",
      value: siteConfig.contact.phone.display,
      href: `tel:${siteConfig.contact.phone.raw}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}`,
    },
    {
      icon: Clock,
      label: "Horaires boutique",
      value: "Lun–Sam 9h–19h · Dépannage 24/7",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f0e6] overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="navy-section relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[120px]" />
          <div className="absolute right-[-5%] bottom-[-10%] h-96 w-96 rounded-full bg-white/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 animate-pulse rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/75">
                Contact & Assistance
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Besoin d’un serrurier
              <span className="mt-2 block italic text-[#d4af37]">
                ou d’un dépannage urgent ?
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Intervention rapide 24h/24 et 7j/7 à Suresnes et dans les Hauts-de-Seine.
              Contactez-nous pour un dépannage immédiat ou un devis gratuit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-28 text-[#1c2430]">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 w-full">

          {/* CRITICAL FIX: min-w-0 prevents grid overflow */}
          <div className="grid gap-12 lg:grid-cols-12 items-start w-full min-w-0">

            {/* CONTACT INFO CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 w-full min-w-0"
            >
              <div className="w-full min-w-0 rounded-[2rem] border border-white/60 bg-white/80 p-6 sm:p-8 shadow-2xl shadow-black/5 backdrop-blur-2xl">

                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                  ◆ Assistance serrurerie
                </p>

                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#162033]">
                  Intervention rapide et devis transparent.
                </h2>

                <div className="mt-6 flex items-center gap-3 text-sm font-medium border border-[#d4af37]/20 bg-[#d4af37]/5 rounded-xl px-4 py-3 text-[#1c2430]">
                  <AlertCircle className="h-5 w-5 text-[#d4af37]" />
                  Disponible 24h/24 – 7j/7
                </div>

                <div className="mt-10 space-y-8">

                  {contactItems.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4 min-w-0">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#1c2430]/5 bg-white shadow-sm text-[#d4af37]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1c2430]/40">
                          {label}
                        </span>

                        {href ? (
                          <a
                            href={href}
                            className="mt-1 font-serif text-lg sm:text-xl font-medium wrap-break-word hover:text-[#d4af37] transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="mt-1 font-serif text-lg sm:text-xl font-medium wrap-break-word">
                            {value}
                          </span>
                        )}
                      </div>

                    </div>
                  ))}

                </div>
              </div>
            </motion.div>

            {/* FORM SECTION */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 w-full min-w-0"
            >
              <Suspense fallback={
                <div className="h-96 w-full animate-pulse rounded-[2rem] bg-black/5" />
              }>
                <ContactForm />
              </Suspense>
            </motion.div>

          </div>
        </div>
      </section>

      <Urgence />
    </main>
  );
}