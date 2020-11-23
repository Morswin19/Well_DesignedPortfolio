import React from 'react';
import "../styles/projectActive.sass"

const ProjectActive = (props) => {
    const { title, description, list, img, active, link, handleEscapeClick, handleBackgroundClick } = props
    const activeList = list.map(item => <li key={item}>{item}</li>)
    return (
        <div id="projectActive" className={active ? 'projectActive' : 'projectDisactive'} onClick={handleBackgroundClick}>
        <div id="projectContainer">
            <div id="activeBtnText">
                <div id="activeText">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <ul>
                        {activeList}
                    </ul>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer"><button>Show Me</button></a>
                <div id="projectEscape" className={!active ? 'escapeBtnGo' : ''} onClick={handleEscapeClick}>
                    +
                </div>
            </div>
            <div id="activeImg">
                <img src={img} alt="" />
            </div>
        </div>
    </div>
     );
}

export default ProjectActive;