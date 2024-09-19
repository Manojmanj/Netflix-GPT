import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, movieId }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-44 pr-4">
      <Link to={"/watch?v=" + movieId}>
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
      </Link>
    </div>
  );
};

export default MovieCard;
