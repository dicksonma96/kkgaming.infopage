import { useTranslations, createTranslator } from "next-intl";
import GameNav from "../components/gameNav";
import GameListing from "../components/gameListing";
import GameBanner from "../components/gameBanner";
import GetGamelist from "../utils/getGamelist";
import "./style.scss";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  return {
    title: t("games.title") + " " + t("games.description"),
    description: t("games.description"),
    // openGraph: {
    //   images: [
    //     "https://fastly.picsum.photos/id/306/200/300.jpg?hmac=T-FQeWIc7YbLbcYdpyDGypNif0btJ8n5P4ozBJx8WgE",
    //   ],
    // },
  };
}

export default async function Games({ params: { locale }, searchParams }) {
  const games = await GetGamelist(locale);

  function filteredGames() {
    if (Object.keys(searchParams).length == 0) return games;
    if (searchParams.search != "All") {
      return {
        ...games,
        Game: games.Game.filter((game) => {
          if (game.Method == searchParams.search) {
            return game;
          }
        }),
      };
    }

    return games;
  }

  return (
    <main className="games colc">
      <GameBanner />
      <GameNavWrapper />
      <GameListing games={filteredGames()} />
    </main>
  );
}

function GameNavWrapper() {
  const t = useTranslations("games.game-nav");
  //Arcade, Table
  const categories = [
    {
      value: "All",
      display: t("All"),
    },
    {
      value: "Slots",
      display: t("Slots"),
    },
    {
      value: "Arcade",
      display: t("Arcade"),
    },
    {
      value: "Table",
      display: t("Table"),
    },
  ];
  return <GameNav category={categories} />;
}
