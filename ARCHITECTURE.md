# Arquitetura do portfólio

O projeto usa uma adaptação pragmática de Clean Architecture para Next.js. A regra central é que as camadas internas não conhecem as externas.

```text
app/                         Entradas do Next.js
src/
├── domain/                  Entidades e contratos puros
├── data/                    Conteúdo e fontes de dados
└── presentation/
    ├── pages/               Composição das páginas
    └── components/
        ├── behavior/        Efeitos e comportamentos do navegador
        ├── layout/          Estrutura global
        ├── projects/        Feature de projetos
        ├── sections/        Seções do portfólio
        └── shared/          Componentes reutilizáveis
```

## Regra de dependências

```text
presentation → data → domain
presentation → domain
domain → nenhuma camada do projeto
```

- `domain` contém apenas TypeScript puro, sem React, Next.js ou acesso ao navegador.
- `data` implementa os dados que obedecem aos contratos do domínio.
- `presentation` recebe os dados por propriedades e renderiza a interface.
- `app` é somente o ponto de entrada do framework e delega a composição para `presentation/pages`.

## Componentização

A página atualmente exibe, nesta ordem: Hero, Projetos em destaque, Skills, Cursos, Todos os projetos e Experiência. Sobre, Processo, Contato e Footer permanecem disponíveis no código, mas não são montados em `PortfolioPage`; a navegação aponta apenas para as seções exibidas.

- Toda seção visual tem seu próprio componente em `sections`: `HeroSection`, `FeaturedProjectsSection`, `SkillsSection`, `AboutSection`, `ExperienceSection`, `ProcessSection` e `ContactSection`.
- `ExperienceSection` compõe o cabeçalho e a linha do tempo após a galeria. `ExperienceTimeline` gerencia qual capítulo está aberto e `ExperienceChapter` apresenta empresa, cargo, período e detalhes. A experiência atual começa expandida; todas respondem a clique, toque e teclado. Conteúdo fica em `data/portfolio.ts`, contratos em `domain/entities/portfolio.ts` e o visual rosa-claro em um CSS Module isolado. Não há animação de entrada da seção; apenas transições de interação com suporte a movimento reduzido.
- `CoursesSection` compõe os cursos depois de skills. Os contratos ficam em `domain/entities/course.ts`, textos e cargas horárias em `data/courses.ts`, e o hover/toque acessível em `components/courses/CourseCard`. O card reutiliza `GlassPanel` e as capas locais são imagens dos projetos didáticos da Origamid.
- `ProjectGallerySection` vem depois dos cursos, sem substituir os projetos em destaque. O catálogo público fica em `data/public-projects.ts`, o contrato em `domain/entities/public-project.ts` e a paginação de quatro itens em `hooks/useProjectGallery`. `ProjectGalleryCard` reutiliza `GlassPanel` e `ButtonLink`; `ProjectGalleryNavigation` cuida das setas e da contagem acessível. Capas e critérios de seleção estão documentados em `public/images/project-gallery/SOURCES.md`. Não há consulta à API do GitHub durante a navegação. Para adicionar um projeto, basta uma entrada com URL real no catálogo.
- Os adesivos de skills ficam em `components/skills`: a arte vetorial (`SkillStickerArtwork`) é separada do componente interativo (`DraggableSkillSticker`) e do comportamento de ponteiro/teclado (`hooks/useStickerDrag`). As logos originais permanecem em `public/images/skills/logos`.
- O fundo com parallax usa `shared/ParallaxBackground` e `hooks/useScrollParallax`: apenas a imagem se move, com atualização por frame, pausa fora da tela e respeito à preferência de movimento reduzido.
- A rolagem suave global fica em `behavior/SmoothScroll`, montada uma única vez no layout raiz com Lenis. Os efeitos existentes continuam acompanhando o scroll nativo; âncoras e movimento reduzido são respeitados, e o toque mantém a inércia nativa.
- Modais usam `hooks/usePageScrollLock` para pausar tanto o scroll da página quanto a inércia do Lenis. Áreas internas roláveis recebem `data-lenis-prevent`, permitindo ler o conteúdo sem mover a página ao fundo.
- Uma feature com regras próprias tem sua própria pasta, como `projects`.
- `ProjectGalleryHeading` mantém os títulos sobrepostos em uma área de altura estável: a troca por hover/foco faz crossfade com subida, sem deslocar a seção. Os textos ficam em `data/public-projects.ts`. A mesma duração e curva CSS coordenam a expansão dos cards e a cor de fundo; `useProjectGallery` evita flashes ao cruzar entre cards. A preferência por movimento reduzido continua respeitada.
- Elementos reutilizados por mais de uma feature ficam em `shared`.
- Ações reutilizam `Button` ou `ButtonLink`, definidos em `shared/Button.tsx`; as variantes preservam a semântica de botão ou link e compartilham a animação de preenchimento circular.
- Dados e textos profissionais ficam fora dos componentes, em `src/data/portfolio.ts`.
- Componentes são Server Components por padrão. `"use client"` só é usado quando há estado, eventos ou APIs do navegador.

## Como evoluir

Ao adicionar uma nova seção, crie o contrato necessário no domínio, coloque o conteúdo em `data`, desenvolva o componente na pasta da feature ou em `sections` e faça a composição em `PortfolioPage`. Evite importar dados diretamente em componentes visuais: passe-os por propriedades para manter as dependências explícitas e os componentes testáveis.
