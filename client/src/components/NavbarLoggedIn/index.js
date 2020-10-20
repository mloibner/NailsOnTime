import React from "react";
import "./style.css";
import logo from "./assets/logo.png"

function NavbarMember() {
    return (<header>
        <img src={logo} alt="Nails on Time logo"></img>
        <div>
          username <i class="fas fa-user-alt"></i>
        </div>
    </header>)
};

export default NavbarMember;

