import React from 'react';
import '../styles/projects.sass';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import FontAwesome from 'react-fontawesome';

class Projects extends React.Component {
    state = {
        reset: 0
    }



    // handleOnHover = (e) => {
    //     if (e.target.className = 'imageDiv img1') {
    //         const target = (e.target.parentElement.children[1]);
    //         target.style.opacity = '1'
    //     }
    //     // target.style.display = 'flex'
    // }

    // handleOutHover = (e) => {
    //     const target = (e.target.parentElement.children[1]);
    //     // target.style.display = 'flex'
    //     target.style.opacity = '0'
    // }

    render() {
        return (
            <div id="projects">
                <div id="titles">
                    <h5>My Projects</h5>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                    <div id="imgContainer">
                        <div
                            onMouseOver={this.handleOnHover}
                            onMouseOut={this.handleOutHover}
                            className="imageDiv img1">
                            <img src={img2} alt="" />
                            <div>
                                <FontAwesome
                                    className="icon"
                                    name="facebook-square"
                                    size="3x"
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>
                        </div>
                        <div className="imageDiv img2">
                            <img src={img3} alt="" />
                            <div>
                                <FontAwesome
                                    className="icon"
                                    name="facebook-square"
                                    size="3x"
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>
                        </div>
                        <div className="imageDiv img3">
                            <img src={img2} alt="" />
                            <div>
                                <FontAwesome
                                    className="icon"
                                    name="facebook-square"
                                    size="3x"
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>
                        </div>
                        <div className="imageDiv img4">
                            <img src={img2} alt="" />
                            <div>
                                <FontAwesome
                                    className="icon"
                                    name="facebook-square"
                                    size="3x"
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>
                        </div>
                        <div className="imageDiv img5">
                            <img src={img3} alt="" />
                            <div>
                                <FontAwesome
                                    className="icon"
                                    name="facebook-square"
                                    size="3x"
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>
                        </div>
                        <div className="imageDiv img6">
                            <img src={img3} alt="" />
                            <div>
                                <FontAwesome
                                    className="icon"
                                    name="facebook-square"
                                    size="3x"
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>
                        </div>
                        <div className="imageDiv img7">
                            <img src={img3} alt="" />
                            <div>
                                <FontAwesome
                                    className="icon"
                                    name="facebook-square"
                                    size="3x"
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>
                        </div>
                        <div className="imageDiv img8">
                            <img src={img2} alt="" />
                            <div>
                                <FontAwesome
                                    className="icon"
                                    name="facebook-square"
                                    size="3x"
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>
                        </div>
                    </div>
                    <button>All Projects</button>
                </div>
            </div>
        );
    }
}

export default Projects;