import React, { useState, useEffect } from 'react';
import '../styles/skill.sass';

const Skill = props => {
  const [actualClass, setActualClass] = useState(`skill ${props.shift}`);

  const removeSkillShiftClass = () => {
    if (window.scrollY >= 1600) {
      setTimeout(() => setActualClass('skill'), props.time);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => removeSkillShiftClass());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={actualClass}>
      <div className='skillImg'>
        <img src={props.img} alt='' />
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default Skill;
