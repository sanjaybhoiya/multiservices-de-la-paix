export const metadata = {
  title: "Mentions légales | Multiservices de la Paix",
  description: "Informations légales du site Multiservices de la Paix",
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-cream py-20">
      <div className="mx-auto max-w-4xl px-6 space-y-10 text-sm text-navy-foreground/80">

        {/* ================= TITLE ================= */}
        <h1 className="text-3xl font-serif text-foreground">
          Mentions légales
        </h1>

        <p className="text-muted-foreground">
          Conformément à la loi pour la confiance dans l’économie numérique (LCEN).
        </p>

        {/* ================= ÉDITEUR ================= */}
        <section className="space-y-2">
          <h2 className="text-lg font-serif text-gold">
            Éditeur du site
          </h2>

          <p>
            Multiservices de la Paix<br />
            37 avenue Jean Jaurès<br />
            92150 Suresnes<br />
          </p>

          <p>
            Téléphone : 07 49 49 18 18<br />
            Email : contact@multiservicesdelapaix.fr
          </p>

          <p>
            Forme juridique : [À compléter]<br />
            SIRET : [À compléter]<br />
            RCS : [si applicable]
          </p>
        </section>

        {/* ================= RESPONSABLE ================= */}
        <section className="space-y-2">
          <h2 className="text-lg font-serif text-gold">
            Responsable de publication
          </h2>

          <p>
            [Nom du responsable légal de l’entreprise]
          </p>
        </section>

        {/* ================= HÉBERGEMENT ================= */}
        <section className="space-y-2">
          <h2 className="text-lg font-serif text-gold">
            Hébergement
          </h2>

          <p>
            Vercel Inc.<br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723<br />
            États-Unis<br />
            https://vercel.com
          </p>
        </section>

        {/* ================= PROPRIÉTÉ ================= */}
        <section className="space-y-2">
          <h2 className="text-lg font-serif text-gold">
            Propriété intellectuelle
          </h2>

          <p>
            L’ensemble du contenu du site (textes, images, logo, design)
            est la propriété exclusive de Multiservices de la Paix.
          </p>

          <p>
            Toute reproduction, distribution ou utilisation sans autorisation
            préalable est strictement interdite.
          </p>
        </section>

        {/* ================= RESPONSABILITÉ ================= */}
        <section className="space-y-2">
          <h2 className="text-lg font-serif text-gold">
            Responsabilité
          </h2>

          <p>
            L’éditeur s’efforce de fournir des informations fiables,
            mais ne peut garantir leur exactitude ou leur mise à jour.
          </p>

          <p>
            Il ne pourra être tenu responsable des dommages directs ou indirects
            liés à l’utilisation du site.
          </p>
        </section>

        {/* ================= LIENS ================= */}
        <section className="space-y-2">
          <h2 className="text-lg font-serif text-gold">
            Liens externes
          </h2>

          <p>
            Le site peut contenir des liens vers des sites externes.
            L’éditeur n’est pas responsable du contenu de ces sites.
          </p>
        </section>

      </div>
    </main>
  );
}