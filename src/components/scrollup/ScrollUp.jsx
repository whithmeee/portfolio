import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import './ScrollUp.css';

const ScrollUp = () => {
    window.addEventListener('scroll', function () {
        const scollUp = document.querySelector('.scrollup');

        if (this.scrollY >= 560) scollUp.classList.add('show-scroll');
        else scollUp.classList.remove('show-scroll');
    });
    return (
        <Link
            className="scrollup"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <i className="scrollup__icon">
                <FaArrowUp />
            </i>
        </Link>
    );
};

export default ScrollUp;
