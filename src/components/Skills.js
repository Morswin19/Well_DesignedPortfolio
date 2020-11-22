import React from 'react';
import '../styles/skills.sass';
import Skill from './Skill';
import htmlImg from '../img/logos/html.svg';
import cssImg from '../img/logos/css.svg';
import jsImg from '../img/logos/javascript.svg';
import reactImg from '../img/logos/react.svg';
import angularImg from '../img/logos/angular.svg';
import vueImg from '../img/logos/vue.svg';
import sassImg from '../img/logos/sass.svg';
import typescriptImg from '../img/logos/typescript.svg';
// import rRouterImg from '../img/logos/react-router.svg';
// import bootstrapImg from '../img/logos/bootstrap.svg';

const Skills = () => {
  return (
    <div id='skills'>
      <div id='skillsTitles'>
        <h5>My Skills</h5>
        <h1>
          Here you can check, if I have <br />
          what you need:
        </h1>
      </div>
      <div id='skillsContainer'>
        <Skill img={htmlImg} name='HTML' shift={'left'} time={700} />
        <Skill img={cssImg} name='CSS' shift={'left'} time={500} />
        <Skill img={jsImg} name='JS' shift={'left'} time={300} />
        <Skill img={reactImg} name='REACT' shift={'left'} time={100} />
        <Skill img={angularImg} name='ANGULAR' shift={'right'} time={100} />
        <Skill img={vueImg} name='VUE' shift={'right'} time={300} />
        <Skill img={sassImg} name='SASS' shift={'right'} time={500} />
        <Skill
          img={typescriptImg}
          name='TYPESCRIPT'
          shift={'right'}
          time={700}
        />
      </div>
    </div>
  );
};

export default Skills;
