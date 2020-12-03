import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../styles/header.sass';
import headerImg from '../img/headerImg.svg';
import { runInContext } from 'vm';

const Header = () => {
  const [buttonClass, setButtonClass] = useState('');
  const [buttonText, setButtonText] = useState('Show me your skills');
  const [textClass, setTextClass] = useState('runText');
  // const [buttonText, setButtonText] = useState('Show me your skills');

  // const checkScrollY = () => {
  //   if (!buttonClass && window.scrollY > 200) {
  //     setButtonClass('btn');
  //     setButtonText('@');
  //   } else if (buttonClass && window.scrollY <= 200) {
  //     setButtonClass('');
  //     setButtonText('Show me your skills');
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('scroll', checkScrollY);
  // }, [buttonClass]);

  const runText = () => {
    setTextClass('');
  };

  useEffect(() => {
    runText();
  }, []);

  return (
    <div id='header'>
      <Navbar />
      <div id='helloTextContainer'>
        <div id='helloText'>
          <div className={`hello ${textClass}`}>
            Hello, I'm Piotr,
            <br />I want to write code <br />
            for you
          </div>
          <a href='#skillsTitles'>
            <button className={`headerBtn` + ' ' + buttonClass}>
              {buttonText}
            </button>
          </a>
          <img id='headerImg' src={headerImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
