import React, { useRef } from "react";
import { useEffect } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "./projectLearningSectionInfoContainer.scss";
import { useState } from "react";
import gsap from "gsap";
import StyledBtn from "../../extras/StyledBtn";
import { useSelector } from "react-redux";
import SmallDot from "../../extras/small dot/SmallDot";

const ProjectLearningSectionInfoContainer = ({
    skillsEnhancedArr,
    learning,
    isInfoContainerOpen,
    websiteName,
    handleCloseInfoModal,
}) => {
    const infoContainerRef = useRef();
    const closeBtnRef = useRef();

    const { windowWidth } = useSelector((store) => store.windowDimmensions);
    const [cursorPosition, setCursorPosition] = useState({ x: null, y: null });

    function focusTrapHandler(e) {
        if (e.key === "Escape") {
            handleCloseInfoModal();
            return;
        }
        var focusableEls = infoContainerRef.current.querySelectorAll(
            'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
        );
        var firstFocusableEl = focusableEls[0];
        var lastFocusableEl = focusableEls[focusableEls.length - 1];
        var KEYCODE_TAB = 9;

        let isFocusInsideContainer = Array.from(focusableEls).find(
            (ele) => ele === document.activeElement
        );
        if (!isFocusInsideContainer) {
            firstFocusableEl.focus();
        }

        var isTabPressed = e.key === "Tab" || e.keyCode === KEYCODE_TAB;

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) {
            /* shift + tab */ if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        } /* tab */ else {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }
    }
    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        if (isInfoContainerOpen) {
            document.addEventListener("keydown", focusTrapHandler);
            document.body.style.overflow = "hidden";
            if (!(windowWidth < 500)) {
                document.addEventListener("mousemove", handleMouseMove);
            }
        } else {
            document.removeEventListener("keydown", focusTrapHandler);
            document.removeEventListener("mousemove", handleMouseMove);
            document.body.style.overflow = "auto";
        }
    }, [isInfoContainerOpen]);

    useEffect(() => {
        gsap.to(".project-learnings-section__info-container__cursor", {
            top: cursorPosition.y,
            left: cursorPosition.x,
            duration: 0.15,
        });
    }, [cursorPosition.x, cursorPosition.y]);

    return (
        <div
            className="project-learnings-section__info-container"
            ref={infoContainerRef}>
            <div className="project-learnings-section__info-container__cursor"></div>

            <button ref={closeBtnRef} onClick={handleCloseInfoModal}>
                <StyledBtn
                    fill="black"
                    text={
                        <span>
                            <HiOutlineArrowNarrowLeft />
                            Back to <span>{websiteName}</span>
                        </span>
                    }
                    padding=".4rem 1rem"
                    borderRadius="100vh"></StyledBtn>
            </button>

            <div className="project-learnings-section__info-container__head-container">
                <div className="project-learnings-section__info-container__head-container__main-heading">
                    {websiteName}
                </div>

                {learning && (
                    <div className="project-learnings-section__info-container__head-container__learning">
                        <SmallDot fill="white" size=".4rem" />
                        <p>{learning}</p>
                    </div>
                )}
            </div>

            <div className="project-learnings-section__info-container__info-cards-container">
                <div className="project-learnings-section__info-container__info-cards-container__seperator-line"></div>
                {skillsEnhancedArr.map(({ name, desc }) => (
                    <div
                        key={name}
                        className="project-learnings-section__info-container__info-cards-container__card">
                        <h4 className="project-learnings-section__info-container__info-cards-container__card__card-title">
                            {name}
                        </h4>
                        <p className="project-learnings-section__info-container__info-cards-container__card__card-desc">
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectLearningSectionInfoContainer;
