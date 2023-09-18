import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import FirstContainer from './FirstContainer';
import ListContainer from './ListContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptRecommended from './GptRecommended';


const HomePage = () => {
   
  const showGpt = useSelector((store)=> store.movies.showGpt)
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
     
    <div>
      <Header/>
      {showGpt ? 
       <GptRecommended/> 
      :
      <div>
      <FirstContainer/>
      <ListContainer/>
      </div> }
      
      
    </div>
  )
}

export default HomePage