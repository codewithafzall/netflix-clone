import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const GptSuggestedMovies = () => {
    const { movieResults, movieNames } = useSelector((store) => store.movies);
  
    if (!movieNames || !movieResults) {
      return null; 
    }

    return (
      <div className="">
        <div className='mt-[40%] relative md:bg-black md:bg-opacity-70'>
          {movieNames.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
        </div>
      </div>
    );
}

export default GptSuggestedMovies