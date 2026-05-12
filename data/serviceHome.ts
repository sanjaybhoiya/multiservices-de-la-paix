// export type ServiceItem = {
//   slug: string;
//   title: string;
//   description: string;
//   items: string[];
// };

// export const serviceHome: ServiceItem[] = [
//   {
//     slug: "serrurerie-habitation",
//     title: "Serrurerie habitation à Suresnes et en Île-de-France",
//     description:
//       "Intervention rapide pour ouverture de porte, remplacement de serrure et sécurisation après effraction.",
//     items: [
//       "Ouverture de porte",
//       "Porte claquée",
//       "Remplacement serrure",
//       "Cylindre européen",
//       "Serrure multipoints",
//       "Sécurisation après effraction",
//       "Dépannage rapide",
//       "Devis avant intervention",
//     ],
//   },

//   {
//     slug: "serrurerie-automobile",
//     title: "Serrurerie automobile et reproduction de clés voiture",
//     description:
//       "Intervention sur véhicules pour ouverture, reproduction et programmation de clés.",
//     items: [
//       "Ouverture véhicule fermé",
//       "Reproduction clé voiture",
//       "Double de clé",
//       "Programmation télécommande",
//       "Perte de clé",
//       "Intervention sur place selon véhicule",
//       "Carte grise et pièce d’identité obligatoires",
//     ],
//   },

//   {
//     slug: "cordonnerie",
//     title: "Cordonnerie et réparation chaussures à Suresnes",
//     description:
//       "Réparation complète de chaussures, baskets et articles en cuir.",
//     items: [
//       "Talons",
//       "Patins",
//       "Couture",
//       "Collage semelles",
//       "Réparation baskets",
//       "Entretien cuir",
//       "Réparation sacs et ceintures",
//     ],
//   },

//   {
//     slug: "vitrerie",
//     title: "Dépannage vitrerie et remplacement vitrage",
//     description:
//       "Remplacement de vitres cassées et sécurisation rapide des ouvertures.",
//     items: [
//       "Vitre cassée",
//       "Remplacement vitrage",
//       "Sécurisation provisoire",
//       "Miroirs sur mesure",
//       "Dépannage commerce et habitation",
//     ],
//   },

//   {
//     slug: "gravure-plaques",
//     title: "Plaques d’immatriculation et gravure minute",
//     description:
//       "Fabrication et gravure de plaques, tampons et badges personnalisés.",
//     items: [
//       "Plaques auto/moto",
//       "Gravure boîte aux lettres",
//       "Tampons",
//       "Badges",
//       "Justificatifs obligatoires selon prestation",
//     ],
//   },
// ];

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  items: string[];
  zone?: string;
  responseTime?: string;
  badges?: string[];
  trustStats?: { num: string; label: string }[];
  processSteps?: { title: string; text: string }[];
  faq?: { q: string; a: string }[];
  seoContent?: {
    col1: { heading: string; paragraphs: string[]; subsections?: { heading: string; text: string }[] };
    col2: { heading: string; paragraphs: string[]; subsections?: { heading: string; text: string }[] };
  };
};

