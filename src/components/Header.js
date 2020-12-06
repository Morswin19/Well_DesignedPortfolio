import React from 'react';
import Navbar from './Navbar';
import '../styles/header.sass';
import headerImg from '../img/headerImg.svg';

const Header = () => {
  return (
    <div id='header'>
      <Navbar />
      <div id='helloTextContainer'>
        <div id='helloText'>
          <div>Hello, I'm Piotr,</div>
          <div>I want to write code</div>
          <div>for you</div>
          <a href='#skillsTitles'>
            <button>Show me your skills</button>
          </a>
          <img id='headerImg' src={headerImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
