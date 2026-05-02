"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, ShieldCheck, Globe, CheckCircle2 } from "lucide-react";
import Urgence from "@/components/Urgence";

const departments = [
  {
    id: "92",
    name: "Hauts-de-Seine",
    status: "Zone Prioritaire",
    cities: ["Suresnes (Siège)", "Puteaux", "Nanterre", "Rueil-Malmaison", "Courbevoie", "Saint-Cloud", "Neuilly-sur-Seine", "Boulogne-Billancourt"]
  },
  {
    id: "75",
    name: "Paris",
    status: "Dépannage Express",
    cities: ["Paris 16e", "Paris 17e", "Paris 15e", "Paris 8e", "Paris 7e"]
  },
  {
    id: "IDF",
    name: "Île-de-France",
    status: "Couverture Totale",
    cities: ["Versailles (78)", "Argenteuil (95)", "Bezons", "Houilles", "Levallois-Perret", "Saint-Denis (93)"]
  }
];

export default function ZonePage() {
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
                ◆ Secteurs d'intervention
              </span>

              <h1 className="display mt-6 text-5xl md:text-6xl font-bold text-navy-foreground leading-[1.05]">
                Une présence réactive dans<br />
                <span className="italic text-gold underline-gold">
                  toute l'Île-de-France.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-navy-foreground/70 leading-relaxed">
                Basés au 37 avenue Jean Jaurès à Suresnes, nous rayonnons sur l'ensemble de la région 
                parisienne. Notre position stratégique nous permet d'intervenir en urgence pour vos 
                besoins de serrurerie, tout en restant votre artisan de proximité pour vos projets.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= CONTENT SECTION (CREAM BACKGROUND) ================= */}
      <section className="py-28 bg-[#f5f0e6] text-[#1c2430] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT: CITY CARDS */}
            <div className="lg:col-span-7 space-y-6">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-sm shadow-sm border border-[#1c2430]/5 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-2xl font-bold text-gold opacity-40">{dept.id}</span>
                      <h3 className="font-bold text-xl uppercase tracking-tight">{dept.name}</h3>
                    </div>
                    <span className="text-[10px] font-bold text-[#1c2430]/40 uppercase tracking-widest">{dept.status}</span>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                    {dept.cities.map((city) => (
                      <div key={city} className="flex items-center gap-2 text-sm text-[#1c2430]/70">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                        {city}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT: STICKY MAP & INFO */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="relative group">
                {/* Decorative border matching Hero Image style */}
                <div className="absolute -inset-3 border border-gold/10 group-hover:border-gold/20 transition-all duration-500" />
                
                <div className="relative aspect-square overflow-hidden rounded-sm shadow-2xl bg-[#0A1128]">
                  <iframe
                    title="Carte Multiservices de la Paix"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=2.0%2C48.75%2C2.5%2C48.95&layer=mapnik&marker=48.8714%2C2.2273"
                    className="absolute inset-0 w-full h-full grayscale-[0.6] contrast-125 opacity-70"
                    loading="lazy"
                  />
                  
                  {/* Marker Label Label style matching Hero */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#0A1128] text-white text-[10px] tracking-[0.25em] uppercase px-4 py-2 border border-gold/30 shadow-xl whitespace-nowrap">
                    Atelier : Suresnes (92150)
                  </div>
                </div>
              </div>

              {/* Bottom detail card */}
              <div className="mt-12 grid grid-cols-2 gap-6 p-8 bg-white border border-[#1c2430]/5 shadow-sm">
                <div>
                  <Navigation className="h-5 w-5 text-gold mb-2" />
                  <p className="text-[10px] font-bold uppercase text-gray-400">Arrivée</p>
                  <p className="font-bold text-sm">20-30 min (92)</p>
                </div>
                <div>
                  <Clock className="h-5 w-5 text-gold mb-2" />
                  <p className="text-[10px] font-bold uppercase text-gray-400">Urgence</p>
                  <p className="font-bold text-sm">24h/24 - 7j/7</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FULLY SEPARATE ================= */}
      <div className="w-full">
        <Urgence />
      </div>
    </>
  );
}