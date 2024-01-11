import React from "react";
import Image from "next/image";
import "./style.scss";
import brand1 from "../../../assets/images/icons/brand1.png";
import brand2 from "../../../assets/images/icons/brand2.png";
import brand3 from "../../../assets/images/icons/brand3.png";
import brand4 from "../../../assets/images/icons/brand4.png";
import brand5 from "../../../assets/images/icons/brand5.png";
import brand6 from "../../../assets/images/icons/brand6.png";
import brand7 from "../../../assets/images/icons/brand7.png";
import brand8 from "../../../assets/images/icons/brand8.png";
import { useTranslations } from "next-intl";

function WhyOurBrand() {
  const t = useTranslations("home.why-our-brand");

  const brandsInfo = [
    {
      icon: brand1,
      desc: t("brand1-desc"),
    },
    {
      icon: brand2,
      desc: t("brand2-desc"),
    },
    {
      icon: brand3,
      desc: t("brand3-desc"),
    },
    {
      icon: brand4,
      desc: t("brand4-desc"),
    },
    {
      icon: brand5,
      desc: t("brand5-desc"),
    },
    {
      icon: brand6,
      desc: t("brand6-desc"),
    },
    {
      icon: brand7,
      desc: t("brand7-desc"),
    },
    {
      icon: brand8,
      desc: t("brand8-desc"),
    },
  ];

  return (
    <section className="ourbrand">
      <div className="content col">
        <h2 className="section_title">WHY OUR BRAND</h2>
        <div className="brands">
          {brandsInfo.map((info, index) => (
            <div className="brand colc">
              <Image src={info.icon} />
              <p>{info.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyOurBrand;
