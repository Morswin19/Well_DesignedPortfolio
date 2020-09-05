import React from 'react';
import '../styles/projects.sass';
// import img7 from '../img/7.jpg';
import project1 from '../img/12.png';
import project2 from '../img/13.PNG';
import project3 from '../img/14.PNG';
import Image from './Image';
import ProjectActive from './ProjectActive';

const projectData = [
    // ['EVENT SITE',
    //     ['HTML', 'CSS', 'Vanilla JS', 'Bootstrap', 'Sass', 'Canvas'],
    //     img2,
    //     'https://morswin19.github.io/event-site-react/#/',
    //     'helps you with making life changing decisions made with:'
    // ],
    ['DECIDER',
        ['HTML', 'CSS', 'Vanilla JS', 'Bootstrap', 'Sass', 'Canvas'],
        project1,
        'https://morswin19.github.io/decider/',
        'helps you with making life changing decisions made with:'
    ]
    , ['MY MUSIC',
        ['HTML', 'CSS', 'React', 'React Router', 'Sass'],
        project2,
        'https://morswin19.github.io/my_albums_wd/',
        'collection of music albums made with:'
    ],
    ['Event Site',
        ['HTML', 'CSS', 'Vanilla JS', 'Bootstrap', 'Sass', 'Canvas'],
        project3,
        'https://morswin19.github.io/my-albums-react-app/#/my-albums-react-app/',
        'helps you with making life changing decisions made with:']
]

class Projects extends React.Component {
    state = {
        reset: 0,
        projectNumber: 0,
        projectClassname: false
    }

    handleClick = (e) => {

        let imageClass = (e.target.parentElement.parentElement.className)
        if (imageClass === 'imageDiv img1') {
            this.setState({
                projectNumber: 0
            })
        } else if (imageClass === 'imageDiv img2') {
            this.setState({
                projectNumber: 1
            })
        } else if (imageClass === 'imageDiv img3') {
            this.setState({
                projectNumber: 2
            })
        } else if (imageClass === 'imageDiv img4') {
            this.setState({
                projectNumber: 3
            })
        }
        this.setState({
            projectClassname: 'projectActive'
        })
    }

    handleEscapeKey = (e) => {
        if (e.keyCode === 27 && this.state.projectClassname !== false) {
            this.setState({
                projectClassname: !this.state.projectClassname
            })
        }

    }

    handleEscapeClick = () => {
        // console.log(e.target)
        this.setState({
            projectClassname: !this.state.projectClassname
        })
    }

    handleBackgroundClick = (e) => {
        e.target.id === 'projectContainer' && this.handleEscapeClick()
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleEscapeKey)
    }

    render() {
        return (
            <div id="projects">
                <h5>Projects</h5>
                <h1>See my skills in use</h1>
                <p>If you want to find out more about used technology
                    just click on an image</p>
                <div id="imgContainer">

                    <Image
                        img={project1}
                        className="imageDiv img1"
                        section="project"
                        mainName="Decider"
                        handleClick={this.handleClick}
                        description1="decision making online roulette"
                        description2="based on Vanilla JS, HTML Canvas click for more info"
                    />
                    <Image
                        img={project2}
                        className="imageDiv img2"
                        section="project"
                        mainName="My Music"
                        handleClick={this.handleClick}
                        description1="collection of music albums"
                        description2="based on React, click for more info"
                    />
                    <Image
                        img={project3}
                        className="imageDiv img3"
                        section="project"
                        mainName="Event-site"
                        handleClick={this.handleClick}
                        description1="event site"
                        description2="based on React and React-Router, click form more info"
                    />
                    {/* <Image
                        img={img11}
                        className="imageDiv img4"
                        section="project"
                        mainName="Decider"
                        handleClick={this.handleClick}
                    /> */}
                </div>
                <button>Show me more on GitHub</button>
                <div id="nextSkills">
                    <h1>Incoming skills:</h1>
                    <ul id="nextSkillsList">
                        <li><span>Vue</span><div>1</div></li>
                        <li><span>UX</span><div>2</div></li>
                        <li><span>unit<br />tests</span><div>3</div></li>
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