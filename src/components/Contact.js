import React from 'react';
import '../styles/contact.sass';

const Contact = () => {
    return (
        <div id="contact">
            <div className="contactItem" id="getInTouch">
                <div id="getInTouchContainer">
                    <h5>Get It Touch</h5>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div id="adresses">
                        <div className="address">
                            <h4>Seattle</h4>
                            <div className="fullContact">
                                <h5>M2901 Marmora road, Glassgow, Seattle, WA 98122-1090</h5>
                                <p>Phone: (305) 555-4446</p>
                                <p>busyness@example.com</p>
                            </div>
                        </div>
                        <div className="address">
                            <h4>Portland</h4>
                            <div className="fullContact">
                                <h5>M2901 Marmora road, Glassgow, Seattle, WA 98122-1090</h5>
                                <p>Phone: (305) 555-4446</p>
                                <p>busyness@example.com</p>
                            </div>
                        </div>
                        <div className="address">
                            <h4>San Francisco</h4>
                            <div className="fullContact">
                                <h5>M2901 Marmora road, Glassgow, Seattle, WA 98122-1090</h5>
                                <p>Phone: (305) 555-4446</p>
                                <p>busyness@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactItem" id="contactMe">
                <div id="contactMeContainer">
                    <h5>Contact Me</h5>
                    <form action="">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Subject" />
                        <textarea type="textarea" placeholder="Message" />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;