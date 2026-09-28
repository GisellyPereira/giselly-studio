import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { ArrowIcon } from "@/src/presentation/components/shared/Icons";

interface ContactSectionProps {
  readonly email: string;
  readonly location: string;
}

export function ContactSection({ email, location }: ContactSectionProps) {
  return (
    <section className="contact" id="contato">
      <div className="contact__pattern" aria-hidden="true" />
      <div className="contact__inner">
        <p className="eyebrow">Próximo projeto</p>
        <h2>
          Tem uma boa ideia?
          <em> Vamos colocar no mundo.</em>
        </h2>
        <div className="contact__action">
          <ButtonLink variant="contact" href={`mailto:${email}`} icon={<ArrowIcon diagonal />}>
            {email}
          </ButtonLink>
          <p>Estou disponível para conversar sobre produtos, interfaces e colaborações.</p>
        </div>
        <div className="contact-details">
          <p>{location}</p>
          <p>Respondendo em até 2 dias úteis.</p>
        </div>
      </div>
    </section>
  );
}
