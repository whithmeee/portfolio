import React from "react";
import "./Works.css";
import ProjectTwo from "./ProjectTwo";
import ProjectOne from "./ProjectOne";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";

const Works = () => {
    return (
        <section className="works section" id="project">
            <h2 className="works__title">Projects</h2>

            <div className="projects-grid">
                <ProjectThree />
                <ProjectFour />
                <ProjectOne />
                <ProjectTwo />
            </div>
        </section>
    );
};

export default Works;
