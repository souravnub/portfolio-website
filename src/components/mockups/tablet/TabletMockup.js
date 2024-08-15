import React from "react";
import "./tabletMockup.scss";

// aspect ratio of video ->  1.37 / 1

const TabletMockup = ({ asset, showBg = false }) => {
    return (
        <div
            className="main-tablet-container"
            style={{ backgroundColor: showBg ? "rgba(0,0,0,.06)" : "inherit" }}>
            {asset.type === "img" && (
                <img
                    src={asset.source}
                    alt="design example"
                    className="main-tablet-container__design-asset"
                />
            )}
            {asset.type === "video" && (
                <video
                    id={asset.source}
                    src={asset.source}
                    autoPlay
                    loop
                    muted
                    playsInline
                    data-wf-ignore="true"
                    className="main-tablet-container__design-asset"></video>
            )}
        </div>
    );
};

export default TabletMockup;
