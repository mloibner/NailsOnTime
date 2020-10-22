import React, {useState} from "react";
import "./style.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signup() {
    const [user, setUser] = useState({username: "", password: ""});
    const history = useHistory();

    function handleSignup(e) { 
        e.preventDefault();
        console.log(user)
        axios.post("/api/users/signup", user).then((res)=>{
            history.push("/login");
        }).catch((err)=>{
            console.error(err)
        });

        }
    return (
        <div className="signupDiv">
            <h2>Sign Up</h2>
            <form>
                <input type="username" value={user.username} onChange={(e)=> {
                    const updatedUser = {...user, username: e.target.value}
                    setUser(updatedUser);
                }} placeholder ="Username"></input>
                <input type="password" value={user.password} onChange={(e)=> {
                    const updatedUser = {...user, password: e.target.value}
                    setUser(updatedUser);
                }} placeholder="Create Password"></input>
                <button onClick={handleSignup} type="submit">Submit</button>
            </form>

        </div>
    );
}


export default Signup;