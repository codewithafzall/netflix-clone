import React, { useRef } from "react";
import OpenAI from 'openai';
import { openai_key, options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { gptmovie } from "../utils/movieSlice";

const SearchBar = () => {

  const search = useRef(null);
  const dispatch = useDispatch();
  
const openai = new OpenAI({
  apiKey: openai_key , 
  dangerouslyAllowBrowser: true 
});

const getTMDBmovies = async (movie)=>{
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",
    options
  );
  const json = await data.json();

  return json.results;
}

  const handleSearch = async () => {
 const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      search.current.value +
      ". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"

    const searchResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    
    const gptMovies = searchResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map(movie => getTMDBmovies(movie));
    const searchMovies = await Promise.all(promiseArray);
    dispatch(gptmovie({ movieNames: gptMovies, movieResults: searchMovies }));

  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-1/2  mt-[10%] p-1 absolute grid grid-cols-12 rounded-md"
      >
        <input
          ref={search}
          type="text"
          className="col-span-9 pl-3 my-3 mx-4 rounded-lg"
          placeholder="Type something like funny indian movies!"
        />
        <button
          onClick={handleSearch}
          className="bg-red-600 px-7 mr-4 py-3 rounded-lg col-span-3 my-3"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
