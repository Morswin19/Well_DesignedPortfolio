import React from 'react';
import '../styles/footer.sass';
import FontAwesome from 'react-fontawesome';
// import faStyles from 'font-awesome/css/font-awesome.css';

const Footer = () => {
    return (
        <div id="footer">
            <div id="mainFooter">
                <div id="aboutMeFoot">
                    <h3>About Me</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officiis!</p>
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
                <div id="quickLinksFoot">
                    <h3>Quick Links</h3>
                </div>
                <div id="contactFoot">
                    <h3>Contact</h3>
                </div>

            </div>
            <div id="copyrights">
                Piotr Kalman 2020 © all rights reserved

            </div>
        </div >
    );
}

export default Footer;