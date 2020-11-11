import React from 'react';
import '../styles/skills.sass';
import Skill from "./Skill";
import htmlImg from '../img/logos/html.svg';
import cssImg from '../img/logos/css.svg';
import jsImg from '../img/logos/javascript.svg';
import reactImg from '../img/logos/react.svg';
import angularImg from '../img/logos/angular.svg';
import vueImg from '../img/logos/vue.svg';
import sassImg from '../img/logos/sass.svg';
import typescriptImg from '../img/logos/typescript.svg';
// import rRouterImg from '../img/logos/react-router.svg';
// import bootstrapImg from '../img/logos/bootstrap.svg';

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
                    img={vueImg}
                    name="Vue"
                />
                <Skill
                    img={sassImg}
                    name="SASS"
                />
                <Skill
                    img={typescriptImg}
                    name="TYPESCRIPT"
                />
                {/* <Skill
                    img={typescriptImg}
                    name="TYPESCRIPT"
                />
                <Skill
                    img={typescriptImg}
                    name="TYPESCRIPT"
                /> */}
                {/* <Skill
                    img={typescriptImg}
                    name="TYPESCRIPT"
                />
                <Skill
                    img={typescriptImg}
                    name="TYPESCRIPT"
                /> */}

            </div>

        </div >
    );
}

export default Skills;