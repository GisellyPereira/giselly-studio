import type { ReactNode } from "react";
import { ButtonLink } from "@/src/presentation/components/shared/Button";

interface NavLinkProps {
  readonly href: string;
  readonly children: ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <ButtonLink variant="nav" href={href}>
      {children}
    </ButtonLink>
  );
}
