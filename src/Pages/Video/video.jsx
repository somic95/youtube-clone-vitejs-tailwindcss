import React from "react";
import "./video.css";
import PlayVideo from "../../Components/PlayVideo/playvideo";
import Recommended from "../../Components/Recommended/recommended";
import { useParams } from "react-router-dom";

const video = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className="play-container bg-[#f9f9f9] px-[2%] py-[20px] flex justify-between flex-wrap">
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
};

export default video;
