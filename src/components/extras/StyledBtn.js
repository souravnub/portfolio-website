import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const StyledBtn = ({
    text,
    fontSize,
    padding,
    fill,
    overlayFill,
    color,
    borderRadius,
    type,
    border,
    borderColor,
}) => {
    const btnRef = useRef();
    const btnOverlayRef = useRef();

    useEffect(() => {
        let btn = btnRef.current;
        let btnOverlay = btnOverlayRef.current;

        let showOverlay = () => {
            gsap.to(btnOverlay, {
                y: 0,
                ease: "expo.inOut",
            });
        };
        let hideOverlay = () => {
            gsap.timeline()
                .to(btnOverlay, {
                    y: "-100%",
                    ease: "expo.inOut",
                })
                .set(btnOverlay, { y: "100%" });
        };

        btn.addEventListener("mouseover", () => {
            showOverlay();
        });
        btn.addEventListener("mouseout", () => {
            hideOverlay();
        });
    }, []);

    return (
        <div
            ref={btnRef}
            className="styled-btn"
            style={{
                fontSize,
                padding,
                backgroundColor: fill,
                color,
                borderRadius: borderRadius || "50%",
                aspectRatio: type === "circle" ? 1 : "unset",
                border: border && `${borderColor} solid 1.5px`,
            }}>
            <span style={{ pointerEvents: "none" }}>{text}</span>
            <div
                className="btn-overlay"
                ref={btnOverlayRef}
                style={{
                    backgroundColor: overlayFill || "#4a5fd6",
                    pointerEvents: "none",
                }}></div>
        </div>
    );
};

export default StyledBtn;
