export interface BioLink {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  /** Abre em outra aba. */
  readonly external?: boolean;
  /** Baixa o arquivo em vez de abrir. */
  readonly download?: boolean;
}
