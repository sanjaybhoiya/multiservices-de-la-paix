// app/layout.tsx
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealProvider } from "@/components/RevealProvider";
import { CookieBanner } from "@/components/CookieBanner";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// ─────────────────────────────────────────────────────────────────────────────
// FONTS
// display:"swap" prevents invisible text during load → better CLS/LCP scores
// ─────────────────────────────────────────────────────────────────────────────
const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// ─────────────────────────────────────────────────────────────────────────────
// SITE-WIDE CONSTANTS
// TODO: Update SIRET, RCS, VAT once officially attributed
// ─────────────────────────────────────────────────────────────────────────────
const SITE_URL       = "https://www.multiservicesdelapaix.fr";
const SITE_NAME      = "Multiservices de la Paix";
const PHONE_INTL     = "+33749490303";
const PHONE_DISPLAY  = "07 49 49 03 03";
const EMAIL          = "contact@multiservicesdelapaix.fr";
const ADDRESS_STREET = "37 avenue Jean Jaurès";
const ADDRESS_CITY   = "Suresnes";
const ADDRESS_ZIP    = "92150";
const ADDRESS_FULL   = `${ADDRESS_STREET}, ${ADDRESS_ZIP} ${ADDRESS_CITY}`;
const DIRECTOR       = "Elie Haddad";
const GA_ID          = "G-S3HH85FE8T";

// GPS — geocoded from 37 Av. Jean Jaurès, 92150 Suresnes
// ⚠️  Verify by opening: https://maps.google.com/?q=48.8698,2.2198
// If the pin lands on your shopfront, you're good. If not, right-click your
// exact pin on Google Maps → "What's here?" → copy the decimal coords below.
const GEO_LAT = 48.8698;
const GEO_LNG = 2.2198;

// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL MEDIA
// ─────────────────────────────────────────────────────────────────────────────
const FACEBOOK_URL  = "https://www.facebook.com/share/18knZafJkf/?mibextid=wwXIfr";
const INSTAGRAM_URL = "https://www.instagram.com/multiservicesdelapaix/";
// TODO: Update TikTok URL once you set a custom handle (@multiservicesdelapaix)
//       Go to: TikTok app → Profile → Edit Profile → Username
const TIKTOK_URL    = "https://www.tiktok.com/@user2596173724926";
// TODO: Add once live:
// const GOOGLE_BUSINESS_URL = "https://g.page/YOUR_PROFILE_ID";
// const PAGES_JAUNES_URL    = "https://www.pagesjaunes.fr/pros/YOUR_ID";

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE AREAS — Paris + Île-de-France coverage
// ─────────────────────────────────────────────────────────────────────────────
const SERVICE_AREAS = [
  "Suresnes", "Puteaux", "Courbevoie", "Nanterre", "Rueil-Malmaison",
  "La Garenne-Colombes", "Levallois-Perret", "Neuilly-sur-Seine",
  "Asnières-sur-Seine", "Clichy", "Saint-Cloud", "Boulogne-Billancourt",
  "Paris 16e", "Paris 17e", "Paris 8e",
  "Hauts-de-Seine", "Paris", "Île-de-France",
];

