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
                <li>Home</li>
                <li id="projectList">
                    <span>Projects</span>
                    <FontAwesome
                        // onClick={this.handleClick}
                        className="icon"
                        name="plus"
                        // size="lg"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                </li>
                <li>About Me</li>
                <li>Skills</li>
                <li>
                    <div id="navSocials">
                        <div className="navIcon">
                            <FontAwesome
                                // onClick={this.handleClick}
                                className="icon"
                                name="facebook"
                                size="2x"
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                        </div>
                        <div className="navIcon">
                            <FontAwesome
                                // onClick={this.handleClick}
                                className="icon"
                                name="linkedin"
                                size="2x"
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                        </div>
                        <div className="navIcon">
                            <FontAwesome
                                // onClick={this.handleClick}
                                className="icon"
                                name="github"
                                size="2x"
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