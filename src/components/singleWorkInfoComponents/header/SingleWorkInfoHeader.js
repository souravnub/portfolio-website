import React from "react";
import "./header.scss";

const SingleWorkInfoHeader = ({
    siteName,
    servicesInfo,
    yearOfProduction,
    techUsed,
    description,
    contributors,
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

            {contributors && contributors.length > 0 && (
                <div className="single-work-info-header__work-desc">
                    <span className="head">contributors</span>

                    <div className="flex -space-x-4 rtl:space-x-reverse hover:space-x-0 w-fit isolate">
                        {contributors.map(
                            ({
                                id,
                                firstName,
                                lastName,
                                profileImage,
                                socialUrl,
                            }) => {
                                return (
                                    <a
                                        key={id}
                                        href={socialUrl}
                                        target="_blank"
                                        className="relative group transition-[margin]">
                                        <img
                                            class="w-12 z-10 aspect-square border-2 border-white rounded-full dark:border-white "
                                            src={profileImage}
                                            alt={firstName + " " + lastName}
                                        />
                                        <p className="hidden group-hover:block absolute -top-8 w-max z-20 bg-neutral-900 text-white p-1 px-2 rounded-sm left-1/2 -translate-x-1/2">
                                            Get in touch
                                        </p>
                                    </a>
                                );
                            }
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleWorkInfoHeader;
