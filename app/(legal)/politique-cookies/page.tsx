import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Politique de cookies | Multiservices de la Paix",
  description:
    "Politique de gestion des cookies conforme RGPD pour Multiservices de la Paix.",
};

export default function CookiesPolicyPage() {
  return (
    <main className="navy-section text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">

        {/* HEADER */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-gold">
          Politique de cookies
        </h1>

        <p className="mt-4 text-white/70 leading-relaxed">
          Cette politique explique comment le site{" "}
          <span className="text-white font-medium">
            Multiservices de la Paix
          </span>{" "}
          utilise des cookies et technologies similaires.
        </p>

        {/* SECTION 1 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-medium text-white">
            1. Qu’est-ce qu’un cookie ?
          </h2>

          <p className="text-white/70 leading-relaxed">
            Un cookie est un petit fichier stocké sur votre appareil lors de la
            visite d’un site internet. Il permet de reconnaître votre navigateur
            et d’améliorer votre expérience utilisateur.
          </p>
        </section>

        {/* SECTION 2 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-medium text-white">
            2. Cookies utilisés sur ce site
          </h2>

          <p className="text-white/70 leading-relaxed">
            Nous utilisons différents types de cookies :
          </p>

          <ul className="list-disc pl-5 text-white/70 space-y-2">
            <li>
              <span className="text-white">Cookies essentiels :</span> nécessaires
              au fonctionnement du site.
            </li>
            <li>
              <span className="text-white">Cookies analytiques :</span> mesure
              d’audience et amélioration des performances.
            </li>
            <li>
              <span className="text-white">Cookies de préférences :</span>{" "}
              mémorisation de vos choix utilisateur.
            </li>
          </ul>
        </section>

        {/* SECTION 3 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-medium text-white">
            3. Consentement
          </h2>

          <p className="text-white/70 leading-relaxed">
            Lors de votre première visite, un bandeau cookies vous permet de :
          </p>

          <ul className="list-disc pl-5 text-white/70 space-y-2">
            <li>Accepter tous les cookies</li>
            <li>Refuser les cookies non essentiels</li>
            <li>Personnaliser vos préférences</li>
          </ul>

          <p className="text-white/70 leading-relaxed">
            Vous pouvez modifier votre consentement à tout moment.
          </p>
        </section>

        {/* SECTION 4 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-medium text-white">
            4. Gestion des cookies
          </h2>

          <p className="text-white/70 leading-relaxed">
            Vous pouvez configurer votre navigateur pour bloquer ou supprimer les
            cookies. Toutefois, certaines fonctionnalités du site peuvent être
            limitées.
          </p>
        </section>

        {/* SECTION 5 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-medium text-white">
            5. Contact
          </h2>

          <p className="text-white/70 leading-relaxed">
            Pour toute question relative aux cookies :
          </p>

          <div className="mt-3 space-y-2 text-white/80">
            <p>
              📧{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-gold hover:opacity-80"
              >
                {siteConfig.contact.email}
              </a>
            </p>

            <p>
              📍 {siteConfig.contact.address.full}
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