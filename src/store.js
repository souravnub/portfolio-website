import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menu/menuSlice";
import navSlice from "./features/navigation/navSlice";
import PageTransitionOverlaySlice from "./features/page transition overlay/PageTransitionOverlaySlice";

let store = configureStore({
    reducer: {
        menu: menuSlice,
        nav: navSlice,
        pageTransitionOverlay: PageTransitionOverlaySlice,
    },
});

export default store;
