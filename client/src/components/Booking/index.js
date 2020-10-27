import React, {useEffect, useState} from "react";
import "../style.css";
import {useHistory} from "react-router-dom";
import axios from "axios";
import DatePicker from "react-date-picker";

function BookingPage() {

  const [user, setUsername] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [booking, setBooking] = useState({});
  const [time, setTime] = useState({})
  const history = useHistory();
  
  function getUsername() {
    axios.get("/api/users/me", user).then((res)=> {
      console.log(res)
      setUsername(res.data.username)
      }).catch((err)=>{
      console.log(err)
    });
  }

  function getBooking() {
    axios.get("/api/bookings/" + user, booking).then((res)=> {
        console.log(res.body.date)
        setBooking(res.body)
    }).catch((err)=>{
        console.log(err)
    });
  }

  function getTime() {
    axios.put("api/booking/change/" + user, booking).then((res) => {
      console.log(res.body)
      history.push("/member");
    })
  }

  useEffect(()=> getUsername, getBooking, getTime)

  return (
    <div className="homeDiv">   
      <h1 className="headingFour">Book a time</h1>
      <div className="scheduleSal">{booking.salon}</div>
      <div className="scheduleSal">{booking.technician}</div>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
      <div className="btnNext">
        <button type="submit" onClick={getTime} className="btnNext">Book</button>
      </div>
    </div>
  );
};

export default BookingPage;