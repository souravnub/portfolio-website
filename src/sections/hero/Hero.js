import React, { useEffect } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { BsGlobe } from "react-icons/bs";
import "./hero.scss";
import gsap from "gsap";
import myImg from "../../assets/images/my images/my-portfolio-img-1.JPG";

const Hero = () => {
    useEffect(() => {
        let tl = gsap.timeline({ repeat: -1, yoyo: true });

        tl.to(".main-hero-section__location-info__info-container__icon", {
            rotate: "360deg",
            duration: 7,
            ease: "power4.inOut",
        });
    }, []);
    return (
        <section className="main-hero-section">
            <div className="main-hero-section__bg-img-container">
                <img
                    src={myImg}
                    alt=""
                    className="main-hero-section__bg-img-container__bg-img"
                />
            </div>

            <div className="main-hero-section__location-info">
                <div className="main-hero-section__location-info__info-container">
                    <span>Located</span>
                    <span>in India</span>
                </div>

                <BsGlobe className="main-hero-section__location-info__info-container__icon" />
            </div>

            <div className="main-hero-section__work-info">
                <HiOutlineArrowRight className="main-hero-section__work-info__icon" />

                <div className="main-hero-section__work-info__info-container">
                    <span>passionate designer</span>
                    <span>&#38; developer</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
