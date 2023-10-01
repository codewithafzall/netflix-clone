import React from "react";
import SearchBar from "./SearchBar";
import ListContainer from "./ListContainer";
import GptSuggestedMovies from "./GptSuggestedMovies";
import { useSelector } from "react-redux";

const GptRecommended = () => {
  const {movieNames } = useSelector((store) => store.movies);
  return (
    <div>
      <div className="fixed -z-10">
      <img
        className="h-screen md:h-full object-cover md:object-none"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg-image"
      />
      </div>
      <div className="pt-20">
      <SearchBar />
      </div>
      
      {movieNames ? (
        <div className="mt-56 md:-mt-72 bg-black bg-opacity-70 md:bg-opacity-90">
        <GptSuggestedMovies />
      </div>
      ) : (
        <div className="mt-56 md:mt-[40%] bg-black bg-opacity-70 md:bg-opacity-90">
          {/* <ListContainer /> */}
        </div>
      )}
    </div>
  );
};

export default GptRecommended;
