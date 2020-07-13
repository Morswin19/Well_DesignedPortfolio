import React from 'react';
import '../styles/footer.sass';
import FontAwesome from 'react-fontawesome';
// import faStyles from 'font-awesome/css/font-awesome.css';

const Footer = () => {
    return (
        <div id="footer">
            <div id="mainFooter">
                <div id="meSocialsContainer">
                    <div id="aboutMeFoot">
                        <h3>About Me</h3>
                        <p>I love Guinea Pigs and Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officiis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, tenetur.</p>
                    </div>
                    <div id="socialsFoot">
                        <FontAwesome
                            className="icon"
                            name="github"
                            size="3x"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                        <FontAwesome
                            className="icon"
                            name="linkedin"
                            size="3x"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                        <FontAwesome
                            className="icon"
                            name="facebook-square"
                            size="3x"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                    </div>
                </div>
                {/* <div id="linksContactContainer"> */}
                <div id="quickLinksFoot">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Projects</li>
                        <li>Skills</li>
                        <li>Contact Me</li>
                    </ul>
                </div>
                <div id="contactFoot">
                    <h3>Contact</h3>
                    <p><FontAwesome
                        className="icon"
                        name="phone"
                        size="1x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    /> 508 832 713</p>
                    <p><FontAwesome
                        className="icon"
                        name="envelope"
                        size="1x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />  piotr.kalman85@gmail.com</p>
                    {/* </div> */}
                </div>

            </div>
            <div id="copyrights">
                <p>
                    Piotr Kalman 2020 © all rights reserved
                </p>
            </div>
        </div >
    );
}

export default Footer;