import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/whithmeee" className="home__social-icon" target="_blank">
                <FaGithub />
            </a>
            <a href="https://t.me/wiithmeee" className="home__social-icon" target="_blank">
                <FaTelegram />
            </a>
            <a href="#" className="home__social-icon" target="_blank">
                <FaWhatsappSquare />
            </a>
            <a href="#" className="home__social-icon" target="_blank">
                <SiCodewars />
            </a>
        </div>
    );
};

export default Social;
