import React from "react";
import { useRef } from "react";
import tabletMockupImg from "../../../assets/mockups/ipad.png";
import "./tabletMockup.scss";

// aspect ratio of video ->  1.37 / 1

const TabletMockup = ({ asset, showBg = false }) => {
    let mockImgRef = useRef();
    let mainMockContainerRef = useRef();

    return (
        <div
            className="main-tablet-container"
            style={{ backgroundColor: showBg ? "rgba(0,0,0,.06)" : "inherit" }}>
            <div className="tablet-mockup-container" ref={mainMockContainerRef}>
                {asset.type === "img" && (
                    <img
                        src={asset.source}
                        alt="design example"
                        className="tablet-mockup-container__design-asset"
                    />
                )}
                {asset.type === "video" && (
                    <video
                        autoPlay
                        muted
                        src={asset.source}
                        className="tablet-mockup-container__design-asset"
                    />
                )}
                <img
                    src={tabletMockupImg}
                    alt="mockup"
                    className="tablet-mockup-container__mockup-img"
                    ref={mockImgRef}
                />
            </div>
        </div>
    );
};

export default TabletMockup;
