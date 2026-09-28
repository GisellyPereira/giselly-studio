import { HeroLogo } from "@/src/presentation/components/sections/HeroLogo";

export function HeroSection() {
  return (
    <section aria-label="Início" className="hero-campaign hero-campaign--brand" id="inicio">
      <div className="hero-campaign__identity">
        <HeroLogo />
        <h1 className="hero-campaign__role">
          Desenvolvedora web e mobile
          <em>Do conceito ao código.</em>
        </h1>
      </div>
    </section>
  );
}
