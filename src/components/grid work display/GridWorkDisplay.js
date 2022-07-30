import React, { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import "./gridWorksSection.scss";

const GridWorkDisplay = ({ dataArr }) => {
    useEffect(() => {
        let cards = document.querySelectorAll(
            ".grid-work-section__cards-container__card"
        );
        let absBtn = document.querySelector(".grid-works-absolute-btn");
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
                ".grid-work-section__cards-container__card__img-container img"
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
        <div>
            <span className="grid-works-absolute-btn">view</span>
            <div className="grid-work-section">
                <div className="grid-work-section__cards-container padding-container">
                    {dataArr.map((work) => {
                        return (
                            <Link
                                className="grid-work-section__cards-container__card"
                                to={`/work/${work.inSiteLinkText}`}
                                key={work.id}>
                                <div className="grid-work-section__cards-container__card__img-container">
                                    <img src={work.img} alt={work.heading} />
                                </div>
                                <div className="grid-work-section__cards-container__card__card-info-container">
                                    <span className="grid-work-section__cards-container__card__card-info-container__main-heading">
                                        {work.heading}
                                    </span>
                                    <span className="grid-work-section__cards-container__card__card-info-container__line"></span>
                                    <div className="grid-work-section__cards-container__card__card-info-container__info">
                                        <span>{work.info}</span>
                                        <span>{work.yearOfProduction}</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default GridWorkDisplay;
