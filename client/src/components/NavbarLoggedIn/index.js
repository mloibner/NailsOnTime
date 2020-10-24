import React from "react";
import "../style.css";
import logo from "./assets/logo.png"
import {useHistory} from "react-router-dom";

function NavbarMember() {
  const username = "monique"
  const history = useHistory();

  return (<header className="nav">
        <img className="littleLogo" src={logo} alt="Nails on Time logo"></img>
        <nav className="icon">Username<i className="fas fa-user-alt"></i>
        </nav>
    </header>)
};

export default NavbarMember;

