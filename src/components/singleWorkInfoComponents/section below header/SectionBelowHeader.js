import React, { useRef } from "react";
import StyledBtn from "../../extras/StyledBtn";
import { HiOutlineArrowRight } from "react-icons/hi";
import "./section.scss";
import { useEffect } from "react";
import { Parallax } from "react-parallax";
import gsap from "gsap";

const SectionBelowHeader = ({ liveSiteLink, brandImg, brandNameImg }) => {
    let mainContainerRef = useRef();
    let liveLinkRef = useRef();

    // wrt scrren -> 90vh
    let sectionHeight = 90;

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
            className="single-work-info-live-link-section"
            ref={mainContainerRef}
            style={{ minHeight: sectionHeight + "vh" }}>
            {brandNameImg && (
                <Parallax
                    bgImage={brandImg}
                    strength={-100}
                    blur={{ min: -1, max: 2 }}
                    style={{
                        width: "100%",
                        height: "100%",
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
