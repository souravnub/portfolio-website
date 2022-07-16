import gsap from "gsap";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setPageTransitionOverlay } from "../../features/page transition overlay/PageTransitionOverlaySlice";
import SmallDot from "../extras/small dot/SmallDot";
import "./pageTransitionOverlay.scss";

const PageTransitionOverlay = () => {
    let overlayRef = useRef();
    let dispatch = useDispatch();
    let { text, show } = useSelector((store) => store.pageTransitionOverlay);

    useEffect(() => {
        if (show) {
            let overlay = overlayRef.current;
            let transitionTimeline = gsap.timeline({
                defaults: { ease: "expo.inOut" },
            });
            transitionTimeline
                .to(overlay, {
                    y: 0,
                    duration: 0.5,
                })
                .to(overlay, {
                    y: "-100%",
                    duration: 0.5,
                })
                .set(overlay, {
                    y: "100%",
                });
            dispatch(setPageTransitionOverlay(false));
        }
    }, [show]);

    return (
        <div className="page-transition-overlay" ref={overlayRef}>
            <div className="page-transition-overlay__text-container">
                <SmallDot fill="white" size=".6rem" />
                {text}
            </div>
        </div>
    );
};

export default PageTransitionOverlay;
