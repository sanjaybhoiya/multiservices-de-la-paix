"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Mail, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-multiservices.svg";
import { siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const contact = siteConfig.contact;
  const phone = contact.phone;
  const email = contact.email;
  const address = contact.address;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/zone", label: "Zone d’intervention" },
    { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`site-header navy-section ${scrolled ? "is-scrolled" : ""}`}
      style={{
        backgroundColor: scrolled ? "rgba(18, 26, 43, 0.92)" : undefined,
      }}
    >
      {/* ================= TOP BAR ================= */}
      <div
        className={`overflow-hidden border-b border-white/10 text-[9px] sm:text-[10px] uppercase tracking-wider transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0 border-b-0" : "max-h-16 opacity-100"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-2 flex flex-col md:flex-row md:items-center md:justify-between text-white/70 gap-2 md:gap-4">

          <span className="flex items-center gap-2 whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block" />
            Dépannage {phone.availability} · Intervention rapide en Île-de-France
          </span>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="flex items-center gap-1 whitespace-nowrap">
              <Clock className="h-3 w-3 text-accent" />
              Lun–Sam · 9h–19h · Dim fermé
            </span>

            <span className="flex items-center gap-1 whitespace-nowrap">
              <MapPin className="h-3 w-3 text-accent" />
              {address.full}
            </span>
          </div>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-1 hover:text-accent transition whitespace-nowrap"
          >
            <Mail className="h-3 w-3 text-accent" />
            {email}
          </a>

        </div>
      </div>

      {/* ================= NAV ================= */}
      <div
        className={`relative z-10 mx-auto max-w-7xl px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-2" : "py-5"
        }`}
      >
        {/* LOGO */}
        <Link href="/" onClick={() => setOpen(false)}>
          <div
            className={`overflow-hidden flex items-center transition-all duration-300 ${
              scrolled ? "h-14" : "h-20 md:h-24"
            }`}
          >
            <Image
              src={logo}
              alt="Multiservices de la Paix"
              width={360}
              height={240}
              priority
              className="h-full w-auto object-contain origin-left"
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium tracking-wide">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">

          {/* CALL BUTTON */}
          <a
            href={`tel:${phone.raw}`}
            aria-label={`Appeler ${phone.display}`}
            className="btn-gold rounded-sm group inline-flex items-center gap-2"
            style={{ padding: "0.55rem 0.9rem", fontSize: "0.72rem" }}
          >
            <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
            <span className="hidden sm:inline">{phone.display}</span>
            <span className="sm:hidden">Appeler</span>
          </a>

          {/* MOBILE MENU (FIXED ACCESSIBILITY) */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-sm border border-white/15 text-white hover:text-accent hover:border-accent transition"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-white/10 bg-black/40 animate-menu-in"
        >
          <div className="flex flex-col px-6 py-4 text-sm">

            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-white/5 last:border-0 text-white/80 hover:text-accent hover:pl-2 transition-all duration-200"
              >
                {l.label}
              </Link>
            ))}

            {/* CONTACT BLOCK */}
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/70 space-y-2">

              <a href={`tel:${phone.raw}`} className="block hover:text-accent">
                📞 {phone.display}
              </a>

              <a href={`mailto:${email}`} className="block hover:text-accent">
                ✉️ {email}
              </a>

              <span className="block">
                📍 {address.full}
              </span>

            </div>

          </div>
        </div>
      )}
    </header>
  );
}