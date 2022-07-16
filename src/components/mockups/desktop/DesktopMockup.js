import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import desktopMockup from "../../../assets/mockups/desktop.png";
import "./desktopMockup.scss";

const DesktopMockup = ({ asset }) => {
    let desktopMockupRef = useRef();
    let mainContainerRef = useRef();

    function setContainerHeight() {
        let desktopMockupImgHeight =
            desktopMockupRef.current?.getBoundingClientRect().height;

        mainContainerRef.current.style.height = desktopMockupImgHeight + "px";
        mainContainerRef.current.style.aspectRatio = "unset";
    }

    useEffect(() => {
        if (desktopMockupRef.current.complete && mainContainerRef.current) {
            setContainerHeight();
        }
        window.addEventListener("resize", () => {
            if (desktopMockupRef.current.complete && mainContainerRef.current) {
                setContainerHeight();
            }
        });
    }, []);

    return (
        <div className="device-mockup-container" ref={mainContainerRef}>
            <img
                src={desktopMockup}
                alt="desktop"
                className="device-mockup-container__mockup-img"
                ref={desktopMockupRef}
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
