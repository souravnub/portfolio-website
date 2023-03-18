import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useLocation } from "react-router-dom";
import SmallDot from "../extras/small dot/SmallDot";
import "./animatedOverlay.scss";

const AnimatedOverlay = () => {
    let location = useLocation();

    let overlayRef = useRef();

    let textArr = [
        "Hello",
        "bonjour",
        "hola",
        "ciao",
        "Olá",
        "Kia Ora",
        "G’day",
        "स्वागत हे",
        "欢迎",
        "Zdravo",
        "ਸੁਆਗਤ ਹੈ",
    ];

    useEffect(() => {
        let timeline = gsap.timeline();
        if (location.pathname === "" || location.pathname === "/") {
            const textElements = Array.from(
                document.querySelectorAll(".animated-overlay__text")
            );

            timeline
                .set(document.body, { overflow: "hidden" })
                .set(".animated-overlay", {
                    y: 0,
                })
                .to(textElements[0], {
                    opacity: 0,
                    delay: 0.8,
                    duration: 0.1,
                })

                .to(textElements.slice(1), {
                    opacity: 1,
                    duration: 0,
                    stagger: 0.15,
                })
                .to(
                    textElements.slice(1, textElements.length - 1),
                    {
                        opacity: 0,
                        duration: 0,
                        stagger: 0.15,
                    },
                    "<+=12%"
                )
                .to(
                    ".animated-overlay",
                    {
                        y: `-100%`,
                        duration: 1.2,
                        ease: "expo.inOut",
                    },
                    ">+=.5"
                )
                .to(
                    ".animated-overlay__bottom-curve",
                    {
                        height: 0,
                        ease: "expo.out",
                    },
                    ">-40%"
                )
                .set(document.body, { overflow: "auto" });
        } else {
            gsap.set(".animated-overlay", {
                display: "none",
            });
        }

        return () => {
            timeline.revert();
        };
    }, []);

    return (
        <div className="animated-overlay" ref={overlayRef}>
            {textArr.map((text) => (
                <span key={text} className="animated-overlay__text">
                    <SmallDot size=".7rem" fill="white" />
                    {text}
                </span>
            ))}

            <div className="animated-overlay__bottom-curve"></div>
        </div>
    );
};

export default AnimatedOverlay;
