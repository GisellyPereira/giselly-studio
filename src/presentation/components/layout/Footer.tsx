"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import Image from "next/image";
import type { SocialLink } from "@/src/domain/entities/portfolio";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { ArrowIcon } from "@/src/presentation/components/shared/Icons";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";

interface FooterProps {
  readonly role: string;
  readonly socials: readonly SocialLink[];
}

export function Footer({ role, socials }: FooterProps) {
  const { t } = useI18n();
  return (
    <EntranceSection as="footer" className="site-footer" revealTogether>
      <div className="site-footer__inner">
        <div className="site-footer__main">
          <div className="footer-brand" data-entrance="rise">
            <Image
              className="footer-logo"
              src="/images/brand/giselly-studio-light.svg"
              alt="Giselly Studio"
              width={900}
              height={925}
            />
            <div className="footer-brand__copy">
              <p className="footer-brand__signature">{t("Feito por mim, do meu jeito")}</p>
              <p>{role}</p>
            </div>
          </div>
          <div className="site-footer__connections" data-entrance="rise" data-entrance-delay=".12">
            <p className="site-footer__eyebrow">{t("Vamos nos conectar")}</p>
            <nav className="footer-links" aria-label={t("Redes sociais")}>
              {socials.map((social) => (
                <ButtonLink variant="text" href={social.href} key={social.label} target="_blank" rel="noopener noreferrer">
                  <span>{social.label}</span>
                  <ArrowIcon diagonal />
                </ButtonLink>
              ))}
            </nav>
          </div>
        </div>
        <div className="site-footer__bottom" data-entrance="rise" data-entrance-delay=".24">
          <p className="footer-copy">© {new Date().getFullYear()} Giselly Pereira</p>
        </div>
      </div>
    </EntranceSection>
  );
}
