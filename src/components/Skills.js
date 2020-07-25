import React from 'react';
import '../styles/skills.sass';
import Skill from "./Skill"

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
                    img=""
                    name="HTML"
                />
                <Skill
                    img=""
                    name="CSS"
                />
                <Skill
                    img=""
                    name="SASS"
                />
                <Skill
                    img=""
                    name="BOOTSTRAP"
                />
                <Skill
                    img=""
                    name="JS"
                />
                <Skill
                    img=""
                    name="REACT"
                />
                <Skill
                    img=""
                    name="ANGULAR"
                />
                <Skill
                    img=""
                    name="REACT ROUTER"
                />
            </div>
        </div >
    );
}

export default Skills;