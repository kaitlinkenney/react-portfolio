import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-pink-100">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <Link to="/"
          className="inflex items-center py-6 px-3 nr-4 text-black hover:text-blue-800 text-4xl font-italic"
            >
            Home
          </Link>
          <Link to="/about"
          className="inflex items-center py-6 px-3 nr-4 text-black hover:text-blue-800 text-4xl font-italic">
            About
          </Link>
          <Link to="/projects"
          className="inflex items-center py-6 px-3 nr-4 text-black hover:text-blue-800 text-4xl font-italic">
            Projects
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;