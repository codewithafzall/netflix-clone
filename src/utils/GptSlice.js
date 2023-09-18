import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name : "Gpt" ,
    initialState : {
        showGpt : false
    },
    reducers :{
        toggleGpt : (state) => {
           state.showGpt = !state.showGpt ;
        }
    }
});

export const {toggleGpt} = GptSlice.actions;
export default GptSlice.reducer;