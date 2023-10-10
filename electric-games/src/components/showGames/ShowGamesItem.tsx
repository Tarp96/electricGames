import { FC } from "react";
import IElectricGame from "../../interfaces/IElectricGame";

const showGamesItem : FC<IElectricGame> = ({ id, title, platform, releaseYear, image }) => {
  return (
    <article className="col-lg-4 col-md-6 col-sm-12">
      <h3 className="showGamesText">
        {" "}
        {id} : {title}
      </h3>
      <p className="showGamesText">Platform: {platform}</p>
      <p className="showGamesText">Release year: {releaseYear}</p>
      <img src={`https://localhost:7272/images/${image}`} alt="" />
    </article>
  );
};

export default showGamesItem;
