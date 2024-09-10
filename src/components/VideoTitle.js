import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl text-white font-bold">{title}</h1>
      <p className="py-6 text-base text-white w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-7 text-xl rounded-lg hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="mx-2 bg-gray-500 text-black p-2 px-7 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
