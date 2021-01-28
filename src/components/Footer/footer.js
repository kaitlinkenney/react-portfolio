import React from "react";
import "./style.css";
import { GrGithub, GrMail } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";

function Footer() {
  return (
    <footer className="footer mt-36">
      <div>
      <span>
          
          <a className="icon mr-2.5" style={{float: "right"}} href={'https://github.com/kaitlinkenney'}><GrGithub className="-pb-6" style={{ height: 39, width: 35}} /></a>
          <a className="iconn pl-2" style={{float: "right"}} href={'https://www.linkedin.com/in/kaitlin-kenney-12b01a1a7/'}><GrLinkedin className="mr-2 -pb-6" style={{ height: 40, width: 30 }}/></a>
          <a className="iconnn" style={{float: "right"}} href={"mailto:kaitlin.kenney96@gmail.com"}><GrMail className="pb-2" style={{height: 50, width: 35}}/></a>
      </span>
      </div>
    </footer>
  
  );
}

export default Footer;