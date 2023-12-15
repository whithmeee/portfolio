import React from 'react';
import Cart from '../../assets/car-rental-full.c58b37da333d73238fdd.webp';
import './Works.css';

const Works = () => {
    return (
        <section className="works section" id="project">
            <h2 className="works__title">Projects</h2>

            <div className="projects-grid">
                <div className="pro pro__1 undefined">
                    <div className="pro__img">
                        <a href="#">
                            <img src={Cart} alt="#" />
                        </a>
                    </div>
                    <div className="pro__text">
                        <h3>Car Rental</h3>
                        <p>---</p>
                        <div className="stack">
                            <p>React</p>
                            <p>SCSS</p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
