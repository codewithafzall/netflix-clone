import { createSlice } from "@reduxjs/toolkit";

 
 const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies: null ,
        popularMovies : null ,
        trendingMovies : null,
        upcomingMovies : null,
        getTrailer : null,
        showGpt : false,
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
        },
        toggleGpt : (state)=>{
            state.showGpt = !state.showGpt;
        }
       }
 })
 
 export const {addNowPlayingMovies,addTrailer,addPopularMovies,addTrendingMovies,addUpcomingMovies,toggleGpt} = movieSlice.actions;
 export default movieSlice.reducer;