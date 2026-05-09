import logo from "@/assets/logo-multiservices.svg";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import SocialLinks from "./ui/SocialLinks";

export function Footer() {
  const { phone, email, address, social } = siteConfig.contact;

  const companyName = "Multiservices de la Paix";

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/zone", label: "Zone d’intervention" },
    { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
    { href: "/contact", label: "Contact" },
  ];

  const legalLinks = [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Confidentialité" },
    { href: "/politique-cookies", label: "Cookies" },
    { href: "/cgv", label: "CGV" },
    { href: "/tarifs", label: "Tarifs" },
  ];

  const linkBase =
    "group relative inline-block text-white/60 hover:text-white transition-colors duration-300 tracking-wide";

  const underline =
    "absolute left-0 -bottom-1 h-[1px] w-0 bg-white/70 transition-all duration-500 ease-out group-hover:w-full";

  return (
    <footer className="navy-section py-20">

      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-14">

        {/* ================= BRAND ================= */}
        <div>
          <Image
            src={logo}
            alt={companyName}
            className="h-20 w-auto object-contain opacity-95"
            priority
          />

          <p className="mt-5 text-sm font-medium text-white tracking-wide">
            {companyName}
          </p>

          <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-sm">
            Serrurerie, cordonnerie et multiservices à Suresnes et dans les Hauts-de-Seine.
            Intervention rapide 24/7.
          </p>

          <div className="mt-6 flex items-center gap-3 text-xs text-white/50">
            <span className="h-1 w-1 rounded-full bg-white/40" />
            Disponible {phone.availability}
            <span className="h-1 w-1 rounded-full bg-white/20" />
            Intervention rapide
          </div>
        </div>

        {/* ================= NAV ================= */}
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-6">
            Navigation
          </h4>

          <ul className="space-y-4 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkBase}>
                  {link.label}
                  <span className={underline} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-6">
            Contact
          </h4>

          <ul className="space-y-4 text-sm text-white/60">

            <li>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                {address.street}
              </a>
            </li>

            <li className="text-white/50">
              {address.postalCode} {address.city}
            </li>

            <li>
              <a
                href={`tel:${phone.raw}`}
                className="hover:text-white transition-colors duration-300"
              >
                {phone.display}
              </a>
            </li>

            <li>
              <a
                href={`mailto:${email}`}
                className="hover:text-white transition-colors duration-300"
              >
                {email}
              </a>
            </li>

            <li className="pt-6 mt-6 border-t border-white/10 text-xs text-white/40">
              Lun–Sam · 9h–19h · Dim fermé · Dépannage 24/7
            </li>

          </ul>
        </div>

        {/* ================= LEGAL ================= */}
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-6">
            Légal
          </h4>

          <ul className="space-y-4 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkBase}>
                  {link.label}
                  <span className={underline} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="mt-16 pt-6 border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/40">

          <span className="tracking-wide">
            © 2026 {companyName} · {address.city}
          </span>

          <a
            href="https://slimidigitallabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-[11px] text-white/30 hover:text-white/70 transition-colors duration-500"
          >
            <span className="h-px w-6 bg-white/20 group-hover:text-gold transition-all duration-500" />
<span> Crafted by </span>
            <span className="tracking-[0.35em] relative">
              SLIMI
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-white/60 group-hover:w-full transition-all duration-500" />
            </span>

            <span className="opacity-60">Digital Labs</span>
          </a>

        </div>

      </div>

    </footer>
  );
}