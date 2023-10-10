import { useEffect, useState } from "react";
import IElectricGame from "../../interfaces/IElectricGame";
import ElectricGameService from "../../services/ElectricGameService";
import ShowGamesItem from "../showGames/ShowGamesItem";

const SearchList = () => {
  const [electricGames, setElectricGames] = useState<IElectricGame[]>([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    setGamesFromService();
  }, []);

  const setGamesFromService = async () => {
    const gamesFromService = await ElectricGameService.getAllElectricGames();
    setElectricGames(gamesFromService);
  };

  const getGamesFromSearch = () => {
    return electricGames
      .filter((e) => e.title.toLowerCase().includes(query.toLowerCase()))
      .map((e, i) => (
        <ShowGamesItem
          key={i}
          id={e.id}
          title={e.title}
          platform={e.platform}
          releaseYear={e.releaseYear}
          image={e.image}
        />
      ));
  };

  return (
    <div>
      <h2>Search for video games 🔎</h2>
      <input
        placeholder="Enter video game title here 🔎"
        type="text"
        className="search-input"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <div className="container">
        <section className="row justify-content-center">
          {getGamesFromSearch()}
        </section>
      </div>
    </div>
  );
};

export default SearchList;
