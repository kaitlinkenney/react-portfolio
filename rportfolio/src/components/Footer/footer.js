import React from "react";
import "./style.css";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";

function Footer() {
  return (
    <footer className="footer">
      <span>
      <a href={'https://github.com/kaitlinkenney'}><GrGithub /></a>
      <a href={'https://www.linkedin.com/in/kaitlin-kenney-12b01a1a7/'}><GrLinkedin/></a>
      </span>
    </footer>
  );
}

export default Footer;