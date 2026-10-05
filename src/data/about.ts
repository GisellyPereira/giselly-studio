import type { AboutContent } from "@/src/domain/entities/about";

export const aboutContent: AboutContent = {
  heading: ["Oi, eu sou a", "Giselly."],
  introduction: [
    "Sou a Giselly Pereira, tenho 24 anos e moro em São Luís, no Maranhão.",
    "Sou curiosa, gosto de aprender coisas novas e de criar. Na programação, encontrei espaço para colocar minhas ideias e minha criatividade em prática.",
  ],
  details: ["24 anos", "São Luís, MA"],
  portrait: {
    src: "/images/about/giselly.jpeg",
    alt: "Giselly de camiseta rosa, ao lado de uma estante de livros.",
    caption: "Um pouquinho de mim",
    width: 900,
    height: 1600,
    sideways: true,
  },
  story: {
    heading: ["Antes do", "código."],
    paragraphs: [
      "Em 2020, comecei a faculdade de enfermagem. No quarto período, tranquei o curso para estudar programação, incentivada pelo meu irmão, que já era da área.",
      "Foi um desafio porque eu mal sabia mexer em um computador. Foram muitos cursos, muitas aulas e pessoas da área me ajudando a entender por onde começar.",
      "Me dediquei bastante e, com o tempo, fui me encontrando. O que eu mais gosto é de poder colocar minhas ideias e minha criatividade no que eu faço.",
      "Esse portfólio tem muito disso. Enquanto desenvolvia, quis que ele mostrasse um pouco de quem eu sou, até nos pequenos detalhes.",
    ],
    photos: [{
          src: "/images/about/enfermagem.jpeg",
          alt: "Giselly na época da faculdade de enfermagem, de uniforme branco e máscara rosa.",
          caption: "Da época da enfermagem",
          width: 905,
          height: 1600,
        }, {
          src: "/images/about/computador.jpeg",
          alt: "Notebook com o Visual Studio Code aberto, em frente a uma TV e uma estante de livros.",
          caption: "Meus dias de estudo",
          width: 2339,
          height: 3825,
        }],
  },
  interests: {
    heading: ["Outras coisas", "que eu gosto."],
    introduction: "Gosto muito de ler, fazer crochê, pintar e desenhar. Sou curiosa e gosto de aprender coisas novas, mesmo quando não têm nada a ver com programação.",
    items: [
      { name: "Ler" },
      { name: "Fazer crochê" },
      { name: "Pintar e desenhar" },
    ],
    photo: {
      src: "/images/about/pintura.jpeg",
      alt: "Pintura de duas cerejas sobre listras amarelas, apoiada em um pequeno cavalete.",
      caption: "Uma das minhas pinturas",
      width: 903,
      height: 1600,
    },
  },
};
