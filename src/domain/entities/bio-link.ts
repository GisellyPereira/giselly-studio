export interface BioLink {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  /** Destaque visual: fundo vinho. */
  readonly featured?: boolean;
  /** Abre em outra aba. */
  readonly external?: boolean;
  /** Baixa o arquivo em vez de abrir. */
  readonly download?: boolean;
}
