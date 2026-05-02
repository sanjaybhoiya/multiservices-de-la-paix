import {
  ShieldCheck,
  Car,
  Footprints,
  KeyRound,
  SquarePen,
  Watch,
  Square,
  Hammer,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  items: string[];

  accessories?: {
    title?: string;
    items: string[];
  };
};

export const SERVICES: Service[] = [
  {
    slug: "serrurerie",
    icon: ShieldCheck,
    title: "Serrurerie",
    subtitle: "Habitation & locaux",
    items: [
      "Ouverture de porte (claquée, verrouillée)",
      "Remplacement de serrure (toutes marques)",
      "Installation de serrures de sécurité",
      "Reproduction de clés (simples, sécurisées)",
      "Réparation de serrures",
      "Dépannage en urgence",
    ],
    accessories: {
      title: "◆ Accessoires en boutique",
      items: [
        "Cylindres",
        "Verrous",
        "Cadenas",
        "Poignées",
        "Barillets",
        "Produits d’entretien",
      ],
    },
  },

  {
    slug: "serrurerie-automobile",
    icon: Car,
    title: "Serrurerie automobile",
    subtitle: "Clés & dépannage véhicule",
    items: [
      "Reproduction de clés voiture",
      "Programmation de clés électroniques",
      "Ouverture de véhicule",
      "Remplacement de coque / télécommande",
      "Dépannage perte de clés",
    ],
    accessories: {
      title: "◆ Accessoires en boutique",
      items: ["Coques de clés", "Piles", "Télécommandes", "Boîtiers"],
    },
  },

  {
    slug: "cordonnerie",
    icon: Footprints,
    title: "Cordonnerie",
    subtitle: "Chaussures & maroquinerie",
    items: [
      "Réparation de chaussures (semelles, talons…)",
      "Entretien et rénovation cuir",
      "Réparation maroquinerie (sacs, ceintures)",
      "Remplacement fermetures éclair",
    ],
    accessories: {
      title: "◆ Accessoires en boutique",
      items: ["Lacets", "Semelles", "Produits d’entretien cuir", "Cirages"],
    },
  },

  {
    slug: "cles-reproduction",
    icon: KeyRound,
    title: "Clés & reproduction",
    subtitle: "Tous types de clés",
    items: [
      "Duplication de clés tous types",
      "Clés spéciales et techniques",
      "Clés sécurisées",
    ],
  },

  {
    slug: "plaques-gravure",
    icon: SquarePen,
    title: "Plaques & gravure",
    subtitle: "Sur-mesure en atelier",
    items: [
      "Plaques d’immatriculation (auto, moto)",
      "Gravure de plaques (boîte aux lettres, portes…)",
      "Tampons professionnels personnalisés",
    ],
  },

  {
    slug: "multiservices",
    icon: Watch,
    title: "Multiservices",
    subtitle: "Réparations rapides",
    items: [
      "Remplacement de piles de montres",
      "Ajustement et remplacement de bracelets",
      "Petites réparations du quotidien",
    ],
  },

  {
    slug: "vitrerie",
    icon: Square,
    title: "Vitrerie",
    subtitle: "Dépannage uniquement",
    items: [
      "Remplacement de vitres cassées",
      "Intervention rapide en cas de bris",
      "Mise en sécurité",
    ],
  },

  {
    slug: "depannage-urgences",
    icon: Hammer,
    title: "Dépannage & urgences",
    subtitle: "Service réactif 24/7",
    items: [
      "Intervention rapide serrurerie",
      "Dépannage habitation & local",
      "Service réactif et professionnel",
    ],
  },
];

export const getServiceBySlug = (slug?: string | null) =>
  SERVICES.find((s) => s.slug === slug);