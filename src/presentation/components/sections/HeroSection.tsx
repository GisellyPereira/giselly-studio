import { HeroLogo } from "@/src/presentation/components/sections/HeroLogo";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";

export function HeroSection() {
  return (
    <EntranceSection aria-label="Início" className="hero-campaign hero-campaign--brand" id="inicio" startOnMount>
      <div className="hero-campaign__identity">
        <HeroLogo />
        <h1 className="hero-campaign__role" data-entrance="rise" data-entrance-delay=".4">
          Desenvolvedora web e mobile
          <em>Um pouco do que eu gosto de fazer</em>
        </h1>
      </div>
    </EntranceSection>
  );
}
