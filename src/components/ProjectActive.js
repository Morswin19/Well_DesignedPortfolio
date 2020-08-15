import React from 'react';
import "../styles/projectActive.sass"
import FontAwesome from 'react-fontawesome';

class ProjectActive extends React.Component {
    state = {

    }

    render() {
        const { title, list, img, active, link, handleEscapeClick, handleBackgroundClick } = this.props
        const activeList = list.map(item => <li key={item}>{item}</li>)
        return (
            <div id="projectActive" className={active ? 'projectActive' : 'projectDisactive'} onClick={handleBackgroundClick}>
                <div id="projectContainer">
                    <div id="activeText">
                        <h1>{title}</h1>
                        <ul>
                            {activeList}
                        </ul>
                        {window.innerWidth > 900 &&
                            <a href={link} target="_blank" rel="noopener noreferrer"><button>Go To Project</button></a>
                        }
                    </div>
                    <div id="activeImg">
                        <img src={img} alt="" />
                    </div>
                    {window.innerWidth <= 900 &&
                        <a href={link} target="_blank" rel="noopener noreferrer"><button>Go To Project</button></a>
                    }
                    <div id="projectEscape" onClick={handleEscapeClick}>
                        <FontAwesome
                            className="icon"
                            name="times"
                            size="lg"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectActive;