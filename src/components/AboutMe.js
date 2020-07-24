import React from 'react';
// import Image from '../components/Image'
import '../styles/aboutme.sass';

const AboutMe = () => {
    return (
        <div id="aboutMe">
            <div id="amInfo">
                <h5>About</h5>
                <h1>Doing more than just coding</h1>
                <p>I do not know, how to show you the benefits of employing me without this short introduction.
                I want to write code for you, but this is not the only good thing I can give.
                    This is what you need to know about me:</p>
                <ul id="aboutList">
                    <li><span></span><p>you can depend on me, because I am patient and precise,
                    I like people :)</p></li>
                    <li><span></span>you will NEVER hear "it's impossible" from me, because
                    I am determined to find solutions,</li>
                    <li><span></span>you will be surprised by my devotion, because I want
                    to learn as much and as fast as possible.</li>
                </ul>
                {/* <button>Contact Me</button> */}
            </div>
            {/* <div id="amPhotos">
            </div> */}
            <div id="experience">
                <h1>
                    Curious about <br />
                    my <span>previous experience?</span>
                </h1>
                <ul id="experienceList">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div >
    );
}

export default AboutMe;