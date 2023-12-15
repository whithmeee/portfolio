import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container container">
                <h1 className="footer__title">Shpinev.Dev</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#project" className="footer__link">
                            Projects
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://github.com/whithmeee"
                        className="footer__social-link"
                        target="_blank">
                        <FaGithub />
                    </a>
                    <a
                        href="https://t.me/wiithmeee"
                        className="footer__social-link"
                        target="_blank">
                        <FaTelegram />
                    </a>
                    <a href="#" className="footer__social-link" target="_blank">
                        <FaWhatsappSquare />
                    </a>
                    <a href="#" className="footer__social-link" target="_blank">
                        <SiCodewars />
                    </a>
                </div>

                <span className="footer__copy">&#169; Crypticalcoder. All rigths reserved</span>
            </div>
        </footer>
    );
};

export default Footer;
