import type { ProjectGalleryContent, PublicProject } from "@/src/domain/entities/public-project";

const githubUrl = "https://github.com/GisellyPereira";
const image = (file: string) => `/images/project-gallery/${file}`;

const projectHeadings: Readonly<Record<string, readonly string[]>> = {
  "dog-room": ["Banho, tosa", "e carinho."],
  "react-frontend-challenge": ["Sua próxima", "leitura começa aqui."],
  "travel-agency": ["Novos destinos.", "Novas histórias."],
  RamenGo: ["Seu ramen,", "do seu jeito."],
  "procon-ma": ["Serviços", "mais próximos."],
  "startup-tech": ["Tecnologia", "com propósito."],
  "animais-fantasticos": ["Curiosidade", "em movimento."],
  "landingPage-vue": ["Corte, cor", "& cuidado."],
  pila: ["Finanças", "com leveza."],
  "3d-race": ["Código em", "alta velocidade."],
  "soda-animation": ["Sabores em", "movimento."],
  SOLeris: ["Energia para", "novas ideias."],
  "project-lo": ["Cuidado em", "cada escolha."],
  "E-commerce": ["Do desejo", "ao carrinho."],
  "dashboard-finance": ["Dados com", "mais clareza."],
  "api-weather": ["Um olhar", "para o tempo."],
  "build-rocket": ["Planetas em movimento", "e descobertas da NASA"],
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
      id: "fala-ati",
      title: "Fala, Ati!",
      category: "Web",
      description: "Portal de conteúdo da ATI Maranhão que reúne podcasts, entrevistas, notícias e iniciativas sobre tecnologia, inovação e transformação digital no estado.",
      technology: "React · Vite · CSS",
      imageSrc: image("fala-ati.png"),
      imageAspectRatio: "1846 / 980",
      deployUrl: "https://fala.ati.ma.gov.br/",
    },
    repository("dog-room", "Dog Room", "Landing page para banho e tosa com identidade em amarelo, lilás e preto, apresentação dos serviços, galeria de pets com fotos ampliáveis e contato pelo WhatsApp. Layout responsivo para computador e celular.", "Next.js · React · TypeScript · GSAP · Lenis", { imageSrc: image("dog-room.jpg"), imageFit: "contain", imageAspectRatio: "1425 / 990", deployUrl: "https://dog-room.netlify.app/", landingPage: { niche: "pets", format: "Landing page", context: "Projeto de portfólio" } }),
    repository("soda-animation", "Soda Animation — VIVA", "Projeto que criei para testar animações e interações com scroll. Uma hero de bebidas com transições suaves entre sabores, movimento de frutas em camadas, mudança de cores e controles para computador e celular.", "HTML · CSS · JavaScript · requestAnimationFrame", { category: "Experimento", imageSrc: image("soda-animation-mirtilo.jpg"), deployUrl: "https://peppy-dieffenbachia-a483e1.netlify.app/", landingPage: { niche: "gastronomia", format: "Landing page", context: "Estudo" } }),
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
      landingPage: { niche: "midia", format: "Portal", context: "Projeto profissional" },
    },
    repository("pila", "Pila", "Aplicativo de organização financeira pessoal para acompanhar renda, contas e gastos no cartão. Agenda de pagamentos e recebimentos, categorias interativas, projeção de saldo e simulação de compras à vista ou parceladas, com dados armazenados no aparelho.", "React Native · Expo · TypeScript · AsyncStorage", { category: "Mobile", imageSrc: image("pila-cover.png") }),
    repository(
      "cook.",
      "COOK FROM THIS",
      "Aplicativo para iOS e Android que encontra receitas a partir dos ingredientes da sua cozinha. Integração com a TheMealDB, cálculo de compatibilidade, receitas salvas e lista de compras com armazenamento local.",
      "React Native · Expo · TypeScript · AsyncStorage",
      { category: "Mobile", imageSrc: image("cook-from-this-cover.svg") },
    ),
    repository("react-frontend-challenge", "Libris", "Biblioteca pessoal para descobrir livros, montar uma estante virtual e acompanhar suas leituras. Busca integrada ao Google Books, temas claro e escuro e uma identidade visual inspirada no universo dos livros.", "React · TypeScript · Vite · TanStack Query · Zustand", { imageSrc: image("libris-discover.png"), deployUrl: "https://libris-tests.netlify.app/login" }),
    repository("travel-agency", "Travel Agency", "Descoberta de destinos com busca mundial de cidades e atrações, fotografias, clima, mapas, lugares próximos e favoritos. Carrossel em tela inteira, planejamento de viagem e scroll suave com Lenis.", "Next.js · React · TypeScript · Framer Motion · Lenis", { imageSrc: image("travel-agency.png"), deployUrl: "https://agency-travvel.netlify.app/", landingPage: { niche: "turismo", format: "Landing page", context: "Projeto de portfólio" } }),
    repository("RamenGo", "RamenGo", "Experiência interativa de ramen com pratos que giram conforme a rolagem e um montador com 144 variações visuais. Caldo, proteína e adicionais aparecem no bowl escolhido, com preço atualizado a cada seleção.", "JavaScript · HTML · CSS · Webpack", { imageSrc: image("ramengo-hero.png"), deployUrl: "https://ramengo-lamen.netlify.app/", imageFit: "contain", imageAspectRatio: "1425 / 990", landingPage: { niche: "gastronomia", format: "Landing page", context: "Projeto de portfólio" } }),
    {
      id: "procon-ma",
      title: "Viva Procon",
      heading: projectHeadings["procon-ma"],
      category: "Mobile",
      description: "Atuação na evolução do aplicativo oficial do Procon Maranhão, aproximando os serviços públicos de quem precisa deles.",
      technology: "React Native · Expo · TypeScript",
      imageSrc: "/images/featured-projects/procon-preview.svg",
      storeLinks: [
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=br.gov.ma.proconapp&hl=pt_BR" },
        { label: "App Store", href: "https://apps.apple.com/br/app/viva-procon/id1551670032" },
      ],
      deployUrl: "https://play.google.com/store/apps/details?id=br.gov.ma.proconapp&hl=pt_BR",
    },
    repository("startup-tech", "Startup Tech", "Landing page de tecnologia com uma apresentação objetiva, design responsivo e foco em comunicar valor com clareza.", "TypeScript", { imageSrc: image("startup-tech-home.png"), deployUrl: "https://statup-tech.netlify.app/", landingPage: { niche: "tecnologia", format: "Landing page", context: "Projeto de portfólio" } }),
    repository("animais-fantasticos", "Animais Fantásticos", "Um estudo de JavaScript ES6 desenvolvido a partir do curso da Origamid, explorando conteúdo, navegação e interações.", "JavaScript · HTML · CSS", { imageSrc: image("animais.jpg"), deployUrl: "https://gisellypereira.github.io/animais-fantasticos/" }),
    repository("landingPage-vue", "Aveline", "Site conceitual de salão de beleza com identidade em vinho e marfim, fotografia editorial, menu de cuidados interativo, caderno de manutenção e planejamento de visita. Desenvolvido inteiramente em Vue 3, com scroll suave e navegação por teclado.", "Vue 3 · Vite · CSS · Lenis", { imageSrc: image("aveline.png"), deployUrl: "https://clever-starburst-2a2467.netlify.app/", imageFit: "contain", imageAspectRatio: "1265 / 712", landingPage: { niche: "saude", format: "Site institucional", context: "Projeto conceitual" } }),
    repository("3d-race", "3D Race — Costa Sprint", "Mini-game de corrida costeira criado para testar e aprender Three.js, com três pistas, dificuldade crescente e controles para computador e celular.", "Three.js · TypeScript · Vite", { imageSrc: image("costa-sprint.png"), deployUrl: "https://costa-sprint.netlify.app/" }),
    repository("SOLeris", "Soleris", "Landing page de uma empresa fictícia de energia solar. Estudo de design system, arquitetura limpa e interfaces voltadas à conversão.", "Next.js · TypeScript · CSS", { imageSrc: image("soleris.png"), deployUrl: "https://soleris-energy.netlify.app/", landingPage: { niche: "energia", format: "Landing page", context: "Projeto conceitual" } }),
    repository("project-lo", "Nutriviva", "Site conceitual de nutrição com identidade editorial, caminhos de acompanhamento, caderno de leituras e contato. Fotografias de alimentos e uma composição pensada para a vida cotidiana.", "Next.js · React · TypeScript · CSS · Lenis", { imageSrc: image("nutriviva.webp"), deployUrl: "https://nutriviva-nutri.netlify.app/", landingPage: { niche: "saude", format: "Site institucional", context: "Projeto conceitual" } }),
    repository("E-commerce", "E-commerce", "Uma loja de coxinhas feita em React, com apresentação de produtos, carrinho e uma jornada de finalização de pedido.", "React · JavaScript", { imageSrc: image("coxinhas-select.jpg"), deployUrl: "https://lustrous-buttercream-8b33b4.netlify.app/", imageFit: "contain", imageAspectRatio: "1265 / 720", landingPage: { niche: "comercio", format: "Loja virtual", context: "Projeto de portfólio" } }),
    repository("dashboard-finance", "Dashboard Finance", "Dashboard de controle financeiro para cadastrar receitas e despesas, acompanhar o saldo e consultar relatórios por período e categoria. Interface glass responsiva, gráficos de movimentação e exportação em CSV, com registros salvos no navegador.", "Vue 3 · Nuxt 3 · TypeScript · Chart.js", { imageSrc: image("dashboard-finance.png"), imageFit: "contain", imageAspectRatio: "1742 / 956", deployUrl: "https://teal-raindrop-900d17.netlify.app/" }),
    repository("api-weather", "Weather", "Projeto de front-end em TypeScript dedicado a uma experiência de consulta de clima. Código disponível para explorar no GitHub.", "TypeScript", { imageSrc: image("weather.jpg"), imageFit: "contain", imageAspectRatio: "1265 / 900", deployUrl: "https://tourmaline-licorice-702b65.netlify.app/" }),
    repository("build-rocket", "Build Rocket", "Aplicativo de exploração espacial com Terra, Marte, Júpiter, Saturno e Lua em 3D. Rotação livre, zoom por gesto, coleções da NASA, busca com filtros por época e descobertas salvas no aparelho.", "React Native · Expo · TypeScript · Three.js · TanStack Query · AsyncStorage", { category: "Mobile", imageSrc: image("build-rocket-cover.png"), imageFit: "contain", imageAspectRatio: "1440 / 990" }),
  ],
} as const satisfies ProjectGalleryContent;
