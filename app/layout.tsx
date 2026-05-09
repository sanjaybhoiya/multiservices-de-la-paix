import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealProvider } from "@/components/RevealProvider";
import { CookieBanner } from "@/components/CookieBanner";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import WhatsAppButton from "@/components/WhatsAppButton";


const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
  lang="fr"
  className={cn(
    "font-sans",
    notoSans.variable,
    playfairDisplayHeading.variable
  )}
  data-scroll-behavior="smooth"
>
      <body className="min-h-screen flex flex-col">
        <RevealProvider>
          {/* GLOBAL HEADER */}
          <Header />

          {/* PAGE CONTENT */}
          <main className="flex-1">
            {children}
          </main>

          {/* GLOBAL FOOTER */}
          <Footer />
        </RevealProvider>
         <CookieBanner />
         <WhatsAppButton />
         
      </body>
    </html>
  );
}