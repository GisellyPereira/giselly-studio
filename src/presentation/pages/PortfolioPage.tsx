"use client";
import { useI18n } from "@/src/i18n/use-i18n";
import { experienceContent as originalExperienceContent, portfolioData as originalPortfolioData, skillsContent as originalSkillsContent } from "@/src/data/portfolio";
import { landingPagesCalloutContent as originalLandingPagesCalloutContent } from "@/src/data/landing-pages-callout";
import { Header } from "@/src/presentation/components/layout/Header";
import { Footer } from "@/src/presentation/components/layout/Footer";
import { FeaturedProjectsSection } from "@/src/presentation/components/sections/FeaturedProjectsSection";
import { HeroSection } from "@/src/presentation/components/sections/HeroSection";
import { SkillsSection } from "@/src/presentation/components/sections/SkillsSection";
import { LandingPagesCallout } from "@/src/presentation/components/sections/LandingPagesCallout";
import { ExperienceSection } from "@/src/presentation/components/sections/ExperienceSection";
import { ContactSection } from "@/src/presentation/components/sections/ContactSection";

export function PortfolioPage() {
  const { localize, locale } = useI18n();
  const experienceContent = localize(originalExperienceContent);
  const portfolioData = localize(originalPortfolioData);
  const skillsContent = localize(originalSkillsContent);
  const translatedCallout = localize(originalLandingPagesCalloutContent);
  const landingPagesCalloutContent = locale === "en" ? { ...translatedCallout, handwrittenNotes: { ...translatedCallout.handwrittenNotes, human: [...translatedCallout.handwrittenNotes.human].reverse() } } : translatedCallout;
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
