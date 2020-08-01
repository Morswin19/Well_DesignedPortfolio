import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../styles/homeArrow.sass';

class HomeArrow extends React.Component {
    state = {
        visible: false
    }

    handleArrowClick = () => {
        window.scrollTo = (0, 0);
    }

    handleHomeArrowVisible = () => {
        if (window.pageYOffset >= 200 && this.state.visible === false) {
            this.setState({
                visible: true
            })
        } else if (window.pageYOffset < 200 && this.state.visible === true)
            this.setState({
                visible: false
            })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleHomeArrowVisible)
    }

    render() {
        const { visible } = this.state
        return (
            <div>
                {
                    (visible === true
                        && window.innerWidth >= 900
                    ) &&
                    < a href="/#" onClick={this.handleArrowClick()} className="homeArrow" >
                        <FontAwesome
                            className="icon"
                            name="arrow-up"
                            size="lg"
                        />
                    </a>
                }
            </div>
        );
    }
}

export default HomeArrow;


