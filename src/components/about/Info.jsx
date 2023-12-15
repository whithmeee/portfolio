import React from 'react';
import { GoProjectRoadmap } from 'react-icons/go';
import { SiFramework } from 'react-icons/si';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="about__icon--experience">
                    <SiFramework />
                </i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">1 Years Working</span>
            </div>

            <div className="about__box">
                <i className="about__icon--completed">
                    <GoProjectRoadmap />
                </i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">10 + Projects</span>
            </div>
        </div>
    );
};

export default Info;
