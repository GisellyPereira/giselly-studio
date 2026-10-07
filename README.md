# Giselly Studio

Portfólio de Giselly Pereira, desenvolvedora front-end web e mobile.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Verificação

```bash
npm run lint
npm run build
```

## Idiomas

Português é o idioma inicial. O seletor PT/EN no cabeçalho também está disponível no mobile, e a preferência é mantida em cookie durante a navegação e o recarregamento.

A tradução usa `next-intl`. Os textos revisados ficam em `src/i18n/messages/pt.json` e `src/i18n/messages/en.json`; `src/i18n/keys.json` relaciona o texto original à chave do catálogo. Para acrescentar um texto, registre a mesma chave nos dois idiomas e use `useI18n().t()` no componente. Os dados das páginas são traduzidos por `localize()`, preservando IDs, links, marcas e títulos oficiais dos projetos e cursos.
