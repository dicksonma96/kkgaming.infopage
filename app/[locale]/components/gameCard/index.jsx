import React from "react";
import Link from "next/link";
import "./style.scss";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { PlayButton } from "../button";
import Image from "next/image";
import FreeBadgeEn from "../../../assets/images/icons/badge-buy-freegame-en.png";
import FreeBadgeCn from "../../../assets/images/icons/badge-buy-freegame-cn.png";
import FreeBadgeTh from "../../../assets/images/icons/badge-buy-freegame-th.png";
import HotBadgeEn from "../../../assets/images/icons/badge-hot-en.png";
import HotBadgeCn from "../../../assets/images/icons/badge-hot-cn.png";
import HotBadgeTh from "../../../assets/images/icons/badge-hot-th.png";
import NewBadgeEn from "../../../assets/images/icons/badge-new-en.png";
import NewBadgeCn from "../../../assets/images/icons/badge-new-cn.png";
import NewBadgeTh from "../../../assets/images/icons/badge-new-th.png";

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
        <PlayButton text={t("play-btn")} launchUrl={demoUrl} />
      </div>
      <img
        className="card"
        src={imgUrl + "Web/" + game.ImageUrl}
        alt={game.GameName}
      />
      <div className="badges col">
        <Badges info={game.GameLobbyConfig} />
      </div>
    </div>
  );
}

function Badges({ info }) {
  //'isnew|isfeature|hasbuyfreespin|gamereleasedTS'
  const badges = info.split("|");
  return (
    <>
      {badges[2] == "0" ? (
        <></>
      ) : (
        <Image
          className="freebadge"
          src={
            useLocale() == "zh-cn"
              ? FreeBadgeCn
              : useLocale() == "th-th"
              ? FreeBadgeTh
              : FreeBadgeEn
          }
          alt={"Buy Free Spin"}
        />
      )}
      {badges[1] == "0" ? (
        <></>
      ) : (
        <Image
          src={
            useLocale() == "zh-cn"
              ? HotBadgeCn
              : useLocale() == "th-th"
              ? HotBadgeTh
              : HotBadgeEn
          }
          alt={"Hot"}
        />
      )}
      {badges[0] == "0" ? (
        <></>
      ) : (
        <Image
          src={
            useLocale() == "zh-cn"
              ? NewBadgeCn
              : useLocale() == "th-th"
              ? NewBadgeTh
              : NewBadgeEn
          }
          alt={"New"}
        />
      )}
    </>
  );
}

export default GameCard;
