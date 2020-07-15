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
                <h5>About me</h5>
                <h1>Deserunt esse veritatis maiores quod quia nemo, molestiae suscipit repudiandae nulla iure</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In laudantium illum rerum et sint modi, perferendis minus tempore autem animi sequi placeat esse veniam. Explicabo ullam aspernatur dolorum, hic voluptas nesciunt praesentium a, iste quasi, omnis earum expedita veniam. Voluptatum numquam officia tenetur, maxime quod illum placeat. Illo, consequatur itaque.</p>
                <button>Contact Me</button>
            </div>
            <div id="amPhotos">
                <div id="imgAmContainer">
                    <Image
                        className="imageDiv imgAm1"
                        img={img4}
                    />
                    {/* <div className="imageDiv imgAm1">
                        <img src={img4} alt="" />
                    </div> */}
                    <Image
                        className="imageDiv imgAm2"
                        img={img5}
                    />
                    <Image
                        className="imageDiv imgAm3"
                        img={img6}
                    />
                    <Image
                        className="imageDiv imgAm4"
                        img={img7}
                    />
                    <Image
                        className="imageDiv imgAm5"
                        img={img8}
                    />
                </div>
            </div>
        </div >
    );
}

export default AboutMe;