import gsap from "gsap";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GridWorkDisplay from "../../components/grid work display/GridWorkDisplay";
import { allWorks } from "../../data/works";
import "./recentWork.scss";

const RecentWorkSection = () => {
    const { windowWidth } = useSelector((store) => store.windowDimmensions);
    useEffect(() => {
        let styledLinkTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".styled-link",
                start: windowWidth > 1000 ? "top 95%" : "top 85%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
            },
        });
        styledLinkTimeline
            .fromTo(
                ".styled-link",
                { opacity: 0, y: "2rem" },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3",
                }
            )
            .to(
                ".styled-link__dot",
                {
                    scale: 1,
                    duration: 0.5,
                    ease: "expo.inOut",
                },
                "-=1"
            );
    }, []);
    return (
        <section className="width-container">
            <span className="recent-work-section-heading">recent work</span>
            <GridWorkDisplay dataArr={allWorks.slice(0, 4)} />
            <Link to="/work" className="styled-link">
                <span>more work</span>
                <span className="styled-link__dot"></span>
            </Link>
        </section>
    );
};

export default RecentWorkSection;
