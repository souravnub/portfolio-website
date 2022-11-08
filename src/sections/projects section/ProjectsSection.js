import React, { useEffect, useState } from "react";
import "./projectsSection.scss";
import { projects } from "../../data/projectsData";
import gsap from "gsap";
import { useSelector } from "react-redux";

const ProjectsSection = () => {
    let [projectsArr, setProjectsArr] = useState(projects);

    let { deviceType } = useSelector((store) => store.deviceType);
    let { windowWidth } = useSelector((store) => store.windowDimmensions);

    let hideOnWidth = 500;

    useEffect(() => {
        let setArrLength = () => {
            if (windowWidth > 1150) {
                setProjectsArr(projects);
            } else {
                setProjectsArr(projects.slice(0, 6));
            }
        };

        setArrLength();
        window.addEventListener("resize", setArrLength);

        return () => {
            window.removeEventListener("resize", setArrLength);
        };
    }, []);

    useEffect(() => {
        setSlidingAnimations();
    }, []);
    useEffect(() => {
        setSlidingAnimations();
    }, [projectsArr]);

    let setSlidingAnimations = () => {
        if (windowWidth < hideOnWidth && deviceType === "mobile") {
            return;
        }
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".projects-showcase-section",
                start: "top 90%",
                end: "bottom 10%",
                scrub: 2,
                ease: "power3",
            },
        });
        timeline
            .fromTo(
                ".projects-showcase-section__img-flex-container:nth-child(1)",
                { x: "-5%" },
                {
                    x: "4%",
                    duration: 2,
                }
            )
            .fromTo(
                ".projects-showcase-section__img-flex-container:nth-child(2)",
                {
                    x: "-5%",
                },
                {
                    x: "-9%",
                    duration: 2,
                },
                "-=2"
            );
    };

    if (windowWidth < hideOnWidth && deviceType === "mobile") {
        return;
    }

    return (
        <>
            <section className="projects-showcase-section">
                <div className="projects-showcase-section__img-flex-container">
                    {projectsArr
                        .slice(
                            (projectsArr.length / 2) % 1 !== 0
                                ? Math.ceil(projectsArr.length / 2) - 1
                                : projectsArr.length / 2,
                            projectsArr.length
                        )
                        .map(({ id, brandColor, video, img }) => {
                            return (
                                <div
                                    style={{ backgroundColor: brandColor }}
                                    className="projects-showcase-section__img-flex-container__project-container"
                                    key={id}>
                                    {video ? (
                                        <video
                                            id={video}
                                            src={video}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline></video>
                                    ) : (
                                        <img src={img} alt="" />
                                    )}
                                </div>
                            );
                        })}
                </div>
                <div className="projects-showcase-section__img-flex-container">
                    {projectsArr
                        .slice(
                            0,
                            (projectsArr.length / 2) % 1 !== 0
                                ? Math.floor(projectsArr.length / 2 - 1)
                                : projectsArr.length / 2
                        )
                        .map(({ id, brandColor, video, img }) => {
                            return (
                                <div
                                    style={{ backgroundColor: brandColor }}
                                    className="projects-showcase-section__img-flex-container__project-container"
                                    key={id}>
                                    {video ? (
                                        <video
                                            id={video}
                                            src={video}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline></video>
                                    ) : (
                                        <img src={img}></img>
                                    )}
                                </div>
                            );
                        })}
                </div>
            </section>
        </>
    );
};

export default ProjectsSection;
