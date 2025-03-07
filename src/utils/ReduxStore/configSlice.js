import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        preferredLang: "en"
    },
    reducers: {
        changePrefferedLang: (state, action) => {
            state.preferredLang = action.payload;
        }
    }
});

export default configSlice.reducer;

export const { changePrefferedLang } = configSlice.actions;
