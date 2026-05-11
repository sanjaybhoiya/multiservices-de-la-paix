"use client";

import Image from "next/image";
import storefront from "@/assets/storefront.webp";
import { ShieldCheck, Clock, Truck, Store, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

const trustItems = [
  { icon: ShieldCheck, label: "Artisan local à Suresnes" },
  { icon: Clock, label: "Intervention 20–30 min" },
  { icon: Truck, label: "Déplacement rapide IDF" },
  { icon: Store, label: "Devis avant intervention" },
];

export default function Hero() {
  const { phone, address } = siteConfig.contact;

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

            {/* SEO LOCATION BADGE */}
            {/* <span className="eyebrow inline-flex items-center gap-2 border border-gold/30 px-4 py-1.5 rounded-full text-navy-foreground/80 animate-pulse">
              ◆ Serrurier Suresnes · Île-de-France
            </span> */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl animate-pulse">
              <span className="h-2 w-2 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/75">
                Serrurier Suresnes · Île-de-France
              </span>
            </div>

            {/* H1 (PREMIUM + NOT OVERLOADED) */}
            <h1 className="display mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground leading-[1.05]">
              Serrurier à{" "}
              <span className="text-gold">Suresnes</span> Intervention{" "}
              <span className="text-gold">24h/24</span>, 7j/7
            </h1>

            {/* H2 (LIGHT URGENCY) */}
            <h2 className="mt-4 text-xl md:text-2xl text-navy-foreground/80 font-medium">
              Porte claquée, serrure bloquée ou clé cassée ? Intervention en 20–30 min.
            </h2>

            {/* PARAGRAPH (SHORTENED BUT SEO SAFE) */}
            <p className="mt-6 max-w-xl text-navy-foreground/70 leading-relaxed">
              Artisan installé à <strong>{address.street}, {address.city}</strong>, nous intervenons en urgence pour l’ouverture de porte,
              le dépannage serrurerie, la reproduction de clés et la cordonnerie. Devis clair avant intervention.
            </p>

            {/* ================= CTA ================= */}
            <div className="mt-8 flex flex-wrap items-center gap-5">

              {/* CALL */}
              <a
                href={`tel:${phone.raw}`}
                className="btn-gold rounded-sm"
              >
                Appeler maintenant
              </a>

              {/* WHATSAPP */}
              <a
                href={siteConfig.contact.phone.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-gold inline-flex items-center gap-2 group"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

            {/* ================= STATS (SEO + TRUST ALIGNMENT) ================= */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">

              <div>
                <div className="font-serif text-3xl text-gold font-bold">
                  24/7
                </div>
                <div className="text-xs text-navy-foreground/60 mt-1 leading-relaxed">
                  Dépannage d'urgence,<br />jour & nuit
                </div>
              </div>

              <div>
                <div className="font-serif text-2xl text-gold font-bold">
                  92 + IDF
                </div>
                <div className="text-xs text-navy-foreground/60 mt-1 leading-relaxed">
                  Intervention<br />rapide
                </div>
              </div>

              <div>
                <div className="font-serif text-3xl text-gold">5+</div>
                <div className="text-xs text-navy-foreground/60 mt-1 leading-relaxed">
                  Services<br />pro
                </div>
              </div>

            </div>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="lg:col-span-5">

            <div className="relative group">

              <div className="absolute -inset-3 border border-gold/20 group-hover:border-gold/40 transition-all duration-500" />

              <div className="img-zoom relative overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src={storefront}
                  alt="Serrurier Multiservices de la Paix à Suresnes"
                  width={1200}
                  height={896}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  priority
                  className="ken-burns w-full h-auto"
                />
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-navy text-navy-foreground text-[10px] tracking-[0.25em] uppercase px-4 py-2 border border-gold/30 float-y">
                {address.street} · {address.city}
              </div>

            </div>

          </div>

        </div>

        {/* ================= TRUST BAR ================= */}
        <div className="mt-14 pt-2 border-t border-white/10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-[11px] uppercase tracking-[0.16em] text-navy-foreground/70">

            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 group">
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