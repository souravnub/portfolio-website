import React from "react";
import desktopMockup from "../../../assets/mockups/desktop.png";
import { PuffLoader } from "react-spinners";
import "./desktopMockup.scss";

const DesktopMockup = ({ asset }) => {
    return (
        <div className="device-mockup-container">
            <div className="device-mockup-container__loader-container">
                <PuffLoader color="#000000" size={100} />
            </div>
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
