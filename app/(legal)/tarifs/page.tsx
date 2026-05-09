import { tarifs } from "@/lib/tarifs";

export const metadata = {
  title: "Tarifs indicatifs | Multiservices de la Paix",
  description: "Tarifs indicatifs des prestations de serrurerie, cordonnerie, vitrerie et multiservices.",
};

function Section({ title, children }: any) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-gold mb-4">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

export default function TarifsPage() {
  return (
    <main className="navy-section text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">

        {/* HEADER */}
        <h1 className="text-3xl font-semibold text-gold">
          Tarifs indicatifs
        </h1>

        <p className="mt-4 text-white/70">
          Les tarifs ci-dessous sont donnés à titre indicatif et peuvent varier selon la situation réelle sur place.
        </p>

        {/* DEPLACEMENT */}
        <Section title="Déplacement">
          <p className="text-white/80">
            {tarifs.deplacement.price} — {tarifs.deplacement.note}
          </p>
        </Section>

        {/* SERRURERIE */}
        <Section title="Serrurerie">
          {tarifs.serrurerie.map((item, i) => (
            <div key={i} className="flex justify-between border-b border-white/10 py-2">
              <span className="text-white/70">{item.label}</span>
              <span className="text-gold">{item.price}</span>
            </div>
          ))}
        </Section>

        {/* CLEFS */}
        <Section title="Reproduction de clés">
          {tarifs.clefs.map((item, i) => (
            <div key={i} className="flex justify-between border-b border-white/10 py-2">
              <span className="text-white/70">{item.label}</span>
              <span className="text-gold">{item.price}</span>
            </div>
          ))}
        </Section>

        {/* CORDONNERIE */}
        <Section title="Cordonnerie">
          {tarifs.cordonnerie.map((item, i) => (
            <div key={i} className="flex justify-between border-b border-white/10 py-2">
              <span className="text-white/70">{item.label}</span>
              <span className="text-gold">{item.price}</span>
            </div>
          ))}
        </Section>

        {/* VITRERIE */}
        <Section title="Vitrerie">
          {tarifs.vitrerie.map((item, i) => (
            <div key={i} className="flex justify-between border-b border-white/10 py-2">
              <span className="text-white/70">{item.label}</span>
              <span className="text-gold">{item.price}</span>
            </div>
          ))}
        </Section>

        {/* MULTISERVICES */}
        <Section title="Multiservices">
          {tarifs.multiservices.map((item, i) => (
            <div key={i} className="flex justify-between border-b border-white/10 py-2">
              <span className="text-white/70">{item.label}</span>
              <span className="text-gold">{item.price}</span>
            </div>
          ))}
        </Section>

        {/* DISCLAIMER */}
        <div className="mt-12 text-xs text-white/40 border-t border-white/10 pt-6">
          Les tarifs peuvent varier selon la difficulté, le matériel et les conditions d’intervention.
        </div>

      </div>
    </main>
  );
}