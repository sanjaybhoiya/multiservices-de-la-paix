export const metadata = {
  title: "Politique de confidentialité | Multiservices de la Paix",
  description: "Politique de confidentialité et gestion des données personnelles",
};

export default function ConfidentialitePage() {
  return (
    <main className="bg-cream py-20">
      <div className="mx-auto max-w-4xl px-6 space-y-10 text-sm text-navy-foreground/80">

        {/* ================= TITLE ================= */}
        <h1 className="text-3xl font-serif text-foreground">
          Politique de confidentialité
        </h1>

        <p className="text-muted-foreground">
          Dernière mise à jour : {new Date().getFullYear()}
        </p>

        {/* ================= INTRO ================= */}
        <section className="space-y-2">
          <h2 className="text-lg font-serif text-gold">Introduction</h2>
          <p>
            Cette politique de confidentialité explique comment Multiservices de la Paix
            collecte, utilise et protège vos données personnelles lorsque vous utilisez
            notre site web.
          </p>
        </section>

        {/* ================= DATA COLLECTED ================= */}
        <section className="space-y-2">
          <h2 className="text-lg font-serif text-gold">
            Données collectées
          </h2>
          <p>
            Nous collectons uniquement les informations que vous nous transmettez via le formulaire de contact :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Message envoyé</li>
          </ul>
        </section>

        {/* ================= PURPOSE ================= */}
        <section className="space-y-2">
          <h2 className="text-lg font-serif text-gold">
            Utilisation des données
          </h2>
          <p>
            Les données sont utilisées uniquement pour :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Répondre à vos demandes</li>
            <li>Vous recontacter concernant nos services</li>
            <li>Assurer le suivi client</li>
          </ul>
        </section>

        {/* ================= STORAGE ================= */}
        <section className="space-y-2">
          <h2 className="text-lg font-serif text-gold">
            Conservation des données
          </h2>
          <p>
            Les données sont conservées pour une durée maximale de 24 mois,
            sauf obligation légale contraire.
          </p>
        </section>

        {/* ================= SHARING ================= */}
        <section className="space-y-2">
          <h2 className="text-lg font-serif text-gold">
            Partage des données
          </h2>
          <p>
            Nous ne vendons, ne louons et ne partageons pas vos données personnelles
            avec des tiers.
          </p>
        </section>

        {/* ================= RIGHTS ================= */}
        <section className="space-y-2">
          <h2 className="text-lg font-serif text-gold">
            Vos droits (RGPD)
          </h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD),
            vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Droit d’accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit de suppression</li>
            <li>Droit d’opposition</li>
          </ul>
          <p className="mt-2">
            Pour exercer ces droits : contact@multiservicesdelapaix.fr
          </p>
        </section>

        {/* ================= COOKIES ================= */}
        <section className="space-y-2">
          <h2 className="text-lg font-serif text-gold">Cookies</h2>
          <p>
            Le site peut utiliser des cookies techniques nécessaires au bon fonctionnement.
            Aucun cookie publicitaire n’est utilisé sans votre consentement.
          </p>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="space-y-2">
          <h2 className="text-lg font-serif text-gold">Contact</h2>
          <p>
            Pour toute question concernant vos données personnelles :
            <br />
            <span className="text-gold font-medium">
              contact@multiservicesdelapaix.fr
            </span>
          </p>
        </section>

      </div>
    </main>
  );
}