export const serviceHome: ServiceItem[] = [
  {
    slug: "serrurerie-habitation",
    title: "Serrurier à Suresnes — rapide, certifié, sans surprise",
    description:
      "Ouverture de porte, remplacement de serrure ou sécurisation après effraction : intervention sous 30 min sur Suresnes et tout l'ouest parisien, 7 j/7.",
    zone: "Suresnes · Hauts-de-Seine · Île-de-France",
    badges: [
      "⚡ Intervention sous 30 min",
      "Devis avant travaux",
      "Serrurier agréé assurance",
      "7 j / 7 · 24 h / 24",
    ],
    trustStats: [
      { num: "+15 ans", label: "d'expérience à Suresnes" },
      { num: "30 min", label: "délai d'intervention moyen" },
      { num: "100 %", label: "devis avant intervention" },
    ],
    items: [
      "Ouverture de porte",
      "Porte claquée",
      "Remplacement serrure",
      "Cylindre européen",
      "Serrure multipoints",
      "Sécurisation après effraction",
      "Dépannage rapide",
      "Devis avant intervention",
    ],
    processSteps: [
      { title: "Vous appelez", text: "Description rapide. Devis estimatif immédiat par téléphone." },
      { title: "On confirme le prix", text: "Devis écrit avant toute intervention — aucune surprise." },
      { title: "Intervention rapide", text: "Serrurier certifié sur place en moins de 30 min." },
      { title: "Garantie incluse", text: "Pièces et main-d'œuvre garanties. Facture remise pour assurance." },
    ],
    faq: [
      {
        q: "Combien coûte l'ouverture d'une porte claquée à Suresnes ?",
        a: "En journée, une ouverture simple débute à partir de 80–120 €. Un devis vous est communiqué par téléphone avant notre déplacement — aucune intervention sans accord.",
      },
      {
        q: "Intervenez-vous la nuit et le week-end ?",
        a: "Oui, nous assurons un service d'urgence 7 j/7, 24 h/24. Un supplément nuit/week-end est clairement indiqué dans le devis.",
      },
      {
        q: "Ma serrure est-elle remboursable par mon assurance ?",
        a: "En cas d'effraction, votre assurance multirisques habitation prend souvent en charge le remplacement. Nous vous remettons une facture détaillée et un rapport d'intervention.",
      },
      {
        q: "Quelle serrure choisir pour une porte d'entrée ?",
        a: "Nous recommandons une serrure multipoints avec cylindre européen certifié A2P (2 ou 3 étoiles). Nos serruriers vous conseillent selon votre porte et votre niveau de sécurité souhaité.",
      },
    ],
    seoContent: {
      col1: {
        heading: "Serrurier à Suresnes et dans les Hauts-de-Seine",
        paragraphs: [
          "Installé à Suresnes depuis plus de 15 ans, notre atelier intervient sur l'ensemble du 92 : Puteaux, Nanterre, Rueil-Malmaison, Courbevoie, La Garenne-Colombes et tout l'ouest parisien.",
          "Chaque intervention est réalisée par un serrurier qualifié avec du matériel professionnel. Nous travaillons avec les grandes marques (Bricard, Fichet, Vachette, Mul-T-Lock) et posons uniquement des serrures certifiées A2P.",
        ],
        subsections: [
          {
            heading: "Agréé assurances",
            text: "Nous établissons une facture détaillée après chaque intervention, indispensable pour votre déclaration auprès de votre assureur habitation.",
          },
        ],
      },
      col2: {
        heading: "Pourquoi choisir un serrurier certifié ?",
        paragraphs: [
          "Face à la multiplication des arnaques, il est essentiel de faire appel à un professionnel local, identifiable et réellement qualifié. Un serrurier certifié remet un devis avant toute intervention.",
        ],
        subsections: [
          {
            heading: "Tarifs réglementés",
            text: "Nos prix respectent les tarifs indicatifs publiés par la DGCCRF. Le devis est systématiquement remis avant travaux.",
          },
          {
            heading: "Matériel certifié A2P",
            text: "Les serrures posées sont certifiées par le CNPP, ce qui conditionne souvent la prise en charge par votre assurance.",
          },
        ],
      },
    },
  },

  {
    slug: "serrurerie-automobile",
    title: "Serrurier automobile à Suresnes — ouverture et reproduction de clés",
    description:
      "Clé perdue, télécommande en panne ou véhicule verrouillé : intervention sur place pour ouverture, reproduction et programmation, toutes marques.",
    zone: "Suresnes · Hauts-de-Seine · Île-de-France",
    badges: [
      "⚡ Intervention sur place",
      "Toutes marques",
      "Programmation télécommande",
      "Carte grise obligatoire",
    ],
    trustStats: [
      { num: "+15 ans", label: "d'expérience automobile" },
      { num: "Toutes", label: "marques prises en charge" },
      { num: "100 %", label: "devis avant intervention" },
    ],
    items: [
      "Ouverture véhicule fermé",
      "Reproduction clé voiture",
      "Double de clé",
      "Programmation télécommande",
      "Perte de clé",
      "Intervention sur place selon véhicule",
      "Carte grise et pièce d'identité obligatoires",
    ],
    processSteps: [
      { title: "Vous appelez", text: "Marque, modèle et type de clé. Devis immédiat." },
      { title: "Vérification identité", text: "Carte grise + pièce d'identité obligatoires pour toute intervention." },
      { title: "Intervention", text: "Technicien équipé sur place pour ouverture ou reproduction." },
      { title: "Programmation", text: "Clé ou télécommande programmée et testée avant paiement." },
    ],
    faq: [
      {
        q: "Peut-on reproduire toutes les clés de voiture ?",
        a: "La majorité des clés mécaniques et télécommandes sont reproductibles sur place. Certains véhicules récents nécessitent un passage en concession pour la programmation — nous vous le précisons avant intervention.",
      },
      {
        q: "Quels justificatifs sont nécessaires ?",
        a: "Carte grise du véhicule et pièce d'identité en cours de validité sont obligatoires pour toute reproduction ou ouverture de véhicule.",
      },
    ],
  },

  {
    slug: "cordonnerie",
    title: "Cordonnerie à Suresnes — réparation chaussures et articles cuir",
    description:
      "Talons usés, semelle décollée ou sac à réparer : notre cordonnier à Suresnes assure une réparation soignée, rapide et à juste prix.",
    zone: "Suresnes · Hauts-de-Seine",
    badges: [
      "Réparation minute",
      "Toutes matières",
      "Cuir · Textile · Synthétique",
      "Devis gratuit",
    ],
    trustStats: [
      { num: "+15 ans", label: "de savoir-faire cordonnier" },
      { num: "48 h", label: "délai moyen de réparation" },
      { num: "100 %", label: "réparations testées avant remise" },
    ],
    items: [
      "Talons",
      "Patins",
      "Couture",
      "Collage semelles",
      "Réparation baskets",
      "Entretien cuir",
      "Réparation sacs et ceintures",
    ],
    processSteps: [
      { title: "Déposez vos chaussures", text: "Apportez l'article en boutique — diagnostic immédiat." },
      { title: "Devis gratuit", text: "Prix et délai communiqués avant toute réparation." },
      { title: "Réparation en atelier", text: "Travail soigné par notre artisan cordonnier." },
      { title: "Retrait & test", text: "Article testé, nettoyé et prêt à remettre." },
    ],
    faq: [
      {
        q: "Réparez-vous les baskets et chaussures de sport ?",
        a: "Oui — collage de semelles, renfort de coutures et nettoyage professionnel sont disponibles pour sneakers et chaussures de sport de toutes marques.",
      },
      {
        q: "Quel délai pour une réparation de semelle ?",
        a: "La plupart des réparations simples (talons, patins, collage) sont réalisées en 24 à 48 h selon l'affluence.",
      },
    ],
  },

  {
    slug: "vitrerie",
    title: "Vitrier à Suresnes — remplacement vitre et vitrage en urgence",
    description:
      "Vitre cassée, double vitrage fissuré ou sécurisation après effraction : intervention rapide de votre vitrier à Suresnes, particuliers et professionnels.",
    zone: "Suresnes · Hauts-de-Seine · Île-de-France",
    badges: [
      "⚡ Urgence vitrerie",
      "Sécurisation provisoire",
      "Particuliers & professionnels",
      "Agréé assurances",
    ],
    trustStats: [
      { num: "+15 ans", label: "d'expérience vitrerie" },
      { num: "Urgent", label: "disponible 7 j / 7" },
      { num: "100 %", label: "devis avant intervention" },
    ],
    items: [
      "Vitre cassée",
      "Remplacement vitrage",
      "Sécurisation provisoire",
      "Miroirs sur mesure",
      "Dépannage commerce et habitation",
    ],
    processSteps: [
      { title: "Appel d'urgence", text: "Décrivez la surface et le type de vitrage. Devis immédiat." },
      { title: "Sécurisation rapide", text: "Si nécessaire, sécurisation provisoire dès l'arrivée." },
      { title: "Remplacement", text: "Verre coupé sur mesure et posé dans les règles de l'art." },
      { title: "Rapport assurance", text: "Facture et constat remis pour déclaration sinistre." },
    ],
    faq: [
      {
        q: "Intervenez-vous le soir pour une vitre cassée ?",
        a: "Oui, notre service d'urgence est disponible 7 j/7 pour toute vitre cassée. Une sécurisation provisoire est posée si le vitrage de remplacement n'est pas disponible immédiatement.",
      },
      {
        q: "Ma vitre cassée est-elle prise en charge par mon assurance ?",
        a: "En cas de bris de glace accidentel ou d'effraction, la garantie bris de glace de votre assurance habitation peut s'appliquer. Nous fournissons une facture et un rapport circonstancié.",
      },
    ],
  },

  {
    slug: "gravure-plaques",
    title: "Plaques d'immatriculation et gravure à Suresnes",
    description:
      "Fabrication minute de plaques auto/moto, gravure personnalisée, tampons et badges : service rapide sur présentation des justificatifs obligatoires.",
    zone: "Suresnes · Hauts-de-Seine",
    badges: [
      "Fabrication minute",
      "Plaques auto & moto",
      "Tampons & badges",
      "Justificatifs obligatoires",
    ],
    trustStats: [
      { num: "+15 ans", label: "de gravure et fabrication" },
      { num: "Minute", label: "fabrication sur place" },
      { num: "100 %", label: "conforme réglementation" },
    ],
    items: [
      "Plaques auto/moto",
      "Gravure boîte aux lettres",
      "Tampons",
      "Badges",
      "Justificatifs obligatoires selon prestation",
    ],
    processSteps: [
      { title: "Apportez vos justificatifs", text: "Carte grise + pièce d'identité pour les plaques." },
      { title: "Choix du format", text: "Standard, personnalisé, moto — toutes dimensions." },
      { title: "Fabrication minute", text: "Plaque ou gravure réalisée sur place en quelques minutes." },
      { title: "Remise immédiate", text: "Repartez avec votre commande le jour même." },
    ],
    faq: [
      {
        q: "Quels documents pour faire des plaques d'immatriculation ?",
        a: "Carte grise originale du véhicule à votre nom et pièce d'identité en cours de validité sont obligatoires pour toute fabrication de plaque, conformément à la réglementation.",
      },
      {
        q: "Faites-vous les plaques pour les motos et scooters ?",
        a: "Oui, nous fabriquons toutes les tailles réglementaires : plaques auto format standard (520×114 mm) et plaques moto (210×130 mm).",
      },
    ],
  },
];