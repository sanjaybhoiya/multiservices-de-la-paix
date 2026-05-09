import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";

const villes = [
  "Suresnes", "Puteaux", "Courbevoie", "Rueil-Malmaison",
  "Nanterre", "Neuilly-sur-Seine", "Levallois-Perret", "La Défense",
  "Saint-Cloud", "Boulogne-Billancourt", "Paris 16e", "Paris 17e",
];

export function Zone() {

  const { address } = siteConfig.contact;

  return (
    <section id="zone" className="bg-cream py-24 relative overflow-hidden">

      {/* ambient premium glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center relative">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-6 reveal">

          <p className="eyebrow">◆ Zone d'intervention</p>

          <h2 className="display text-4xl md:text-6xl mt-4 text-foreground">
            Suresnes et toute{" "}
            <span className="text-gold italic font-medium underline-gold">
              l'Île-de-France.
            </span>
          </h2>

          <p className="mt-5 text-muted-foreground text-sm max-w-lg leading-relaxed">
            Basés au cœur de Suresnes, nous intervenons rapidement sur l'ensemble des communes
            proches et, pour les dépannages d'urgence, partout en Île-de-France.
          </p>

          {/* ================= TAGS ================= */}
          <div className="mt-8 flex flex-wrap gap-2">

            {villes.map((v, i) => (
              <span
                key={v}
                className={[
                  "px-4 py-2 text-xs tracking-wider rounded-sm border transition-all duration-300 cursor-default",
                  "hover:-translate-y-0.5 hover:shadow-sm",
                  i === 0
                    ? "bg-navy text-navy-foreground border-navy shadow-sm"
                    : "bg-background text-foreground/80 border-border hover:border-gold hover:text-foreground"
                ].join(" ")}
              >
                {v}
              </span>
            ))}

          </div>

        </div>

        {/* ================= RIGHT MAP ================= */}
        <div className="lg:col-span-6 reveal">

          <div className="relative aspect-4/3 rounded-sm overflow-hidden shadow-(--shadow-card) group">

            {/* MAP */}
            <iframe
              title={`Carte ${address.city}`}
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.20%2C48.84%2C2.27%2C48.88&layer=mapnik&marker=48.8714%2C2.2273"
              className="absolute inset-0 w-full h-full grayscale-65 contrast-90 scale-[1.02] group-hover:scale-[1.04] transition-transform duration-700"
              loading="lazy"
            />

            {/* soft cinematic overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />

            {/* CENTER LABEL */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-navy/95 text-navy-foreground px-4 py-2.5 text-xs tracking-[0.2em] uppercase border border-gold/40 shadow-(--shadow-card) flex items-center gap-2 backdrop-blur-md">

              <MapPin className="h-3.5 w-3.5 text-gold animate-pulse" />
              {address.street}

            </div>

            {/* FOOTER */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-navy-foreground bg-navy/85 backdrop-blur px-3 py-2 rounded-sm border border-white/5">

              <span>◆ {address.city} · {address.postalCode}</span>
              <span className="text-gold">Zoom · Reset</span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}