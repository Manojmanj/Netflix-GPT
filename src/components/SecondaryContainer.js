import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black w-screen">
        <div className="mt-0 md:-mt-48 pl-2 md:pl-7 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"Top-Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList
            title={"Blockbuster Movies"}
            movies={movies.upcomingMovies}
          />
          <MovieList title={"Trending TV Shows"} movies={movies.tvShows} />
          <MovieList
            title={"Top-Rated Series"}
            movies={movies.topRatedSeries}
          />
          {/* <MovieList title={"Popular Series"} movies={movies.popularSeries} /> */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
