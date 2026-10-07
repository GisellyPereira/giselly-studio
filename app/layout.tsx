import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import type { Metadata } from "next";
import { SmoothScroll } from "@/src/presentation/components/behavior/SmoothScroll";
import { BackToTop } from "@/src/presentation/components/layout/BackToTop";
import "@fontsource-variable/archivo";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource-variable/instrument-sans";
import "lenis/dist/lenis.css";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  if (locale === "en") return {
    title: "Giselly Pereira — Front-End Developer",
    description: "Giselly Pereira’s portfolio: front-end development for mobile and web, with an interest in UI/UX.",
  };
  return {
    title: "Giselly Pereira — Desenvolvedora Front-End",
    description:
      "Portfólio de Giselly Pereira, desenvolvedora front-end com atuação em mobile, web e interesse em UI/UX.",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale === "en" ? "en" : "pt-BR"}>
      <body>
        <NextIntlClientProvider>
          <SmoothScroll>
            {children}
            <BackToTop />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
