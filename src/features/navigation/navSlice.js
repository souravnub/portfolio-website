import { createSlice } from "@reduxjs/toolkit";

let initialState = { textColor: "white" };
let navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setNavTextColor: (state, { payload }) => {
            state.textColor = payload;
        },
    },
});

export const { setNavTextColor } = navSlice.actions;
export default navSlice.reducer;
