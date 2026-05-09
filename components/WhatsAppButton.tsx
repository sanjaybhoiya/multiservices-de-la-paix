"use client";

import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.contact.phone.whatsappMessage}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed bottom-6 right-6 z-50

        flex items-center justify-center
        h-14 w-14 rounded-full

        bg-green-500 text-white
        shadow-lg

        transition-all duration-300
        hover:scale-110 active:scale-95
      "
    >
      {/* Glow Ring */}
      <span
        className="
          absolute h-14 w-14 rounded-full
          bg-green-400/40 blur-md
          scale-110
          animate-pulse
        "
      />

      {/* Outer Ring */}
      <span
        className="
          absolute h-14 w-14 rounded-full
          border border-green-300/40
          scale-125 opacity-60
        "
      />

      {/* Icon */}
      <FaWhatsapp className="h-6 w-6 relative z-10" />
    </a>
  );
}