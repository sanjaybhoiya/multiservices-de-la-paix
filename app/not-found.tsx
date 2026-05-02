import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream text-center px-6">

      <div className="max-w-md">

        {/* ERROR CODE */}
        <h1 className="text-6xl font-serif mb-4 text-gold">
          404
        </h1>

        {/* MESSAGE */}
        <p className="text-muted-foreground text-lg mb-2">
          Oops ! Cette page n’existe pas.
        </p>

        <p className="text-muted-foreground/70 text-sm mb-8">
          La page que vous recherchez a peut-être été déplacée ou supprimée.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-block text-gold underline hover:opacity-80 transition text-sm uppercase tracking-wider"
        >
          Retour à l’accueil
        </Link>

      </div>

    </div>
  );
}