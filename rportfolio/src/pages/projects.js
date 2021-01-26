import React, { Component } from "react";
import Project from '../components/Project/project';
import work from "../work.json";
import Image from "../components/Image/image";

class Projects extends Component {

    state = {
        work
    };


    render() {
        return (
            <div>
              <Image />
           <h1 style={{color: "white"}}> My Projects </h1>
            {this.state.work.map(party => (
              <Project
                id={party.id}
                key={party.id}
                title={party.title}
                projimage={party.projimage}
                description={party.description}
                projurl={party.projurl}
              />
            ))}
          </div>
            
        )
    }
}

export default Projects;