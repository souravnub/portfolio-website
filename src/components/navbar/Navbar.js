import React from "react";
import { RiCopyrightLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { navLinks } from "../../data/navLinks";
import "./Navbar.scss";
import { useEffect } from "react";

const Navbar = () => {
    const location = useLocation().pathname.substring(1);
    let { textColor } = useSelector((store) => store.nav);

    useEffect(() => {
        let nav = document.querySelector(".top-navigation");
        nav.style.setProperty("--text-color", textColor);
    }, [textColor]);

    return (
        <div role="navigation" className="top-navigation">
            <Link to="/" className="logo">
                <RiCopyrightLine className="icon" />
                <span>Coded by Sourav</span>
            </Link>

            <ul className="top-navigation__links-container">
                {navLinks.map((link) => {
                    return (
                        <li key={link.text}>
                            <Link
                                to={link.path}
                                className={`${
                                    location === link.text ? "active" : ""
                                }`}>
                                {link.text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;
