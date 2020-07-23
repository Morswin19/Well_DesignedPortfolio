import React from 'react';
import Image from '../components/Image'
import '../styles/aboutme.sass';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
import img7 from '../img/7.jpg';
import img8 from '../img/8.jpg';

const AboutMe = () => {
    return (
        <div id="aboutMe">
            <div id="amInfo">
                <h5>About</h5>
                <h1>Doing more than just coding</h1>
                <p>I do not know, how to show you the benefits of employing me without this short introduction.
                I want to write code for you, but this is not the only good thing I can give.
                    This is what you need to know about me:</p>
                <button>Contact Me</button>
            </div>
            <div id="amPhotos">
                <div id="imgAmContainer">
                    {/* <Image
                        className="imageDiv imgAm1"
                        img={img4}
                        section="aboutMe"
                    />
                    <Image
                        className="imageDiv imgAm2"
                        img={img5}
                        section="aboutMe"
                    />
                    <Image
                        className="imageDiv imgAm3"
                        img={img6}
                        section="aboutMe"
                    />
                    <Image
                        className="imageDiv imgAm4"
                        img={img7}
                        section="aboutMe"
                    />
                    <Image
                        className="imageDiv imgAm5"
                        img={img8}
                        section="aboutMe"
                    /> */}
                </div>
            </div>
        </div >
    );
}

export default AboutMe;