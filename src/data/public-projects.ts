import type { ProjectGalleryContent, PublicProject } from "@/src/domain/entities/public-project";

const githubUrl = "https://github.com/GisellyPereira";
const image = (file: string) => `/images/project-gallery/${file}`;

const projectHeadings: Readonly<Record<string, readonly string[]>> = {
  "travel-agency": ["Novos destinos.", "Novas histórias."],
  RamenGo: ["Seu ramen,", "do seu jeito."],
  "project-artwalk": ["Estilo em", "cada detalhe."],
  "procon-ma": ["Serviços", "mais próximos."],
  "startup-tech": ["Tecnologia", "com propósito."],
  "projeto-rosa": ["Ideias que", "florescem."],
  "animais-fantasticos": ["Curiosidade", "em movimento."],
  "landingPage-vue": ["Leveza em", "cada interação."],
  pila: ["Finanças", "com leveza."],
  "3d-race": ["Código em", "alta velocidade."],
  SOLeris: ["Energia para", "novas ideias."],
  "project-lo": ["Cuidado em", "cada escolha."],
  "E-commerce": ["Do desejo", "ao carrinho."],
  brain: ["Uma pergunta.", "Novas ideias."],
  "site-exposicao": ["Arte para", "descobrir."],
  "GitHub-User-Lookup-App": ["Pessoas além", "do código."],
  selezione: ["Detalhes que", "fazem sentido."],
  "LP-cashback": ["Escolhas que", "voltam pra você."],
  "teste-pandanjo": ["Cada escolha,", "uma experiência."],
  "dashboard-finance": ["Dados com", "mais clareza."],
  "api-weather": ["Um olhar", "para o tempo."],
  "management-system": ["Mais ordem.", "Menos ruído."],
  "Desafio-Lista-Cursos": ["Aprender abre", "novos caminhos."],
  lente: ["Novas ideias.", "Novos olhares."],
  python: ["Aprender uma", "nova linguagem."],
  "meu-projeto": ["Um espaço para", "experimentar."],
  strapi: ["Explorar para", "ir mais longe."],
  "teste-motocaSystems-frontEnd": ["Desafios que", "viram código."],
  "introducao-RN": ["Primeiros passos", "no mobile."],
  "build-rocket": ["Uma ideia.", "Um novo começo."],
  "login-missao2": ["O começo de", "uma experiência."],
};

function repository(
  id: string,
  title: string,
  description: string,
  technology: string,
  extras: Partial<Omit<PublicProject, "id" | "title" | "description" | "technology" | "repositoryUrl">> = {},
): PublicProject {
  return { id, title, heading: projectHeadings[id], description, technology, category: "Web", repositoryUrl: `${githubUrl}/${id}`, ...extras };
}

