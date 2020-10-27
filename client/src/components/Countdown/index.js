import React, {useState, useEffect } from "react";
import "../style.css";
import axios from "axios";
import Moment from "react-moment";
import moment from "moment";


function Countdown() { 

  const [user, setUsername] = useState("")

  const [booking, setBooking] = useState({});
  function getUsername() {
  
  
    axios.get("/api/users/me").then((res)=> {
      console.log(res)
      setUsername(res.data.username)
      }).catch((err)=>{
      console.log(err)
    });
  }
  useEffect(() =>{getUsername()})

  function getBooking() {
    axios.get("/api/booking/" + user).then((res)=> {
        console.log(res.data.date)
        setBooking(res.data)
    }).catch((err)=>{
        console.log(err)
    });
  }
useEffect(()=> {
  getBooking();
})

return (
        <div className="homeDiv">
        <h1 className="headingTwo">Nails on time in:</h1>
        <div>
          <Moment from={moment({})}>{booking.date}</Moment>
        </div>
        <h3 className="headingTwo">Rock Up when the Clock Up</h3>
    </div>
    )
   
};

export default Countdown;