import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Politique de confidentialité | Multiservices de la Paix",
  description:
    "Politique de confidentialité RGPD de Multiservices de la Paix.",
};

export default function PolitiqueConfidentialitePage() {
  const { contact } = siteConfig;

  return (
    <main className="navy-section text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-gold">
          Politique de confidentialité (RGPD)
        </h1>

        <p className="mt-4 text-white/70 leading-relaxed">
          Cette politique explique comment vos données personnelles sont collectées,
          utilisées et protégées par {siteConfig.name}.
        </p>

        {/* SECTION 1 */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">1. Données collectées</h2>
          <ul className="list-disc pl-5 text-white/70 space-y-1">
            <li>Nom et prénom</li>
            <li>Numéro de téléphone</li>
            <li>Adresse e-mail</li>
            <li>Adresse postale (si nécessaire)</li>
            <li>Messages envoyés via les formulaires</li>
            <li>Données de navigation et cookies</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">2. Utilisation des données</h2>
          <p className="text-white/70 leading-relaxed">
            Les données sont utilisées uniquement pour :
          </p>
          <ul className="list-disc pl-5 text-white/70 space-y-1">
            <li>Répondre aux demandes des clients</li>
            <li>Établir des devis</li>
            <li>Gérer les interventions et prestations</li>
            <li>Améliorer les services proposés</li>
          </ul>
          <p className="text-white/70 mt-2">
            Aucune donnée n’est vendue ou transmise à des tiers.
          </p>
        </section>

        {/* SECTION 3 */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">3. Conservation des données</h2>
          <p className="text-white/70 leading-relaxed">
            Les données sont conservées uniquement pour la durée nécessaire aux finalités
            pour lesquelles elles ont été collectées et conformément à la réglementation en vigueur.
          </p>
        </section>

        {/* SECTION 4 */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">4. Sécurité des données</h2>
          <p className="text-white/70 leading-relaxed">
            Nous mettons en place des mesures techniques et organisationnelles afin de protéger
            vos données contre toute perte, accès non autorisé ou divulgation.
          </p>
        </section>

        {/* SECTION 5 */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">5. Droits des utilisateurs</h2>
          <p className="text-white/70 leading-relaxed">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-5 text-white/70 space-y-1">
            <li>Droit d’accès</li>
            <li>Droit de rectification</li>
            <li>Droit de suppression</li>
            <li>Droit d’opposition</li>
            <li>Droit à la limitation du traitement</li>
          </ul>

          <p className="text-white/70 mt-3">
            Vous pouvez exercer ces droits à l’adresse suivante :
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="text-gold hover:opacity-80"
          >
            {contact.email}
          </a>
        </section>

        {/* SECTION 6 */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">6. Cookies</h2>
          <p className="text-white/70 leading-relaxed">
            Le site utilise des cookies pour améliorer l’expérience utilisateur,
            mesurer l’audience et assurer le bon fonctionnement des services.
          </p>

          <p className="text-white/70 mt-2">
            Vous pouvez gérer vos préférences via le bandeau cookies.
          </p>
        </section>

        {/* SECTION 7 */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-medium">7. Contact</h2>

          <div className="text-white/70 space-y-1">
            <p>{siteConfig.name}</p>
            <p>{contact.address.full}</p>
            <p>
              📞 <span className="text-white">{contact.phone.display}</span>
            </p>
            <p>
              📧{" "}
              <a href={`mailto:${contact.email}`} className="text-gold">
                {contact.email}
              </a>
            </p>
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