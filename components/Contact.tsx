// import { Phone, Mail, MapPin, Clock } from "lucide-react";

// export function Contact() {
//   return (
//     <section id="contact" className="bg-cream py-16 md:py-24 relative overflow-hidden">

//       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 relative z-10">

//         {/* ================= LEFT ================= */}
//         <div className="lg:col-span-6 reveal">

//           <p className="eyebrow">◆ Nous contacter</p>

//           <h2 className="display text-3xl sm:text-4xl md:text-6xl mt-4 text-foreground leading-tight">
//             Un besoin, une urgence, <span className="display-italic text-gold">un devis ?</span>
//           </h2>

//           <p className="mt-5 text-muted-foreground text-sm max-w-lg leading-relaxed">
//             Pour les urgences, appelez-nous directement, nos lignes sont décrochées 24/7.
//             Sinon, le formulaire suffit, nous répondons sous 24h.
//           </p>

//           {/* ================= CONTACT ITEMS (STAGGER ANIMATION) ================= */}
//           <div className="mt-10 space-y-5 stagger">

//             {[
//               { icon: Phone, label: "Téléphone · 24/7", value: "07 49 49 18 18", href: "tel:+33749491818" },
//               { icon: Mail, label: "Email", value: "contact@multiservicesdelapaix.fr", href: "mailto:contact@multiservicesdelapaix.fr" },
//               { icon: MapPin, label: "Adresse", value: "37 avenue Jean Jaurès, 92150 Suresnes" },
//               { icon: Clock, label: "Horaires boutique", value: "Lun–Sam 9h–19h · Dépannage 24/7" },
//             ].map(({ icon: Icon, label, value, href }) => (
//               <div
//                 key={label}
//                 className="reveal flex items-start gap-4 border-b border-border pb-4 hover:translate-x-1 transition-transform duration-500"
//               >

//                 {/* ICON */}
//                 <div className="h-10 w-10 rounded-full bg-white shadow-sm border border-border flex items-center justify-center text-gold float-y transition-transform duration-500">
//                   <Icon className="h-4 w-4" />
//                 </div>

//                 <div>
//                   <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
//                     {label}
//                   </div>

//                   {href ? (
//                     <a
//                       href={href}
//                       className="font-serif text-lg sm:text-xl text-foreground hover:text-gold transition-colors"
//                     >
//                       {value}
//                     </a>
//                   ) : (
//                     <div className="font-serif text-lg sm:text-xl text-foreground">
//                       {value}
//                     </div>
//                   )}
//                 </div>

//               </div>
//             ))}

//           </div>
//         </div>

//         {/* ================= RIGHT FORM ================= */}
//         <div className="lg:col-span-6 mt-8 lg:mt-0 reveal">

//           <form className="relative bg-navy text-navy-foreground p-6 sm:p-8 md:p-10 rounded-sm shadow-(--shadow-card) overflow-hidden">

//             {/* subtle texture */}
//             <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(135deg,transparent_0_18px,#fff_18px_19px)] pointer-events-none" />

//             <div className="relative z-10">

//               <h3 className="font-serif text-xl sm:text-2xl text-navy-foreground reveal">
//                 Écrivez-nous
//               </h3>

//               {/* GRID */}
//               <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-6 stagger">

//                 <Field label="Nom" placeholder="Votre nom" />
//                 <Field label="Prénom" placeholder="Votre prénom" />
//                 <Field label="Téléphone" placeholder="06 00 00 00 00" />
//                 <Field label="Email" placeholder="vous@exemple.fr" type="email" />

//               </div>

//               {/* SELECT */}
//               <div className="mt-5 reveal">
//                 <Label>Type de demande</Label>
//                 <select className="w-full bg-transparent border-b border-white/20 py-2.5 text-sm focus:outline-none focus:border-gold transition-all">
//                   <option className="text-foreground">Dépannage d'urgence</option>
//                   <option className="text-foreground">Devis serrurerie</option>
//                   <option className="text-foreground">Cordonnerie</option>
//                   <option className="text-foreground">Question sur un produit</option>
//                 </select>
//               </div>

//               {/* MESSAGE */}
//               <div className="mt-5 reveal">
//                 <Label>Votre message</Label>
//                 <textarea
//                   rows={4}
//                   placeholder="Décrivez votre besoin…"
//                   className="w-full bg-transparent border-b border-white/20 py-2.5 text-sm placeholder:text-navy-foreground/40 focus:outline-none focus:border-gold transition-all resize-none"
//                 />
//               </div>

//               {/* CHECK */}
//               <label className="flex items-start gap-3 mt-6 text-[11px] sm:text-xs text-navy-foreground/70 leading-relaxed reveal">
//                 <input
//                   type="checkbox"
//                   className="mt-0.5 accent-[oklch(0.78_0.13_78)]"
//                 />
//                 <span>
//                   J'accepte que mes données soient utilisées conformément à la{" "}
//                   <span className="underline text-gold">politique de confidentialité</span>.
//                 </span>
//               </label>

//               {/* BUTTON */}
//               <button
//                 type="button"
//                 className="btn-gold rounded-sm w-full justify-center mt-8 py-4! hover:scale-[1.01] transition-transform duration-300"
//               >
//                 Envoyer ma demande
//               </button>

//             </div>

//           </form>

//         </div>

//       </div>
//     </section>
//   );
// }

// /* ================= HELPERS ================= */

// function Label({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="text-[10px] uppercase tracking-[0.2em] text-navy-foreground/60 mb-1">
//       {children}
//     </div>
//   );
// }

// function Field({
//   label,
//   placeholder,
//   type = "text",
// }: {
//   label: string;
//   placeholder: string;
//   type?: string;
// }) {
//   return (
//     <div className="group reveal">
//       <Label>{label}</Label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         className="w-full bg-transparent border-b border-white/20 py-2.5 text-sm placeholder:text-navy-foreground/40 focus:outline-none focus:border-gold transition-all duration-300 group-hover:border-white/40"
//       />
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-3xl px-6 text-center">

        {/* EYEBROW */}
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
          ◆ Contact
        </p>

        {/* TITLE (NOW MATCHING YOUR SYSTEM) */}
        <h2 className="mt-4 text-3xl md:text-4xl font-serif text-foreground leading-tight">
          Assistance, dépannage,{" "}
          <span className="italic text-gold font-medium underline-gold">
            demande de devis.
          </span>
        </h2>

        {/* SUBTITLE (STRUCTURED, NOT CONVERSATIONAL) */}
        <p className="mt-5 text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Intervention rapide en Île-de-France. Devis gratuit, réponse immédiate par téléphone ou formulaire.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">

          <a
            href="tel:+33749491818"
            className="btn-gold rounded-sm inline-flex items-center justify-center px-6 py-3 w-full sm:w-auto"
          >
            <Phone className="mr-2 h-4 w-4" />
            Appeler maintenant
          </a>

          <Link
            href="/contact?type=devis"
            className="btn-ghost-gold rounded-sm inline-flex items-center justify-center px-6 py-3 w-full sm:w-auto"
          >
            Demander un devis
          </Link>

        </div>

      </div>
    </section>
  );
}