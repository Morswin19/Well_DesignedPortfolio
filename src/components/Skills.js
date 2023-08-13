import React from 'react';
import '../styles/skills.sass';
import Skill from './Skill';
import htmlImg from '../img/logos/html.svg';
import cssImg from '../img/logos/css.svg';
import jsImg from '../img/logos/javascript.svg';
import reactImg from '../img/logos/react.svg';
import gitImg from '../img/logos/git.svg';
import phpImg from '../img/logos/php.svg';
import vueImg from '../img/logos/vue.svg';
import sassImg from '../img/logos/sass.svg';
import wordpressImg from '../img/logos/wordpress.svg';
import typescriptImg from '../img/logos/typescript.svg';
import nuxtImg from '../img/logos/nuxt.svg';
import reactRouterImg from '../img/logos/react-router.svg';
import mongoDBImg from '../img/logos/mongodb.svg';
import tailwindImg from '../img/logos/tailwind.svg';
import nodeImg from '../img/logos/node.svg';
import sqlImg from '../img/logos/sql.svg';

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
        {/* first tier */}
        <Skill img={htmlImg} name='HTML' shift={'left'} time={700} />
        <Skill img={cssImg} name='CSS' shift={'left'} time={500} />
        <Skill img={jsImg} name='JS' shift={'left'} time={300} />
        <Skill img={reactImg} name='REACT' shift={'left'} time={100} />
        <Skill img={vueImg} name='VUE' shift={'right'} time={100} />
        <Skill img={phpImg} name='PHP' shift={'right'} time={300} />
        <Skill img={nodeImg} name='NODE JS' shift={'right'} time={500} />
        <Skill img={wordpressImg} name='WORDPRESS' shift={'right'} time={700} />
        {/* second tier */}
        <Skill img={gitImg} name='GIT' shift={'left'} time={1000} />
        <Skill img={sassImg} name='SASS' shift={'left'} time={800} />
        <Skill img={typescriptImg} name='TYPESCRIPT' shift={'left'} time={600} />
        <Skill img={reactRouterImg} name='REACT ROUTER' shift={'left'} time={400} />
        <Skill img={nuxtImg} name='NUXT' shift={'right'} time={400} />
        <Skill img={sqlImg} name='SQL' shift={'right'} time={600} />
        <Skill img={mongoDBImg} name='MONGO DB' shift={'right'} time={800} />
        <Skill img={tailwindImg} name='TAILWIND' shift={'right'} time={1000} />
      </div>
    </div>
  );
};

export default Skills;
