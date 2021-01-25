import React, { Component } from "react";
import Project from '../components/Project/project';
import work from "../work.json";


class Projects extends Component {

    state = {
        work
    };


    render() {
        return (
            <div>
           <h1> My Projects: </h1>
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