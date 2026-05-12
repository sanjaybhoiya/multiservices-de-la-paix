// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { siteConfig } from "@/lib/site";

// type Service = {
//   slug: string;
//   title: string;
//   description: string;
//   items: string[];
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0 },
// };

// export default function ServiceClient({
//   service,
// }: {
//   service: Service;
// }) {
//   return (
//     <main className="bg-[#f5f0e6] text-[#1c2430]">

//       {/* HERO */}
//       <section className="min-h-[75vh] flex items-center justify-center px-6">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl text-center"
//         >
//           <h1 className="text-4xl md:text-5xl font-semibold">
//             {service.title}
//           </h1>

//           <p className="mt-6 text-black/70 text-lg">
//             {service.description}
//           </p>

//           <div className="mt-8 flex justify-center gap-4">

//             {/* ✅ FIXED ROUTE */}
//             <Link
//               href={`/contact?service=${service.slug}`}
//               className="px-6 py-3 rounded-full bg-[#1c2430] text-white"
//             >
//               Devis gratuit
//             </Link>

//             <a
//               href={`tel:${siteConfig.contact.phone.raw}`}
//               className="px-5 py-3 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white transition"
//             >
//               Appeler
//             </a>
//           </div>
//         </motion.div>
//       </section>

//       {/* CONTENT */}
//       <section className="py-24 px-6">
//         <div className="max-w-3xl mx-auto space-y-4">

//           {service.items.map((item, i) => (
//             <motion.div
//               key={item}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.05 }}
//               viewport={{ once: true }}
//               className="flex gap-4 border-b border-black/10 pb-4"
//             >
//               <span className="text-[#d4af37] font-semibold w-6">
//                 {String(i + 1).padStart(2, "0")}
//               </span>

//               <p className="text-lg">{item}</p>
//             </motion.div>
//           ))}

//         </div>
//       </section>

//     </main>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import Urgence from "@/components/Urgence";

