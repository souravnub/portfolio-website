import { configureStore } from "@reduxjs/toolkit";
import checkDeviceType from "./features/checkDeviceType";
import menuSlice from "./features/menu/menuSlice";
import navSlice from "./features/navigation/navSlice";
import PageTransitionOverlaySlice from "./features/page transition overlay/PageTransitionOverlaySlice";
import windowDimensionsSlice from "./features/windowDimensionsSlice";

let store = configureStore({
    reducer: {
        menu: menuSlice,
        nav: navSlice,
        pageTransitionOverlay: PageTransitionOverlaySlice,
        deviceType: checkDeviceType,
        windowDimmensions: windowDimensionsSlice,
    },
});

export default store;
