import { useEffect } from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import AnimatedOverlay from "./components/animated overlay/AnimatedOverlay";
import Menu from "./components/menu/Menu";
import About from "./pages/about/About";
import WorkPage from "./pages/work/WorkPage";
import PageTransitionOverlay from "./components/page transition overlay/PageTransitionOverlay";
import { Routes, Route, useLocation } from "react-router-dom";
// gsap
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import { useDispatch } from "react-redux";

import {
    setPageTransitionOverlay,
    setPageTransitionOverlayText,
} from "./features/page transition overlay/PageTransitionOverlaySlice";
import SingleWorkPage from "./pages/single work info/SingleWorkPage";

function App() {
    gsap.registerPlugin(ScrollTrigger);

    let location = useLocation();
    let dispatch = useDispatch();

    useEffect(() => {
        let pathname = location.pathname.split("/").at(-1);
        dispatch(setPageTransitionOverlay(true));

        if (pathname === "") {
            dispatch(setPageTransitionOverlayText("home"));
            return;
        }
        dispatch(setPageTransitionOverlayText(pathname));

        //REMOVING BORDER FROM MENUBTN
        document.querySelector(".menu-toggle-btn").style.border = "none";
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
            </Routes>
        </>
    );
}

export default App;
