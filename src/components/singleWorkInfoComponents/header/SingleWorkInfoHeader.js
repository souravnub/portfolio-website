import React from "react";
import "./header.scss";

const SingleWorkInfoHeader = ({
    siteName,
    servicesInfo,
    yearOfProduction,
    techUsed,
    description,
}) => {
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

                {techUsed && (
                    <div className="single-work-info-header__more-info">
                        <span className="head">tech used</span>
                        <span>
                            {techUsed.map((tech, idx) => {
                                if (idx !== techUsed.length - 1) {
                                    return `${tech}, `;
                                }
                                return tech;
                            })}
                        </span>
                    </div>
                )}
            </div>

            {description && (
                <div className="single-work-info-header__work-desc">
                    <span className="head">project description</span>
                    <p>{description}</p>
                </div>
            )}
        </div>
    );
};

export default SingleWorkInfoHeader;
