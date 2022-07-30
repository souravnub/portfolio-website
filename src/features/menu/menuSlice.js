import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    isMenuOpen: false,
    isHammenuVisible: false,
    isMenuBorderVisible: false,
};

let menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        openMenu: (state) => {
            state.isMenuOpen = true;
        },
        showHammmenu: (state) => {
            state.isHammenuVisible = true;
        },
        hideHammenu: (state) => {
            state.isHammenuVisible = false;
        },
    },
});

export default menuSlice.reducer;
export const { closeMenu, openMenu, showHammmenu, hideHammenu } =
    menuSlice.actions;
