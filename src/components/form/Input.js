import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import "./formInputs.scss";

const Input = ({
    type,
    onChange,
    id,
    labelText,
    placeholder,
    value,
    error,
}) => {
    let [showingErrorMessageContainer, setShowingErrorMessageContainer] =
        useState(true);

    useEffect(() => {
        if (!showingErrorMessageContainer) {
            hideErrorMessageContainer();
        }
    }, []);

    let hideErrorMessageContainer = () => {
        if (error.valid) {
            return;
        }
        setShowingErrorMessageContainer(false);
        let hideTimeline = gsap.timeline();
        hideTimeline
            .to(`.error-container__error-info-container-${id}`, {
                opacity: 0,
                y: ".8rem",
            })
            .set(`.error-container__error-info-container-${id}`, {
                visibility: "hidden",
            });
    };

    let showErrorMessageContainer = () => {
        if (error.valid) {
            return;
        }
        setShowingErrorMessageContainer(true);

        let showTimeline = gsap.timeline();
        showTimeline
            .set(`.error-container__error-info-container-${id}`, {
                visibility: "visible",
            })
            .to(`.error-container__error-info-container-${id}`, {
                opacity: 1,
                y: 0,
            });
    };

    let handleToggleErrorContainer = () => {
        if (!showingErrorMessageContainer) {
            showErrorMessageContainer();
            return;
        }
        hideErrorMessageContainer();
    };

    useEffect(() => {
        hideErrorMessageContainer();
    }, [value]);

    return (
        <>
            <div className="form-input-container">
                <input
                    placeholder={placeholder ? placeholder : " "}
                    className="form-input"
                    type={type}
                    onChange={onChange}
                    id={id}
                    value={value}></input>
                <label htmlFor={id}>{labelText}</label>
                <span className="form-input-bottom-line"></span>
                {!error.valid && (
                    <div className="error-container">
                        <button
                            type="button"
                            className="error-container__error-symbol"
                            onClick={handleToggleErrorContainer}>
                            <AiFillExclamationCircle />
                        </button>

                        <div
                            className={`error-container__error-info-container error-container__error-info-container-${id}`}>
                            {error.message}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Input;
