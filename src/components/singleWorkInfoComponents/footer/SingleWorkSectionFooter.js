import gsap from "gsap";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allWorks } from "../../../data/works";
import AnimatedTopCurve from "../../AnimatedTopCurve";
import "./singleWorkSectionFooter.scss";

const SingleWorkSectionFooter = ({ nextWorkIndex }) => {
    let { heading, img, inSiteLinkText } = allWorks.find(
        (work) => work.id === nextWorkIndex
    );

    let hoverBtnRef = useRef();
    let footerContainerRef = useRef();
    let allWorksLiknRef = useRef();

    let { deviceType } = useSelector((store) => store.deviceType);
    let { windowWidth } = useSelector((store) => store.windowDimmensions);

    useEffect(() => {
        let workLinkTransition;
        let linkContainerTransition;
        let timeout;

        let setHoverBtnPosition = (e) => {
            gsap.to(hoverBtnRef.current, {
                left: e.clientX + "px",
                top: e.clientY + "px",
                duration: 1.5,
                ease: "power4",
            });
        };
        let hideHoverBtn = () => {
            hoverBtnRef.current.style.transform =
                "translate(-50%, -50%) scale(0)";
        };
        let showHoverBtn = () => {
            hoverBtnRef.current.style.transform =
                "translate(-50%, -50%) scale(1)";
        };

        if (deviceType === "desktop") {
            window.addEventListener("mousemove", setHoverBtnPosition);
            footerContainerRef.current.addEventListener(
                "mouseover",
                showHoverBtn
            );
            footerContainerRef.current.addEventListener(
                "mouseout",
                hideHoverBtn
            );
        }

        /* have to set timeout because there was some problem with the positioning of the 
        start and end points of the animation on the footer .... therefore after 1500ms it is 
        expected that the whole content of the component will load and then afterwards the animation
        would be set.... this will help to solve the problems regarding the same
        */
        workLinkTransition = gsap.fromTo(
            allWorksLiknRef.current,
            { y: "-4rem", opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".single-work-section-main-container",
                    scrub: 1,
                    start: windowWidth > 800 ? "top 20%" : "30% 60%",
                    end: windowWidth < 800 ? "60% 80%" : "bottom 100%",
                    toggleActions: "play reverse play reverse",
                },
            }
        );

        linkContainerTransition = gsap.fromTo(
            document.querySelector(
                ".single-work-section-footer__link-container"
            ),
            { y: "-9rem" },
            {
                y: 0,
                scrollTrigger: {
                    trigger: footerContainerRef.current,
                    start: windowWidth > 600 ? "0% 70%" : "30% 70%",
                    end: windowWidth > 600 ? "100% 90%" : "120% 90%",
                    scrub: 1.2,
                },
            }
        );

        return () => {
            // had to remove eventListners because if component will unmount then the ref will become null hence gsap will not be able to found the element... white in RecentWorksSection.js the document.querySelector() method is used to refer the element hence no problem on component unmount
            window.removeEventListener("mousemove", setHoverBtnPosition);
            window.removeEventListener("mouseover", showHoverBtn);
            window.removeEventListener("mouseout", hideHoverBtn);
            linkContainerTransition?.revert();
            workLinkTransition?.revert();
        };
    }, [nextWorkIndex]);

    return (
        <>
            <div
                className="single-work-section-footer-hover-btn"
                ref={hoverBtnRef}>
                next Project
            </div>
            <div className="single-work-section-main-container">
                <AnimatedTopCurve nextWorkIndex={nextWorkIndex} />
                <div className="single-work-section-footer">
                    <Link
                        to={`/work/${inSiteLinkText}`}
                        ref={footerContainerRef}
                        className="single-work-section-footer__link-container">
                        <span>next Project</span>
                        <span className="single-work-section-footer__link-container__work-heading">
                            {heading}
                        </span>
                        <img src={img} alt="" />
                    </Link>
                    <Link
                        ref={allWorksLiknRef}
                        to="/work"
                        className="single-work-section-footer__all-works-link">
                        All Works
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleWorkSectionFooter;
