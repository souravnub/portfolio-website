import gsap from "gsap";
import React, { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { allWorks } from "../../../data/works";
import "./singleWorkSectionFooter.scss";

const SingleWorkSectionFooter = ({ nextWorkIndex }) => {
    let { heading, img, inSiteLinkText } = allWorks.find(
        (work) => work.id === nextWorkIndex
    );

    let hoverBtnRef = useRef();
    let footerContainerRef = useRef();
    let allWorksLiknRef = useRef();

    useEffect(() => {
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

        window.addEventListener("mousemove", setHoverBtnPosition);
        footerContainerRef.current.addEventListener("mouseover", showHoverBtn);
        footerContainerRef.current.addEventListener("mouseout", hideHoverBtn);

        gsap.to(allWorksLiknRef.current, {
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 0.5,
            scrollTrigger: {
                trigger: ".single-work-section-main-container",
                scrub: 1,
                start: "top 20%",
                end: "bottom 100%",
                toggleActions: "play reverse play reverse",
            },
        });

        return () => {
            // had to remove eventListners because if component will unmount then the ref will become null hence gsap will not be able to found the element... white in RecentWorksSection.js the document.querySelector() method is used to refer the element hence no problem on component unmount
            window.removeEventListener("mousemove", setHoverBtnPosition);
            window.removeEventListener("mouseover", showHoverBtn);
            window.removeEventListener("mouseout", hideHoverBtn);
        };
    }, []);

    return (
        <div className="single-work-section-main-container">
            <div
                className="single-work-section-footer-hover-btn"
                ref={hoverBtnRef}>
                next work
            </div>
            <div className="single-work-section-footer">
                <Link
                    to={`/work/${inSiteLinkText}`}
                    ref={footerContainerRef}
                    className="single-work-section-footer__link-container">
                    <span>next work</span>
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
    );
};

export default SingleWorkSectionFooter;
