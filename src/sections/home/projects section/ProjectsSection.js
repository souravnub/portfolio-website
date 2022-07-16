import React, { useEffect } from "react";
import "./projectsSection.scss";
import { projects } from "../../../data/projectsData";
import gsap from "gsap";

const ProjectsSection = () => {
    useEffect(() => {
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
    }, []);

    return (
        <>
            <section className="projects-showcase-section">
                <div className="projects-showcase-section__img-flex-container">
                    {projects
                        .slice(
                            typeof (projects.length / 2) === "float"
                                ? Math.ceil(projects.length / 2) - 1
                                : projects.length / 2,
                            projects.length
                        )
                        .map(({ id, brandColor, video, img }) => {
                            return (
                                <div
                                    style={{ backgroundColor: brandColor }}
                                    className="projects-showcase-section__img-flex-container__project-container"
                                    key={id}>
                                    {video ? (
                                        <video
                                            src={video}
                                            autoPlay
                                            loop></video>
                                    ) : (
                                        <img src={img} />
                                    )}
                                </div>
                            );
                        })}
                </div>
                <div className="projects-showcase-section__img-flex-container">
                    {projects
                        .slice(
                            0,
                            typeof (projects.length / 2) === "float"
                                ? Math.floor(projects.length / 2 - 1)
                                : projects.length / 2
                        )
                        .map(({ id, brandColor, video }) => {
                            return (
                                <div
                                    style={{ backgroundColor: brandColor }}
                                    className="projects-showcase-section__img-flex-container__project-container"
                                    key={id}>
                                    <video
                                        src={video}
                                        autoPlay
                                        muted
                                        loop></video>
                                </div>
                            );
                        })}
                </div>
            </section>
        </>
    );
};

export default ProjectsSection;
