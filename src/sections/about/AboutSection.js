import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import StyledBtn from "../../components/extras/StyledBtn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./aboutSection.scss";

const AboutSection = () => {
    let aboutLinkRef = useRef();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let aboutLink = aboutLinkRef.current;
        let textArr = document.querySelectorAll(
            ".about-section__head-container__text-container .text"
        );

        gsap.to(aboutLink, {
            y: "0%",
            duration: 1.3,
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 40%",
                scrub: 1,
            },
        });

        gsap.to(textArr, {
            y: 0,
            duration: 1,
            ease: "power4",
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 65%",
                end: "bottom 30%",
                toggleActions: "play reverse restart reverse",
            },
        });
        gsap.to(".about-section__info-container p", {
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power4",
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 57%",
                end: "bottom 30%",
                toggleActions: "play reverse restart reverse",
            },
        });
    }, []);

    return (
        <section className="width-container padding-container">
            <div className="about-section">
                <div className="about-section__head-container">
                    <div className="about-section__head-container__text-container">
                        <span className="text">
                            Helping brands to stand out in the digital era.
                        </span>
                    </div>
                    <div className="about-section__head-container__text-container">
                        <span className="text">
                            Work that always lies on the cutting edge.
                        </span>
                    </div>
                </div>
                <div className="about-section__info-container">
                    <p>
                        the combination of my outstanding design, deep passion
                        &#38; impressive coding skills creates a unique position
                        of my work in the design world.
                    </p>

                    <Link to="/about" ref={aboutLinkRef}>
                        <StyledBtn
                            text="about me"
                            padding="1.8rem"
                            fontSize="1.1rem"
                            type="circle"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
