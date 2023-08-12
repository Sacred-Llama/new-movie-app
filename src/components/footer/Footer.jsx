import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    const handleIconClick = () => {
        // Redirect to example.com when any social icon is clicked
        window.location.href = 'https://paypou.com/WK4Ux/22879904';
    };
    const handleIconClick2 = () => {
        // Redirect to example.com when any social icon is clicked
        window.location.href = 'https://cagesscan.com/zir0c53ebb?key=de0f51dc38f34aaa7c29ea81b7543e20';
    };
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    {/* <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li> */}
                    <li className="menuItem"  onClick={handleIconClick} >About</li>
                    <li className="menuItem"  onClick={handleIconClick} >Blog</li>
                    <li className="menuItem"  onClick={handleIconClick2} >FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon" onClick={handleIconClick}>
                        <FaFacebookF />
                    </span>
                    <span className="icon" onClick={handleIconClick2}>
                        <FaInstagram />
                    </span>
                    <span className="icon" onClick={handleIconClick}>
                        <FaTwitter />
                    </span>
                    <span className="icon" onClick={handleIconClick2}>
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
