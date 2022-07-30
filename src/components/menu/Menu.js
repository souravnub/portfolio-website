import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import gsap from "gsap";
import SmallDot from "../extras/small dot/SmallDot";
import "./menu.scss";
import { menuLinks } from "../../data/menuLinks";
import { useSelector } from "react-redux";

const Menu = () => {
    let menuRef = useRef();
    const menuToggleBtnRef = useRef();
    const menuToggleBtnOverlayRef = useRef();
    const bodyOverlayRef = useRef();

    const location = useLocation().pathname.substring(1);

    let { textColor } = useSelector((store) => store.nav);

    let [isMenuOpen, setIsMenuOpen] = useState(false);

    let setMenuOpen = (menu, toggleBtn, bodyOverlay, btnOverlay) => {
        toggleBtn.classList.add("open-menu");
        menu.classList.add("open-menu");
        setIsMenuOpen(true);

        let activeMenuTimeline = gsap.timeline({
            defaults: { ease: "expo.inOut" },
        });
        activeMenuTimeline
            .to(bodyOverlay, {
                opacity: 1,
                duration: 0.5,
                visibility: "visible",
            })
            .to(menu, { borderRadius: 0 }, "-=.5")
            .to(
                menu,
                {
                    x: 0,
                    duration: 1.5,
                },
                "-=1"
            )
            .to(
                ".nav-link",
                {
                    x: 0,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power4.inOut",
                },
                "-=1.4"
            )
            .to(btnOverlay, { y: 0 });
    };
    let setMenuClose = (menu, toggleBtn, bodyOverlay, btnOverlay) => {
        toggleBtn.classList.remove("open-menu");
        menu.classList.remove("open-menu");
        setIsMenuOpen(false);

        let closeMenuTimeline = gsap.timeline({
            defaults: { ease: "expo.inOut" },
        });
        closeMenuTimeline
            .to(bodyOverlay, {
                opacity: 0,
                duration: 0.5,
            })
            .set(bodyOverlay, { visibility: "hidden" })
            .to(
                menu,
                {
                    x: "100%",
                    duration: 1,
                },
                "-=.5"
            )
            .to(
                menu,
                {
                    borderBottomLeftRadius: "50%",
                    borderTopLeftRadius: "50%",
                },
                "-=.7"
            )
            .to(
                ".nav-link",
                {
                    x: "50%",
                    duration: 1,
                    stagger: 0.1,
                },
                "-=1"
            )
            .to(btnOverlay, {
                y: "-100%",
            })
            .set(btnOverlay, { y: "100%" });
    };

    useEffect(() => {
        let menu = menuRef.current;
        let menuToggleBtn = menuToggleBtnRef.current;
        let bodyOverlay = bodyOverlayRef.current;
        let btnOverlay = menuToggleBtnOverlayRef.current;

        if (isMenuOpen) {
            setMenuClose(menu, menuToggleBtn, bodyOverlay, btnOverlay);
        }
    }, [location]);

    useEffect(() => {
        let menuToggleBtn = menuToggleBtnRef.current;
        let menuToggleBtnOverlay = menuToggleBtnOverlayRef.current;

        let menu = menuRef.current;
        let bodyOverlay = bodyOverlayRef.current;
        let btnOverlay = menuToggleBtnOverlayRef.current;

        window.addEventListener("click", (e) => {
            if (e.target.classList.contains("body-overlay")) {
                setMenuClose(menu, menuToggleBtn, bodyOverlay, btnOverlay);
            }
        });

        // setting the hammenuBtn to hide by default
        gsap.to(menuToggleBtn, { scale: 0 });

        window.addEventListener("scroll", () => {
            if (window.scrollY >= 50) {
                gsap.to(menuToggleBtn, {
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                });
            } else {
                gsap.to(menuToggleBtn, {
                    scale: 0,
                    duration: 1,
                    ease: "power3.out",
                });
            }
        });

        menuToggleBtn.addEventListener("mouseover", () => {
            gsap.to(menuToggleBtnOverlay, {
                y: 0,
            });
        });
        menuToggleBtn.addEventListener("mouseout", () => {
            if (!menuToggleBtn.classList.contains("open-menu")) {
                gsap.timeline()
                    .to(menuToggleBtnOverlay, {
                        y: "-100%",
                    })
                    .set(menuToggleBtnOverlay, { y: "100%" });
            } else {
                gsap.set(menuToggleBtnOverlay, { y: 0 });
            }
        });
    }, []);

    let handleMenuToggle = () => {
        let menu = menuRef.current;
        let menuToggleBtn = menuToggleBtnRef.current;
        let bodyOverlay = bodyOverlayRef.current;
        let btnOverlay = menuToggleBtnOverlayRef.current;

        if (isMenuOpen) {
            setMenuClose(menu, menuToggleBtn, bodyOverlay, btnOverlay);
        } else {
            setMenuOpen(menu, menuToggleBtn, bodyOverlay, btnOverlay);
        }
    };

    return (
        <>
            <button
                className="mobile-menu-toggle-btn"
                style={{
                    color: !isMenuOpen ? textColor : "white",
                    transition: "color 700ms ease",
                }}
                onClick={handleMenuToggle}>
                {isMenuOpen ? (
                    <RiCloseLine className="illustration close" />
                ) : (
                    <span className="illustration">
                        <SmallDot
                            size=".5rem"
                            fill={!isMenuOpen ? textColor : "white"}
                        />
                    </span>
                )}
                Menu
            </button>
            <div className="body-overlay" ref={bodyOverlayRef}></div>
            <section className="main-navigation-container" ref={menuRef}>
                <div className="top-head-container">
                    <span className="styled-span">navigation</span>
                </div>
                <ul className="nav-links-container">
                    {menuLinks.map((link) => {
                        return (
                            <li
                                key={link.text}
                                className={`nav-link ${
                                    link.text === "home" && location === ""
                                        ? "active"
                                        : link.text === location
                                        ? "active"
                                        : ""
                                }`}>
                                <span className="circle"></span>
                                <Link to={link.path}>{link.text}</Link>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <button
                className="menu-toggle-btn"
                ref={menuToggleBtnRef}
                onClick={handleMenuToggle}>
                <div
                    className="btn-overlay"
                    ref={menuToggleBtnOverlayRef}></div>
                <div className="menu-lines-container">
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                </div>
            </button>
        </>
    );
};

export default Menu;
