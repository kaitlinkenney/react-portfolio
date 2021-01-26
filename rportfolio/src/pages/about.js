import React from 'react';
import Image from "../components/Image/image";


function About(){
    return(
        <div className="card ml-28 mr-28 mt-12 mb-12" style={{ width: "1050px", background: "#215", height: "400px"}}>
        {/* <div className="container-fluid mt-12 mb-12" style={{background:"#215"}}> */}
             <Image/>
                <h1 style={{color: "white"}}> About Me </h1>
                <p style={{color: "white"}}>  I am a graduate of Rutgers Coding Bootcamp in Full Stack Web Development.
                I currently work as an online ESL (English as a second language) teacher in my spare time.
                Previously, I have attended Rutgers University as a psychology major and Camden County College, where I obtained my degree in Science (Pre-Nursing Specialty).
                I have experience in various different customer service positions that I have worked in
                throughout school. I am a full stack web developer who likes to problem solve. I hope to continuously build on my knowledge and
                skill set. </p>
                <p style={{color: "white"}}> I have experience working both alone and in groups to achieve goals in coding projects.
                 In my group projects, I have participated in both front and back end work, but spent the most time working in back end.
                Some technologies I am familiar with include HTML5, CSS, Javascript, Bootstrap, Materialize, ES6+, NodeJS, Express, MySQL, Sequelize, MongoDB, and React. </p>
        </div>
    )
}

export default About;