import { siteConfig } from "@/lib/site";

export type ServiceSchemaInput = {
  title: string;
  description?: string;
  items?: string[];
};

export function generateServiceSchema(service: ServiceSchemaInput) {
  const { phone, address } = siteConfig.contact;

  return {
    "@context": "https://schema.org",
    "@type": "Service",

    serviceType: service.title,
    name: service.title,
    description: service.description || service.title,

    areaServed: [
      "Suresnes",
      "Hauts-de-Seine",
      "Île-de-France",
      "Paris",
    ],

    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: phone.raw,
      address: {
        "@type": "PostalAddress",
        streetAddress: address.street,
        addressLocality: address.city,
        postalCode: address.postalCode,
        addressCountry: "FR",
      },
    },

    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "Variable",
      priceCurrency: "EUR",
    },

    ...(service.items && service.items.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: service.title,
            itemListElement: service.items.map((item: string) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: item,
              },
            })),
          },
        }
      : {}),
  };
}