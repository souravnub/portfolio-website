import gsap from "gsap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { allWorks } from "../../../data/works";
import "./recentWork.scss";

const RecentWorkSection = () => {
    useEffect(() => {
        let styledLinkTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".styled-link",
                start: "top 95%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
            },
        });
        styledLinkTimeline
            .to(".styled-link", {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3",
            })
            .to(
                ".styled-link__dot",
                {
                    scale: 1,
                    duration: 0.5,
                    ease: "expo.inOut",
                },
                "-=1"
            );

        let cards = document.querySelectorAll(
            ".recent-works-section__cards-container__card"
        );
        let absBtn = document.querySelector(".recent-works-absolute-btn");
        window.addEventListener("mousemove", (e) => {
            gsap.to(absBtn, {
                left:
                    e.clientX -
                    absBtn.getBoundingClientRect().width * 0.5 +
                    "px",
                top:
                    e.clientY -
                    absBtn.getBoundingClientRect().height * 0.5 +
                    "px",
                ease: "power3",
                duration: 1.7,
            });
        });
        cards.forEach((card) => {
            let workImg = card.querySelector(
                ".recent-works-section__cards-container__card__img-container img"
            );

            card.addEventListener("mouseover", () => {
                workImg.style.transform = "scale(1.05)";
                absBtn.style.transform = "scale(1)";
            });
            card.addEventListener("mouseout", () => {
                workImg.style.transform = "scale(1)";
                absBtn.style.transform = "scale(0)";
            });
        });
    }, []);
    return (
        <section className="width-container">
            <span className="recent-works-absolute-btn">view</span>
            <div className="recent-works-section">
                <span>recent work</span>

                <div className="recent-works-section__cards-container padding-container">
                    {allWorks.slice(1, 5).map((work) => {
                        return (
                            <Link
                                className="recent-works-section__cards-container__card"
                                to={`/work/${work.inSiteLinkText}`}
                                key={work.id}>
                                <div className="recent-works-section__cards-container__card__img-container">
                                    <img src={work.img} alt={work.heading} />
                                </div>
                                <div className="recent-works-section__cards-container__card__card-info-container">
                                    <span className="recent-works-section__cards-container__card__card-info-container__main-heading">
                                        {work.heading}
                                    </span>
                                    <span className="recent-works-section__cards-container__card__card-info-container__line"></span>
                                    <div className="recent-works-section__cards-container__card__card-info-container__info">
                                        <span>{work.info}</span>
                                        <span>{work.yearOfProduction}</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <Link to="/work" className="styled-link">
                <span>more work</span>
                <span className="styled-link__dot"></span>
            </Link>
        </section>
    );
};

export default RecentWorkSection;
