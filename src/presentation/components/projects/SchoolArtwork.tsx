"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { SparkIcon } from "@/src/presentation/components/shared/Icons";

export function SchoolArtwork() {
  const { t } = useI18n();
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
          <strong>{t("Olá, professora!")}</strong>
          <div className="school-metrics">
            <span>
              <b>28</b>{t("alunos")}</span>
            <span>
              <b>92%</b>{t("frequência")}</span>
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
      <div className="school-note">{t("Matrículas")}<br />{t("Notas")}<br />{t("Frequência")}</div>
      <SparkIcon className="school-spark" />
    </div>
  );
}
