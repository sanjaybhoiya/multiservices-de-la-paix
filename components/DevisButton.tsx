"use client";

import Link from "next/link";

type Props = {
  service?: string;
  className?: string;
  children?: React.ReactNode;
};

function normalizeService(service?: string) {
  if (!service) return "";

  try {
    let clean = service;

    // decode if encoded
    clean = decodeURIComponent(clean);

    // remove hash
    clean = clean.replace(/#/g, "");

    // FIX: if full URL or query injected accidentally
    if (clean.includes("service=")) {
      clean = clean.split("service=").pop() || "";
    }

    // remove leading slashes
    clean = clean.replace(/^\/+/, "");

    // remove accidental /contact prefix
    clean = clean.replace("contact", "");

    return clean.trim();
  } catch {
    return service;
  }
}

export default function DevisButton({
  service,
  className = "",
  children = "Devis gratuit",
}: Props) {
  const cleanService = normalizeService(service);

  const href = cleanService
    ? `/contact?service=${encodeURIComponent(cleanService)}#contact-form`
    : `/contact#contact-form`;

  return (
    <Link href={href} className={className} scroll={true}>
      {children}
    </Link>
  );
}