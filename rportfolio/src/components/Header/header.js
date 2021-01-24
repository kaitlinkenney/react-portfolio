import React from "react";

function Header(){
    return(
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <div Name="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div Name="navbar-nav">
        <a Name="nav-link" aria-current="page" href="/">Home</a>
        <a Name="nav-link" href="/about">About</a>
        <a Name="nav-link" href="/projects">Projects</a>
      </div>
    </div>
  </div>
</nav>
        </header>
    )
}

export default Header;