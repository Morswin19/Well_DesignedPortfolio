import React from 'react';
import Navbar from './Navbar';
import '../styles/header.sass';
import headerImg from "../img/headerImg.svg"

const Header = () => {
    return (
        <div id="header">
            <Navbar />
            <div id="helloTextContainer">
                <div id="helloText">Hello, I'm Peter,
                <br />I want to write code <br />
                for you
                <a href="#skills"
                    ><button>Show me your skills</button></a>
                    <img id="headerImg" src={headerImg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Header;