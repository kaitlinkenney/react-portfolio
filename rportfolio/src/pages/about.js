import React from 'react';
import Image from "../components/Image/image";
import { DiStreamline } from "react-icons/di";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BiBadgeCheck } from "react-icons/bi";

function About() {
    return (


        // <div className="card ml-28 mr-28 mt-12 mb-12" style={{ width: "1050px", background: "#215", height: "400px"}}>
        <div className="container pt-4 mt-12 opacity-80" style={{background: "#215"}}>
            <Image />
            <div className="container shadow-lg bg-gray-200 pt-2.5 mt-2.5">
                <h1 > Skills Overview </h1>
                <p >  I am a graduate of Rutgers Coding Bootcamp in Full Stack Web Development.
                I currently teach ESL (English as a second language) online in my spare time.
                Previously, I have attended Rutgers University with a major in psychology and Camden County College, where I obtained my degree in Science (Pre-Nursing Specialty).
                I have experience in various different customer service positions that I have worked in
                throughout school. I am a full stack web developer who likes to problem solve. I hope to continuously build on my knowledge and
                skill set. </p>
                <p className="pb-2"> <a href="https://docs.google.com/document/d/1wnHaEFWsO2BqsGK51IQHHZROhXPmVo6s2M1gN6VSUFE/edit"> View my resume here!</a>
                </p>
            </div>
            <div className="row">
                <div className="container shadow-lg ml-12 mt-2.5 bg-gray-200" style={{ width: "500px" }}>
                    {/* <div className="card-body"> */}
                    <HiOutlineDesktopComputer className="mx-auto" style={{ height: 35, width: 35 }} />
                    <div className="row justify-center">
                        <h3> Front End</h3>
                    </div>
                    <div className="row justify-center">
                        < BiBadgeCheck style={{ height: 25 }} /> HTML5
                        </div>
                    <div className="row justify-center">
                        < BiBadgeCheck style={{ height: 25 }} /> CSS3
                        </div>
                    <div className="row justify-center">
                        < BiBadgeCheck style={{ height: 25 }} /> Bootstrap
                        </div>
                    <div className="row justify-center">
                        < BiBadgeCheck style={{ height: 25 }} /> Materialize
                        </div>
                    <div className="row justify-center">
                        < BiBadgeCheck style={{ height: 25 }} /> TailwindCss
                        </div>
                    <div className="row justify-center">
                        < BiBadgeCheck style={{ height: 25 }} /> React
                        </div>
                    {/* </div> */}
                </div>
                <div className="container shadow-lg mt-2.5 bg-gray-200" style={{ width: "500px" }}>
                    {/* <div className="card-body"> */}
                    <DiStreamline className="mx-auto" style={{ height: 35, width: 35 }} />
                    <div className="row justify-center">
                        <h3> Back End</h3>
                    </div>
                    <div className="row justify-center">
                        < BiBadgeCheck style={{ height: 25 }} /> Node
                        </div>
                    <div className="row justify-center">
                        < BiBadgeCheck style={{ height: 25 }} /> Express
                        </div>
                    <div className="row justify-center">
                        < BiBadgeCheck style={{ height: 25 }} /> MySQL
                        </div>
                    <div className="row justify-center">
                        < BiBadgeCheck style={{ height: 25 }} /> Sequelize
                        </div>
                    <div className="row justify-center">
                        < BiBadgeCheck style={{ height: 25 }} /> MongoDB
                        </div>

                    {/* </div> */}
                </div>
            </div>
            {/* <p style={{color: "white"}}> I have experience working both alone and in groups to achieve goals in coding projects.
                 In my group projects, I have participated in both front and back end work, but spent the most time working in back end.
                Some technologies I am familiar with include HTML5, CSS, Javascript, Bootstrap, Materialize, Tailwind CSS, ES6+, NodeJS, Express, MySQL, Sequelize, MongoDB, and React. </p> */}
            {/* </div> */}
        </div>
    )
}

export default About;