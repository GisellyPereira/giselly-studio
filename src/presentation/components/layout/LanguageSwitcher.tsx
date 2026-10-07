"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { setLocale } from "@/src/i18n/actions";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const nextLocale = locale === "pt" ? "en" : "pt";
  return <button type="button" className={`language-pill ${className}`} disabled={pending} aria-busy={pending} aria-label={locale === "pt" ? "Mudar idioma para inglês" : "Switch language to Portuguese"} title={locale === "pt" ? "Read in English" : "Ler em português"} onClick={() => startTransition(async () => { await setLocale(nextLocale); router.refresh(); })}>{locale.toUpperCase()}</button>;
}
