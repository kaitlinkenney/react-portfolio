import "./style.css";
import React from 'react';


function Project(props) {
    return (
        <div>
           
            <div className="card mb-24 ml-12 mt-12" style={{width: "80%", height: "300px"}}>
            <img src={props.projimage} className="card-img-top"/>
                <div className="card-body" />
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.projurl} className="btn btn-primary">View App</a>
            </div>
        </div>
    )
}

export default Project;