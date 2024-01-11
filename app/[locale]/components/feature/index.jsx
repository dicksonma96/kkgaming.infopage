import React from "react";
import Image from "next/image";
import "./style.scss";
import { useTranslations } from "next-intl";
import feature1 from "../../../assets/images/icons/feature1.svg";
import feature2 from "../../../assets/images/icons/feature2.svg";
import feature3 from "../../../assets/images/icons/feature3.svg";
import feature4 from "../../../assets/images/icons/feature4.svg";

function Feature() {
  const t = useTranslations("home.feature");

  const featuresArr = [
    {
      img: feature1,
      label: t("feature1"),
    },
    {
      img: feature2,
      label: t("feature2"),
    },
    {
      img: feature3,
      label: t("feature3"),
    },
    {
      img: feature4,
      label: t("feature4"),
    },
  ];

  return (
    <section className="feature">
      <div className="content col">
        <h2 className="section_title">{t("title")}</h2>
        <div className="feature_items row">
          {featuresArr.map((item, index) => (
            <div className="feature_item col">
              <Image src={item.img} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
