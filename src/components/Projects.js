import React from 'react';
import '../styles/projects.sass';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';

const Projects = () => {
    return (
        <div id="projects">
            <div id="titles">
                <h5>My Projects</h5>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                <div id="imgContainer">
                    <div className="imageDiv img1">
                        <img src={img2} alt="" />
                    </div>
                    <div className="imageDiv img2">
                        <img src={img3} alt="" />
                    </div>
                    <div className="imageDiv img3">
                        <img src={img2} alt="" />
                    </div>
                    <div className="imageDiv img4">
                        <img src={img2} alt="" />
                    </div>
                    <div className="imageDiv img5">
                        <img src={img3} alt="" />
                    </div>
                    <div className="imageDiv img6">
                        <img src={img3} alt="" />
                    </div>
                    <div className="imageDiv img7">
                        <img src={img3} alt="" />
                    </div>
                    <div className="imageDiv img8">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <button>All Projects</button>
            </div>
        </div>
    );
}

export default Projects;