import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    windowWidth: null,
};
let windowWidthSlice = createSlice({
    name: "windowWidthSlice",
    initialState,
    reducers: {
        setWindowWidth: (state, { payload }) => {
            state.windowWidth = payload;
        },
    },
});
export default windowWidthSlice.reducer;
export const { setWindowWidth } = windowWidthSlice.actions;
