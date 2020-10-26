import React, {useState} from "react";
import "../style.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Footer(){
  const [user] = useState()
  const history = useHistory();
  
  function handleLogOut(e) {
    e.preventDefault();
    axios.get("/api/users/logout").then((res)=>{
        history.push("/login");    
    }).catch((err)=>{
        console.error(err)
    });
  }

  return (
    <footer className="footer">
      <button className="fBtn" onClick={handleLogOut}>Log Out</button>
    </footer>
  );
}

export default Footer;
