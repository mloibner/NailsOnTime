import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

function HomePg() {
    const history = useHistory();
    return (
        <div className="homeDiv">
            <button className="signUp" onClick={()=>{
                history.push("/signup");
            }}>Sign Up</button>
            <button className="logIn" onClick={()=>{
                history.push("/login");
            }}>Login</button>
        </div>
    )
}

export default HomePg;