import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addWatchVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useWatchVideo = (movieId) => {
  const dispatch = useDispatch();

  //Fetch trailer video && Updating store with trailer video data
  const getWatchVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addWatchVideo(trailer));
  };

  useEffect(() => {
    getWatchVideo();
  }, []);
};

export default useWatchVideo;
