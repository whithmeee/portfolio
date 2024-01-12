import React from 'react';
import { Link } from 'react-scroll';
import { LINKS } from '../constants';
import burgerMenu from '../../assets/hamburger.svg';
import './Header.css';

const Header = () => {
    const [burgerOpen, setBurgerOpen] = React.useState(false);

    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <a href="" className="nav__logo">
                        Shpinev.Dev
                    </a>

                    <div className="nav__menu">
                        <ul className="nav__list grid">
                            {LINKS.map((link) => (
                                <li key={link.label} className="nav__item">
                                    <Link
                                        className="nav__link"
                                        to={link.href}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* {burgerMenu && (
                        <img
                            className="burger__menu"
                            style={{ cursor: 'pointer' }}
                            width={24}
                            height={24}
                            src={burgerMenu}
                            alt="#"
                        />
                    )} */}

                    {/* <div className="nav__toggle">
                        <div className="burger__block">
                            <ul>
                                {LINKS.map((item, i) => (
                                    <li>{<Link to={item.href}>{item.label}</Link>}</li>
                                ))}
                            </ul>
                        </div>
                    </div> */}
                </nav>
            </header>
        </>
    );
};

export default Header;