// Catálogo público conferido em 02/09/2026. Sem dependência da API durante a navegação.
// Critérios, links indisponíveis e créditos das capas: public/images/project-gallery/SOURCES.md.
export const projectGalleryContent = {
  heading: ["Do código", "para o mundo."],
  githubUrl,
  projects: [
    repository("travel-agency", "Travel Agency", "Uma interface de viagens para explorar destinos e novas possibilidades. Um projeto de front-end disponível no meu GitHub.", "TypeScript", { imageSrc: image("travel.jpg") }),
    repository("RamenGo", "RamenGo", "Uma experiência de pedido de ramen, com escolhas de ingredientes e validações que acompanham cada etapa da interação.", "JavaScript · HTML · CSS", { imageSrc: image("ramen.png") }),
    repository("project-artwalk", "Artwalk", "Exploração de uma interface de e-commerce de sneakers, com uma linguagem visual focada nos produtos.", "HTML · CSS", { imageSrc: image("artwalk.png") }),
    {
      id: "procon-ma",
      title: "Procon MA",
      heading: projectHeadings["procon-ma"],
      category: "Mobile",
      description: "Atuação na evolução do aplicativo oficial do Procon Maranhão, aproximando os serviços públicos de quem precisa deles.",
      technology: "React Native · Expo · TypeScript",
      imageSrc: "/images/featured-projects/app-procon.png",
      deployUrl: "https://play.google.com/store/apps/details?id=br.gov.ma.proconapp&hl=pt_BR",
    },
    repository("startup-tech", "Startup Tech", "Landing page de tecnologia com uma apresentação objetiva, design responsivo e foco em comunicar valor com clareza.", "TypeScript", { imageSrc: image("startup.png") }),
    repository("projeto-rosa", "Projeto Rosa", "Projeto de interface web com identidade visual própria. Código e materiais da experiência disponíveis no repositório.", "HTML · CSS", { imageSrc: image("rosa.png") }),
    repository("animais-fantasticos", "Animais Fantásticos", "Um estudo de JavaScript ES6 desenvolvido a partir do curso da Origamid, explorando conteúdo, navegação e interações.", "JavaScript · HTML · CSS", { imageSrc: image("animais.jpg"), deployUrl: "https://gisellypereira.github.io/animais-fantasticos/" }),
    repository("landingPage-vue", "Landing Page Vue", "Uma landing page leve e responsiva, com transições suaves e uma experiência visual construída com Vue.js.", "Vue.js · CSS", { imageSrc: image("landing-vue.jpg"), deployUrl: "https://clever-starburst-2a2467.netlify.app/" }),
    repository("pila", "Pila", "Aplicativo de finanças pessoais com humor, mascote e gamificação. Um projeto mobile que aproxima organização financeira e personalidade.", "TypeScript · Mobile", { category: "Mobile", monogram: "$" }),
    repository("3d-race", "3D Race — Costa Sprint", "Mini-game de corrida costeira criado para testar e aprender Three.js, com três pistas, dificuldade crescente e controles para computador e celular.", "Three.js · TypeScript · Vite", { imageSrc: image("costa-sprint.png"), deployUrl: "https://costa-sprint.netlify.app/" }),
    repository("SOLeris", "Soleris", "Landing page de uma empresa fictícia de energia solar. Estudo de design system, arquitetura limpa e interfaces voltadas à conversão.", "Next.js · TypeScript · Tailwind", { monogram: "SOL" }),
    repository("project-lo", "Nutriviva", "Site demonstrativo de uma nutricionista fictícia, com serviços, planos e contato. Um exercício de experiência digital para a área de saúde.", "Next.js · Tailwind · Framer Motion", { monogram: "nv" }),
    repository("E-commerce", "E-commerce", "Uma loja de coxinhas feita em React, com apresentação de produtos, carrinho e uma jornada de finalização de pedido.", "React · JavaScript", { imageSrc: image("ecommerce.png") }),
    repository("brain", "Brain Quiz", "Uma aplicação de quiz para explorar perguntas e respostas em uma interface web interativa.", "JavaScript", { monogram: "?", deployUrl: "https://643daad7aeaf4018dc6595f5--incomparable-liger-f1d744.netlify.app/" }),
    repository("site-exposicao", "Site Exposição", "Uma experiência web para apresentar uma exposição, combinando identidade visual, imagens e conteúdo.", "CSS · Front-end", { imageSrc: image("exposicao.png") }),
    repository("GitHub-User-Lookup-App", "GitHub User Lookup", "Uma interface para consultar perfis do GitHub e explorar informações de usuários em um só lugar.", "JavaScript · CSS", { monogram: "@", deployUrl: "https://gisellypereira.github.io/GitHub-User-Lookup-App/" }),
    repository("selezione", "Selezione", "Projeto de interface web com composições visuais e conteúdo responsivo. A implementação completa está no GitHub.", "HTML · CSS", { imageSrc: image("selezione.png") }),
    repository("LP-cashback", "Cashback", "Landing page com foco na apresentação de uma experiência de cashback e em uma identidade visual orientada a produtos.", "HTML · CSS", { imageSrc: image("cashback.png") }),
    repository("teste-pandanjo", "Produto & carrinho", "Desafio de e-commerce com seleção de cor e tamanho, validação do carrinho e interação para cálculo de frete.", "JavaScript", { imageSrc: image("pandanjo.jpg") }),
    repository("dashboard-finance", "Dashboard Finance", "Projeto de dashboard financeiro em Vue. Uma exploração de interface para organizar a apresentação de informações.", "Vue · Front-end", { monogram: "+" }),
    repository("api-weather", "Weather", "Projeto de front-end em TypeScript dedicado a uma experiência de consulta de clima. Código disponível para explorar no GitHub.", "TypeScript", { monogram: "°" }),
    repository("management-system", "Management System", "Projeto de sistema de gestão em TypeScript, disponível como parte dos meus estudos e experimentos de desenvolvimento.", "TypeScript", { monogram: "MS" }),
    repository("Desafio-Lista-Cursos", "Lista de Cursos", "Desafio técnico de uma plataforma de ensino: listagem de cursos com consumo de dados de um webservice.", "CSS · APIs", { monogram: "Aa" }),
    repository("lente", "Lente", "Projeto em TypeScript disponível no meu GitHub. Um espaço para explorar ideias e sua implementação em código.", "TypeScript", { category: "Experimento", monogram: "le" }),
    repository("python", "Estudos em Python", "Repositório de estudos em Python. Exercícios e experimentos para ampliar meu repertório de programação.", "Python", { category: "Experimento", monogram: "py" }),
    repository("meu-projeto", "Experimentos em JavaScript", "Um dos meus repositórios de desenvolvimento em JavaScript, com código aberto para acompanhar e explorar.", "JavaScript", { category: "Experimento", monogram: "JS" }),
    repository("strapi", "Strapi", "Repositório de desenvolvimento web em JavaScript, disponível no GitHub entre meus projetos e estudos.", "JavaScript", { category: "Experimento", monogram: "S" }),
    repository("teste-motocaSystems-frontEnd", "Motoca Systems", "Desafio de front-end em JavaScript. Uma implementação para exercitar construção de interfaces e organização de código.", "JavaScript · Front-end", { monogram: "M" }),
    repository("introducao-RN", "Primeiros passos em RN", "Estudos introdutórios de React Native: explorando componentes e desenvolvimento de interfaces para dispositivos móveis.", "React Native · JavaScript", { category: "Mobile", monogram: "RN" }),
    repository("build-rocket", "Build Rocket", "Projeto de desenvolvimento em JavaScript. Código disponível no GitHub como parte da minha trajetória de aprendizado.", "JavaScript", { category: "Experimento", monogram: "BR" }),
    repository("login-missao2", "Interface de Login", "Estudo de uma interface de login em JavaScript, explorando a construção de uma tela de acesso.", "JavaScript", { monogram: "→" }),
  ],
} as const satisfies ProjectGalleryContent;
