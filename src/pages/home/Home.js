import React from "react";
import { useEffect } from "react";
import { setNavTextColor } from "../../features/navigation/navSlice";
import { useDispatch } from "react-redux";
import AboutSection from "../../sections/home/about/AboutSection";
import Contact from "../../sections/home/contact/Contact";
import Hero from "../../sections/home/hero/Hero";
import ProjectsSection from "../../sections/home/projects section/ProjectsSection";
import RecentWorkSection from "../../sections/home/recent work/RecentWorkSection";

const Home = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(setNavTextColor("white"));
    }, []);

    return (
        <>
            <Hero />
            <AboutSection />
            <RecentWorkSection />
            <ProjectsSection />
            <Contact />
        </>
    );
};

export default Home;
