import React from "react";
import Card from "../components/Card/card";
import Image from "../components/Image/image";
import rose from "./rose.png";
import gabby from "./gabbyandme.png";
import cousins from "./cousinsandme.png";
import sunset from "./sunset.png";
import "./style.css";

function Home() {
    return (
        <div>
            <Image />
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={rose} className="d-block w-50" alt="rose">
                        </img>
                    </div>
                    <div className="carousel-item">
                        <img src={gabby} className="d-block w-50" alt="gabby">
                        </img>
                    </div>
                    <div className="carousel-item">
                        <img src={cousins} className="d-block w-50" alt="cousins">
                        </img>
                    </div>
                    <div className="carousel-item">
                        <img src={sunset} className="d-block w-50" alt="sunset">
                        </img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;