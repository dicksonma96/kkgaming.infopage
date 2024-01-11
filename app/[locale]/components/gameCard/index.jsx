import React from "react";
import Link from "next/link";
import "./style.scss";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

function GameCard({ game, imgUrl }) {
  const t = useTranslations("buttons");
  const demoUrl = `https://smakermicsvc.back138.com/api/opgateway/v1/op/demo/LaunchGame?opId=kkgaming&currency=Fun&gameCode=${
    game.GameId
  }&lang=${useLocale()}&playerId=default`;

  return (
    <div className="game_card rowc">
      <div className="game_overlay colc">
        <Link className="cta_btn2" href={`/games/${game.GameId}`}>
          {t("game-details")}
        </Link>
        <Link className="cta_btn1" href={demoUrl} target="_blank">
          {t("play-btn")}
        </Link>
      </div>
      <img src={imgUrl + "Web/" + game.ImageUrl} alt={game.GameName} />
    </div>
  );
}

export default GameCard;
