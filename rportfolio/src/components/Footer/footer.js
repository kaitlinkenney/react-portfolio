import React from "react";
import "./style.css";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";

function Footer() {
  return (
    <footer className="footer mt-36">
      <div>
      <span>
          <p className="p mt-2.5">< a href="mailto:kaitlin.kenney96@gmail.com">kaitlin.kenney96@gmail.com</a> </p>
          
          <a className="icon items-center mr-2.5" style={{float: "left"}} href={'https://github.com/kaitlinkenney'}><GrGithub style={{ height: 35, width: 35}} />Github</a>
          
      
          <a className="iconn mt-12" href={'https://www.linkedin.com/in/kaitlin-kenney-12b01a1a7/'}><GrLinkedin style={{ height: 35, width: 30 }}/>LinkedIn</a>
  
      </span>
      </div>
    </footer>
  
  );
}

export default Footer;