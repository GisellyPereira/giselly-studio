import type { ProjectGalleryContent, PublicProject } from "@/src/domain/entities/public-project";

const githubUrl = "https://github.com/GisellyPereira";
const image = (file: string) => `/images/project-gallery/${file}`;

const projectHeadings: Readonly<Record<string, readonly string[]>> = {
  "react-frontend-challenge": ["Sua próxima", "leitura começa aqui."],
  "travel-agency": ["Novos destinos.", "Novas histórias."],
  RamenGo: ["Seu ramen,", "do seu jeito."],
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
  "site-exposicao": ["Arte para", "descobrir."],
  selezione: ["Detalhes que", "fazem sentido."],
  "teste-pandanjo": ["Cada escolha,", "uma experiência."],
  "dashboard-finance": ["Dados com", "mais clareza."],
  "api-weather": ["Um olhar", "para o tempo."],
  "management-system": ["Mais ordem.", "Menos ruído."],
  "Desafio-Lista-Cursos": ["Aprender abre", "novos caminhos."],
  lente: ["Novas ideias.", "Novos olhares."],
  strapi: ["Explorar para", "ir mais longe."],
  "build-rocket": ["Uma ideia.", "Um novo começo."],
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
    {
      id: "hubnews-app",
      title: "HubNews — App",
      category: "Mobile",
      description: "Aplicativo de notícias de tecnologia e inteligência artificial, com favoritos e preferências de leitura.",
      technology: "React Native · API REST · UX Mobile",
      imageSrc: "/images/featured-projects/hubnews-app-preview.svg",
      deployUrl: "https://apps.apple.com/br/app/hubnews-ai/id6748926138",
    },
    {
      id: "hubnews-web",
      title: "HubNews — Web",
      category: "Web",
      description: "Portal de tecnologia e inteligência artificial com destaques, últimas notícias e navegação por assuntos.",
      technology: "Next.js · React · TypeScript",
      imageSrc: "/images/featured-projects/hubnews-web.png",
      deployUrl: "https://hubnews.ai/",
    },
    repository("pila", "Pila", "Aplicativo de organização financeira pessoal para acompanhar renda, contas e gastos no cartão. Agenda de pagamentos e recebimentos, categorias interativas, projeção de saldo e simulação de compras à vista ou parceladas, com dados armazenados no aparelho.", "React Native · Expo · TypeScript · AsyncStorage", { category: "Mobile", imageSrc: image("pila-cover.png") }),
    repository("react-frontend-challenge", "Libris", "Biblioteca pessoal para descobrir livros, montar uma estante virtual e acompanhar suas leituras. Busca integrada ao Google Books, temas claro e escuro e uma identidade visual inspirada no universo dos livros.", "React · TypeScript · Vite · TanStack Query · Zustand", { imageSrc: image("libris-discover.png"), deployUrl: "https://libris-tests.netlify.app/login" }),
    repository("travel-agency", "Travel Agency", "Descoberta de destinos com busca mundial de cidades e atrações, fotografias, clima, mapas, lugares próximos e favoritos. Carrossel em tela inteira, planejamento de viagem e scroll suave com Lenis.", "Next.js · React · TypeScript · Framer Motion · Lenis", { imageSrc: image("travel-agency.png"), deployUrl: "https://agency-travvel.netlify.app/" }),
    repository("RamenGo", "RamenGo", "Uma experiência de pedido de ramen, com escolhas de ingredientes e validações que acompanham cada etapa da interação.", "JavaScript · HTML · CSS", { imageSrc: image("ramen.png") }),
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
    repository("3d-race", "3D Race — Costa Sprint", "Mini-game de corrida costeira criado para testar e aprender Three.js, com três pistas, dificuldade crescente e controles para computador e celular.", "Three.js · TypeScript · Vite", { imageSrc: image("costa-sprint.png"), deployUrl: "https://costa-sprint.netlify.app/" }),
    repository("SOLeris", "Soleris", "Landing page de uma empresa fictícia de energia solar. Estudo de design system, arquitetura limpa e interfaces voltadas à conversão.", "Next.js · TypeScript · Tailwind", { monogram: "SOL" }),
    repository("project-lo", "Nutriviva", "Site demonstrativo de uma nutricionista fictícia, com serviços, planos e contato. Um exercício de experiência digital para a área de saúde.", "Next.js · Tailwind · Framer Motion", { monogram: "nv" }),
    repository("E-commerce", "E-commerce", "Uma loja de coxinhas feita em React, com apresentação de produtos, carrinho e uma jornada de finalização de pedido.", "React · JavaScript", { imageSrc: image("ecommerce.png") }),
    repository("site-exposicao", "Site Exposição", "Uma experiência web para apresentar uma exposição, combinando identidade visual, imagens e conteúdo.", "CSS · Front-end", { imageSrc: image("exposicao.png") }),
    repository("selezione", "Selezione", "Projeto de interface web com composições visuais e conteúdo responsivo. A implementação completa está no GitHub.", "HTML · CSS", { imageSrc: image("selezione.png") }),
    repository("teste-pandanjo", "Produto & carrinho", "Desafio de e-commerce com seleção de cor e tamanho, validação do carrinho e interação para cálculo de frete.", "JavaScript", { imageSrc: image("pandanjo.jpg") }),
    repository("dashboard-finance", "Dashboard Finance", "Projeto de dashboard financeiro em Vue. Uma exploração de interface para organizar a apresentação de informações.", "Vue · Front-end", { monogram: "+" }),
    repository("api-weather", "Weather", "Projeto de front-end em TypeScript dedicado a uma experiência de consulta de clima. Código disponível para explorar no GitHub.", "TypeScript", { monogram: "°" }),
    repository("management-system", "Management System", "Projeto de sistema de gestão em TypeScript, disponível como parte dos meus estudos e experimentos de desenvolvimento.", "TypeScript", { monogram: "MS" }),
    repository("Desafio-Lista-Cursos", "Lista de Cursos", "Desafio técnico de uma plataforma de ensino: listagem de cursos com consumo de dados de um webservice.", "CSS · APIs", { monogram: "Aa" }),
    repository("lente", "Lente", "Projeto em TypeScript disponível no meu GitHub. Um espaço para explorar ideias e sua implementação em código.", "TypeScript", { category: "Experimento", monogram: "le" }),
    repository("strapi", "Strapi", "Repositório de desenvolvimento web em JavaScript, disponível no GitHub entre meus projetos e estudos.", "JavaScript", { category: "Experimento", monogram: "S" }),
    repository("build-rocket", "Build Rocket", "Projeto de desenvolvimento em JavaScript. Código disponível no GitHub como parte da minha trajetória de aprendizado.", "JavaScript", { category: "Experimento", monogram: "BR" }),
  ],
} as const satisfies ProjectGalleryContent;
