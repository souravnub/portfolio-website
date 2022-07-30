import React from "react";
import { useEffect } from "react";
import { setNavTextColor } from "../../features/navigation/navSlice";
import { useDispatch } from "react-redux";
import AboutSection from "../../sections/about/AboutSection";
import Contact from "../../sections/contact/Contact";
import Hero from "../../sections/hero/Hero";
import ProjectsSection from "../../sections/projects section/ProjectsSection";
import RecentWorkSection from "../../sections/recent work/RecentWorkSection";

const Home = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(setNavTextColor("white"));
    }, []);

    return (
        <div className="route-transition-container">
            <Hero />
            <AboutSection />
            <RecentWorkSection />
            <ProjectsSection />
            <Contact />
        </div>
    );
};

export default Home;
