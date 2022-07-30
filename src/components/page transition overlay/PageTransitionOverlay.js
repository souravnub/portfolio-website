import gsap from "gsap";
import React from "react";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setPageTransitionOverlay } from "../../features/page transition overlay/PageTransitionOverlaySlice";
import SmallDot from "../extras/small dot/SmallDot";
import "./pageTransitionOverlay.scss";

const PageTransitionOverlay = () => {
    let overlayRef = useRef();
    let dispatch = useDispatch();
    let { text, show } = useSelector((store) => store.pageTransitionOverlay);
    let { windowWidth } = useSelector((store) => store.windowWidth);

    let [curveHeight, setCurverHeight] = useState(200);
    const TRANSITION_DURATION = 1;

    useEffect(() => {
        if (windowWidth > 750) {
            setCurverHeight(200);
        } else {
            setCurverHeight(50);
        }

        overlayRef.current.style.transform = `translateY(${
            -(
                overlayRef.current.getBoundingClientRect().height +
                document
                    .querySelector(".page-transition-overlay__bottom-curve")
                    .getBoundingClientRect().height
            ) + "px"
        })`;
    }, [windowWidth, curveHeight]);

    useEffect(() => {
        if (show) {
            let pageTransitionContainer = document.querySelector(
                ".route-transition-container"
            );
            let overlay = overlayRef.current;

            let overlayHeight =
                overlay.getBoundingClientRect().height + curveHeight;
            let transitionTimeline = gsap.timeline({
                defaults: { ease: "expo.inOut", duration: TRANSITION_DURATION },
                onStart: function () {
                    window.scrollTo("top", 0);
                },
            });
            gsap.set(pageTransitionContainer, {
                opacity: 0,
            });
            transitionTimeline
                .set(overlay, {
                    y: overlayHeight + "px",
                })
                .to(overlay, {
                    y: 0,
                })
                .to(overlay, {
                    y: -overlayHeight + "px",
                })
                .to(
                    pageTransitionContainer,
                    {
                        opacity: 1,
                    },
                    "-=1"
                );
            dispatch(setPageTransitionOverlay(false));
        }
    }, [show]);

    return (
        <div
            className="page-transition-overlay"
            ref={overlayRef}
            style={{ "--curve-height": curveHeight + "px" }}>
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
