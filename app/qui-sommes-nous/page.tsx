import type { Metadata } from "next";
import AboutClient from "./about-client";

/* ================= SEO ================= */

export const metadata: Metadata = {
  title: "Serrurier à Suresnes | Multiservices de la Paix",
  description:
    "Serrurier à Suresnes et Hauts-de-Seine. Dépannage serrurerie 24/7, ouverture de porte, reproduction de clés, cordonnerie et vitrerie d'urgence.",
  keywords: [
    "serrurier Suresnes",
    "dépannage serrurerie 92",
    "ouverture porte Suresnes",
    "cordonnerie Suresnes",
    "serrurier Hauts-de-Seine",
    "serrurerie automobile Suresnes",
  ],
  openGraph: {
    title:
      "Qui sommes-nous | Multiservices de la Paix",
    description:
      "Entreprise artisanale spécialisée en serrurerie, dépannage et multiservices à Suresnes et en Île-de-France.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "/qui-sommes-nous",
  },
};

export default function Page() {
  return <AboutClient />;
}