import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';

import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container container">
                <h1 className="footer__title">Shpinev.Dev</h1>

                <ul className="footer__list">
                    <li>
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="home"
                            className="footer__link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="about"
                            className="footer__link">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="project"
                            className="footer__link">
                            Projects
                        </Link>
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
