"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Menu,
  X,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";
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
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
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
      className={`site-header navy-section border-b border-white/5 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl" : ""
      }`}
    >
      {/* ===================================================== */}
      {/* TOP BAR — DESKTOP ONLY */}
      {/* ===================================================== */}
      <div
  className={`
    hidden lg:block
    border-b border-white/5
    overflow-hidden
    transition-all duration-500 ease-out
    ${
      scrolled
        ? "max-h-0 opacity-0 border-b-transparent py-0 -translate-y-full"
        : "max-h-20 opacity-100 py-3 translate-y-0"
    }
  `}
>
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-6 text-[11px] tracking-[0.18em] uppercase text-white/55">

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold pulse-dot" />

              <span>
                Dépannage rapide · Île-de-France
              </span>
            </div>

            <div className="h-3 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <Clock3 className="h-3.5 w-3.5 text-gold" />

              <span>
                Lundi–Samdi · 9h–19h
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5 text-[11px] text-white/60">

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 hover:text-gold transition-colors duration-300"
            >
              <Mail className="h-3.5 w-3.5 text-gold" />
              <span>{email}</span>
            </a>

            <div className="h-3 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              <span>{address.city}</span>
            </div>

          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* MAIN NAVBAR */}
      {/* ===================================================== */}
      <div
        className={`
          relative z-20
          mx-auto max-w-7xl px-6
          flex items-center justify-between
          transition-all duration-300
          ${
            scrolled
              ? "py-3"
              : "py-5"
          }
        `}
      >
        {/* ===================================================== */}
        {/* LOGO */}
        {/* ===================================================== */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="relative z-20"
        >
          <div
            className={`
              overflow-hidden flex items-center
              transition-all duration-300
              ${
                scrolled
                  ? "h-14"
                  : "h-20 md:h-24"
              }
            `}
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

        {/* ===================================================== */}
        {/* DESKTOP NAV */}
        {/* ===================================================== */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ===================================================== */}
        {/* RIGHT SIDE */}
        {/* ===================================================== */}
        <div className="flex items-center gap-2">

          {/* CALL BUTTON */}
          <a
            href={`tel:${phone.raw}`}
            aria-label={`Appeler ${phone.display}`}
            className="
              btn-gold
              rounded
              group
              inline-flex
              items-center
              gap-2
              shadow-lg
              shadow-black/10
            "
            style={{
              padding: "0.7rem 1rem",
              fontSize: "0.72rem",
            }}
          >
            <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />

            <span className="hidden sm:inline">
              {phone.display}
            </span>

            <span className="sm:hidden">
              Appeler
            </span>
          </a>

          {/* MOBILE MENU */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={
              open
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="
              md:hidden
              inline-flex
              items-center
              justify-center
              h-10 w-10
              rounded
              border border-white/10
              text-white
              hover:text-gold
              hover:border-gold
              transition-all duration-300
            "
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>
      </div>

      {/* ===================================================== */}
      {/* MOBILE MENU */}
      {/* ===================================================== */}
      {open && (
        <div
          id="mobile-menu"
          className="
            md:hidden
            border-t border-white/5
            bg-black/30
            backdrop-blur-2xl
            animate-in fade-in duration-300
          "
        >
          <div className="flex flex-col px-6 py-5">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  py-4
                  border-b border-white/5
                  last:border-0
                  text-white/80
                  hover:text-gold
                  transition-all duration-300
                "
              >
                {link.label}
              </Link>
            ))}

            {/* MOBILE CONTACT */}
            <div className="mt-5 pt-5 border-t border-white/10 space-y-3 text-sm text-white/65">

              <a
                href={`tel:${phone.raw}`}
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4 text-gold" />
                {phone.display}
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4 text-gold" />
                {email}
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" />
                {address.full}
              </div>

            </div>

          </div>
        </div>
      )}
    </header>
  );
}