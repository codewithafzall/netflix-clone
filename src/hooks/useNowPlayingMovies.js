import React, { useEffect } from 'react';
import {options} from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
   
    const getNowPLayingMovies = async()=>{
      
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const json = await data.json();
        const result = json.results;
        dispatch(addNowPlayingMovies(result));
    };

    useEffect(()=>{
        getNowPLayingMovies();
    },[]);
}

export default useNowPlayingMovies