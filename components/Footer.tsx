import logo from "@/assets/logo-multiservices.svg";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="navy-section py-16">

      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12">

        {/* ================= BRAND ================= */}
        <div>
          <Image
            src={logo}
            alt="Multiservices de la Paix"
            className="h-24 w-auto object-contain"
            priority
          />

          <p className="mt-5 text-sm text-navy-foreground/60 max-w-sm leading-relaxed">
            Serrurerie, cordonnerie et dépannage d’urgence. La boutique du quartier
            à Suresnes et une intervention rapide disponible 24/7 partout en Île-de-France.
          </p>

          <div className="mt-5 flex items-center gap-3 text-xs text-navy-foreground/60">
            <span className="text-gold">◆ Disponible 24/7</span>
            <span className="opacity-40">•</span>
            <span>Intervention rapide</span>
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold mb-5">
            Services
          </h4>

          <ul className="space-y-3 text-sm text-navy-foreground/70">

            <li>
              <a href="#services" className="hover:text-gold transition-colors">
                Serrurerie
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-gold transition-colors">
                Cordonnerie
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-gold transition-colors">
                Dépannage d’urgence
              </a>
            </li>

            <li>
              <a href="#zone" className="hover:text-gold transition-colors">
                Zone d’intervention
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-gold transition-colors">
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold mb-5">
            Contact
          </h4>

          <ul className="space-y-3 text-sm text-navy-foreground/70">

            <li>
              <a
                href="https://maps.google.com/?q=37+avenue+Jean+Jaurès+Suresnes"
                target="_blank"
                className="hover:text-gold transition-colors"
              >
                37 avenue Jean Jaurès
              </a>
            </li>

            <li>92150 Suresnes</li>

            <li>
              <a
                href="tel:+33749491818"
                className="text-gold font-medium hover:opacity-80 transition"
              >
                07 49 49 18 18
              </a>
            </li>

            <li>
              <a
                href="mailto:contact@multiservicesdelapaix.fr"
                className="hover:text-gold transition-colors"
              >
                contact@multiservicesdelapaix.fr
              </a>
            </li>

            <li className="text-xs text-navy-foreground/50 pt-2">
              Lun–Sam · 9h–19h · Dim fermé · Dépannage 24/7
            </li>

          </ul>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="mt-14 pt-6 border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-navy-foreground/50">

          <span>
            © {new Date().getFullYear()} Multiservices de la Paix · Suresnes
          </span>

          <span className="text-gold">
            ◆ Serrurerie · Cordonnerie · Dépannage 24/7
          </span>

        </div>

      </div>

    </footer>
  );
}