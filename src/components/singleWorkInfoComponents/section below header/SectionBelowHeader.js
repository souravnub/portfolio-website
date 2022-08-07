import React, { useRef } from "react";
import StyledBtn from "../../extras/StyledBtn";
import { HiOutlineArrowRight } from "react-icons/hi";
import "./section.scss";
import { useEffect } from "react";
import { Parallax } from "react-parallax";
import gsap from "gsap";
import { useSelector } from "react-redux";

const SectionBelowHeader = ({ liveSiteLink, brandImg, brandNameImg }) => {
    let mainContainerRef = useRef();
    let liveLinkRef = useRef();

    let { windowWidth } = useSelector((store) => store.windowWidth);

    // wrt scrren -> 90vh
    let sectionHeight = 90;

    // the width at which the img sectoin will change its state -> parallax / fixed
    let parallaxToggleWidth = 1000;

    useEffect(() => {
        gsap.to(liveLinkRef.current, {
            y: "-100%",
            scrollTrigger: {
                trigger: mainContainerRef.current,
                start: "top 70%",
                scrub: 1,
            },
        });
    }, []);

    return (
        <div
            className="single-work-info-live-link-section width-container"
            ref={mainContainerRef}
            style={{
                minHeight:
                    windowWidth > parallaxToggleWidth
                        ? sectionHeight + "vh"
                        : "unset",
                paddingBlock:
                    windowWidth < parallaxToggleWidth ? "10rem" : "unset",
                backgroundImage:
                    windowWidth < parallaxToggleWidth
                        ? `url("${brandImg}")`
                        : "unset",
            }}>
            {windowWidth < parallaxToggleWidth && (
                <img
                    src={brandNameImg}
                    className="brand-name-img-without-parallax"
                />
            )}
            {brandNameImg && windowWidth > parallaxToggleWidth && (
                <Parallax
                    bgImage={brandImg}
                    strength={-100}
                    blur={{ min: -1, max: 2 }}
                    style={{
                        width: "100%",
                        height: sectionHeight + "vh",
                        paddingInline: "5rem",
                    }}>
                    <img
                        src={brandNameImg}
                        alt="brand name"
                        className="single-work-info-live-link-section__brand-name-img"
                        style={{
                            marginTop: sectionHeight / 2 + "vh",
                            transform: "translateY(-50%)",
                        }}
                    />
                </Parallax>
            )}

            <a
                ref={liveLinkRef}
                href={liveSiteLink}
                target="_blank"
                rel="noreferrer"
                className="single-work-info-live-link-section__link">
                <StyledBtn
                    text="live site"
                    fontSize=".9rem"
                    padding="3rem"
                    type="circle"
                    fill="#3c56f1"
                    overlayFill="#314adf"
                />
                <HiOutlineArrowRight className="icon" />
            </a>
        </div>
    );
};

export default SectionBelowHeader;
