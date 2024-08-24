import { zodResolver } from "@hookform/resolvers/zod";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import ReactConfetti from "react-confetti";
import { useForm } from "react-hook-form";
import { BsCheck2Circle } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { ClockLoader } from "react-spinners";
import StyledBtn from "../../components/extras/StyledBtn";
import { setNavTextColor } from "../../features/navigation/navSlice";
import { contactSchema } from "../../utils/schemas";
import "./contactPage.scss";
import Turnstile from "react-turnstile";

const ContactPage = () => {
    let dispatch = useDispatch();

    let mainContactPageRef = useRef();
    const [success, setSuccess] = useState({
        success: null,
        message: null,
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({ resolver: zodResolver(contactSchema) });

    useEffect(() => {
        register("captchaToken", { required: true });
    }, []);

    useEffect(() => {
        dispatch(setNavTextColor("black"));
        let navHeight = document
            .querySelector(".top-navigation")
            .getBoundingClientRect().height;
        mainContactPageRef.current.style.paddingTop = navHeight + "px";
    }, []);

    useEffect(() => {
        if (isSubmitting) {
            document.body.style.overflow = "hidden";
            gsap.to(".loading-page-transition-overlay", {
                y: 0,
                ease: "expo.inOut",
            });
        } else {
            function removeOverlay() {
                document.body.style.overflow = "auto";
                gsap.to(".loading-page-transition-overlay", {
                    y: "-100%",
                    ease: "expo.inOut",
                });
            }

            if (success.success !== null) {
                const id = setTimeout(() => {
                    removeOverlay();
                    clearTimeout(id);
                }, 3000);
            } else {
                removeOverlay();
            }
        }
    }, [isSubmitting, success.success]);

    let handleFormSubmit = async (data) => {
        console.log(data);

        setSuccess({ success: null, message: null });

        const res = await fetch(
            `${process.env.REACT_APP_API_URL}/api/contact`,
            {
                method: "post",
                body: JSON.stringify({ ...data }),
            }
        );
        const dataRes = await res.json();
        setSuccess({ ...dataRes });
    };

    return (
        <div className="route-transition-container">
            <div className="loading-page-transition-overlay">
                <div>
                    {isSubmitting && (
                        <>
                            <ClockLoader color="white" size={70} />
                            <span>Let me bring a cup of coffee...</span>
                        </>
                    )}

                    {success.success !== null && (
                        <div data-type={success.success ? "success" : "error"}>
                            {success.success ? (
                                <>
                                    <ReactConfetti
                                        numberOfPieces={300}
                                        tweenDuration={3000}
                                        recycle={false}
                                    />
                                    <div className="flex items-center bg-green-700  p-5 rounded-sm text-lg  gap-3">
                                        <BsCheck2Circle className="text-2xl" />{" "}
                                        {success.message}
                                    </div>
                                </>
                            ) : (
                                <div className="flex items-center bg-red-600  p-5 rounded-sm text-lg  gap-3">
                                    <MdOutlineErrorOutline className="text-2xl" />
                                    {success?.message} . Please try again.
                                </div>
                            )}
                        </div>
                    )}
                </div>
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
                        <span>{process.env.REACT_APP_EMAIL}</span>
                    </div>
                </div>

                <form
                    className="main-contact-page-container__col"
                    onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="space-y-4">
                        <input type="text" hidden {...register("token")} />
                        <div>
                            <label
                                className="block text-sm mb-1  text-neutral-900"
                                htmlFor="name">
                                Name
                            </label>
                            <input
                                id="name"
                                {...register("name")}
                                className="bg-neutral-100 rounded-sm px-3 py-2 text-sm w-full"
                            />
                            <p className="text-sm text-red-500 mt-1">
                                {errors.name?.message}
                            </p>
                        </div>
                        <div>
                            <label
                                className="block text-sm mb-1  text-neutral-900"
                                htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                {...register("email")}
                                className="bg-neutral-100 rounded-sm px-3 py-2 text-sm w-full"
                            />
                            <p className="text-sm text-red-500 mt-1">
                                {errors.email?.message}
                            </p>
                        </div>

                        <div>
                            <label
                                className="block text-sm mb-1  text-neutral-900"
                                htmlFor="message">
                                Message
                            </label>
                            <textarea
                                {...register("message")}
                                rows={5}
                                id="message"
                                className="resize-none bg-neutral-100 rounded-sm px-3 py-2 text-sm w-full"
                            />
                            <p className="text-sm text-red-500 mt-1">
                                {errors.message?.message}
                            </p>
                        </div>

                        <Turnstile
                            theme="light"
                            sitekey={process.env.REACT_APP_CLOUDFLARE_SITE_KEY}
                            onVerify={(token) => {
                                setValue("token", token);
                            }}
                        />
                    </div>

                    <div className="styled-btn-container">
                        <button type="submit" disabled={isSubmitting}>
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
