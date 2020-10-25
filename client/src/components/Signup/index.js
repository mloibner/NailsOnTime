import React, {useState} from "react";
import "../style.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signup() {
    const [user, setUser] = useState({username: "", password: "", email: "", name: "", phone: ""});
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
        <div className="homeDiv">
            <h2 className="heading">Sign Up</h2>
            <form className="signForm" onSubmit={handleSignup}>
                <input required className="input" type="name" value={user.name} onChange={(e)=> {
                    const updatedUser = {...user, name: e.target.value}
                    setUser(updatedUser);
                }} placeholder="Name"></input>
                <input required className="input" type="email" value={user.email} onChange={(e)=> {
                    const updatedUser = {...user, email: e.target.value}
                    setUser(updatedUser);
                }} placeholder ="Email"></input>
                <input required className="input" type="phone" value={user.phone} onChange={(e)=> {
                    const updatedUser = {...user, phone: e.target.value}
                    setUser(updatedUser);
                }} placeholder ="Phone"></input>
                <input required className="input" type="username" value={user.username} onChange={(e)=> {
                    const updatedUser = {...user, username: e.target.value}
                    setUser(updatedUser);
                }} placeholder ="Username"></input>
                <input required className="input" type="password" value={user.password} onChange={(e)=> {
                    const updatedUser = {...user, password: e.target.value}
                    setUser(updatedUser);
                }} placeholder ="Password"></input>    
                <button className="input inputBtn" type="submit">Submit</button>
            </form>
        </div>
    );
}


export default Signup;