import React from "react";
import Image from "next/image";
import "../style.scss";
import Link from "next/link";
import { promises as fs } from "fs";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import BackIcon from "../../../assets/images/icons/back.png";

function GameDetailContent({ details }) {
  const t = useTranslations("game-detail");
  const imgUrl = "https://gth.kk129212.com/thumbs/Mobile/";
  return (
    <main className="games colc">
      <section className="game_details row">
        <div className="content col">
          <Link className="back_btn rowc" href="/games">
            <Image src={BackIcon} alt="back" />
            <span>{t("all-games")}</span>
          </Link>

          <div className="detail_frame col">
            <div className="frame_name">
              <strong>{details.name}</strong>
            </div>
            <div className="detail_body row">
              <img src={imgUrl + details.id + ".png"} alt={details.name} />
              <div className="detail_list col">
                <div className="detail_item row">
                  <span>{t("game-type")} :</span>
                  <strong>{details.game_type}</strong>
                </div>
                <div className="detail_item row">
                  <span>{t("released-on")} :</span>
                  <strong>{details.release_on}</strong>
                </div>
                <div className="detail_item row">
                  <span>{t("compatibility")} :</span>
                  <strong>{details.compatibility}</strong>
                </div>
                <div className="detail_item row">
                  <span>{t("feature")} :</span>
                  <div className="tags">
                    {details.feature.map((tag, index) => (
                      <div key={index} className="tag">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="detail_item row">
                  <span>{t("slot-type")} :</span>
                  <strong>{details.slot_type}</strong>
                </div>
                <div className="detail_item row">
                  <span>{t("paylines")} :</span>
                  <strong>{details.paylines}</strong>
                </div>
                <div className="detail_item row">
                  <span>{t("reels")} :</span>
                  <strong>{details.reels}</strong>
                </div>
                <div className="detail_item row">
                  <span>{t("volatility")} :</span>
                  <strong>{details.volatility}</strong>
                </div>
                <div className="detail_item row">
                  <span>{t("symbols")} :</span>
                  <div className="tags">
                    {details.symbols.map((tag, index) => (
                      <div key={index} className="tag">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="detail_item row">
                  <span>{t("RTP")} :</span>
                  <strong>{details.RTP}</strong>
                </div>
                <div className="detail_item row">
                  <span>{t("maximum-exposure")} :</span>
                  <strong>{details.maximum_exposure}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

async function GameDetail({ params }) {
  try {
    const file = await fs.readFile(
      process.cwd() + `/app/data/games/${params.gameId}.json`,
      "utf8"
    );
    const data = JSON.parse(file);
    const langData = () => {
      return data[useLocale()] ? data[useLocale()] : data["en-us"];
    };
    return <GameDetailContent details={{ ...langData(), id: params.gameId }} />;
  } catch (e) {
    return (
      <main className="games colc" style={{ justifyContent: "center" }}>
        <div>Game not found</div>
      </main>
    );
  }
}

export default GameDetail;
