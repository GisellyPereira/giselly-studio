import { experienceContent, portfolioData, skillsContent } from "@/src/data/portfolio";
import { landingPagesCalloutContent } from "@/src/data/landing-pages-callout";
import { Header } from "@/src/presentation/components/layout/Header";
import { Footer } from "@/src/presentation/components/layout/Footer";
import { FeaturedProjectsSection } from "@/src/presentation/components/sections/FeaturedProjectsSection";
import { HeroSection } from "@/src/presentation/components/sections/HeroSection";
import { SkillsSection } from "@/src/presentation/components/sections/SkillsSection";
import { LandingPagesCallout } from "@/src/presentation/components/sections/LandingPagesCallout";
import { ExperienceSection } from "@/src/presentation/components/sections/ExperienceSection";
import { ContactSection } from "@/src/presentation/components/sections/ContactSection";

export function PortfolioPage() {
  return (
    <main className="portfolio-home">
      <Header email={portfolioData.email} />
      <HeroSection />
      <FeaturedProjectsSection projects={portfolioData.projects} />
      <LandingPagesCallout content={landingPagesCalloutContent} />
      <ExperienceSection content={experienceContent} experiences={portfolioData.experiences} />
      <SkillsSection content={skillsContent} />
      <ContactSection whatsapp={portfolioData.whatsapp} location={portfolioData.location} />
      <Footer role={portfolioData.role} socials={portfolioData.socials} />
    </main>
  );
}
