import React from "react";
import Link from "next/link";
import "./style.scss";
import { useTranslations } from "next-intl";

function GameCard({ game, imgUrl }) {
  const t = useTranslations("buttons");
  return (
    <div className="game_card rowc">
      <div className="game_overlay colc">
        <Link className="cta_btn2" href={`/games/${game.GameId}`}>
          {t("game-details")}
        </Link>
        <Link className="cta_btn1" href={`/games/${game.GameId}`}>
          {t("play-btn")}
        </Link>
      </div>
      <img src={imgUrl + "Web/" + game.ImageUrl} alt={game.GameName} />
    </div>
  );
}

export default GameCard;
