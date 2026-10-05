export type LandingPageNiche = "saude" | "turismo" | "tecnologia" | "energia" | "financas" | "comercio" | "cultura" | "pets" | "gastronomia" | "midia";

export interface LandingPageDetails {
  readonly niche: LandingPageNiche;
  readonly format: "Landing page" | "Site institucional" | "Portal" | "Loja virtual";
  readonly context: "Projeto conceitual" | "Projeto de portfólio" | "Estudo" | "Projeto profissional";
}

export interface LandingPageNicheOption {
  readonly id: LandingPageNiche;
  readonly label: string;
}

export interface LandingPageGroup {
  readonly id: "cultura-conteudo" | "negocios-servicos" | "produtos-lojas";
  readonly label: string;
  readonly niches: readonly LandingPageNiche[];
}
