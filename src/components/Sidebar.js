import React from 'react';
import '../styles/sidebar.sass';
import FontAwesome from 'react-fontawesome';

const Sidebar = (props) => {
    return (
        <div className={props.className}>
            <div className="navIcon">
                <FontAwesome
                    onClick={props.click}
                    className="icon"
                    name="times-circle"
                    size="2x"
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
            </div>
            <ul>
                <li onClick={props.click}><a href="#header">Home</a>
                    <div className="sideLine"></div></li>
                <li onClick={props.click} id="projectsLink">
                    <div className="projectList">
                        <a href="#projects">Projects</a>
                        <FontAwesome
                            // onClick={this.handleClick}
                            className="icon"
                            name="plus"
                            // size="lg"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                    </div>
                    <div className="sideLine"></div></li>
                <li onClick={props.click}><a href="#aboutMe">About Me</a>
                    <div className="sideLine"></div></li>
                <li onClick={props.click}><a href="#skills">Skills</a>
                    <div className="sideLine"></div></li>
                <li onClick={props.click}><a href="#contact">Contact</a>
                    <div className="sideLine"></div></li>
                <li onClick={props.click}>
                    <div id="navSocials">
                        <div className="navIcon">
                            <FontAwesome
                                // onClick={this.handleClick}
                                className="icon"
                                name="facebook"
                                size="3x"
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                        </div>
                        <div className="navIcon">
                            <FontAwesome
                                // onClick={this.handleClick}
                                className="icon"
                                name="linkedin"
                                size="3x"
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                        </div>
                        <div className="navIcon">
                            <FontAwesome
                                // onClick={this.handleClick}
                                className="icon"
                                name="github"
                                size="3x"
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    );
}

export default Sidebar;