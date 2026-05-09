import type { Metadata } from "next";
import ServicesClient from "./services-client";
import { SERVICES } from "@/data/service";

/* ================= SEO (EXPANDED ÎLE-DE-FRANCE TARGETING) ================= */

export const metadata: Metadata = {
  title:
    "Serrurier Île-de-France | Dépannage 24h/24, ouverture de porte, clés & multiservices",
  description:
    "Serrurier en Île-de-France disponible 24h/24 : ouverture de porte, dépannage serrurerie, reproduction de clés, serrurerie automobile et cordonnerie. Intervention rapide dans Paris et toute la région parisienne en 20 à 30 minutes.",
  keywords: [
    "serrurier Île-de-France",
    "serrurier Paris",
    "serrurier 92",
    "dépannage serrurier IDF",
    "ouverture de porte Paris",
    "serrurerie urgence 24h/24",
    "reproduction de clés Île-de-France",
    "serrurier Hauts-de-Seine",
  ],
  openGraph: {
    title: "Serrurier Île-de-France - Dépannage rapide 24h/24",
    description:
      "Intervention rapide en serrurerie sur Paris et toute l’Île-de-France.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient services={SERVICES} />;
}