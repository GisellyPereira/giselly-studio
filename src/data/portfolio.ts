import type {
  ExperienceContent,
  PortfolioProfile,
  ProcessStep,
  SkillsContent,
} from "@/src/domain/entities/portfolio";

export const portfolioData = {
  name: "GISELLY PEREIRA",
  initials: "Gi",
  role: "Desenvolvedora Front-End · Mobile & Web",
  email: "giselly.avpereira@gmail.com",
  location: "São Luís, MA — Brasil",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/giselly-pereira" },
    { label: "GitHub", href: "https://github.com/GisellyPereira" },
  ],
  projects: [
    {
      number: "01",
      title: "Sistema Escolar — FAB",
      category: "Web",
      description:
        "Sistema de gestão escolar criado para reunir matrículas, frequência, notas e comunicação em um único ambiente. A solução organiza a rotina de gestores e professores e torna o acompanhamento mais simples para estudantes e responsáveis.",
      color: "rose",
      imageSrc: "/images/featured-projects/school-fab-login.png",
      imageAlt: "Tela de login do Sistema Escolar da FAB, com uma criança astronauta em um foguete",
      imagePosition: "left top",
      tags: ["Next.js", "React", "TypeScript"],
      challenge:
        "Substituir processos manuais e organizar diferentes perfis de acesso — gestão, docentes, estudantes e responsáveis — sem perder clareza ou segurança.",
      result:
        "Uma experiência responsiva para múltiplas instituições, com fluxos de matrícula, frequência, notas e comunicação reunidos em um só sistema.",
    },
    {
      number: "02",
      title: "Teatro Arthur Azevedo",
      category: "Web",
      description:
        "Redesenho da presença digital de um dos principais equipamentos culturais do Maranhão. O site aproxima o público da programação, da história e dos serviços do teatro por meio de uma navegação clara e uma identidade visual conectada ao edifício histórico.",
      color: "banana",
      imageSrc: "/images/featured-projects/teatro-arthur-azevedo-site.png",
      imageAlt: "Página inicial do site do Teatro Arthur Azevedo, com ilustração da fachada histórica",
      imagePosition: "center top",
      tags: ["React", "TypeScript", "Design responsivo"],
      challenge:
        "Organizar conteúdos culturais e informações institucionais em uma navegação clara para públicos com necessidades diferentes.",
      result:
        "Interfaces responsivas que valorizam a identidade do equipamento cultural e facilitam a descoberta das informações mais importantes.",
    },
    {
      number: "03",
      title: "Museu do Palácio dos Leões",
      category: "Web",
      description:
        "Experiência digital criada para apresentar a história, os ambientes e o acervo do Palácio dos Leões. O projeto transforma conteúdo institucional em uma visita convidativa, visual e acessível antes mesmo da chegada ao museu.",
      color: "sky",
      imageSrc: "/images/featured-projects/museu-palacio-leoes-site.png",
      imageAlt: "Página inicial do site do Museu do Palácio dos Leões, com fotografia dos salões históricos",
      imagePosition: "center top",
      tags: ["Next.js", "UI/UX", "Acessibilidade"],
      challenge:
        "Traduzir a riqueza histórica do museu para o ambiente digital mantendo legibilidade, contexto e interesse visual.",
      result:
        "Uma navegação visual e acessível que conduz o público pelo patrimônio, pelas coleções e pelas informações de visitação.",
    },
    {
      number: "04",
      title: "App Reino",
      category: "Mobile",
      description:
        "Aplicativo que concentra agenda, conteúdos, atividades e comunicação de comunidades em uma única jornada. A interface foi pensada para reduzir atritos nas tarefas diárias e deixar informações importantes sempre fáceis de encontrar.",
      color: "rose",
      imageSrc: "/images/featured-projects/app-reino.png",
      imageAlt: "Aplicativo de agenda e comunidade sendo usado em um celular",
      tags: ["React Native", "TypeScript", "APIs REST"],
      challenge:
        "Transformar tarefas administrativas e diferentes jornadas de uso em fluxos móveis fáceis de entender e executar.",
      result:
        "Uma interface organizada para acompanhar informações, agenda e atividades com mais autonomia no dia a dia.",
    },
    {
      number: "05",
      title: "App Procon MA",
      category: "Mobile",
      description:
        "Evolução do aplicativo oficial do Procon Maranhão, levando serviços de defesa do consumidor para uma experiência móvel mais simples e confiável. O trabalho envolve novas jornadas, integrações, notificações e apoio contínuo às interfaces web da equipe.",
      year: "2026",
      color: "banana",
      imageSrc: "/images/featured-projects/app-procon.png",
      imageAlt: "Pessoa acessando um serviço público digital pelo celular",
      tags: ["React Native", "Expo", "TypeScript"],
      challenge:
        "Criar fluxos simples, acessíveis e confiáveis para um serviço público usado em diferentes aparelhos e contextos de conexão.",
      result:
        "Interfaces completas do layout à implementação, integrações REST, notificações push e suporte recorrente às demandas web da equipe.",
    },
    {
      number: "06",
      title: "HubNews — App",
      category: "Mobile",
      description:
        "Aplicativo de notícias sobre tecnologia e inteligência artificial. A experiência reúne leitura por assunto, favoritos e configurações de tema, notificações, idioma e tamanho de fonte.",
      color: "sky",
      imageSrc: "/images/featured-projects/hubnews-app-preview.svg",
      imageAlt: "Telas reais de início, favoritos e configurações do aplicativo HubNews",
      imagePosition: "center",
      deployUrl: "https://apps.apple.com/br/app/hubnews-ai/id6748926138",
      deployLabel: "Ver na App Store",
      tags: ["React Native", "API REST", "UX Mobile"],
      screenshots: [
        { src: "/images/featured-projects/hubnews-app-home.jpeg", alt: "Início do HubNews com notícias e filtros por assunto", caption: "Notícias por assunto", width: 739, height: 1600 },
        { src: "/images/featured-projects/hubnews-app-favorites.jpeg", alt: "Favoritos do HubNews com notícias salvas para leitura", caption: "Leituras salvas", width: 739, height: 1600 },
        { src: "/images/featured-projects/hubnews-app-settings.jpeg", alt: "Configurações de tema, notificações, idioma e tamanho de fonte do HubNews", caption: "Preferências de leitura", width: 739, height: 1600 },
      ],
      challenge:
        "Organizar as notícias em uma experiência mobile clara e permitir que cada pessoa adapte a leitura às suas preferências.",
      result:
        "Aplicativo publicado na App Store, com navegação por assuntos, favoritos e opções de personalização da leitura.",
    },
    {
      number: "07",
      title: "HubNews — Web",
      category: "Web",
      description:
        "Portal de notícias sobre tecnologia e inteligência artificial. A composição editorial organiza destaques, últimas notícias e categorias para acompanhar os assuntos em diferentes telas.",
      color: "rose",
      imageSrc: "/images/featured-projects/hubnews-web.png",
      imageAlt: "Página inicial do HubNews com destaque editorial, categorias e últimas notícias",
      imagePosition: "center top",
      deployUrl: "https://hubnews.ai/",
      deployLabel: "Acessar o site",
      tags: ["Next.js", "React", "TypeScript"],
      challenge:
        "Apresentar um fluxo contínuo de notícias com hierarquia editorial e navegação simples entre as categorias.",
      result:
        "Portal publicado com destaques, últimas notícias e acesso aos conteúdos por assunto, em uma interface responsiva.",
    },
  ],
  experiences: [
    {
      id: "ati",
      period: "nov 2024 — atual",
      role: "Desenvolvedora Mobile · atuação Mobile & Web",
      company: "ATI — Agência Estadual de TI do Maranhão",
      companyShort: "ATI Maranhão",
      focus: "Mobile & Web",
      highlight: ["Mobile de ofício.", "Web no dia a dia."],
      current: true,
      description:
        "Cargo oficial em mobile, trabalhando na evolução do app do Procon Maranhão com React Native, Expo e TypeScript. Também presto assistência frequente às demandas web, que hoje representam uma parte importante da rotina da equipe.",
      tags: ["React Native", "React", "TypeScript", "APIs REST"],
    },
    {
      id: "pandanjo",
      period: "jan — set 2024",
      role: "Desenvolvedora Web VTEX",
      company: "Pandanjo",
      companyShort: "Pandanjo",
      focus: "E-commerce",
      highlight: ["Interfaces que", "conectam marcas", "e pessoas."],
      description:
        "Desenvolvimento e aprimoramento de interfaces de e-commerce em VTEX CMS e VTEX IO para grandes marcas, com foco em experiência, eficiência e escalabilidade.",
      tags: ["VTEX IO", "JavaScript", "React", "Sass"],
    },
    {
      id: "confia",
      period: "ago 2022 — dez 2023",
      role: "Desenvolvedora Front-End Pleno",
      company: "Confia",
      companyShort: "Confia",
      focus: "Produtos digitais",
      highlight: ["Clareza para", "produtos complexos."],
      description:
        "Construção de sistemas para cartórios, da análise de requisitos à integração com backend, atuando em produtos complexos junto a equipes multidisciplinares.",
      tags: ["React", "Vite", "Redux", "Tailwind"],
    },
    {
      id: "b4d",
      period: "mai 2021 — jun 2022",
      role: "Desenvolvedora Front-End",
      company: "B4D Desenvolvimento de Sistemas",
      companyShort: "B4D",
      focus: "Web & Mobile",
      highlight: ["Onde os primeiros", "projetos ganharam", "vida."],
      description:
        "Primeiros produtos profissionais para web e mobile, criando layouts, integrações e funcionalidades em colaboração próxima com design e desenvolvimento.",
      tags: ["React", "Vue", "React Native", "Figma"],
    },
  ],
} as const satisfies PortfolioProfile;

