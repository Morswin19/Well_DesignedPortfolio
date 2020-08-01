import React from 'react';
import '../styles/sidebar.sass';
import FontAwesome from 'react-fontawesome';

class Sidebar extends React.Component {
    state = {
        projectActive: false
    }

    handleProjectsClick = () => {
        this.setState({
            projectActive: !this.state.projectActive
        })
    }

    render() {
        return (
            <div className={this.props.className}>
                <div className="navIcon">
                    <FontAwesome
                        onClick={this.props.click}
                        className="icon"
                        name="times-circle"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                </div>
                <ul>
                    <li ><a href="#header"><span onClick={this.props.click}>Home</span></a>
                        <div className="sideLine"></div></li>
                    <li ><a href="#aboutMe"><span onClick={this.props.click}>About Me</span></a>
                        <div className="sideLine"></div></li>
                    <li ><a href="#skillsTitles"><span onClick={this.props.click}>Skills</span></a>
                        <div className="sideLine"></div></li>
                    <li id="projectsLink">
                        {/* <div className="#projectListContainer"> */}
                        <a href="#projects"><span onClick={this.props.click}>Projects</span></a>
                        {!this.state.projectActive
                            ?
                            (
                                <FontAwesome
                                    onClick={this.handleProjectsClick}
                                    className="icon"
                                    name="plus"
                                    // size="lg"
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                            ) : (
                                <>
                                    <FontAwesome
                                        onClick={this.handleProjectsClick}
                                        className="icon"
                                        name="minus"
                                        // size="lg"
                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                    />
                                    <ul id="projectSidebarList">
                                        <li>Project1
                                                <div className="sideLine2"></div>
                                        </li>
                                        <li>Project2
                                                <div className="sideLine2"></div>
                                        </li>
                                        <li>Project3
                                                <div className="sideLine2"></div>
                                        </li>
                                        <li>Project4
                                                <div className="sideLine2"></div>
                                        </li>
                                    </ul>
                                </>
                            )
                        }
                        {/* </div> */}
                        {
                            !this.state.projectActive && <div className="sideLine"></div>
                        }
                    </li>
                    <li><a href="#footer"><span onClick={this.props.click}>Contact</span></a>
                        <div className="sideLine"></div></li>
                    <li onClick={this.props.click}>
                        <div id="navSocials">
                            <div className="navIcon">
                                <a href="https://www.facebook.com/piotr.kalman" rel="noopener noreferrer" target="_blank">
                                    <FontAwesome
                                        // onClick={this.handleClick}
                                        className="icon"
                                        name="facebook"
                                        size="3x"
                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                    />
                                </a>
                            </div>
                            <div className="navIcon">
                                <a href="https://www.linkedin.com/in/piotr-kalman/" rel="noopener noreferrer" target="_blank"
                                >
                                    <FontAwesome
                                        // onClick={this.handleClick}
                                        className="icon"
                                        name="linkedin"
                                        size="3x"
                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                    />
                                </a>
                            </div>
                            <div className="navIcon">
                                <a href="https://github.com/Morswin19" rel="noopener noreferrer" target="_blank"
                                >
                                    <FontAwesome
                                        // onClick={this.handleClick}
                                        className="icon"
                                        name="github"
                                        size="3x"
                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                    />
                                </a>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;