"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const { phone } = siteConfig.contact;

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-3xl px-6 text-center">

        {/* EYEBROW */}
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
          ◆ Contact
        </p>

        {/* TITLE */}
        <h2 className="mt-4 text-3xl md:text-4xl font-serif text-foreground leading-tight">
          Assistance, dépannage,{" "}
          <span className="italic text-gold font-medium underline-gold">
            demande de devis.
          </span>
        </h2>

        {/* SUBTITLE */}
        <p className="mt-5 text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Intervention rapide en Île-de-France. Devis gratuit, réponse immédiate par téléphone ou formulaire.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">

          <a
            href={`tel:${phone.raw}`}
            aria-label={`Appeler ${phone.display}`}
            className="btn-gold rounded-sm inline-flex items-center justify-center px-6 py-3 w-full sm:w-auto"
          >
            <Phone className="mr-2 h-4 w-4" />
            Appeler maintenant
          </a>

          <Link
            href="/contact?type=devis"
            className="btn-ghost-gold rounded-sm inline-flex items-center justify-center px-6 py-3 w-full sm:w-auto"
          >
            Demander un devis
          </Link>

        </div>

      </div>
    </section>
  );
}