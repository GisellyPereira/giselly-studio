"use client";
import { LanguageSwitcher } from "./LanguageSwitcher";


import { useI18n } from "@/src/i18n/use-i18n";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { NavLink } from "@/src/presentation/components/layout/NavLink";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";

interface HeaderProps {
  readonly email: string;
  readonly accent?: boolean;
}

const navigation = [
  { href: "/projetos", label: "Projetos" },
  { href: "/landing-pages", label: "LP" },
  { href: "/#experiencia", label: "Experiências" },
  { href: "/sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
] as const;

export function Header({ email, accent = false }: HeaderProps) {
  const { t } = useI18n();
  return (
    <EntranceSection as="header" className={`site-header${accent ? " site-header--accent" : ""}`} startOnMount>
      <div className="nav-combo" data-entrance="header">
        <Link className="brand-pill" href="/#inicio" aria-label={t("Voltar ao início")}>
          <Image
            className="brand-logo"
            src="/images/brand/giselly-studio-icon.svg"
            alt="Giselly Studio"
            width={256}
            height={256}
            priority
          />
        </Link>
        <nav className="nav-pill" aria-label={t("Navegação principal")}>
          {navigation.map((item) => (
            <NavLink href={item.href} key={item.href}>{t(item.label)}</NavLink>
          ))}
        </nav>
      </div>

      <div className="header-actions" data-entrance="header" data-entrance-delay=".1">
        <ButtonLink variant="talk" href={`mailto:${email}`}>{t("Vamos conversar")}</ButtonLink>
        <LanguageSwitcher />
      </div>

      <LanguageSwitcher className="language-pill--mobile" />
      <details className="mobile-menu" data-entrance="header" data-entrance-delay=".1">
        <summary aria-label={t("Abrir ou fechar menu")} className="menu-button">
          <span />
          <span />
        </summary>
        <nav className="mobile-nav" aria-label={t("Navegação mobile")}>
          {navigation.map((item) => (
            <NavLink href={item.href} key={item.href}>{t(item.label)}</NavLink>
          ))}
        </nav>
      </details>
    </EntranceSection>
  );
}
