import React from "react";
import "./rippleButton.scss";
import tinycolor from "tinycolor2";
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";

const RippleButton = ({
    children,
    styles,
    bg,
    isCircular,
    onClick,
    rippleType = "dark",
    rippleCount = 4,
    repeatDelay,
    rippleStagger = 0.2,
    scaleOnHover,
    btnScaleAmt = 1.2,
}) => {
    const rippleContainerRef = useRef();

    let bgColor = tinycolor(bg);
    if (!bgColor.isValid()) {
        // if it is not valid then make blue as the color
        bgColor = tinycolor("white");
    }

    const ripplesArr = Array.from({ length: rippleCount }, (_, idx) => {
        let styles;
        if (rippleType === "dark") {
            styles = { backgroundColor: bgColor.darken(idx).toString() };
        } else {
            styles = { backgroundColor: bgColor.lighten(idx).toString() };
        }
        return (
            <div
                key={idx}
                style={{
                    inset: 0,
                    borderRadius: isCircular ? "50%" : "unset",
                    ...styles,
                }}
                className="ripple-button__ripples-container__ripple"></div>
        );
    });

    useEffect(() => {
        const rippleTimeline = gsap.timeline({
            defaults: {
                repeat: "-1",
                stagger:
                    typeof rippleStagger === "number" ? rippleStagger : 0.2,
                repeatDelay: Number.isInteger(repeatDelay) ? repeatDelay : 3,
            },
        });

        rippleTimeline.to(
            rippleContainerRef.current.querySelectorAll(":scope > *"),
            {
                scale: 1,
                opacity: 1,
            }
        );

        if (scaleOnHover) {
            const rippleBtn = document.querySelector(".ripple-button");

            rippleBtn.addEventListener("mouseenter", (e) => {
                gsap.to(rippleBtn, {
                    scale: btnScaleAmt,
                    ease: "none",
                    duration: 0.2,
                });
            });
            rippleBtn.addEventListener("mouseleave", (e) => {
                gsap.to(rippleBtn, { scale: 1, ease: "none", duration: 0.2 });
            });
        }
    }, []);

    return (
        <button
            onClick={onClick}
            className="ripple-button"
            style={{
                "--btn-bg": bg,
                borderRadius: isCircular ? "50%" : "unset",
                ...styles,
            }}>
            <div
                className="ripple-button__ripples-container"
                ref={rippleContainerRef}>
                {ripplesArr.map((ripple) => ripple)}
                <div
                    style={{
                        backgroundColor: bgColor._originalInput,
                        borderRadius: isCircular ? "50%" : "unset",
                        inset: 0,
                    }}
                    className="ripple-button__ripples-container__ripple"></div>
            </div>
            {children}
        </button>
    );
};

export default RippleButton;
