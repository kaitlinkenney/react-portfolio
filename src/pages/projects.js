import React, { Component } from "react";
import Project from '../components/Project/project';
import work from "../work.json";
import Image from "../components/Image/image";
import "./projects.css";

class Projects extends Component {

  state = {
    work
  };

  render() {
    return (
      <div>
        <div className="container projects mt-12">
          {/* <Image /> */}
          <div className="container mt-3 pt-2 pr-36 pb-12 bg-gray-400 opacity-80">
            <div className="container mt-6 pb-6 -pt-6 bg-white shadow-lg">
            <h1 className="row justify-center pt-6 text-5xl"> My Projects </h1>
            </div>
          
          <div className="row mt-12">
            <div className="col-sm-4">
              <Project
                id={work[0].id}
                key={work[0].id}
                title={work[0].title}
                projimage={work[0].projimage}
                description={work[0].description}
                projurl={work[0].projurl}
              />
            </div>
            <div className="col-sm-4">
              <Project
                id={work[1].id}
                key={work[1].id}
                title={work[1].title}
                projimage={work[1].projimage}
                description={work[1].description}
                projurl={work[1].projurl}
              />
            </div>
            <div className="col-sm-4">
              <Project
                id={work[2].id}
                key={work[2].id}
                title={work[2].title}
                projimage={work[2].projimage}
                description={work[2].description}
                projurl={work[2].projurl}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <Project
                id={work[3].id}
                key={work[3].id}
                title={work[3].title}
                projimage={work[3].projimage}
                description={work[3].description}
                projurl={work[3].projurl}
              />
            </div>
            <div className="col-sm-4">
              <Project
                id={work[4].id}
                key={work[4].id}
                title={work[4].title}
                projimage={work[4].projimage}
                description={work[4].description}
                projurl={work[4].projurl}
              />
            </div>
            <div className="col-sm-4">
              <Project
                id={work[5].id}
                key={work[5].id}
                title={work[5].title}
                projimage={work[5].projimage}
                description={work[5].description}
                projurl={work[5].projurl}
              />
                </div>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default Projects;