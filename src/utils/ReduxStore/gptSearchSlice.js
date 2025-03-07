import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: "gptSearch",
    initialState: {
        isGPTSearchActive: false
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.isGPTSearchActive = !state.isGPTSearchActive;
        }
    }
});

export default gptSearchSlice.reducer;

export const { toggleGPTSearchView } = gptSearchSlice.actions;