import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import DesktopMockup from "../../mockups/desktop/DesktopMockup";
import "./desktopMockupSection.scss";

const DesktopMockupSection = ({ data }) => {
    let sectionRef = useRef();
    function setSectionWidth() {
        let bodyWidth = document.body.getBoundingClientRect().width + 4;
        sectionRef.current &&
            (sectionRef.current.style.width = bodyWidth + "px");
    }
    useEffect(() => {
        setSectionWidth();
        window.addEventListener("resize", () => setSectionWidth());
    }, []);
    return (
        <div ref={sectionRef} className="desktop-mockup-section">
            <DesktopMockup asset={data} />
        </div>
    );
};

export default DesktopMockupSection;
