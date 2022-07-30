import { useEffect } from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import AnimatedOverlay from "./components/animated overlay/AnimatedOverlay";
import Menu from "./components/menu/Menu";
import About from "./pages/about/About";
import WorkPage from "./pages/work/WorkPage";
import PageTransitionOverlay from "./components/page transition overlay/PageTransitionOverlay";
import { Routes, Route, useLocation } from "react-router-dom";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import { useDispatch } from "react-redux";

import {
    setPageTransitionOverlay,
    setPageTransitionOverlayText,
} from "./features/page transition overlay/PageTransitionOverlaySlice";
import SingleWorkPage from "./pages/single work info/SingleWorkPage";
import { setDeviceType } from "./features/checkDeviceType";
import { setWindowWidth } from "./features/windowWidthSlice";
import ContactPage from "./pages/contact/ContactPage";

function App() {
    gsap.registerPlugin(ScrollTrigger);

    let location = useLocation();
    let dispatch = useDispatch();

    useEffect(() => {
        let detectDeviceType = () =>
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
                ? dispatch(setDeviceType("mobile"))
                : dispatch(setDeviceType("desktop"));

        detectDeviceType();

        dispatch(setWindowWidth(window.innerWidth));
        window.addEventListener("resize", () => {
            dispatch(setWindowWidth(window.innerWidth));
        });
    }, []);

    useEffect(() => {
        let pathname = location.pathname.split("/").at(-1);
        dispatch(setPageTransitionOverlay(true));

        if (pathname === "") {
            dispatch(setPageTransitionOverlayText("home"));
            return;
        }
        dispatch(setPageTransitionOverlayText(pathname));
    }, [location]);

    return (
        <>
            <AnimatedOverlay />
            <PageTransitionOverlay />

            <Menu />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<WorkPage />} />

                <Route path="/work/:work" element={<SingleWorkPage />} />

                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </>
    );
}

export default App;
