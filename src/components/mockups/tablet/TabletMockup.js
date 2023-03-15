import React from "react";
import { PuffLoader } from "react-spinners";
import tabletMockupImg from "../../../assets/mockups/iPad.png";
import "./tabletMockup.scss";

// aspect ratio of video ->  1.37 / 1

const TabletMockup = ({ asset, showBg = false }) => {
    return (
        <div
            className="main-tablet-container"
            style={{ backgroundColor: showBg ? "rgba(0,0,0,.06)" : "inherit" }}>
            <div className="tablet-mockup-container">
                <div className="tablet-mockup-container__loader-container">
                    <PuffLoader color="#000000" size={80} />
                </div>
                <img
                    src={tabletMockupImg}
                    alt="mockup"
                    className="tablet-mockup-container__mockup-img"
                />

                {asset.type === "img" && (
                    <img
                        src={asset.source}
                        alt="design example"
                        className="tablet-mockup-container__design-asset"
                    />
                )}
                {asset.type === "video" && (
                    <video
                        id={asset.source}
                        src={asset.source}
                        autoPlay
                        muted
                        playsInline
                        data-wf-ignore="true"
                        className="tablet-mockup-container__design-asset"></video>
                )}
            </div>
        </div>
    );
};

export default TabletMockup;
