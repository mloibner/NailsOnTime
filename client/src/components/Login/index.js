import React from "react";
import "./style.css";

function Login() {
   return (<div>
        <h2>Log In</h2>
        <form>
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
        </form>
    </div>)
};

export default Login;
