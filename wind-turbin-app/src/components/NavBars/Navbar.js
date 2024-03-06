import React from "react";
import "../../styles/Navbar.css";

// TODO: Add routers to the links

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">SLM Analysis</a>
        </li>
        <li className="nav-item">
          <a href="#">Simulations</a>
        </li>
        <li className="nav-item">
          <a href="#">About</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
