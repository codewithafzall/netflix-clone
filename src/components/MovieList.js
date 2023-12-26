import React from 'react';
import MoviCard from './MoviCard';
import { IMG_CDN } from '../utils/constant';


const MovieList = ({movies, title}) => {

  return (
     <div className=''>
        <h4 className='text-3xl text-white font-bold ml-3 py-5'>{title}</h4>
        <div className='scroll flex'>
            <div className='flex'>
           {movies?.map((item)=> <MoviCard key={item.id} poster={item.poster_path}/>)} 
           </div>
        </div> 
     </div>
  )
}

export default MovieList