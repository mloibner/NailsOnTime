import React, {useState} from "react";
import "../style.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
    const [user, setUser] = useState({username: "", password: ""});
    const history = useHistory();
    
    function handleSignin(e) { 
        e.preventDefault();
        axios.post("/api/users/login", user).then((res)=>{
            history.push("/member");    
        }).catch((err)=>{
            console.error(err)
        });
    
    }
    
   return (<div className="loginDiv">
        <h2 className="heading">Log In</h2>
        <form>
            <input type="text" value={user.username} onChange={(e)=> {
                    const updatedUser = {...user, username: e.target.value}
                    setUser(updatedUser);
                }} placeholder="Username"></input>
            <input type="password" value={user.password} onChange={(e)=> {
                    const updatedUser = {...user, password: e.target.value}
                    setUser(updatedUser);
                }} placeholder="Password"></input>
                <div className="loginDiv">
                    <button className="loginBtn" onClick={handleSignin} type="submit">Login</button>
                </div>
        </form>
    </div>)
};

export default Login;
