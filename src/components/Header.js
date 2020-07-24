import React from 'react';
import Navbar from './Navbar';
// import Sidebar from './Sidebar';
import '../styles/header.sass';

const Header = () => {
    return (
        <div id="header">
            <Navbar />
            <div id="helloText">Hello, I'm Peter,
            <br />I want to write code <br />
            for you
            <button>Show me your skills</button>
            </div>
        </div>
    );
}

export default Header;