import React, {useState, useEffect} from "react";
import "../style.css";
import logo from "./assets/logo.png"
import {useHistory} from "react-router-dom";
import axios from "axios";

function NavbarMember() {
  const [user, setUsername] = useState("")
  const history = useHistory();

  function currentUserName() {
    axios.get("/api/users/me").then((res)=> {
      console.log(res)
      setUsername(res.data.username)
    }).catch((err)=>{
      console.log(err)
    });
  }

  useEffect(()=> {
    currentUserName()
  });
  

  return (<header className="nav">
        <img className="littleLogo" src={logo} alt="Nails on Time logo"></img>
        <nav className="icon" onClick={()=> {
          history.push("/member")
        }}>{user}<i className="fas fa-user-alt"></i>
        </nav>
    </header>)
};

export default NavbarMember;

