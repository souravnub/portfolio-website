import React from "react";
import mobileMockupImg from "../../../assets/mockups/phone.png";
import { PuffLoader } from "react-spinners";
import "./mobileMockup.scss";

const MobileMockup = ({ asset }) => {
    return (
        <div className="mobile-mockup-container">
            <div className="mobile-mockup-container__loader-container">
                <PuffLoader color="#000000" size={80} />
            </div>
            <img
                src={mobileMockupImg}
                alt="mockup"
                className="mobile-mockup-container__mobile-mockup-img"
            />
            {asset.type === "img" && (
                <img
                    src={asset.source}
                    alt="design example"
                    className="mobile-mockup-container__design-asset"
                />
            )}
            {asset.type === "video" && (
                <video
                    autoPlay
                    muted
                    src={asset.source}
                    className="mobile-mockup-container__design-asset"
                />
            )}
        </div>
    );
};

export default MobileMockup;
