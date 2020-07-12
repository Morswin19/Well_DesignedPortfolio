import React from 'react';
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
                <h5>About me</h5>
                <h1>Deserunt esse veritatis maiores quod quia nemo, molestiae suscipit repudiandae nulla iure</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In laudantium illum rerum et sint modi, perferendis minus tempore autem animi sequi placeat esse veniam. Explicabo ullam aspernatur dolorum, hic voluptas nesciunt praesentium a, iste quasi, omnis earum expedita veniam. Voluptatum numquam officia tenetur, maxime quod illum placeat. Illo, consequatur itaque.</p>
                <button>Contact Me</button>
            </div>
            <div id="amPhotos">
                <div id="imgAmContainer">
                    <div className="imageDiv" id="imgAm1">
                        <img src={img4} alt="" />
                    </div>
                    <div className="imageDiv" id="imgAm2">
                        <img src={img5} alt="" />
                    </div>
                    <div className="imageDiv" id="imgAm3">
                        <img src={img6} alt="" />
                    </div>
                    <div className="imageDiv" id="imgAm4">
                        <img src={img7} alt="" />
                    </div>
                    <div className="imageDiv" id="imgAm5">
                        <img src={img8} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;