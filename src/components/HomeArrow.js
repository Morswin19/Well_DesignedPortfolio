import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-fontawesome';
import '../styles/homeArrow.sass';

const HomeArrow = () => {
  const [visible, setVisible] = useState(false);

  //home arrow click to return to home
  const handleArrowClick = e => {
    e.preventDefault();
    window.scrollTo = (0, 0);
  };

  //function to see the home arrow when scroll is out of header
  const handleHomeArrowVisible = () => {
    if (window.pageYOffset >= 200 && visible === false) {
      setVisible(true);
    } else if (window.pageYOffset < 200 && visible === true) {
      setVisible(false);
    }
    console.log(visible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleHomeArrowVisible);
  }, [visible]);

  return (
    <div>
      {// when onload window width < 900px, i don't want to see home arrow
      visible === true && window.innerWidth >= 900 && (
        <a href='/#' className='homeArrow'>
          <FontAwesome className='icon' name='arrow-up' size='lg' />
        </a>
      )}
    </div>
  );
};

export default HomeArrow;
