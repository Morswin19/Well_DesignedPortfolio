import React from 'react';
import '../styles/footer.sass';
import FontAwesome from 'react-fontawesome';
// import faStyles from 'font-awesome/css/font-awesome.css';
import pkPhoto from '../img/pkPhotosmall.JPG'

const Footer = () => {
    return (
        <div id="footer">
            <div id="mainFooter">
                <div id="footerPhoto"><img src={pkPhoto} alt="" /></div>
                <div id="contactFoot">
                    <h1>Let's Talk:</h1>
                    <p><FontAwesome
                        className="icon"
                        name="phone"
                        size="lg"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    /> 508 832 713</p>
                    <p><FontAwesome
                        className="icon"
                        name="envelope"
                        size="lg"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />  <a href="mailto:piotr.kalman85@gmail.com">piotr.kalman85@gmail.com</a></p>
                    {/* </div> */}
                </div>
                <div id="meSocialsContainer">
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