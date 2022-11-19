import gsap from "gsap";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import RippleButton from "../../extras/ripple button/RippleButton";
import ProjectLearningSectionInfoContainer from "./ProjectLearningSectionInfoContainer";
import "./projectLearningsSection.scss";

const ProjectLearningsSection = ({
    skillsEnhancedArr,
    websiteName,
    learning,
}) => {
    const mainProjectLearningsContainerRef = useRef();
    const topCurveRef = useRef();
    const mainInfoContainerRef = useRef();
    const openInfoContainerTimelineRef = useRef(
        gsap.timeline({ paused: true })
    );

    const [isInfoContainerOpen, setIsInfoContainerOpen] = useState(false);

    const handleShowInfoModal = () => {
        // creating a new timeline everytime btn is clicked because else it will not play always
        // openInfoContainerTimeline = gsap.timeline();
        openInfoContainerTimelineRef.current.play();
        setIsInfoContainerOpen(true);
    };

    const handleCloseInfoModal = () => {
        openInfoContainerTimelineRef.current.reverse();
        setIsInfoContainerOpen(false);
    };

    useEffect(() => {
        setTimeout(() => {
            const mainProjectLearningsContainer =
                mainProjectLearningsContainerRef.current;

            const timeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: mainProjectLearningsContainer,
                    start: "top 70%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            });
            timeLine
                .fromTo(
                    ".main-project-learnings-container .ripple-button",
                    { opacity: 0, scale: 0 },
                    { opacity: 1, scale: 1 }
                )
                .fromTo(
                    ".ripple-button__text-container__span-container > span",
                    { y: "100%", skewY: "10deg" },
                    {
                        y: "0%",
                        skewY: "0deg",
                        stagger: 0.1,
                    }
                )
                .fromTo(
                    ".main-project-learnings-container__line",
                    { scaleX: 0 },
                    { scaleX: 1, duration: 0.3 }
                );
        }, 500);

        openInfoContainerTimelineRef.current.addPause();
        openInfoContainerTimelineRef.current
            .to(".ripple-button__text-container__span-container > span", {
                y: "100%",
                skewY: "9deg",
                stagger: 0.1,
                ease: "power1.inOut",
            })
            .to(
                ".main-project-learnings-container .ripple-button",
                {
                    opacity: 0,
                    scale: 0,
                },
                "-=.2"
            )
            .set(".main-project-learnings-container .ripple-button", {
                visibility: "hidden",
            })
            .to(
                ".main-project-learnings-container__line",
                {
                    scaleX: 0,
                },
                "-=.5"
            )
            .set(".main-project-learnings-container__info-container", {
                visibility: "visible",
            })
            .to(
                ".main-project-learnings-container__info-container__top-curve",
                {
                    height: 0,
                    y: 0,
                    duration: 1,
                }
            )
            .fromTo(
                ".main-project-learnings-container__info-container",
                {
                    y:
                        mainInfoContainerRef.current.getBoundingClientRect()
                            .height +
                        topCurveRef.current.getBoundingClientRect().height,
                },
                {
                    y: 0,
                    ease: "expo.inOut",
                    duration: 1.5,
                },
                "-=1.5"
            );
    }, []);

    return (
        <div
            className="main-project-learnings-container"
            ref={mainProjectLearningsContainerRef}>
            <div className="main-project-learnings-container__line"></div>
            <div
                className="main-project-learnings-container__info-container"
                ref={mainInfoContainerRef}>
                <div
                    className="main-project-learnings-container__info-container__top-curve"
                    ref={topCurveRef}></div>

                <ProjectLearningSectionInfoContainer
                    skillsEnhancedArr={skillsEnhancedArr}
                    learning={learning}
                    isInfoContainerOpen={isInfoContainerOpen}
                    websiteName={websiteName}
                    handleCloseInfoModal={handleCloseInfoModal}
                />
            </div>
            <RippleButton
                bg="#fafafa"
                rippleType="dark"
                repeatDelay={1}
                isCircular={true}
                onClick={handleShowInfoModal}>
                <div className="ripple-button__text-container">
                    <div className="ripple-button__text-container__span-container">
                        <span>Learnings</span>
                    </div>
                    <div className="ripple-button__text-container__span-container">
                        <span>That</span>
                    </div>
                    <div className="ripple-button__text-container__span-container">
                        <span>Followed</span>
                    </div>
                </div>
            </RippleButton>
        </div>
    );
};

export default ProjectLearningsSection;
