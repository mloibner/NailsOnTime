import React from "react";
import "./style.css";

function Signup() {
    return (
        <div className="signupDiv">
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder ="Name"></input>
                <input type="text" placeholder="Phone"></input>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Create Password"></input>
                <input type="password" placeholder="Confirm Password"></input>
                <input type="submit"></input>
            </form>

        </div>
    );
}

export default Signup;