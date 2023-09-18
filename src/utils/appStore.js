import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import gptReducer from './GptSlice'

const appStore = configureStore({
    reducer: {
        user : userReducer ,
        movies : movieReducer,
        Gpt : gptReducer,
    },
})

export default appStore;