import React from "react";
import { useTranslations } from "next-intl";
import "./style.scss";

function Contact() {
  const t = useTranslations("home.contact");

  return (
    <section className="contact" id="contact">
      <div className="content col">
        <h2 className="section_title">{t("title")}</h2>
        <label className="input col">
          <span>{t("name")}</span>
          <input type="text" />
        </label>
        <label className="input col">
          <span>{t("company")}</span>
          <input type="text" />
        </label>
        <label className="input col">
          <span>{t("email")}</span>
          <input type="text" />
        </label>
        <label className="input col">
          <span>{t("phone_number")}</span>
          <input type="text" />
        </label>
        <label className="input col">
          <span>{t("message")}</span>
          <textarea />
        </label>
        <button className="cta_btn1">Submit</button>
      </div>
    </section>
  );
}

export default Contact;
