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
        fixed bottom-5 right-5 z-50

        flex items-center justify-center
        h-10 w-10 rounded-full

        bg-green-500 text-white
        shadow-lg

        transition-all duration-300
        hover:scale-110 active:scale-95
      "
    >
      {/* Glow Ring */}
      <span
        className="
          absolute h-10 w-10 rounded-full
          bg-green-400/40 blur-md
          scale-110
          animate-pulse
        "
      />

      {/* Outer Ring */}
      <span
        className="
          absolute h-10 w-10 rounded-full
          border border-green-300/40
          scale-125 opacity-60
        "
      />

      {/* Icon */}
      <FaWhatsapp className="h-5 w-5 relative z-10" />
    </a>
  );
}