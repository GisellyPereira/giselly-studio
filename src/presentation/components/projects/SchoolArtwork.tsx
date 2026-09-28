import { SparkIcon } from "@/src/presentation/components/shared/Icons";

export function SchoolArtwork() {
  return (
    <div className="project-art school-art" aria-hidden="true">
      <div className="school-shell">
        <aside>
          <b>★</b>
          <i />
          <i />
          <i />
          <i />
        </aside>
        <div className="school-content">
          <small>CAMINHO DAS ESTRELAS</small>
          <strong>Olá, professora!</strong>
          <div className="school-metrics">
            <span>
              <b>28</b> alunos
            </span>
            <span>
              <b>92%</b> frequência
            </span>
          </div>
          <div className="school-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="school-note">
        Matrículas
        <br />Notas
        <br />Frequência
      </div>
      <SparkIcon className="school-spark" />
    </div>
  );
}
