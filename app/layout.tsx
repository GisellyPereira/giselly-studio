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

export const metadata: Metadata = {
  title: "Giselly Pereira — Desenvolvedora Front-End",
  description:
    "Portfólio de Giselly Pereira, desenvolvedora front-end com atuação em mobile, web e interesse em UI/UX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <SmoothScroll>
          {children}
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
