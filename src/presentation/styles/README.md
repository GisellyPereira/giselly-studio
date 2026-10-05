# Estilos da apresentação

`app/globals.css` carrega o Tailwind e este diretório por meio de `index.css`.
O layout raiz continua sendo o único ponto de entrada dos estilos globais.

## Organização

- `foundation/`: variáveis, regras globais e preferência por movimento reduzido.
- `shared/`: botões, superfícies de vidro, parallax e cabeçalhos reutilizáveis.
- `layout/`: estrutura do cabeçalho e do rodapé.
- `sections/`: estilos de cada seção do portfólio.
- `projects/`: cards, ilustrações, galeria, estudos de caso, seleção e arquivo.
- `theme/`: identidade visual que complementa os estilos de base.
- `responsive/`: blocos responsivos existentes que afetam várias features.

## Cascata e manutenção

`index.css` mantém explicitamente a sequência original das regras, incluindo
media queries e animações. A separação não altera seletores, especificidade,
declarações nem a ordem de aplicação. Não reordene imports alfabeticamente:
os estilos de tema e de composição dependem dos estilos anteriores.

Edite o arquivo responsável pelo comportamento ou elemento. As alterações de
identidade visual ficam em `theme/`; os estilos da seleção atual de projetos
ficam em `projects/collage.css`. Media queries exclusivas de uma feature
permanecem junto dela; `responsive/` reúne as que cruzam várias features.

A seção de experiências mantém seu CSS Module junto aos componentes,
em `components/experience/experience.module.css`. Novos componentes isolados
também podem usar CSS Modules ao lado do componente; use este diretório para
estilos globais e compartilhados.
