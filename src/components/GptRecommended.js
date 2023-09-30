import React from "react";
import SearchBar from "./SearchBar";
import ListContainer from "./ListContainer";
import GptSuggestedMovies from "./GptSuggestedMovies";
import { useSelector } from "react-redux";

const GptRecommended = () => {
  const { movieResults, movieNames } = useSelector((store) => store.movies);
  return (
    <div>
      <img
        className="absolute h-fit"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg-image"
      />
      <SearchBar />
      {movieNames ? (
        <GptSuggestedMovies />
      ) : (
        <div className="mt-[35%] bg-gradient-to-b from-slate-900">
          <ListContainer />
        </div>
      )}
    </div>
  );
};

export default GptRecommended;
