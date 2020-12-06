import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-fontawesome';
import '../styles/homeArrow.sass';

const HomeArrow = () => {
  const [visible, setVisible] = useState(false);

  //function to see the home arrow when scroll is out of header
  const handleHomeArrowVisible = () => {
    if (window.pageYOffset >= 200 && visible === false) {
      setVisible(true);
    } else if (window.pageYOffset < 200 && visible === true) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleHomeArrowVisible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
