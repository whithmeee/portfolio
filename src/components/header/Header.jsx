import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="" className="nav__logo">
                    Shpinev.Dev
                </a>

                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav__link">
                                <i className="uil uil-nav__icon">Home</i>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav__link">
                                <i className="uil uil-nav__icon">About</i>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav__link">
                                <i className="uil uil-nav__icon">Skills</i>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link
                                to="project"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav__link">
                                <i className="uil uil-nav__icon">Projects</i>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav__link">
                                <i className="uil uil-nav__icon">Contact</i>
                            </Link>
                        </li>
                    </ul>

                    <img src="" className="nav__close" alt="close" />

                    <div className="nav__toggle">
                        <img src="#" alt="#" />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
