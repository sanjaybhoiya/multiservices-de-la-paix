import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Conditions Générales de Vente | Multiservices de la Paix",
  description:
    "Conditions Générales de Vente de Multiservices de la Paix (serrurerie, dépannage, cordonnerie, vitrerie et multiservices).",
};

export default function CGVPage() {
  const { contact, name } = siteConfig;

  return (
    <main className="navy-section text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-gold">
          Conditions Générales de Vente (CGV)
        </h1>

        <p className="mt-4 text-white/70 leading-relaxed">
          Les présentes Conditions Générales de Vente définissent les règles applicables
          aux prestations proposées par {name}.
        </p>

        {/* OBJET */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">1. Objet</h2>
          <p className="text-white/70 leading-relaxed">
            Les présentes CGV encadrent les prestations de serrurerie, dépannage,
            cordonnerie, vitrerie et multiservices proposées par l’entreprise.
          </p>
        </section>

        {/* PRESTATIONS */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">2. Prestations proposées</h2>

          <ul className="list-disc pl-5 text-white/70 space-y-1">
            <li>Serrurerie générale et dépannage</li>
            <li>Ouverture de porte</li>
            <li>Remplacement de serrure et cylindre</li>
            <li>Reproduction de clés</li>
            <li>Cordonnerie</li>
            <li>Vitrerie</li>
            <li>Multiservices et petits travaux</li>
            <li>Interventions d’urgence</li>
          </ul>
        </section>

        {/* DEVIS */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">3. Devis</h2>
          <p className="text-white/70 leading-relaxed">
            Un devis peut être établi avant intervention selon la nature de la prestation.
            Toute validation de devis implique acceptation des prix et des travaux.
          </p>
        </section>

        {/* TARIFS */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">4. Tarifs et déplacements</h2>

          <p className="text-white/70 leading-relaxed">
            Les tarifs sont exprimés en euros TTC et peuvent varier selon la situation.
          </p>

          <ul className="list-disc pl-5 text-white/70 space-y-1 mt-2">
            <li>Frais de déplacement : à partir de 50€ TTC</li>
            <li>Majoration nuit / week-end / jours fériés possible</li>
            <li>Tarifs variables selon urgence et complexité</li>
          </ul>
        </section>

        {/* INTERVENTION */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">5. Délais d’intervention</h2>
          <p className="text-white/70 leading-relaxed">
            Les délais sont donnés à titre indicatif et peuvent varier selon la circulation,
            la disponibilité et les conditions extérieures.
          </p>
        </section>

        {/* PAIEMENT */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">6. Paiement</h2>

          <p className="text-white/70 leading-relaxed">
            Le paiement est exigible immédiatement après intervention sauf accord préalable.
          </p>

          <ul className="list-disc pl-5 text-white/70 space-y-1 mt-2">
            <li>Carte bancaire</li>
            <li>Espèces</li>
            <li>Virement bancaire</li>
          </ul>
        </section>

        {/* CLIENT OBLIGATIONS */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">7. Obligations du client</h2>

          <ul className="list-disc pl-5 text-white/70 space-y-1">
            <li>Fournir des informations exactes</li>
            <li>Être autorisé à demander l’intervention</li>
            <li>Permettre l’accès au lieu d’intervention</li>
          </ul>
        </section>

        {/* RESPONSIBILITY */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">8. Responsabilité</h2>

          <p className="text-white/70 leading-relaxed">
            L’entreprise ne peut être tenue responsable des dommages liés à une installation
            défectueuse, une usure existante ou une mauvaise utilisation des équipements.
          </p>
        </section>

        {/* FORCE MAJEURE */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">9. Force majeure</h2>

          <p className="text-white/70 leading-relaxed">
            L’entreprise n’est pas responsable en cas d’événement indépendant de sa volonté
            empêchant l’exécution des prestations.
          </p>
        </section>

        {/* MEDIATION */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">10. Médiation</h2>

          <p className="text-white/70 leading-relaxed">
            Conformément au Code de la consommation, le client peut recourir gratuitement à un
            service de médiation en cas de litige.
          </p>

          <p className="text-white/70 mt-2">
            CM2C – Centre de la Médiation de la Consommation
          </p>
        </section>

        {/* LITIGES */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">11. Litiges</h2>

          <p className="text-white/70 leading-relaxed">
            En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.
            À défaut, les tribunaux compétents sont ceux de Nanterre.
          </p>
        </section>

        {/* CONTACT */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">12. Contact</h2>

          <div className="text-white/70 space-y-1">
            <p>{name}</p>
            <p>{contact.address.full}</p>
            <p>📞 {contact.phone.display}</p>
            <p>📧 {contact.email}</p>
          </div>
        </section>

        {/* FOOT NOTE */}
        <div className="mt-14 pt-6 border-t border-white/10 text-xs text-white/40">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </div>

      </div>
    </main>
  );
}