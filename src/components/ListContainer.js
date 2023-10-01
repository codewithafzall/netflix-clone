import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const ListContainer = () => {
   
  const movies = useSelector((store)=> store.movies);

  return (
    <div className='bg-black md:bg-black md:bg-opacity-90'>
    <div className='-mt-0 pb-12 md:-mt-48 relative'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.trendingMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      </div>
    </div>
  )
}

export default ListContainer;