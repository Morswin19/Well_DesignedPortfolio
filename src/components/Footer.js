import React from 'react';
import '../styles/footer.sass';
import FontAwesome from 'react-fontawesome';
import pkPhoto from '../img/pkImg.png'

class Footer extends React.Component {
    state = {
    }

    render() {
        return (
            <div id="footer">
                <div id="mainFooter">
                    <div id="footerPhoto"><img src={pkPhoto} alt="" /></div>
                    <div id="footerCopyrightsContainer">
                        <div id="contactSocialsContainer">
                            <div id="contactFootContainer">

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
                            </div>
                            <div id="meSocialsContainer">
                                <div className="navIcon">
                                    <a href="https://www.facebook.com/piotr.kalman" rel="noopener noreferrer" target="_blank">
                                        <FontAwesome
                                            className="icon"
                                            name="facebook"
                                            size="3x"
                                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                        />
                                    </a>
                                </div>
                                <div className="navIcon">
                                    <a href="https://www.linkedin.com/in/piotr-kalman/" rel="noopener noreferrer" target="_blank"
                                    >
                                        <FontAwesome
                                            className="icon"
                                            name="linkedin"
                                            size="3x"
                                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                        />
                                    </a>
                                </div>
                                <div className="navIcon">
                                    <a href="https://github.com/Morswin19" rel="noopener noreferrer" target="_blank"
                                    >
                                        <FontAwesome
                                            className="icon"
                                            name="github"
                                            size="3x"
                                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="copyrights">
                            <p>
                                Piotr Kalman 2020 © all rights reserved
                        </p>
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}

export default Footer;