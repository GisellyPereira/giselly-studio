"use client";

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PointerEvent,
  ReactNode,
  Ref,
} from "react";

type ButtonLinkVariant =
  | "nav"
  | "talk"
  | "heroPrimary"
  | "heroSecondary"
  | "contact"
  | "caseAction"
  | "galleryProject"
  | "backTop"
  | "text";

type ButtonVariant = "project" | "modalClose" | "caseAction" | "trigger";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly variant: ButtonLinkVariant;
  readonly icon?: ReactNode;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant: ButtonVariant;
  readonly icon?: ReactNode;
  readonly ref?: Ref<HTMLButtonElement>;
}

const linkClasses: Record<ButtonLinkVariant, string> = {
  nav: "nav-link",
  talk: "talk-pill",
  heroPrimary: "hero-button hero-button-primary",
  heroSecondary: "hero-button hero-button-secondary",
  contact: "contact-button",
  caseAction: "case-action",
  galleryProject: "gallery-project-button",
  backTop: "back-top",
  text: "",
};

const buttonClasses: Record<ButtonVariant, string> = {
  project: "project-link",
  modalClose: "case-close-button",
  caseAction: "case-action",
  trigger: "",
};

const buttonMotion: Record<ButtonVariant, "fill" | "icon" | "none"> = {
  project: "icon",
  modalClose: "icon",
  caseAction: "fill",
  trigger: "none",
};

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function updateFillOrigin<T extends HTMLElement>(event: PointerEvent<T>) {
  if (event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const element = event.currentTarget;
  const bounds = element.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const horizontalRadius = Math.max(x, bounds.width - x);
  const verticalRadius = Math.max(y, bounds.height - y);
  const diameter = Math.hypot(horizontalRadius, verticalRadius) * 2;

  element.style.setProperty("--button-x", `${x}px`);
  element.style.setProperty("--button-y", `${y}px`);
  element.style.setProperty("--button-size", `${diameter}px`);
}

function ButtonContent({ children, icon }: { readonly children: ReactNode; readonly icon?: ReactNode }) {
  return (
    <span className="action-button__content">
      <span className="action-button__label">{children}</span>
      {icon ? <span className="action-button__icon">{icon}</span> : null}
    </span>
  );
}

export function ButtonLink({
  variant,
  icon,
  children,
  className,
  onPointerEnter,
  onPointerLeave,
  ...props
}: ButtonLinkProps) {
  if (variant === "text") {
    return (
      <a className={className} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} {...props}>
        {children}
      </a>
    );
  }
  return (
    <a
      className={joinClasses("action-button", linkClasses[variant], className)}
      data-button-motion="fill"
      onPointerEnter={(event) => {
        updateFillOrigin(event);
        onPointerEnter?.(event);
      }}
      onPointerLeave={(event) => {
        updateFillOrigin(event);
        onPointerLeave?.(event);
      }}
      {...props}
    >
      <span aria-hidden="true" className="action-button__fill" />
      <ButtonContent icon={icon}>{children}</ButtonContent>
    </a>
  );
}

export function Button({
  variant,
  icon,
  children,
  className,
  type = "button",
  onPointerEnter,
  onPointerLeave,
  ...props
}: ButtonProps) {
  const motion = buttonMotion[variant];
  if (motion === "none") {
    // Preserve the feature's DOM, including the artwork ref used by draggable stickers.
    return (
      <button className={className} type={type} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} {...props}>
        {children}
      </button>
    );
  }
  return (
    <button
      className={joinClasses("action-button", buttonClasses[variant], className)}
      data-button-motion={motion}
      type={type}
      onPointerEnter={(event) => {
        if (motion === "fill") updateFillOrigin(event);
        onPointerEnter?.(event);
      }}
      onPointerLeave={(event) => {
        if (motion === "fill") updateFillOrigin(event);
        onPointerLeave?.(event);
      }}
      {...props}
    >
      {motion === "fill" ? <span aria-hidden="true" className="action-button__fill" /> : null}
      <ButtonContent icon={icon}>{children}</ButtonContent>
    </button>
  );
}
