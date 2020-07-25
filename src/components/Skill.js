import React from 'react';
import "../styles/skill.sass"

const Skill = (props) => {
    return (
        <div className="skill">
            <div className="skillImg"></div>
            <p>{props.name}</p>
        </div>
    );
}

export default Skill;