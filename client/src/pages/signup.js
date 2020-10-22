import React, { useState, useEffect } from "react";
import NavbarStart from "../components/NavbarStart/index";
import Signup from "../components/Signup/index";


function signUp() {
  // Setting our component's initial state
  const [user, setUser] = useState([])
  const [formObject, setFormObject] = useState({})

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
    <Signup />
  </div>
)

}

export default signUp;
