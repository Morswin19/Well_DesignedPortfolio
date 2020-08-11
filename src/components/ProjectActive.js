import React from 'react';
import "../styles/projectActive.sass"

class ProjectActive extends React.Component {
    state = {}
    render() {
        const { title, list, img } = this.props
        const activeList = list.map(item => <li key={item}>{item}</li>)
        return (
            <div id="projectActive">
                <div id="projectContainer">
                    <div id="activeText">
                        <h1>{this.props.title}</h1>
                        <ul>
                            {activeList}
                        </ul>
                    </div>
                    <div id="activeImg">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectActive;