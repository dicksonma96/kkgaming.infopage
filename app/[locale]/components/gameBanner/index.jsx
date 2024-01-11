import GamesBanner from "../../../assets/images/games_banner.jpg";
import GamesModel from "../../../assets/images/games_model.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import "./style.scss";

function GameBanner() {
  const t = useTranslations("games");

  return (
    <section className="games_banner rowc">
      <div className="content rowc">
        <div className="text col">
          <h2 className="section_title">{t("banner-title")}</h2>
          <br />
          <p>{t("banner-desc")}</p>
        </div>
        <Image className="games_model" src={GamesModel} />
      </div>
    </section>
  );
}

export default GameBanner;
