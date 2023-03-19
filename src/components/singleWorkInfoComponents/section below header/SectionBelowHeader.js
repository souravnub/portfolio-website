import React, { useRef } from "react";
import StyledBtn from "../../extras/StyledBtn";
import { HiOutlineArrowRight } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import "./section.scss";
import { useEffect } from "react";
import gsap from "gsap";

const SectionBelowHeader = ({
    liveSiteLink,
    brandImg,
    brandNameImg,
    githubLink,
}) => {
    let mainContainerRef = useRef();
    let liveLinkRef = useRef();
    let githubLinkRef = useRef();

    useEffect(() => {
        const liveLinkAni = gsap.to(liveLinkRef.current, {
            y: "-100%",
            scrollTrigger: {
                trigger: mainContainerRef.current,
                start: "top 70%",
                scrub: 1,
            },
        });
        const githubLinkAni = gsap.to(githubLinkRef.current, {
            y: "-50%",
            scrollTrigger: {
                trigger: mainContainerRef.current,
                start: "top 70%",
                scrub: 2,
            },
        });
        return () => {
            liveLinkAni.revert();
            githubLinkAni.revert();
        };
    }, []);

    return (
        <div
            className="single-work-info-live-link-section width-container"
            ref={mainContainerRef}
            style={{ backgroundImage: `url(${brandImg})` }}>
            <img
                src={brandNameImg}
                className="single-work-info-live-link-section__img-container__brand-name-img"
            />

            {liveSiteLink && (
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
            )}

            {githubLink && (
                <a
                    href={githubLink}
                    ref={githubLinkRef}
                    target="_blank"
                    rel="noreferrer"
                    className="single-work-info-live-link-section__github-link">
                    <StyledBtn
                        padding="3rem"
                        type="circle"
                        fill="#eeeeee"
                        overlayFill="#dadada"></StyledBtn>
                    <BsGithub className="icon" />
                </a>
            )}
        </div>
    );
};

export default SectionBelowHeader;
