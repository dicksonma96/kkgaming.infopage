import React from "react";
import { useTranslations } from "next-intl";
import "./style.scss";

function About() {
  const t = useTranslations("home.about-us");
  return (
    <section className="about" id="about">
      <div className="content col">
        <h2 className="section_title">{t("title")}</h2>
        <p>{t("desc")}</p>
      </div>
    </section>
  );
}

export default About;
