import React from 'react';
import '../styles/navbar.sass';
import Sidebar from './Sidebar';

class Navbar extends React.Component {
    state = {
        navScroll: 'navTop',
        resize: 0,
        sidebarClass: 'sidebar',
        backgroundClass: 'backgroundDisabled'
    }

    //function to make nav background when scroll is > 0
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

    //func to have classic nav or hamburger menu
    handleResize = () => {
        this.setState({
            resize: window.innerWidth
        })
    }

    //escape from sidebar with the escape key
    handleEscapeKey = (e) => {
        (e.keyCode === 27 && this.state.sidebarClass === 'sidebar sidebarActive')
            &&
            this.setState({
                sidebarClass: 'sidebar',
                backgroundClass: 'backgroundDisabled'
            })
    }

    //escape from sidebar when click on "X" or click outside the sidebar
    handleEscapeClick = () => {
        this.setState({
            sidebarClass: 'sidebar',
            backgroundClass: 'backgroundDisabled'
        })
    }

    //click on hamburger menu function
    handleSidebarClick = () => {
        if (this.state.sidebarClass === 'sidebar') {
            this.setState({
                sidebarClass: 'sidebar sidebarActive',
                backgroundClass: 'backgroudActive'
            })
            setTimeout(() => {
                this.setState({
                    backgroundClass: 'backgroundActiveBlack'
                })
            }, 200)
        }
    }

    //event listeners
    componentDidMount() {
        window.addEventListener('scroll', this.handleNavbarScroll);
        window.addEventListener('resize', this.handleResize);
        document.addEventListener('keydown', this.handleEscapeKey)
        if (this.state.backgroundClass === 'backgroundActive') {
            this.setState({
                backgroundClass: 'backgroundActiveBlack'
            })
        }
    }

    render() {
        return (
            <div id="nav-container" className={this.state.navScroll}>
                <div id="navbar">
                    <div id="brand"><span>P.KALMAN</span> {'//'} PORTFOLIO</div>
                    <div id="navlinks">
                        {
                            window.innerWidth > 1100 ?
                                <ul>
                                    <li className='navItem'>
                                        <div className="navLink">
                                            <a href="#header">
                                                Hello
                                            </a>
                                            <div className="navLine"></div>
                                        </div>
                                    </li>

                                    <li className='navItem'>
                                        <div className="navLink">
                                            <a href="#aboutMe">
                                                About Me
                                            </a>
                                            <div className="navLine"></div>
                                        </div>
                                    </li>
                                    <li className='navItem'>
                                        <div className="navLink">
                                            <a href="#skillsTitles">
                                                Skills
                                            </a>
                                            <div className="navLine"></div>
                                        </div>
                                    </li>
                                    <li className='navItem'>
                                        <div className="navLink">
                                            <a href="#projects">
                                                Projects
                                            </a>
                                            <div className="navLine"></div>
                                        </div>
                                    </li>
                                    <li className='navItem'>
                                        <div className="navLink">
                                            <a href="#footer">
                                                Contact
                                            </a>
                                            <div className="navLine"></div>
                                        </div>
                                    </li>
                                </ul>
                                :
                                // <div>
                                <>
                                    <div></div>
                                    <div onClick={this.handleSidebarClick} className="hamburger">
                                        <span className="hamburgerBox">
                                            <span className="hamburgerInner"></span>
                                        </span>
                                        <Sidebar
                                            className={this.state.sidebarClass}
                                            click={this.handleEscapeClick}
                                        />
                                        <div
                                            id="sidebarBackground"
                                            className={this.state.backgroundClass}
                                            onClick={this.handleEscapeClick}>
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;