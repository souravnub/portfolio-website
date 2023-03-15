import React from "react";
import desktopMockup from "../../../assets/mockups/macbook.png";
import { FadeLoader } from "react-spinners";
import "./desktopMockup.scss";

const DesktopMockup = ({ asset }) => {
    return (
        <div className="device-mockup-container">
            <div className="device-mockup-container__loader-container">
                <FadeLoader
                    color="hsla(168, 0%, 65%, 1)"
                    height={14}
                    margin={0}
                    radius={5}
                    width={3}
                />
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
                    id={asset.source}
                    src={asset.source}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="device-mockup-container__design-asset"></video>
            )}
        </div>
    );
};

export default DesktopMockup;
