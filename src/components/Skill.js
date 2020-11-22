import React, { useState, useEffect } from 'react';
import '../styles/skill.sass';

const Skill = props => {
  const [actualClass, setActualClass] = useState(`skill ${props.shift}`);
  //1700 scrollY

  const removeSkillShiftClass = () => {
    if (window.scrollY >= 1700) {
      setTimeout(() => setActualClass('skill'), props.time);
      console.log(actualClass);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', () => removeSkillShiftClass());
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
