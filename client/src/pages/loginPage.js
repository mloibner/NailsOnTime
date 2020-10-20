import React, { useState, useEffect } from "react";
import NavbarStart from "../components/NavbarStart";
import Login from "../components/Login";

function LoginPage() {
  // Setting our component's initial state
  const [user, setUser] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all users and store them with setUser
  useEffect(() => {
    //function to go here.
  }, [])

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };
  
  function handleFormSubmit(event) {
    event.preventDefault()
  }



return (
  <div>
    <NavbarStart />
    <Login />
  </div>
)

}

export default LoginPage;
