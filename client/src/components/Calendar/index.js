import React, {useEffect, useState} from 'react';
import "../style.css"
import moment from "moment";
import DatePicker from 'react-date-picker';
import axios from "axios";
import {useHistory} from "react-router-dom";
import Moment from 'react-moment';


function Calendar(){

  const [booking, setBooking] = useState({salon: "", technician: "", date: "", username: ""});
  const history = useHistory();
  const [user, setUsername] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  function getUsername() {
  
  
    axios.get("/api/users/me").then((res)=> {
      console.log(res)
      setUsername(res.data.username)
      }).catch((err)=>{
      console.log(err)
    });
  }
    function handleBooking() {
        axios.post("/api/booking/book", {...booking, username: user}).then((res)=>{
          history.push("/member");
          console.log(booking)
      }).catch((err)=>{
          console.error(err)
      });
    }

useEffect(() =>{getUsername()})


console.log( startDate)
console.log(booking)
  return (
    <div className="homeDiv booking">
        <h1 className="headingThree">Book Appointment</h1>
        <form className="font">
          <label for="salon">Salon</label>
          <select id="salon" name="salon" className="salInput" onChange={(e)=>{
            const updateSalon = {...booking, salon: e.target.value}
            setBooking(updateSalon);
            }}>
            <option value="">Select</option>
            <option value="Glo Nails Drummoyne">Glo Nails Drummoyne</option>
            <option value="Ben's Nails Five Dock">Ben's Nails Five Dock</option>
          </select>
        </form>
        <form className="font" >
          <label for="technician">Technician</label>
          <select id="technician" name="technician" className="salInput" onChange={(e)=>{
            const updateTechnician = {...booking, technician: e.target.value}
            setBooking(updateTechnician)
            }}>
            <option value="">Select</option>
            <option value="rachel">Rachel</option>
            <option value="anna">Anna</option>
            <option value="lucky">Lucky</option>
            <option value="tina">Tina</option>
          </select>
        </form>  
      <DatePicker
        selected={startDate}

        onChange={

          (e)=>{

          let setDate=(date)=>{setStartDate(date)}; 
          setDate(e);
          


          let bookingDate=(e)=>{setBooking({...booking, date: JSON.stringify(e+1)})};
          bookingDate(e);
          
        }}
        
        value={startDate}
        minDate={moment().toDate()} 
        onSelect={()=>{
          let updateDate = {date: startDate}
          setBooking(updateDate)}}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <div className="btnNext">
        <button type="submit" onClick={handleBooking} className="btnNext">Book</button>
      </div>
    </div>
  );

}



export default Calendar;