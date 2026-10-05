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
  whatsapp: { label: "(98) 99144-9679", href: "https://wa.me/5598991449679" },
  location: "São Luís, MA — Brasil",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/giselly-pereira" },
    { label: "GitHub", href: "https://github.com/GisellyPereira" },
  ],
  projects: [
    {
      number: "01",
      title: "Sistema Escolar — FAB",
      presentationUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7358138095839391744/",
      category: "Web",
      description:
        "Fui responsável pelo desenvolvimento completo do front-end do sistema de gestão escolar da Escola Caminho das Estrelas, ligada à Força Aérea Brasileira (FAB). Implementei as interfaces em React, Next.js e TypeScript e integrei os fluxos à API, trabalhando em equipe com o back-end e participando dos testes. Minha atuação também incluiu a criação do UI/UX: desenhar a experiência e transformar esse desenho em uma aplicação conectada aos dados e às regras do sistema.",
      color: "rose",
      imageSrc: "/images/featured-projects/school-fab-login.png",
      imageAlt: "Tela de login do Sistema Escolar da FAB, com uma criança astronauta em um foguete",
      imagePosition: "left top",
      tags: ["Next.js", "React", "TypeScript"],
      challenge:
        "O ponto de partida era uma escola que conduzia matrículas, frequência e notas de forma totalmente manual. A complexidade estava em conectar essas rotinas em uma plataforma para múltiplas instituições e unidades, com jornadas específicas para SuperAdmin, Admin, Professor, Aluno e Pais/Responsáveis. No front-end, isso exigiu traduzir regras institucionais em navegação e fluxos de uso, alinhando o comportamento das telas às integrações com o back-end e à validação em testes.",
      result:
        "Entreguei o front-end responsivo dos fluxos de matrícula, registro de frequência, lançamento de notas e comunicação com responsáveis. O sistema foi demonstrado na jornada pedagógica do Centro de Lançamento de Alcântara (CLA), e a apresentação levou à parceria com a escola para a fase de testes. Hoje, o acesso da escola ocorre por VPN, restrito ao ambiente interno da base. O projeto levou meu trabalho de interface a um contexto institucional real, com colaboração entre áreas, integração de dados e validação da solução junto à escola.",
    },
    {
      number: "02",
      title: "Teatro Arthur Azevedo",
      category: "Web",
      description:
        "Atuei no desenvolvimento do portal do Teatro Arthur Azevedo, em parceria com a coordenação do teatro e a equipe de design. O projeto apresenta a história do espaço cultural e a trajetória de Arthur Azevedo, conectando memória, acervo e programação em uma experiência digital. Minha atuação reuniu implementação de interfaces, integração com o sistema de gestão de conteúdo e construção de animações e interações, traduzindo a proposta visual em uma navegação que combina o caráter clássico da instituição com uma experiência envolvente e divertida.",
      color: "banana",
      imageSrc: "/images/featured-projects/teatro-arthur-azevedo-hero-80283d7c.png",
      deployUrl: "https://teatroarthurazevedo.ma.gov.br/",
      imageAlt: "Página inicial do site do Teatro Arthur Azevedo, com ilustração da fachada histórica",
      imagePosition: "center top",
      tags: ["React", "TypeScript", "Design responsivo"],
      challenge:
        "O desafio foi transformar um conjunto diverso de conteúdos — história, notícias, acervo, galerias e agenda cultural — em jornadas claras de descoberta e consulta. Em colaboração com a equipe de design, trabalhei o equilíbrio entre a identidade clássica do teatro e uma linguagem interativa que despertasse a curiosidade do público. A integração com o sistema de gestão também precisava refletir no portal as atualizações da equipe responsável, organizando fotos por categoria e informações de eventos sem comprometer a continuidade da experiência.",
      result:
        "Entreguei uma interface responsiva integrada ao sistema que alimenta o portal com notícias, acervo digital, informações sobre o acervo físico e galerias de fotos organizadas por categoria. O calendário reúne a programação cultural, com descrição, data e horário de cada evento, além de acesso à bilheteria digital para a compra de ingressos. Animações e interações conectam esses conteúdos à identidade do projeto, tornando a exploração mais atrativa. A solução dá autonomia à equipe para manter as informações atualizadas e aproxima o público da história e das atividades do espaço cultural.",
    },
    {
      number: "03",
      title: "Museu do Palácio dos Leões",
      category: "Web",
      description:
        "Atuei no desenvolvimento do portal do Museu do Palácio dos Leões, em colaboração com a equipe de design, para apresentar a riqueza histórica e cultural de um dos principais patrimônios do Maranhão. O projeto reúne a história do palácio, seu acervo, galerias e a trajetória dos governadores do estado. Minha atuação conectou a implementação das interfaces à integração com o sistema de gestão de conteúdo, traduzindo a direção visual em uma experiência responsiva, de linguagem clássica e tradicional, que valoriza o caráter institucional e museológico do espaço.",
      color: "sky",
      imageSrc: "/images/featured-projects/museu-palacio-leoes-hero-55546c3b.png",
      imageFit: "contain",
      deployUrl: "https://palaciodosleoes.ma.gov.br/",
      imageAlt: "Página inicial do site do Museu do Palácio dos Leões, com fotografia dos salões históricos",
      imagePosition: "center top",
      tags: ["Next.js", "UI/UX", "Acessibilidade"],
      challenge:
        "O desafio foi organizar um grande volume de informações históricas e culturais em uma navegação clara, preservando o contexto de cada conteúdo e a identidade clássica do palácio. Isso incluiu apresentar os governadores do Maranhão ao longo dos períodos imperial e republicano, até a gestão atual, além do acervo e das galerias do museu. A experiência também precisava funcionar em diferentes tamanhos de tela e oferecer conteúdo em seis idiomas, conciliando a diversidade de informações com uma leitura consistente para públicos brasileiros e internacionais.",
      result:
        "Entreguei um portal responsivo integrado ao sistema de gestão que permite à equipe responsável alimentar e atualizar os conteúdos do museu. A plataforma reúne a história do Palácio dos Leões, informações sobre o acervo, galerias e os registros dos governadores do Maranhão, organizados por período histórico. O conteúdo pode ser consultado em português, inglês, espanhol, francês, japonês e chinês (mandarim), ampliando as possibilidades de acesso ao patrimônio cultural. A solução combina autonomia editorial com uma apresentação clássica e uma navegação que favorece a exploração de um acervo rico em informação.",
    },
    {
      number: "04",
      title: "Libris",
      category: "Web",
      description:
        "Criei o Libris como um projeto pessoal para explorar animações, criatividade e experiência do usuário em uma biblioteca digital integrada à Google Books API. Fui responsável pelo layout, pelo desenvolvimento completo do front-end e pelos testes unitários e de integração. A proposta foi aproximar a interface do universo da leitura: livros salvos aparecem em uma estante com prateleiras, transformando a organização da coleção em parte da experiência visual. Desenvolvido em React e TypeScript, o projeto combina uma identidade própria com descoberta de livros e revistas, interações e acompanhamento de leituras.",
      color: "rose",
      imageSrc: "/images/project-gallery/libris-discover.png",
      imageAlt: "Tela de descoberta de livros da biblioteca pessoal Libris",
      tags: ["React", "TypeScript", "Vite", "TanStack Query", "Zustand"],
      repositoryUrl: "https://github.com/GisellyPereira/react-frontend-challenge",
      deployUrl: "https://libris-tests.netlify.app/login",
      challenge:
        "O desafio foi transformar um catálogo amplo de livros e revistas em uma experiência de descoberta e organização com personalidade, mantendo clareza e fluidez. Além de criar o layout e as animações, trabalhei a busca, os filtros e os estados de carregamento, erro e resultados vazios. Separei os dados remotos da API, gerenciados com TanStack Query, do estado da estante, persistido no navegador com Zustand. Também conciliei a apresentação em prateleiras com uma visualização em tabela, adaptando a navegação para dispositivos móveis e respeitando a preferência por movimento reduzido.",
      result:
        "Entreguei uma aplicação responsiva com busca por título, autoria ou assunto, sugestões de leitura, exploração de revistas e detalhes dos livros, incluindo pré-visualização quando disponível. A estante permite salvar e remover títulos, acompanhar os status Quero ler, Lendo e Lido e organizar a coleção com busca, filtros, ordenação e paginação. Temas claro e escuro e animações reforçam a identidade do produto. Implementei testes com Vitest e React Testing Library para componentes, integrações e fluxos de uso, exercitando o ciclo completo de um projeto front-end: concepção visual, implementação, integração com API e validação do comportamento.",
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
      title: "Viva Procon",
      category: "Mobile",
      deployUrl: "https://play.google.com/store/apps/details?id=br.gov.ma.proconapp&hl=pt_BR",
      storeLinks: [
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=br.gov.ma.proconapp&hl=pt_BR" },
        { label: "App Store", href: "https://apps.apple.com/br/app/viva-procon/id1551670032" },
      ],
      description:
        "Reconstruí em React Native o aplicativo Viva Procon, ampliando uma solução já existente para oferecer serviços públicos e de defesa do consumidor à população de todo o Maranhão. Minha atuação reuniu implementação mobile e design de produto: desenhei no Figma o novo protótipo e transformei as propostas em telas e funcionalidades integradas aos serviços do órgão.",
      year: "2026",
      color: "banana",
      imageSrc: "/images/featured-projects/procon-preview.svg",
      hideDetailGallery: true,
      imageAlt: "Telas de início, notícias, página não encontrada e abertura do Viva Procon",
      tags: ["React Native", "Expo", "TypeScript"],
      screenshots: [
        { src: "/images/featured-projects/procon-home.png", alt: "Tela inicial do Viva Procon com serviços em destaque", caption: "Início e serviços", width: 750, height: 1624 },
        { src: "/images/featured-projects/procon-news.png", alt: "Tela de notícias do Viva Procon", caption: "Notícias", width: 750, height: 1624 },
        { src: "/images/featured-projects/procon-404.png", alt: "Página não encontrada do Viva Procon com opção de voltar ao início", caption: "Página não encontrada", width: 750, height: 1624 },
        { src: "/images/featured-projects/procon-splash.png", alt: "Tela de abertura do Viva Procon com marcas do Governo do Maranhão e da ATI", caption: "Abertura do aplicativo", width: 750, height: 1624 },
      ],
      challenge:
        "Evoluir o aplicativo exigiu conciliar melhorias de experiência com as regras e limitações da solução anterior. No Figma, redesenhei e adaptei os fluxos dentro do que podia ser alterado; na implementação, refiz o aplicativo em React Native e conectei as jornadas às integrações necessárias. O foco foi tornar o acesso aos serviços mais claro sem perder a continuidade dos processos que já atendiam a população.",
      result:
        "A nova versão ampliou o acesso a agendamentos e às notificações relacionadas ao atendimento, integrou notícias e a verificação da carteirinha de pessoas com Transtorno do Espectro Autista (TEA). Também incorporou o fluxo de reclamações, permitindo que o cidadão registre sua demanda diretamente pelo aplicativo. Disponível para Android e iOS, o Viva Procon reúne esses serviços em uma experiência mobile voltada ao atendimento em todo o estado.",
    },
    {
      number: "06",
      title: "HubNews — App",
      category: "Mobile",
      description:
        "A empresa responsável pelo HubNews me procurou para desenvolver uma nova versão do aplicativo, com uma proposta diferente da anterior. Atuei na concepção da experiência, criação do layout e implementação do front-end em React Native. O produto reúne notícias sobre tecnologia e seus impactos em áreas como games, governo e economia, com conteúdo produzido e publicado por inteligência artificial.",
      color: "sky",
      imageSrc: "/images/featured-projects/hubnews-app-preview.svg",
      hideDetailGallery: true,
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
        "O desafio foi transformar uma proposta editorial ampla em uma experiência mobile fácil de explorar. Trabalhei a organização das categorias, a hierarquia das notícias e os fluxos de leitura para dar clareza a assuntos e formatos diferentes. O contexto também exigiu compreender como agentes de IA alimentavam o produto — da geração de imagens à produção e publicação de notícias — e considerar esse funcionamento nas decisões de interface.",
      result:
        "Desenvolvi o front-end da nova experiência, com navegação por assuntos, favoritos e preferências de leitura, em um aplicativo publicado na App Store. Além das notícias e imagens geradas por IA, o HubNews oferece podcasts com conversas entre inteligências artificiais, ampliando os formatos de acesso ao conteúdo. O projeto aprofundou minha atuação na passagem da ideia à implementação e minha compreensão de produtos alimentados por agentes de IA, conectando design de interface, desenvolvimento mobile e distribuição de conteúdo.",
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
    {
      number: "08",
      title: "RamenGo",
      category: "Web",
      description: "Experiência interativa para explorar sabores e montar um ramen. Pratos em rotação acompanham a rolagem, e o montador apresenta 144 variações com caldo, proteína e adicionais dentro do bowl.",
      color: "rose",
      imageSrc: "/images/project-gallery/ramengo-hero.png",
      imageAlt: "Vitrine do RamenGo com pratos de ramen sobre uma composição de madeira",
      imagePosition: "center top",
      repositoryUrl: "https://github.com/GisellyPereira/RamenGo",
      deployUrl: "https://ramengo-lamen.netlify.app/",
      deployLabel: "Acessar o RamenGo",
      tags: ["JavaScript", "HTML", "CSS", "Webpack"],
      screenshots: [
        { src: "/images/project-gallery/ramengo-hero.png", alt: "Hero do RamenGo com o sabor Shoyu em destaque", caption: "Sabores em movimento", width: 1425, height: 990 },
        { src: "/images/project-gallery/ramengo-builder.png", alt: "Montador de ramen com ovo marinado, nori, shiitake e milho", caption: "Seu bowl, ingrediente por ingrediente", width: 1425, height: 990 },
      ],
      challenge: "Integrar uma vitrine animada a um montador que represente visualmente cada combinação de ingredientes, mantendo clareza em telas grandes e pequenas.",
      result: "Uma interface responsiva com 144 fotografias de combinações, atualização do preço e resumo acessível. Cardápio demonstrativo, sem compra ou entrega.",
    },
    {
      number: "build-rocket",
      title: "Build Rocket",
      category: "Mobile",
      year: "2026",
      description: "Aplicativo de exploração espacial com planetas em 3D, imagens e histórias do acervo NASA e uma coleção pessoal de descobertas salvas no aparelho.",
      color: "sky",
      imageSrc: "/images/project-gallery/build-rocket-cover.png",
      imageAlt: "Telas reais do Build Rocket com Terra, Marte e Atlas NASA",
      repositoryUrl: "https://github.com/GisellyPereira/build-rocket",
      tags: ["React Native", "Expo", "TypeScript", "Three.js", "TanStack Query", "AsyncStorage"],
      screenshots: [
        { src: "/images/project-gallery/build-rocket-earth.jpg", alt: "Terra em 3D no aplicativo Build Rocket", caption: "Terra em 3D", width: 739, height: 1600 },
        { src: "/images/project-gallery/build-rocket-mars.jpg", alt: "Marte em 3D no aplicativo Build Rocket", caption: "Marte em 3D", width: 739, height: 1600 },
        { src: "/images/project-gallery/build-rocket-atlas.jpg", alt: "Atlas NASA no aplicativo Build Rocket", caption: "Atlas NASA", width: 739, height: 1600 },
        { src: "/images/project-gallery/build-rocket-observatory.jpg", alt: "Observatório no aplicativo Build Rocket", caption: "Observatório", width: 739, height: 1600 },
        { src: "/images/project-gallery/build-rocket-expedition.jpg", alt: "Minha expedição no aplicativo Build Rocket", caption: "Minha expedição", width: 739, height: 1600 },
      ],
      challenge: "Integrar interação 3D por toque a um acervo de imagens real, com rotação livre, zoom e uma interface que mantenha continuidade visual durante a exploração.",
      result: "Cinco destinos com mapas de superfície, rotação automática e manual, coleções contextuais da NASA, filtros por época, imagens ampliadas e favoritos locais. Capturas reais do fluxo no iPhone e 23 testes de comportamento e integração.",
    },
  ],
  experiences: [
    {
      id: "ati",
      period: "nov 2024 — set 2026",
      role: "Desenvolvedora Mobile · atuação Mobile & Web",
      company: "ATI — Agência Estadual de TI do Maranhão",
      companyShort: "ATI Maranhão",
      focus: "Mobile & Web",
      description:
        "Desenvolvi aplicativos e portais institucionais e culturais para o Governo do Maranhão com a equipe de sistemas: React Native, Expo, TypeScript e JavaScript no mobile; React e interfaces responsivas integradas à gestão de conteúdo na web, com história, acervos, galerias e programação. Implementei APIs REST, autenticação, formulários com Yup e envio de imagens.\n\nNo mobile, trabalhei com Expo Router e React Navigation; push via Firebase FCM e Expo Notifications em foreground, background e com o app encerrado; histórico de notificações e controle de leitura em SQLite; persistência com AsyncStorage; câmera, galeria, WebView e vibração, com gestão de permissões em Android e iOS.\n\nConfigurei Expo SDK, módulos nativos e perfis de desenvolvimento, prévia e produção no EAS Build, com APK, AAB e incremento automático de versão. Organizei componentes reutilizáveis e otimizei a renderização e as listas com memoização, FlatList e carregamento sob demanda. Participei de revisões de código e versionamento com Git e fui responsável pela publicação e atualização dos aplicativos na App Store e no Google Play.",
      tags: ["React Native", "React", "Expo", "TypeScript", "JavaScript", "Firebase FCM", "Expo Router", "SQLite", "EAS Build", "APIs REST", "Yup"],
    },
    {
      id: "pandanjo",
      period: "jan — set 2024",
      role: "Desenvolvedora Web · VTEX CMS & IO",
      company: "Pandanjo",
      companyShort: "Pandanjo",
      focus: "E-commerce",
      description:
        "Fui uma das desenvolvedoras responsáveis pelas interfaces de lojas como Nike, Chilli Beans, Authentic Feet, Santa Lolla, Móveis Linhares, Vivavinhos, Nautika e Artwalk. Trabalhei na implementação e manutenção desses e-commerces em VTEX CMS e VTEX IO. Mantive contato direto com os clientes pelo Monday para receber demandas, esclarecer necessidades e alinhar as funcionalidades e os recursos de cada solicitação.\n\nNo VTEX CMS, desenvolvi e ajustei a estrutura das páginas com HTML, os estilos com CSS e Sass e as interações com JavaScript. No VTEX IO, implementei componentes em React e trabalhei sua composição nas interfaces das lojas. Implementei layouts enviados pelos clientes ou elaborados pela equipe de design, preservando a identidade visual de cada marca.",
      tags: ["VTEX CMS", "VTEX IO", "React", "JavaScript", "HTML", "CSS", "Sass", "Monday"],
    },
    {
      id: "confia",
      period: "ago 2022 — dez 2023",
      role: "Desenvolvedora Front-End Pleno",
      company: "Confia",
      companyShort: "Confia",
      focus: "Sistemas para cartórios",
      description:
        "Desenvolvi o front-end de três sistemas para cartórios como desenvolvedora pleno, participando da análise de requisitos, implementação e manutenção das telas. Trabalhei em fluxos de registro civil — nascimentos, óbitos e casamentos — e em serviços de escrituras, autenticações e protestos. Implementei interfaces para preenchimento de dados, consulta de registros e disponibilização de informações, incluindo fluxos de troca de dados entre cartórios, em colaboração com as demais áreas da equipe.\n\nUtilizei React, Vite e JavaScript, com Redux para gerenciamento de estado e Tailwind CSS para os estilos. Desenvolvi formulários com Formik, seleção de datas com Datepicker e iconografia com React Icons. Fui responsável pela integração com o back-end, conectando formulários e consultas aos serviços do sistema e exibindo as informações retornadas nas telas. Também trabalhei na configuração do ambiente com Docker e MySQL 8.",
      tags: ["React", "Vite", "Redux", "Tailwind CSS", "Formik", "Datepicker", "React Icons", "Docker", "MySQL 8"],
    },
    {
      id: "b4d",
      period: "mai 2021 — jun 2022",
      role: "Desenvolvedora Front-End Júnior",
      company: "B4D Desenvolvimento de Sistemas",
      companyShort: "B4D",
      focus: "Web & Mobile",
      description:
        "Participei, junto à equipe, do desenvolvimento de um sistema de gestão para igrejas e do aplicativo vinculado a esse mesmo produto. No front-end web, implementei telas e componentes com React a partir dos layouts propostos pela equipe. Utilizei Redux para gerenciamento de estado, Tailwind CSS e Material UI para construir as interfaces e integrei as telas às APIs. No mobile, contribuí para a implementação do aplicativo em React Native.\n\nDesenvolvi funcionalidades de controle financeiro para registrar e acompanhar entradas e saídas no fluxo de caixa, além de cadastro e gestão de membros e consulta de aniversariantes. Minha atuação incluía transformar essas rotinas administrativas em telas funcionais, conectar os dados do sistema às interfaces, corrigir bugs e propor melhorias com a equipe. Também participei da revisão e organização do código e dos ajustes necessários para as entregas.",
      tags: ["React", "React Native", "Redux", "Tailwind CSS", "Material UI", "APIs REST"],
    },
  ],
} as const satisfies PortfolioProfile;

export const experienceContent = {
  eyebrow: "Minha trajetória profissional",
  heading: ["Minhas", "experiências."],
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
    "Expo Router",
    "React Navigation",
    "Firebase / FCM",
    "EAS Build",
    "SQLite",
    "AsyncStorage",
    "Material UI",
    "VTEX CMS",
    "Zustand",
    "Formik",
    "Yup",
    "Vitest",
    "React Testing Library",
    "Jest",
    "Docker",
    "Monday",
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
