import React from 'react';
import '../styles/projects.sass';
// import img7 from '../img/7.jpg';
import project1 from '../img/decider.png';
import project2 from '../img/mymusic.png';
import project3 from '../img/festival.png';
import project4 from '../img/altana.png';
import activeImage1 from '../img/12.png';
import activeImage2 from '../img/13.PNG';
import activeImage3 from '../img/14.PNG';
import activeImage4 from '../img/15.PNG';
import Image from './Image';
import ProjectActive from './ProjectActive';

const projectData = [
  [
    'DECIDER',
    ['HTML', 'CSS', 'Vanilla JS', 'Sass', 'Canvas'],
    activeImage1,
    'https://morswin19.github.io/decider/',
    'helps you with making life changing decisions made with:'
  ],
  [
    'MY MUSIC',
    ['HTML', 'CSS', 'React', 'React Router', 'Sass'],
    activeImage2,
    'https://morswin19.github.io/my_albums_wd/',
    'collection of music albums made with:'
  ],
  [
    'PK FESTIVAL',
    ['HTML', 'CSS', 'React', 'React Router', 'Sass', 'Fetch Api'],
    activeImage3,
    'https://morswin19.github.io/event-site-react/',
    'PK Festival single page application made with:'
  ],
  [
    'ALTANA',
    ['HTML', 'CSS', 'Vue', 'Vuex', 'Sass'],
    activeImage4,
    'http://altanakwiatowa.pl/',
    'landing page showing the Flower Arbour'
  ]
];

class Projects extends React.Component {
  state = {
    reset: 0,
    projectNumber: 0,
    projectClassname: false
  };

  //function to show one of projects
  handleClick = e => {
    let imageClass = e.target.parentElement.parentElement.className;
    if (imageClass === 'imageDiv img1') {
      this.setState({
        projectNumber: 0
      });
    } else if (imageClass === 'imageDiv img2') {
      this.setState({
        projectNumber: 1
      });
    } else if (imageClass === 'imageDiv img3') {
      this.setState({
        projectNumber: 2
      });
    } else if (imageClass === 'imageDiv img4') {
      this.setState({
        projectNumber: 3
      });
    }
    this.setState({
      projectClassname: 'projectActive'
    });
  };

  //return from project view to portfolio with escape key press
  handleEscapeKey = e => {
    if (e.keyCode === 27 && this.state.projectClassname !== false) {
      this.setState({
        projectClassname: !this.state.projectClassname
      });
    }
  };

  //return from project view to portfolio with "X" click
  handleEscapeClick = () => {
    this.setState({
      projectClassname: !this.state.projectClassname
    });
  };

  //return from project view to portfolio with backround click
  handleBackgroundClick = e => {
    e.target.id === 'projectContainer' && this.handleEscapeClick();
  };

  //press key event listener
  componentDidMount() {
    document.addEventListener('keydown', this.handleEscapeKey);
  }

  render() {
    return (
      <div id='projects'>
        <h5>Projects</h5>
        <h1>See my skills in use</h1>
        <p>
          If you want to find out more about used technology just hover over the
          picture and click the plus icon
        </p>
        <div id='imgContainer'>
          <Image
            img={project1}
            className='imageDiv img1'
            section='project'
            mainName='Decider'
            handleClick={this.handleClick}
            description1='decision making online roulette'
            description2='based on Vanilla JS, HTML Canvas click for more info'
          />
          <Image
            img={project2}
            className='imageDiv img2'
            section='project'
            mainName='My Music'
            handleClick={this.handleClick}
            description1='collection of music albums'
            description2='based on React, click for more info'
          />
          <Image
            img={project3}
            className='imageDiv img3'
            section='project'
            mainName='PK Festival'
            handleClick={this.handleClick}
            description1='site of imaginery festival'
            description2='based on React, React Router click for more info'
          />
          <Image
            img={project4}
            className='imageDiv img4'
            section='project'
            mainName='Altana'
            handleClick={this.handleClick}
            description1='flower arbour product site'
            description2='based on Vue and Vuex click for more info'
          />
        </div>
        <a
          href='https://github.com/Morswin19'
          rel='noopener noreferrer'
          target='_blank'
        >
          <button>Show me more on GitHub</button>
        </a>
        <div id='nextSkills'>
          <h1>Incoming skills:</h1>
          <ul id='nextSkillsList'>
            <li>
              <span>Symfony</span>
              <div>1</div>
            </li>
            <li>
              <span>Graph QL</span>
              <div>2</div>
            </li>
            <li>
              <span>
                Docker
              </span>
              <div>3</div>
            </li>
          </ul>
        </div>
        <ProjectActive
          title={projectData[this.state.projectNumber][0]}
          list={projectData[this.state.projectNumber][1]}
          img={projectData[this.state.projectNumber][2]}
          link={projectData[this.state.projectNumber][3]}
          description={projectData[this.state.projectNumber][4]}
          active={this.state.projectClassname}
          handleEscapeClick={this.handleEscapeClick}
          handleBackgroundClick={this.handleBackgroundClick}
        />
      </div>
    );
  }
}

export default Projects;