// ─────────────────────────────────────────────────────────────────────────────
// ROOT METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {

  metadataBase: new URL(SITE_URL),

  title: {
    default: `Serrurier Suresnes Paris & Île-de-France – Cordonnerie Dépannage 7j/7 | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME} – Serrurier Suresnes`,
  },

  description:
    "Serrurier à Suresnes, Paris et Hauts-de-Seine : ouverture de porte, remplacement serrure, reproduction de clés, cordonnerie, vitrerie. Intervention rapide 7j/7. Devis gratuit. ☎ 07 49 49 03 03",

  keywords: [
    "serrurier Suresnes", "serrurier 92150", "serrurier Paris",
    "serrurier Île-de-France", "serrurier Hauts-de-Seine", "serrurier urgence 92",
    "ouverture porte Suresnes", "ouverture porte Paris",
    "remplacement serrure Suresnes", "remplacement cylindre 92",
    "reproduction clé Suresnes", "clé sécurisée Paris",
    "serrure blindée Suresnes", "dépannage serrurerie Île-de-France",
    "clé voiture Suresnes", "programmation clé électronique 92",
    "cordonnerie Suresnes", "réparation chaussures 92150", "cordonnier Suresnes",
    "vitrerie urgence Suresnes", "remplacement vitre Hauts-de-Seine",
    "multiservices Suresnes", "dépannage rapide Suresnes",
    "meilleur serrurier Suresnes pas cher",
    "serrurier ouverture porte claquée Suresnes",
    "serrurier disponible maintenant Suresnes",
    "qui peut ouvrir ma porte à Suresnes",
    "serrurier de confiance Suresnes et Paris",
  ],

  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/" },
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `Serrurier Suresnes Paris – Dépannage 7j/7 | ${SITE_NAME}`,
    description:
      "Serrurerie, cordonnerie, vitrerie et multiservices à Suresnes, Paris et Île-de-France. Intervention rapide 7j/7. ☎ 07 49 49 03 03",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – Serrurier Suresnes et Paris`,
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Serrurier Suresnes & Paris – Dépannage 7j/7 | ${SITE_NAME}`,
    description:
      "Serrurerie, cordonnerie, vitrerie à Suresnes, Paris et Île-de-France. Intervention 7j/7. ☎ 07 49 49 03 03",
    images: ["/og-image.jpg"],
    // TODO: Add Twitter/X handle once account is created → site: "@yourhandle"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // TODO: Paste your token from Google Search Console here
  // Get it at: https://search.google.com/search-console → Add property → HTML tag method
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
  },

  applicationName: SITE_NAME,
  authors: [{ name: DIRECTOR, url: SITE_URL }],
  creator: DIRECTOR,
  publisher: SITE_NAME,
  category: "local business, serrurerie, cordonnerie",

  // AIO / AI search engine signals (ChatGPT, Perplexity, Gemini, Claude)
  other: {
    "entity:type":        "LocalBusiness",
    "entity:name":        SITE_NAME,
    "entity:telephone":   PHONE_DISPLAY,
    "entity:address":     ADDRESS_FULL,
    "entity:areaServed":  SERVICE_AREAS.join(", "),
    "entity:serviceType": "Serrurerie, Cordonnerie, Vitrerie, Multiservices, Dépannage",
    "entity:priceRange":  "€€",
    "entity:language":    "fr",
    // Allow indexing by major AI crawlers
    // Also add these to your public /public/robots.txt file
    "robots-gptbot":        "index, follow",
    "robots-perplexitybot": "index, follow",
    "robots-claudebot":     "index, follow",
    "robots-gemini":        "index, follow",
    // Points AI assistants & voice search to the most answerable content
    "speakable-selector": ".hero-text, .services-summary, .contact-info",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// VIEWPORT (separate export required since Next.js 14)
// ─────────────────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#111111" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD STRUCTURED DATA
// Feeds Google Local Pack, AI answer engines (Perplexity, ChatGPT) and voice
// ─────────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [

    // 1. LocalBusiness — puts you in the Google Map Pack and AI local answers
    {
      "@type": ["LocalBusiness", "LocksmithBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      alternateName: [
        "Multiservices de la Paix Suresnes",
        "Serrurier Suresnes",
        "Serrurier Paris Ouest",
      ],
      description:
        "Serrurerie, cordonnerie, vitrerie et multiservices à Suresnes, Paris et Hauts-de-Seine. Ouverture de porte, remplacement serrure, reproduction de clés, dépannage urgence 24h/24 7j/7.",
      url: SITE_URL,
      telephone: PHONE_INTL,
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS_STREET,
        addressLocality: ADDRESS_CITY,
        postalCode: ADDRESS_ZIP,
        addressRegion: "Île-de-France",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO_LAT,
        longitude: GEO_LNG,
      },
      // Physical shop opening hours (Mon–Sat only, no Sunday in-store)
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "17:00",
        },
        // No Sunday in-store — emergency phone line only (see contactPoint below)
      ],
      // 24/7 emergency line — separate from physical shop hours
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: PHONE_INTL,
          contactType: "customer service",
          areaServed: "FR",
          availableLanguage: "French",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday","Tuesday","Wednesday","Thursday",
              "Friday","Saturday","Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        },
        {
          "@type": "ContactPoint",
          telephone: PHONE_INTL,
          contactType: "emergency",
          areaServed: "FR",
          availableLanguage: "French",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday","Tuesday","Wednesday","Thursday",
              "Friday","Saturday","Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        },
      ],
      hasMap: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS_FULL)}`,
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      areaServed: SERVICE_AREAS.map((city) => ({
        "@type":
          city.includes("Seine") || city.includes("France")
            ? "AdministrativeArea"
            : "City",
        name: city,
      })),
      serviceType: [
        "Serrurerie générale", "Dépannage serrurerie urgence",
        "Ouverture de porte", "Remplacement de serrure", "Remplacement de cylindre",
        "Reproduction de clés", "Clés sécurisées", "Serrurerie automobile",
        "Programmation clé électronique", "Cordonnerie", "Réparation chaussures",
        "Réparation maroquinerie", "Vitrerie", "Remplacement vitrage",
        "Gravure plaques", "Plaques immatriculation",
        "Remplacement piles montres", "Tampons professionnels",
      ],
      // TODO: Uncomment and fill in once you have ≥5 real verified reviews
      // aggregateRating: {
      //   "@type": "AggregateRating",
      //   ratingValue: "4.9",
      //   reviewCount: "47",
      //   bestRating: "5",
      //   worstRating: "1",
      // },
      logo: {
        "@type": "ImageObject",
        // ⚠️  Your logo is at /assets/logo-multiservices.svg inside the project.
        // Next.js only serves files from /public/ — make sure /assets/ is inside
        // /public/ (i.e. /public/assets/logo-multiservices.svg), otherwise move it.
        url: `${SITE_URL}/assets/logo-multiservices.svg`,
        width: 200,
        height: 60,
      },
      image: `${SITE_URL}/og-image.jpg`,
      sameAs: [
        FACEBOOK_URL,
        INSTAGRAM_URL,
        TIKTOK_URL,
        // TODO: Uncomment once live:
        // GOOGLE_BUSINESS_URL,   ← highest priority — do this first
        // PAGES_JAUNES_URL,      ← second priority
      ],
      founder: { "@type": "Person", name: DIRECTOR },
      // TODO: Uncomment and fill in once SIRET is officially attributed
      // legalName: SITE_NAME,
      // taxID: "FR_VAT_NUMBER",
      // identifier: { "@type": "PropertyValue", name: "SIRET", value: "SIRET_NUMBER" },
    },

    // 2. WebSite — enables Sitelinks Search Box in Google
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#business` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // 3. FAQPage — heavily weighted by AI answer engines (Perplexity, ChatGPT)
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Quel est le délai d'intervention pour une ouverture de porte à Suresnes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multiservices de la Paix intervient rapidement à Suresnes et dans les Hauts-de-Seine pour toute ouverture de porte claquée ou verrouillée. Appelez le 07 49 49 03 03 pour un délai estimé selon votre secteur.",
          },
        },
        {
          "@type": "Question",
          name: "Combien coûte une ouverture de porte à Suresnes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le tarif d'ouverture de porte commence à partir de 90 € TTC pour une porte standard et à partir de 150 € TTC pour une porte blindée, hors frais de déplacement. Un devis gratuit peut être établi avant toute intervention.",
          },
        },
        {
          "@type": "Question",
          name: "Proposez-vous un service de serrurerie d'urgence à Paris et en Île-de-France ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, Multiservices de la Paix intervient en urgence 24h/24 et 7j/7 à Suresnes, dans les Hauts-de-Seine (92), à Paris et dans toute l'Île-de-France. Contactez-nous au 07 49 49 03 03.",
          },
        },
        {
          "@type": "Question",
          name: "Faites-vous la reproduction de clés sécurisées à Suresnes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous proposons la duplication de clés simples et sécurisées, ainsi que la reproduction de badges, télécommandes et clés automobiles avec programmation électronique.",
          },
        },
        {
          "@type": "Question",
          name: "Proposez-vous un service de cordonnerie à Suresnes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre atelier de cordonnerie à Suresnes propose la réparation de chaussures (semelles, talons, fermetures éclair), l'entretien du cuir et la réparation de maroquinerie. À partir de 12 € TTC.",
          },
        },
        {
          "@type": "Question",
          name: "Faites-vous la vitrerie en urgence à Suresnes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous intervenons en urgence pour la mise en sécurité et le remplacement de vitres cassées à Suresnes et dans les Hauts-de-Seine. Ligne disponible 24h/24 au 07 49 49 03 03.",
          },
        },
        {
          "@type": "Question",
          name: "Quels modes de paiement acceptez-vous ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous acceptons le paiement en espèces, par carte bancaire et par virement bancaire.",
          },
        },
        {
          "@type": "Question",
          name: "Intervenez-vous le week-end et les jours fériés ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre ligne d'urgence est disponible 7j/7 y compris les week-ends et jours fériés. Appelez le 07 49 49 03 03 à toute heure pour une intervention d'urgence.",
          },
        },
        // TODO: Add more FAQs when ready — suggested:
        // "Combien coûte un remplacement de cylindre ?"
        // "Intervenez-vous pour les serrures de voiture ?"
        // "Faites-vous des devis gratuits ?"
        // "Intervenez-vous dans tout Paris et l'Île-de-France ?"
      ],
    },

    // 4. Service schemas — help AI engines answer "combien coûte…" questions
    {
      "@type": "Service",
      "@id": `${SITE_URL}/serrurerie#service`,
      name: "Serrurerie – Ouverture de porte et remplacement serrure",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
      description:
        "Ouverture de porte claquée ou verrouillée, remplacement de cylindre et serrure, serrures de sécurité, reproduction de clés. Intervention rapide Suresnes, Paris et 92.",
      offers: {
        "@type": "Offer",
        priceRange: "90€ – 300€",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
      serviceType: "Serrurerie",
      url: `${SITE_URL}/serrurerie`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/cordonnerie#service`,
      name: "Cordonnerie – Réparation chaussures et maroquinerie",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: { "@type": "City", name: "Suresnes" },
      description:
        "Réparation semelles, talons, fermetures éclair, entretien et rénovation cuir, réparation sacs et ceintures.",
      offers: {
        "@type": "Offer",
        priceRange: "12€ – 50€",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
      serviceType: "Cordonnerie",
      url: `${SITE_URL}/cordonnerie`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/vitrerie#service`,
      name: "Vitrerie d'urgence – Remplacement vitres cassées",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
      description:
        "Mise en sécurité et remplacement de vitres cassées en urgence à Suresnes et Hauts-de-Seine. Intervention rapide 24h/24.",
      offers: {
        "@type": "Offer",
        priceRange: "120€ – 250€",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
      serviceType: "Vitrerie",
      url: `${SITE_URL}/vitrerie`,
    },

    // 5. BreadcrumbList — helps Google display breadcrumbs in search results
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil",       item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Serrurerie",    item: `${SITE_URL}/serrurerie` },
        { "@type": "ListItem", position: 3, name: "Cordonnerie",   item: `${SITE_URL}/cordonnerie` },
        { "@type": "ListItem", position: 4, name: "Vitrerie",      item: `${SITE_URL}/vitrerie` },
        { "@type": "ListItem", position: 5, name: "Multiservices", item: `${SITE_URL}/multiservices` },
        { "@type": "ListItem", position: 6, name: "Tarifs",        item: `${SITE_URL}/tarifs` },
        { "@type": "ListItem", position: 7, name: "Contact",       item: `${SITE_URL}/contact` },
        // TODO: Add /blog once you start publishing articles (big AIO boost)
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ROOT LAYOUT
// ─────────────────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={cn("font-sans", notoSans.variable, playfairDisplayHeading.variable)}
    >
      <head>
        {/* Preconnect to Google Fonts — saves 200-400ms on first paint (boosts LCP) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preconnect to Google Analytics — reduces analytics latency */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS prefetch for Google Maps embed (used in contact page) */}
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />

        {/* Favicons — all three confirmed present in /public/ */}
        <link rel="icon"             href="/favicon.ico"          sizes="any" />
        <link rel="icon"             href="/icon.svg"             type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest"         href="/manifest.webmanifest" />

        {/* Canonical safety net (also set via metadata.alternates above) */}
        <link rel="canonical" href={SITE_URL} />

        {/* JSON-LD — most impactful SEO element for a local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="min-h-screen flex flex-col">

        {/* ── Google Analytics 4 ──────────────────────────────────────────────
            strategy="afterInteractive" loads GA only after the page is
            interactive — it NEVER blocks rendering or hurts LCP/CLS/INP.
            ⚠️  Do NOT use a raw <script> tag here: it fires during SSR,
                causes hydration mismatches and can double-execute on navigation.
                Always use Next.js <Script> for third-party scripts.
        ─────────────────────────────────────────────────────────────────────── */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>

        <ScrollToTop />

        {/* Skip-to-content link: accessibility + helps crawlers find main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:rounded"
        >
          Aller au contenu principal
        </a>

        <RevealProvider>
          <Header />

          {/* id="main-content" is referenced by the skip link above */}
          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />
        </RevealProvider>

        <CookieBanner />
        <WhatsAppButton />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}