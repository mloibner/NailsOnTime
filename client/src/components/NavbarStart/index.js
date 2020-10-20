import React from "react";
import "./style.css";
import logo from "./assets/logo.png"
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        
        <img src={logo} alt="logo for Nails ontime"></img>
      </a>
    </nav>
  );
}

export default Navbar;
