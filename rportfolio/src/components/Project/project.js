import "./style.css";
import React from 'react';


function Project(props) {
    return (
        <div>
           
            <div className="card mb-24 ml-12 mt-12" style={{width: "80%", height: "400px"}}>
            <img src={props.projimage} className="card-img-top"/>
                <div className="card-body" />
                <h5 className="card-title mb-96 -mt-8 pl-2 pr-2">{props.title}</h5>
                <p className="card-text pl-2 pr-2">{props.description}</p>
                <a href={props.projurl} className="btn btn-primary">Go!</a>
            </div>
        </div>
    )
}

export default Project;