import React from "react";
import "./style.css";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";

function Footer() {
  return (
    <footer className="footer">
      <div>

      <span>
     
          <a href={'https://github.com/kaitlinkenney'}><GrGithub style={{ height: 35, width: 35 }} /></a>
          <a href={'https://www.linkedin.com/in/kaitlin-kenney-12b01a1a7/'}><GrLinkedin style={{ height: 30, width: 30 }} /></a>
       
      </span>
      </div>
    </footer>
  
  );
}

export default Footer;