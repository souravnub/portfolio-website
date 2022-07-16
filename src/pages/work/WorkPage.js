import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { allWorks } from "../../data/works";
import { setNavTextColor } from "../../features/navigation/navSlice";
import { useNavigate } from "react-router-dom";

import { CgShapeTriangle, CgShapeZigzag } from "react-icons/cg";
import { BiCircle, BiSquare } from "react-icons/bi";

import gsap from "gsap";
import Contact from "../../sections/home/contact/Contact";
import "./workPage.scss";

// make a component for three mobile mockups (with animations)... one component for tab and laptop mockup , one component for the services,location,yearOfProduction information

const WorkPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [currentHoveredWork, setCurrentHoveredWork] = useState(null);
    let [currentLink, setCurrentLink] = useState("");

    useEffect(() => {
        dispatch(setNavTextColor("black"));
        let navHeight = document
            .querySelector(".top-navigation")
            .getBoundingClientRect().height;
        document.querySelector(".main-works-page").style.paddingTop =
            navHeight + "px";

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

        let allShapes = document.querySelectorAll(
            ".main-works-page .main-heading .main-heading__heading-content .icon"
        );
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
                opacity: 0.2,
                duration: 1,
            });
    }, []);

    useEffect(() => {
        let absoluteBoxImages = document.querySelectorAll(
            ".main-absolute-work-container .main-absolute-work-container__img-container"
        );

        gsap.to(absoluteBoxImages, {
            y: `-${currentHoveredWork * 100}%`,
            ease: "expo.inOut",
            duration: 0.8,
        });
    }, [currentHoveredWork]);

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
        <>
            <span to={currentLink} className="main-absolute-work-btn">
                view
            </span>
            <div className="main-absolute-work-container">
                {allWorks.map(({ img, brandingColor }) => (
                    <div
                        key={img}
                        className="main-absolute-work-container__img-container"
                        style={{ backgroundColor: brandingColor }}>
                        <img src={img} alt="work illustration" />
                    </div>
                ))}
            </div>
            <div className="main-works-page width-container">
                <div className="main-heading">
                    <div className="main-heading__heading-content">
                        <BiCircle className="icon" />
                        <CgShapeTriangle className="icon" />
                        <BiSquare className="icon" />
                        <CgShapeZigzag className="icon" />
                        <div className="main-heading__heading-content__heading-text-container">
                            <span className="heading-text">
                                Creating products that holds a special place in
                                hearts of clients
                            </span>
                        </div>
                    </div>
                </div>

                <table className="main-works-page__content-table">
                    <thead>
                        <tr>
                            <th>project</th>
                            <th>involvement</th>
                            <th>year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allWorks.map(
                            (
                                {
                                    id,
                                    heading,
                                    info,
                                    yearOfProduction,
                                    inSiteLinkText,
                                },
                                idx
                            ) => {
                                return (
                                    <tr
                                        tabIndex="0"
                                        role="link"
                                        data-href={`/work/${inSiteLinkText}`}
                                        className="main-works-page__content-table__card"
                                        key={id}
                                        onClick={() =>
                                            navigate(`/work/${inSiteLinkText}`)
                                        }
                                        onFocus={() => {
                                            handleFocusClick(
                                                idx,
                                                inSiteLinkText
                                            );
                                        }}
                                        onMouseOver={() => {
                                            setCurrentHoveredWork(idx);
                                            setCurrentLink(
                                                `/work/${inSiteLinkText}`
                                            );
                                        }}>
                                        <td className="work-heading">
                                            {heading}
                                        </td>
                                        <td>{info}</td>
                                        <td>{yearOfProduction}</td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </div>

            <Contact />
        </>
    );
};

export default WorkPage;
