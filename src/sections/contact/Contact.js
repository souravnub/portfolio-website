import React from "react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import StyledBtn from "../../components/extras/StyledBtn";
import "./contact.scss";
import AnimatedTopCurve from "../../components/AnimatedTopCurve";
import myImg from "../../assets/images/my images/img-small.jpg";
const Contact = () => {
    let phone = "+91 7710346567";
    let email = "s6hr6h4u3@gmail.com";
    let [isEmailCopied, setIsEmailCopied] = useState(false);
    let [isPhoneCopied, setIsPhoneCopied] = useState(false);

    let handleCopyToClipboard = (ele) => {
        if (ele === "phone") {
            setIsPhoneCopied(true);
            setIsEmailCopied(false);
            return navigator.clipboard.writeText(phone);
        }
        if (ele === "email") {
            setIsEmailCopied(true);
            setIsPhoneCopied(false);
            return navigator.clipboard.writeText(email);
        }
    };

    useEffect(() => {
        // animation that brings container downwards
        let contactContentTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".main-contact-container",
                start: "top 80%",
                end: "90% 90%",
                scrub: 1,
            },
        });

        contactContentTimeline
            .fromTo(
                ".main-contact-container__info-container",
                {
                    y: "-60%",
                },
                {
                    y: 0,
                }
            )
            .to(
                ".get-in-touch-link",
                {
                    x: "-4rem",
                },
                "-=.5"
            );

        // animations for text

        let textContainer = document.querySelectorAll(
            ".main-contact-container__info-container__contact-btn-container .text-container"
        );
        textContainer.forEach((container) => {
            let text = container.querySelector(
                ".text-container__main-text-container__main-text"
            );
            let absText = container.querySelector(".abs-text");

            absText.style.left = `${text.getBoundingClientRect().width + 20}px`;
        });
    }, []);
    return (
        <>
            <div className="main-contact-container">
                <AnimatedTopCurve />
                <div className="main-contact-container__info-container width-container">
                    <div className="main-contact-container__info-container__head">
                        <div>
                            <img src={myImg} alt="" className="my-img" />
                            <span>Wanna hire</span>
                        </div>
                        <span>me ?</span>
                    </div>
                    <div className="line">
                        <Link to="/contact" className="get-in-touch-link">
                            <StyledBtn
                                text="get in touch"
                                fill="#3c56f1"
                                overlayFill="#314adf"
                                type="circle"
                                padding="2rem"
                            />
                        </Link>
                    </div>
                    <div className="main-contact-container__info-container__contact-btn-container">
                        <button
                            className="copy-to-clipboard"
                            onClick={() => handleCopyToClipboard("email")}>
                            <div className="text-container">
                                <div className="text-container__main-text-container">
                                    <span className="text-container__main-text-container__main-text">
                                        {email}
                                    </span>
                                    <div className="text-container__main-text-container__bottom-line"></div>
                                </div>

                                <span className="abs-text">
                                    {isEmailCopied
                                        ? "copied !"
                                        : "copy to clipboard"}
                                </span>
                            </div>
                        </button>
                        <button
                            className="copy-to-clipboard"
                            onClick={() => handleCopyToClipboard("phone")}>
                            <div className="text-container">
                                <div className="text-container__main-text-container">
                                    <span className="text-container__main-text-container__main-text">
                                        {phone}
                                    </span>
                                    <div className="text-container__main-text-container__bottom-line"></div>
                                </div>
                                <span className="abs-text">
                                    {isPhoneCopied
                                        ? "copied !"
                                        : "copy to clipboard"}
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
