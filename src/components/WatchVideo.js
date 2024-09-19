import React from "react";
import { useSearchParams } from "react-router-dom";
import useWatchVideo from "../hooks/useWatchVideo";
import { useSelector } from "react-redux";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const watchVideo = useSelector((store) => store.movies?.watchVideo);
  console.log(watchVideo);

  useWatchVideo(searchParams.get("v"));

  return (
    <div>
      <iframe
        className="w-screen h-screen"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + watchVideo?.key + "?autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVideo;
