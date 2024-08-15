import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { allWorks } from "../../data/works";
import { setNavTextColor } from "../../features/navigation/navSlice";
import { useNavigate } from "react-router-dom";

import { CgShapeTriangle, CgShapeZigzag } from "react-icons/cg";
import { BiCircle, BiSquare } from "react-icons/bi";

import GridWorkDisplay from "../../components/grid work display/GridWorkDisplay";

import gsap from "gsap";
import Contact from "../../sections/contact/Contact";
import "./workPage.scss";
import useProjects from "../../hooks/useProjects";

// make a component for three mobile mockups (with animations)... one component for tab and laptop mockup , one component for the services,location,yearOfProduction information

const WorkPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [currentHoveredWork, setCurrentHoveredWork] = useState(null);
    const { data, isLoading } = useProjects();

    let { windowWidth } = useSelector((store) => store.windowDimmensions);
    let { deviceType } = useSelector((store) => store.deviceType);

    useEffect(() => {
        dispatch(setNavTextColor("black"));

        let navHeight = document
            .querySelector(".top-navigation")
            .getBoundingClientRect().height;

        const page = document.querySelector(".main-works-page");
        page.style.paddingTop = navHeight + "px";

        let allShapes = document.querySelectorAll(
            ".main-works-page .main-heading .main-heading__heading-content .icon"
        );

        if (allShapes.length > 0) {
            gsap.to(allShapes, {
                rotation: "80deg",
                scale: 1.3,

                scrollTrigger: {
                    trigger: ".main-heading__heading-content",
                    scrub: 1,
                    start: "-80% 0%",
                    end: "140% 0%",
                },
            });
            let headingTimeline = gsap.timeline();
            headingTimeline
                .to(".heading-text", {
                    y: 0,

                    duration: 1,
                    ease: "power3",
                })
                .to(allShapes, {
                    opacity: 0.05,
                    duration: 1,
                });
        }
    }, []);

    useEffect(() => {
        if (deviceType === "desktop" && windowWidth > 560) {
            let absoluteContainer = document.querySelector(
                ".main-absolute-work-container"
            );
            let viewBtn = document.querySelector(".main-absolute-work-btn ");

            window.addEventListener("mousemove", (e) => {
                gsap.to(absoluteContainer, {
                    top: e.clientY + "px",
                    left: e.clientX + "px",
                    duration: 0.9,
                    ease: "power4",
                });

                gsap.to(viewBtn, {
                    top: e.clientY + "px",
                    left: e.clientX + "px",
                    duration: 1,
                });
            });

            let mainTableContainer = document.querySelector(
                ".main-works-page__content-table tbody"
            );

            mainTableContainer.addEventListener("mouseover", () => {
                absoluteContainer.style.transform =
                    "scale(1)  translate(-50%, -50%)";
                viewBtn.style.transform = "scale(1)  translate(-50%, -50%)";
            });
            mainTableContainer.addEventListener("mouseout", () => {
                absoluteContainer.style.transform =
                    "scale(0)  translate(-50%, -50%)";
                viewBtn.style.transform = "scale(0)  translate(-50%, -50%)";
            });
        }
    }, [deviceType, windowWidth]);

    useEffect(() => {
        if (deviceType === "desktop" && windowWidth > 560) {
            let absoluteBoxImages = document.querySelectorAll(
                ".main-absolute-work-container .main-absolute-work-container__img-container"
            );

            gsap.to(absoluteBoxImages, {
                y: `-${currentHoveredWork * 100}%`,
                ease: "expo.inOut",
                duration: 0.8,
            });
        }
    }, [currentHoveredWork, windowWidth]);

    function handleFocusClick(idx, inSiteLink) {
        setCurrentHoveredWork(idx);
        window.addEventListener("keydown", (e) => {
            let key = e.key.toLowerCase();
            if (key === "enter" || key === " ") {
                navigate(`/work/${inSiteLink}`);
            }
        });
    }

    return (
        <div className="route-transition-container">
            <span className="main-absolute-work-btn">view</span>
            {deviceType === "desktop" && windowWidth > 560 && (
                <div className="main-absolute-work-container">
                    {!isLoading &&
                        data.projects.map(({ image, brandColor }) => (
                            <div
                                key={image}
                                className="main-absolute-work-container__img-container"
                                style={{ backgroundColor: brandColor }}>
                                <img src={image} alt="work illustration" />
                            </div>
                        ))}
                </div>
            )}
            <div className="main-works-page width-container">
                <div className="main-heading">
                    <div className="main-heading__heading-content">
                        <BiCircle className="icon" />
                        <CgShapeTriangle className="icon" />
                        <BiSquare className="icon" />
                        <CgShapeZigzag className="icon" />
                        <div className="main-heading__heading-content__heading-text-container">
                            <span className="heading-text">
                                WOW! projects that seek your attention
                            </span>
                        </div>
                    </div>
                </div>

                {deviceType === "desktop" && windowWidth > 560 ? (
                    <table className="main-works-page__content-table">
                        <thead>
                            <tr>
                                <th>project</th>
                                <th>involvement</th>
                                <th>year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!isLoading &&
                                data.projects.map(
                                    (
                                        {
                                            id,
                                            name,
                                            role,
                                            yearOfProduction,
                                            inSiteLinkText,
                                        },
                                        idx
                                    ) => {
                                        return (
                                            <tr
                                                tabIndex="0"
                                                role="link"
                                                data-href={`/work/${id}`}
                                                className="main-works-page__content-table__card"
                                                key={id}
                                                onClick={() =>
                                                    navigate(`/work/${id}`)
                                                }
                                                onFocus={() => {
                                                    handleFocusClick(
                                                        idx,
                                                        inSiteLinkText
                                                    );
                                                }}
                                                onMouseOver={() => {
                                                    setCurrentHoveredWork(idx);
                                                }}>
                                                <td className="work-heading">
                                                    {name}
                                                </td>
                                                <td>{role}</td>
                                                <td>{yearOfProduction}</td>
                                            </tr>
                                        );
                                    }
                                )}
                        </tbody>
                    </table>
                ) : (
                    !isLoading && <GridWorkDisplay dataArr={data.projects} />
                )}
            </div>

            <Contact />
        </div>
    );
};

export default WorkPage;
