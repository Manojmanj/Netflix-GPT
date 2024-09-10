import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTvShows from "../hooks/useTvShows";
import useSeriesAiringToday from "../hooks/useTopRatedSeries";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import usePopularSeries from "../hooks/usePopularSeries";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTvShows();
  useTopRatedSeries();
  usePopularSeries();
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
