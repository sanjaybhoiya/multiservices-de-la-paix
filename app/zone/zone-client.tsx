"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Navigation,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

import Urgence from "@/components/Urgence";
import { siteConfig } from "@/lib/site";

const departments = [
  {
    id: "92",
    name: "Hauts-de-Seine",
    status: "Zone prioritaire",
    cities: [
      "Suresnes (atelier)",
      "Puteaux",
      "Nanterre",
      "Rueil-Malmaison",
      "Courbevoie",
      "Saint-Cloud",
      "Neuilly-sur-Seine",
      "Boulogne-Billancourt",
    ],
  },
  {
    id: "75",
    name: "Paris",
    status: "Dépannage express",
    cities: [
      "Paris 16e",
      "Paris 17e",
      "Paris 15e",
      "Paris 8e",
      "Paris 7e",
    ],
  },
  {
    id: "IDF",
    name: "Île-de-France",
    status: "Couverture régionale",
    cities: [
      "Versailles (78)",
      "Argenteuil (95)",
      "Bezons",
      "Houilles",
      "Levallois-Perret",
      "Saint-Denis (93)",
    ],
  },
];

export default function ZoneClient() {
  const { contact } = siteConfig;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="navy-section relative overflow-hidden py-28">
        {/* APPLE BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[-20%] h-125 w-125 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute right-[-10%] bottom-[-20%] h-125 w-125 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl animate-pulse">
              <span className="h-2 w-2 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/75">
                Zones d’intervention · Île-de-France
              </span>
            </div>

            <h1 className="display mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-navy-foreground">
              Intervention rapide
              <br />
              <span className="italic text-gold">
                Paris & Île-de-France
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-navy-foreground/70 leading-relaxed">
              Basés à {contact.address.city}, nous intervenons rapidement
              dans toute l’Île-de-France pour les urgences serrurerie,
              dépannage, ouverture de porte, reproduction de clés et services
              multiservices.
            </p>

            {/* APPLE STYLE STATS */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-3xl font-bold text-white">20-30</p>
                <p className="mt-1 text-sm text-white/60">
                  minutes d’arrivée
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="mt-1 text-sm text-white/60">
                  dépannage urgence
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-3xl font-bold text-white">IDF</p>
                <p className="mt-1 text-sm text-white/60">
                  couverture régionale
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative overflow-hidden bg-[#f5f0e6] py-28 text-[#1c2430]">
        {/* SOFT BACKGROUND */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-100 w-100 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-[#1c2430]/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-16 lg:grid-cols-12">
            {/* ================= LEFT ================= */}
            <div className="space-y-6 lg:col-span-7">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.3 },
                  }}
                  className="
                    group relative overflow-hidden
                    rounded-4xl
                    border border-white/40
                    bg-white/70
                    p-8
                    shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  "
                >
                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 bg-linear-to-br from-gold/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                          <MapPin className="h-6 w-6 text-gold" />
                        </div>

                        <div>
                          <span className="text-xs uppercase tracking-[0.25em] text-[#1c2430]/40">
                            {dept.id}
                          </span>

                          <h2 className="mt-1 text-2xl font-semibold">
                            {dept.name}
                          </h2>
                        </div>
                      </div>

                      <span className="rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                        {dept.status}
                      </span>
                    </div>

                    <div className="grid gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                      {dept.cities.map((city) => (
                        <div
                          key={city}
                          className="flex items-center gap-3 text-sm text-[#1c2430]/75"
                        >
                          <CheckCircle2 className="h-4 w-4 text-gold" />
                          {city}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ================= RIGHT ================= */}
            <div className="lg:sticky lg:top-28 lg:col-span-5">
              {/* MAP CARD */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="
                  group relative overflow-hidden
                  rounded-[36px]
                  border border-white/30
                  bg-white/60
                  p-3
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  backdrop-blur-xl
                "
              >
                {/* MAP */}
                <div className="relative aspect-square overflow-hidden rounded-[28px]">
                  <iframe
                    title="Carte Multiservices de la Paix"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=2.0%2C48.75%2C2.5%2C48.95&layer=mapnik&marker=48.8714%2C2.2273"
                    className="
                      absolute inset-0 h-full w-full
                      scale-[1.02]
                      grayscale-[0.15]
                      contrast-110
                      saturate-0
                      transition-all duration-700
                      group-hover:scale-105
                    "
                    loading="lazy"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A1128]/70 via-transparent to-transparent" />

                  {/* LOCATION BADGE */}
                  <div className="absolute left-6 top-6 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                      Atelier
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      {contact.address.full}
                    </p>
                  </div>

                  {/* FLOATING CARD */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                          Intervention
                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-white">
                          Paris & Île-de-France
                        </h3>

                        <p className="mt-1 text-sm text-white/65">
                          Dépannage rapide 24h/24
                        </p>
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-[#0A1128]">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* INFO CARDS */}
              <div className="mt-8 grid grid-cols-2 gap-5">
                <div className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                  <Navigation className="h-5 w-5 text-gold" />

                  <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#1c2430]/40">
                    Arrivée
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    20-30 min
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                  <Clock className="h-5 w-5 text-gold" />

                  <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#1c2430]/40">
                    Disponibilité
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    24h/24 · 7j/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Urgence />
    </>
  );
}