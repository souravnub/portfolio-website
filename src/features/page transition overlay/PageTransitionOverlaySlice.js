import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    text: null,
    show: false,
};

let pageTransitionOverlaySlice = createSlice({
    name: "page transition",
    initialState,
    reducers: {
        setPageTransitionOverlay: (state, { payload }) => {
            state.show = payload;
        },
        setPageTransitionOverlayText: (state, { payload }) => {
            state.text = payload;
        },
    },
});

export const { setPageTransitionOverlay, setPageTransitionOverlayText } =
    pageTransitionOverlaySlice.actions;
export default pageTransitionOverlaySlice.reducer;
