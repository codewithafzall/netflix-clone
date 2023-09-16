import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const ListContainer = () => {
   
  const movies = useSelector((store)=> store.movies);

  return (
    <div className='bg-black'>
    <div className='-mt-56 relative'>
      <MovieList title={"NowPlaying Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.trendingMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      </div>
    </div>
  )
}

export default ListContainer