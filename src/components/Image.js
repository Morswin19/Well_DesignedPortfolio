import React from 'react';
// import img2 from '../img/2.jpg';
// import img3 from '../img/3.jpg';
import FontAwesome from 'react-fontawesome';
import '../styles/image.sass'

class Image extends React.Component {
    state = {}

    // handleClick = (e) => {
    //     const parentClass = (e.target.parentElement.parentElement.className);
    //     // console.log(parentClass)
    //     if (parentClass === 'imageDiv img1') {
    //         console.log(e)
    //     }
    // }

    render() {
        const { section, img, className, mainName } = this.props
        return (
            <div className={className}>
                {(section === 'project' || section === 'aboutMe') &&
                    <img src={img} alt="" />
                }
                <div className="imageContainer">
                    {(section === 'project' || section === 'aboutMe') ?
                        <FontAwesome
                            onClick={this.props.handleClick}
                            className="icon"
                            name="plus-circle"
                            size="3x"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                        :
                        <img src={img} alt="" />
                    }
                    {(section === 'project' || section === "skills") &&
                        <div className="imageText">
                            <h2>{mainName}</h2>
                            <h4>Second Name</h4>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Image;