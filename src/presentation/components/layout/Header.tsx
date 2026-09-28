import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { NavLink } from "@/src/presentation/components/layout/NavLink";

interface HeaderProps {
  readonly email: string;
}

export function Header({ email }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="nav-combo">
        <Link className="brand-pill" href="/#inicio" aria-label="Voltar ao início">
          <Image
            className="brand-logo brand-logo--lockup"
            src="/images/brand/giselly-studio-header.svg"
            alt="Giselly"
            width={612}
            height={178}
            priority
          />
          <Image
            aria-hidden="true"
            className="brand-logo brand-logo--icon"
            src="/images/brand/giselly-studio-icon.svg"
            alt=""
            width={256}
            height={256}
            priority
          />
        </Link>
        <nav className="nav-pill" aria-label="Navegação principal">
          <NavLink href="/#projetos">Projetos</NavLink>
          <NavLink href="/#skills">Skills</NavLink>
          <NavLink href="/#cursos">Cursos</NavLink>
          <NavLink href="/#experiencia">Trajetória</NavLink>
          <NavLink href="/#contato">Contato</NavLink>
        </nav>
      </div>

      <div className="header-actions">
        <ButtonLink variant="talk" href={`mailto:${email}`}>
          Vamos conversar
        </ButtonLink>
        <span className="language-pill" aria-label="Idioma: português">
          PT
        </span>
      </div>

      <details className="mobile-menu">
        <summary aria-label="Abrir ou fechar menu" className="menu-button">
          <span />
          <span />
        </summary>
        <nav className="mobile-nav" aria-label="Navegação mobile">
          <NavLink href="/#projetos">Projetos</NavLink>
          <NavLink href="/#skills">Skills</NavLink>
          <NavLink href="/#cursos">Cursos</NavLink>
          <NavLink href="/#experiencia">Trajetória</NavLink>
          <NavLink href="/#contato">Contato</NavLink>
        </nav>
      </details>
    </header>
  );
}
