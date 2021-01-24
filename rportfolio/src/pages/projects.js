import React from 'react';
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Project from '../components/Project/project';
import { useBoolean } from "react-hanger";

function Projects (){
    const showProject = useBoolean(false);

    return(
        <div>
            <Header />
            <div className="container">
                <h3> My Projects: </h3>
                <button
                onClick={() => {
                    showProject.toggle();}}>
                    FiveWire Music
                </button>
                <button
                onClick={() => {
                    showProject.toggle();}}>
                    Eat-Da-Burger
                </button>
                <button
                onClick={() => {
                    showProject.toggle();}}>
                    SmrtTrvl
                </button>
                <button
                onClick={() => {
                    showProject.toggle();}}>
                    Employee Tracker
                </button>
                <button
                onClick={() => {
                    showProject.toggle();}}>
                    Note Taker
                </button>
                <button
                onClick={() => {
                    showProject.toggle();}}>
                    Workout Tracker
                </button>
                <div className="response">
          {showProject.value ? (
            <Project />
          ) : null}
        </div>
                </div>
            <Footer />
        </div>
    )
}

export default Projects;