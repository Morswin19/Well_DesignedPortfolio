import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/header.sass';

const Header = () => {
    return (
        <div id="header">
            <Navbar />
        </div>
    );
}

export default Header;