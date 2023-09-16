import React from "react";
import useGetTrailer from '../hooks/useGetTrailer';
import { useSelector } from "react-redux";

const BgVideo = ({movieId}) => {
   
    const trailer = useSelector((store)=>store.movies?.getTrailer)
    useGetTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
      style={{pointerEvents:'none'}}
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&mute=1&controls=0&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BgVideo;
