import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-12 absolute bg-gradient-to-r from-black">
      <h1 className="text-2xl mt-14 md:mt-0 md:text-6xl text-white font-bold">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-base text-white w-1/4">
        {overview}
      </p>
      <div className="my-3 md:m-0">
        <button className="bg-white text-black py-1 md:py-2 px-2 md:px-7 text-sm md:text-lg rounded-lg hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-black p-2 px-7 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
