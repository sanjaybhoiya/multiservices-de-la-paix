import { serviceHome } from "@/data/serviceHome";
import { notFound } from "next/navigation";
import ServiceClient from "./ServiceClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return serviceHome.map((s) => ({
    slug: s.slug,
  }));
}

// ✅ SEO (works with your current setup)
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  const service = serviceHome.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service introuvable",
      description: "Page non disponible",
    };
  }

  return {
    title: `${service.title} | Serrurier Suresnes 24/7`,
    description: service.description,

    openGraph: {
      title: service.title,
      description: service.description,
      type: "website",
    },

    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = serviceHome.find((s) => s.slug === slug);

  if (!service) return notFound();

  return <ServiceClient service={service} />;
}