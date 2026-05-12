"use client";

import { siteConfig } from "@/lib/site";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function CallButton({
  className = "",
  children = "Appeler",
}: Props) {
  return (
    <a
      href={`tel:${siteConfig.contact.phone.raw}`}
      className={className}
    >
      {children}
    </a>
  );
}