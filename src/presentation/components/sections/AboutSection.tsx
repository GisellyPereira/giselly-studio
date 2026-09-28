import { ArrowIcon } from "@/src/presentation/components/shared/Icons";
import { SectionTopline } from "@/src/presentation/components/shared/SectionTopline";

export function AboutSection() {
  return (
    <section className="intro" id="sobre">
      <SectionTopline label="Um pouco além do código" index="01 — Manifesto" />
      <div className="intro-grid">
        <div className="intro-mark" aria-hidden="true">
          ✦
        </div>
        <h2>
          Criatividade que sai das mãos
          <br />e <span>chega ao código.</span>
        </h2>
        <div className="intro-note">
          <p>
            Tenho 24 anos e gosto de criar também fora das telas: faço crochê,
            pinto e desenho. Estou ampliando meus conhecimentos em UI/UX para
            levar ainda mais intenção visual às experiências que desenvolvo.
          </p>
          <p>
            Sou muito família, amo uma boa conversa com cafezinho, sou cristã
            e ajudo em atividades de escolinhas para crianças. Gosto de código
            porque nele encontro um jeito de transformar criatividade em algo bonito e útil.
          </p>
          <a href="#experiencia">
            Conheça minha trajetória <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="stats-row">
        <div>
          <strong>04+</strong>
          <span>
            anos criando
            <br />produtos digitais
          </span>
        </div>
        <div>
          <strong>02</strong>
          <span>
            frentes de atuação
            <br />mobile + web
          </span>
        </div>
        <div>
          <strong>∞</strong>
          <span>
            criatividade dentro
            <br />e fora das telas
          </span>
        </div>
      </div>
    </section>
  );
}