type Service = {
  slug: string;
  title: string;
  description: string;
  items: string[];
  /** Optional extended fields — add to ServiceItem if needed */
  zone?: string;
  responseTime?: string;
  faq?: { q: string; a: string }[];
  seoContent?: {
    col1: { heading: string; paragraphs: string[]; subsections?: { heading: string; text: string }[] };
    col2: { heading: string; paragraphs: string[]; subsections?: { heading: string; text: string }[] };
  };
  processSteps?: { title: string; text: string }[];
  trustStats?: { num: string; label: string }[];
  badges?: string[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ServiceClient({ service }: { service: Service }) {
  const trustStats = service.trustStats ?? [
    { num: "+15 ans", label: "d'expérience locale" },
    { num: "30 min", label: "délai d'intervention moyen" },
    { num: "100 %", label: "devis avant intervention" },
  ];

  const badges = service.badges ?? [
    "⚡ Intervention rapide",
    "Devis avant travaux",
    "Agréé assurances",
    "7 j / 7 · 24 h / 24",
  ];

  const processSteps = service.processSteps ?? [
    { title: "Vous appelez", text: "Description rapide. Devis estimatif immédiat par téléphone." },
    { title: "On confirme le prix", text: "Devis écrit avant toute intervention — aucune surprise." },
    { title: "Intervention rapide", text: "Technicien certifié sur place sous 30 min." },
    { title: "Garantie incluse", text: "Pièces et main-d'œuvre garanties. Facture pour assurance." },
  ];

  const faq = service.faq ?? [];

  // Split items into two columns for the services grid
  const half = Math.ceil(service.items.length / 2);
  const col1 = service.items.slice(0, half);
  const col2 = service.items.slice(half);

  return (
    <main className="bg-[#f5f0e6] text-navy font-serif">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-black/10 px-6 pb-14 pt-16 md:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          {/* eyebrow */}
          <p className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
            <span className="inline-block h-px w-7 bg-gold" />
            {service.zone ?? "Suresnes · Hauts-de-Seine · Île-de-France"}
          </p>

          <h1 className="mb-5 max-w-2xl text-3xl font-normal leading-snug tracking-tight md:text-4xl">
            {service.title}
          </h1>

          <p className="mb-8 max-w-xl font-sans text-base leading-relaxed text-black/60">
            {service.description}
          </p>

          {/* trust badges */}
          <div className="mb-9 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-xs text-black/60 first:border-gold first:bg-gold/90 first:text-gold"
              >
                {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/contact?service=${service.slug}`}
              className="rounded-sm bg-navy px-7 py-3.5 font-sans text-sm tracking-wide text-white transition hover:bg-navy/90 hover:text-white shadow-none hover:shadow-sm"
            >
              Devis gratuit
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone.raw}`}
              className="rounded-sm border border-(--gold) px-7 py-3.5 font-sans text-sm tracking-wide text-gold transition hover:bg-(--gold) hover:text-white shadow-none hover:shadow-sm"
            >
              {`Appeler`}
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-3 divide-x divide-black/10 border-b border-black/10"
      >
        {trustStats.map(({ num, label }) => (
          <motion.div key={label} variants={fadeUp} className="px-6 py-7 md:px-10">
            <p className="font-serif text-3xl font-normal text-gold">{num}</p>
            <p className="mt-1 font-sans text-xs uppercase tracking-widest text-black/50">{label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ── SERVICES GRID ────────────────────────────────────── */}
      <section className="border-b border-black/10 px-6 py-14 md:px-12">
        <SectionHeader title="Nos prestations" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 gap-px bg-black/10 border border-black/10 md:grid-cols-2"
        >
          {[col1, col2].flat().map((item, i) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="group bg-[#f7f2e8] p-6 transition hover:bg-white"
            >
              <p className="mb-2 font-mono text-[11px] tracking-widest text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-sans text-base font-medium text-navy">{item}</p>
              <span className="mt-3 inline-block text-lg text-gold opacity-0 transition group-hover:opacity-100">
                →
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section className="border-b border-black/10 px-6 py-14 md:px-12">
        <SectionHeader title="Comment ça se passe" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {processSteps.map(({ title, text }, i) => (
            <motion.div key={title} variants={fadeUp}>
              <p className="mb-2 font-serif text-4xl font-normal text-black/70">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mb-1.5 font-sans text-sm font-medium">{title}</p>
              <p className="font-sans text-xs leading-relaxed text-black/55">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── SEO CONTENT ──────────────────────────────────────── */}
      {service.seoContent && (
        <section className="border-b border-black/10 px-6 py-14 md:px-12">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
            {[service.seoContent.col1, service.seoContent.col2].map((col, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
              >
                <h2 className="mb-4 text-xl font-normal leading-snug">{col.heading}</h2>
                {col.paragraphs.map((p, pi) => (
                  <p key={pi} className="mb-3 font-sans text-sm leading-relaxed text-black">
                    {p}
                  </p>
                ))}
                {col.subsections?.map(({ heading, text }) => (
                  <div key={heading} className="mt-5">
                    <h3 className="mb-1.5 border-l-2 border-gold pl-3 font-sans text-sm font-medium">
                      {heading}
                    </h3>
                    <p className="pl-3 font-sans text-sm leading-relaxed text-black/60">{text}</p>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────── */}
      {faq.length > 0 && (
        <section className="border-b border-black/10 px-6 py-14 md:px-12">
          <SectionHeader title="Questions fréquentes" />
          <div className="mx-auto mt-8 max-w-3xl">
            {faq.map(({ q, a }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border-t border-black/10 py-6 last:border-b"
              >
                <p className="mb-2 font-sans text-sm font-medium">{q}</p>
                <p className="font-sans text-sm leading-relaxed text-black/60">{a}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
        
          <Urgence />
        

        
      
    </main>
  );
}

/* ── Reusable section header ─────────────────────────────── */
function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-sans text-lg font-normal">{title}</span>
      <span className="h-px flex-1 bg-black/10" />
    </div>
  );
}