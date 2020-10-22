import React from "react";
import "./style.css";
import logo from "./assets/logo.png"

function NavbarMember() {
    return (<header>
        <img className="littleLogo" src={logo} alt="Nails on Time logo"></img>
        <nav>
          username <i class="fas fa-user-alt"></i>
        </nav>
    </header>)
};

export default NavbarMember;

