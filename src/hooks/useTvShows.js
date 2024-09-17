import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTvShows } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTvShows = () => {
  // Fetch Data from TMDB API and update Store
  const dispatch = useDispatch();

  const getTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addTvShows(json.results));
  };

  useEffect(() => {
    getTvShows();
  }, []);
};

export default useTvShows;
