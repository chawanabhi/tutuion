import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Academic3DBackground } from "@/components/visuals/Academic3DBackground";
import { CtaBand } from "@/components/home/CtaBand";
import { Hero } from "@/components/home/Hero";
import { ObjectivesSection } from "@/components/home/ObjectivesSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Academic3DBackground variant="hero" />
      <Hero />
      <ObjectivesSection />
      <ServicesPreview />
      <AboutTeaser />
      <CtaBand />
    </div>
  );
}
