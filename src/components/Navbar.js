import React from 'react';
import '../styles/navbar.sass';

class Navbar extends React.Component {
    state = {
        navScroll: 'navTop'
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

    componentDidMount() {
        window.addEventListener('scroll', this.handleNavbarScroll)
    }

    render() {
        // let className = false;
        // this.state.navScroll === true ? className = true : className = false
        return (
            <div id="nav-container" className={this.state.navScroll}>
                <div id="navbar">
                    <div id="brand">PK SITE</div>
                    <div id="navlinks">
                        <ul>
                            <li>About Me</li>
                            <li>Projects</li>
                            <li>Skills</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;