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
    title: "Giselly Pereira — Senior Front-End Developer",
    description: "Portfolio of Giselly Pereira, a senior front-end developer for web and mobile with apps on the App Store and Google Play and portals for the Government of Maranhão.",
  };
  return {
    title: "Giselly Pereira — Desenvolvedora Front-End Sênior",
    description:
      "Portfólio de Giselly Pereira, desenvolvedora front-end sênior, web e mobile, com apps na App Store e no Google Play e portais para o Governo do Maranhão.",
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
