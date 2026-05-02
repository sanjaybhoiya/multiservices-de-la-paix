"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Urgence from "@/components/Urgence";

const contactDetails = [
  { 
    icon: Phone, 
    label: "Téléphone · 24/7", 
    value: "07 49 49 18 18", 
    href: "tel:+33749491818" 
  },
  { 
    icon: Mail, 
    label: "Email", 
    value: "contact@multiservicesdelapaix.fr", 
    href: "mailto:contact@multiservicesdelapaix.fr" 
  },
  { 
    icon: MapPin, 
    label: "Adresse", 
    value: "37 avenue Jean Jaurès, 92150 Suresnes" 
  },
  { 
    icon: Clock, 
    label: "Horaires boutique", 
    value: "Lun–Sam 9h–19h · Dépannage 24/7" 
  },
];

/* ==========================================================
   FORM COMPONENT (Wrapped in Suspense for useSearchParams)
   ========================================================== */
function ContactForm() {
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service");

  // Default state is "devis-general"
  const [selectedService, setSelectedService] = useState("devis-general");

  // Update selection if user came from a specific service card
  useEffect(() => {
    if (serviceFromUrl) {
      setSelectedService(serviceFromUrl);
    }
  }, [serviceFromUrl]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0A1128] p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden"
    >
      {/* Subtle pinstripe texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,transparent_0_20px,#fff_20px_21px)] pointer-events-none" />

      <div className="relative z-10">
        <h3 className="display text-3xl text-white mb-8 italic">
          {selectedService === "serrurerie" ? "Devis Serrurerie" : "Écrivez-nous"}
        </h3>
        
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Nom" placeholder="Votre nom" />
            <Field label="Téléphone" placeholder="06 00 00 00 00" />
          </div>
          
          <Field label="Email" placeholder="votre@email.fr" type="email" />

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/50">Nature de la demande</label>
            <select 
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold transition-all appearance-none cursor-pointer"
            >
              <option value="devis-general" className="text-black">Demander un devis gratuit</option>
              <option value="serrurerie" className="text-black">Serrurerie (Ouverture, Blindage...)</option>
              <option value="cordonnerie" className="text-black">Cordonnerie / Tampons</option>
              <option value="vitrerie" className="text-black">Vitrerie / Fenêtres</option>
              <option value="depannage" className="text-black">Dépannage urgent</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/50">Votre Message</label>
            <textarea 
              rows={4} 
              placeholder="Décrivez votre besoin avec précision..."
              className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-all resize-none"
            />
          </div>

          <div className="flex items-start gap-3 pt-4">
            <input type="checkbox" className="mt-1 accent-gold" id="rgpd" />
            <label htmlFor="rgpd" className="text-[10px] text-white/40 leading-relaxed uppercase tracking-wider">
              J'accepte que mes données soient traitées pour répondre à ma demande.
            </label>
          </div>

          <button type="submit" className="w-full btn-gold py-5 rounded-sm flex justify-center items-center gap-3 group">
            Envoyer la demande
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}

/* ==========================================================
   PAGE COMPONENT
   ========================================================== */
export default function ContactPage() {
  return (
    <>
      {/* ================= HERO HEADER (NAVY) ================= */}
      <section className="navy-section py-28 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="eyebrow inline-flex items-center gap-2 border border-gold/30 px-4 py-1.5 rounded-full text-navy-foreground/80 animate-pulse">
              ◆ Nous contacter
            </span>

            <h1 className="display mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-navy-foreground leading-[1.05]">
              Un besoin, une urgence,<br />
              <span className="italic text-gold underline-gold">un devis ?</span>
            </h1>

            <p className="mt-6 max-w-2xl text-navy-foreground/70 leading-relaxed text-lg">
              Pour les urgences, appelez-nous directement, nos lignes sont décrochées 24h/24 et 7j/7. 
              Pour toute demande de devis ou information, utilisez le formulaire ci-dessous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT (CREAM) ================= */}
      <section className="py-28 bg-[#f5f0e6] text-[#1c2430]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT: INFO ITEMS */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-8">
                {contactDetails.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="h-12 w-12 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-gold shrink-0 transition-transform duration-500 group-hover:scale-110">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1 font-bold">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="text-xl font-serif text-navy hover:text-gold transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xl font-serif text-navy italic">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* TRADITIONAL ARTISAN BADGE */}
              <div className="p-8 bg-white/50 border border-gold/20 rounded-sm">
                <p className="italic text-sm text-gray-600 leading-relaxed">
                  "Artisans de père en fils, nous mettons un point d'honneur à vous répondre 
                  avec précision et transparence, que ce soit pour une simple clé ou une sécurisation complète de votre domicile."
                </p>
              </div>
            </div>

            {/* RIGHT: THE FORM (Wrapped in Suspense for Next.js SearchParams) */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="h-96 w-full bg-navy/5 animate-pulse" />}>
                <ContactForm />
              </Suspense>
            </div>

          </div>
        </div>
      </section>

      <Urgence />
    </>
  );
}

/* ================= HELPERS ================= */

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div className="space-y-2 group">
      <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-gold transition-colors">
        {label}
      </label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-all"
      />
    </div>
  );
}