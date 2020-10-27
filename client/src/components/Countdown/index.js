import React, {useState, useEffect } from "react";
import "../style.css";
import axios from "axios";
import Moment from "react-moment";
import moment from "moment";
import { useHistory } from "react-router-dom"


function Countdown() { 
  const history = useHistory();
  const [user, setUsername] = useState("")
  const [booking, setBooking] = useState({});
     
    
  function createNewBook() {
    history.push("/booking");
    console.log("page changed")
  } 
    
  function getUsername() {
  
    axios.get("/api/users/me", user).then((res)=> {
      console.log(res)
      setUsername(res.data.username)
      getBooking(res.data.username)
      }).catch((err)=>{
      console.log(err)
    });
  }

  function getBooking(user) {
    axios.get("/api/booking/" + user, booking).then((res)=> {
        console.log(res.data.date)
        setBooking(res.data)
    }).catch((err)=>{
        console.log(err)
    });
  }
  useEffect(()=> { getUsername() }, [])

if (!booking) {
return (
  <div className="homeDiv">
      <h1 className="headingTwo">You have no bookings yet! Make a booking below:</h1>
      <button className="btn" onClick={createNewBook}>New Booking</button>
  </div>
)} else return (
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

