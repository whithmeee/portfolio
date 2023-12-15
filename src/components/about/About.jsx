import React from 'react';
import './About.css';
import Info from './Info';

import aboutImg from '../../assets/portfolio.jpg';
const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container container grid">
                <img src={aboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />

                    <p className="about__description">
                        Мой опыт включает создание динамичных и отзывчивых веб-приложений с
                        использованием React.js. Я имею понимание основных концепций React, умею
                        эффективно работать с компонентами, состоянием и хуками. Готов развиваться,
                        обучаться и принимать участие в увлекательных проектах. Я ищу возможность
                        применить свои знания и стремление к росту в качестве React Junior Developer
                        в динамичной и инновационной команде
                    </p>

                    {/* <a href="" className="button buttom--flex"></a> */}
                </div>
            </div>
        </section>
    );
};

export default About;
