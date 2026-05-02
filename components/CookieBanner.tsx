"use client";

import { useEffect, useState } from "react";
import { getCookieConsent, setCookieConsent } from "@/lib/cookies";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-50">
      
      <div className="bg-[#0f172a] text-white rounded-sm shadow-2xl border border-white/10 p-5 backdrop-blur">

        {/* TEXT */}
        <p className="text-xs leading-relaxed text-white/70">
          Nous utilisons des cookies pour améliorer votre expérience et mesurer l’audience du site.
        </p>

        {/* LINKS (optional future use) */}
        <div className="mt-2 text-[11px] text-white/50">
          <a href="/confidentialite" className="underline hover:text-gold">
            En savoir plus
          </a>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-4">

          <button
            onClick={() => {
              setCookieConsent("accepted");
              setVisible(false);
            }}
            className="flex-1 bg-[#d4af37] text-black py-2 text-xs font-medium rounded-sm hover:opacity-90 transition"
          >
            Accepter
          </button>

          <button
            onClick={() => {
              setCookieConsent("rejected");
              setVisible(false);
            }}
            className="flex-1 border border-white/20 text-white/70 py-2 text-xs rounded-sm hover:bg-white/5 transition"
          >
            Refuser
          </button>

        </div>

      </div>
    </div>
  );
}