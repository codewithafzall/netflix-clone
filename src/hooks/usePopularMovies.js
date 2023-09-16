import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { options } from '../utils/constant';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
 
const dispatch = useDispatch();

const getPopularMovies = async ()=>{
    try{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const json = await data.json();
    const result = json.results;
    dispatch(addPopularMovies(result))
    }
    catch(error){
        console.log(error);
    }
};
useEffect(()=>{
    getPopularMovies();
},[]);

}

export default usePopularMovies;