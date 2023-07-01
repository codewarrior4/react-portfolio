import React from 'react';
import './index.css';

function Project(props) {
  return (
    <div className="portfolioCard">
        <img className="projectImage" src={props.image}/>
        <h3>{props.name}</h3>
        <p>
            {props.description}
        </p>
        <div className="tags">
            { props.deployed ? (
        <a href={props.deployed} target="_blank">
            <img className="logo" src={require("./assets/visit.png")} width="8%"/>
        </a>
        ) : <div></div>}
            <a href={props.github} target="_blank">
                <img className="logo" src={require("./assets/GitHubLogo.png")} width="8%"/>
            </a> 
        </div>
        <div>
            <code>
                {props.code}
            </code>
        </div>
    </div>
  );
}

export default Project;