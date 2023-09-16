import { useEffect } from "react";
import { options } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";


const useGetTrailer = (movieId)=>{

    const dispatch = useDispatch();
   
    const getMovieTrailer = async ()=>{

    const data = await fetch( "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", options);
    const json = await data.json();
    const results = json?.results;
    
    const filterData = results?.filter((item)=>item.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : results[0];
    dispatch(addTrailer(trailer))
    };

    useEffect(()=>{
        getMovieTrailer();
    },[]);
}

export default useGetTrailer;