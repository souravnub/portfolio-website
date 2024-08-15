import React from "react";
import "./desktopMockup.scss";

const DesktopMockup = ({ data }) => {
    return (
        <div className="desktop-mockup">
            {data.type === "img" && (
                <img
                    src={data.source}
                    alt="design example"
                    className="desktop-mockup__design-asset"
                />
            )}
            {data.type === "video" && (
                <video
                    id={data.source}
                    src={data.source}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="desktop-mockup__design-asset"></video>
            )}
        </div>
    );
};

export default DesktopMockup;
