"use client";
import { useCallback, useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import { createTranslator, translateContent } from "./translate";

export function useI18n() {
  const locale = useLocale();
  const messages = useTranslations("site");
  const t = useMemo(() => createTranslator((key) => messages.raw(key) as string, locale), [messages, locale]);
  const localize = useCallback(<T,>(content: T): T => translateContent(content, t), [t]);
  return { locale, t, localize };
}