export const experienceContent = {
  eyebrow: "Minha trajetória profissional",
  heading: ["Cada etapa,", "uma nova versão."],
  description: "Da web ao mobile, cada equipe e cada projeto ampliaram meu jeito de pensar, criar e desenvolver. Aqui estão os capítulos dessa caminhada.",
  closing: "E sigo escrevendo os próximos capítulos.",
} as const satisfies ExperienceContent;

export const skillsContent = {
  heading: ["Minhas", "skills"],
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "JavaScript",
    "Expo",
    "Tailwind CSS",
    "Sass",
    "Vite",
    "Redux",
    "TanStack Query",
    "shadcn/ui",
    "GSAP",
    "React Bits",
    "VTEX IO",
    "APIs REST",
    "Figma",
    "UI/UX",
    "Design responsivo",
    "Acessibilidade",
    "GitLab",
    "Git & GitHub",
  ],
  stickers: [
    { id: "react", label: "React", src: "/images/skills/logos/react.svg" },
    { id: "tailwind", label: "Tailwind CSS", src: "/images/skills/logos/tailwindcss.svg" },
    { id: "figma", label: "Figma", src: "/images/skills/logos/figma.svg" },
    { id: "javascript", label: "JavaScript", src: "/images/skills/logos/javascript.svg" },
    { id: "github", label: "GitHub", src: "/images/skills/logos/github.svg" },
    { id: "gitlab", label: "GitLab", src: "/images/skills/logos/gitlab.svg" },
    { id: "typescript", label: "TypeScript", src: "/images/skills/logos/typescript.svg" },
  ],
} as const satisfies SkillsContent;

export const processSteps = [
  {
    number: "01",
    title: "Descobrir",
    text: "Entender o problema, as pessoas e o que precisa mudar.",
  },
  {
    number: "02",
    title: "Dar forma",
    text: "Transformar estratégia em direção visual e protótipos.",
  },
  {
    number: "03",
    title: "Construir",
    text: "Desenvolver com precisão, movimento e performance.",
  },
  {
    number: "04",
    title: "Evoluir",
    text: "Publicar, medir e melhorar a partir do uso real.",
  },
] as const satisfies readonly ProcessStep[];
