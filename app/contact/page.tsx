import { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title:
    "Contact & Devis Gratuit | Serrurier Suresnes 24h/24 & Dépannage Urgent",
  description:
    "Besoin d’un serrurier en urgence à Suresnes ou dans les Hauts-de-Seine ? Contactez-nous pour un dépannage rapide 24h/24 et 7j/7, devis gratuit, intervention immédiate en serrurerie, ouverture de porte et vitrerie.",
};

export default function ContactPage() {
  return <ContactClient />;
}