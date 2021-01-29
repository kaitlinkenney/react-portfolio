import "./style.css";
import React from 'react';


function Project(props) {
    return (
        <div className="container projectcontainer">
           
            <div className="card shadow" style={{width: "85%", height: "430px"}}>
            <img src={props.projimage} className="card-img-top"/>
                <div className="card-body" />
                <h5 className="card-title mt-n4 ml-2">{props.title}</h5>
                <p className="card-text pl-2 pr-2">{props.description}</p>
                <a href={props.projurl} className="btn btn-primary">Go!</a>
            </div>
        </div>
    )
}

export default Project;