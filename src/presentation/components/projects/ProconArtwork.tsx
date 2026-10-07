"use client";

import { useI18n } from "@/src/i18n/use-i18n";
export function ProconArtwork() {
  const { t } = useI18n();
  return (
    <div className="project-art procon-art" aria-hidden="true">
      <div className="procon-phone">
        <div className="phone-bar">
          <span>9:41</span>
          <i />
        </div>
        <strong>
          PROCON
          <br />MARANHÃO
        </strong>
        <p>{t("Seus direitos")}<br />{t("na palma da mão.")}</p>
        <div className="phone-actions">
          <b>{t("Nova reclamação")}</b>
          <b>{t("Meus protocolos")}</b>
        </div>
      </div>
      <div className="procon-card procon-card-a">
        <small>STATUS</small>
        <strong>{t("Em análise")}</strong>
        <span>{t("Protocolo #2048")}</span>
      </div>
      <div className="procon-card procon-card-b">
        <small>{t("PLATAFORMAS")}</small>
        <strong>Mobile + Web</strong>
      </div>
      <div className="procon-signal">)))</div>
    </div>
  );
}
