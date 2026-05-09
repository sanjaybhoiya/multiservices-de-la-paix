import atelier from "@/assets/atelier.jpg";
import Image from "next/image";

export function Atelier() {
  return (
    <section id="atelier" className="bg-cream py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-6 reveal">

          <p className="eyebrow">◆ L'atelier</p>

          <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-5xl mt-4 text-foreground leading-tight">
            Un savoir-faire de quartier, <br className="hidden sm:block" />
            une disponibilité{" "}
            <span className="display-italic text-gold">de professionnels.</span>
          </h2>

          <div className="mt-5 md:mt-6 space-y-4 text-muted-foreground text-sm leading-relaxed max-w-xl">
            <p>
              Multiservices de la Paix, c'est Élie Haddad et son équipe. Quatre métiers complémentaires
              réunis dans une seule adresse à Suresnes : on vous dépanne, on vous conseille, on rend les
              clés et la paire de chaussures que vous étiez venu déposer tranquille.
            </p>
            <p>
              Notre promesse : un travail soigné, des tarifs clairs annoncés avant l'intervention, et une
              vraie disponibilité quand l'urgence frappe.
            </p>
          </div>

          {/* ================= STATS ================= */}
          <div className="mt-8 md:mt-10 grid grid-cols-2 gap-y-5 gap-x-6 md:gap-x-10 max-w-md">

            {[
              ["4", "métiers", "Sous un même toit"],
              ["24/24", "", "Dépannage d'urgence"],
              ["IDF", "", "Zone d'intervention"],
              ["1", "équipe", "Dédiée à vos projets"],
            ].map(([n, sub, desc]) => (
              <div
                key={desc}
                className="reveal hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="font-serif text-2xl sm:text-3xl text-gold font-bold leading-none">
                  {n}
                  {sub && (
                    <span className="text-foreground text-lg sm:text-2xl ml-1 font-semibold">
                      {sub}
                    </span>
                  )}
                </div>

                <div className="text-[11px] sm:text-xs text-muted-foreground mt-1">
                  {desc}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="lg:col-span-6 relative group reveal mt-8 lg:mt-0">

          {/* IMAGE */}
          <div className="img-zoom">
            <Image
              src={atelier}
              alt="Atelier de serrurerie et cordonnerie"
              width={1024}
              height={1024}
              priority
              className="w-full h-auto rounded-sm shadow-(--shadow-card) transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          {/* BORDER EFFECT */}
          <div className="absolute inset-0 border border-gold/10 group-hover:border-gold/30 transition-all duration-500 pointer-events-none rounded-sm" />

          {/* ================= QUOTE BOX ================= */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 max-w-50 sm:max-w-60 bg-[#162033]/95 backdrop-blur-md text-white p-4 sm:p-5 rounded-sm shadow-(--shadow-card) z-20 float-y">

            <div className="font-serif text-gold text-base sm:text-lg leading-tight">
              Élie Haddad
            </div>

            <p className="text-[11px] sm:text-xs text-white/70 mt-2 leading-relaxed">
              « Je tiens cette boutique avec la même exigence depuis le premier jour :
              faire bien, tenir parole, rester disponible. »
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}