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
          
          <a className="icon items-center mr-2.5" style={{float: "right"}} href={'https://github.com/kaitlinkenney'}><GrGithub className="-pb-6" style={{ height: 39, width: 35}} /></a>
          
      
          <a className="iconn pl-2" style={{float: "right"}} href={'https://www.linkedin.com/in/kaitlin-kenney-12b01a1a7/'}><GrLinkedin className="mr-6 -pb-6" style={{ height: 40, width: 30 }}/></a>
  
      </span>
      </div>
    </footer>
  
  );
}

export default Footer;