import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import VideoDescription from './VideoDesciption';
import BgVideo from './BgVideo';

const FirstContainer = () => {

    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
    if(!movies) return;
    const Mainmovie = movies[0];
    
     const {original_title , overview, id} = Mainmovie;
  return (
    <div className='pt-28 md:pt-0'>
      <VideoDescription title={original_title} overview={overview}/>
      <BgVideo movieId={id}/>
    </div>
  )
}

export default FirstContainer;