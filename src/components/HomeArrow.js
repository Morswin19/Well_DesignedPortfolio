import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../styles/homeArrow.sass';

class HomeArrow extends React.Component {
    state = {
        visible: false
    }

    //home arrow click to return to home
    handleArrowClick = (e) => {
        e.preventDefault()
        window.scrollTo = (0, 0);
    }

    //function to don't see the home arrow when scroll is on header
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
        window.addEventListener('scroll', this.handleHomeArrowVisible);
    }

    render() {
        const { visible } = this.state
        return (
            <div>
                {
                    // when onload window width < 900px, i don't want to see home arrow
                    (visible === true && window.innerWidth >= 900
                    ) &&
                    < a href="/#"
                        className="homeArrow" >
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


