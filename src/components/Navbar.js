import React from 'react';
import '../styles/navbar.sass';
import Sidebar from './Sidebar';
// import Background from './Background';

class Navbar extends React.Component {
    state = {
        navScroll: 'navTop',
        resize: 0,
        sidebarClass: 'sidebar',
        backgroundClass: 'backgroundDisabled'
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

    handleEscapeKey = (e) => {
        (e.keyCode === 27 && this.state.sidebarClass === 'sidebar sidebarActive')
            &&
            this.setState({
                sidebarClass: 'sidebar',
                backgroundClass: 'backgroundDisabled'
            })
    }

    handleEscapeClick = () => {
        this.setState({
            sidebarClass: 'sidebar',
            backgroundClass: 'backgroundDisabled'
        })
    }

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
        // console.log(this.state.sidebarClass)
    }

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
        // let className = false;
        // this.state.navScroll === true ? className = true : className = false
        return (
            <div id="nav-container" className={this.state.navScroll}>
                <div id="navbar">
                    <div id="brand"><span>P.KALMAN</span> // PORTFOLIO</div>
                    {/* <div></div> */}
                    <div id="navlinks">
                        {
                            window.innerWidth > 1000 ?
                                <ul>
                                    <li className='navItem'>
                                        <div className="navLink">
                                            <a href="#header">
                                                Home
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
                                        {/* <Background
                                        class={this.state.backgroundClass}
                                        click={this.handleEscapeClick}
                                    /> */}
                                        <div
                                            id="sidebarBackground"
                                            class={this.state.backgroundClass}
                                            onClick={this.handleEscapeClick}>
                                        </div>
                                    </div>
                                </>
                            // <Sidebar />
                            // </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;