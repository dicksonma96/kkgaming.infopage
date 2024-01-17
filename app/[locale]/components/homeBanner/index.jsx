import Image from "next/image";
import Banner1 from "../../../assets/images/banner/Desktop/banner1.jpg";
import MobBanner1 from "../../../assets/images/banner/Mobile/banner1.jpg";

import { useTranslations } from "next-intl";
import "./style.scss";

function HomeBanner() {
  const t = useTranslations("home.banner");

  return (
    <div className="main_banner rowc">
      <Image className="desktopImg" src={Banner1} alt={"banner1"} />
      <Image className="mobImg" src={MobBanner1} alt={"banner1"} />

      <div className="text">{t("banner1")}</div>
    </div>
  );
}

export default HomeBanner;
