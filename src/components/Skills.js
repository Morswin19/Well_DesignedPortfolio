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
                <div id="skillsButton">
                    <button>Skills</button>
                </div>

            </div>
            <div id="imgSkillsContainer">
                {/* <div className="imageDiv imgSkills1">
                    <div>
                        <img src={img9} alt="" />
                    </div>
                </div> */}
                <Image
                    img={img9}
                    className="imageDiv imgSkills1"
                    section="skills"
                />
                <Image
                    className="imageDiv imgSkills2"
                    img={img10}
                    section="skills"
                />
                <Image
                    className="imageDiv imgSkills3"
                    img={img9}
                    section="skills"
                />
                <Image
                    className="imageDiv imgSkills4"
                    img={img10}
                    section="skills"
                />
                <Image
                    className="imageDiv imgSkills5"
                    img={img9}
                    section="skills"
                />
                <Image
                    className="imageDiv imgSkills6"
                    img={img10}
                    section="skills"
                />
            </div>
        </div >
    );
}

export default Skills;