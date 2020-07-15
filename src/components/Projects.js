import React from 'react';
import '../styles/projects.sass';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
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
                <div id="titles">
                    <h5>My Projects</h5>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                    <div id="imgContainer">
                        <Image
                            img={img2}
                            className="imageDiv img1"
                        />
                        <Image
                            img={img3}
                            className="imageDiv img2"
                        />
                        <Image
                            img={img2}
                            className="imageDiv img3"
                        />
                        <Image
                            img={img2}
                            className="imageDiv img4"
                        />
                        <Image
                            img={img3}
                            className="imageDiv img5"
                        />
                        <Image
                            img={img3}
                            className="imageDiv img6"
                        />
                        <Image
                            img={img3}
                            className="imageDiv img7"
                        />
                        <Image
                            img={img2}
                            className="imageDiv img8"
                        />
                    </div>
                    <button>All Projects</button>
                </div>
            </div>
        );
    }
}

export default Projects;