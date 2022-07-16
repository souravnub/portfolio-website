import gsap from "gsap";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import MobileMockup from "../../mockups/mobile/MobileMockup";
import "./mobileMockupSection.scss";

// video = width -> 434px ,height -> 800px , scale in editting -> 87.8%
// img -> aspect ratio -> .43 / 1

const MobileMockupSection = ({ data }) => {
    let { mobileImg1, mobileImg2, mobileVideo } = data;
    let mainContainerRef = useRef();
    let [shouldShowSection, setShouldShowSection] = useState(false);

    useEffect(() => {
        if (mobileImg1 || mobileVideo || mobileImg2) {
            setShouldShowSection(true);
        }
    }, []);

    useEffect(() => {
        if (shouldShowSection) {
            let allMockups = document.querySelectorAll(
                ".main-mobile-mockup-section > *"
            );
            allMockups.forEach((mockup, idx) => {
                mockup.style.transform = `translateY(-${(idx + 0.2) * 2}rem)`;
            });
            gsap.to(allMockups, {
                y: 0,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: mainContainerRef.current,
                    start: "top 100%",
                    end: "bottom 100%",
                    scrub: 1.5,
                },
            });
        }
    }, [mainContainerRef, shouldShowSection]);

    if (!shouldShowSection) {
        return null;
    }

    return (
        <div className="main-mobile-mockup-section" ref={mainContainerRef}>
            {mobileImg1 && (
                <MobileMockup asset={{ type: "img", source: mobileImg1 }} />
            )}
            {mobileVideo && (
                <MobileMockup asset={{ type: "video", source: mobileVideo }} />
            )}
            {mobileImg2 && (
                <MobileMockup asset={{ type: "img", source: mobileImg2 }} />
            )}
        </div>
    );
};

export default MobileMockupSection;
