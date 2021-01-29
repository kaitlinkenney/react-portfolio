import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    // <header className="bg-pink-100">
    //   <div className="container mx-auto">
        <div className="topnav">
          <Link to="/"
          className="homelink"
            >
            Home
          </Link>
          <Link to="/about"
          className="aboutlink">
            About
          </Link>
          <Link to="/projects"
          className="projectslink">
            Projects
          </Link>
        </div>
    //   </div>
    // </header>
  )
}

export default Header;