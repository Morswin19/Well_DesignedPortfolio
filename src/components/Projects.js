import React from 'react';
import '../styles/projects.sass';
import img7 from '../img/7.jpg';
import img2 from '../img/5.jpg';
import img10 from '../img/10.jpg';
import img11 from '../img/11.jpg';
import Image from './Image'

class Projects extends React.Component {
    state = {
        reset: 0
    }

    handleClick = (e) => {
        console.log(e.target)
    }

    render() {
        return (
            <div id="projects">
                <h5>Projects</h5>
                <h1>See my skills in use</h1>
                <p>If you want to find out more about used technology
                    just click on an image</p>
                <div id="imgContainer">
                    <Image
                        img={img2}
                        className="imageDiv img1"
                        section="project"
                    />
                    <Image
                        img={img7}
                        className="imageDiv img2"
                        section="project"
                    />
                    <Image
                        img={img10}
                        className="imageDiv img3"
                        section="project"
                    />
                    <Image
                        img={img11}
                        className="imageDiv img4"
                        section="project"
                    />
                </div>
                <button>Show me more on GitHub</button>
                <div id="nextSkills">
                    <h1>Incoming skills:</h1>
                    <ul id="nextSkillsList">
                        <li><span>Vue</span><div>1</div></li>
                        <li><span>UX</span><div>2</div></li>
                        <li><span>unit<br />tests</span><div>3</div></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Projects;