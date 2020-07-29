import React from 'react';
import '../styles/skills.sass';
import Skill from "./Skill";
import htmlImg from '../img/logos/html.svg';
import cssImg from '../img/logos/css.svg';
import sassImg from '../img/logos/sass.svg';
import jsImg from '../img/logos/javascript.svg';
import reactImg from '../img/logos/react.svg';
import rRouterImg from '../img/logos/react-router.svg';
import angularImg from '../img/logos/angular.svg';
import bootstrapImg from '../img/logos/bootstrap.svg';

const Skills = () => {
    return (
        <div id="skills">
            <div id="skillsTitles">
                <h5>My Skills</h5>
                <h1>Here you can check, if I have <br />
                what you need:</h1>

            </div>
            <div id="skillsContainer">
                <Skill
                    img={htmlImg}
                    name="HTML"
                />
                <Skill
                    img={cssImg}
                    name="CSS"
                />
                <Skill
                    img={sassImg}
                    name="SASS"
                />
                <Skill
                    img={bootstrapImg}
                    name="BOOTSTRAP"
                />
                <Skill
                    img={jsImg}
                    name="JS"
                />
                <Skill
                    img={reactImg}
                    name="REACT"
                />
                <Skill
                    img={angularImg}
                    name="ANGULAR"
                />
                <Skill
                    img={rRouterImg}
                    name="REACT ROUTER"
                />
            </div>

        </div >
    );
}

export default Skills;