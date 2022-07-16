import React from "react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import StyledBtn from "../../../components/extras/StyledBtn";
import "./contact.scss";
import { useRef } from "react";
const Contact = () => {
    let textRef = useRef();

    let phone = "9888331111";
    let email = "s6hr6h4u3@gamil.com";
    let [isEmailCopied, setIsEmailCopied] = useState(false);
    let [isPhoneCopied, setIsPhoneCopied] = useState(false);

    useEffect(() => {
        // scroll trigger for the rounded-div-container's height(as when its height will vary the borderradius of the curve will seem to change)
        gsap.to(".rounded-div-container .rounded-div", {
            height: "70px",
            scrollTrigger: {
                trigger: ".main-contact-container",
                start: "top 70%",
                end: "40% 50%",
                scrub: 1,
            },
        });

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

        let textContainers = document.querySelectorAll(
            ".main-contact-container__info-container__contact-btn-container .copy-to-clipboard .text-container"
        );
        textContainers.forEach((container) => {
            container.addEventListener("mouseover", () => {
                gsap.to(container.querySelectorAll("span"), {
                    y: "-100%",
                    duration: 0.2,
                    ease: "power1",
                });
            });
            container.addEventListener("mouseout", () => {
                gsap.to(container.querySelectorAll("span"), {
                    y: "0",
                    duration: 0.2,
                    ease: "power1",
                });
            });
            container.style.height =
                textRef.current.getBoundingClientRect().height + "px";
        });
    }, []);

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
    return (
        <>
            <div className="main-contact-container">
                <div className="rounded-div-container">
                    <div className="rounded-div"></div>
                </div>
                <div className="main-contact-container__info-container width-container">
                    <div>
                        <div>
                            <span className="my-img"></span>
                            <span>Let's work</span>
                        </div>
                        <span>together</span>
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
                                <span ref={textRef}>{email}</span>
                                <span>
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
                                <span>{phone}</span>
                                <span>
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
