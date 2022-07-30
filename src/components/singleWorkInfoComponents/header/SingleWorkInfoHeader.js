import React from "react";
import "./header.scss";

const SingleWorkInfoHeader = ({ siteName, servicesInfo, yearOfProduction }) => {
    return (
        <div className="single-work-info-header width-container">
            <span className="single-work-info-header__brand-name">
                {siteName}
            </span>

            <div className="single-work-info-header__info-container">
                <div>
                    <span className="head">services / involvement</span>
                    <span>{servicesInfo}</span>
                </div>

                <div>
                    <span className="head">year</span>
                    <span>{yearOfProduction}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleWorkInfoHeader;
