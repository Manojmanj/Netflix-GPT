import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularSeries } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularSeries = () => {
  // Fetch Data from TMDB API and update Store
  const dispatch = useDispatch();

  const popularSeries = useSelector((store) => store.movies.popularSeries);

  const getPopularSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addPopularSeries(json.results));
  };

  useEffect(() => {
    getPopularSeries();
  }, []);
};

export default usePopularSeries;
