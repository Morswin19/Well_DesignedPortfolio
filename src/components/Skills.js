import React from 'react';
import '../styles/skills.sass';
import img9 from '../img/9.jpg';
import img10 from '../img/10.jpg';
import Image from '../components/Image';

const Skills = () => {
    return (
        <div id="skills">
            <div id="skillsTitles">
                <h5>My Skills</h5>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, accusamus facere laudantium repellendus quaerat vero in dolorum ut commodi doloremque!</p>
                <button>Skills</button>

            </div>
            <div id="imgSkillsContainer">
                <div className="imageDiv imgSkills1">
                    <div>
                        <img src={img9} alt="" />
                    </div>
                </div>
                <div className="imageDiv imgSkills2">
                    <div>
                        <img src={img10} alt="" />
                    </div>
                </div>
                <div className="imageDiv imgSkills3">
                    <img src={img9} alt="" />
                </div>
                <div className="imageDiv imgSkills4">
                    <img src={img10} alt="" />
                </div>
                <div className="imageDiv imgSkills5">
                    <img src={img9} alt="" />
                </div>
                <div className="imageDiv imgSkills6">
                    <img src={img10} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Skills;