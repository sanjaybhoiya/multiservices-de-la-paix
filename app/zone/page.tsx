import type { Metadata } from "next";

import ZoneClient from "./zone-client";

/* ================= SEO ================= */

export const metadata: Metadata = {
  title:
    "Zones d’intervention | Serrurier Paris & Île-de-France 24h/24",
    
  description:
    "Intervention rapide en serrurerie à Paris, Suresnes, Hauts-de-Seine et toute l’Île-de-France. Dépannage urgent 24h/24 pour particuliers et professionnels.",

  keywords: [
    "serrurier Suresnes",
    "serrurier Paris",
    "dépannage serrurerie Île-de-France",
    "serrurier Hauts-de-Seine",
    "urgence serrurerie 24h/24",
    "ouverture porte Paris",
    "serrurier 92",
  ],

  alternates: {
    canonical: "/zone-intervention",
  },

  openGraph: {
    title: "Zones d’intervention | Multiservices de la Paix",
    description:
      "Intervention rapide serrurerie et multiservices dans toute l’Île-de-France.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function ZonePage() {
  return <ZoneClient />;
}