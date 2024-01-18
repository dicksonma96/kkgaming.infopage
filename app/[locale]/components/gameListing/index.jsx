import "./style.scss";
import GameCard from "../../components/gameCard";

function GameListing({ games }) {
  return (
    <div className="game_listing">
      <div className="game_grid">
        {games.Game.map((game, index) => {
          let url = games.ThumbnailPath;
          return <GameCard key={index} game={game} imgUrl={url} />;
        })}
      </div>
    </div>
  );
}

export default GameListing;
