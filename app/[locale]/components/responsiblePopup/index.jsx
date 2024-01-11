import React from "react";
import { useTranslations } from "next-intl";

import "./style.scss";
import ClientContent from "./clientContent";

function ResponsiblePopup() {
  const t = useTranslations("responsive-popup");
  return (
    <ClientContent
      content={{
        title: t("title"),
        message: t("message"),
        confirm: t("confirm"),
        cancel: t("cancel"),
      }}
    />
  );
}

export default ResponsiblePopup;
