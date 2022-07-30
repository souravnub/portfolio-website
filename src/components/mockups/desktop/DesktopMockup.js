import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import desktopMockup from "../../../assets/mockups/desktop.png";
import "./desktopMockup.scss";

const DesktopMockup = ({ asset }) => {
    return (
        <div className="device-mockup-container">
            <img
                src={desktopMockup}
                alt="desktop"
                className="device-mockup-container__mockup-img"
            />
            {asset.type === "img" && (
                <img
                    src={asset.source}
                    alt="design example"
                    className="device-mockup-container__design-asset"
                />
            )}
            {asset.type === "video" && (
                <video
                    autoPlay
                    muted
                    loop
                    src={asset.source}
                    className="device-mockup-container__design-asset"
                />
            )}
        </div>
    );
};

export default DesktopMockup;
