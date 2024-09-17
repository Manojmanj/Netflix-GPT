import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:w-screen"
          src={BG_URL}
          alt="Background"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMoviesSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
