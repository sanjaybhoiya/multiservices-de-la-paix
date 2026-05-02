"use client";

import Image from "next/image";
import storefront from "@/assets/storefront.jpg";
import { ShieldCheck, Clock, Truck, Store } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Artisans de confiance" },
  { icon: Clock, label: "Intervention 24/7" },
  { icon: Truck, label: "Déplacement rapide Île-de-France" },
  { icon: Store, label: "Boutique à Suresnes" },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="navy-section pb-2 relative overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 pt-14">

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-12 gap-14 items-center">

          {/* ================= LEFT ================= */}
          <div className="lg:col-span-7">

            {/* KEEP SAME */}
            <span className="eyebrow inline-flex items-center gap-2 border border-gold/30 px-4 py-1.5 rounded-full text-navy-foreground/80 animate-pulse">
              ◆ Suresnes · Île-de-France
            </span>

            {/* ✅ UPDATED TITLE (EXACT REQUESTED CONTENT STRUCTURE) */}
            <h1 className="display mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-navy-foreground leading-[1.05]">
              Votre spécialiste<br />
              multi-services<br />
              <span className="italic text-gold underline-gold">
                à votre service.
              </span>
            </h1>

            {/* ✅ UPDATED SUBTITLE (MATCHING YOUR REFERENCE TEXT) */}
            <p className="mt-6 max-w-xl text-navy-foreground/70 leading-relaxed">
              Serrurerie, cordonnerie et dépannage d’urgence. Une boutique de quartier au
              37 avenue Jean Jaurès, et une équipe qui se déplace 24/7 partout en Île-de-France
              quand vous en avez besoin.
            </p>

            {/* KEEP SAME */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href="tel:+33749491818" className="btn-gold rounded-sm">
                Appeler maintenant
              </a>

              <a
                href="#services"
                className="btn-ghost-gold inline-flex items-center gap-2 group"
              >
                Découvrir nos services
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* ================= STATS (CONTENT ONLY UPDATED) ================= */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">

              <div>
                <div className="font-serif text-3xl text-gold font-bold">24/7</div>
                <div className="text-xs text-navy-foreground/60 mt-1 leading-relaxed">
                  Dépannage<br />jour & nuit
                </div>
              </div>

              <div>
                <div className="font-serif text-2xl text-gold font-bold">
                  Île-de<br />France
                </div>
                <div className="text-xs text-navy-foreground/60 mt-1 leading-relaxed">
                  Intervention<br />rapide
                </div>
              </div>

              <div>
                <div className="font-serif text-3xl text-gold">8</div>
                <div className="text-xs text-navy-foreground/60 mt-1 leading-relaxed">
                  Métiers<br />réunis
                </div>
              </div>

            </div>

          </div>

          {/* ================= RIGHT IMAGE (UNCHANGED) ================= */}
          <div className="lg:col-span-5">

            <div className="relative group">

              <div className="absolute -inset-3 border border-gold/20 group-hover:border-gold/40 transition-all duration-500" />

              <div className="img-zoom relative overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src={storefront}
                  alt="Boutique Multiservices de la Paix"
                  priority
                  className="ken-burns w-full h-auto"
                />
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-navy text-navy-foreground text-[10px] tracking-[0.25em] uppercase px-4 py-2 border border-gold/30 float-y">
                37 avenue Jean Jaurès · Suresnes
              </div>

            </div>

          </div>

        </div>

        {/* ================= TRUST BAR (UNCHANGED) ================= */}
        <div className="mt-14 pt-2 border-t border-white/10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-[11px] uppercase tracking-[0.16em] text-navy-foreground/70">

            {trustItems.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 group"
              >
                <Icon className="h-4 w-4 text-accent transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125" />
                <span className="group-hover:text-gold transition-colors duration-300">
                  {label}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}