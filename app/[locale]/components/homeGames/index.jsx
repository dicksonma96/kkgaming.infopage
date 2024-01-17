import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import GetGamelist from "../../utils/getGamelist";
import GameCard from "../gameCard";
import Link from "next/link";
import { Suspense } from "react";
import setTimeoutPromise from "../../utils/timeoutPromise";
import "./style.scss";

function HomeGames() {
  const t = useTranslations();

  return (
    <section className="home_games">
      <div className="content col">
        <h2 className="section_title">{t("home.games.title")}</h2>
        <p>{t("home.games.desc")}</p>
        <GameList />
        <Link className="cta_btn1" href={"/games"}>
          {t("buttons.play-btn")}
        </Link>
      </div>
    </section>
  );
}

async function GameList() {
  await setTimeoutPromise(1000);
  const games = await GetGamelist(useLocale());
  const filteredGame = () => {
    return games.Game.slice(0, 4);
  };
  return (
    <div className="game_grid">
      {filteredGame().map((game, index) => {
        let url = games.ThumbnailPath;
        return <GameCard key={index} game={game} imgUrl={url} />;
      })}
    </div>
  );
}

function SkeletonLoader() {
  return <div>Skeleton</div>;
}

export default HomeGames;
