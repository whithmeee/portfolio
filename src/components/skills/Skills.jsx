import React from 'react';
import './Skills.css';
import Language from './Language';
import Tools from './Tools';
import Design from './Design';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="skills__title">Skills</h2>

            <div className="skills__container container flex">
                <Language />
                <Tools />
                <Design />
            </div>
        </section>
    );
};

export default Skills;
