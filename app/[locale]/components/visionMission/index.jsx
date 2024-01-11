import React from "react";
import Image from "next/image";
import "./style.scss";
import visionBg from "../../../assets/images/vision.png";
import missionBg from "../../../assets/images/mission.png";
import { useTranslations } from "next-intl";
import "./style.scss";

function VisionMission() {
  const t = useTranslations("home.vision-mission");
  return (
    <section className="vision_mission row">
      <div className="content row">
        <div className="card rowc">
          <div className="text col">
            <h2 className="section_title">{t("vision")}</h2>
            <br />
            <p>{t("vision-desc")}</p>
          </div>
          <Image src={visionBg} alt="" />
        </div>
        <div className="card rowc">
          <div className="text col">
            <h2 className="section_title">{t("mission")}</h2>
            <br />
            <p>{t("mission-desc")}</p>
          </div>
          <Image src={missionBg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
