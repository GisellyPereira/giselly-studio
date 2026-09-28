import Image from "next/image";
import type { SocialLink } from "@/src/domain/entities/portfolio";
import { ButtonLink } from "@/src/presentation/components/shared/Button";

interface FooterProps {
  readonly role: string;
  readonly socials: readonly SocialLink[];
}

export function Footer({ role, socials }: FooterProps) {
  return (
    <footer>
      <div className="footer-brand">
        <Image
          className="footer-logo"
          src="/images/brand/giselly-studio-light.svg"
          alt="Giselly Studio"
          width={900}
          height={925}
        />
        <p>{role}</p>
      </div>
      <div className="footer-links">
        {socials.map((social) => (
          <a href={social.href} key={social.label} target="_blank" rel="noreferrer">
            {social.label} ↗
          </a>
        ))}
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} — Feito com intenção.</p>
      <ButtonLink variant="backTop" href="#inicio" aria-label="Voltar ao início">
        ↑
      </ButtonLink>
    </footer>
  );
}
