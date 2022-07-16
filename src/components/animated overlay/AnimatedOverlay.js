import gsap from "gsap";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SmallDot from "../extras/small dot/SmallDot";
import "./animatedOverlay.scss";

const AnimatedOverlay = () => {
    let location = useLocation();

    let textArr = [
        "hello",
        "bonjour",
        "hola",
        "ciao",
        "Olá",
        "Kia Ora",
        "ਸੁਆਗਤ ਹੈ",
        "G’day",
        "欢迎",
        "Zdravo",
        "स्वागत हे",
    ];

    useEffect(() => {
        if (location.pathname === "" || location.pathname === "/") {
            let timeline = gsap.timeline();

            let stagger = 0.35;
            let textFadeDuration = 0.35;

            timeline
                .set(document.body, { overflow: "hidden" })
                .to(".animated-overlay__text", {
                    opacity: 1,
                    duration: textFadeDuration,
                    stagger,
                })
                .to(
                    `.animated-overlay__text:not(:nth-child(${textArr.length}))`,
                    {
                        opacity: 0,
                        duration: textFadeDuration,
                        stagger,
                    },
                    `-=${textFadeDuration * textArr.length - 0.25}`
                )
                .to(".animated-overlay", {
                    y: "-100%",
                    duration: 1,
                    ease: "expo.inOut",
                })
                .set(document.body, { overflow: "auto" });
        } else {
            gsap.set(".animated-overlay", {
                display: "none",
            });
        }
    }, []);

    return (
        <div className="animated-overlay">
            {textArr.map((text) => (
                <span key={text} className="animated-overlay__text">
                    <SmallDot size=".7rem" fill="white" />
                    {text}
                </span>
            ))}
        </div>
    );
};

export default AnimatedOverlay;
