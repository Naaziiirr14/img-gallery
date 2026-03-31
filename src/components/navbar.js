
import React from "react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <h1 className="navbar-title">Image Gallery</h1>
        <nav className="navbar-links" aria-label="Main menu">
          <a className="navbar-link" href="#gallery">
            Gallery
          </a>
          <a className="navbar-link" href="#about">
            About us
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
