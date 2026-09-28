import type { CoursesContent } from "@/src/domain/entities/course";

export const coursesContent = {
  heading: ["Cursos", "e formação"],
  description:
    "Da primeira página em HTML às interfaces com React e UI Design: cada curso amplia meu repertório e a forma como transformo ideias em experiências.",
  provider: "Origamid",
  providerLogo: "/images/courses/origamid.svg",
  courses: [
    {
      id: "html-css",
      title: "HTML e CSS para iniciantes",
      hours: 23,
      description:
        "Estrutura semântica, estilos e layouts responsivos: os fundamentos para construir páginas web do zero.",
      imageSrc: "/images/courses/html-css.jpg",
      sourceUrl: "https://www.origamid.com/curso/html-e-css-para-iniciantes/",
    },
    {
      id: "flexbox",
      title: "CSS com Flexbox",
      hours: 3,
      description:
        "Alinhamento, distribuição de espaço e composição de layouts flexíveis que se adaptam a diferentes telas.",
      imageSrc: "/images/courses/flexbox.jpg",
      sourceUrl: "https://www.origamid.com/curso/css-flexbox/",
    },
    {
      id: "javascript",
      title: "JavaScript Completo ES6",
      hours: 37,
      description:
        "Fundamentos da linguagem, manipulação do DOM e requisições com Fetch para dar vida às interfaces.",
      imageSrc: "/images/courses/javascript.jpg",
      sourceUrl: "https://www.origamid.com/curso/javascript-completo-es6/",
    },
    {
      id: "react",
      title: "React Completo",
      hours: 18,
      description:
        "Componentes, estado e hooks para desenvolver aplicações web reativas, organizadas e reutilizáveis.",
      imageSrc: "/images/courses/react.jpg",
      sourceUrl: "https://www.origamid.com/curso/react-completo/",
    },
    {
      id: "sass",
      title: "CSS com Sass",
      hours: 6,
      description:
        "Variáveis, mixins, funções e organização de estilos para escrever CSS com mais consistência e reaproveitamento.",
      imageSrc: "/images/courses/sass.jpg",
      sourceUrl: "https://www.origamid.com/curso/css-com-sass/",
    },
    {
      id: "typescript",
      title: "TypeScript para Iniciantes",
      hours: 11,
      description:
        "Tipos, interfaces e generics para trabalhar com dados e escrever JavaScript com mais segurança.",
      imageSrc: "/images/courses/typescript.jpg",
      sourceUrl: "https://www.origamid.com/curso/typescript-para-iniciantes/",
    },
    {
      id: "react-typescript",
      title: "React com TypeScript",
      hours: 3,
      description:
        "Tipagem de componentes, propriedades, eventos e hooks para unir a flexibilidade do React à segurança do TypeScript.",
      imageSrc: "/images/courses/react-typescript.jpg",
      sourceUrl: "https://www.origamid.com/curso/react-com-typescript/",
    },
    {
      id: "wordpress",
      title: "WordPress como CMS",
      hours: 9,
      description:
        "Transformação de páginas HTML em sites gerenciáveis, com conteúdo dinâmico e temas personalizados no WordPress.",
      imageSrc: "/images/courses/wordpress.jpg",
      sourceUrl: "https://www.origamid.com/curso/wordpress-como-cms/",
    },
    {
      id: "ui-design",
      title: "UI Design Avançado",
      hours: 15,
      description:
        "Cores, tipografia, grids e espaçamento para criar interfaces com clareza, personalidade e consistência visual.",
      imageSrc: "/images/courses/ui-design.jpg",
      sourceUrl: "https://www.origamid.com/curso/ui-design-avancado/",
    },
  ],
} satisfies CoursesContent;
