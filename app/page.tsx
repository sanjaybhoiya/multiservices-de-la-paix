import { Accessoires } from "@/components/Accessoires";
import { Atelier } from "@/components/Atelier";
import { Contact } from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Urgence from "@/components/Urgence";
import { Zone } from "@/components/Zone";

export default function Home() {
  return (
    <main className="bg-background">
      
      <Hero />
      <Services />
      <Urgence />
      <Accessoires />
      <Atelier/>
      <Zone />
      <Contact />
    </main>
  );
}