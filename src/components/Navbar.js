import React from 'react';
import '../styles/navbar.sass';

class Navbar extends React.Component {
    state = {
        navScroll: 'navTop',
        resize: 0
    }

    handleNavbarScroll = () => {
        window.pageYOffset > 0 ? (
            this.setState({
                navScroll: 'navScroll'
            })
        ) : (
                this.setState({
                    navScroll: 'navTop'
                })
            )
    }

    handleResize = () => {
        this.setState({
            resize: window.innerWidth
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleNavbarScroll);
        window.addEventListener('resize', this.handleResize);
    }

    render() {
        // let className = false;
        // this.state.navScroll === true ? className = true : className = false
        return (
            <div id="nav-container" className={this.state.navScroll}>
                <div id="navbar">
                    <div id="brand">PK SITE</div>
                    <div></div>
                    <div id="navlinks">
                        {
                            window.innerWidth > 600 ?
                                <ul>
                                    <li>About Me</li>
                                    <li>Projects</li>
                                    <li>Skills</li>
                                    <li>Contact</li>
                                </ul>
                                :
                                <div className="hamburger">
                                    <span className="hamburgerBox">
                                        <span className="hamburgerInner"></span>
                                    </span>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;