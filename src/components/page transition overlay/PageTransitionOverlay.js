import gsap from "gsap";
import React from "react";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import PageTransitionOverlaySlice, {
    setPageTransitionOverlay,
} from "../../features/page transition overlay/PageTransitionOverlaySlice";
import SmallDot from "../extras/small dot/SmallDot";
import "./pageTransitionOverlay.scss";

const PageTransitionOverlay = () => {
    let overlayRef = useRef();
    let dispatch = useDispatch();
    let { text, show } = useSelector((store) => store.pageTransitionOverlay);

    const TRANSITION_DURATION = 1;
    const CURVE_HEIGHT = 220;

    useEffect(() => {
        if (show) {
            let pageTransitionContainer = document.querySelector(
                ".route-transition-container"
            );
            let overlay = overlayRef.current;

            let transitionTimeline = gsap.timeline({
                defaults: { ease: "expo.inOut", duration: TRANSITION_DURATION },
                onStart: function () {
                    window.scrollTo("top", 0);
                },
                onComplete: function () {
                    dispatch(setPageTransitionOverlay(false));
                },
            });

            transitionTimeline

                .fromTo(
                    overlay,
                    { y: overlay.offsetHeight + CURVE_HEIGHT },
                    {
                        y: 0,
                    }
                )
                .fromTo(
                    ".page-transition-overlay__top-curve",
                    {
                        height: CURVE_HEIGHT,
                    },
                    {
                        height: 0,
                    },
                    "<"
                )
                .to(overlay, { y: "-100%" })

                .fromTo(
                    ".page-transition-overlay__bottom-curve",
                    {
                        height: CURVE_HEIGHT,
                    },
                    {
                        height: 0,
                    },
                    "<+=10%"
                )
                .fromTo(
                    pageTransitionContainer,
                    { opacity: 0 },
                    {
                        opacity: 1,
                    },
                    "<"
                );
        }
    }, [show]);

    return (
        <div
            className="page-transition-overlay"
            ref={overlayRef}
            style={{ "--curve-height": CURVE_HEIGHT + "px" }}>
            <div className="page-transition-overlay__top-curve"></div>
            <div className="page-transition-overlay__text-container">
                <SmallDot fill="white" size=".6rem" />
                {text}
            </div>
            <div className="page-transition-overlay__bottom-curve"></div>
        </div>
    );
};

export default PageTransitionOverlay;
