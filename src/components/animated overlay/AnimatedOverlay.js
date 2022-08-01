import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useLocation } from "react-router-dom";
import SmallDot from "../extras/small dot/SmallDot";
import "./animatedOverlay.scss";

const AnimatedOverlay = () => {
    let location = useLocation();

    let [curveHeight, setCurverHeight] = useState(200);
    let overlayRef = useRef();
    let { windowWidth } = useSelector((store) => store.windowWidth);

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
        if (windowWidth > 750) {
            setCurverHeight(200);
        } else {
            setCurverHeight(50);
        }
    }, [windowWidth]);

    useEffect(() => {
        if (location.pathname === "" || location.pathname === "/") {
            let timeline = gsap.timeline();

            let stagger = 0.28;
            let textFadeDuration = 0.28;

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
                    y: `-${
                        overlayRef.current.getBoundingClientRect().height +
                        curveHeight
                    }px`,
                    duration: 1.1,
                    ease: "expo.inOut",
                })
                .set(document.body, { overflow: "auto" });
        } else {
            gsap.set(".animated-overlay", {
                display: "none",
            });
        }

        window.screen.orientation.addEventListener("change", function (e) {
            overlayRef.current.style.transform = `translateY(-${
                overlayRef.current.getBoundingClientRect().height + curveHeight
            }px)`;
        });
    }, []);

    return (
        <div className="animated-overlay" ref={overlayRef}>
            {textArr.map((text) => (
                <span key={text} className="animated-overlay__text">
                    <SmallDot size=".7rem" fill="white" />
                    {text}
                </span>
            ))}

            <div
                className="animated-overlay__bottom-curve"
                style={{ "--curve-height": `${curveHeight}px` }}></div>
        </div>
    );
};

export default AnimatedOverlay;
