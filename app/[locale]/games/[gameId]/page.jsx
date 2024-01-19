import React from "react";
import { readFileSync } from "fs";
import path from "path";
import Image from "next/image";
import "../style.scss";
import Link from "next/link";
import { promises as fs } from "fs";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import BackIcon from "../../../assets/images/icons/back.png";
import GameCard from "../../components/gameCard";
import GetGamelist from "../../utils/getGamelist";
import { PlayButton } from "../../components/button";

export async function generateMetadata({ params }) {
  const gamesList = await GetGamelist(useLocale());
  let selected_game = gamesList?.Game.find(
    (game) => game.GameId == params.gameId
  );
  return {
    title: selected_game.GameName,
    description: selected_game.GameName,
    openGraph: {
      images: [
        `${gamesList.ThumbnailPath + "/Mobile/" + selected_game.ImageUrl}`,
      ],
    },
  };
}

function GameDetailContent({ details, similarGames, imgUrl }) {
  const t = useTranslations("game-detail");
  const t2 = useTranslations("buttons");
  const demoUrl = `https://smakermicsvc.back138.com/api/opgateway/v1/op/demo/LaunchGame?opId=kkgaming&currency=Fun&gameCode=${details.id}`;

  return (
    <main className="games colc">
      <section className="game_details row">
        <div className="content colc">
          <Link className="back_btn rowc" href="/games">
            <Image src={BackIcon} alt="back" />
            <span>{t("all-games")}</span>
          </Link>

          <div className="detail_frame col">
            <div className="frame_name">
              <strong>{details.name}</strong>
            </div>
            <div className="detail_body row">
              <div className="detail_img rowc">
                <img
                  src={imgUrl + "/Mobile/" + details.id + ".png"}
                  alt={details.name}
                />
                <div className="game_overlay colc">
                  <PlayButton text={t2("play-btn")} launchUrl={demoUrl} />
                </div>
              </div>

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
                  <div className="tags">
                    {details.compatibility.map((tag, index) => (
                      <div key={index} className="tag">
                        {tag}
                      </div>
                    ))}
                  </div>
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
          <h2
            className="section_title"
            style={{ textAlign: "center", margin: "40px 0 20px" }}
          >
            {t("similar-game")}
          </h2>
          <div className="similar_games row">
            {similarGames?.map((game, index) => (
              <GameCard key={index} game={game} imgUrl={imgUrl} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function GameNotFound() {
  const t = useTranslations("game-detail");
  return (
    <main
      className="games game_not_found colc"
      style={{ justifyContent: "center" }}
    >
      <div>Game not found</div>
      <br />
      <br />
      <Link className="cta_btn1 rowc" href="/games">
        <span>Back</span>
      </Link>
    </main>
  );
}

async function GameDetail({ params }) {
  try {
    const filePath = path.join(
      process.cwd(),
      "app/data/games/",
      `${params.gameId}.json`
    );
    const file = await readFileSync(filePath, "utf8");
    const data = JSON.parse(file);
    const langData = () => {
      return data[useLocale()] ? data[useLocale()] : data["en-us"];
    };
    const gamesList = await GetGamelist(useLocale());
    const similarGames = gamesList.Game.filter((game) => {
      return langData()["Similar Games"].includes(game.GameId.toString());
    });
    return (
      <GameDetailContent
        details={{
          ...langData(),
          id: params.gameId,
        }}
        similarGames={similarGames}
        imgUrl={gamesList.ThumbnailPath}
      />
    );
  } catch (e) {
    return <GameNotFound />;
  }
}

export default GameDetail;
