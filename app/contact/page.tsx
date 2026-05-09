import { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title:
    "Contact & Devis Gratuit | Serrurier & Vitrier Professionnel",
  description:
    "Besoin d'un dépannage d'urgence ou d'un devis gratuit ? Contactez-nous pour une intervention rapide 24h/24 et 7j/7 en serrurerie et vitrerie.",
};

export default function ContactPage() {
  return <ContactClient />;
}