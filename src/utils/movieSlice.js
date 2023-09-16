import { createSlice } from "@reduxjs/toolkit";

 
 const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies: null ,
        popularMovies : null ,
        trendingMovies : null,
        upcomingMovies : null,
        getTrailer : null
       },
       reducers :{
        addNowPlayingMovies:(state ,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies:(state ,action)=>{
            state.popularMovies= action.payload
        },
        addTrendingMovies:(state ,action)=>{
            state.trendingMovies= action.payload
        },
        addUpcomingMovies:(state ,action)=>{
            state.upcomingMovies= action.payload
        },
        addTrailer :(state,action)=>{
            state.getTrailer = action.payload
        }
       }
 })
 
 export const {addNowPlayingMovies,addTrailer,addPopularMovies,addTrendingMovies,addUpcomingMovies} = movieSlice.actions;
 export default movieSlice.reducer;