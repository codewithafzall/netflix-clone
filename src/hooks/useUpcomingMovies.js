import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {

    const dispatch= useDispatch();

    const getUpcomingMovies = async()=>{
      
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const json = await data.json();
        const result = json.results;
        dispatch(addUpcomingMovies(result));
    };

    useEffect(()=>{
        getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;