import React from 'react';
import './Works.css';
import ProjectTwo from './ProjectTwo';
import ProjectOne from './ProjectOne';

const Works = () => {
    return (
        <section className="works section" id="project">
            <h2 className="works__title">Projects</h2>

            <div className="projects-grid">
                <ProjectOne />
                <ProjectTwo />
            </div>
        </section>
    );
};

export default Works;
