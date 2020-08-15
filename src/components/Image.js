import React from 'react';
// import img2 from '../img/2.jpg';
// import img3 from '../img/3.jpg';
import FontAwesome from 'react-fontawesome';
import '../styles/image.sass'

class Image extends React.Component {
    state = {}

    render() {
        const { img, className, mainName } = this.props
        return (
            <div className={className}>
                <img src={img} alt="" />
                <div className="imageContainer">
                    <FontAwesome
                        onClick={this.props.handleClick}
                        className="icon"
                        name="plus-circle"
                        size="3x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                    <div className="imageText">
                        <h2>{mainName}</h2>
                        <h4>Second Name</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Image;