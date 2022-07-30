import { configureStore } from "@reduxjs/toolkit";
import checkDeviceType from "./features/checkDeviceType";
import menuSlice from "./features/menu/menuSlice";
import navSlice from "./features/navigation/navSlice";
import PageTransitionOverlaySlice from "./features/page transition overlay/PageTransitionOverlaySlice";
import windowWidthSlice from "./features/windowWidthSlice";

let store = configureStore({
    reducer: {
        menu: menuSlice,
        nav: navSlice,
        pageTransitionOverlay: PageTransitionOverlaySlice,
        deviceType: checkDeviceType,
        windowWidth: windowWidthSlice,
    },
});

export default store;
