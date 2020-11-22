import React from 'react';
import '../styles/aboutme.sass';

import ExperienceImg from './ExperienceImg';
// import experienceImg from '../img/experienceImg.svg';
// import experienceImg2 from '../img/experienceImg2.svg';

class AboutMe extends React.Component {
  state = {
    scroll: 1000
  };

  //function to change colour of lightbulb image
  handleScroll = () => {
    this.setState({
      scroll: window.scrollY
    });
  };

  //listener of scroll
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    return (
      <div id='aboutMe'>
        <div id='amInfo'>
          <h5>About</h5>
          <h1>Doing more than just coding</h1>
          <p>
            I do not know, how to show you the benefits of employing me without
            this short introduction. I want to write code for you, but this is
            not the only good thing I can give. This is what you need to know
            about me:
          </p>
          <ul id='aboutList'>
            <li>
              <span></span>
              <p>
                you can depend on me, because I am patient and precise, I like
                people :)
              </p>
            </li>
            <li>
              <span></span>
              <p>
                you will NEVER hear "it's impossible" from me, because I am
                determined to find solutions,
              </p>
            </li>
            <li>
              <span></span>
              <p>
                you will be surprised by my devotion, because I want to learn as
                much and as fast as possible.
              </p>
            </li>
          </ul>
        </div>
        <div id='experienceContainer'>
          <div id='experience'>
            <h1>
              Curious about <br />
              <span id='my'>my </span>
              <span>previous experience?</span>
            </h1>
            <ul id='experienceList'>
              <li>
                <span></span>
                <p>
                  almost 10 years in sale taught me how to talk to clients, make
                  offers, negotiate deadlines, etc.
                </p>
              </li>
              <li>
                <span></span>
                <p>
                  5 years in advertising agency taught me how to colaborate with
                  graphic designers and read creative brief,
                </p>
              </li>
              <li>
                <span></span>
                <p>
                  writing this website taught me how to work fast and focus on
                  the results.
                </p>
              </li>
            </ul>
            <a
              href='https://www.linkedin.com/in/piotr-kalman/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <button>Show me your LinkedIn profile</button>
            </a>
            <ExperienceImg />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
