import React from 'react';
import '../styles/image.sass';

class Image extends React.Component {
  state = {};

  render() {
    const { img, className, mainName, description1, description2 } = this.props;
    return (
      <div id={mainName} className={className}>
        <img src={img} alt='' />
        <div className='imageContainer'>
          <div className='plusIcon' onClick={this.props.handleClick}>
            +
          </div>
          <div className='imageText'>
            <h2>{mainName}</h2>
            <h4>{description1}</h4>
            <h4>{description2}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Image;
