"use client";

import { motion } from "framer-motion";
import { Phone, Clock, ShieldCheck, MapPin } from "lucide-react";
import Urgence from "@/components/Urgence";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import Nous from "@/assets/equipe-multiservices-de-la-paix.png";

export default function AboutClient() {
  const { contact } = siteConfig;

  return (
    // FIX 1: Wrap in main with the page background color to eliminate gaps
    <main className=" bg-[#f5f0e6]">
      
      {/* ================= HERO ================= */}
      <section className="navy-section relative overflow-hidden py-20 sm:py-24 lg:py-32">
        {/* BACKGROUND GLOW - Optimized blur for production */}
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
            {/* BADGE - Fixed typo in class name */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/75">
                Qui sommes-nous
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Multiservices de la Paix
              <span className="mt-3 block italic text-[#d4af37]">
                serrurier & multiservices à Suresnes
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Serrurerie, dépannage d’urgence, cordonnerie et reproduction de clés
              à Suresnes et dans tout le département des Hauts-de-Seine.
            </p>

            <div className="mt-8">
              <a
                href={`tel:${contact.phone.raw}`}
                className="btn-gold inline-flex items-center gap-2 rounded-xl px-6 py-4 font-semibold shadow-xl transition-transform hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                {contact.phone.display}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      {/* FIX 2: Removed overflow-hidden to ensure smooth scrolling/sticky flow */}
      <section className="relative py-16 sm:py-24 lg:py-28 text-[#1c2430]">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="rounded-[2.5rem] border border-white/60 bg-white/80 p-8 shadow-2xl shadow-black/5 backdrop-blur-2xl sm:p-10 lg:p-14">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                  ◆ Artisan serrurier certifié FMSD
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl text-[#162033]">
                  Un service rapide, fiable et transparent.
                </h2>

                <div className="mt-8 space-y-6 text-base leading-relaxed text-[#1c2430]/80">
                  <p>
                    Bienvenue chez <strong>Multiservices de la Paix</strong>, votre artisan serrurier à Suresnes...
                  </p>
                  {/* ... Rest of your text ... */}
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    "Serrurier Suresnes 24h/24",
                    "Dépannage urgence rapide",
                    "Devis transparent",
                    "Intervention Hauts-de-Seine",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#1c2430]/5 bg-white/50 px-4 py-4 shadow-sm transition hover:border-[#d4af37]/30">
                      <ShieldCheck className="h-5 w-5 text-[#d4af37]" />
                      <span className="text-sm font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE (Sticky) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:sticky lg:top-28 space-y-6"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white p-3 shadow-2xl bg-white/40">
                <div className="relative aspect-4/5 overflow-hidden rounded-[2rem]">
                  <Image src={Nous} alt="Atelier" fill className="object-cover" priority />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#d4af37]" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Zone d’intervention</p>
                    </div>
                    <p className="mt-1 text-sm font-medium text-white">Suresnes · Hauts-de-Seine</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-3xl border border-white bg-white/80 p-6 shadow-xl shadow-black/5">
                  <Clock className="h-5 w-5 text-[#d4af37]" />
                  <p className="mt-3 text-sm font-bold">Horaires boutique</p>
                  <p className="text-sm text-[#1c2430]/60">Lun–Sam 9h–19h · Dépannage 24h/24</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO & URGENCE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            // ... your schema ...
          }),
        }}
      />
      
      {/* FINAL FIX: The Urgence component is now inside the main wrapper, ensuring no gap */}
      <Urgence />
    </main>
  );
}