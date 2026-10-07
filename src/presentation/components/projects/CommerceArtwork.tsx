"use client";

import { useI18n } from "@/src/i18n/use-i18n";
export function CommerceArtwork() {
  const { t } = useI18n();
  return (
    <div className="project-art commerce-art" aria-hidden="true">
      <div className="commerce-header">
        <strong>{t("LOJA*")}</strong>
        <span>{t("Novidades&nbsp;&nbsp; Coleções&nbsp;&nbsp; Buscar")}</span>
        <b>Bag (2)</b>
      </div>
      <div className="product-grid">
        <div>
          <i />
          <span>{t("Produto 01")}</span>
          <b>R$ 240</b>
        </div>
        <div>
          <i />
          <span>{t("Produto 02")}</span>
          <b>R$ 320</b>
        </div>
        <div>
          <i />
          <span>{t("Produto 03")}</span>
          <b>R$ 180</b>
        </div>
      </div>
      <div className="commerce-sticker">
        VTEX
        <br />IO ↗
      </div>
      <div className="commerce-tag">{t("EXPERIÊNCIAS PARA GRANDES MARCAS")}</div>
    </div>
  );
}
