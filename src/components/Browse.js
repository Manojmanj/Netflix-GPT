import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
          Main Container
            - VideoBackgrounf
            - Video Title
          Secondary Container
            - MovieList * N
              - movie cards * N
      */}
    </div>
  );
};

export default Browse;
