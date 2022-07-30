import React from "react";
import DesktopMockup from "../../mockups/desktop/DesktopMockup";
import "./desktopMockupSection.scss";

const DesktopMockupSection = ({ data }) => {
    return (
        <div className="desktop-mockup-section">
            <DesktopMockup asset={data} />
        </div>
    );
};

export default DesktopMockupSection;
