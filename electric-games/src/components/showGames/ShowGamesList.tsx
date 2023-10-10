import { useState, useEffect } from "react";
import IElectricGame from "../../interfaces/IElectricGame";
import ElectricGameService from "../../services/ElectricGameService";
import ShowGamesItem from "./ShowGamesItem";

const ShowGameList = () => {
  const [electricGames, setElectricGames] = useState<IElectricGame[]>([]);

  useEffect(() => {
    setGamesFromService();
  }, []);

  const setGamesFromService = async () => {
    const gamesFromService = await ElectricGameService.getAllElectricGames();
    setElectricGames(gamesFromService);
    console.log(electricGames);
  };

  const getElectricGameItems = () => {
    return electricGames.map((e, i) => (
      <ShowGamesItem
        key={`e-${i}`}
        id = {e.id}
        title={e.title}
        platform={e.platform}
        releaseYear={e.releaseYear}
        image={e.image}
      />
    ));
  };

  return (
    <>
      <h2 className="showGamesText">All Electric Games</h2>

      <div className="container overflow-hidden">
        <section className="row justify-content-center">
          {getElectricGameItems()}
        </section>
      </div>
    </>
  );
};

export default ShowGameList;
