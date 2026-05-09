import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Mentions légales | Multiservices de la Paix",
  description: "Mentions légales du site Multiservices de la Paix.",
};

export default function MentionsLegalesPage() {
  const { legal, contact, name } = siteConfig;

  return (
    <main className="navy-section text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-gold">
          Mentions légales
        </h1>

        <p className="mt-4 text-white/60 text-sm max-w-2xl">
          Conformément à la réglementation en vigueur, vous trouverez ci-dessous les informations légales relatives au site internet.
        </p>

        {/* ================= ÉDITEUR ================= */}
        <section className="mt-10">
          <h2 className="text-xl font-medium">Éditeur du site</h2>

          <div className="mt-3 text-white/70 space-y-2 leading-relaxed">
            <p className="text-white font-medium">{name}</p>
            <p>Serrurerie – Cordonnerie – Multiservices – Dépannage</p>

            <p>
              {contact.address.street}<br />
              {contact.address.postalCode} {contact.address.city}<br />
              {contact.address.country}
            </p>

            <p>📞 {contact.phone.display}</p>
            <p>📧 {contact.email}</p>

            <div className="pt-2 space-y-1">
              <p>{legal.siret}</p>
              <p>{legal.rcs}</p>
              <p>{legal.tva}</p>
            </div>

            <p className="pt-2">
              Directeur de la publication : <span className="text-white">{legal.director}</span>
            </p>
          </div>
        </section>

        {/* ================= HÉBERGEMENT ================= */}
        <section className="mt-12">
          <h2 className="text-xl font-medium">Hébergement</h2>

          <div className="mt-3 text-white/70 space-y-1">
            <p>{legal.host.name}</p>
            <p>{legal.host.company}</p>
            <p>{legal.host.address}</p>
          </div>
        </section>

        {/* ================= ACTIVITÉS ================= */}
        <section className="mt-12">
          <h2 className="text-xl font-medium">Activités</h2>

          <ul className="mt-3 list-disc pl-5 text-white/70 space-y-1">
            {legal.activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* ================= ASSURANCE ================= */}
        <section className="mt-12">
          <h2 className="text-xl font-medium">Assurance</h2>
          <p className="mt-3 text-white/70">{legal.insurance}</p>
        </section>

        {/* ================= PROPRIÉTÉ INTELLECTUELLE ================= */}
        <section className="mt-12">
          <h2 className="text-xl font-medium">Propriété intellectuelle</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            L’ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques, vidéos, documents et structure)
            est protégé par le droit de la propriété intellectuelle.
            Toute reproduction, diffusion ou exploitation sans autorisation écrite est strictement interdite.
          </p>
        </section>

        {/* ================= RESPONSABILITÉ ================= */}
        <section className="mt-12">
          <h2 className="text-xl font-medium">Responsabilité</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Multiservices de la Paix s’efforce de fournir des informations fiables et à jour.
            Toutefois, la société ne peut être tenue responsable des erreurs, omissions, interruptions ou dommages liés à l’utilisation du site.
          </p>
        </section>

        {/* FOOT NOTE */}
        <div className="mt-14 pt-6 border-t border-white/10 text-xs text-white/40">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </div>

      </div>
    </main>
  );
}