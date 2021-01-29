import React from "react";
// import Image from "../components/Image/image";
import rose from "./carouselpics/rose.png";
import grads from "./carouselpics/grads.jpg";
import caterpillar from "./carouselpics/caterpillar.jpg";
import sunset from "./carouselpics/sunset.png";
// import cousins from "./carouselpics/cousins.jpg";
import Carousel from 'react-bootstrap/Carousel';
import "./home.css";

function Home() {
    return (
        <div>
            <h1 className="kaitlin pt-12 text-5xl justify-between shadow-inner" style={{color: "white"}}> Hi,  I'm  Kaitlin! </h1>
            {/* <Image /> */}
            <Carousel>
                <Carousel.Item style={{ 'height': "500px" }} >
                    <img style={{ 'height': "500px" }}
                        className="d-block w-50 ml-80 mt-12"
                        src={rose} />
                </Carousel.Item  >
                <Carousel.Item style={{ 'height': "500px" }}>
                    <img style={{ 'height': "500px" }}
                        className="d-block grads w-50 mt-12"
                        src={grads} />
                </Carousel.Item>
                <Carousel.Item style={{ 'height': "500px" }}>
                    <img style={{ 'height': "600px" }}
                        className="d-block caterp w-45 mt-12"
                        src={caterpillar} />
                </Carousel.Item>
                <Carousel.Item style={{ 'height': "500px" }} >
                    <img style={{ 'height': "500px" }}
                        className="d-block sunset w-50 ml-72 mt-12"
                        src={sunset} />
                </Carousel.Item  >
            </Carousel>
        </div>
    )
}

export default Home;