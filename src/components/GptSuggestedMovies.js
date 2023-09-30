import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const GptSuggestedMovies = () => {
    const { movieResults, movieNames } = useSelector((store) => store.movies);
  
    if (!movieNames || !movieResults) {
      return null; 
    }

    return (
      <div className="bg-black">
        <div className='mt-[25%] relative'>
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