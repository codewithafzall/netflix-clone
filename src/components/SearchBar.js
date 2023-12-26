import React, { useRef, useState } from "react";
import OpenAI from 'openai';
import { openai_key, options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { gptmovie } from "../utils/movieSlice";
import { MagnifyingGlass } from "react-loader-spinner";

const SearchBar = () => {

  const search = useRef(null);
  const dispatch = useDispatch();
  const [loading , setLoading] = useState(false);
  
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
};
  
    const handleSearch = async () => {
       if(search.current.value === ""){
        return null;
       }
      setLoading(true);
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
      setLoading(false);
      dispatch(gptmovie({ movieNames: gptMovies, movieResults: searchMovies }));
  
    };

  return (
    <div>
    <div className="flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black md:bg-opacity-70 w-full md:w-1/2 -mt-[2%] md:mt-[5%] p-4 md:p-1 fixed z-40 md:absolute grid grid-cols-12 rounded-md"
      >
        <input
          ref={search}
          type="text"
          className="text-xs md:text-lg pl-2 md:p-1 col-span-8 md:col-span-9 md:pl-3 my-3 mx-4 rounded-lg"
          placeholder="Best of Shahrukh Khan!"
        />
        <button
          onClick={handleSearch}
          className="bg-red-600 text-xs md:text-lg md:px-7 md:mr-4 mr-0 py-3 rounded-lg col-span-3 my-3"
        >
          Search
        </button>
      </form>
      </div>

      {loading && (
        <div className="flex justify-center pt-[50%] md:pt-[15%] md:pb-56 pb-48">
          <MagnifyingGlass
            visible={true}
            height="180"
            width="180"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor = '#c0efff'
            color = 'red'
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
