import  { useEffect } from 'react';
import { addTrendingMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';
import { options } from '../utils/constant';

const useTrendingMovies = () => {
    
    const dispatch= useDispatch();

    const getTrendingMovies = async()=>{
      
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const json = await data.json();
        const result = json.results;
        dispatch(addTrendingMovies(result));
    };

    useEffect(()=>{
        getTrendingMovies();
    },[]);
}

export default useTrendingMovies