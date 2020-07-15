import React from 'react';
// import img2 from '../img/2.jpg';
// import img3 from '../img/3.jpg';
import FontAwesome from 'react-fontawesome';
import '../styles/image.sass'

class Image extends React.Component {
    state = {}

    handleClick = (e) => {
        const parentClass = (e.target.parentElement.parentElement.className);
        // console.log(parentClass)
        if (parentClass === 'imageDiv img1') {
            console.log('you clicked first image')
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                <img src={this.props.img} alt="" />
                <div>
                    <FontAwesome
                        onClick={this.handleClick}
                        className="icon"
                        name="plus-circle"
                        size="3x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                </div>
            </div>
        );
    }
}

export default Image;