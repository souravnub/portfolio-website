import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    windowWidth: null,
    windowHeight: null,
};
let windowWidthSlice = createSlice({
    name: "windowDimensionsSlice",
    initialState,
    reducers: {
        setWindowWidth: (state, { payload }) => {
            state.windowWidth = payload;
        },
        setWindowHeight: (state, { payload }) => {
            state.windowHeight = payload;
        },
    },
});
export default windowWidthSlice.reducer;
export const { setWindowWidth, setWindowHeight } = windowWidthSlice.actions;
