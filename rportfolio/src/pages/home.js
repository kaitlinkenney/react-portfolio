import React from "react";
import Image from "../components/Image/image";
import rose from "./carouselpics/rose.png";
import grads from "./carouselpics/grads.jpg";
import caterpillar from "./carouselpics/caterpillar.jpg";
import sunset from "./carouselpics/sunset.png";
import Carousel from 'react-bootstrap/Carousel';
import "./home.css";

function Home() {
    return (
        <div>
            <h1 className="kaitlin pt-12 text-5xl" style={{color: "white"}}> Hi, I'm Kaitlin! </h1>
            <Image />
            <Carousel>
                <Carousel.Item style={{ 'height': "500px" }} >
                    <img style={{ 'height': "500px" }}
                        className="d-block w-50 ml-80 mt-12"
                        src={rose} />
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item  >
                <Carousel.Item style={{ 'height': "500px" }}>
                    <img style={{ 'height': "500px" }}
                        className="d-block w-50 ml-72 mt-12"
                        src={grads} />
                    <Carousel.Caption>
                      
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ 'height': "500px" }}>
                    <img style={{ 'height': "600px" }}
                        className="d-block caterp w-45 mt-12"
                        src={caterpillar} />
                    <Carousel.Caption>
                      
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ 'height': "500px" }} >
                    <img style={{ 'height': "500px" }}
                        className="d-block w-50 ml-72 mt-12"
                        src={sunset} />
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item  >
            </Carousel>
        </div>
    )
}

export default Home;