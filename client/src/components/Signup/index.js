import React from "react";
import "./style.css";

function Signup() {
    return (
        <div className="signupDiv">
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder ="Name"></input>
                <input type="number" placeholder="Phone"></input>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Create Password">Password</input>
                <input type="password" placeholder="Confirm Password">Password</input>
                <input type="submit"><button>Submit</button></input>
            </form>

        </div>
    );
}

export default Signup;