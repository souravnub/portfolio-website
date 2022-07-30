import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import StyledBtn from "../../components/extras/StyledBtn";
import { FaPaperPlane } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { MdOutlineErrorOutline } from "react-icons/md";
import { ClockLoader } from "react-spinners";
import Input from "../../components/form/Input";
import TextArea from "../../components/form/TextArea";
import { setNavTextColor } from "../../features/navigation/navSlice";
import "./contactPage.scss";
import axiosClient from "../../api/axiosClient";
import gsap from "gsap";

const ContactPage = () => {
    let dispatch = useDispatch();

    let mainContactPageRef = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [success, setSuccess] = useState({
        success: undefined,
        message: null,
    });
    // checking if there is error except email, name or message validation
    const [error, setError] = useState({ isError: undefined, error: null });
    const [isNameValid, setIsNameValid] = useState({
        valid: true,
        message: "",
    });
    const [isEmailValid, setIsEmailValid] = useState({
        valid: true,
        message: "",
    });
    const [isMessageValid, setIsMessageValid] = useState({
        valid: true,
        message: "",
    });

    useEffect(() => {
        dispatch(setNavTextColor("black"));
        let navHeight = document
            .querySelector(".top-navigation")
            .getBoundingClientRect().height;
        mainContactPageRef.current.style.paddingTop = navHeight + "px";
    }, []);

    useEffect(() => {
        let timeout;
        if (success.message || error.error) {
            gsap.fromTo(
                ".main-error-container",
                {
                    y: "-10rem",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    ease: "expo.inOut",
                }
            );
            timeout = setTimeout(() => {
                gsap.to(".main-error-container", {
                    y: "-10rem",
                    opacity: 0,
                });
            }, 4000);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [success, error]);

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
            gsap.to(".loading-page-transition-overlay", {
                y: 0,
                ease: "expo.inOut",
            });
        } else {
            document.body.style.overflow = "auto";
            gsap.to(".loading-page-transition-overlay", {
                y: "-100%",
                ease: "expo.inOut",
            });
        }
    }, [isLoading, error.isError]);

    let handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            let res = await axiosClient.post("/contact", {
                name,
                email,
                message,
            });
            setIsLoading(false);

            if (res.data.success) {
                let { success, message } = res.data;
                setSuccess({ success, message });
            }
        } catch (err) {
            setIsLoading(false);
            //checking if the error is somewhere in the validation
            if (err.response && err.response.data.success === false) {
                err.response.data.errors.forEach((err) => {
                    let { location, message } = err;

                    if (location === "name") {
                        setIsNameValid({ valid: false, message });
                    }
                    if (location === "email") {
                        setIsEmailValid({ valid: false, message });
                    }
                    if (location === "message") {
                        setIsMessageValid({ valid: false, message });
                    }
                });

                return;
            }
            setSuccess({ isSuccess: undefined, message: null });
            setError({ isError: true, error: err.message });
        }
    };

    return (
        <div className="route-transition-container">
            <div className="loading-page-transition-overlay">
                <div>
                    <ClockLoader color="white" size={70} />
                    <span>Let me bring a cup of coffee...</span>
                </div>
            </div>
            <div
                className="main-error-container"
                data-type={success.success ? "success" : "error"}>
                {success.success ? (
                    <div>
                        <BsCheck2Circle className="icon" /> {success.message}
                    </div>
                ) : (
                    <div>
                        <MdOutlineErrorOutline className="icon" />
                        {error.error}. Please try again.
                    </div>
                )}
            </div>
            <div
                className="main-contact-page-container"
                ref={mainContactPageRef}>
                <div className="main-contact-page-container__main-info-container">
                    <div className="main-contact-page-container__main-info-container__info-container">
                        <div className="main-contact-page-container__main-info-container__my-img"></div>
                        <div>
                            <span className="main-contact-page-container__main-info-container__info-container__main-heading">
                                let's talk
                            </span>
                            <p>
                                Do have some queries? Let's settle them down.Or
                                want to know more about me? Please let me know,
                                I would love to hear from you and would be
                                delighted to have a little chit-chat.
                            </p>
                        </div>
                    </div>
                    <div>
                        <span>Email</span>
                        <span>s6hr6h4u3@gmail.com</span>
                    </div>
                </div>

                <form
                    className="main-contact-page-container__col"
                    onSubmit={handleFormSubmit}>
                    <Input
                        type="text"
                        id="name"
                        labelText="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setIsNameValid({ valid: true, message: "" });
                        }}
                        error={isNameValid}
                    />
                    <Input
                        type="email"
                        id="email"
                        labelText="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setIsEmailValid({ valid: true, message: "" });
                        }}
                        error={isEmailValid}
                    />
                    <TextArea
                        cols="30"
                        rows="7"
                        id="message"
                        labelText="message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                            setIsMessageValid({ valid: true, message: "" });
                        }}
                        error={isMessageValid}></TextArea>

                    <div className="styled-btn-container">
                        <button type="submit">
                            <StyledBtn
                                text={
                                    <span
                                        style={{
                                            display: "flex",
                                            gap: ".3rem",
                                            flexDirection: "column-reverse",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}>
                                        send
                                        <FaPaperPlane />
                                    </span>
                                }
                                fontSize="1rem"
                                type="circle"
                                padding="1.7rem"
                                overlayFill="#3a51d3"
                            />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
