import { useEffect, useRef } from "react";
import { setNavTextColor } from "../../features/navigation/navSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import alienSvg from "../../assets/svgs/alien.svg";
import "./about.scss";
import gsap from "gsap";
import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Contact from "../../sections/contact/Contact";
import myAboutImg from "../../assets/images/my images/my-portfolio-about-img.JPEG";
import ImageParallax from "../../components/img parallax/ImageParallax";

const About = () => {
    let dispatch = useDispatch();

    let aboutPageInteractionRef = useRef();
    let [hasImgLoaded, setHasImgLoaded] = useState(false);
    let bgColorArr = [
        "#205eb4",
        "#903076",
        "#ff7812",
        "#ff6551",
        "#772877",
        "#009300",
    ];

    useEffect(() => {
        dispatch(setNavTextColor("black"));

        let interval;
        let interaction = aboutPageInteractionRef.current;
        let c = 1;
        interaction.addEventListener("mouseover", () => {
            interaction.style.backgroundColor = bgColorArr[0];
            // transitioning the background color
            interval = setInterval(() => {
                interaction.style.backgroundColor = bgColorArr[c];
                if (!bgColorArr[c]) {
                    c = 0;
                } else {
                    c += 1;
                }
            }, 2000);
        });
        interaction.addEventListener("mouseout", () => {
            clearInterval(interval);
            interaction.style.backgroundColor = "transparent";
        });

        // always exploring text animations
        let textTimeline = gsap.timeline({
            defaults: { repeat: -1, duration: 0.8 },
        });

        textTimeline.fromTo(
            ".dot",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                stagger: 0.3,
            }
        );

        // small arrow animations
        let infoContainerTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".main-about-page-container__main-about-section__info",
                start: "top 50%",
                end: "500% 80%",
                scrub: 0.6,
            },
        });
        infoContainerTimeline
            .to(".main-about-page-container__main-about-section__info > span", {
                y: ".6rem",
            })
            .to(
                ".main-about-page-container__main-about-section__info .arrow-icon",
                {
                    rotation: "10deg",
                }
            );
    }, []);

    useEffect(() => {
        if (!hasImgLoaded) {
            return;
        }

        // why to go for me . line-animations
        gsap.to(
            ".main-about-page-container__reasons-container__reasons-cards-container__card .line",
            {
                scaleX: 1,
                stagger: 0.25,
                scrollTrigger: {
                    trigger:
                        ".main-about-page-container__reasons-container__reasons-cards-container__card",
                    start: "-10% 80%",
                },
            }
        );

        // bit more about me line animations
        let cards = document.querySelectorAll(
            ".main-about-page-container__about-me-info__cards-container__card"
        );

        cards.forEach((card) => {
            let line = card.querySelector(".line");
            let timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "-50% 90%",
                    end: "200% 70%",
                },
                defaults: {
                    duration: 0.34,
                },
            });
            timeline
                .to(line, {
                    scaleY: 1,
                })
                .to(line.querySelector(".circle"), {
                    opacity: 1,
                    y: 0,
                })
                .to(card.querySelector(".card-head"), {
                    opacity: 1,
                    y: 0,
                })
                .to(card.querySelectorAll(".info span"), {
                    opacity: 1,
                    x: 0,
                    stagger: 0.2,
                });
        });

        return () => {};
    }, [hasImgLoaded]);

    return (
        <div className="main-about-page-container route-transition-container">
            <div className="main-about-page-container__header-container padding-inline">
                <span className="main-about-page-container__header-container__main-heading">
                    Wow, a whole page about me !
                </span>

                <div className="main-about-page-container__header-container__interaction-container">
                    <div
                        className="about-page-interaction"
                        ref={aboutPageInteractionRef}>
                        <img src={alienSvg} alt="" />
                        <div className="interaction-shadow"></div>
                    </div>
                </div>
            </div>

            <div className="main-about-page-container__main-about-section padding-inline width-container">
                <div className="main-about-page-container__main-about-section__info">
                    <HiOutlineArrowRight className="arrow-icon" />
                    <span>
                        Being a professional web designer and developer , I deal
                        with web based applications. My self-taught experience
                        and dedication to the work makes me different from the
                        crowd.
                    </span>

                    <span className="always-exploring-text">
                        Always exploring
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                    </span>
                </div>
                <div className="main-about-page-container__main-about-section__img-container">
                    <ImageParallax
                        img={myAboutImg}
                        setHasImgLoaded={setHasImgLoaded}
                        strength={5}
                    />
                </div>
            </div>

            <div className="main-about-page-container__reasons-container width-container">
                <span className="main-about-page-container__reasons-container__main-heading">
                    Reasons to go for me
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                </span>

                <div className="main-about-page-container__reasons-container__reasons-cards-container">
                    <div className="main-about-page-container__reasons-container__reasons-cards-container__card">
                        <span>01</span>
                        <span className="line"></span>
                        <span className="heading">Transparency</span>
                        <p>
                            A complete transparency is what I share with all my
                            colleagues and clients. No non-sense, only a
                            user-friendly way of handling work.
                        </p>
                    </div>
                    <div className="main-about-page-container__reasons-container__reasons-cards-container__card">
                        <span>02</span>
                        <span className="line"></span>
                        <span className="heading">
                            Curiosity &#38; self-improvement
                        </span>
                        <p>
                            I always focus on opportunities to imporove my self,
                            a quality of mine that helps me to develop
                            cutting-edge design that always stands out.
                        </p>
                    </div>
                    <div className="main-about-page-container__reasons-container__reasons-cards-container__card">
                        <span>03</span>
                        <span className="line"></span>
                        <span className="heading">Development</span>
                        <p>
                            Building websites from scratch that fits in the
                            design world with a seamless design. A touch of
                            animations, interactions and transitions enhances
                            the user-experience more.
                        </p>
                    </div>
                </div>
            </div>

            <div className="main-about-page-container__about-me-info width-container">
                <span className="main-about-page-container__about-me-info__main-heading">
                    A bit more about me
                    <span className="absolute-illustration">
                        <div className="absolute-illustration__line"></div>
                        <div className="absolute-illustration__dot"></div>
                        <div className="absolute-illustration__dot"></div>
                        <div className="absolute-illustration__dot"></div>
                    </span>
                </span>
                <div className="main-about-page-container__about-me-info__cards-container">
                    <div className="main-about-page-container__about-me-info__cards-container__card">
                        <div className="card-head">age</div>
                        <span className="line">
                            <span className="circle"></span>
                        </span>
                        <div className="info">
                            <span>
                                currently {new Date().getFullYear() - 2004}
                                years old
                            </span>
                            <span>born on March 19,2004</span>
                        </div>
                    </div>
                    <div className="main-about-page-container__about-me-info__cards-container__card">
                        <div className="card-head">education</div>
                        <span className="line">
                            <span className="circle"></span>
                        </span>
                        <div className="info">
                            <span>
                                no formal education till the time in the field
                            </span>
                            <span>self taught</span>
                            <span>started the journey at age of 16</span>
                            <span>youtube &#38; google - main weapons</span>
                        </div>
                    </div>
                    <div className="main-about-page-container__about-me-info__cards-container__card">
                        <div className="card-head">
                            technologies I am currently using
                        </div>
                        <span className="line">
                            <span className="circle"></span>
                        </span>
                        <div className="info">
                            <span>React - for making UI</span>
                            <span>
                                gsap, framer motion - for animations and
                                interactions
                            </span>
                            <span>
                                sass, styled components - for managing css
                            </span>
                            <span>node &#38; express - for backend</span>
                            <span>mongodb - database</span>
                        </div>
                    </div>
                    <div className="main-about-page-container__about-me-info__cards-container__card">
                        <div className="card-head">future plans</div>
                        <span className="line">
                            <span className="circle"></span>
                        </span>
                        <div className="info">
                            <span>working with Next js</span>
                            <span>
                                improving micro interactions, animations &#38;
                                backend skills
                            </span>
                            <span>diving deep into design &#38; three js </span>
                        </div>
                    </div>
                </div>
            </div>

            {hasImgLoaded && <Contact />}
        </div>
    );
};

export default About;
